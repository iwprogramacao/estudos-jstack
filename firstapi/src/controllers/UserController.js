const users = require("../mocks/users");

/* Aqui ficarão todos os métodos CRUD */

module.exports = {
  listUsers(request, response) {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(users));
  },
};
