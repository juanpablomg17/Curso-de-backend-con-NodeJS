const faker = require('faker');

class Category{

constructor(){
    this.categories = [];
    this.generate();
}

generate(){
    const limit = 20;
    for (let index = 0; index < limit; index++) {
        this.categories.push({
            id: faker.datatype.uuid(),
            name: faker.commerce.department()
        })   
    }
}

create(){

}

list(){
    return this.categories;

}

findOne(id){
    return this.categories.find(item => item.id === id);
}

update(){

}


}


module.exports = Category;