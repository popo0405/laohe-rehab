// Cloudflare Pages _worker.js
// 处理 /api/* 路由；
// 其他路径通过 env.ASSETS 走 Pages 资源

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type"
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const path = url.pathname;

    if (path === '/api/data') {
      if (request.method === 'GET') {
        try {
          const value = await env.REHAB_DATA.get("main");
          if (!value) {
            return new Response(JSON.stringify({
              rehab_clients: [], rehab_cases: [], rehab_learning_state: {}, updatedAt: null
            }), { headers: { "Content-Type": "application/json", ...CORS } });
          }
          return new Response(value, {
            headers: { "Content-Type": "application/json", "Cache-Control": "no-store", ...CORS }
          });
        } catch (e) {
          return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { "Content-Type": "application/json", ...CORS } });
        }
      }

      if (request.method === 'POST') {
        try {
          const body = await request.json();
          body.updatedAt = new Date().toISOString();
          body.updatedBy = body.updatedBy || "unknown";
          if (url.searchParams.get('backup') === '1') {
            const old = await env.REHAB_DATA.get("main");
            if (old) {
              const backupKey = url.searchParams.get('backupKey') || ('backup-' + Date.now());
              await env.REHAB_DATA.put(backupKey, old);
              body._backupKey = backupKey;
            }
          }
          await env.REHAB_DATA.put("main", JSON.stringify(body));
          return new Response(JSON.stringify({ ok: true, updatedAt: body.updatedAt, backupKey: body._backupKey }), {
            headers: { "Content-Type": "application/json", ...CORS }
          });
        } catch (e) {
          return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { "Content-Type": "application/json", ...CORS } });
        }
      }

      if (request.method === 'OPTIONS') {
        return new Response(null, { headers: CORS });
      }
    }

    if (path === '/api/backup' && request.method === 'GET') {
      try {
        const value = await env.REHAB_DATA.get("main");
        const data = value || JSON.stringify({ rehab_clients: [], rehab_cases: [], rehab_learning_state: {}, updatedAt: null });
        return new Response(data, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Content-Disposition": "attachment; filename=\"rehab-backup-" + new Date().toISOString().slice(0,10) + ".json\"",
            ...CORS
          }
        });
      } catch (e) {
        return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { "Content-Type": "application/json", ...CORS } });
      }
    }

    // 静态资源 - 全部交给 env.ASSETS（包括 / 路径）
    return env.ASSETS.fetch(request);
  }
}
