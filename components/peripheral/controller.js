const model = require("./model");

function addPeripheral(gateway, uid, vendor, status) {
  return new Promise(async (resolve, reject) => {
    try {
      const createdPeripheral = new model({
        gateway,
        uid,
        vendor,
        status,
        createdAt: new Date(),
      });
      const saved = await createdPeripheral.save();
      resolve(saved);
    } catch (error) {
      reject(error);
    }
  });
}

async function getPeripherals() {
  return new Promise(async (resolve, reject) => {
    try {
      const peripherals = await model.find();
      resolve(peripherals);
    } catch (error) {
      reject(error);
    }
  });
}

async function getPeripheral(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const peripheral = await model.findById(id);
      resolve(peripheral);
    } catch (error) {
      reject(error);
    }
  });
}

async function deletePeripheral(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const peripheral = await model.findByIdAndDelete(id);
      resolve(peripheral);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  addPeripheral,
  getPeripheral,
  getPeripherals,
  deletePeripheral,
};
