const faker = require("faker");

class ProductService {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this. products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;

  }

  find() {
      return this.products;
  }

  findOne(id) {
      return this.products.find(item => item.id === id);
  }

  update(id, data) {
    const productIndex = this.products.findIndex(item => item.id === id);
    if (productIndex === -1 ){
        throw new Error('Product not found')

    }else{
      const product = this.products[productIndex];
      this.products[productIndex] = {
        ...product,
        ...data
      };
      return this.products[productIndex];
    }
  }

  delete(id) {
    const productIndex = this.products.findIndex(item => item.id === id);
    if (productIndex === -1 ){
        throw new Error('Product not found')

    }else{
      this.products.splice(productIndex, 1);
      return {id};
    }

  }
}

module.exports = ProductService;
