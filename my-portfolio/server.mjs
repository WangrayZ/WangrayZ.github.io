import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(fileURLToPath(import.meta.url));
const SITE = path.join(ROOT, "_site");
const WORKSPACE = path.resolve(ROOT, "..");
const PORT = process.env.PORT || 4173;

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".mp4": "video/mp4",
  ".pdf": "application/pdf",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  ".dwg": "application/octet-stream",
};

function send(res, code, body, type) {
  res.writeHead(code, { "Content-Type": type || "text/plain; charset=utf-8" });
  res.end(body);
}

function listing(dir, urlPath) {
  const items = fs.readdirSync(dir, { withFileTypes: true }).map((d) => {
    const name = d.name;
    const href = urlPath.replace(/\/?$/, "/") + encodeURIComponent(name) + (d.isDirectory() ? "/" : "");
    return `<li><a href="${href}">${name}${d.isDirectory() ? "/" : ""}</a></li>`;
  });
  return `<!doctype html><meta charset="utf-8"><title>${urlPath}</title>
<style>body{background:#121215;color:#EFEAE1;font:14px/1.8 system-ui;padding:40px}a{color:#F26A43;text-decoration:none}li{margin:4px 0}</style>
<h3>${urlPath}</h3><ul>${items.join("")}</ul>`;
}

const server = http.createServer((req, res) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname);
  } catch {
    return send(res, 400, "bad request");
  }

  /* 原始资料：/files/ 映射到工作区目录 */
  if (pathname.startsWith("/files/")) {
    const rel = pathname.slice("/files/".length);
    const target = path.resolve(WORKSPACE, rel);
    if (!target.startsWith(WORKSPACE)) return send(res, 403, "forbidden");
    fs.stat(target, (err, st) => {
      if (err) return send(res, 404, "not found");
      if (st.isDirectory()) {
        try {
          return send(res, 200, listing(target, pathname), "text/html; charset=utf-8");
        } catch {
          return send(res, 500, "listing failed");
        }
      }
      const ext = path.extname(target).toLowerCase();
      res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
      fs.createReadStream(target).pipe(res);
    });
    return;
  }

  let file = path.join(SITE, pathname);
  if (!file.startsWith(SITE)) return send(res, 403, "forbidden");
  if (pathname.endsWith("/")) file = path.join(file, "index.html");
  fs.stat(file, (err, st) => {
    if (err || !st.isFile()) {
      const fallback = path.join(SITE, "index.html");
      return fs.readFile(fallback, (e, data) => {
        if (e) return send(res, 404, "not found");
        send(res, 200, data, "text/html; charset=utf-8");
      });
    }
    const ext = path.extname(file).toLowerCase();
    res.writeHead(200, { "Content-Type": MIME[ext] || "application/octet-stream" });
    fs.createReadStream(file).pipe(res);
  });
});

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Preview: http://127.0.0.1:${PORT}/`);
});
