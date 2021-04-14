"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var AudioListHeader =
/*#__PURE__*/
function (_React$PureComponent) {
  _inherits(AudioListHeader, _React$PureComponent);

  function AudioListHeader(props) {
    var _this;

    _classCallCheck(this, AudioListHeader);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(AudioListHeader).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTimeUpdate", function () {
      var position = "".concat(_this.audio.currentTime / _this.audio.duration * 100, "%");

      _this.setState({
        position: position
      });

      _this.props.onTimeUpdate(_this.audio.currentTime);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickMuted", function () {
      _this.audio.muted = !_this.state.isMuted;

      _this.setState(function (prevState) {
        return {
          isMuted: !prevState.isMuted
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickPlay", function () {
      if (_this.state.isPlaying) {
        _this.audio.pause();
      } else {
        _this.audio.play();
      }

      _this.setState(function (prevState) {
        return {
          isPlaying: !prevState.isPlaying
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickProgressBar", function (event) {
      var pos = (event.pageX - event.target.offsetLeft) / event.target.offsetWidth;
      _this.audio.currentTime = _this.audio.duration * pos;
    });

    _this.state = {
      isMuted: false,
      isPlaying: false,
      position: '0%'
    };
    _this.audio = new Audio();
    return _this;
  }
  /**
   * Lifecycle method
   */


  _createClass(AudioListHeader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.audio.ontimeupdate = this.onTimeUpdate;
    }
    /**
     * Lifecycle method
     */

  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var firstTime = !this.audio.file;

      if (this.audio.file !== nextProps.currentItem.props.file) {
        this.audio.src = nextProps.currentItem.props.file;
        this.audio.file = nextProps.currentItem.props.file;
      }

      if (nextProps.updateCurrentTime) {
        this.audio.currentTime = nextProps.currentItem.props.start;
      }

      if (!firstTime || nextProps.autoPlay) {
        this.audio.play();
        this.setState({
          isPlaying: true
        });
      }
    }
    /**
     * Callback audio function that is executed when the current playback position has changed.
     */

  }, {
    key: "render",

    /**
     * Render method.
     */
    value: function render() {
      return _react.default.createElement("div", {
        className: "unc-audio-header"
      }, _react.default.createElement("div", {
        className: "unc-header-bg",
        style: {
          backgroundImage: "url(".concat(this.props.headerImageSrc, ")")
        }
      }, _react.default.createElement("span", null)), _react.default.createElement("div", {
        className: "unc-header-top"
      }, _react.default.createElement("i", {
        className: this.state.isMuted ? 'fas fa-volume-off' : 'fas fa-volume-up',
        onClick: this.onClickMuted
      })), _react.default.createElement("div", {
        className: "unc-header-bottom row"
      }, this.props.currentItem && _react.default.createElement("h3", {
        className: "unc-header-title"
      }, this.props.currentItem.props.sectionTitle, _react.default.createElement("small", null, this.props.currentItem.props.title)), _react.default.createElement("div", {
        className: "unc-audio-progressbar",
        onClick: this.onClickProgressBar
      }, _react.default.createElement("span", {
        style: {
          marginLeft: this.state.position
        }
      })), _react.default.createElement("div", {
        className: "col-4"
      }, _react.default.createElement("i", {
        className: "unc-audio-back fas fa-step-backward",
        onClick: this.props.backItem
      })), _react.default.createElement("div", {
        className: "col-4"
      }, _react.default.createElement("i", {
        className: this.state.isPlaying ? 'fas fa-pause' : 'fas fa-play',
        onClick: this.onClickPlay
      })), _react.default.createElement("div", {
        className: "col-4"
      }, _react.default.createElement("i", {
        className: "unc-audio-next fas fa-step-forward",
        onClick: this.props.nextItem
      }))));
    }
  }]);

  return AudioListHeader;
}(_react.default.PureComponent);

var _default = AudioListHeader;
exports.default = _default;