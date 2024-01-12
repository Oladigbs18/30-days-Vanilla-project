"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
import http_1 from "http";
var hostname = '127.0.0.1';
var port = 3000;
var server = http_1.createServer(function (req, res) {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});
server.listen(port, hostname, function () {
    console.log("Server running at http://".concat(hostname, ":").concat(port, "/"));
});
