import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: '首页' },
    { path: '/features', label: '产品功能' },
    { path: '/downloads', label: '版本下载' },
    { path: '/about', label: '关于我们' }
  ];

  const supportLinks = [
    { href: '#', label: '用户手册' },
    { href: '#', label: '技术支持' },
    { href: '#', label: '常见问题' },
    { href: '#', label: '联系我们' }
  ];

  const legalLinks = [
    { href: '#', label: '隐私政策' },
    { href: '#', label: '服务条款' },
    { href: '#', label: '许可协议' },
    { href: '#', label: '版权声明' }
  ];

  return (
    <footer className="bg-slate-900 border-t border-white/10">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DL</span>
              </div>
              <span className="text-white font-bold text-xl">DigitalLab</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
              专注于数字化实验室解决方案，为科研工作者提供高效、精准的实验数据采集和分析工具。
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">支持与帮助</h3>
            <ul className="space-y-2">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">联系信息</h3>
            <div className="space-y-3">
              <div className="flex items-center text-slate-300 text-sm">
                <Mail className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>contact@digitallab.com</span>
              </div>
              <div className="flex items-center text-slate-300 text-sm">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>+86 400-123-4567</span>
              </div>
              <div className="flex items-start text-slate-300 text-sm">
                <MapPin className="w-4 h-4 mr-2 flex-shrink-0 mt-0.5" />
                <span>北京市海淀区中关村科技园区</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Legal Links */}
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-400 hover:text-white transition-colors text-xs"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Copyright */}
            <div className="flex items-center text-slate-400 text-xs">
              <span>&copy; {currentYear} DigitalLab. 保留所有权利.</span>
              <Heart className="w-3 h-3 mx-2 text-red-500" />
              <span>用心打造</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;