const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req, res) => {
    let filePath = '';

    if (req.url === '/' || req.url === '/index.html') {
        filePath = path.join(__dirname, '../frontend', 'index.html');
    } else if (req.url === '/home.html') {
        filePath = path.join(__dirname, '../frontend', 'home.html');
    } else if (req.url === '/quill.js' || req.url === '/index.js') {
        filePath = path.join(__dirname, '../frontend', req.url);
    } else {
        res.statusCode = 404;
        res.end('Page not found');
        return;
    }

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.statusCode = 500;
            res.end('Internal server error');
            return;
        }

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data);
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
