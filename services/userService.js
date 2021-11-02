const faker = require('faker');

const pool = require('../libs/postgresPool');

class User {
    constructor(){
        this.users = [];
        this.generate();
        this.pool = pool;
        this.pool.on('error',(err)=> console.error(err));

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


    async list(){
        
        const query = 'SELECT* FROM public.users';
        const res = await pool.query(query);
        return res.rows;
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