"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ListSection(props) {
  return _react.default.createElement("div", {
    className: "unc-list-section"
  }, _react.default.createElement("h4", {
    className: "unc-audio-title"
  }, props.title), props.children && props.children.length && props.children.map(function (child, idx) {
    return _react.default.cloneElement(child, {
      key: idx,
      onClickItem: props.onClickItem,
      currentItem: props.currentItem,
      file: props.file,
      sectionTitle: props.title,
      items: props.items
    });
  }));
}

var _default = ListSection;
exports.default = _default;
