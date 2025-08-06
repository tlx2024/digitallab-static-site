# DigitalLab Static Site

这是 DigitalLab 项目的静态网站版本，专门用于 GitHub Pages 部署。

## 项目说明

本项目是从完整的 DigitalLab 网站项目中提取的纯静态版本，包含：

- 主页
- 功能介绍
- 下载页面（使用静态数据）
- 文档
- 关于页面
- 更新日志

## 特性

- ✅ 纯静态网站，无后端依赖
- ✅ 使用静态数据展示版本信息
- ✅ 响应式设计
- ✅ 自动部署到 GitHub Pages
- ✅ 无敏感信息泄露

## 技术栈

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router

## 开发

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm run dev

# 构建生产版本
pnpm run build

# 预览构建结果
pnpm run preview
```

## 部署

本项目配置了 GitHub Actions 自动部署到 GitHub Pages。当代码推送到 `main` 分支时，会自动触发构建和部署流程。

### 手动部署步骤

1. 确保仓库设置中启用了 GitHub Pages
2. 在 Settings > Pages 中选择 "GitHub Actions" 作为部署源
3. 推送代码到 `main` 分支
4. 等待 GitHub Actions 完成部署

## 项目结构

```
src/
├── components/     # 可复用组件
├── pages/         # 页面组件
├── data/          # 静态数据文件
├── hooks/         # 自定义 hooks
├── lib/           # 工具函数
└── assets/        # 静态资源
```

## 与完整版本的区别

- 移除了所有后端 API 调用
- 移除了管理后台功能
- 移除了用户认证系统
- 使用静态数据替代动态数据
- 移除了敏感配置信息

## 许可证

本项目遵循与主项目相同的许可证。