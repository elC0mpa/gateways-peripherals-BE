const store = require("./store");

function addGateway(label, address) {
  return new Promise((resolve, reject) => {
    const gateway = {
      label,
      address,
    };
    // validation must be added
    store.add(gateway);
    resolve(gateway);
  });
}

function getGateways() {
  return new Promise((resolve) => {
    resolve(store.list());
  });
}

function getGateway(id) {
  return new Promise((resolve) => {
    resolve(store.get(id));
  });
}

function deleteGateway(id) {
  return new Promise((resolve) => {
    resolve(store.delete(id));
  });
}

module.exports = {
  addGateway,
  getGateways,
  getGateway,
  deleteGateway,
};
