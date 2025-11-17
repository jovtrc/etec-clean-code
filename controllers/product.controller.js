class ProductController {
  constructor(service) {
    this.productService = service;
  }

  list(request, response) {
    const products = this.productService.listAll();
    response.json(products);
  }

  delete(request, response) {
    const productId = request.params.id;
    this.productService.delete(productId);

    response.status(200).json({ message: "Produto removido com sucesso" });
  }

  create(request, response) {
    const newProduct = this.productService.create(request.body);

    response.status(201).json(newProduct);
  }
}

module.exports = ProductController;
