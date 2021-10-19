const { application } = require("express");
const express = require("express");
const routerApi = require("./routes");
const routes = require('./routes');


const app = express();
const port = 3001;

app.get("/", (req, res) =>{
  res.send("Hola mi server en Express");

});

app.use(express.json());


routerApi(app);


//listening my app
app.listen(port, () =>{
  console.log("My port: " + port);
  console.log(`Listening at http://localhost:${port}`);
});



