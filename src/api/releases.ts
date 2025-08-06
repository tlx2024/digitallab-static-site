// GitHub Releases API接口模块
// 提供与GitHub API交互的功能，用于获取发布信息

import { Version, PlatformDownload } from '../data/versions';
import { PlatformType, ArchitectureType } from '../utils/platformDetection';
import { convertToOTAFormat, OTAVersionInfo } from '../utils/otaCompatibility';

// GitHub API响应接口
export interface GitHubRelease {
  id: number;
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  prerelease: boolean;
  draft: boolean;
  assets: GitHubAsset[];
}

export interface GitHubAsset {
  id: number;
  name: string;
  size: number;
  download_count: number;
  browser_download_url: string;
  content_type: string;
}

// API配置
const GITHUB_API_BASE = 'https://api.github.com';
const GITHUB_REPO = 'tlx2024/DigitalLab';
const RELEASES_ENDPOINT = `${GITHUB_API_BASE}/repos/${GITHUB_REPO}/releases`;

/**
 * 获取GitHub仓库的所有发布版本
 * @param includePrerelease 是否包含预发布版本
 * @returns Promise<GitHubRelease[]>
 */
export const fetchGitHubReleases = async (includePrerelease: boolean = false): Promise<GitHubRelease[]> => {
  try {
    const response = await fetch(RELEASES_ENDPOINT);
    if (!response.ok) {
      throw new Error(`GitHub API请求失败: ${response.status} ${response.statusText}`);
    }
    
    const releases: GitHubRelease[] = await response.json();
    
    // 过滤草稿和预发布版本（如果不需要）
    return releases.filter(release => {
      if (release.draft) return false;
      if (!includePrerelease && release.prerelease) return false;
      return true;
    });
  } catch (error) {
    console.error('获取GitHub发布版本失败:', error);
    throw error;
  }
};

/**
 * 获取最新的发布版本
 * @param includePrerelease 是否包含预发布版本
 * @returns Promise<GitHubRelease | null>
 */
export const fetchLatestRelease = async (includePrerelease: boolean = false): Promise<GitHubRelease | null> => {
  try {
    const releases = await fetchGitHubReleases(includePrerelease);
    return releases.length > 0 ? releases[0] : null;
  } catch (error) {
    console.error('获取最新发布版本失败:', error);
    return null;
  }
};

/**
 * 根据平台和架构匹配GitHub资产文件
 * @param assets GitHub资产列表
 * @param platform 平台类型
 * @param architecture 架构类型
 * @returns 匹配的资产文件
 */
export const matchPlatformAsset = (
  assets: GitHubAsset[],
  platform: PlatformType,
  architecture: ArchitectureType
): GitHubAsset | null => {
  // 定义平台匹配模式（与DigitalLab OTA系统保持一致）
  const platformPatterns: Record<string, RegExp[]> = {
    'Windows-x64': [/windows.*x64/i, /win.*x64/i, /windows.*64/i],
    'Windows-ARM64': [/windows.*arm64/i, /win.*arm64/i],
    'Linux-x64': [/linux.*x64/i, /linux.*64/i],
    'Linux-ARM64': [/linux.*arm64/i, /linux.*aarch64/i],
    'macOS-x64': [/macos.*x64/i, /darwin.*x64/i, /osx.*x64/i],
    'macOS-ARM64': [/macos.*arm64/i, /darwin.*arm64/i, /osx.*arm64/i]
  };
  
  const platformKey = `${platform}-${architecture}`;
  const patterns = platformPatterns[platformKey];
  
  if (!patterns) {
    return null;
  }
  
  // 查找匹配的资产文件
  for (const pattern of patterns) {
    const matchedAsset = assets.find(asset => pattern.test(asset.name));
    if (matchedAsset) {
      return matchedAsset;
    }
  }
  
  return null;
};

/**
 * 将GitHub发布信息转换为应用版本格式
 * @param release GitHub发布信息
 * @returns 应用版本信息
 */
export const convertGitHubReleaseToVersion = (release: GitHubRelease): Version => {
  // 生成平台下载链接
  const platformDownloads: PlatformDownload[] = [];
  
  const platforms: Array<{platform: PlatformType, arch: ArchitectureType}> = [
    { platform: 'Windows', arch: 'x64' },
    { platform: 'Linux', arch: 'x64' },
    { platform: 'macOS', arch: 'x64' }
  ];
  
  platforms.forEach(({ platform, arch }) => {
    // 只处理支持的平台类型
    if (platform !== 'Unknown' && arch !== 'Unknown') {
      const asset = matchPlatformAsset(release.assets, platform, arch);
      if (asset) {
        platformDownloads.push({
          platform,
          architecture: arch,
          download_url: asset.browser_download_url,
          file_size: formatBytes(asset.size),
          file_extension: getFileExtension(asset.name)
        });
      }
    }
  });
  
  // 默认下载链接（Windows x64）
  const defaultAsset = matchPlatformAsset(release.assets, 'Windows', 'x64');
  const defaultDownloadUrl = defaultAsset?.browser_download_url || 
    `https://github.com/${GITHUB_REPO}/releases/download/${release.tag_name}/DigitalLab-${release.tag_name}-Windows-x64.zip`;
  
  return {
    id: release.id.toString(),
    version: release.tag_name,
    release_date: release.published_at,
    download_url: defaultDownloadUrl,
    file_size: defaultAsset ? formatBytes(defaultAsset.size) : '未知',
    release_notes: release.body || release.name,
    is_latest: false, // 需要在获取所有版本后设置
    platform_downloads: platformDownloads,
    build_date: release.published_at,
    build_number: release.id.toString(),
    description: release.body || release.name,
    channel: release.prerelease ? 'beta' : 'stable',
    is_prerelease: release.prerelease,
    package_size: defaultAsset?.size || 0,
    change_log: parseChangeLog(release.body || '')
  };
};

/**
 * 格式化字节数为可读格式
 * @param bytes 字节数
 * @returns 格式化的字符串
 */
const formatBytes = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

/**
 * 获取文件扩展名
 * @param filename 文件名
 * @returns 文件扩展名
 */
const getFileExtension = (filename: string): string => {
  const parts = filename.split('.');
  if (parts.length < 2) return '';
  
  // 处理 .tar.gz 等复合扩展名
  if (parts.length >= 3 && parts[parts.length - 2] === 'tar') {
    return `.${parts[parts.length - 2]}.${parts[parts.length - 1]}`;
  }
  
  return `.${parts[parts.length - 1]}`;
};

/**
 * 解析更新日志
 * @param body 发布说明内容
 * @returns 更新日志数组
 */
const parseChangeLog = (body: string): string[] => {
  if (!body) return [];
  
  // 尝试解析Markdown列表格式
  const lines = body.split('\n');
  const changeLog: string[] = [];
  
  for (const line of lines) {
    const trimmed = line.trim();
    // 匹配 Markdown 列表项
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      changeLog.push(trimmed.substring(2).trim());
    } else if (trimmed.match(/^\d+\./)) {
      // 匹配数字列表项
      changeLog.push(trimmed.replace(/^\d+\.\s*/, ''));
    }
  }
  
  // 如果没有找到列表项，将整个内容作为单个条目
  if (changeLog.length === 0 && body.trim()) {
    changeLog.push(body.trim());
  }
  
  return changeLog;
};

/**
 * 获取所有版本并转换为应用格式
 * @param includePrerelease 是否包含预发布版本
 * @returns Promise<Version[]>
 */
export const fetchAllVersions = async (includePrerelease: boolean = false): Promise<Version[]> => {
  try {
    const releases = await fetchGitHubReleases(includePrerelease);
    const versions = releases.map(convertGitHubReleaseToVersion);
    
    // 设置最新版本标记
    if (versions.length > 0) {
      versions[0].is_latest = true;
    }
    
    return versions;
  } catch (error) {
    console.error('获取所有版本失败:', error);
    return [];
  }
};

/**
 * 获取OTA格式的版本信息
 * @param platform 平台类型
 * @param architecture 架构类型
 * @param includePrerelease 是否包含预发布版本
 * @returns Promise<OTAVersionInfo[]>
 */
export const fetchOTAVersions = async (
  platform: PlatformType = 'Windows',
  architecture: ArchitectureType = 'x64',
  includePrerelease: boolean = false
): Promise<OTAVersionInfo[]> => {
  try {
    const versions = await fetchAllVersions(includePrerelease);
    return versions.map(version => convertToOTAFormat(version, platform, architecture));
  } catch (error) {
    console.error('获取OTA版本信息失败:', error);
    return [];
  }
};

/**
 * 检查GitHub API速率限制
 * @returns Promise<{limit: number, remaining: number, reset: number}>
 */
export const checkRateLimit = async (): Promise<{limit: number, remaining: number, reset: number}> => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/rate_limit`);
    const data = await response.json();
    return {
      limit: data.rate.limit,
      remaining: data.rate.remaining,
      reset: data.rate.reset
    };
  } catch (error) {
    console.error('检查API速率限制失败:', error);
    return { limit: 0, remaining: 0, reset: 0 };
  }
};