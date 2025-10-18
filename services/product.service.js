const productRepository = require("../repositories/product.repository");

class ProductService {
  listAll() {
    return productRepository.findAll();
  }

  create(newProduct) {
    const existingProduct = productRepository.findByName(newProduct.name);

    if (existingProduct) {
      throw new Error("Produto já cadastrado");
    }

    return productRepository.create(newProduct);
  }
}

module.exports = new ProductService();
