const faker = require("faker");
const boom = require('@hapi/boom');

const pool = require('../libs/postgresPool');


class ProductService {
  constructor() {
    this.products = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error',(error)=> console.error(error))
  }

  async generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this. products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
        isBlock: faker.datatype.boolean()
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.products.push(newProduct);
    return newProduct;

  }

  async find() {
    const query = 'SELECT * FROM public.users';
    const res = await this.pool.query(query)
    return res.rows;


/*     return new Promise((resolve, reject) => {
      setTimeout(()=> {
        if (!this.products){
          reject("La lista está vacía");
        }else{
          resolve(this.products);
        }
      })
    }) */
      
  }

  async findOne(id) {
    const product = this.products.find(item => item.id === id);
    if (!product){
      throw boom.notFound('Product not found');
    }

    if (!product.isBlock){
      throw boom.conflict('Product is block');
    }
    return product;
  }

  async update(id, data) {
    
    const productIndex = this.products.findIndex(item => item.id === id);
    if (productIndex === -1 ){
        throw boom.notFound('Product not found');

    }else{
      const product = this.products[productIndex];
      this.products[productIndex] = {
        ...product,
        ...data
      };
      return this.products[productIndex];
    }
  }

  async delete(id) {
    const productIndex = this.products.findIndex(item => item.id === id);
    if (productIndex === -1 ){
      throw boom.notFound('Product not found');

    }else{
      this.products.splice(productIndex, 1);
      return {id};
    }

  }
}

module.exports = ProductService;
