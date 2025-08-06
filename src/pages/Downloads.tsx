import React, { useState, useEffect } from 'react';
import { Download, Calendar, FileText, HardDrive, Star, Clock, ChevronDown, ChevronUp, Monitor, Smartphone } from 'lucide-react';
import { staticVersions, getLatestVersion, Version, PlatformDownload } from '../data/versions';
import { getPlatformInfo, PlatformInfo, PlatformType } from '../utils/platformDetection';

const Downloads: React.FC = () => {
  const [expandedChangelog, setExpandedChangelog] = useState<string | null>(null);
  const [platformInfo, setPlatformInfo] = useState<PlatformInfo | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformType>('Windows');
  const versions = staticVersions;
  const latestVersion = getLatestVersion();

  useEffect(() => {
    const info = getPlatformInfo();
    setPlatformInfo(info);
    setSelectedPlatform(info.platform !== 'Unknown' ? info.platform : 'Windows');
  }, []);

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const toggleChangelog = (versionId: string) => {
    setExpandedChangelog(expandedChangelog === versionId ? null : versionId);
  };

  // 获取指定平台的下载链接
  const getPlatformDownload = (version: Version, platform: PlatformType): PlatformDownload | null => {
    if (!version.platform_downloads) return null;
    return version.platform_downloads.find(pd => pd.platform === platform) || null;
  };

  // 获取当前选择平台的下载URL和文件大小
  const getCurrentPlatformInfo = (version: Version) => {
    const platformDownload = getPlatformDownload(version, selectedPlatform);
    if (platformDownload) {
      return {
        downloadUrl: platformDownload.download_url,
        fileSize: platformDownload.file_size
      };
    }
    // 回退到默认下载链接
    return {
      downloadUrl: version.download_url,
      fileSize: version.file_size
    };
  };

  // 获取平台图标
  const getPlatformIcon = (platform: PlatformType) => {
    switch (platform) {
      case 'Windows':
        return '🪟';
      case 'macOS':
        return '🍎';
      case 'Linux':
        return '🐧';
      default:
        return '💻';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">版本下载</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            下载 DigitalLab 的最新版本和历史版本，查看详细的更新日志和版本说明
          </p>
        </div>
      </section>

      {/* Platform Selector */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 p-6 mb-8">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-white mb-2">选择您的操作系统</h3>
              {platformInfo && (
                <p className="text-slate-300 text-sm">
                  检测到您的系统: {getPlatformIcon(platformInfo.platform)} {platformInfo.platform} ({platformInfo.architecture})
                </p>
              )}
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              {(['Windows', 'Linux', 'macOS'] as PlatformType[]).map((platform) => (
                <button
                  key={platform}
                  onClick={() => setSelectedPlatform(platform)}
                  className={`flex items-center px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    selectedPlatform === platform
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <span className="mr-2 text-lg">{getPlatformIcon(platform)}</span>
                  {platform}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Latest Version Highlight */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-8 border border-white/10 mb-12">
            <div className="flex items-center justify-center mb-4">
              <Star className="w-6 h-6 text-yellow-400 mr-2" />
              <span className="text-white font-semibold text-lg">最新版本</span>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                DigitalLab {latestVersion.version}
              </h2>
              <div className="flex flex-wrap justify-center gap-6 mb-6 text-slate-300">
                <div className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  {formatDate(latestVersion.release_date)}
                </div>
                <div className="flex items-center">
                  <HardDrive className="w-5 h-5 mr-2" />
                  {getCurrentPlatformInfo(latestVersion).fileSize}
                </div>
                <div className="flex items-center">
                  <Monitor className="w-5 h-5 mr-2" />
                  {getPlatformIcon(selectedPlatform)} {selectedPlatform}
                </div>
              </div>
              <a
                href={getCurrentPlatformInfo(latestVersion).downloadUrl}
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <Download className="w-5 h-5 mr-2" />
                立即下载 ({selectedPlatform})
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* All Versions */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">所有版本</h2>
          
          <div className="space-y-6">
            {versions.map((version) => (
              <div
                key={version.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-semibold text-white mr-3">
                          {version.version}
                        </h3>
                        {version.is_latest && (
                          <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 text-sm font-medium rounded-full border border-yellow-500/30">
                            最新版本
                          </span>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-slate-300">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(version.release_date)}
                        </div>
                        <div className="flex items-center">
                          <HardDrive className="w-4 h-4 mr-1" />
                          {getCurrentPlatformInfo(version).fileSize}
                        </div>
                        <div className="flex items-center">
                          <Monitor className="w-4 h-4 mr-1" />
                          {getPlatformIcon(selectedPlatform)} {selectedPlatform}
                        </div>
                      </div>
                      
                      {version.release_notes && (
                        <p className="text-slate-300 mb-4">{version.release_notes}</p>
                      )}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 lg:ml-6">
                      <button
                        onClick={() => toggleChangelog(version.id)}
                        className="inline-flex items-center px-4 py-2 bg-white/10 text-white font-medium rounded-lg hover:bg-white/20 transition-colors border border-white/20"
                      >
                        <FileText className="w-4 h-4 mr-2" />
                        更新日志
                        {expandedChangelog === version.id ? (
                          <ChevronUp className="w-4 h-4 ml-2" />
                        ) : (
                          <ChevronDown className="w-4 h-4 ml-2" />
                        )}
                      </button>
                      
                      <a
                        href={getCurrentPlatformInfo(version).downloadUrl}
                        className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        下载 ({selectedPlatform})
                      </a>
                    </div>
                  </div>
                  
                  {/* Changelog */}
                  {expandedChangelog === version.id && (
                    <div className="mt-6 pt-6 border-t border-white/10">
                      <h4 className="text-lg font-semibold text-white mb-3">更新日志</h4>
                      <div className="bg-slate-800/50 rounded-lg p-4">
                        <div className="text-slate-300 whitespace-pre-wrap text-sm leading-relaxed">
                          {version.release_notes}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">系统要求</h2>
            <p className="text-xl text-slate-300">
              请确保您的系统满足以下最低要求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">操作系统</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• Windows 10/11 (64位)</li>
                <li>• Linux Ubuntu 18.04+</li>
                <li>• macOS 10.15+</li>
              </ul>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">硬件配置</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• CPU: Intel i5 或同等级</li>
                <li>• 内存: 8GB RAM (推荐16GB)</li>
                <li>• 显卡: 支持OpenGL 3.3+</li>
                <li>• 存储: 2GB 可用空间</li>
              </ul>
            </div>
            
            <div className="bg-white/5 rounded-xl p-6 border border-white/10">
              <h3 className="text-xl font-semibold text-white mb-4">其他要求</h3>
              <ul className="space-y-2 text-slate-300">
                <li>• 互联网连接（用于更新）</li>
                <li>• USB 2.0+ 端口</li>
                <li>• 管理员权限（安装时）</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Downloads;