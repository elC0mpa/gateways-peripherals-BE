const mongoose = require("mongoose");

const gatewaySchema = new mongoose.Schema({
  serialNumber: {
    type: String,
    required: [true, "Serial number is required"],
    unique: true,
  },
  label: {
    type: String,
    required: [true, "Label is required"],
  },
  address: {
    type: String,
    required: true,
  },
});

const model = mongoose.model("gateway", gatewaySchema);

module.exports = model;
