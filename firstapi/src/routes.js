const UserController = require("../src/controllers/UserController");

/* Aqui ficarão todas as rotas que serão filtradas no index.js */

module.exports = [
  {
    method: "GET",
    endpoint: "/users",
    handler: UserController.listUsers,
  },
  {
    method: "GET",
    endpoint: "/users/:id",
    handler: UserController.getUserById,
  },
  {
    method: "POST",
    endpoint: "/users",
    handler: UserController.createUser,
  },
  {
    method: "PUT",
    endpoint: "/users/:id",
    handler: UserController.updateUser,
  },
  {
    method: "DELETE",
    endpoint: "/users/:id",
    handler: UserController.deleteUser,
  },
];
