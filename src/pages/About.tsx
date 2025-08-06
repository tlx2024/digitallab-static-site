import React from 'react';
import { Users, Target, Award, Globe, Mail, Phone, MapPin, Github, Linkedin, Twitter, Building2, Heart, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

const About: React.FC = () => {
  const teamMembers = [
    {
      name: '张伟',
      role: '创始人 & CEO',
      bio: '拥有15年图像处理和计算机视觉经验，曾在多家知名科技公司担任技术负责人。',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20asian%20male%20CEO%20in%20business%20suit%2C%20confident%20smile%2C%20modern%20office%20background%2C%20high%20quality%20headshot&image_size=square'
    },
    {
      name: '李明',
      role: '技术总监',
      bio: '专注于实时图像处理算法研发，在计算机视觉领域发表多篇学术论文。',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20asian%20male%20CTO%20with%20glasses%2C%20tech%20background%2C%20friendly%20expression%2C%20high%20quality%20headshot&image_size=square'
    },
    {
      name: '王芳',
      role: '产品经理',
      bio: '负责产品规划和用户体验设计，致力于打造最易用的数字化实验室解决方案。',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20asian%20female%20product%20manager%2C%20business%20attire%2C%20warm%20smile%2C%20modern%20workspace%2C%20high%20quality%20headshot&image_size=square'
    },
    {
      name: '陈强',
      role: '研发工程师',
      bio: '专业的软件开发工程师，负责DigitalLab核心功能的开发和优化。',
      avatar: 'https://trae-api-sg.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20portrait%20of%20asian%20male%20software%20engineer%2C%20casual%20shirt%2C%20coding%20setup%20background%2C%20focused%20expression%2C%20high%20quality%20headshot&image_size=square'
    }
  ];

  const milestones = [
    {
      year: '2020',
      title: '公司成立',
      description: 'DigitalLab团队正式成立，开始专注于数字化实验室解决方案的研发。'
    },
    {
      year: '2021',
      title: '产品原型',
      description: '完成DigitalLab第一个原型版本，实现基础的图像采集和处理功能。'
    },
    {
      year: '2022',
      title: '正式发布',
      description: 'DigitalLab v1.0正式发布，获得首批用户的积极反馈。'
    },
    {
      year: '2023',
      title: '功能升级',
      description: '推出多相机支持、实时处理等高级功能，用户数量快速增长。'
    },
    {
      year: '2024',
      title: '持续创新',
      description: '不断优化产品性能，新增AI辅助分析功能，服务更多科研院所。'
    }
  ];

  const values = [
    {
      icon: Target,
      title: '专业专注',
      description: '专注于数字化实验室领域，为用户提供最专业的解决方案。'
    },
    {
      icon: Award,
      title: '品质至上',
      description: '严格的质量控制体系，确保每一个功能都经过充分测试和验证。'
    },
    {
      icon: Users,
      title: '用户为本',
      description: '深入了解用户需求，持续改进产品体验，让科研工作更高效。'
    },
    {
      icon: Globe,
      title: '开放合作',
      description: '与全球科研机构和技术伙伴合作，推动行业技术进步。'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,119,198,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <Badge className="mb-6 bg-blue-500/20 text-blue-300 border-blue-500/30">
            <Building2 className="w-4 h-4 mr-2" />
            关于DigitalLab
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            关于我们
          </h1>
          
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            我们是一支专注于数字化实验室解决方案的专业团队，致力于通过先进的图像处理技术，
            为科研工作者提供高效、精准的实验数据采集和分析工具。
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-300 border-purple-500/30">
              <Heart className="w-4 h-4 mr-2" />
              使命愿景
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              我们的初心与目标
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">我们的使命</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-lg leading-relaxed">
                  通过创新的数字化技术，简化实验室工作流程，提高科研效率，
                  让研究人员能够专注于核心的科学研究，而不是繁琐的数据处理工作。
                  我们相信技术应该服务于科学，让每一个科研发现都能更快地造福人类。
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-2xl text-white">我们的愿景</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 text-lg leading-relaxed">
                  成为全球领先的数字化实验室解决方案提供商，推动科研实验的数字化转型。
                  我们希望DigitalLab能够成为每个实验室不可或缺的工具，
                  为全球的科学研究贡献我们的力量。
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
              <Shield className="w-4 h-4 mr-2" />
              核心价值
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              核心价值观
            </h2>
            <p className="text-xl text-slate-400">
              这些价值观指导着我们的每一个决策和行动
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card
                  key={index}
                  className="bg-white/5 border-white/10 backdrop-blur-sm text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                >
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl text-white group-hover:text-blue-200 transition-colors">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              <Users className="w-4 h-4 mr-2" />
              核心团队
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              核心团队
            </h2>
            <p className="text-xl text-slate-400">
              我们的团队由经验丰富的技术专家和产品专家组成
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <CardHeader>
                  <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-4 border-blue-500/30 group-hover:border-purple-500/50 transition-colors duration-300">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-purple-200 transition-colors">
                    {member.name}
                  </CardTitle>
                  <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 group-hover:bg-purple-500/20 group-hover:text-purple-300 group-hover:border-purple-500/30 transition-all duration-300">
                    {member.role}
                  </Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-950/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-500/30">
              <Award className="w-4 h-4 mr-2" />
              发展历程
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              发展历程
            </h2>
            <p className="text-xl text-slate-400">
              从创立至今，我们不断创新，持续为用户创造价值
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <Card className="bg-white/5 border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/20">
                      <CardHeader>
                        <Badge className="text-2xl font-bold bg-blue-500/20 text-blue-300 border-blue-500/30 w-fit group-hover:bg-cyan-500/20 group-hover:text-cyan-300 group-hover:border-cyan-500/30 transition-all duration-300">
                          {milestone.year}
                        </Badge>
                        <CardTitle className="text-xl text-white group-hover:text-cyan-200 transition-colors">
                          {milestone.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-slate-300 group-hover:text-slate-200 transition-colors">
                          {milestone.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="relative z-10">
                    <div className="w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-slate-950 shadow-lg shadow-blue-500/30"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-950/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-pink-500/20 text-pink-300 border-pink-500/30">
              <Mail className="w-4 h-4 mr-2" />
              联系我们
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
              联系我们
            </h2>
            <p className="text-xl text-slate-400">
              我们很乐意听到您的声音，随时与我们取得联系
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">联系方式</CardTitle>
                <CardDescription className="text-slate-400">
                  多种方式与我们取得联系
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center group hover:bg-white/5 p-3 rounded-lg transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">邮箱地址</h3>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors">contact@digitallab.com</p>
                  </div>
                </div>
                
                <Separator className="bg-white/10" />
                
                <div className="flex items-center group hover:bg-white/5 p-3 rounded-lg transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-green-200 transition-colors">联系电话</h3>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors">+86 400-123-4567</p>
                  </div>
                </div>
                
                <Separator className="bg-white/10" />
                
                <div className="flex items-center group hover:bg-white/5 p-3 rounded-lg transition-colors">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">公司地址</h3>
                    <p className="text-slate-300 group-hover:text-slate-200 transition-colors">北京市海淀区中关村科技园区</p>
                  </div>
                </div>
                
                <Separator className="bg-white/10" />
                
                {/* Social Links */}
                <div className="pt-4">
                  <h3 className="text-lg font-semibold text-white mb-4">关注我们</h3>
                  <div className="flex space-x-3">
                    <Button variant="outline" size="sm" className="border-white/20 text-slate-300 hover:bg-white/10 hover:text-white">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/20 text-slate-300 hover:bg-white/10 hover:text-white">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                    <Button variant="outline" size="sm" className="border-white/20 text-slate-300 hover:bg-white/10 hover:text-white">
                      <Twitter className="w-4 h-4 mr-2" />
                      Twitter
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Form */}
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-white">发送消息</CardTitle>
                <CardDescription className="text-slate-400">
                  填写表单，我们会尽快回复您
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      姓名
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="请输入您的姓名"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      邮箱
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="请输入您的邮箱"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      消息内容
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all"
                      placeholder="请输入您想要咨询的内容"
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                    <Mail className="w-4 h-4 mr-2" />
                    发送消息
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;