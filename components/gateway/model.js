const mongoose = require("mongoose");

const gatewaySchema = new mongoose.Schema({
  label: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("gateway", gatewaySchema);

module.exports = model;

