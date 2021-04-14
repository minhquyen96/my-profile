"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _AudioListHeader = _interopRequireDefault(require("./AudioListHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var AudioList =
/*#__PURE__*/
function (_React$Component) {
  _inherits(AudioList, _React$Component);

  function AudioList(props) {
    var _this;

    _classCallCheck(this, AudioList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioList).call(this, props));
    _this.state = {
      currentItem: null,
      updateCurrentTime: false
    }; // Stores all the <ListItem /> after that they are rendered.

    _this.items = [];
    _this.onClickItem = _this.onClickItem.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.onTimeUpdate = _this.onTimeUpdate.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.nextItem = _this.nextItem.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.backItem = _this.backItem.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }
  /**
   * Lifecycle method
   */


  _createClass(AudioList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        currentItem: this.items[0]
      });
    }
    /**
     * Callback function executed from <AudioListHeader /> within the
     * ontimeupdate audio function.
     *
     * @param  {float} currentTime Audio currentTime value
     */

  }, {
    key: "onTimeUpdate",
    value: function onTimeUpdate(currentTime) {
      var _this2 = this;

      this.items.forEach(function (item) {
        if (_this2.state.currentItem !== item && _this2.state.currentItem.props.file === item.props.file && currentTime >= item.props.start && currentTime <= item.props.end) {
          _this2.setState({
            currentItem: item,
            updateCurrentTime: false
          });
        }
      });
    }
    /**
     * Click Handler for items. Changes the currentItem for the clicked item and
     * forces to update the currentTime audio property.
     *
     * @param  {ListItem} item ListItem component that was clicked.
     */

  }, {
    key: "onClickItem",
    value: function onClickItem(item) {
      if (item !== this.state.currentItem) {
        this.setState({
          currentItem: item,
          updateCurrentTime: true
        });
      }
    }
    /**
     * Skip to the next audio item.
     */

  }, {
    key: "nextItem",
    value: function nextItem() {
      var _this3 = this;

      var index = null;
      this.items.forEach(function (item, idx) {
        if (item === _this3.state.currentItem) {
          index = idx + 1;
        }
      });

      if (index >= this.items.length) {
        return;
      }

      this.setState({
        currentItem: this.items[index],
        updateCurrentTime: true
      });
    }
    /**
     * Skip to the previous audio item.
     */

  }, {
    key: "backItem",
    value: function backItem() {
      var _this4 = this;

      var index = null;
      this.items.forEach(function (item, idx) {
        if (item === _this4.state.currentItem) {
          index = idx - 1;
        }
      });

      if (index < 0) {
        return;
      }

      this.setState({
        currentItem: this.items[index],
        updateCurrentTime: true
      });
    }
    /**
     * Render method
     */

  }, {
    key: "render",
    value: function render() {
      var _this5 = this;

      return _react.default.createElement("div", {
        className: "unc-audio-list"
      }, _react.default.createElement(_AudioListHeader.default, {
        headerImageSrc: this.props.headerImageSrc,
        autoPlay: this.props.autoPlay,
        audio: this.audio,
        onTimeUpdate: this.onTimeUpdate,
        nextItem: this.nextItem,
        backItem: this.backItem,
        currentItem: this.state.currentItem,
        updateCurrentTime: this.state.updateCurrentTime
      }), _react.default.createElement("div", {
        className: "unc-audio-list-sections"
      }, this.props.children && this.props.children.length && this.props.children.map(function (child, idx) {
        return _react.default.cloneElement(child, {
          key: idx,
          onClickItem: _this5.onClickItem,
          currentItem: _this5.state.currentItem,
          items: _this5.items
        });
      })));
    }
  }]);

  return AudioList;
}(_react.default.Component);

var _default = AudioList;
exports.default = _default;
