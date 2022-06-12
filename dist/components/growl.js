"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Growl = void 0;
exports.useGrowl = useGrowl;

require("core-js/modules/web.dom-collections.iterator.js");

var _react = _interopRequireWildcard(require("react"));

require("./growl.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Growl = _ref => {
  let {
    active,
    message,
    onDismissed
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "growl".concat(active ? " active" : "")
  }, message, /*#__PURE__*/_react.default.createElement("div", {
    onClick: onDismissed,
    className: "growl-close"
  }));
};

exports.Growl = Growl;

function useGrowl() {
  // state of the growl
  const [growlActive, setGrowlActive] = _react.default.useState(false); // whenever the growl state change, if the active state is true, the useEffect
  // hook dismiss the growl automatically after 3 seconds.
  // The clearTimeout function clean the garbage collector whenever the timer constant is not used
  // anymore, to prevent memory leaks.


  (0, _react.useEffect)(() => {
    if (growlActive) {
      const timer = setTimeout(() => setGrowlActive(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [growlActive]);
  return [// the first arg is the state
  growlActive, // the second arg is a fn that allows you to safely set its state
  active => {
    setGrowlActive(active);
  }];
}