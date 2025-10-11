const express = require("express");

const server = express();
server.use(express.json());
const port = 3000;

let productsList = [
  {
    id: 1,
    name: "Morango",
    price: 10.0,
    quantity: 4,
  },
];

server.get("/products", (request, response) => {
  response.json(productsList);
});

server.post("/products", (request, response) => {
  const newProduct = request.body;
  const newId = productsList.length + 1;

  newProduct.id = newId;
  productsList.push(newProduct);

  response.status(201).json(newProduct);
});

server.get("/", (request, response) => {
  response.send("Hello World");
});

server.listen(port, () => {
  console.log("Projeto rodando na porta" + port);
});
