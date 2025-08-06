import React, { useState } from 'react';
import { Book, ChevronRight, ChevronDown, FileText, Settings, Camera, Ruler, RefreshCw, Shield, Zap, Search, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

interface DocSection {
  id: string;
  title: string;
  icon: React.ComponentType<any>;
  items: {
    id: string;
    title: string;
    content: string;
  }[];
}

const docSections: DocSection[] = [
  {
    id: 'getting-started',
    title: '快速开始',
    icon: Zap,
    items: [
      {
        id: 'installation',
        title: '安装指南',
        content: `# 安装指南

## 系统要求

- Windows 10/11 (64位)
- .NET 8.0 Runtime
- 至少 4GB RAM
- 支持的相机设备

## 安装步骤

1. 从官网下载最新版本的 DigitalLab
2. 运行安装程序并按照提示完成安装
3. 首次启动时会自动检测相机设备
4. 完成初始配置即可开始使用

## 注意事项

- 确保相机驱动程序已正确安装
- 建议关闭防火墙或添加程序例外
- 首次使用建议进行相机标定`
      },
      {
        id: 'quick-start',
        title: '快速入门',
        content: `# 快速入门

## 第一次使用

### 1. 连接相机
- 确保相机已正确连接到计算机
- 启动 DigitalLab，系统会自动检测可用相机
- 在相机列表中选择要使用的相机

### 2. 基本操作
- **图像采集**: 点击"采集"按钮获取实时图像
- **图像保存**: 使用 Ctrl+S 快捷键保存当前图像
- **缩放控制**: 使用鼠标滚轮或缩放工具调整显示比例

### 3. 测量功能
- 选择测量工具（点、线、圆、角度）
- 在图像上进行测量操作
- 查看测量结果和统计信息`
      }
    ]
  },
  {
    id: 'camera-management',
    title: '相机管理',
    icon: Camera,
    items: [
      {
        id: 'camera-connection',
        title: '相机连接',
        content: `# 相机连接

## 支持的相机类型

### 海康威视相机
- 支持 GigE 和 USB3.0 接口
- 自动检测和配置
- 支持多相机同时连接

### GStreamer 相机
- 支持各种标准相机协议
- 可自定义管道配置
- 支持网络相机和本地相机

## 连接步骤

1. 确保相机驱动已安装
2. 连接相机到计算机
3. 在软件中刷新相机列表
4. 选择相机并点击连接
5. 配置相机参数（分辨率、帧率等）

## 故障排除

- **相机无法检测**: 检查驱动程序和连接线
- **图像质量差**: 调整曝光时间和增益
- **连接不稳定**: 检查网络设置和带宽`
      },
      {
        id: 'camera-settings',
        title: '相机设置',
        content: `# 相机设置

## 基本参数

### 分辨率设置
- 根据应用需求选择合适的分辨率
- 高分辨率提供更多细节，但处理速度较慢
- 建议在性能和质量之间找到平衡

### 帧率控制
- 调整帧率以适应不同的应用场景
- 高帧率适用于动态场景
- 低帧率可减少系统负载

### 曝光控制
- **自动曝光**: 适用于光照变化的环境
- **手动曝光**: 提供更精确的控制
- **曝光时间**: 影响图像亮度和运动模糊

## 高级设置

### 白平衡
- 自动白平衡适用于大多数情况
- 手动设置适用于特定光源环境

### 增益控制
- 低增益获得更好的图像质量
- 高增益适用于低光环境`
      }
    ]
  },
  {
    id: 'measurement',
    title: '测量功能',
    icon: Ruler,
    items: [
      {
        id: 'measurement-tools',
        title: '测量工具',
        content: `# 测量工具

## 可用工具

### 点测量
- 测量图像中特定点的坐标
- 支持像素坐标和实际坐标
- 可添加标注和备注

### 线测量
- 测量两点之间的距离
- 支持直线和折线测量
- 显示长度和角度信息

### 圆测量
- 测量圆形对象的直径和半径
- 支持三点定圆和拟合圆
- 计算圆心坐标和周长

### 角度测量
- 测量两条线之间的夹角
- 支持锐角和钝角测量
- 显示角度值和方向

## 使用方法

1. 选择相应的测量工具
2. 在图像上进行操作（点击、拖拽）
3. 查看测量结果
4. 保存或导出测量数据

## 精度说明

- 测量精度取决于相机分辨率和标定质量
- 建议定期进行相机标定
- 使用高质量的标定板获得最佳精度`
      },
      {
        id: 'calibration',
        title: '相机标定',
        content: `# 相机标定

## 标定的重要性

相机标定是确保测量精度的关键步骤，它建立了像素坐标与实际物理坐标之间的对应关系。

## 标定流程

### 1. 准备标定板
- 使用高精度的棋盘格标定板
- 确保标定板平整无变形
- 记录标定板的实际尺寸

### 2. 采集标定图像
- 从不同角度和位置采集10-20张标定图像
- 确保标定板完全在视野内
- 避免图像模糊和过曝

### 3. 执行标定
- 在软件中选择标定功能
- 导入标定图像
- 设置标定板参数
- 执行自动标定计算

### 4. 验证结果
- 检查标定误差
- 进行测量验证
- 保存标定参数

## 标定质量评估

- **重投影误差**: 应小于0.5像素
- **测量验证**: 使用已知尺寸的物体验证
- **一致性检查**: 多次测量结果应一致`
      }
    ]
  },
  {
    id: 'ota-updates',
    title: 'OTA更新',
    icon: RefreshCw,
    items: [
      {
        id: 'auto-update',
        title: '自动更新',
        content: `# 自动更新

## 功能概述

DigitalLab 内置智能OTA更新系统，可自动检测、下载和安装软件更新，确保您始终使用最新版本。

## 更新设置

### 自动检查更新
- 默认每日检查一次
- 可在设置中调整检查频率
- 支持手动检查更新

### 更新策略
- **自动安装**: 自动下载并安装更新
- **提醒安装**: 下载后提醒用户安装
- **手动更新**: 完全手动控制更新过程

## 更新过程

1. **检测更新**: 系统自动或手动检查新版本
2. **下载更新**: 在后台下载更新包
3. **验证完整性**: 确保下载文件完整无损
4. **安装更新**: 重启应用并安装新版本
5. **验证安装**: 确认更新成功完成

## 安全保障

- 所有更新包都经过数字签名验证
- 支持增量更新，减少下载时间
- 自动备份，支持回滚到之前版本`
      },
      {
        id: 'manual-update',
        title: '手动更新',
        content: `# 手动更新

## 何时使用手动更新

- 网络环境受限，无法自动更新
- 需要安装特定版本
- 企业环境需要统一管理更新

## 手动更新步骤

### 1. 下载更新包
- 访问官方网站下载页面
- 选择适合的版本
- 下载完整安装包或更新包

### 2. 验证文件
- 检查文件大小和校验和
- 确保文件完整性

### 3. 安装更新
- 关闭正在运行的 DigitalLab
- 运行更新安装程序
- 按照提示完成安装

### 4. 验证安装
- 启动应用检查版本号
- 验证功能是否正常
- 检查配置是否保留

## 注意事项

- 更新前建议备份重要配置
- 确保有足够的磁盘空间
- 更新过程中不要断电或强制关闭`
      }
    ]
  },
  {
    id: 'troubleshooting',
    title: '故障排除',
    icon: Shield,
    items: [
      {
        id: 'common-issues',
        title: '常见问题',
        content: `# 常见问题

## 相机相关问题

### Q: 相机无法连接
**A**: 
1. 检查相机电源和连接线
2. 确认驱动程序已正确安装
3. 重启软件或重新插拔相机
4. 检查防火墙设置

### Q: 图像质量差
**A**: 
1. 调整相机曝光时间和增益
2. 检查镜头是否清洁
3. 确认光照条件是否充足
4. 重新进行相机标定

## 测量相关问题

### Q: 测量结果不准确
**A**: 
1. 重新进行相机标定
2. 检查标定板质量
3. 确保测量对象在焦平面内
4. 使用合适的测量工具

### Q: 无法保存测量结果
**A**: 
1. 检查文件保存路径权限
2. 确认磁盘空间充足
3. 重启软件重试

## 软件相关问题

### Q: 软件启动缓慢
**A**: 
1. 检查系统资源使用情况
2. 关闭不必要的后台程序
3. 清理临时文件
4. 考虑升级硬件配置

### Q: 更新失败
**A**: 
1. 检查网络连接
2. 临时关闭防病毒软件
3. 手动下载更新包
4. 联系技术支持`
      },
      {
        id: 'performance-optimization',
        title: '性能优化',
        content: `# 性能优化

## 系统优化

### 硬件建议
- **CPU**: Intel i5 或 AMD Ryzen 5 以上
- **内存**: 8GB RAM 或更多
- **存储**: SSD 硬盘提供更好性能
- **显卡**: 支持 DirectX 11 的独立显卡

### 系统设置
- 关闭不必要的后台程序
- 设置高性能电源模式
- 定期清理系统垃圾文件
- 保持系统和驱动程序更新

## 软件优化

### 相机设置优化
- 根据需求选择合适的分辨率
- 调整帧率以平衡性能和质量
- 使用硬件加速功能

### 图像处理优化
- 启用多线程处理
- 使用GPU加速（如果支持）
- 合理设置缓存大小

### 内存管理
- 定期清理图像缓存
- 避免同时打开过多图像
- 监控内存使用情况

## 网络优化

### 网络相机优化
- 使用千兆以太网连接
- 优化网络带宽分配
- 减少网络延迟

### 更新优化
- 选择合适的更新时间
- 使用增量更新功能
- 配置代理服务器（如需要）`
      }
    ]
  }
];

const Docs: React.FC = () => {
  const [activeSection, setActiveSection] = useState('getting-started');
  const [activeItem, setActiveItem] = useState('installation');
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleSection = (sectionId: string) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const selectItem = (sectionId: string, itemId: string) => {
    setActiveSection(sectionId);
    setActiveItem(itemId);
    if (!expandedSections.includes(sectionId)) {
      setExpandedSections(prev => [...prev, sectionId]);
    }
  };

  const getCurrentContent = () => {
    const section = docSections.find(s => s.id === activeSection);
    const item = section?.items.find(i => i.id === activeItem);
    return item?.content || '';
  };

  const getCurrentTitle = () => {
    const section = docSections.find(s => s.id === activeSection);
    const item = section?.items.find(i => i.id === activeItem);
    return item?.title || '';
  };

  const formatContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-3xl font-bold text-white mb-6 mt-8 first:mt-0">{line.substring(2)}</h1>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-semibold text-blue-300 mb-4 mt-6">{line.substring(3)}</h2>;
      } else if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-medium text-slate-200 mb-3 mt-4">{line.substring(4)}</h3>;
      } else if (line.startsWith('- ')) {
        return <li key={index} className="text-slate-300 mb-2 ml-4">{line.substring(2)}</li>;
      } else if (line.startsWith('1. ') || line.match(/^\d+\. /)) {
        return <li key={index} className="text-slate-300 mb-2 ml-4 list-decimal">{line.replace(/^\d+\. /, '')}</li>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index} className="text-slate-300 mb-3 leading-relaxed">{line}</p>;
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Header */}
      <section className="relative py-16 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
              <Book className="w-4 h-4 mr-2" />
              文档中心
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
              DigitalLab 使用文档
            </h1>
            
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              完整的使用指南，帮助您快速掌握 DigitalLab 的所有功能
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="搜索文档..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent backdrop-blur-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-80 flex-shrink-0">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm sticky top-24">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <FileText className="w-5 h-5 mr-2" />
                  目录
                </CardTitle>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  {docSections.map((section) => {
                    const IconComponent = section.icon;
                    const isExpanded = expandedSections.includes(section.id);
                    
                    return (
                      <div key={section.id}>
                        <button
                          onClick={() => toggleSection(section.id)}
                          className="w-full flex items-center justify-between p-3 text-left rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                        >
                          <div className="flex items-center">
                            <IconComponent className="w-4 h-4 mr-3 text-blue-400" />
                            <span className="text-slate-200 group-hover:text-white">
                              {section.title}
                            </span>
                          </div>
                          {isExpanded ? (
                            <ChevronDown className="w-4 h-4 text-slate-400" />
                          ) : (
                            <ChevronRight className="w-4 h-4 text-slate-400" />
                          )}
                        </button>
                        
                        {isExpanded && (
                          <div className="ml-7 mt-2 space-y-1">
                            {section.items.map((item) => (
                              <button
                                key={item.id}
                                onClick={() => selectItem(section.id, item.id)}
                                className={`w-full text-left p-2 rounded-md transition-colors duration-200 ${
                                  activeSection === section.id && activeItem === item.id
                                    ? 'bg-blue-500/20 text-blue-300 border-l-2 border-blue-400'
                                    : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                                }`}
                              >
                                {item.title}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="flex-1">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl text-white">
                    {getCurrentTitle()}
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white/20 text-slate-300 hover:bg-white/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    编辑页面
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="prose prose-invert max-w-none">
                  {formatContent(getCurrentContent())}
                </div>
                
                <Separator className="my-8 bg-white/10" />
                
                {/* Navigation */}
                <div className="flex justify-between items-center">
                  <div className="text-slate-400 text-sm">
                    最后更新: 2024年1月15日
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="border-white/20 text-slate-300 hover:bg-white/10">
                      上一页
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/20 text-slate-300 hover:bg-white/10">
                      下一页
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Docs;