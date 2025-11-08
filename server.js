const express = require("express");
const productController = require("./controllers/product.controller");

const server = express();
server.use(express.json());
const port = 3000;

server.get("/products", productController.list);
server.post("/products", productController.create);
server.delete("/products/:id", productController.delete);

server.get("/", (request, response) => {
  response.send("Hello World");
});

server.listen(port, () => {
  console.log("Projeto rodando na porta" + port);
});
