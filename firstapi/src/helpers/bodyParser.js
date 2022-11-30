function bodyParser(request, callback) {
  let body = "";

  /* Event listener */
  request.on("data", (chunk) => {
    body += chunk;
  });

  request.on("end", () => {
    body = JSON.parse(body);
    request.body = body;
    callback();
  });
}

module.exports = bodyParser;
