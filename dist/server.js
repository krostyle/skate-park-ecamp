"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _config = _interopRequireDefault(require("./config"));

var _skaters = _interopRequireDefault(require("./routes/skaters.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Importing routes
//Initialization
var app = (0, _express["default"])(); //Settings

app.set("port", _config["default"].PORT);
var paths = {
  skaters: "/api/skaters"
}; //Middleware

app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json()); //Routes

app.use(paths.skaters, _skaters["default"]);
var _default = app;
exports["default"] = _default;