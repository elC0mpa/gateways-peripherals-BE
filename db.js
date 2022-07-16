const db = require("mongoose");
db.Promise = global.Promise;

function connect(url) {
  db.connect(url, {
    useNewUrlParser: true,
  })
    .then(() => {
      console.log("Conectado a la based de datos");
    })
    .catch((error) => {
      console.error("Problema al conectarse a la base de datos", error);
    });
}

module.exports = connect;
