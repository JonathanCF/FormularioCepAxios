const express = require("express");
const app = express();
const routes = require("./routes/router");
const { engine } = require("express-handlebars");
const connection = require("./database/database");
const bodyParser = require("body-parser");
const Formulario = require("./database/Formulario");

require("dotenv").config();

// Data Base

connection
  .authenticate()
  .then(() => {
    console.log("Conexão feita com o banco de dados!");
  })
  .catch((msgErro) => {
    console.log(msgErro);
  });

// view engine
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.use(express.json());

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", routes);
app.use("/formulario", routes);

app.listen(process.env.PORT, () => {
  console.log("Servidor rodando na porta: " + process.env.PORT);
});
