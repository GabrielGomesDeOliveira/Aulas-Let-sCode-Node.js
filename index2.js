const http = require('http');
const port = 3000
const ip = "localhost"

const server = http.createServer((req, res) => {
    const { url, method } = req

    if (method === "GET") {
        return res.end("[]");
    }

    if (method === 'POST') {
        return res.end("Criado");
    }

    return res.end("ok");
})