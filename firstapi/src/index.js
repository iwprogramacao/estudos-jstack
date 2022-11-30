const http = require("http");
const users = require("../mocks/users");

const server = http.createServer((request, response) => {
  /* Console log da request que está chegando do servidor */
  console.log(`Request method: ${request.method} | Endpoint: ${request.url}`);
  /* Ao acessar localhost:3000, responde o seguinte texto no servidor:
      
      Request method: GET | Endpoint: /
      Request method: GET | Endpoint: /favicon.ico
    
    Sabendo desses atributos, podemos indicar o que cada requisição irá receber:
  */

  if (request.method === "GET" && request.url === "/users") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(users));
  } else {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end("<h1>Hello World</h1>");
  }
});

server.listen(3000, () => console.log("💀 Server started at http://localhost:3000"));
