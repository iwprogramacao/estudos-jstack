const http = require("http");
const { URL } = require("url");
const routes = require("./routes");
const bodyParser = require("./helpers/bodyParser");

const server = http.createServer((request, response) => {
  const parsedUrl = new URL(`http://localhost:3000${request.url}`);
  let { pathname } = parsedUrl;
  let id = null;

  const splitEndpoint = pathname.split("/").filter(Boolean);
  if (splitEndpoint.length > 1) {
    pathname = `/${splitEndpoint[0]}/:id`;
    id = splitEndpoint[1];
  }

  const route = routes.find(
    (routeObj) => routeObj.method === request.method && routeObj.endpoint === pathname
  );

  if (route) {
    request.query = Object.fromEntries(parsedUrl.searchParams);
    request.params = { id };

    response.send = (statusCode, body) => {
      response.writeHead(statusCode, { "Content-Type": "application/json" });
      response.end(JSON.stringify(body));
    };

    if (["POST", "PUT"].includes(request.method)) {
      /* request.method === "POST" || request.method === "PUT" */
      bodyParser(request, () => route.handler(request, response));
    } else {
      route.handler(request, response);
    }
  } else {
    response.writeHead(404, { "Content-Type": "text/html" });
    response.end(`Cannot ${request.method} ${pathname}`);
  }
});

server.listen(3000, () => console.log("💀 Server started at http://localhost:3000"));
