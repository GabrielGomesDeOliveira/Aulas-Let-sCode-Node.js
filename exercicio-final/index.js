const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == '/POST') {
        fs.appendFile("criarArquivo.txt", 'Olá arquivo txt.', function(err) {
            if (err) {
                console.log("Arquivo não pode ser gravado!")
            }
        });
    } else if(req.url == '/GET') {
        fs.readFile('criarArquivo.txt', 'utf-8', function(err, data) {
            if (err) {
                console.log("Não foi possivel ler o arquivo: " + err.message);
            } else {
                console.log(data)
            }
        });
    }
});

server.listen(8080, 'localhost', () => {
    console.log("server inicializado em: http://localhost:8080");
    console.log("para derrubar o server , basta dar um ctrl + c");
});

