import React from 'react';
import { Camera, Image, Ruler, RefreshCw, Monitor, Settings, Zap, Shield, Code, Cpu } from 'lucide-react';

const Features: React.FC = () => {
  const mainFeatures = [
    {
      icon: Camera,
      title: '多相机支持',
      description: '全面的相机接口支持，为不同应用场景提供灵活的解决方案',
      details: [
        '海康威视相机完整支持',
        'GStreamer流媒体协议',
        'USB相机即插即用',
        '网络相机远程控制',
        '多相机同步采集',
        '相机参数实时调节'
      ],
      image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop&crop=center'
    },
    {
      icon: Image,
      title: '实时图像处理',
      description: '高性能图像处理引擎，提供专业级的图像处理能力',
      details: [
        '多种图像格式支持',
        '实时图像增强算法',
        '噪声抑制和滤波',
        '色彩空间转换',
        '图像几何校正',
        '批量图像处理'
      ],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center'
    },
    {
      icon: Ruler,
      title: '精密测量标定',
      description: '专业的测量工具和标定系统，确保测量精度和可靠性',
      details: [
        '亚像素级测量精度',
        '多种标定算法支持',
        '自动标定流程',
        '测量结果统计分析',
        '标定参数保存管理',
        '测量数据导出功能'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center'
    },
    {
      icon: RefreshCw,
      title: 'OTA自动更新',
      description: '智能的版本管理和自动更新系统，保持软件始终最新',
      details: [
        '自动检测新版本',
        '增量更新机制',
        '更新进度实时显示',
        '回滚功能保障',
        '更新日志详细记录',
        '网络断点续传'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center'
    }
  ];

  const additionalFeatures = [
    {
      icon: Monitor,
      title: '多显示器支持',
      description: '支持多显示器扩展，提供更大的工作空间'
    },
    {
      icon: Settings,
      title: '灵活配置',
      description: '丰富的配置选项，满足不同用户的个性化需求'
    },
    {
      icon: Zap,
      title: '高性能',
      description: '优化的算法和多线程处理，确保流畅的用户体验'
    },
    {
      icon: Shield,
      title: '数据安全',
      description: '完善的数据保护机制，确保用户数据安全可靠'
    },
    {
      icon: Code,
      title: 'API接口',
      description: '开放的API接口，支持二次开发和系统集成'
    },
    {
      icon: Cpu,
      title: '硬件加速',
      description: '支持GPU加速，大幅提升图像处理性能'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">产品功能</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            DigitalLab 提供全面的数字投影仪解决方案，集成先进的图像处理技术和智能管理功能
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            const isEven = index % 2 === 0;

            return (
              <div key={index} className={`mb-20 ${index !== mainFeatures.length - 1 ? 'border-b border-white/10 pb-20' : ''}`}>
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="p-4 bg-blue-600/20 rounded-xl mr-4">
                        <IconComponent className="w-8 h-8 text-blue-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">{feature.title}</h2>
                    </div>

                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {feature.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-center">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                          <span className="text-slate-300">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <div className="relative">
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="w-full h-80 object-cover rounded-xl shadow-2xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent rounded-xl"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">更多特性</h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              除了核心功能外，DigitalLab 还提供众多实用特性，提升您的工作效率
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-600/20 rounded-lg mr-4">
                      <IconComponent className="w-6 h-6 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                  </div>
                  <p className="text-slate-300 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-white/10">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">系统要求</h2>
              <p className="text-xl text-slate-300">
                确保您的系统满足以下要求，以获得最佳使用体验
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">操作系统</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Windows 10/11 (64位)</li>
                  <li>• Linux Ubuntu 18.04+</li>
                  <li>• macOS 10.15+</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">硬件要求</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• CPU: Intel i5 或 AMD 同等级</li>
                  <li>• 内存: 8GB RAM (推荐16GB)</li>
                  <li>• 显卡: 支持OpenGL 3.3+</li>
                  <li>• 存储: 2GB 可用空间</li>
                </ul>
              </div>

              <div className="bg-white/5 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-4">网络要求</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• 互联网连接（用于更新）</li>
                  <li>• 局域网（用于网络相机）</li>
                  <li>• 带宽: 10Mbps+（推荐）</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;