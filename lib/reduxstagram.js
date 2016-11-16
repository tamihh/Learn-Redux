'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _style = require('./styles/style.styl');

var _style2 = _interopRequireDefault(_style);

var _Main = require('./components/Main');

var _Main2 = _interopRequireDefault(_Main);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import css
(0, _reactDom.render)(_react2.default.createElement(_Main2.default, null), document.getElementById('root'));

//import components