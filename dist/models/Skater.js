"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _database = require("../database/database");

var Skater = _database.sequelize.define('skater', {
  id: {
    type: _sequelize.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  email: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  nombre: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  anos_experiencia: {
    type: _sequelize.Sequelize.INTEGER,
    allowNull: false
  },
  especialidad: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  foto: {
    type: _sequelize.Sequelize.STRING,
    allowNull: false
  },
  estado: {
    type: _sequelize.Sequelize.BOOLEAN,
    allowNull: false
  }
}, {
  timestamps: false
});

var _default = Skater;
exports["default"] = _default;