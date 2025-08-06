// 平台检测工具模块
// 用于检测用户的操作系统和架构信息

export type PlatformType = 'Windows' | 'Linux' | 'macOS' | 'Unknown';
export type ArchitectureType = 'x64' | 'ARM64' | 'x86' | 'Unknown';

export interface PlatformInfo {
  platform: PlatformType;
  architecture: ArchitectureType;
  userAgent: string;
  isMobile: boolean;
}

/**
 * 检测用户的平台信息
 * @returns PlatformInfo 包含平台、架构等信息
 */
export const getPlatformInfo = (): PlatformInfo => {
  const userAgent = navigator.userAgent.toLowerCase();
  const platform = navigator.platform.toLowerCase();
  
  // 检测操作系统
  let detectedPlatform: PlatformType = 'Unknown';
  
  if (userAgent.includes('win') || platform.includes('win')) {
    detectedPlatform = 'Windows';
  } else if (userAgent.includes('mac') || platform.includes('mac')) {
    detectedPlatform = 'macOS';
  } else if (userAgent.includes('linux') || platform.includes('linux')) {
    detectedPlatform = 'Linux';
  }
  
  // 检测架构
  let architecture: ArchitectureType = 'x64'; // 默认为x64
  
  if (userAgent.includes('arm64') || userAgent.includes('aarch64')) {
    architecture = 'ARM64';
  } else if (userAgent.includes('x86_64') || userAgent.includes('win64') || userAgent.includes('wow64')) {
    architecture = 'x64';
  } else if (userAgent.includes('x86') || userAgent.includes('i386') || userAgent.includes('i686')) {
    architecture = 'x86';
  }
  
  // 检测是否为移动设备
  const isMobile = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  
  return {
    platform: detectedPlatform,
    architecture,
    userAgent: navigator.userAgent,
    isMobile
  };
};

/**
 * 获取平台的显示名称
 * @param platform 平台类型
 * @returns 显示名称
 */
export const getPlatformDisplayName = (platform: PlatformType): string => {
  switch (platform) {
    case 'Windows':
      return 'Windows';
    case 'macOS':
      return 'macOS';
    case 'Linux':
      return 'Linux';
    default:
      return '未知系统';
  }
};

/**
 * 获取架构的显示名称
 * @param architecture 架构类型
 * @returns 显示名称
 */
export const getArchitectureDisplayName = (architecture: ArchitectureType): string => {
  switch (architecture) {
    case 'x64':
      return '64位';
    case 'ARM64':
      return 'ARM64';
    case 'x86':
      return '32位';
    default:
      return '未知架构';
  }
};

/**
 * 检查平台是否支持
 * @param platform 平台类型
 * @returns 是否支持
 */
export const isPlatformSupported = (platform: PlatformType): boolean => {
  return ['Windows', 'Linux', 'macOS'].includes(platform);
};

/**
 * 获取推荐的下载平台
 * 如果当前平台不支持，返回Windows作为默认选择
 * @returns 推荐的平台类型
 */
export const getRecommendedPlatform = (): PlatformType => {
  const platformInfo = getPlatformInfo();
  return isPlatformSupported(platformInfo.platform) ? platformInfo.platform : 'Windows';
};

/**
 * 生成平台标识符，用于匹配DigitalLab OTA系统的平台模式
 * @param platform 平台类型
 * @param architecture 架构类型
 * @returns 平台标识符，如 "Windows-x64", "Linux-x64", "macOS-x64"
 */
export const generatePlatformIdentifier = (platform: PlatformType, architecture: ArchitectureType): string => {
  if (platform === 'Unknown' || architecture === 'Unknown') {
    return 'Windows-x64'; // 默认标识符
  }
  return `${platform}-${architecture}`;
};

/**
 * 检查是否为桌面平台
 * @param platform 平台类型
 * @returns 是否为桌面平台
 */
export const isDesktopPlatform = (platform: PlatformType): boolean => {
  return ['Windows', 'Linux', 'macOS'].includes(platform);
};