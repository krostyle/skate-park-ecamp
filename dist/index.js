"use strict";

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_server["default"].listen(_server["default"].get("port"), function () {
  console.log("Server on port ".concat(_server["default"].get("port")));
  console.log("http://localhost:".concat(_server["default"].get("port")));
});