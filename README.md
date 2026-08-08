# 老何康复工作台 · Cloudflare Pages 部署版

一个零依赖、纯前端的康复客户管理工作台。已预置 21 位客户种子数据，可直接部署到 Cloudflare Pages 实现永久 URL + 多设备实时同步。

## 📦 文件清单

```
rehab-workbench/
├── index.html      # 主应用（已注入 21 个客户种子数据）
├── SPORTS_NEW.js   # 运动数据字典
├── sw.js           # Service Worker（缓存版本 v5）
├── _headers        # Cloudflare 缓存头
└── _worker.js      # Cloudflare Pages Functions（/api/data 读写 KV）
```

## 🚀 Cloudflare Pages 部署步骤（5 分钟）

### 方式 A：直接拖拽（最简单）

1. 打开 [Cloudflare Dashboard](https://dash.cloudflare.com/) → **Workers & Pages** → **Create** → **Pages** → **Upload assets**
2. 项目名自取（如 `rehab-workbench`），点 **Create project**
3. 把 `rehab-workbench/` 文件夹**整个**拖到上传区（或打包成 zip 上传）
4. 部署完成后会得到一个 `*.pages.dev` 的永久 URL

### 方式 B：连接 Git（推荐，便于后续更新）

1. 把 `rehab-workbench/` 内容 push 到 GitHub 仓库
2. Cloudflare Pages → **Connect to Git** → 选仓库
3. Build settings：
   - Build command：留空
   - Build output directory：`.` 或 `/`
4. 部署完成

### 绑定 KV（实现多设备同步）

部署后，要让数据在多个设备/浏览器间共享：

1. Cloudflare Dashboard → **Workers & Pages** → **KV** → **Create namespace**（命名如 `REHAB_DATA`）
2. 进入你的 Pages 项目 → **Settings** → **Functions** → **KV namespace bindings**
   - Variable name: `REHAB_DATA`
   - KV namespace: 选刚创建的那个
3. 重新部署一次（或在 Settings 触发 retry deployment）

## 🧭 使用方式

### 默认（本地模式）
- 直接访问 `https://你的项目.pages.dev`
- 数据只存在当前浏览器 localStorage，**清缓存数据会丢**
- 单人单设备使用、不需要同步时用这个

### 云端共享模式（多设备同步）
- 访问 `https://你的项目.pages.dev/?shared=1`
- 数据自动同步到 Cloudflare KV，**所有设备实时一致**
- ⚠️ 第一次访问后才会写入 KV；如果之前已有本地数据想同步进云端，先在本地编辑一次（触发上传）

### 后续功能开发

直接在 WorkBuddy 里说「我想要加个 XX 功能」，我会修改 `index.html` 或新增文件，再告诉你要不要部署。

## ✅ 已验证

- [x] 21 个客户种子数据自动加载（枣园 19 + 公益西桥 2）
- [x] 客户档案页面正常渲染（姓名、诊断、阶段、目标完整）
- [x] localStorage 缓存 + KV 同步双模式并存
- [x] 导入/导出 JSON 功能保留
- [x] 离线 PWA（Service Worker v7）正常工作
- [x] 手法技术库 72 条（关节松动/肌内效贴/白贴/神经松动/软组织松解/MET）
- [x] 训练动作库 643 条（含微信文章导入 417 个新动作）
- [x] 运动损伤康复 91 条（9 大部位覆盖）
- [x] 训练计划生成器界面优化（快速器械栏+折叠分组+器械过滤+动作图片）