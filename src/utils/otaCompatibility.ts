// OTA兼容性工具模块
// 提供与DigitalLab OTA系统兼容的功能和数据转换

import { Version, PlatformDownload } from '../data/versions';
import { PlatformType, ArchitectureType, generatePlatformIdentifier } from './platformDetection';

// OTA系统使用的版本信息接口
export interface OTAVersionInfo {
  version: string;
  build_date: string;
  build_number: string;
  description: string;
  download_url: string;
  file_size: number;
  channel: string;
  is_prerelease: boolean;
  platform_pattern: string;
  change_log: string[];
}

// OTA系统使用的平台模式映射
export const OTA_PLATFORM_PATTERNS = {
  'Windows-x64': 'Windows-x64',
  'Windows-ARM64': 'Windows-ARM64',
  'Linux-x64': 'Linux-x64',
  'Linux-ARM64': 'Linux-ARM64',
  'macOS-x64': 'macOS-x64',
  'macOS-ARM64': 'macOS-ARM64'
} as const;

/**
 * 将静态版本数据转换为OTA兼容格式
 * @param version 静态版本数据
 * @param platform 目标平台
 * @param architecture 目标架构
 * @returns OTA兼容的版本信息
 */
export const convertToOTAFormat = (
  version: Version,
  platform: PlatformType = 'Windows',
  architecture: ArchitectureType = 'x64'
): OTAVersionInfo => {
  const platformIdentifier = generatePlatformIdentifier(platform, architecture);
  const platformDownload = getPlatformDownloadForOTA(version, platform, architecture);
  
  return {
    version: version.version,
    build_date: version.build_date || new Date(version.release_date).toISOString(),
    build_number: version.build_number || version.id,
    description: version.description || version.release_notes,
    download_url: platformDownload?.download_url || version.download_url,
    file_size: version.package_size || parseFileSize(platformDownload?.file_size || version.file_size),
    channel: version.channel || 'stable',
    is_prerelease: version.is_prerelease || false,
    platform_pattern: platformIdentifier,
    change_log: version.change_log || [version.release_notes]
  };
};

/**
 * 获取指定平台和架构的下载信息
 * @param version 版本信息
 * @param platform 平台类型
 * @param architecture 架构类型
 * @returns 平台下载信息
 */
export const getPlatformDownloadForOTA = (
  version: Version,
  platform: PlatformType,
  architecture: ArchitectureType
): PlatformDownload | null => {
  if (!version.platform_downloads) {
    return null;
  }
  
  return version.platform_downloads.find(
    pd => pd.platform === platform && pd.architecture === architecture
  ) || version.platform_downloads.find(
    pd => pd.platform === platform
  ) || null;
};

/**
 * 解析文件大小字符串为字节数
 * @param sizeStr 文件大小字符串，如 "25.6 MB"
 * @returns 字节数
 */
export const parseFileSize = (sizeStr: string): number => {
  const match = sizeStr.match(/([0-9.]+)\s*(KB|MB|GB)/i);
  if (!match) {
    return 0;
  }
  
  const size = parseFloat(match[1]);
  const unit = match[2].toUpperCase();
  
  switch (unit) {
    case 'KB':
      return Math.round(size * 1024);
    case 'MB':
      return Math.round(size * 1024 * 1024);
    case 'GB':
      return Math.round(size * 1024 * 1024 * 1024);
    default:
      return Math.round(size);
  }
};

/**
 * 格式化字节数为可读的文件大小字符串
 * @param bytes 字节数
 * @returns 格式化的文件大小字符串
 */
export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 B';
  
  const k = 1024;
  const sizes = ['B', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
};

/**
 * 检查版本是否支持指定平台
 * @param version 版本信息
 * @param platform 平台类型
 * @returns 是否支持
 */
export const isPlatformSupported = (version: Version, platform: PlatformType): boolean => {
  if (!version.platform_downloads) {
    // 如果没有平台下载信息，假设只支持Windows
    return platform === 'Windows';
  }
  
  return version.platform_downloads.some(pd => pd.platform === platform);
};

/**
 * 获取版本支持的所有平台
 * @param version 版本信息
 * @returns 支持的平台列表
 */
export const getSupportedPlatforms = (version: Version): PlatformType[] => {
  if (!version.platform_downloads) {
    return ['Windows'];
  }
  
  return Array.from(new Set(version.platform_downloads.map(pd => pd.platform)));
};

/**
 * 生成OTA更新检查URL
 * @param baseUrl OTA服务器基础URL
 * @param platform 平台类型
 * @param architecture 架构类型
 * @param currentVersion 当前版本
 * @returns 更新检查URL
 */
export const generateOTACheckUrl = (
  baseUrl: string,
  platform: PlatformType,
  architecture: ArchitectureType,
  currentVersion?: string
): string => {
  const platformPattern = generatePlatformIdentifier(platform, architecture);
  const params = new URLSearchParams({
    platform: platformPattern,
    ...(currentVersion && { current_version: currentVersion })
  });
  
  return `${baseUrl}/api/check-update?${params.toString()}`;
};

/**
 * 验证OTA版本信息的完整性
 * @param otaVersion OTA版本信息
 * @returns 验证结果
 */
export const validateOTAVersion = (otaVersion: OTAVersionInfo): boolean => {
  return !!(otaVersion.version &&
           otaVersion.download_url &&
           otaVersion.build_date &&
           otaVersion.platform_pattern);
};

/**
 * 比较版本号
 * @param version1 版本1
 * @param version2 版本2
 * @returns 比较结果：-1(version1 < version2), 0(相等), 1(version1 > version2)
 */
export const compareVersions = (version1: string, version2: string): number => {
  // 移除版本号前缀 'v'
  const v1 = version1.replace(/^v/, '');
  const v2 = version2.replace(/^v/, '');
  
  const parts1 = v1.split('.').map(Number);
  const parts2 = v2.split('.').map(Number);
  
  const maxLength = Math.max(parts1.length, parts2.length);
  
  for (let i = 0; i < maxLength; i++) {
    const part1 = parts1[i] || 0;
    const part2 = parts2[i] || 0;
    
    if (part1 < part2) return -1;
    if (part1 > part2) return 1;
  }
  
  return 0;
};

/**
 * 检查是否有新版本可用
 * @param currentVersion 当前版本
 * @param latestVersion 最新版本
 * @returns 是否有新版本
 */
export const hasNewVersion = (currentVersion: string, latestVersion: string): boolean => {
  return compareVersions(currentVersion, latestVersion) < 0;
};