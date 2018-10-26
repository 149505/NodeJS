'use strict'

const app = require("../NoFood.Api/bin/express");
const variables = require("../NoFood.Api/bin/configuration/variables");

app.listen(variables.Api.port, () => {
    console.log(`api incializada com sucesso na porta ${variables.Api.port}`);
})

// app.listen(3000, () => {
//     console.log("api incializada com sucesso na porta 3000")
// })

//module.exports = app;

//Exemplo para tornar o serverpi e o express visiaveis
// module.exports = {
//     ServerApi: app,
//     ex: express
// }