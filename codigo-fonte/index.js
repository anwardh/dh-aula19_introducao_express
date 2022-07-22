
// Importando o Express para o Projeto
const Express = require("express");

// Inicializando o Express no Projeto Node
const Aplicativo = new Express ();

// Disponibilizo o meu Recurso (Endpoint) via Http
Aplicativo.get('/', (RequisicaoCliente, RespostaServidor) => RespostaServidor.send("Hello World!"));

// Configurei a porta de acesso aos recursos do Express via Http
Aplicativo.listen(1234, ( ) => console.log("Servidor Beleza"));
