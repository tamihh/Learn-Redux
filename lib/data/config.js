'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sentry_url = undefined;
exports.logException = logException;

var _ravenJs = require('raven-js');

var _ravenJs2 = _interopRequireDefault(_ravenJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sentry_key = 'cb55d4f05cd443ce82303222f77ef5e0';
var sentry_app = '61499';
var sentry_url = exports.sentry_url = 'https://' + sentry_key + '@app.getsentry.com/' + sentry_app;

function logException(ex, context) {
  _ravenJs2.default.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}