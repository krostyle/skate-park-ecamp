"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sequelize = void 0;

var _sequelize = require("sequelize");

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var sequelize = new _sequelize.Sequelize(_config["default"].DB_NAME, _config["default"].DB_USER, _config["default"].DB_PASSWORD, {
  host: _config["default"].DB_HOST,
  dialect: _config["default"].DB_DIALECT,
  pool: {
    max: 5,
    min: 0,
    require: 30000,
    idle: 10000
  },
  logging: false
});
exports.sequelize = sequelize;