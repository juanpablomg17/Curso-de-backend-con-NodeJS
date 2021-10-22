const faker = require('faker');
const { get } = require('../routes/categoriesRouter');

class User {
    constructor(){
        this.users = [];
        this.generate();

    }


    generate(){
        let limit = 10;
        for (let index = 0; index < limit; index++) {
            this.users.push(
                {
                    id: faker.datatype.uuid(),
                    name: faker.name.firstName(),
                    lastName: faker.name.lastName(),
                    user: faker.internet.userName(),
                    password: faker.internet.password(),
                    jobArea: faker.name.jobArea(),
                }
            )
            
        }
    }


    list(){
        return this.users;
    }

    findOne(id){
        return this.users.find(item => item.id === id);
    }

    create(){

    }

    update(){

    }

    delete(){

    }
}


module.exports = User;