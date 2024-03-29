const express = require("express");

const response = require("./../../network/response");
const controller = require("./controller");

const router = express.Router();

router.get("/", (req, res) => {
  controller
    .getGateways()
    .then((gateways) => {
      response.success(req, res, gateways, 200);
    })
    .catch((error) => {
      response.error(req, res, error, 500);
    });
});

router.get("/:id", (req, res) => {
  controller
    .getGateway(req.params.id)
    .then((gateway) => {
      response.success(req, res, gateway, 200);
    })
    .catch((error) => {
      response.error(req, res, error, 500);
    });
});

router.post("/", (req, res) => {
  controller
    .addGateway(req.body.serialNumber, req.body.label, req.body.address)
    .then((gateway) => {
      response.success(req, res, gateway, 201);
    })
    .catch((error) => {
      response.error(req, res, error);
    });
});

router.delete("/:id", (req, res) => {
  controller
    .deleteGateway(req.params.id)
    .then((gateway) => {
      response.success(req, res, gateway, 200);
    })
    .catch((error) => {
      response.error(req, res, error, 500);
    });
});

module.exports = router;
