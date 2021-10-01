"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _skater = require("../controllers/skater.controllers");

var router = (0, _express.Router)(); //api/skaters/

router.post('/', _skater.createSkater);
var _default = router;
exports["default"] = _default;