// 静态版本数据，用于替代API调用
import { PlatformType, ArchitectureType } from '../utils/platformDetection';

export interface PlatformDownload {
  platform: PlatformType;
  architecture: ArchitectureType;
  download_url: string;
  file_size: string;
  file_extension: string;
}

export interface Version {
  id: string;
  version: string;
  release_date: string;
  download_url: string; // 保持向后兼容，默认Windows x64下载链接
  file_size: string;
  release_notes: string;
  is_latest: boolean;
  // 新增多平台下载支持
  platform_downloads?: PlatformDownload[];
  // 兼容DigitalLab OTA系统
  build_date?: string;
  build_number?: string;
  description?: string;
  channel?: string;
  is_prerelease?: boolean;
  package_size?: number;
  change_log?: string[];
}

export const staticVersions: Version[] = [
  {
    id: "1",
    version: "v1.10.0",
    release_date: "2024-12-15",
    download_url: "https://github.com/tlx2024/DigitalLab/releases/download/v1.10.0/DigitalLab-Windows-x64.zip",
    file_size: "25.6 MB",
    release_notes: "新增坐标尺功能，修复已知问题，优化用户体验。",
    is_latest: true,
    // 多平台下载支持
    platform_downloads: [
      {
        platform: 'Windows',
        architecture: 'x64',
        download_url: 'https://github.com/tlx2024/DigitalLab/releases/download/v1.10.0/DigitalLab-Windows-x64.zip',
        file_size: '25.6 MB',
        file_extension: '.zip'
      },
      {
        platform: 'Linux',
        architecture: 'x64',
        download_url: 'https://github.com/tlx2024/DigitalLab/releases/download/v1.10.0/DigitalLab-Linux-x64.tar.gz',
        file_size: '24.8 MB',
        file_extension: '.tar.gz'
      },
      {
        platform: 'macOS',
        architecture: 'x64',
        download_url: 'https://github.com/tlx2024/DigitalLab/releases/download/v1.10.0/DigitalLab-macOS-x64.dmg',
        file_size: '26.2 MB',
        file_extension: '.dmg'
      }
    ],
    // OTA兼容字段
    build_date: "2024-12-15T10:30:00Z",
    build_number: "1010",
    description: "新增坐标尺功能，修复已知问题，优化用户体验。",
    channel: "stable",
    is_prerelease: false,
    package_size: 26843545,
    change_log: [
      "新增坐标尺功能，支持精确测量",
      "修复图像缩放时的显示问题",
      "优化用户界面响应速度",
      "修复已知的内存泄漏问题"
    ]
  },
  {
    id: "2",
    version: "v1.9.0",
    release_date: "2024-11-20",
    download_url: "https://github.com/tlx2024/DigitalLab/releases/download/v1.9.0/DigitalLab-Windows-x64.zip",
    file_size: "24.8 MB",
    release_notes: "集成图像转换器功能，提升处理效率。",
    is_latest: false,
    platform_downloads: [
      {
        platform: 'Windows',
        architecture: 'x64',
        download_url: 'https://github.com/tlx2024/DigitalLab/releases/download/v1.9.0/DigitalLab-Windows-x64.zip',
        file_size: '24.8 MB',
        file_extension: '.zip'
      },
      {
        platform: 'Linux',
        architecture: 'x64',
        download_url: 'https://github.com/tlx2024/DigitalLab/releases/download/v1.9.0/DigitalLab-Linux-x64.tar.gz',
        file_size: '24.1 MB',
        file_extension: '.tar.gz'
      },
      {
        platform: 'macOS',
        architecture: 'x64',
        download_url: 'https://github.com/tlx2024/DigitalLab/releases/download/v1.9.0/DigitalLab-macOS-x64.dmg',
        file_size: '25.4 MB',
        file_extension: '.dmg'
      }
    ],
    build_date: "2024-11-20T14:15:00Z",
    build_number: "1009",
    description: "集成图像转换器功能，提升处理效率。",
    channel: "stable",
    is_prerelease: false,
    package_size: 26006937,
    change_log: [
      "集成强大的图像转换器功能",
      "支持多种图像格式转换",
      "提升图像处理效率",
      "优化内存使用"
    ]
  },
  {
    id: "3",
    version: "v1.8.0",
    release_date: "2024-10-15",
    download_url: "https://github.com/tlx2024/DigitalLab/releases/download/v1.8.0/DigitalLab-Windows-x64.zip",
    file_size: "23.2 MB",
    release_notes: "更新OTA服务，修复大文件处理问题。",
    is_latest: false,
    platform_downloads: [
      {
        platform: 'Windows',
        architecture: 'x64',
        download_url: 'https://github.com/tlx2024/DigitalLab/releases/download/v1.8.0/DigitalLab-Windows-x64.zip',
        file_size: '23.2 MB',
        file_extension: '.zip'
      },
      {
        platform: 'Linux',
        architecture: 'x64',
        download_url: 'https://github.com/tlx2024/DigitalLab/releases/download/v1.8.0/DigitalLab-Linux-x64.tar.gz',
        file_size: '22.6 MB',
        file_extension: '.tar.gz'
      },
      {
        platform: 'macOS',
        architecture: 'x64',
        download_url: 'https://github.com/tlx2024/DigitalLab/releases/download/v1.8.0/DigitalLab-macOS-x64.dmg',
        file_size: '23.8 MB',
        file_extension: '.dmg'
      }
    ],
    build_date: "2024-10-15T09:45:00Z",
    build_number: "1008",
    description: "更新OTA服务，修复大文件处理问题。",
    channel: "stable",
    is_prerelease: false,
    package_size: 24318361,
    change_log: [
      "更新OTA自动更新服务",
      "修复大文件处理时的性能问题",
      "改进错误处理机制",
      "提升系统稳定性"
    ]
  }
];

export const getLatestVersion = (): Version => {
  return staticVersions.find(v => v.is_latest) || staticVersions[0];
};

export const getAllVersions = (): Version[] => {
  return staticVersions;
};

export const getDownloadStats = () => {
  return {
    totalDownloads: 1250,
    monthlyDownloads: 180,
    weeklyDownloads: 45
  };
};

// 导出OTA兼容性功能
export * from '../utils/otaCompatibility';
export * from '../api/releases';