// Service Worker for 老何康复工作台
// 关键：使用固定 cache 版本号 + 启动时清理所有旧 cache
const CACHE_VERSION = 'v7';  // v7: 修复手法技术数据(72条)+扩展训练库(643)+运动损伤康复(91条)+优化生成器界面
const CACHE = 'rehab-' + CACHE_VERSION;
const PRECACHE = [
  '/',
  '/manifest.json',
  '/index.html'
];

self.addEventListener('install', (e) => {
  // 强制立即接管页面，不等旧 sw 关闭
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(PRECACHE))
  );
});

self.addEventListener('activate', (e) => {
  // 关键：清理所有 rehab-* 旧 cache（包括 v1, v2, rehab-v2-xxxx 等）
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k.startsWith('rehab-') && k !== CACHE).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // API 请求永远走网络
  if (e.request.url.includes('/api/')) {
    e.respondWith(fetch(e.request));
    return;
  }
  // 导航请求（HTML 页面）：network-first，确保拿到最新版本
  if (e.request.mode === 'navigate' || (e.request.method === 'GET' && e.request.headers.get('accept') && e.request.headers.get('accept').includes('text/html'))) {
    e.respondWith(
      fetch(e.request).then(res => {
        const cloned = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, cloned));
        return res;
      }).catch(() => caches.match(e.request).then(r => r || caches.match('/index.html')))
    );
    return;
  }
  // 静态文件：cache-first
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      const cloned = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, cloned));
      return res;
    }))
  );
});
