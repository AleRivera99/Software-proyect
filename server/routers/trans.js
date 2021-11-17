const express = require("express")

const TransController = require("../controllers/Trans")
const multipart = require("connect-multiparty");

const md_auth = require('../middlewares/authenticated')
const api = express.Router();

api.get("/transf",[md_auth.ensureAuth], TransController.getTrans);
api.post("/signTrans", TransController.signTrans);
api.get("/transf-active",[md_auth.ensureAuth], TransController.getTransActive);
module.exports = api;