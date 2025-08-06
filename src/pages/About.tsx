import React from 'react';
import { Users, Target, Award, Globe, Mail, Phone, MapPin, Github, Linkedin, Twitter, Building2, Heart, Lightbulb, Shield } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Separator } from '../components/ui/separator';

const About: React.FC = () => {
  const teamStats = [
    {
      number: '6',
      label: '研发销售中心',
      description: '北京、成都、东莞、苏州、台北、南安普敦'
    },
    {
      number: '300+',
      label: '团队成员',
      description: '10多名博士，30多名硕士等高学历人才'
    },
    {
      number: '100+',
      label: '注册知识产权',
      description: '发明专利、软件著作、商标品牌等'
    },
    {
      number: '150+',
      label: '服务客户',
      description: '中国大陆、台湾、东南亚、欧洲、北美等'
    }
  ];

  const keyClients = [
    '库博光学', '华为', '联想', '国药集团', '威高集团',
    '扬子江药业集团', '太极药业集团', '科伦药业', '百特侨光药业',
    '中国商飞', '汉王', '大龙兴创'
  ];

  const milestones = [
    {
      year: '2018',
      title: '公司成立',
      description: '平方和（北京）科技有限公司正式成立，专注于工业视觉检测系统的研发生产。'
    },
    {
      year: '2019',
      title: '技术突破',
      description: '完成核心视觉算法研发，获得多项发明专利，建立完整的技术体系。'
    },
    {
      year: '2020',
      title: '市场拓展',
      description: '产品正式投入市场，获得库博光学等知名企业认可，建立稳定合作关系。'
    },
    {
      year: '2021',
      title: '融资发展',
      description: '完成A轮融资，引入云晖资本、博行资本等知名投资机构，加速业务发展。'
    },
    {
      year: '2022',
      title: '全球布局',
      description: '在成都、东莞、苏州等地设立研发中心，服务客户遍及全球多个国家和地区。'
    },
    {
      year: '2024',
      title: '持续创新',
      description: '不断深化技术创新，服务华为、联想、国药集团等知名企业，行业影响力持续提升。'
    }
  ];

  const values = [
    {
      icon: Target,
      title: '精致 Precise',
      description: '从设计到制造，从部署到服务，从概念到价值，我们不断迭代，以性能与体验为宗旨，处处追求精致与完美。'
    },
    {
      icon: Lightbulb,
      title: '创新 Innovative',
      description: '从理论到实践，从认知到管理，从技术到产品，我们不断打磨创造、顿悟、积累，开拓奇迹、预见未来。'
    },
    {
      icon: Heart,
      title: '奉献 Dedicated',
      description: '从企业到员工，从团队到个人，我们无私付出、相互成就、彼此相携、同舟共济。'
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
            关于平方和
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            关于我们
          </h1>
          
          <p className="text-xl text-slate-400 max-w-4xl mx-auto leading-relaxed">
            平方和（北京）科技有限公司是一家面向全球市场，集工业视觉检测系统的研发生产、企业级云视觉服务及智能制造数据平台服务为一体的高科技中外合资企业。
            为国家高新技术企业、中关村高新技术企业。
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
                  以工业视觉、计算机视觉和工业自动化为核心，支持云端整体计算机视觉系统的自动化解决方案，
                  为生产制造企业提供全栈式视觉服务，包括光学成像系统设计、视觉算法定制、视觉设备定制与开发、
                  视觉及生产数据整合等。借此帮助各行业客户提高生产效率、降低生产成本、改善产品质量。
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
                  平方和秉承"创造认知、预见未来"的发展理念，以"精致、奉献、创新"为追求，
                  坚持"用户至上、以质兴业、以优取胜"的经营宗旨，将不断以优秀的产品与服务回馈社会，
                  与各界优势互补、共创辉煌！
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

      {/* Company Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-orange-500/20 text-orange-300 border-orange-500/30">
              <Users className="w-4 h-4 mr-2" />
              公司规模
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
              公司规模
            </h2>
            <p className="text-xl text-slate-400">
              我们在全球多个地区设有研发中心，拥有专业的技术团队
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamStats.map((stat, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                <CardHeader>
                  <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-2 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {stat.number}
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-purple-200 transition-colors">
                    {stat.label}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm group-hover:text-slate-200 transition-colors">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Key Clients Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-500/20 text-green-300 border-green-500/30">
              <Globe className="w-4 h-4 mr-2" />
              合作伙伴
            </Badge>
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
              重要客户
            </h2>
            <p className="text-xl text-slate-400">
              我们与众多知名企业建立了深度合作关系
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {keyClients.map((client, index) => (
              <Card
                key={index}
                className="bg-white/5 border-white/10 backdrop-blur-sm text-center group hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-green-500/20"
              >
                <CardContent className="p-6">
                  <p className="text-white font-semibold group-hover:text-green-200 transition-colors">
                    {client}
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
                <div className="space-y-4">
                  <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-blue-200 transition-colors">北京总部</h3>
                      <p className="text-slate-300 group-hover:text-slate-200 transition-colors text-sm">
                        地址：北京市海淀区北清路81号中关村壹号A1座12层<br/>
                        邮编：100094<br/>
                        电话：010-62456964
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-green-200 transition-colors">东莞制造中心</h3>
                      <p className="text-slate-300 group-hover:text-slate-200 transition-colors text-sm">
                        地址：东莞市寮步沿河北路7号松湖智谷科创中心D1栋7层<br/>
                        邮编：523412<br/>
                        电话：0769-22279096
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-purple-200 transition-colors">成都研发中心</h3>
                      <p className="text-slate-300 group-hover:text-slate-200 transition-colors text-sm">
                        地址：成都市高新区天府大道北段869号数字经济大厦11层1106室<br/>
                        邮编：610000<br/>
                        电话：028-63918511
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start group hover:bg-white/5 p-3 rounded-lg transition-colors">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform flex-shrink-0">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white group-hover:text-cyan-200 transition-colors">英国研发中心</h3>
                      <p className="text-slate-300 group-hover:text-slate-200 transition-colors text-sm">
                        C Squared Visions Ltd.<br/>
                        Innovation Centre, Southampton Science Park,<br/>
                        2 Venture Road, Chilworth, Southampton, SO16 7NP, UK
                      </p>
                    </div>
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