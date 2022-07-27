const fs = require("fs")
const data = "Criando um arquivo txt";

fs.appendFile("criarArquivo.txt", "ola mundo", function (err) {
    if (err) {
        console.log("O arquivo não foi criado!");
    }
});

// fs.readFile("criarArquivo.txt");

const server = http.creat