const http = require("http");
const { URL } = require("url");
const routes = require("./routes");

const server = http.createServer((request, response) => {
  /**
   * Separa a URL dos queryParams
   * - true -> transforma a query de text para object
   */
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);

  console.log(`Request method: ${request.method} | Endpoint: ${parsedUrl.pathname}`);

  const route = routes.find(
    (routeObj) => routeObj.method === request.method && routeObj.endpoint === parsedUrl.pathname
  );

  if (route) {
    /* Injetando a query na request
        - Object.fromEntries transforma Iterables em objetos */
    request.query = Object.fromEntries(parsedUrl.searchParams);

    route.handler(request, response);
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Cannot ${request.method} ${parsedUrl.pathname}`);
  }
});

server.listen(3000, () => console.log("💀 Server started at http://localhost:3000"));
