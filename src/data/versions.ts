// 静态版本数据，用于替代API调用
export interface Version {
  id: string;
  version: string;
  release_date: string;
  download_url: string;
  file_size: string;
  release_notes: string;
  is_latest: boolean;
}

export const staticVersions: Version[] = [
  {
    id: "1",
    version: "v1.10.0",
    release_date: "2024-12-15",
    download_url: "https://github.com/your-repo/releases/download/v1.10.0/DigitalLab-v1.10.0.zip",
    file_size: "25.6 MB",
    release_notes: "新增坐标尺功能，修复已知问题，优化用户体验。",
    is_latest: true
  },
  {
    id: "2",
    version: "v1.9.0",
    release_date: "2024-11-20",
    download_url: "https://github.com/your-repo/releases/download/v1.9.0/DigitalLab-v1.9.0.zip",
    file_size: "24.8 MB",
    release_notes: "集成图像转换器功能，提升处理效率。",
    is_latest: false
  },
  {
    id: "3",
    version: "v1.8.0",
    release_date: "2024-10-15",
    download_url: "https://github.com/your-repo/releases/download/v1.8.0/DigitalLab-v1.8.0.zip",
    file_size: "23.2 MB",
    release_notes: "更新OTA服务，修复大文件处理问题。",
    is_latest: false
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