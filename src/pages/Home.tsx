import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Camera, Image, Ruler, RefreshCw, ArrowRight, Star, Users, Shield, Zap, Target, Cpu } from 'lucide-react';
import { getLatestVersion } from '../data/versions';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

// 粒子动画组件
const ParticleBackground: React.FC = () => {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number; speed: number }>>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      opacity: Math.random() * 0.5 + 0.1,
      speed: Math.random() * 0.5 + 0.1
    }));
    setParticles(newParticles);

    const interval = setInterval(() => {
      setParticles(prev => prev.map(particle => ({
        ...particle,
        y: particle.y > 100 ? -5 : particle.y + particle.speed
      })));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-blue-400 rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)'
          }}
        />
      ))}
    </div>
  );
};

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const latestVersion = getLatestVersion();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: Camera,
      title: '多相机支持',
      description: '支持海康威视、GStreamer等多种相机接口，提供统一的相机管理解决方案'
    },
    {
      icon: Image,
      title: '实时图像处理',
      description: '高性能图像处理引擎，支持多种格式转换和实时图像增强算法'
    },
    {
      icon: Ruler,
      title: '精密测量标定',
      description: '专业的测量工具和标定功能，确保测量结果的高精度和可靠性'
    },
    {
      icon: RefreshCw,
      title: 'OTA自动更新',
      description: '智能版本管理和自动更新机制，确保软件始终保持最新状态'
    },
    {
      icon: Shield,
      title: '稳定可靠',
      description: '经过严格测试的稳定架构，为工业级应用提供可靠保障'
    },
    {
      icon: Users,
      title: '易于使用',
      description: '直观的用户界面设计，降低学习成本，提高工作效率'
    }
  ];

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDate = (dateString: string): string => {
    return new Date(dateString).toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        
        {/* 背景渐变层 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        {/* 网格背景 */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
        
        <div className="relative container mx-auto px-4 py-20 z-10">
          <div className="text-center max-w-6xl mx-auto">
            {/* 主标题区域 */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30">
                <Zap className="w-4 h-4 mr-2" />
                专业数字投影仪解决方案
              </Badge>
              
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent leading-tight">
                Digital<span className="text-blue-400">Lab</span>
              </h1>
              
              <p className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
                重新定义数字投影技术
              </p>
              
              <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                集成多相机支持、实时图像处理、精密测量标定和OTA更新功能，
                <br className="hidden md:block" />
                为工业级应用提供完整的数字化解决方案
              </p>
            </div>
            
            {/* 特性标签 */}
            <div className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Badge variant="outline" className="bg-white/5 text-blue-300 border-blue-500/30">
                <Camera className="w-4 h-4 mr-2" />
                多相机支持
              </Badge>
              <Badge variant="outline" className="bg-white/5 text-purple-300 border-purple-500/30">
                <Target className="w-4 h-4 mr-2" />
                精密测量
              </Badge>
              <Badge variant="outline" className="bg-white/5 text-cyan-300 border-cyan-500/30">
                <Cpu className="w-4 h-4 mr-2" />
                实时处理
              </Badge>
            </div>
            
            {/* CTA按钮组 */}
            <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {latestVersion && (
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  <a href={latestVersion.download_url}>
                    <Download className="w-5 h-5 mr-2" />
                    立即下载 {latestVersion.version}
                  </a>
                </Button>
              )}
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/20 bg-white/5 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
              >
                <Link to="/docs">
                  查看文档
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
            
            {/* 版本信息卡片 */}
            {latestVersion && (
              <Card className={`max-w-md mx-auto bg-white/5 border-white/10 backdrop-blur-md transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <CardHeader className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 text-yellow-400 mr-2" />
                    <CardTitle className="text-white">最新版本</CardTitle>
                  </div>
                  <CardDescription className="text-slate-300">
                    发布日期: {formatDate(latestVersion.release_date)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-slate-400 mb-4">
                    文件大小: {latestVersion.file_size}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-blue-500/30 text-blue-300 hover:bg-blue-500/10"
                  >
                    <Link to="/downloads">
                      查看所有版本
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
        
        {/* 底部渐变 */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-slate-900/50 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Star className="w-4 h-4 mr-2" />
              核心功能
            </Badge>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              强大的功能生态
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              DigitalLab提供全面的数字投影仪解决方案，满足各种工业应用需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 group"
                >
                  <CardHeader>
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl mr-4 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                        <IconComponent className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-blue-100 transition-colors duration-300">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          
          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105"
            >
              <Link to="/features">
                了解更多功能
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-md p-12 max-w-4xl mx-auto">
            <CardHeader className="text-center">
              <Badge className="mb-6 bg-cyan-500/20 text-cyan-300 border-cyan-500/30 mx-auto">
                <Zap className="w-4 h-4 mr-2" />
                立即开始
              </Badge>
              <CardTitle className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                开始使用 DigitalLab
              </CardTitle>
              <CardDescription className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                立即下载并体验专业的数字投影仪软件解决方案，
                <br className="hidden md:block" />
                开启您的数字化转型之旅
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mt-8">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-2xl shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all duration-300 transform hover:scale-105"
                >
                  <Link to="/downloads">
                    <Download className="w-5 h-5 mr-2" />
                    下载软件
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white/30 bg-white/5 text-white hover:bg-white/10 px-8 py-4 text-lg backdrop-blur-sm"
                >
                  <Link to="/about">
                    联系我们
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;