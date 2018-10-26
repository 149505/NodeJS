const express = require("express");
const bodyParser = require("body-parser");

//Rotas
//const categoriaRouter = require("../routes/categoria-router");
const categoriaRouter = require("../routes/categorias-router");

//criando/importando a api/server do express
const app = express();

//configurando parser do json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

//configurando a rota
app.use("/api/categoria", categoriaRouter);


//exportando nossa api
module.exports = app;
