// Tiny static file server so the app runs on http://localhost (Chrome allows the
// microphone there; it never does on file:/// pages).
var http = require('http'), fs = require('fs'), path = require('path');
var root = __dirname, port = 8765;

var types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.css':'text/css',
              '.txt':'text/plain; charset=utf-8', '.ico':'image/x-icon' };

http.createServer(function (req, res) {
  var rel = decodeURIComponent(req.url.split('?')[0]);
  if (rel === '/') { rel = '/index.html'; }
  var file = path.join(root, path.normalize(rel).replace(/^([\\/])+/, ''));
  if (file.indexOf(root) !== 0) { res.writeHead(403); return res.end('Forbidden'); }
  fs.readFile(file, function (err, data) {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    res.writeHead(200, { 'Content-Type': types[path.extname(file).toLowerCase()] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(port, '127.0.0.1', function () {
  console.log('Speak & Print is running at  http://localhost:' + port + '/');
  console.log('Keep this window open while you use the app. Close it to stop.');
});
