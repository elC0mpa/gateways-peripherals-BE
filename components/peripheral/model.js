const mongoose = require("mongoose");

const peripheralSchema = new mongoose.Schema({
  gateway: {
    type: mongoose.Schema.ObjectId,
    ref: "gateway",
  },
  uid: {
    type: Number,
    required: true,
  },
  vendor: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
});

const model = mongoose.model("peripheral", peripheralSchema);

module.exports = model;
