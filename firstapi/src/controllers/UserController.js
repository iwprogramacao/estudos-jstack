const users = require("../mocks/users");

/* Aqui ficarão todos os métodos CRUD */

module.exports = {
  listUsers(request, response) {
    /* Tratando a query */
    const { order } = request.query;

    const sortedUsers = users.sort((a, b) => {
      if (order === "desc") {
        return a.id < b.id ? 1 : -1;
      }

      return a.id > b.id ? 1 : -1;
    });

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(JSON.stringify(sortedUsers));
  },
};
