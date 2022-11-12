const Sequelize = require("sequelize");
const connection = require("./database");

const Formulario = connection.define("formulario", {
  nome: {
    type: Sequelize.STRING,
    // allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    // allowNull: true,
  },
  telefone: {
    type: Sequelize.STRING,
    // allowNull: true,
  },
  data: {
    type: Sequelize.DATE,
  },
  cep: {
    type: Sequelize.INTEGER,
  },
  bairro: {
    type: Sequelize.STRING,
    // allowNull: true,
  },
  logradouro: {
    type: Sequelize.STRING,
  },
  complemento: {
    type: Sequelize.STRING,
  },
  localidade: {
    type: Sequelize.STRING,
    // allowNull: true,
  },
  uf: {
    type: Sequelize.STRING,
    // allowNull: true,
  },
});

// Formulario.sync({ force: false }).then(() => {
//   console.log("tabela formulario criada no BD_Mysql");
// });

module.exports = Formulario;
