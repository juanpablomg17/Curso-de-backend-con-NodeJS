const express = require("express");
const routerApi = require("./routes");
const cors = require('cors');

const {logErros, errorHandler, boomErrorHandler} = require("./middlewares/errors/errorHandler");


const app = express();
const port = process.env.PORT || 3001;
const whitelist = ['http://localhost:8080', 'http://localhost:5500'];
const origin = {
  origin: (origin, callback)=> {
     if (whitelist.includes(origin) || origin){
        callback(null, true)
     }else{
      callback(new Error, 'No permitido');
     }
  }
}

app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");

});

routerApi(app);
app.use(logErros);
app.use(boomErrorHandler);
app.use(errorHandler);







//listening my app
app.listen(port, () =>{
  console.log("My port: " + port);
  console.log(`Listening at http://localhost:${port}`);
  console.log(`products runing into: http://localhost:${port}/api/v1/products`);
  console.log(`products runing into: http://localhost:${port}/api/v1/users`);
  console.log(`products runing into: http://localhost:${port}/api/v1/categories`);
});



