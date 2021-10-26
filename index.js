const express = require("express");
const routerApi = require("./routes");

const {logErros, errorHandler, boomErrorHandler} = require("./middlewares/errors/errorHandler");


const app = express();
const port = 3001;

app.use(express.json());

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
});



