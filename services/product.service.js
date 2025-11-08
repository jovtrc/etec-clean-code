const Product = require("../entities/product.entity");
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

    const productEntity = new Product(newProduct);

    return productRepository.create(productEntity);
  }

  delete(id) {
    this.findById(id);

    productRepository.delete(id);

    return;
  }

  findById(id) {
    const existingProduct = productRepository.findById(id);

    if (!existingProduct) {
      throw new Error("Produto não existe");
    }

    return existingProduct;
  }

  // update(id, values) {
  //   const existingProduct;
  // }
}

module.exports = new ProductService();
