"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Modal.css");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _fa = require("react-icons/fa");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const Modal = _ref => {
  let {
    showModal,
    hideModal
  } = _ref;
  return showModal && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-overlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-wrapper"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-header"
  }, /*#__PURE__*/_react.default.createElement("h3", null, "Enter your modal title here"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-close-button",
    onClick: hideModal
  }, /*#__PURE__*/_react.default.createElement(_fa.FaTimes, null))), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-body"
  }, "Hello, your message here"), /*#__PURE__*/_react.default.createElement("div", {
    className: "modal-footer"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-close-button1",
    onClick: hideModal
  }, "Ok"), /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "modal-close-button2",
    onClick: hideModal
  }, "Cancel"))))));
};
exports.Modal = Modal;
Modal.propTypes = {
  showModal: _propTypes.default.bool.isRequired,
  hideModal: _propTypes.default.func.isRequired
};