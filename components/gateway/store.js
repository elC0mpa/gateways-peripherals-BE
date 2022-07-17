const model = require("./model");

function addGateway(gateway) {
  return new Promise(async (resolve, reject) => {
    try {
      const createdGateway = new model(gateway);
      const saved = await createdGateway.save();
      resolve(saved);
    } catch (error) {
      reject(error);
    }
  });
}

async function getGateways() {
  return new Promise(async (resolve, reject) => {
    try {
      const gateways = await model.find();
      resolve(gateways);
    } catch (error) {
      reject(error);
    }
  });
}

async function getGateway(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const gateway = await model.findById(id);
      resolve(gateway);
    } catch (error) {
      reject(error);
    }
  });
}

async function deleteGateway(id) {
  return new Promise(async (resolve, reject) => {
    try {
      const gateway = await model.findByIdAndDelete(id);
      resolve(gateway);
    } catch (error) {
      reject(error);
    }
  });
}

module.exports = {
  add: addGateway,
  get: getGateway,
  list: getGateways,
  delete: deleteGateway,
};
