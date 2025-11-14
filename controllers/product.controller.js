const ProductService = require("../services/product.service");

class ProductController {
  list(request, response) {
    const products = ProductService.listAll();
    response.json(products);
  }

  delete(request, response) {
    const productId = request.params.id;
    ProductService.delete(productId);

    response.status(200).json({ message: "Produto removido com sucesso" });
  }

  create(request, response) {
    const newProduct = ProductService.create(request.body);

    response.status(201).json(newProduct);
  }
}

module.exports = new ProductController();
