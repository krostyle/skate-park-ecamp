"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createSkater = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _Skater = _interopRequireDefault(require("../models/Skater"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createSkater = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, email, nombre, password, anos_experiencia, especialidad, foto, estado, newSkater, salt;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, email = _req$body.email, nombre = _req$body.nombre, password = _req$body.password, anos_experiencia = _req$body.anos_experiencia, especialidad = _req$body.especialidad, foto = _req$body.foto, estado = _req$body.estado;
            _context.prev = 1;
            _context.next = 4;
            return _Skater["default"].create({
              email: email,
              nombre: nombre,
              password: password,
              anos_experiencia: anos_experiencia,
              especialidad: especialidad,
              foto: foto,
              estado: estado
            });

          case 4:
            newSkater = _context.sent;
            salt = _bcryptjs["default"].genSaltSync();
            newSkater.password = _bcryptjs["default"].hashSync(password, salt);
            return _context.abrupt("return", res.status(200).json({
              message: 'Skater created successfully',
              data: newSkater
            }));

          case 10:
            _context.prev = 10;
            _context.t0 = _context["catch"](1);
            console.log(_context.t0);
            res.status(500).json({
              message: 'Error creating Skater',
              data: {}
            });

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[1, 10]]);
  }));

  return function createSkater(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createSkater = createSkater;

var getSkater = function getSkater(req, res) {};