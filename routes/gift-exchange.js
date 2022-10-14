const express = require("express");
const router = express.Router();
const model = require("../models/gift-exchange");



// the content of the post will have -> res.send(model.traditional(req.body));

// Example post request: 
// {
//   "names":["Kratos","Turing","Lovelace","Athena"]
// }

module.exports = router;
