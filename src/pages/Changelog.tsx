import React from 'react';
import { Calendar, Tag, GitCommit, Zap, Bug, Plus, ArrowUp, Shield, Sparkles } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';

interface ChangelogEntry {
  version: string;
  date: string;
  type: 'major' | 'minor' | 'patch';
  changes: {
    type: 'feature' | 'improvement' | 'bugfix' | 'security';
    title: string;
    description: string;
  }[];
}

const changelogData: ChangelogEntry[] = [
  {
    version: '2.1.0',
    date: '2024-01-15',
    type: 'minor',
    changes: [
      {
        type: 'feature',
        title: '新增多相机同步功能',
        description: '支持多台相机同时工作，实现更精确的测量和图像采集'
      },
      {
        type: 'improvement',
        title: '优化图像处理性能',
        description: '图像处理速度提升30%，降低CPU占用率'
      },
      {
        type: 'bugfix',
        title: '修复测量标定问题',
        description: '解决在特定分辨率下测量标定不准确的问题'
      }
    ]
  },
  {
    version: '2.0.5',
    date: '2024-01-08',
    type: 'patch',
    changes: [
      {
        type: 'security',
        title: '安全性更新',
        description: '修复潜在的安全漏洞，提升系统安全性'
      },
      {
        type: 'bugfix',
        title: '修复OTA更新失败问题',
        description: '解决在某些网络环境下OTA更新失败的问题'
      }
    ]
  },
  {
    version: '2.0.0',
    date: '2023-12-20',
    type: 'major',
    changes: [
      {
        type: 'feature',
        title: '全新UI界面设计',
        description: '采用现代化设计语言，提供更直观的用户体验'
      },
      {
        type: 'feature',
        title: '智能OTA更新系统',
        description: '自动检测和下载更新，支持增量更新和回滚功能'
      },
      {
        type: 'improvement',
        title: '重构核心架构',
        description: '采用MVVM架构模式，提升代码可维护性和扩展性'
      },
      {
        type: 'feature',
        title: '新增测量工具集',
        description: '提供多种测量工具，支持点、线、圆、角度等多种测量类型'
      }
    ]
  },
  {
    version: '1.5.2',
    date: '2023-11-15',
    type: 'patch',
    changes: [
      {
        type: 'bugfix',
        title: '修复相机连接问题',
        description: '解决海康威视相机在某些情况下连接失败的问题'
      },
      {
        type: 'improvement',
        title: '优化内存使用',
        description: '减少内存占用，提升长时间运行的稳定性'
      }
    ]
  }
];

const getChangeTypeIcon = (type: string) => {
  switch (type) {
    case 'feature':
      return <Plus className="w-4 h-4" />;
    case 'improvement':
      return <ArrowUp className="w-4 h-4" />;
    case 'bugfix':
      return <Bug className="w-4 h-4" />;
    case 'security':
      return <Shield className="w-4 h-4" />;
    default:
      return <GitCommit className="w-4 h-4" />;
  }
};

const getChangeTypeColor = (type: string) => {
  switch (type) {
    case 'feature':
      return 'bg-green-500/20 text-green-300 border-green-500/30';
    case 'improvement':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    case 'bugfix':
      return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
    case 'security':
      return 'bg-red-500/20 text-red-300 border-red-500/30';
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  }
};

const getVersionTypeColor = (type: string) => {
  switch (type) {
    case 'major':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    case 'minor':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    case 'patch':
      return 'bg-green-500/20 text-green-300 border-green-500/30';
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  }
};

const Changelog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <GitCommit className="w-4 h-4 mr-2" />
              版本历史
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              更新日志
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed">
              跟踪 DigitalLab 的最新功能、改进和修复
            </p>
          </div>
        </div>
      </section>

      {/* Changelog Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-12">
              {changelogData.map((entry, index) => (
                <div key={entry.version} className="relative">
                  {/* Timeline line */}
                  {index !== changelogData.length - 1 && (
                    <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                  )}
                  
                  <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl">
                          <Tag className="w-6 h-6 text-blue-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-2xl text-white">
                              v{entry.version}
                            </CardTitle>
                            <Badge className={getVersionTypeColor(entry.type)}>
                              {entry.type}
                            </Badge>
                          </div>
                          <div className="flex items-center text-slate-400">
                            <Calendar className="w-4 h-4 mr-2" />
                            <span>{new Date(entry.date).toLocaleDateString('zh-CN', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        {entry.changes.map((change, changeIndex) => (
                          <div key={changeIndex}>
                            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-200">
                              <div className="flex-shrink-0 mt-1">
                                <div className={`p-2 rounded-lg ${getChangeTypeColor(change.type)}`}>
                                  {getChangeTypeIcon(change.type)}
                                </div>
                              </div>
                              <div className="flex-1">
                                <h4 className="text-white font-semibold mb-2">
                                  {change.title}
                                </h4>
                                <p className="text-slate-300 leading-relaxed">
                                  {change.description}
                                </p>
                              </div>
                            </div>
                            {changeIndex < entry.changes.length - 1 && (
                              <Separator className="my-4 bg-white/10" />
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
            
            {/* Footer */}
            <div className="text-center mt-16">
              <Card className="bg-gradient-to-br from-white/10 to-white/5 border-white/20 backdrop-blur-md p-8">
                <div className="flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-white font-semibold">保持更新</span>
                </div>
                <p className="text-slate-300 mb-4">
                  想要第一时间了解最新功能和改进？
                </p>
                <p className="text-slate-400 text-sm">
                  关注我们的发布页面或启用自动更新功能
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Changelog;