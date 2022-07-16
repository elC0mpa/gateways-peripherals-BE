const store = require("./store");

function addPeripheral(gateway, uid, vendor, status) {
  return new Promise((resolve, reject) => {
    const createdAt = new Date();
    const peripheral = {
      gateway,
      uid,
      vendor,
      status,
      createdAt,
    };
    // validation must be added
    store.add(peripheral);
    resolve(peripheral);
  });
}

function getPeripherals() {
  return new Promise((resolve) => {
    resolve(store.list());
  });
}

function getPeripheral(id) {
  return new Promise((resolve) => {
    resolve(store.get(id));
  });
}

function deletePeripheral(id) {
  return new Promise((resolve) => {
    resolve(store.delete(id));
  });
}

module.exports = {
  addPeripheral,
  getPeripherals,
  getPeripheral,
  deletePeripheral,
};
