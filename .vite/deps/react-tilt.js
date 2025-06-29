import {
  require_jsx_runtime
} from "./chunk-FT54CQ4H.js";
import {
  require_react
} from "./chunk-TVFQMRVC.js";
import {
  __toESM
} from "./chunk-G3PMV62Z.js";

// node_modules/react-tilt/dist/index.js
var import_react = __toESM(require_react());
var import_jsx_runtime = __toESM(require_jsx_runtime());
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var Tilt = class extends import_react.Component {
  constructor(props) {
    super(props);
    this.ref = import_react.default.createRef();
    this.state = {
      style: {}
    };
    const defaultSettings = {
      reverse: false,
      max: 35,
      perspective: 1e3,
      easing: "cubic-bezier(.03,.98,.52,.99)",
      scale: "1.1",
      speed: "1000",
      transition: true,
      axis: null,
      reset: true
    };
    this.width = null;
    this.height = null;
    this.left = null;
    this.top = null;
    this.transitionTimeout = null;
    this.updateCall = null;
    this.element = null;
    this.settings = Object.assign({}, defaultSettings, this.props.options);
    this.reverse = this.settings.reverse ? -1 : 1;
    this.onMouseEnter = this.onMouseEnter.bind(this, this.props.onMouseEnter);
    this.onMouseMove = this.onMouseMove.bind(this, this.props.onMouseMove);
    this.onMouseLeave = this.onMouseLeave.bind(this, this.props.onMouseLeave);
  }
  componentDidMount() {
    this.element = this.ref.current;
    setTimeout(() => {
      if (this.element.parentElement.querySelector(":hover") === this.element) {
        this.onMouseEnter();
      }
    }, 0);
  }
  componentWillUnmount() {
    clearTimeout(this.transitionTimeout);
    cancelAnimationFrame(this.updateCall);
  }
  onMouseEnter(cb = () => {
  }, e) {
    this.updateElementPosition();
    this.setState(Object.assign({}, this.state, {
      style: __spreadProps(__spreadValues({}, this.state.style), {
        willChange: "transform"
      })
    }));
    this.setTransition();
    return cb(e);
  }
  reset() {
    window.requestAnimationFrame(() => {
      this.setState(Object.assign({}, this.state, {
        style: __spreadProps(__spreadValues({}, this.state.style), {
          transform: `perspective(${this.settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
        })
      }));
    });
  }
  onMouseMove(cb = () => {
  }, e) {
    e.persist();
    if (this.updateCall !== null) {
      window.cancelAnimationFrame(this.updateCall);
    }
    this.event = e;
    this.updateCall = requestAnimationFrame(this.update.bind(this, e));
    return cb(e);
  }
  setTransition() {
    clearTimeout(this.transitionTimeout);
    this.setState(Object.assign({}, this.state, {
      style: __spreadProps(__spreadValues({}, this.state.style), {
        transition: `${this.settings.speed}ms ${this.settings.easing}`
      })
    }));
    this.transitionTimeout = setTimeout(() => {
      this.setState(Object.assign({}, this.state, {
        style: __spreadProps(__spreadValues({}, this.state.style), {
          transition: ""
        })
      }));
    }, this.settings.speed);
  }
  onMouseLeave(cb = () => {
  }, e) {
    this.setTransition();
    if (this.settings.reset) {
      this.reset();
    }
    return cb(e);
  }
  getValues(e) {
    const x = (e.nativeEvent.clientX - this.left) / this.width;
    const y = (e.nativeEvent.clientY - this.top) / this.height;
    const _x = Math.min(Math.max(x, 0), 1);
    const _y = Math.min(Math.max(y, 0), 1);
    const tiltX = (this.reverse * (this.settings.max / 2 - _x * this.settings.max)).toFixed(2);
    const tiltY = (this.reverse * (_y * this.settings.max - this.settings.max / 2)).toFixed(2);
    const percentageX = _x * 100;
    const percentageY = _y * 100;
    return {
      tiltX,
      tiltY,
      percentageX,
      percentageY
    };
  }
  updateElementPosition() {
    const rect = this.element.getBoundingClientRect();
    this.width = this.element.offsetWidth;
    this.height = this.element.offsetHeight;
    this.left = rect.left;
    this.top = rect.top;
  }
  update(e) {
    const values = this.getValues(e);
    this.setState(Object.assign({}, this.state, {
      style: __spreadProps(__spreadValues({}, this.state.style), {
        transform: `perspective(${this.settings.perspective}px) rotateX(${this.settings.axis === "x" ? 0 : values.tiltY}deg) rotateY(${this.settings.axis === "y" ? 0 : values.tiltX}deg) scale3d(${this.settings.scale}, ${this.settings.scale}, ${this.settings.scale})`
      })
    }));
    this.updateCall = null;
  }
  render() {
    const style = Object.assign({}, this.props.style, this.state.style);
    return (0, import_jsx_runtime.jsx)(
      "div",
      {
        style,
        ref: this.ref,
        className: this.props.className,
        onMouseEnter: this.onMouseEnter,
        onMouseMove: this.onMouseMove,
        onMouseLeave: this.onMouseLeave,
        children: this.props.children
      }
    );
  }
};
export {
  Tilt
};
//# sourceMappingURL=react-tilt.js.map
