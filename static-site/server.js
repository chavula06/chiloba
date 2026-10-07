const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 8000;
const ROOT = __dirname;
const STORE = path.join(ROOT, 'submissions.json');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.svg': 'image/svg+xml',
};

function loadStore() {
  try {
    if (fs.existsSync(STORE)) return JSON.parse(fs.readFileSync(STORE, 'utf8'));
  } catch (e) { console.error('store load error', e); }
  return { bookings: [], contacts: [] };
}

function saveStore(s) {
  try { fs.writeFileSync(STORE, JSON.stringify(s, null, 2)); }
  catch (e) { console.error('store save error', e); }
}

const server = http.createServer((req, res) => {
  const url = new URL(req.url, 'http://localhost');
  const pathname = url.pathname;

  // ---- API endpoints ----
  if (pathname === '/api/bookings' && req.method === 'POST') return handleForm(req, res, 'bookings');
  if (pathname === '/api/contact' && req.method === 'POST') return handleForm(req, res, 'contacts');

  // ---- Static file serving ----
  let p = pathname === '/' ? '/index.html' : pathname;
  // Block path traversal
  if (p.includes('..')) return res403(res);
  const filePath = path.normalize(path.join(ROOT, p));
  if (!filePath.startsWith(ROOT)) return res403(res);
  const ext = path.extname(filePath).toLowerCase();
  if (!fs.existsSync(filePath)) return res404(res);
  const stream = fs.createReadStream(filePath);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'application/octet-stream' });
  stream.pipe(res);
});

function handleForm(req, res, key) {
  let body = '';
  req.on('data', (c) => { body += c; if (body.length > 1e6) req.destroy(); });
  req.on('end', () => {
    let parsed = {};
    try { parsed = JSON.parse(body); } catch { try { parsed = Object.fromEntries(new URLSearchParams(body)); } catch (e) {} }
    // Validate required fields
    const required = key === 'bookings'
      ? ['name', 'email', 'phone', 'service', 'date', 'time']
      : ['name', 'email', 'subject', 'message'];
    const missing = required.filter((f) => !parsed[f]);
    if (missing.length) return json(res, 400, { ok: false, error: 'Missing: ' + missing.join(', ') });

    const record = { ...parsed, submitted_at: new Date().toISOString() };
    const store = loadStore();
    store[key].push(record);
    saveStore(store);

    console.log(`[${key}] ${new Date().toISOString()}`, record);
    const msg = key === 'bookings'
      ? 'Booking request submitted! We will confirm within 24 hours.'
      : 'Message sent! We will get back to you within 24 hours.';
    json(res, 200, { ok: true, message: msg });
  });
  req.on('error', () => json(res, 400, { ok: false, error: 'Bad request' }));
}

function json(res, code, obj) {
  res.writeHead(code, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(obj));
}
function res404(res) { res.writeHead(404); res.end('Not found'); }
function res403(res) { res.writeHead(403); res.end('Forbidden'); }

server.listen(PORT, () => console.log(`Static server + API running on http://localhost:${PORT}`));
