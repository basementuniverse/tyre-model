/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/dat.gui/build/dat.gui.module.js":
/*!******************************************************!*\
  !*** ./node_modules/dat.gui/build/dat.gui.module.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GUI": () => (/* binding */ GUI$1),
/* harmony export */   "color": () => (/* binding */ color),
/* harmony export */   "controllers": () => (/* binding */ controllers),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dom": () => (/* binding */ dom$1),
/* harmony export */   "gui": () => (/* binding */ gui)
/* harmony export */ });
/**
 * dat-gui JavaScript Controller Library
 * https://github.com/dataarts/dat.gui
 *
 * Copyright 2011 Data Arts Team, Google Creative Lab
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);

  return css;
}

function colorToString (color, forceCSSHex) {
  var colorFormat = color.__state.conversionName.toString();
  var r = Math.round(color.r);
  var g = Math.round(color.g);
  var b = Math.round(color.b);
  var a = color.a;
  var h = Math.round(color.h);
  var s = color.s.toFixed(1);
  var v = color.v.toFixed(1);
  if (forceCSSHex || colorFormat === 'THREE_CHAR_HEX' || colorFormat === 'SIX_CHAR_HEX') {
    var str = color.hex.toString(16);
    while (str.length < 6) {
      str = '0' + str;
    }
    return '#' + str;
  } else if (colorFormat === 'CSS_RGB') {
    return 'rgb(' + r + ',' + g + ',' + b + ')';
  } else if (colorFormat === 'CSS_RGBA') {
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  } else if (colorFormat === 'HEX') {
    return '0x' + color.hex.toString(16);
  } else if (colorFormat === 'RGB_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ']';
  } else if (colorFormat === 'RGBA_ARRAY') {
    return '[' + r + ',' + g + ',' + b + ',' + a + ']';
  } else if (colorFormat === 'RGB_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + '}';
  } else if (colorFormat === 'RGBA_OBJ') {
    return '{r:' + r + ',g:' + g + ',b:' + b + ',a:' + a + '}';
  } else if (colorFormat === 'HSV_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + '}';
  } else if (colorFormat === 'HSVA_OBJ') {
    return '{h:' + h + ',s:' + s + ',v:' + v + ',a:' + a + '}';
  }
  return 'unknown format';
}

var ARR_EACH = Array.prototype.forEach;
var ARR_SLICE = Array.prototype.slice;
var Common = {
  BREAK: {},
  extend: function extend(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (!this.isUndefined(obj[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  defaults: function defaults(target) {
    this.each(ARR_SLICE.call(arguments, 1), function (obj) {
      var keys = this.isObject(obj) ? Object.keys(obj) : [];
      keys.forEach(function (key) {
        if (this.isUndefined(target[key])) {
          target[key] = obj[key];
        }
      }.bind(this));
    }, this);
    return target;
  },
  compose: function compose() {
    var toCall = ARR_SLICE.call(arguments);
    return function () {
      var args = ARR_SLICE.call(arguments);
      for (var i = toCall.length - 1; i >= 0; i--) {
        args = [toCall[i].apply(this, args)];
      }
      return args[0];
    };
  },
  each: function each(obj, itr, scope) {
    if (!obj) {
      return;
    }
    if (ARR_EACH && obj.forEach && obj.forEach === ARR_EACH) {
      obj.forEach(itr, scope);
    } else if (obj.length === obj.length + 0) {
      var key = void 0;
      var l = void 0;
      for (key = 0, l = obj.length; key < l; key++) {
        if (key in obj && itr.call(scope, obj[key], key) === this.BREAK) {
          return;
        }
      }
    } else {
      for (var _key in obj) {
        if (itr.call(scope, obj[_key], _key) === this.BREAK) {
          return;
        }
      }
    }
  },
  defer: function defer(fnc) {
    setTimeout(fnc, 0);
  },
  debounce: function debounce(func, threshold, callImmediately) {
    var timeout = void 0;
    return function () {
      var obj = this;
      var args = arguments;
      function delayed() {
        timeout = null;
        if (!callImmediately) func.apply(obj, args);
      }
      var callNow = callImmediately || !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(delayed, threshold);
      if (callNow) {
        func.apply(obj, args);
      }
    };
  },
  toArray: function toArray(obj) {
    if (obj.toArray) return obj.toArray();
    return ARR_SLICE.call(obj);
  },
  isUndefined: function isUndefined(obj) {
    return obj === undefined;
  },
  isNull: function isNull(obj) {
    return obj === null;
  },
  isNaN: function (_isNaN) {
    function isNaN(_x) {
      return _isNaN.apply(this, arguments);
    }
    isNaN.toString = function () {
      return _isNaN.toString();
    };
    return isNaN;
  }(function (obj) {
    return isNaN(obj);
  }),
  isArray: Array.isArray || function (obj) {
    return obj.constructor === Array;
  },
  isObject: function isObject(obj) {
    return obj === Object(obj);
  },
  isNumber: function isNumber(obj) {
    return obj === obj + 0;
  },
  isString: function isString(obj) {
    return obj === obj + '';
  },
  isBoolean: function isBoolean(obj) {
    return obj === false || obj === true;
  },
  isFunction: function isFunction(obj) {
    return obj instanceof Function;
  }
};

var INTERPRETATIONS = [
{
  litmus: Common.isString,
  conversions: {
    THREE_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString() + test[1].toString() + test[2].toString() + test[2].toString() + test[3].toString() + test[3].toString(), 0)
        };
      },
      write: colorToString
    },
    SIX_CHAR_HEX: {
      read: function read(original) {
        var test = original.match(/^#([A-F0-9]{6})$/i);
        if (test === null) {
          return false;
        }
        return {
          space: 'HEX',
          hex: parseInt('0x' + test[1].toString(), 0)
        };
      },
      write: colorToString
    },
    CSS_RGB: {
      read: function read(original) {
        var test = original.match(/^rgb\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3])
        };
      },
      write: colorToString
    },
    CSS_RGBA: {
      read: function read(original) {
        var test = original.match(/^rgba\(\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*,\s*(\S+)\s*\)/);
        if (test === null) {
          return false;
        }
        return {
          space: 'RGB',
          r: parseFloat(test[1]),
          g: parseFloat(test[2]),
          b: parseFloat(test[3]),
          a: parseFloat(test[4])
        };
      },
      write: colorToString
    }
  }
},
{
  litmus: Common.isNumber,
  conversions: {
    HEX: {
      read: function read(original) {
        return {
          space: 'HEX',
          hex: original,
          conversionName: 'HEX'
        };
      },
      write: function write(color) {
        return color.hex;
      }
    }
  }
},
{
  litmus: Common.isArray,
  conversions: {
    RGB_ARRAY: {
      read: function read(original) {
        if (original.length !== 3) {
          return false;
        }
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b];
      }
    },
    RGBA_ARRAY: {
      read: function read(original) {
        if (original.length !== 4) return false;
        return {
          space: 'RGB',
          r: original[0],
          g: original[1],
          b: original[2],
          a: original[3]
        };
      },
      write: function write(color) {
        return [color.r, color.g, color.b, color.a];
      }
    }
  }
},
{
  litmus: Common.isObject,
  conversions: {
    RGBA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b) && Common.isNumber(original.a)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b,
          a: color.a
        };
      }
    },
    RGB_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.r) && Common.isNumber(original.g) && Common.isNumber(original.b)) {
          return {
            space: 'RGB',
            r: original.r,
            g: original.g,
            b: original.b
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          r: color.r,
          g: color.g,
          b: color.b
        };
      }
    },
    HSVA_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v) && Common.isNumber(original.a)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v,
            a: original.a
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v,
          a: color.a
        };
      }
    },
    HSV_OBJ: {
      read: function read(original) {
        if (Common.isNumber(original.h) && Common.isNumber(original.s) && Common.isNumber(original.v)) {
          return {
            space: 'HSV',
            h: original.h,
            s: original.s,
            v: original.v
          };
        }
        return false;
      },
      write: function write(color) {
        return {
          h: color.h,
          s: color.s,
          v: color.v
        };
      }
    }
  }
}];
var result = void 0;
var toReturn = void 0;
var interpret = function interpret() {
  toReturn = false;
  var original = arguments.length > 1 ? Common.toArray(arguments) : arguments[0];
  Common.each(INTERPRETATIONS, function (family) {
    if (family.litmus(original)) {
      Common.each(family.conversions, function (conversion, conversionName) {
        result = conversion.read(original);
        if (toReturn === false && result !== false) {
          toReturn = result;
          result.conversionName = conversionName;
          result.conversion = conversion;
          return Common.BREAK;
        }
      });
      return Common.BREAK;
    }
  });
  return toReturn;
};

var tmpComponent = void 0;
var ColorMath = {
  hsv_to_rgb: function hsv_to_rgb(h, s, v) {
    var hi = Math.floor(h / 60) % 6;
    var f = h / 60 - Math.floor(h / 60);
    var p = v * (1.0 - s);
    var q = v * (1.0 - f * s);
    var t = v * (1.0 - (1.0 - f) * s);
    var c = [[v, t, p], [q, v, p], [p, v, t], [p, q, v], [t, p, v], [v, p, q]][hi];
    return {
      r: c[0] * 255,
      g: c[1] * 255,
      b: c[2] * 255
    };
  },
  rgb_to_hsv: function rgb_to_hsv(r, g, b) {
    var min = Math.min(r, g, b);
    var max = Math.max(r, g, b);
    var delta = max - min;
    var h = void 0;
    var s = void 0;
    if (max !== 0) {
      s = delta / max;
    } else {
      return {
        h: NaN,
        s: 0,
        v: 0
      };
    }
    if (r === max) {
      h = (g - b) / delta;
    } else if (g === max) {
      h = 2 + (b - r) / delta;
    } else {
      h = 4 + (r - g) / delta;
    }
    h /= 6;
    if (h < 0) {
      h += 1;
    }
    return {
      h: h * 360,
      s: s,
      v: max / 255
    };
  },
  rgb_to_hex: function rgb_to_hex(r, g, b) {
    var hex = this.hex_with_component(0, 2, r);
    hex = this.hex_with_component(hex, 1, g);
    hex = this.hex_with_component(hex, 0, b);
    return hex;
  },
  component_from_hex: function component_from_hex(hex, componentIndex) {
    return hex >> componentIndex * 8 & 0xFF;
  },
  hex_with_component: function hex_with_component(hex, componentIndex, value) {
    return value << (tmpComponent = componentIndex * 8) | hex & ~(0xFF << tmpComponent);
  }
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var get = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Color = function () {
  function Color() {
    classCallCheck(this, Color);
    this.__state = interpret.apply(this, arguments);
    if (this.__state === false) {
      throw new Error('Failed to interpret color arguments');
    }
    this.__state.a = this.__state.a || 1;
  }
  createClass(Color, [{
    key: 'toString',
    value: function toString() {
      return colorToString(this);
    }
  }, {
    key: 'toHexString',
    value: function toHexString() {
      return colorToString(this, true);
    }
  }, {
    key: 'toOriginal',
    value: function toOriginal() {
      return this.__state.conversion.write(this);
    }
  }]);
  return Color;
}();
function defineRGBComponent(target, component, componentHexIndex) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'RGB') {
        return this.__state[component];
      }
      Color.recalculateRGB(this, component, componentHexIndex);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'RGB') {
        Color.recalculateRGB(this, component, componentHexIndex);
        this.__state.space = 'RGB';
      }
      this.__state[component] = v;
    }
  });
}
function defineHSVComponent(target, component) {
  Object.defineProperty(target, component, {
    get: function get$$1() {
      if (this.__state.space === 'HSV') {
        return this.__state[component];
      }
      Color.recalculateHSV(this);
      return this.__state[component];
    },
    set: function set$$1(v) {
      if (this.__state.space !== 'HSV') {
        Color.recalculateHSV(this);
        this.__state.space = 'HSV';
      }
      this.__state[component] = v;
    }
  });
}
Color.recalculateRGB = function (color, component, componentHexIndex) {
  if (color.__state.space === 'HEX') {
    color.__state[component] = ColorMath.component_from_hex(color.__state.hex, componentHexIndex);
  } else if (color.__state.space === 'HSV') {
    Common.extend(color.__state, ColorMath.hsv_to_rgb(color.__state.h, color.__state.s, color.__state.v));
  } else {
    throw new Error('Corrupted color state');
  }
};
Color.recalculateHSV = function (color) {
  var result = ColorMath.rgb_to_hsv(color.r, color.g, color.b);
  Common.extend(color.__state, {
    s: result.s,
    v: result.v
  });
  if (!Common.isNaN(result.h)) {
    color.__state.h = result.h;
  } else if (Common.isUndefined(color.__state.h)) {
    color.__state.h = 0;
  }
};
Color.COMPONENTS = ['r', 'g', 'b', 'h', 's', 'v', 'hex', 'a'];
defineRGBComponent(Color.prototype, 'r', 2);
defineRGBComponent(Color.prototype, 'g', 1);
defineRGBComponent(Color.prototype, 'b', 0);
defineHSVComponent(Color.prototype, 'h');
defineHSVComponent(Color.prototype, 's');
defineHSVComponent(Color.prototype, 'v');
Object.defineProperty(Color.prototype, 'a', {
  get: function get$$1() {
    return this.__state.a;
  },
  set: function set$$1(v) {
    this.__state.a = v;
  }
});
Object.defineProperty(Color.prototype, 'hex', {
  get: function get$$1() {
    if (this.__state.space !== 'HEX') {
      this.__state.hex = ColorMath.rgb_to_hex(this.r, this.g, this.b);
      this.__state.space = 'HEX';
    }
    return this.__state.hex;
  },
  set: function set$$1(v) {
    this.__state.space = 'HEX';
    this.__state.hex = v;
  }
});

var Controller = function () {
  function Controller(object, property) {
    classCallCheck(this, Controller);
    this.initialValue = object[property];
    this.domElement = document.createElement('div');
    this.object = object;
    this.property = property;
    this.__onChange = undefined;
    this.__onFinishChange = undefined;
  }
  createClass(Controller, [{
    key: 'onChange',
    value: function onChange(fnc) {
      this.__onChange = fnc;
      return this;
    }
  }, {
    key: 'onFinishChange',
    value: function onFinishChange(fnc) {
      this.__onFinishChange = fnc;
      return this;
    }
  }, {
    key: 'setValue',
    value: function setValue(newValue) {
      this.object[this.property] = newValue;
      if (this.__onChange) {
        this.__onChange.call(this, newValue);
      }
      this.updateDisplay();
      return this;
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.object[this.property];
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      return this;
    }
  }, {
    key: 'isModified',
    value: function isModified() {
      return this.initialValue !== this.getValue();
    }
  }]);
  return Controller;
}();

var EVENT_MAP = {
  HTMLEvents: ['change'],
  MouseEvents: ['click', 'mousemove', 'mousedown', 'mouseup', 'mouseover'],
  KeyboardEvents: ['keydown']
};
var EVENT_MAP_INV = {};
Common.each(EVENT_MAP, function (v, k) {
  Common.each(v, function (e) {
    EVENT_MAP_INV[e] = k;
  });
});
var CSS_VALUE_PIXELS = /(\d+(\.\d+)?)px/;
function cssValueToPixels(val) {
  if (val === '0' || Common.isUndefined(val)) {
    return 0;
  }
  var match = val.match(CSS_VALUE_PIXELS);
  if (!Common.isNull(match)) {
    return parseFloat(match[1]);
  }
  return 0;
}
var dom = {
  makeSelectable: function makeSelectable(elem, selectable) {
    if (elem === undefined || elem.style === undefined) return;
    elem.onselectstart = selectable ? function () {
      return false;
    } : function () {};
    elem.style.MozUserSelect = selectable ? 'auto' : 'none';
    elem.style.KhtmlUserSelect = selectable ? 'auto' : 'none';
    elem.unselectable = selectable ? 'on' : 'off';
  },
  makeFullscreen: function makeFullscreen(elem, hor, vert) {
    var vertical = vert;
    var horizontal = hor;
    if (Common.isUndefined(horizontal)) {
      horizontal = true;
    }
    if (Common.isUndefined(vertical)) {
      vertical = true;
    }
    elem.style.position = 'absolute';
    if (horizontal) {
      elem.style.left = 0;
      elem.style.right = 0;
    }
    if (vertical) {
      elem.style.top = 0;
      elem.style.bottom = 0;
    }
  },
  fakeEvent: function fakeEvent(elem, eventType, pars, aux) {
    var params = pars || {};
    var className = EVENT_MAP_INV[eventType];
    if (!className) {
      throw new Error('Event type ' + eventType + ' not supported.');
    }
    var evt = document.createEvent(className);
    switch (className) {
      case 'MouseEvents':
        {
          var clientX = params.x || params.clientX || 0;
          var clientY = params.y || params.clientY || 0;
          evt.initMouseEvent(eventType, params.bubbles || false, params.cancelable || true, window, params.clickCount || 1, 0,
          0,
          clientX,
          clientY,
          false, false, false, false, 0, null);
          break;
        }
      case 'KeyboardEvents':
        {
          var init = evt.initKeyboardEvent || evt.initKeyEvent;
          Common.defaults(params, {
            cancelable: true,
            ctrlKey: false,
            altKey: false,
            shiftKey: false,
            metaKey: false,
            keyCode: undefined,
            charCode: undefined
          });
          init(eventType, params.bubbles || false, params.cancelable, window, params.ctrlKey, params.altKey, params.shiftKey, params.metaKey, params.keyCode, params.charCode);
          break;
        }
      default:
        {
          evt.initEvent(eventType, params.bubbles || false, params.cancelable || true);
          break;
        }
    }
    Common.defaults(evt, aux);
    elem.dispatchEvent(evt);
  },
  bind: function bind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.addEventListener) {
      elem.addEventListener(event, func, bool);
    } else if (elem.attachEvent) {
      elem.attachEvent('on' + event, func);
    }
    return dom;
  },
  unbind: function unbind(elem, event, func, newBool) {
    var bool = newBool || false;
    if (elem.removeEventListener) {
      elem.removeEventListener(event, func, bool);
    } else if (elem.detachEvent) {
      elem.detachEvent('on' + event, func);
    }
    return dom;
  },
  addClass: function addClass(elem, className) {
    if (elem.className === undefined) {
      elem.className = className;
    } else if (elem.className !== className) {
      var classes = elem.className.split(/ +/);
      if (classes.indexOf(className) === -1) {
        classes.push(className);
        elem.className = classes.join(' ').replace(/^\s+/, '').replace(/\s+$/, '');
      }
    }
    return dom;
  },
  removeClass: function removeClass(elem, className) {
    if (className) {
      if (elem.className === className) {
        elem.removeAttribute('class');
      } else {
        var classes = elem.className.split(/ +/);
        var index = classes.indexOf(className);
        if (index !== -1) {
          classes.splice(index, 1);
          elem.className = classes.join(' ');
        }
      }
    } else {
      elem.className = undefined;
    }
    return dom;
  },
  hasClass: function hasClass(elem, className) {
    return new RegExp('(?:^|\\s+)' + className + '(?:\\s+|$)').test(elem.className) || false;
  },
  getWidth: function getWidth(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-left-width']) + cssValueToPixels(style['border-right-width']) + cssValueToPixels(style['padding-left']) + cssValueToPixels(style['padding-right']) + cssValueToPixels(style.width);
  },
  getHeight: function getHeight(elem) {
    var style = getComputedStyle(elem);
    return cssValueToPixels(style['border-top-width']) + cssValueToPixels(style['border-bottom-width']) + cssValueToPixels(style['padding-top']) + cssValueToPixels(style['padding-bottom']) + cssValueToPixels(style.height);
  },
  getOffset: function getOffset(el) {
    var elem = el;
    var offset = { left: 0, top: 0 };
    if (elem.offsetParent) {
      do {
        offset.left += elem.offsetLeft;
        offset.top += elem.offsetTop;
        elem = elem.offsetParent;
      } while (elem);
    }
    return offset;
  },
  isActive: function isActive(elem) {
    return elem === document.activeElement && (elem.type || elem.href);
  }
};

var BooleanController = function (_Controller) {
  inherits(BooleanController, _Controller);
  function BooleanController(object, property) {
    classCallCheck(this, BooleanController);
    var _this2 = possibleConstructorReturn(this, (BooleanController.__proto__ || Object.getPrototypeOf(BooleanController)).call(this, object, property));
    var _this = _this2;
    _this2.__prev = _this2.getValue();
    _this2.__checkbox = document.createElement('input');
    _this2.__checkbox.setAttribute('type', 'checkbox');
    function onChange() {
      _this.setValue(!_this.__prev);
    }
    dom.bind(_this2.__checkbox, 'change', onChange, false);
    _this2.domElement.appendChild(_this2.__checkbox);
    _this2.updateDisplay();
    return _this2;
  }
  createClass(BooleanController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      this.__prev = this.getValue();
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (this.getValue() === true) {
        this.__checkbox.setAttribute('checked', 'checked');
        this.__checkbox.checked = true;
        this.__prev = true;
      } else {
        this.__checkbox.checked = false;
        this.__prev = false;
      }
      return get(BooleanController.prototype.__proto__ || Object.getPrototypeOf(BooleanController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return BooleanController;
}(Controller);

var OptionController = function (_Controller) {
  inherits(OptionController, _Controller);
  function OptionController(object, property, opts) {
    classCallCheck(this, OptionController);
    var _this2 = possibleConstructorReturn(this, (OptionController.__proto__ || Object.getPrototypeOf(OptionController)).call(this, object, property));
    var options = opts;
    var _this = _this2;
    _this2.__select = document.createElement('select');
    if (Common.isArray(options)) {
      var map = {};
      Common.each(options, function (element) {
        map[element] = element;
      });
      options = map;
    }
    Common.each(options, function (value, key) {
      var opt = document.createElement('option');
      opt.innerHTML = key;
      opt.setAttribute('value', value);
      _this.__select.appendChild(opt);
    });
    _this2.updateDisplay();
    dom.bind(_this2.__select, 'change', function () {
      var desiredValue = this.options[this.selectedIndex].value;
      _this.setValue(desiredValue);
    });
    _this2.domElement.appendChild(_this2.__select);
    return _this2;
  }
  createClass(OptionController, [{
    key: 'setValue',
    value: function setValue(v) {
      var toReturn = get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'setValue', this).call(this, v);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
      return toReturn;
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (dom.isActive(this.__select)) return this;
      this.__select.value = this.getValue();
      return get(OptionController.prototype.__proto__ || Object.getPrototypeOf(OptionController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return OptionController;
}(Controller);

var StringController = function (_Controller) {
  inherits(StringController, _Controller);
  function StringController(object, property) {
    classCallCheck(this, StringController);
    var _this2 = possibleConstructorReturn(this, (StringController.__proto__ || Object.getPrototypeOf(StringController)).call(this, object, property));
    var _this = _this2;
    function onChange() {
      _this.setValue(_this.__input.value);
    }
    function onBlur() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'keyup', onChange);
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        this.blur();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(StringController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      if (!dom.isActive(this.__input)) {
        this.__input.value = this.getValue();
      }
      return get(StringController.prototype.__proto__ || Object.getPrototypeOf(StringController.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return StringController;
}(Controller);

function numDecimals(x) {
  var _x = x.toString();
  if (_x.indexOf('.') > -1) {
    return _x.length - _x.indexOf('.') - 1;
  }
  return 0;
}
var NumberController = function (_Controller) {
  inherits(NumberController, _Controller);
  function NumberController(object, property, params) {
    classCallCheck(this, NumberController);
    var _this = possibleConstructorReturn(this, (NumberController.__proto__ || Object.getPrototypeOf(NumberController)).call(this, object, property));
    var _params = params || {};
    _this.__min = _params.min;
    _this.__max = _params.max;
    _this.__step = _params.step;
    if (Common.isUndefined(_this.__step)) {
      if (_this.initialValue === 0) {
        _this.__impliedStep = 1;
      } else {
        _this.__impliedStep = Math.pow(10, Math.floor(Math.log(Math.abs(_this.initialValue)) / Math.LN10)) / 10;
      }
    } else {
      _this.__impliedStep = _this.__step;
    }
    _this.__precision = numDecimals(_this.__impliedStep);
    return _this;
  }
  createClass(NumberController, [{
    key: 'setValue',
    value: function setValue(v) {
      var _v = v;
      if (this.__min !== undefined && _v < this.__min) {
        _v = this.__min;
      } else if (this.__max !== undefined && _v > this.__max) {
        _v = this.__max;
      }
      if (this.__step !== undefined && _v % this.__step !== 0) {
        _v = Math.round(_v / this.__step) * this.__step;
      }
      return get(NumberController.prototype.__proto__ || Object.getPrototypeOf(NumberController.prototype), 'setValue', this).call(this, _v);
    }
  }, {
    key: 'min',
    value: function min(minValue) {
      this.__min = minValue;
      return this;
    }
  }, {
    key: 'max',
    value: function max(maxValue) {
      this.__max = maxValue;
      return this;
    }
  }, {
    key: 'step',
    value: function step(stepValue) {
      this.__step = stepValue;
      this.__impliedStep = stepValue;
      this.__precision = numDecimals(stepValue);
      return this;
    }
  }]);
  return NumberController;
}(Controller);

function roundToDecimal(value, decimals) {
  var tenTo = Math.pow(10, decimals);
  return Math.round(value * tenTo) / tenTo;
}
var NumberControllerBox = function (_NumberController) {
  inherits(NumberControllerBox, _NumberController);
  function NumberControllerBox(object, property, params) {
    classCallCheck(this, NumberControllerBox);
    var _this2 = possibleConstructorReturn(this, (NumberControllerBox.__proto__ || Object.getPrototypeOf(NumberControllerBox)).call(this, object, property, params));
    _this2.__truncationSuspended = false;
    var _this = _this2;
    var prevY = void 0;
    function onChange() {
      var attempted = parseFloat(_this.__input.value);
      if (!Common.isNaN(attempted)) {
        _this.setValue(attempted);
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onBlur() {
      onFinish();
    }
    function onMouseDrag(e) {
      var diff = prevY - e.clientY;
      _this.setValue(_this.getValue() + diff * _this.__impliedStep);
      prevY = e.clientY;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      onFinish();
    }
    function onMouseDown(e) {
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      prevY = e.clientY;
    }
    _this2.__input = document.createElement('input');
    _this2.__input.setAttribute('type', 'text');
    dom.bind(_this2.__input, 'change', onChange);
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__input, 'mousedown', onMouseDown);
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        _this.__truncationSuspended = true;
        this.blur();
        _this.__truncationSuspended = false;
        onFinish();
      }
    });
    _this2.updateDisplay();
    _this2.domElement.appendChild(_this2.__input);
    return _this2;
  }
  createClass(NumberControllerBox, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      this.__input.value = this.__truncationSuspended ? this.getValue() : roundToDecimal(this.getValue(), this.__precision);
      return get(NumberControllerBox.prototype.__proto__ || Object.getPrototypeOf(NumberControllerBox.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerBox;
}(NumberController);

function map(v, i1, i2, o1, o2) {
  return o1 + (o2 - o1) * ((v - i1) / (i2 - i1));
}
var NumberControllerSlider = function (_NumberController) {
  inherits(NumberControllerSlider, _NumberController);
  function NumberControllerSlider(object, property, min, max, step) {
    classCallCheck(this, NumberControllerSlider);
    var _this2 = possibleConstructorReturn(this, (NumberControllerSlider.__proto__ || Object.getPrototypeOf(NumberControllerSlider)).call(this, object, property, { min: min, max: max, step: step }));
    var _this = _this2;
    _this2.__background = document.createElement('div');
    _this2.__foreground = document.createElement('div');
    dom.bind(_this2.__background, 'mousedown', onMouseDown);
    dom.bind(_this2.__background, 'touchstart', onTouchStart);
    dom.addClass(_this2.__background, 'slider');
    dom.addClass(_this2.__foreground, 'slider-fg');
    function onMouseDown(e) {
      document.activeElement.blur();
      dom.bind(window, 'mousemove', onMouseDrag);
      dom.bind(window, 'mouseup', onMouseUp);
      onMouseDrag(e);
    }
    function onMouseDrag(e) {
      e.preventDefault();
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(e.clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
      return false;
    }
    function onMouseUp() {
      dom.unbind(window, 'mousemove', onMouseDrag);
      dom.unbind(window, 'mouseup', onMouseUp);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    function onTouchStart(e) {
      if (e.touches.length !== 1) {
        return;
      }
      dom.bind(window, 'touchmove', onTouchMove);
      dom.bind(window, 'touchend', onTouchEnd);
      onTouchMove(e);
    }
    function onTouchMove(e) {
      var clientX = e.touches[0].clientX;
      var bgRect = _this.__background.getBoundingClientRect();
      _this.setValue(map(clientX, bgRect.left, bgRect.right, _this.__min, _this.__max));
    }
    function onTouchEnd() {
      dom.unbind(window, 'touchmove', onTouchMove);
      dom.unbind(window, 'touchend', onTouchEnd);
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.getValue());
      }
    }
    _this2.updateDisplay();
    _this2.__background.appendChild(_this2.__foreground);
    _this2.domElement.appendChild(_this2.__background);
    return _this2;
  }
  createClass(NumberControllerSlider, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var pct = (this.getValue() - this.__min) / (this.__max - this.__min);
      this.__foreground.style.width = pct * 100 + '%';
      return get(NumberControllerSlider.prototype.__proto__ || Object.getPrototypeOf(NumberControllerSlider.prototype), 'updateDisplay', this).call(this);
    }
  }]);
  return NumberControllerSlider;
}(NumberController);

var FunctionController = function (_Controller) {
  inherits(FunctionController, _Controller);
  function FunctionController(object, property, text) {
    classCallCheck(this, FunctionController);
    var _this2 = possibleConstructorReturn(this, (FunctionController.__proto__ || Object.getPrototypeOf(FunctionController)).call(this, object, property));
    var _this = _this2;
    _this2.__button = document.createElement('div');
    _this2.__button.innerHTML = text === undefined ? 'Fire' : text;
    dom.bind(_this2.__button, 'click', function (e) {
      e.preventDefault();
      _this.fire();
      return false;
    });
    dom.addClass(_this2.__button, 'button');
    _this2.domElement.appendChild(_this2.__button);
    return _this2;
  }
  createClass(FunctionController, [{
    key: 'fire',
    value: function fire() {
      if (this.__onChange) {
        this.__onChange.call(this);
      }
      this.getValue().call(this.object);
      if (this.__onFinishChange) {
        this.__onFinishChange.call(this, this.getValue());
      }
    }
  }]);
  return FunctionController;
}(Controller);

var ColorController = function (_Controller) {
  inherits(ColorController, _Controller);
  function ColorController(object, property) {
    classCallCheck(this, ColorController);
    var _this2 = possibleConstructorReturn(this, (ColorController.__proto__ || Object.getPrototypeOf(ColorController)).call(this, object, property));
    _this2.__color = new Color(_this2.getValue());
    _this2.__temp = new Color(0);
    var _this = _this2;
    _this2.domElement = document.createElement('div');
    dom.makeSelectable(_this2.domElement, false);
    _this2.__selector = document.createElement('div');
    _this2.__selector.className = 'selector';
    _this2.__saturation_field = document.createElement('div');
    _this2.__saturation_field.className = 'saturation-field';
    _this2.__field_knob = document.createElement('div');
    _this2.__field_knob.className = 'field-knob';
    _this2.__field_knob_border = '2px solid ';
    _this2.__hue_knob = document.createElement('div');
    _this2.__hue_knob.className = 'hue-knob';
    _this2.__hue_field = document.createElement('div');
    _this2.__hue_field.className = 'hue-field';
    _this2.__input = document.createElement('input');
    _this2.__input.type = 'text';
    _this2.__input_textShadow = '0 1px 1px ';
    dom.bind(_this2.__input, 'keydown', function (e) {
      if (e.keyCode === 13) {
        onBlur.call(this);
      }
    });
    dom.bind(_this2.__input, 'blur', onBlur);
    dom.bind(_this2.__selector, 'mousedown', function () {
      dom.addClass(this, 'drag').bind(window, 'mouseup', function () {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    dom.bind(_this2.__selector, 'touchstart', function () {
      dom.addClass(this, 'drag').bind(window, 'touchend', function () {
        dom.removeClass(_this.__selector, 'drag');
      });
    });
    var valueField = document.createElement('div');
    Common.extend(_this2.__selector.style, {
      width: '122px',
      height: '102px',
      padding: '3px',
      backgroundColor: '#222',
      boxShadow: '0px 1px 3px rgba(0,0,0,0.3)'
    });
    Common.extend(_this2.__field_knob.style, {
      position: 'absolute',
      width: '12px',
      height: '12px',
      border: _this2.__field_knob_border + (_this2.__color.v < 0.5 ? '#fff' : '#000'),
      boxShadow: '0px 1px 3px rgba(0,0,0,0.5)',
      borderRadius: '12px',
      zIndex: 1
    });
    Common.extend(_this2.__hue_knob.style, {
      position: 'absolute',
      width: '15px',
      height: '2px',
      borderRight: '4px solid #fff',
      zIndex: 1
    });
    Common.extend(_this2.__saturation_field.style, {
      width: '100px',
      height: '100px',
      border: '1px solid #555',
      marginRight: '3px',
      display: 'inline-block',
      cursor: 'pointer'
    });
    Common.extend(valueField.style, {
      width: '100%',
      height: '100%',
      background: 'none'
    });
    linearGradient(valueField, 'top', 'rgba(0,0,0,0)', '#000');
    Common.extend(_this2.__hue_field.style, {
      width: '15px',
      height: '100px',
      border: '1px solid #555',
      cursor: 'ns-resize',
      position: 'absolute',
      top: '3px',
      right: '3px'
    });
    hueGradient(_this2.__hue_field);
    Common.extend(_this2.__input.style, {
      outline: 'none',
      textAlign: 'center',
      color: '#fff',
      border: 0,
      fontWeight: 'bold',
      textShadow: _this2.__input_textShadow + 'rgba(0,0,0,0.7)'
    });
    dom.bind(_this2.__saturation_field, 'mousedown', fieldDown);
    dom.bind(_this2.__saturation_field, 'touchstart', fieldDown);
    dom.bind(_this2.__field_knob, 'mousedown', fieldDown);
    dom.bind(_this2.__field_knob, 'touchstart', fieldDown);
    dom.bind(_this2.__hue_field, 'mousedown', fieldDownH);
    dom.bind(_this2.__hue_field, 'touchstart', fieldDownH);
    function fieldDown(e) {
      setSV(e);
      dom.bind(window, 'mousemove', setSV);
      dom.bind(window, 'touchmove', setSV);
      dom.bind(window, 'mouseup', fieldUpSV);
      dom.bind(window, 'touchend', fieldUpSV);
    }
    function fieldDownH(e) {
      setH(e);
      dom.bind(window, 'mousemove', setH);
      dom.bind(window, 'touchmove', setH);
      dom.bind(window, 'mouseup', fieldUpH);
      dom.bind(window, 'touchend', fieldUpH);
    }
    function fieldUpSV() {
      dom.unbind(window, 'mousemove', setSV);
      dom.unbind(window, 'touchmove', setSV);
      dom.unbind(window, 'mouseup', fieldUpSV);
      dom.unbind(window, 'touchend', fieldUpSV);
      onFinish();
    }
    function fieldUpH() {
      dom.unbind(window, 'mousemove', setH);
      dom.unbind(window, 'touchmove', setH);
      dom.unbind(window, 'mouseup', fieldUpH);
      dom.unbind(window, 'touchend', fieldUpH);
      onFinish();
    }
    function onBlur() {
      var i = interpret(this.value);
      if (i !== false) {
        _this.__color.__state = i;
        _this.setValue(_this.__color.toOriginal());
      } else {
        this.value = _this.__color.toString();
      }
    }
    function onFinish() {
      if (_this.__onFinishChange) {
        _this.__onFinishChange.call(_this, _this.__color.toOriginal());
      }
    }
    _this2.__saturation_field.appendChild(valueField);
    _this2.__selector.appendChild(_this2.__field_knob);
    _this2.__selector.appendChild(_this2.__saturation_field);
    _this2.__selector.appendChild(_this2.__hue_field);
    _this2.__hue_field.appendChild(_this2.__hue_knob);
    _this2.domElement.appendChild(_this2.__input);
    _this2.domElement.appendChild(_this2.__selector);
    _this2.updateDisplay();
    function setSV(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__saturation_field.getBoundingClientRect();
      var _ref = e.touches && e.touches[0] || e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;
      var s = (clientX - fieldRect.left) / (fieldRect.right - fieldRect.left);
      var v = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (v > 1) {
        v = 1;
      } else if (v < 0) {
        v = 0;
      }
      if (s > 1) {
        s = 1;
      } else if (s < 0) {
        s = 0;
      }
      _this.__color.v = v;
      _this.__color.s = s;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    function setH(e) {
      if (e.type.indexOf('touch') === -1) {
        e.preventDefault();
      }
      var fieldRect = _this.__hue_field.getBoundingClientRect();
      var _ref2 = e.touches && e.touches[0] || e,
          clientY = _ref2.clientY;
      var h = 1 - (clientY - fieldRect.top) / (fieldRect.bottom - fieldRect.top);
      if (h > 1) {
        h = 1;
      } else if (h < 0) {
        h = 0;
      }
      _this.__color.h = h * 360;
      _this.setValue(_this.__color.toOriginal());
      return false;
    }
    return _this2;
  }
  createClass(ColorController, [{
    key: 'updateDisplay',
    value: function updateDisplay() {
      var i = interpret(this.getValue());
      if (i !== false) {
        var mismatch = false;
        Common.each(Color.COMPONENTS, function (component) {
          if (!Common.isUndefined(i[component]) && !Common.isUndefined(this.__color.__state[component]) && i[component] !== this.__color.__state[component]) {
            mismatch = true;
            return {};
          }
        }, this);
        if (mismatch) {
          Common.extend(this.__color.__state, i);
        }
      }
      Common.extend(this.__temp.__state, this.__color.__state);
      this.__temp.a = 1;
      var flip = this.__color.v < 0.5 || this.__color.s > 0.5 ? 255 : 0;
      var _flip = 255 - flip;
      Common.extend(this.__field_knob.style, {
        marginLeft: 100 * this.__color.s - 7 + 'px',
        marginTop: 100 * (1 - this.__color.v) - 7 + 'px',
        backgroundColor: this.__temp.toHexString(),
        border: this.__field_knob_border + 'rgb(' + flip + ',' + flip + ',' + flip + ')'
      });
      this.__hue_knob.style.marginTop = (1 - this.__color.h / 360) * 100 + 'px';
      this.__temp.s = 1;
      this.__temp.v = 1;
      linearGradient(this.__saturation_field, 'left', '#fff', this.__temp.toHexString());
      this.__input.value = this.__color.toString();
      Common.extend(this.__input.style, {
        backgroundColor: this.__color.toHexString(),
        color: 'rgb(' + flip + ',' + flip + ',' + flip + ')',
        textShadow: this.__input_textShadow + 'rgba(' + _flip + ',' + _flip + ',' + _flip + ',.7)'
      });
    }
  }]);
  return ColorController;
}(Controller);
var vendors = ['-moz-', '-o-', '-webkit-', '-ms-', ''];
function linearGradient(elem, x, a, b) {
  elem.style.background = '';
  Common.each(vendors, function (vendor) {
    elem.style.cssText += 'background: ' + vendor + 'linear-gradient(' + x + ', ' + a + ' 0%, ' + b + ' 100%); ';
  });
}
function hueGradient(elem) {
  elem.style.background = '';
  elem.style.cssText += 'background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);';
  elem.style.cssText += 'background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
  elem.style.cssText += 'background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);';
}

var css = {
  load: function load(url, indoc) {
    var doc = indoc || document;
    var link = doc.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = url;
    doc.getElementsByTagName('head')[0].appendChild(link);
  },
  inject: function inject(cssContent, indoc) {
    var doc = indoc || document;
    var injected = document.createElement('style');
    injected.type = 'text/css';
    injected.innerHTML = cssContent;
    var head = doc.getElementsByTagName('head')[0];
    try {
      head.appendChild(injected);
    } catch (e) {
    }
  }
};

var saveDialogContents = "<div id=\"dg-save\" class=\"dg dialogue\">\n\n  Here's the new load parameter for your <code>GUI</code>'s constructor:\n\n  <textarea id=\"dg-new-constructor\"></textarea>\n\n  <div id=\"dg-save-locally\">\n\n    <input id=\"dg-local-storage\" type=\"checkbox\"/> Automatically save\n    values to <code>localStorage</code> on exit.\n\n    <div id=\"dg-local-explain\">The values saved to <code>localStorage</code> will\n      override those passed to <code>dat.GUI</code>'s constructor. This makes it\n      easier to work incrementally, but <code>localStorage</code> is fragile,\n      and your friends may not see the same values you do.\n\n    </div>\n\n  </div>\n\n</div>";

var ControllerFactory = function ControllerFactory(object, property) {
  var initialValue = object[property];
  if (Common.isArray(arguments[2]) || Common.isObject(arguments[2])) {
    return new OptionController(object, property, arguments[2]);
  }
  if (Common.isNumber(initialValue)) {
    if (Common.isNumber(arguments[2]) && Common.isNumber(arguments[3])) {
      if (Common.isNumber(arguments[4])) {
        return new NumberControllerSlider(object, property, arguments[2], arguments[3], arguments[4]);
      }
      return new NumberControllerSlider(object, property, arguments[2], arguments[3]);
    }
    if (Common.isNumber(arguments[4])) {
      return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3], step: arguments[4] });
    }
    return new NumberControllerBox(object, property, { min: arguments[2], max: arguments[3] });
  }
  if (Common.isString(initialValue)) {
    return new StringController(object, property);
  }
  if (Common.isFunction(initialValue)) {
    return new FunctionController(object, property, '');
  }
  if (Common.isBoolean(initialValue)) {
    return new BooleanController(object, property);
  }
  return null;
};

function requestAnimationFrame(callback) {
  setTimeout(callback, 1000 / 60);
}
var requestAnimationFrame$1 = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || requestAnimationFrame;

var CenteredDiv = function () {
  function CenteredDiv() {
    classCallCheck(this, CenteredDiv);
    this.backgroundElement = document.createElement('div');
    Common.extend(this.backgroundElement.style, {
      backgroundColor: 'rgba(0,0,0,0.8)',
      top: 0,
      left: 0,
      display: 'none',
      zIndex: '1000',
      opacity: 0,
      WebkitTransition: 'opacity 0.2s linear',
      transition: 'opacity 0.2s linear'
    });
    dom.makeFullscreen(this.backgroundElement);
    this.backgroundElement.style.position = 'fixed';
    this.domElement = document.createElement('div');
    Common.extend(this.domElement.style, {
      position: 'fixed',
      display: 'none',
      zIndex: '1001',
      opacity: 0,
      WebkitTransition: '-webkit-transform 0.2s ease-out, opacity 0.2s linear',
      transition: 'transform 0.2s ease-out, opacity 0.2s linear'
    });
    document.body.appendChild(this.backgroundElement);
    document.body.appendChild(this.domElement);
    var _this = this;
    dom.bind(this.backgroundElement, 'click', function () {
      _this.hide();
    });
  }
  createClass(CenteredDiv, [{
    key: 'show',
    value: function show() {
      var _this = this;
      this.backgroundElement.style.display = 'block';
      this.domElement.style.display = 'block';
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
      this.layout();
      Common.defer(function () {
        _this.backgroundElement.style.opacity = 1;
        _this.domElement.style.opacity = 1;
        _this.domElement.style.webkitTransform = 'scale(1)';
      });
    }
  }, {
    key: 'hide',
    value: function hide() {
      var _this = this;
      var hide = function hide() {
        _this.domElement.style.display = 'none';
        _this.backgroundElement.style.display = 'none';
        dom.unbind(_this.domElement, 'webkitTransitionEnd', hide);
        dom.unbind(_this.domElement, 'transitionend', hide);
        dom.unbind(_this.domElement, 'oTransitionEnd', hide);
      };
      dom.bind(this.domElement, 'webkitTransitionEnd', hide);
      dom.bind(this.domElement, 'transitionend', hide);
      dom.bind(this.domElement, 'oTransitionEnd', hide);
      this.backgroundElement.style.opacity = 0;
      this.domElement.style.opacity = 0;
      this.domElement.style.webkitTransform = 'scale(1.1)';
    }
  }, {
    key: 'layout',
    value: function layout() {
      this.domElement.style.left = window.innerWidth / 2 - dom.getWidth(this.domElement) / 2 + 'px';
      this.domElement.style.top = window.innerHeight / 2 - dom.getHeight(this.domElement) / 2 + 'px';
    }
  }]);
  return CenteredDiv;
}();

var styleSheet = ___$insertStyle(".dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .cr.function .property-name{width:100%}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}\n");

css.inject(styleSheet);
var CSS_NAMESPACE = 'dg';
var HIDE_KEY_CODE = 72;
var CLOSE_BUTTON_HEIGHT = 20;
var DEFAULT_DEFAULT_PRESET_NAME = 'Default';
var SUPPORTS_LOCAL_STORAGE = function () {
  try {
    return !!window.localStorage;
  } catch (e) {
    return false;
  }
}();
var SAVE_DIALOGUE = void 0;
var autoPlaceVirgin = true;
var autoPlaceContainer = void 0;
var hide = false;
var hideableGuis = [];
var GUI = function GUI(pars) {
  var _this = this;
  var params = pars || {};
  this.domElement = document.createElement('div');
  this.__ul = document.createElement('ul');
  this.domElement.appendChild(this.__ul);
  dom.addClass(this.domElement, CSS_NAMESPACE);
  this.__folders = {};
  this.__controllers = [];
  this.__rememberedObjects = [];
  this.__rememberedObjectIndecesToControllers = [];
  this.__listening = [];
  params = Common.defaults(params, {
    closeOnTop: false,
    autoPlace: true,
    width: GUI.DEFAULT_WIDTH
  });
  params = Common.defaults(params, {
    resizable: params.autoPlace,
    hideable: params.autoPlace
  });
  if (!Common.isUndefined(params.load)) {
    if (params.preset) {
      params.load.preset = params.preset;
    }
  } else {
    params.load = { preset: DEFAULT_DEFAULT_PRESET_NAME };
  }
  if (Common.isUndefined(params.parent) && params.hideable) {
    hideableGuis.push(this);
  }
  params.resizable = Common.isUndefined(params.parent) && params.resizable;
  if (params.autoPlace && Common.isUndefined(params.scrollable)) {
    params.scrollable = true;
  }
  var useLocalStorage = SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(this, 'isLocal')) === 'true';
  var saveToLocalStorage = void 0;
  var titleRow = void 0;
  Object.defineProperties(this,
  {
    parent: {
      get: function get$$1() {
        return params.parent;
      }
    },
    scrollable: {
      get: function get$$1() {
        return params.scrollable;
      }
    },
    autoPlace: {
      get: function get$$1() {
        return params.autoPlace;
      }
    },
    closeOnTop: {
      get: function get$$1() {
        return params.closeOnTop;
      }
    },
    preset: {
      get: function get$$1() {
        if (_this.parent) {
          return _this.getRoot().preset;
        }
        return params.load.preset;
      },
      set: function set$$1(v) {
        if (_this.parent) {
          _this.getRoot().preset = v;
        } else {
          params.load.preset = v;
        }
        setPresetSelectIndex(this);
        _this.revert();
      }
    },
    width: {
      get: function get$$1() {
        return params.width;
      },
      set: function set$$1(v) {
        params.width = v;
        setWidth(_this, v);
      }
    },
    name: {
      get: function get$$1() {
        return params.name;
      },
      set: function set$$1(v) {
        params.name = v;
        if (titleRow) {
          titleRow.innerHTML = params.name;
        }
      }
    },
    closed: {
      get: function get$$1() {
        return params.closed;
      },
      set: function set$$1(v) {
        params.closed = v;
        if (params.closed) {
          dom.addClass(_this.__ul, GUI.CLASS_CLOSED);
        } else {
          dom.removeClass(_this.__ul, GUI.CLASS_CLOSED);
        }
        this.onResize();
        if (_this.__closeButton) {
          _this.__closeButton.innerHTML = v ? GUI.TEXT_OPEN : GUI.TEXT_CLOSED;
        }
      }
    },
    load: {
      get: function get$$1() {
        return params.load;
      }
    },
    useLocalStorage: {
      get: function get$$1() {
        return useLocalStorage;
      },
      set: function set$$1(bool) {
        if (SUPPORTS_LOCAL_STORAGE) {
          useLocalStorage = bool;
          if (bool) {
            dom.bind(window, 'unload', saveToLocalStorage);
          } else {
            dom.unbind(window, 'unload', saveToLocalStorage);
          }
          localStorage.setItem(getLocalStorageHash(_this, 'isLocal'), bool);
        }
      }
    }
  });
  if (Common.isUndefined(params.parent)) {
    this.closed = params.closed || false;
    dom.addClass(this.domElement, GUI.CLASS_MAIN);
    dom.makeSelectable(this.domElement, false);
    if (SUPPORTS_LOCAL_STORAGE) {
      if (useLocalStorage) {
        _this.useLocalStorage = true;
        var savedGui = localStorage.getItem(getLocalStorageHash(this, 'gui'));
        if (savedGui) {
          params.load = JSON.parse(savedGui);
        }
      }
    }
    this.__closeButton = document.createElement('div');
    this.__closeButton.innerHTML = GUI.TEXT_CLOSED;
    dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BUTTON);
    if (params.closeOnTop) {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_TOP);
      this.domElement.insertBefore(this.__closeButton, this.domElement.childNodes[0]);
    } else {
      dom.addClass(this.__closeButton, GUI.CLASS_CLOSE_BOTTOM);
      this.domElement.appendChild(this.__closeButton);
    }
    dom.bind(this.__closeButton, 'click', function () {
      _this.closed = !_this.closed;
    });
  } else {
    if (params.closed === undefined) {
      params.closed = true;
    }
    var titleRowName = document.createTextNode(params.name);
    dom.addClass(titleRowName, 'controller-name');
    titleRow = addRow(_this, titleRowName);
    var onClickTitle = function onClickTitle(e) {
      e.preventDefault();
      _this.closed = !_this.closed;
      return false;
    };
    dom.addClass(this.__ul, GUI.CLASS_CLOSED);
    dom.addClass(titleRow, 'title');
    dom.bind(titleRow, 'click', onClickTitle);
    if (!params.closed) {
      this.closed = false;
    }
  }
  if (params.autoPlace) {
    if (Common.isUndefined(params.parent)) {
      if (autoPlaceVirgin) {
        autoPlaceContainer = document.createElement('div');
        dom.addClass(autoPlaceContainer, CSS_NAMESPACE);
        dom.addClass(autoPlaceContainer, GUI.CLASS_AUTO_PLACE_CONTAINER);
        document.body.appendChild(autoPlaceContainer);
        autoPlaceVirgin = false;
      }
      autoPlaceContainer.appendChild(this.domElement);
      dom.addClass(this.domElement, GUI.CLASS_AUTO_PLACE);
    }
    if (!this.parent) {
      setWidth(_this, params.width);
    }
  }
  this.__resizeHandler = function () {
    _this.onResizeDebounced();
  };
  dom.bind(window, 'resize', this.__resizeHandler);
  dom.bind(this.__ul, 'webkitTransitionEnd', this.__resizeHandler);
  dom.bind(this.__ul, 'transitionend', this.__resizeHandler);
  dom.bind(this.__ul, 'oTransitionEnd', this.__resizeHandler);
  this.onResize();
  if (params.resizable) {
    addResizeHandle(this);
  }
  saveToLocalStorage = function saveToLocalStorage() {
    if (SUPPORTS_LOCAL_STORAGE && localStorage.getItem(getLocalStorageHash(_this, 'isLocal')) === 'true') {
      localStorage.setItem(getLocalStorageHash(_this, 'gui'), JSON.stringify(_this.getSaveObject()));
    }
  };
  this.saveToLocalStorageIfPossible = saveToLocalStorage;
  function resetWidth() {
    var root = _this.getRoot();
    root.width += 1;
    Common.defer(function () {
      root.width -= 1;
    });
  }
  if (!params.parent) {
    resetWidth();
  }
};
GUI.toggleHide = function () {
  hide = !hide;
  Common.each(hideableGuis, function (gui) {
    gui.domElement.style.display = hide ? 'none' : '';
  });
};
GUI.CLASS_AUTO_PLACE = 'a';
GUI.CLASS_AUTO_PLACE_CONTAINER = 'ac';
GUI.CLASS_MAIN = 'main';
GUI.CLASS_CONTROLLER_ROW = 'cr';
GUI.CLASS_TOO_TALL = 'taller-than-window';
GUI.CLASS_CLOSED = 'closed';
GUI.CLASS_CLOSE_BUTTON = 'close-button';
GUI.CLASS_CLOSE_TOP = 'close-top';
GUI.CLASS_CLOSE_BOTTOM = 'close-bottom';
GUI.CLASS_DRAG = 'drag';
GUI.DEFAULT_WIDTH = 245;
GUI.TEXT_CLOSED = 'Close Controls';
GUI.TEXT_OPEN = 'Open Controls';
GUI._keydownHandler = function (e) {
  if (document.activeElement.type !== 'text' && (e.which === HIDE_KEY_CODE || e.keyCode === HIDE_KEY_CODE)) {
    GUI.toggleHide();
  }
};
dom.bind(window, 'keydown', GUI._keydownHandler, false);
Common.extend(GUI.prototype,
{
  add: function add(object, property) {
    return _add(this, object, property, {
      factoryArgs: Array.prototype.slice.call(arguments, 2)
    });
  },
  addColor: function addColor(object, property) {
    return _add(this, object, property, {
      color: true
    });
  },
  remove: function remove(controller) {
    this.__ul.removeChild(controller.__li);
    this.__controllers.splice(this.__controllers.indexOf(controller), 1);
    var _this = this;
    Common.defer(function () {
      _this.onResize();
    });
  },
  destroy: function destroy() {
    if (this.parent) {
      throw new Error('Only the root GUI should be removed with .destroy(). ' + 'For subfolders, use gui.removeFolder(folder) instead.');
    }
    if (this.autoPlace) {
      autoPlaceContainer.removeChild(this.domElement);
    }
    var _this = this;
    Common.each(this.__folders, function (subfolder) {
      _this.removeFolder(subfolder);
    });
    dom.unbind(window, 'keydown', GUI._keydownHandler, false);
    removeListeners(this);
  },
  addFolder: function addFolder(name) {
    if (this.__folders[name] !== undefined) {
      throw new Error('You already have a folder in this GUI by the' + ' name "' + name + '"');
    }
    var newGuiParams = { name: name, parent: this };
    newGuiParams.autoPlace = this.autoPlace;
    if (this.load &&
    this.load.folders &&
    this.load.folders[name]) {
      newGuiParams.closed = this.load.folders[name].closed;
      newGuiParams.load = this.load.folders[name];
    }
    var gui = new GUI(newGuiParams);
    this.__folders[name] = gui;
    var li = addRow(this, gui.domElement);
    dom.addClass(li, 'folder');
    return gui;
  },
  removeFolder: function removeFolder(folder) {
    this.__ul.removeChild(folder.domElement.parentElement);
    delete this.__folders[folder.name];
    if (this.load &&
    this.load.folders &&
    this.load.folders[folder.name]) {
      delete this.load.folders[folder.name];
    }
    removeListeners(folder);
    var _this = this;
    Common.each(folder.__folders, function (subfolder) {
      folder.removeFolder(subfolder);
    });
    Common.defer(function () {
      _this.onResize();
    });
  },
  open: function open() {
    this.closed = false;
  },
  close: function close() {
    this.closed = true;
  },
  hide: function hide() {
    this.domElement.style.display = 'none';
  },
  show: function show() {
    this.domElement.style.display = '';
  },
  onResize: function onResize() {
    var root = this.getRoot();
    if (root.scrollable) {
      var top = dom.getOffset(root.__ul).top;
      var h = 0;
      Common.each(root.__ul.childNodes, function (node) {
        if (!(root.autoPlace && node === root.__save_row)) {
          h += dom.getHeight(node);
        }
      });
      if (window.innerHeight - top - CLOSE_BUTTON_HEIGHT < h) {
        dom.addClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = window.innerHeight - top - CLOSE_BUTTON_HEIGHT + 'px';
      } else {
        dom.removeClass(root.domElement, GUI.CLASS_TOO_TALL);
        root.__ul.style.height = 'auto';
      }
    }
    if (root.__resize_handle) {
      Common.defer(function () {
        root.__resize_handle.style.height = root.__ul.offsetHeight + 'px';
      });
    }
    if (root.__closeButton) {
      root.__closeButton.style.width = root.width + 'px';
    }
  },
  onResizeDebounced: Common.debounce(function () {
    this.onResize();
  }, 50),
  remember: function remember() {
    if (Common.isUndefined(SAVE_DIALOGUE)) {
      SAVE_DIALOGUE = new CenteredDiv();
      SAVE_DIALOGUE.domElement.innerHTML = saveDialogContents;
    }
    if (this.parent) {
      throw new Error('You can only call remember on a top level GUI.');
    }
    var _this = this;
    Common.each(Array.prototype.slice.call(arguments), function (object) {
      if (_this.__rememberedObjects.length === 0) {
        addSaveMenu(_this);
      }
      if (_this.__rememberedObjects.indexOf(object) === -1) {
        _this.__rememberedObjects.push(object);
      }
    });
    if (this.autoPlace) {
      setWidth(this, this.width);
    }
  },
  getRoot: function getRoot() {
    var gui = this;
    while (gui.parent) {
      gui = gui.parent;
    }
    return gui;
  },
  getSaveObject: function getSaveObject() {
    var toReturn = this.load;
    toReturn.closed = this.closed;
    if (this.__rememberedObjects.length > 0) {
      toReturn.preset = this.preset;
      if (!toReturn.remembered) {
        toReturn.remembered = {};
      }
      toReturn.remembered[this.preset] = getCurrentPreset(this);
    }
    toReturn.folders = {};
    Common.each(this.__folders, function (element, key) {
      toReturn.folders[key] = element.getSaveObject();
    });
    return toReturn;
  },
  save: function save() {
    if (!this.load.remembered) {
      this.load.remembered = {};
    }
    this.load.remembered[this.preset] = getCurrentPreset(this);
    markPresetModified(this, false);
    this.saveToLocalStorageIfPossible();
  },
  saveAs: function saveAs(presetName) {
    if (!this.load.remembered) {
      this.load.remembered = {};
      this.load.remembered[DEFAULT_DEFAULT_PRESET_NAME] = getCurrentPreset(this, true);
    }
    this.load.remembered[presetName] = getCurrentPreset(this);
    this.preset = presetName;
    addPresetOption(this, presetName, true);
    this.saveToLocalStorageIfPossible();
  },
  revert: function revert(gui) {
    Common.each(this.__controllers, function (controller) {
      if (!this.getRoot().load.remembered) {
        controller.setValue(controller.initialValue);
      } else {
        recallSavedValue(gui || this.getRoot(), controller);
      }
      if (controller.__onFinishChange) {
        controller.__onFinishChange.call(controller, controller.getValue());
      }
    }, this);
    Common.each(this.__folders, function (folder) {
      folder.revert(folder);
    });
    if (!gui) {
      markPresetModified(this.getRoot(), false);
    }
  },
  listen: function listen(controller) {
    var init = this.__listening.length === 0;
    this.__listening.push(controller);
    if (init) {
      updateDisplays(this.__listening);
    }
  },
  updateDisplay: function updateDisplay() {
    Common.each(this.__controllers, function (controller) {
      controller.updateDisplay();
    });
    Common.each(this.__folders, function (folder) {
      folder.updateDisplay();
    });
  }
});
function addRow(gui, newDom, liBefore) {
  var li = document.createElement('li');
  if (newDom) {
    li.appendChild(newDom);
  }
  if (liBefore) {
    gui.__ul.insertBefore(li, liBefore);
  } else {
    gui.__ul.appendChild(li);
  }
  gui.onResize();
  return li;
}
function removeListeners(gui) {
  dom.unbind(window, 'resize', gui.__resizeHandler);
  if (gui.saveToLocalStorageIfPossible) {
    dom.unbind(window, 'unload', gui.saveToLocalStorageIfPossible);
  }
}
function markPresetModified(gui, modified) {
  var opt = gui.__preset_select[gui.__preset_select.selectedIndex];
  if (modified) {
    opt.innerHTML = opt.value + '*';
  } else {
    opt.innerHTML = opt.value;
  }
}
function augmentController(gui, li, controller) {
  controller.__li = li;
  controller.__gui = gui;
  Common.extend(controller, {
    options: function options(_options) {
      if (arguments.length > 1) {
        var nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: nextSibling,
          factoryArgs: [Common.toArray(arguments)]
        });
      }
      if (Common.isArray(_options) || Common.isObject(_options)) {
        var _nextSibling = controller.__li.nextElementSibling;
        controller.remove();
        return _add(gui, controller.object, controller.property, {
          before: _nextSibling,
          factoryArgs: [_options]
        });
      }
    },
    name: function name(_name) {
      controller.__li.firstElementChild.firstElementChild.innerHTML = _name;
      return controller;
    },
    listen: function listen() {
      controller.__gui.listen(controller);
      return controller;
    },
    remove: function remove() {
      controller.__gui.remove(controller);
      return controller;
    }
  });
  if (controller instanceof NumberControllerSlider) {
    var box = new NumberControllerBox(controller.object, controller.property, { min: controller.__min, max: controller.__max, step: controller.__step });
    Common.each(['updateDisplay', 'onChange', 'onFinishChange', 'step', 'min', 'max'], function (method) {
      var pc = controller[method];
      var pb = box[method];
      controller[method] = box[method] = function () {
        var args = Array.prototype.slice.call(arguments);
        pb.apply(box, args);
        return pc.apply(controller, args);
      };
    });
    dom.addClass(li, 'has-slider');
    controller.domElement.insertBefore(box.domElement, controller.domElement.firstElementChild);
  } else if (controller instanceof NumberControllerBox) {
    var r = function r(returned) {
      if (Common.isNumber(controller.__min) && Common.isNumber(controller.__max)) {
        var oldName = controller.__li.firstElementChild.firstElementChild.innerHTML;
        var wasListening = controller.__gui.__listening.indexOf(controller) > -1;
        controller.remove();
        var newController = _add(gui, controller.object, controller.property, {
          before: controller.__li.nextElementSibling,
          factoryArgs: [controller.__min, controller.__max, controller.__step]
        });
        newController.name(oldName);
        if (wasListening) newController.listen();
        return newController;
      }
      return returned;
    };
    controller.min = Common.compose(r, controller.min);
    controller.max = Common.compose(r, controller.max);
  } else if (controller instanceof BooleanController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__checkbox, 'click');
    });
    dom.bind(controller.__checkbox, 'click', function (e) {
      e.stopPropagation();
    });
  } else if (controller instanceof FunctionController) {
    dom.bind(li, 'click', function () {
      dom.fakeEvent(controller.__button, 'click');
    });
    dom.bind(li, 'mouseover', function () {
      dom.addClass(controller.__button, 'hover');
    });
    dom.bind(li, 'mouseout', function () {
      dom.removeClass(controller.__button, 'hover');
    });
  } else if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
    controller.updateDisplay = Common.compose(function (val) {
      li.style.borderLeftColor = controller.__color.toString();
      return val;
    }, controller.updateDisplay);
    controller.updateDisplay();
  }
  controller.setValue = Common.compose(function (val) {
    if (gui.getRoot().__preset_select && controller.isModified()) {
      markPresetModified(gui.getRoot(), true);
    }
    return val;
  }, controller.setValue);
}
function recallSavedValue(gui, controller) {
  var root = gui.getRoot();
  var matchedIndex = root.__rememberedObjects.indexOf(controller.object);
  if (matchedIndex !== -1) {
    var controllerMap = root.__rememberedObjectIndecesToControllers[matchedIndex];
    if (controllerMap === undefined) {
      controllerMap = {};
      root.__rememberedObjectIndecesToControllers[matchedIndex] = controllerMap;
    }
    controllerMap[controller.property] = controller;
    if (root.load && root.load.remembered) {
      var presetMap = root.load.remembered;
      var preset = void 0;
      if (presetMap[gui.preset]) {
        preset = presetMap[gui.preset];
      } else if (presetMap[DEFAULT_DEFAULT_PRESET_NAME]) {
        preset = presetMap[DEFAULT_DEFAULT_PRESET_NAME];
      } else {
        return;
      }
      if (preset[matchedIndex] && preset[matchedIndex][controller.property] !== undefined) {
        var value = preset[matchedIndex][controller.property];
        controller.initialValue = value;
        controller.setValue(value);
      }
    }
  }
}
function _add(gui, object, property, params) {
  if (object[property] === undefined) {
    throw new Error('Object "' + object + '" has no property "' + property + '"');
  }
  var controller = void 0;
  if (params.color) {
    controller = new ColorController(object, property);
  } else {
    var factoryArgs = [object, property].concat(params.factoryArgs);
    controller = ControllerFactory.apply(gui, factoryArgs);
  }
  if (params.before instanceof Controller) {
    params.before = params.before.__li;
  }
  recallSavedValue(gui, controller);
  dom.addClass(controller.domElement, 'c');
  var name = document.createElement('span');
  dom.addClass(name, 'property-name');
  name.innerHTML = controller.property;
  var container = document.createElement('div');
  container.appendChild(name);
  container.appendChild(controller.domElement);
  var li = addRow(gui, container, params.before);
  dom.addClass(li, GUI.CLASS_CONTROLLER_ROW);
  if (controller instanceof ColorController) {
    dom.addClass(li, 'color');
  } else {
    dom.addClass(li, _typeof(controller.getValue()));
  }
  augmentController(gui, li, controller);
  gui.__controllers.push(controller);
  return controller;
}
function getLocalStorageHash(gui, key) {
  return document.location.href + '.' + key;
}
function addPresetOption(gui, name, setSelected) {
  var opt = document.createElement('option');
  opt.innerHTML = name;
  opt.value = name;
  gui.__preset_select.appendChild(opt);
  if (setSelected) {
    gui.__preset_select.selectedIndex = gui.__preset_select.length - 1;
  }
}
function showHideExplain(gui, explain) {
  explain.style.display = gui.useLocalStorage ? 'block' : 'none';
}
function addSaveMenu(gui) {
  var div = gui.__save_row = document.createElement('li');
  dom.addClass(gui.domElement, 'has-save');
  gui.__ul.insertBefore(div, gui.__ul.firstChild);
  dom.addClass(div, 'save-row');
  var gears = document.createElement('span');
  gears.innerHTML = '&nbsp;';
  dom.addClass(gears, 'button gears');
  var button = document.createElement('span');
  button.innerHTML = 'Save';
  dom.addClass(button, 'button');
  dom.addClass(button, 'save');
  var button2 = document.createElement('span');
  button2.innerHTML = 'New';
  dom.addClass(button2, 'button');
  dom.addClass(button2, 'save-as');
  var button3 = document.createElement('span');
  button3.innerHTML = 'Revert';
  dom.addClass(button3, 'button');
  dom.addClass(button3, 'revert');
  var select = gui.__preset_select = document.createElement('select');
  if (gui.load && gui.load.remembered) {
    Common.each(gui.load.remembered, function (value, key) {
      addPresetOption(gui, key, key === gui.preset);
    });
  } else {
    addPresetOption(gui, DEFAULT_DEFAULT_PRESET_NAME, false);
  }
  dom.bind(select, 'change', function () {
    for (var index = 0; index < gui.__preset_select.length; index++) {
      gui.__preset_select[index].innerHTML = gui.__preset_select[index].value;
    }
    gui.preset = this.value;
  });
  div.appendChild(select);
  div.appendChild(gears);
  div.appendChild(button);
  div.appendChild(button2);
  div.appendChild(button3);
  if (SUPPORTS_LOCAL_STORAGE) {
    var explain = document.getElementById('dg-local-explain');
    var localStorageCheckBox = document.getElementById('dg-local-storage');
    var saveLocally = document.getElementById('dg-save-locally');
    saveLocally.style.display = 'block';
    if (localStorage.getItem(getLocalStorageHash(gui, 'isLocal')) === 'true') {
      localStorageCheckBox.setAttribute('checked', 'checked');
    }
    showHideExplain(gui, explain);
    dom.bind(localStorageCheckBox, 'change', function () {
      gui.useLocalStorage = !gui.useLocalStorage;
      showHideExplain(gui, explain);
    });
  }
  var newConstructorTextArea = document.getElementById('dg-new-constructor');
  dom.bind(newConstructorTextArea, 'keydown', function (e) {
    if (e.metaKey && (e.which === 67 || e.keyCode === 67)) {
      SAVE_DIALOGUE.hide();
    }
  });
  dom.bind(gears, 'click', function () {
    newConstructorTextArea.innerHTML = JSON.stringify(gui.getSaveObject(), undefined, 2);
    SAVE_DIALOGUE.show();
    newConstructorTextArea.focus();
    newConstructorTextArea.select();
  });
  dom.bind(button, 'click', function () {
    gui.save();
  });
  dom.bind(button2, 'click', function () {
    var presetName = prompt('Enter a new preset name.');
    if (presetName) {
      gui.saveAs(presetName);
    }
  });
  dom.bind(button3, 'click', function () {
    gui.revert();
  });
}
function addResizeHandle(gui) {
  var pmouseX = void 0;
  gui.__resize_handle = document.createElement('div');
  Common.extend(gui.__resize_handle.style, {
    width: '6px',
    marginLeft: '-3px',
    height: '200px',
    cursor: 'ew-resize',
    position: 'absolute'
  });
  function drag(e) {
    e.preventDefault();
    gui.width += pmouseX - e.clientX;
    gui.onResize();
    pmouseX = e.clientX;
    return false;
  }
  function dragStop() {
    dom.removeClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.unbind(window, 'mousemove', drag);
    dom.unbind(window, 'mouseup', dragStop);
  }
  function dragStart(e) {
    e.preventDefault();
    pmouseX = e.clientX;
    dom.addClass(gui.__closeButton, GUI.CLASS_DRAG);
    dom.bind(window, 'mousemove', drag);
    dom.bind(window, 'mouseup', dragStop);
    return false;
  }
  dom.bind(gui.__resize_handle, 'mousedown', dragStart);
  dom.bind(gui.__closeButton, 'mousedown', dragStart);
  gui.domElement.insertBefore(gui.__resize_handle, gui.domElement.firstElementChild);
}
function setWidth(gui, w) {
  gui.domElement.style.width = w + 'px';
  if (gui.__save_row && gui.autoPlace) {
    gui.__save_row.style.width = w + 'px';
  }
  if (gui.__closeButton) {
    gui.__closeButton.style.width = w + 'px';
  }
}
function getCurrentPreset(gui, useInitialValues) {
  var toReturn = {};
  Common.each(gui.__rememberedObjects, function (val, index) {
    var savedValues = {};
    var controllerMap = gui.__rememberedObjectIndecesToControllers[index];
    Common.each(controllerMap, function (controller, property) {
      savedValues[property] = useInitialValues ? controller.initialValue : controller.getValue();
    });
    toReturn[index] = savedValues;
  });
  return toReturn;
}
function setPresetSelectIndex(gui) {
  for (var index = 0; index < gui.__preset_select.length; index++) {
    if (gui.__preset_select[index].value === gui.preset) {
      gui.__preset_select.selectedIndex = index;
    }
  }
}
function updateDisplays(controllerArray) {
  if (controllerArray.length !== 0) {
    requestAnimationFrame$1.call(window, function () {
      updateDisplays(controllerArray);
    });
  }
  Common.each(controllerArray, function (c) {
    c.updateDisplay();
  });
}

var color = {
  Color: Color,
  math: ColorMath,
  interpret: interpret
};
var controllers = {
  Controller: Controller,
  BooleanController: BooleanController,
  OptionController: OptionController,
  StringController: StringController,
  NumberController: NumberController,
  NumberControllerBox: NumberControllerBox,
  NumberControllerSlider: NumberControllerSlider,
  FunctionController: FunctionController,
  ColorController: ColorController
};
var dom$1 = { dom: dom };
var gui = { GUI: GUI };
var GUI$1 = GUI;
var index = {
  color: color,
  controllers: controllers,
  dom: dom$1,
  gui: gui,
  GUI: GUI$1
};


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (index);
//# sourceMappingURL=dat.gui.module.js.map


/***/ }),

/***/ "./src/Background.ts":
/*!***************************!*\
  !*** ./src/Background.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
class Background {
    constructor() {
        this.largeGridSize = 300;
        this.largeGridWidth = 2;
        this.largeGridColour = 'rgba(255, 255, 255, 0.2)';
        this.smallGridSize = 100;
        this.smallGridWidth = 1;
        this.smallGridColour = 'rgba(255, 255, 255, 0.1)';
    }
    update(dt) { }
    draw(context, camera) {
        context.save();
        const bounds = camera.bounds;
        context.strokeStyle = this.largeGridColour;
        context.lineWidth = this.largeGridWidth;
        this.drawGrid(context, this.largeGridSize, bounds);
        context.strokeStyle = this.smallGridColour;
        context.lineWidth = this.smallGridWidth;
        this.drawGrid(context, this.smallGridSize, bounds);
        context.restore();
    }
    drawGrid(context, size, bounds) {
        context.beginPath();
        const startX = Math.floor(bounds.left / size) * size;
        const endX = Math.ceil(bounds.right / size) * size;
        for (let x = startX; x <= endX; x += size) {
            context.moveTo(x, bounds.top);
            context.lineTo(x, bounds.bottom);
        }
        const startY = Math.floor(bounds.top / size) * size;
        const endY = Math.ceil(bounds.bottom / size) * size;
        for (let y = startY; y <= endY; y += size) {
            context.moveTo(bounds.left, y);
            context.lineTo(bounds.right, y);
        }
        context.stroke();
    }
}
exports["default"] = Background;


/***/ }),

/***/ "./src/Camera.ts":
/*!***********************!*\
  !*** ./src/Camera.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const vec_1 = __webpack_require__(/*! ./vec */ "./src/vec.ts");
class Camera {
    constructor(position) {
        this.easeAmount = 0.9;
        this.position = vec_1.vec.clone(position);
        this.actualPosition = vec_1.vec.clone(position);
    }
    get bounds() {
        return {
            top: this.actualPosition.y - (Game_1.default.screen.y / 2),
            bottom: this.actualPosition.y + (Game_1.default.screen.y / 2),
            left: this.actualPosition.x - (Game_1.default.screen.x / 2),
            right: this.actualPosition.x + (Game_1.default.screen.x / 2)
        };
    }
    draw(context) {
        const delta = vec_1.vec.sub(this.actualPosition, this.position);
        this.actualPosition = vec_1.vec.add(this.position, vec_1.vec.mul(delta, this.easeAmount));
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.translate((Game_1.default.screen.x / 2) - this.actualPosition.x, (Game_1.default.screen.y / 2) - this.actualPosition.y);
    }
}
exports["default"] = Camera;


/***/ }),

/***/ "./src/Car.ts":
/*!********************!*\
  !*** ./src/Car.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const Debug_1 = __webpack_require__(/*! ./Debug */ "./src/Debug.ts");
const Input_1 = __webpack_require__(/*! ./Input */ "./src/Input.ts");
const Wheel_1 = __webpack_require__(/*! ./Wheel */ "./src/Wheel.ts");
const vec_1 = __webpack_require__(/*! ./vec */ "./src/vec.ts");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/utilities.ts");
const config = __webpack_require__(/*! ./config.json */ "./src/config.json");
var WheelPosition;
(function (WheelPosition) {
    WheelPosition[WheelPosition["FrontLeft"] = 0] = "FrontLeft";
    WheelPosition[WheelPosition["FrontRight"] = 1] = "FrontRight";
    WheelPosition[WheelPosition["BackLeft"] = 2] = "BackLeft";
    WheelPosition[WheelPosition["BackRight"] = 3] = "BackRight";
})(WheelPosition || (WheelPosition = {}));
class Car {
    constructor(position, direction = 0) {
        this.speed = 0;
        this.throttle = false;
        this.brake = false;
        this.handbrake = false;
        this.steering = 0;
        this.wheels = [];
        this.position = vec_1.vec.clone(position);
        this.direction = direction;
        this.wheels[WheelPosition.FrontLeft] = new Wheel_1.default(this.getWheelPosition(WheelPosition.FrontLeft), this.direction);
        this.wheels[WheelPosition.FrontRight] = new Wheel_1.default(this.getWheelPosition(WheelPosition.FrontRight), this.direction);
        this.wheels[WheelPosition.BackLeft] = new Wheel_1.default(this.getWheelPosition(WheelPosition.BackLeft), this.direction);
        this.wheels[WheelPosition.BackRight] = new Wheel_1.default(this.getWheelPosition(WheelPosition.BackRight), this.direction);
    }
    getWheelPosition(wheel) {
        let offset;
        switch (wheel) {
            case WheelPosition.FrontLeft:
                offset = (0, vec_1.vec)(Game_1.default.settings.frontWheelsOffset, Game_1.default.settings.leftWheelsOffset);
                break;
            case WheelPosition.FrontRight:
                offset = (0, vec_1.vec)(Game_1.default.settings.frontWheelsOffset, Game_1.default.settings.rightWheelsOffset);
                break;
            case WheelPosition.BackLeft:
                offset = (0, vec_1.vec)(Game_1.default.settings.backWheelsOffset, Game_1.default.settings.leftWheelsOffset);
                break;
            case WheelPosition.BackRight:
                offset = (0, vec_1.vec)(Game_1.default.settings.backWheelsOffset, Game_1.default.settings.rightWheelsOffset);
                break;
        }
        return vec_1.vec.add(this.position, vec_1.vec.rot(offset, this.direction));
    }
    getWheelStats() {
        return this.wheels.map(wheel => wheel.stats);
    }
    handleInput() {
        this.throttle = Input_1.default.keyDown(config.controls.throttle);
        this.brake = Input_1.default.keyDown(config.controls.brake);
        this.handbrake = Input_1.default.keyDown(config.controls.handbrake);
        const steeringAmount = Game_1.default.settings.carSteeringAmount + (Math.abs(this.steering) * Game_1.default.settings.carSteeringCurve);
        if (Input_1.default.keyDown(config.controls.left)) {
            this.steering -= steeringAmount;
        }
        else if (Input_1.default.keyDown(config.controls.right)) {
            this.steering += steeringAmount;
        }
        else if (this.steering !== 0) {
            this.steering += (this.steering < 0 ? 1 : -1) *
                Game_1.default.settings.carSteeringResetAmount;
            if (Math.abs(this.steering) <= Game_1.default.settings.carSteeringResetAmount) {
                this.steering = 0;
            }
        }
        this.steering = (0, utilities_1.clamp)(this.steering, -1, 1);
    }
    update(dt) {
        const drive = this.throttle ? Game_1.default.settings.carEnginePower : 0;
        const brake = this.brake ? Game_1.default.settings.carBrakePower : 0;
        let steering = (0, utilities_1.wrapDirection)(this.direction + (this.steering * Game_1.default.settings.carSteeringAngleMax));
        this.wheels[WheelPosition.FrontLeft].update(dt, Game_1.default.settings.frontWheelDrive ? drive : 0, brake, this.handbrake, steering);
        this.wheels[WheelPosition.FrontRight].update(dt, Game_1.default.settings.frontWheelDrive ? drive : 0, brake, this.handbrake, steering);
        this.wheels[WheelPosition.BackLeft].update(dt, Game_1.default.settings.rearWheelDrive ? drive : 0, brake, this.handbrake, this.direction);
        this.wheels[WheelPosition.BackRight].update(dt, Game_1.default.settings.rearWheelDrive ? drive : 0, brake, this.handbrake, this.direction);
        const position = vec_1.vec.avg(...this.wheels.map(wheel => wheel.position));
        const frontAxle = vec_1.vec.avg(this.wheels[WheelPosition.FrontLeft].position, this.wheels[WheelPosition.FrontRight].position);
        const rearAxle = vec_1.vec.avg(this.wheels[WheelPosition.BackLeft].position, this.wheels[WheelPosition.BackRight].position);
        const direction = vec_1.vec.rad(vec_1.vec.sub(frontAxle, rearAxle));
        this.speed = vec_1.vec.len(vec_1.vec.sub(position, this.position));
        this.position = position;
        this.direction = direction;
        Debug_1.default.value('position', vec_1.vec.str(this.position));
        Debug_1.default.value('direction', this.direction);
        Debug_1.default.value('speed', this.speed);
        Debug_1.default.value('steering', this.steering);
        Debug_1.default.value('throttle', 'throttle', {
            showLabel: false,
            foregroundColour: this.throttle ? 'white' : 'rgba(255, 255, 255, 0.2)',
        });
        Debug_1.default.value('brake', 'brake', {
            showLabel: false,
            foregroundColour: this.brake ? 'white' : 'rgba(255, 255, 255, 0.2)',
        });
        Debug_1.default.value('handbrake', 'handbrake', {
            showLabel: false,
            foregroundColour: this.handbrake ? 'white' : 'rgba(255, 255, 255, 0.2)',
        });
        steering = (0, utilities_1.wrapDirection)(this.direction + (this.steering * Game_1.default.settings.carSteeringAngleMax));
        this.wheels[WheelPosition.FrontLeft].position = this.getWheelPosition(WheelPosition.FrontLeft);
        this.wheels[WheelPosition.FrontLeft].direction = steering;
        this.wheels[WheelPosition.FrontRight].position = this.getWheelPosition(WheelPosition.FrontRight);
        this.wheels[WheelPosition.FrontRight].direction = steering;
        this.wheels[WheelPosition.BackLeft].position = this.getWheelPosition(WheelPosition.BackLeft);
        this.wheels[WheelPosition.BackLeft].direction = this.direction;
        this.wheels[WheelPosition.BackRight].position = this.getWheelPosition(WheelPosition.BackRight);
        this.wheels[WheelPosition.BackRight].direction = this.direction;
    }
    draw(context, skidCanvas) {
        context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(this.direction);
        context.strokeStyle = 'white';
        context.lineWidth = 1;
        context.strokeRect(-Game_1.default.settings.carLength / 2, -Game_1.default.settings.carWidth / 2, Game_1.default.settings.carLength, Game_1.default.settings.carWidth);
        context.restore();
        for (const wheel of this.wheels) {
            wheel.draw(context, skidCanvas);
        }
    }
}
exports["default"] = Car;


/***/ }),

/***/ "./src/Debug.ts":
/*!**********************!*\
  !*** ./src/Debug.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vec_1 = __webpack_require__(/*! ./vec */ "./src/vec.ts");
class Debug {
    constructor(options = {}) {
        this.defaultOptions = {
            margin: 10,
            padding: 4,
            font: '10pt Lucida Console, monospace',
            lineHeight: 12,
            foregroundColour: '#fff',
            backgroundColour: '#3338',
            defaultValue: {
                align: 'left',
                showLabel: true,
            },
            defaultMarker: {
                showLabel: true,
                showValue: true,
                showMarker: true,
                markerSize: 6,
                markerStyle: 'x',
                markerColour: '#ccc',
                space: 'world',
                labelOffset: (0, vec_1.vec)(10),
            },
        };
        this.options = Object.assign({}, this.defaultOptions, options);
        this.values = new Map();
        this.markers = new Map();
    }
    static initialise(options = {}) {
        Debug.instance = new Debug(options);
    }
    static getInstance() {
        if (!Debug.instance) {
            Debug.initialise();
        }
        return Debug.instance;
    }
    static value(label, value, options = {}) {
        const debug = Debug.getInstance();
        debug.values.set(label, Object.assign({ label, value }, debug.defaultOptions.defaultValue, options));
    }
    static marker(label, value, position, options = {}) {
        const debug = Debug.getInstance();
        debug.markers.set(label, Object.assign({ label, value, position }, debug.defaultOptions.defaultMarker, options));
    }
    static draw(context) {
        const debug = Debug.getInstance();
        context.save();
        context.scale(1, 1);
        debug.markers.forEach(marker => {
            if (marker.space === 'world') {
                debug.drawMarker(context, marker);
            }
        });
        context.restore();
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        let position;
        let leftY = debug.options.margin;
        let rightY = debug.options.margin;
        const lineHeight = (debug.options.lineHeight + debug.options.padding * 2);
        debug.values.forEach(value => {
            var _a, _b, _c, _d;
            switch (value.align) {
                case 'left':
                    position = (0, vec_1.vec)(debug.options.margin, leftY);
                    leftY += lineHeight;
                    break;
                case 'right':
                    position = (0, vec_1.vec)(context.canvas.clientWidth - debug.options.margin, rightY);
                    rightY += lineHeight;
                    break;
            }
            debug.drawLabel(context, (value.showLabel ? `${value.label}: ` : '') + `${value.value}`, position, value.align, (_a = value.padding) !== null && _a !== void 0 ? _a : debug.options.padding, (_b = value.font) !== null && _b !== void 0 ? _b : debug.options.font, (_c = value.foregroundColour) !== null && _c !== void 0 ? _c : debug.options.foregroundColour, (_d = value.backgroundColour) !== null && _d !== void 0 ? _d : debug.options.backgroundColour);
        });
        debug.markers.forEach(marker => {
            if (marker.space === 'screen') {
                debug.drawMarker(context, marker);
            }
        });
        context.restore();
        debug.values.clear();
        debug.markers.clear();
    }
    drawMarker(context, marker) {
        var _a, _b, _c, _d, _e;
        context.save();
        const position = (_a = marker.position) !== null && _a !== void 0 ? _a : (0, vec_1.vec)();
        if (marker.showLabel || marker.showValue) {
            this.drawLabel(context, (marker.showLabel ? `${marker.label}: ` : '')
                + (marker.showValue ? `${marker.value}` : ''), vec_1.vec.add(position !== null && position !== void 0 ? position : (0, vec_1.vec)(), marker.labelOffset), 'left', (_b = marker.padding) !== null && _b !== void 0 ? _b : this.options.padding, (_c = marker.font) !== null && _c !== void 0 ? _c : this.options.font, (_d = marker.foregroundColour) !== null && _d !== void 0 ? _d : this.options.foregroundColour, (_e = marker.backgroundColour) !== null && _e !== void 0 ? _e : this.options.backgroundColour);
        }
        if (marker.showMarker) {
            context.lineWidth = 2;
            context.strokeStyle = context.fillStyle = marker.markerColour;
            switch (marker.markerStyle) {
                case 'x':
                    this.drawCross(context, position, marker.markerSize);
                    break;
                case '+':
                    this.drawPlus(context, position, marker.markerSize);
                    break;
                case '.':
                    this.drawDot(context, position, marker.markerSize);
                    break;
            }
        }
        context.restore();
    }
    drawLabel(context, text, position, align, padding, font, foregroundColour, backgroundColour) {
        context.save();
        context.font = font;
        context.textBaseline = 'top';
        const backgroundSize = {
            width: context.measureText(text).width + padding * 2,
            height: this.options.lineHeight + padding * 2,
        };
        const x = align === 'right' ? (position.x - backgroundSize.width) : position.x;
        context.fillStyle = backgroundColour;
        context.fillRect(x - padding, position.y - padding, backgroundSize.width, backgroundSize.height);
        context.fillStyle = foregroundColour;
        context.fillText(text, x, position.y);
        context.restore();
    }
    drawCross(context, position, size) {
        context.beginPath();
        const halfSize = size / 2;
        context.moveTo(position.x - halfSize, position.y - halfSize);
        context.lineTo(position.x + halfSize, position.y + halfSize);
        context.moveTo(position.x - halfSize, position.y + halfSize);
        context.lineTo(position.x + halfSize, position.y - halfSize);
        context.stroke();
    }
    drawPlus(context, position, size) {
        context.beginPath();
        const halfSize = size / 2;
        context.moveTo(position.x, position.y - halfSize);
        context.lineTo(position.x, position.y + halfSize);
        context.moveTo(position.x - halfSize, position.y);
        context.lineTo(position.x + halfSize, position.y);
        context.stroke();
    }
    drawDot(context, position, size) {
        context.beginPath();
        context.arc(position.x, position.y, size / 2, 0, Math.PI * 2);
        context.fill();
    }
}
exports["default"] = Debug;


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const dat = __webpack_require__(/*! dat.gui */ "./node_modules/dat.gui/build/dat.gui.module.js");
const Debug_1 = __webpack_require__(/*! ./Debug */ "./src/Debug.ts");
const Input_1 = __webpack_require__(/*! ./Input */ "./src/Input.ts");
const Camera_1 = __webpack_require__(/*! ./Camera */ "./src/Camera.ts");
const Background_1 = __webpack_require__(/*! ./Background */ "./src/Background.ts");
const SkidCanvas_1 = __webpack_require__(/*! ./SkidCanvas */ "./src/SkidCanvas.ts");
const Graph_1 = __webpack_require__(/*! ./Graph */ "./src/Graph.ts");
const Car_1 = __webpack_require__(/*! ./Car */ "./src/Car.ts");
const TestWheel_1 = __webpack_require__(/*! ./TestWheel */ "./src/TestWheel.ts");
const vec_1 = __webpack_require__(/*! ./vec */ "./src/vec.ts");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/utilities.ts");
const constants = __webpack_require__(/*! ./constants */ "./src/constants.ts");
const config = __webpack_require__(/*! ./config.json */ "./src/config.json");
class Game {
    constructor(container) {
        this.initialCarPosition = (0, vec_1.vec)();
        this.initialCarDirection = 0;
        this.frameRate = 0;
        this.frameCount = 0;
        if (container === null) {
            throw new Error('A valid container element must be specified.');
        }
        if (container.tagName.toLowerCase() !== 'canvas') {
            throw new Error('Container element must be a canvas.');
        }
        this.canvas = container;
        const context = this.canvas.getContext('2d');
        if (context !== null) {
            this.context = context;
        }
        else {
            throw new Error("Couldn't get a 2d context.");
        }
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();
    }
    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    initialise() {
        Input_1.default.initialise();
        this.camera = new Camera_1.default(this.initialCarPosition);
        this.background = new Background_1.default();
        this.skidCanvas = new SkidCanvas_1.default();
        this.graph = new Graph_1.default();
        const reset = () => {
            this.car = new Car_1.default(this.initialCarPosition, this.initialCarDirection);
            this.testWheel = new TestWheel_1.default(this.initialCarPosition, this.initialCarDirection);
        };
        Game.settings.reset = reset;
        reset();
        this.lastFrameTime = this.lastFrameCountTime = performance.now();
        this.loop();
        const gui = new dat.GUI({ width: 350 });
        gui.add(Game.settings, 'reset');
        gui.add(Game.settings, 'testWheel');
        gui.add(Game.settings, 'drawSlipGraph');
        gui.add(Game.settings, 'carWidth').min(10).max(100).step(1);
        gui.add(Game.settings, 'carLength').min(10).max(100).step(1);
        gui.add(Game.settings, 'frontWheelsOffset').min(-100).max(100).step(1);
        gui.add(Game.settings, 'backWheelsOffset').min(-100).max(100).step(1);
        gui.add(Game.settings, 'rightWheelsOffset').min(-100).max(100).step(1);
        gui.add(Game.settings, 'leftWheelsOffset').min(-100).max(100).step(1);
        gui.add(Game.settings, 'carEnginePower').min(0).max(100).step(1);
        gui.add(Game.settings, 'carBrakePower').min(0).max(100).step(1);
        gui.add(Game.settings, 'carSteeringAmount').min(0).max(1);
        gui.add(Game.settings, 'carSteeringCurve').min(0).max(1);
        gui.add(Game.settings, 'carSteeringResetAmount').min(0).max(1);
        gui.add(Game.settings, 'carMaxSpeed').min(0).max(500).step(1);
        gui.add(Game.settings, 'carSteeringAngleMax').min(0).max(Math.PI).step(0.1);
        gui.add(Game.settings, 'wheelWidth').min(10).max(100).step(1);
        gui.add(Game.settings, 'wheelLength').min(10).max(100).step(1);
        gui.add(Game.settings, 'tyreLongitudinalDrag').min(0).max(1);
        gui.add(Game.settings, 'tyreLateralDragMin').min(0).max(1);
        gui.add(Game.settings, 'tyreLateralDragMax').min(0).max(1);
        gui.add(Game.settings, 'tyreSpeedOffset')
            .min(-1).max(1)
            .onChange((0, utilities_1.debounce)(this.graph.update.bind(this.graph)));
        gui.add(Game.settings, 'tyreSpeedCoefficient')
            .min(0).max(5)
            .onChange((0, utilities_1.debounce)(this.graph.update.bind(this.graph)));
        gui.add(Game.settings, 'tyreSlipOffset')
            .min(-1).max(1)
            .onChange((0, utilities_1.debounce)(this.graph.update.bind(this.graph)));
        gui.add(Game.settings, 'tyreSlipCoefficient')
            .min(0).max(5)
            .onChange((0, utilities_1.debounce)(this.graph.update.bind(this.graph)));
        gui.add(Game.settings, 'useSlipCurve')
            .onChange((0, utilities_1.debounce)(this.graph.update.bind(this.graph)));
        gui.add(Game.settings, 'frontWheelDrive');
        gui.add(Game.settings, 'rearWheelDrive');
        this.graph.update(0);
    }
    loop() {
        const now = performance.now();
        const elapsedTime = Math.min(now - this.lastFrameTime, constants.FPS_MIN);
        if (now - this.lastFrameCountTime >= 1000) {
            this.lastFrameCountTime = now;
            this.frameRate = this.frameCount;
            this.frameCount = 0;
        }
        this.frameCount++;
        this.lastFrameTime = now;
        if (config.showFPS) {
            Debug_1.default.value('FPS', this.frameRate);
        }
        this.handleInput();
        this.update(elapsedTime);
        this.draw();
        window.requestAnimationFrame(this.loop.bind(this));
    }
    handleInput() {
        if (Game.settings.testWheel) {
            this.testWheel.handleInput();
        }
        else {
            this.car.handleInput();
        }
    }
    update(dt) {
        Game.screen = (0, vec_1.vec)(this.canvas.width, this.canvas.height);
        if (Game.settings.testWheel) {
            this.testWheel.update(dt);
            this.camera.position = vec_1.vec.clone(this.testWheel.position);
        }
        else {
            this.car.update(dt);
            this.camera.position = vec_1.vec.clone(this.car.position);
        }
        Input_1.default.update();
    }
    draw() {
        this.context.clearRect(0, 0, Game.screen.x, Game.screen.y);
        this.context.save();
        this.camera.draw(this.context);
        this.background.draw(this.context, this.camera);
        this.skidCanvas.draw(this.context, this.camera);
        if (Game.settings.testWheel) {
            this.testWheel.draw(this.context, this.skidCanvas);
            this.graph.draw(this.context, this.testWheel);
        }
        else {
            this.car.draw(this.context, this.skidCanvas);
            this.graph.draw(this.context, this.car);
        }
        Debug_1.default.draw(this.context);
        this.context.restore();
    }
}
exports["default"] = Game;
Game.settings = {
    reset: () => { },
    testWheel: false,
    drawSlipGraph: true,
    carWidth: 30,
    carLength: 50,
    frontWheelsOffset: 17,
    backWheelsOffset: -17,
    rightWheelsOffset: 14,
    leftWheelsOffset: -14,
    carEnginePower: 80,
    carBrakePower: 50,
    carSteeringAmount: 0.02,
    carSteeringCurve: 0.06,
    carSteeringResetAmount: 0.08,
    carMaxSpeed: 170,
    carSteeringAngleMax: 0.7,
    wheelWidth: 4,
    wheelLength: 12,
    tyreLongitudinalDrag: 0.001,
    tyreLateralDragMin: 0.028,
    tyreLateralDragMax: 0.193,
    tyreSpeedOffset: -0.121,
    tyreSpeedCoefficient: 1.6,
    tyreSlipOffset: 0.76,
    tyreSlipCoefficient: 0.8,
    useSlipCurve: true,
    slipCurveControlPoints: [0, 0.0, 0.1, 0.3, 0.5, 0.6, 0.7, 0.8, 0.85, 0.95, 1],
    frontWheelDrive: true,
    rearWheelDrive: true,
};


/***/ }),

/***/ "./src/Graph.ts":
/*!**********************!*\
  !*** ./src/Graph.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/utilities.ts");
const vec_1 = __webpack_require__(/*! ./vec */ "./src/vec.ts");
class Graph {
    constructor() {
        this.size = (0, vec_1.vec)(200, 200);
        this.margin = 20;
        this.colours = [
            [0, 0, 255],
            [0, 255, 255],
            [255, 255, 0],
            [255, 0, 0],
        ];
        this.labelColour = 'white';
        this.slipCurveColour = 'black';
        this.canvas = document.createElement('canvas');
        this.canvas.width = this.size.x;
        this.canvas.height = this.size.y;
        const context = this.canvas.getContext('2d');
        if (context !== null) {
            this.context = context;
        }
        else {
            throw new Error("Couldn't get a 2d context for the slip curve graph.");
        }
    }
    update(dt) {
        this.context.save();
        for (let x = 0; x <= this.size.x; x++) {
            for (let y = 0; y <= this.size.y; y++) {
                const slip = (0, utilities_1.clamp)((0, utilities_1.linearTransform)(x / this.size.x, Game_1.default.settings.tyreSlipCoefficient, Game_1.default.settings.tyreSlipOffset));
                const speed = (0, utilities_1.clamp)((0, utilities_1.linearTransform)(y / this.size.y, Game_1.default.settings.tyreSpeedCoefficient, Game_1.default.settings.tyreSpeedOffset));
                const inverseDrag = (0, utilities_1.clamp)(slip * speed);
                const r = Math.floor((0, utilities_1.lerpArray)(this.colours.map(c => c[0]), inverseDrag, utilities_1.smoothstep));
                const g = Math.floor((0, utilities_1.lerpArray)(this.colours.map(c => c[1]), inverseDrag, utilities_1.smoothstep));
                const b = Math.floor((0, utilities_1.lerpArray)(this.colours.map(c => c[2]), inverseDrag, utilities_1.smoothstep));
                this.context.fillStyle = `rgb(${r}, ${g}, ${b})`;
                this.context.fillRect(x, this.size.y - y, 1, 1);
            }
        }
        if (Game_1.default.settings.useSlipCurve) {
            this.context.fillStyle = this.slipCurveColour;
            for (let x = 0; x <= this.size.x; x++) {
                const y = (0, utilities_1.smoothPartial)(x / this.size.x, Game_1.default.settings.slipCurveControlPoints);
                this.context.fillRect(x, this.size.y - (y * this.size.y), 2, 2);
            }
        }
        this.context.restore();
    }
    draw(context, car) {
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.translate(Game_1.default.screen.x - this.size.x - this.margin, Game_1.default.screen.y - this.size.y - this.margin);
        context.drawImage(this.canvas, 0, 0);
        context.font = this.labelFont;
        context.fillStyle = this.labelColour;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText('slip', this.size.x / 2, this.size.y + this.margin / 2);
        context.save();
        context.rotate(-Math.PI / 2);
        context.fillText('speed', -this.size.x / 2, -this.margin / 2);
        context.restore();
        const wheelStats = car.getWheelStats();
        for (const wheel of wheelStats) {
            this.drawCross(context, (0, vec_1.vec)(wheel.slip * this.size.x, (1 - wheel.speed) * this.size.y));
        }
        context.restore();
    }
    drawCross(context, position, colour = 'white', size = 6) {
        context.save();
        context.strokeStyle = colour;
        context.lineWidth = 2;
        context.beginPath();
        const halfSize = size / 2;
        context.moveTo(position.x - halfSize, position.y - halfSize);
        context.lineTo(position.x + halfSize, position.y + halfSize);
        context.moveTo(position.x - halfSize, position.y + halfSize);
        context.lineTo(position.x + halfSize, position.y - halfSize);
        context.stroke();
        context.restore();
    }
}
exports["default"] = Graph;


/***/ }),

/***/ "./src/Input.ts":
/*!**********************!*\
  !*** ./src/Input.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vec_1 = __webpack_require__(/*! ./vec */ "./src/vec.ts");
const keys = [
    'ArrowUp',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'Space',
    'Enter',
    'Shift',
    'Control',
    'Escape',
];
class Input {
    constructor() {
        this.keyboardState = {};
        this.previousKeyboardState = {};
        this.mouseState = { button: false, position: (0, vec_1.vec)() };
        this.previousMouseState = { button: false, position: (0, vec_1.vec)() };
        window.addEventListener('mousedown', () => {
            this.mouseState.button = true;
        });
        window.addEventListener('mouseup', () => {
            this.mouseState.button = false;
        });
        window.addEventListener('touchstart', () => {
            this.mouseState.button = true;
        });
        window.addEventListener('touchend', () => {
            this.mouseState.button = false;
        });
        window.addEventListener('mousemove', e => {
            this.mouseState.position.x = e.offsetX;
            this.mouseState.position.y = e.offsetY;
        });
        window.addEventListener('keydown', e => {
            this.keyboardState[e.code] = true;
        });
        window.addEventListener('keyup', e => {
            this.keyboardState[e.code] = false;
        });
    }
    static initialise() {
        Input.instance = new Input();
    }
    static getInstance() {
        if (Input.instance === undefined) {
            throw new Error('Input manager not properly initialised');
        }
        return Input.instance;
    }
    static update() {
        const instance = Input.getInstance();
        instance.previousKeyboardState = Object.assign({}, instance.keyboardState);
        instance.previousMouseState = {
            button: instance.mouseState.button,
            position: vec_1.vec.clone(instance.mouseState.position),
        };
    }
    static keyDown(key) {
        const instance = Input.getInstance();
        if (!key) {
            for (const k in Object.keys(instance.keyboardState)) {
                if (instance.keyboardState[k]) {
                    return true;
                }
            }
            return false;
        }
        return !!instance.keyboardState[key];
    }
    static keyPressed(key) {
        const instance = Input.getInstance();
        if (!key) {
            for (const k in Object.keys(instance.keyboardState)) {
                if (instance.keyboardState[k] &&
                    (!(k in instance.previousKeyboardState) ||
                        !instance.previousKeyboardState[k])) {
                    return true;
                }
            }
            return false;
        }
        return !!instance.keyboardState[key] && !instance.previousKeyboardState[key];
    }
    static keyReleased(key) {
        const instance = Input.getInstance();
        if (key == null) {
            for (const k in instance.keyboardState) {
                if (!instance.keyboardState[k] &&
                    !!instance.previousKeyboardState[k]) {
                    return true;
                }
            }
            return false;
        }
        return (!instance.keyboardState[key] &&
            !!instance.previousKeyboardState[key]);
    }
    static mouseDown() {
        const instance = Input.getInstance();
        return !!instance.mouseState.button;
    }
    static mousePressed() {
        const instance = Input.getInstance();
        return !!instance.mouseState.button && !instance.previousMouseState.button;
    }
    static mouseReleased() {
        const instance = Input.getInstance();
        return !instance.mouseState.button && !!instance.previousMouseState.button;
    }
    static mousePosition() {
        const instance = Input.getInstance();
        return instance.mouseState.position;
    }
}
exports["default"] = Input;


/***/ }),

/***/ "./src/SkidCanvas.ts":
/*!***************************!*\
  !*** ./src/SkidCanvas.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const vec_1 = __webpack_require__(/*! ./vec */ "./src/vec.ts");
class SkidCanvas {
    constructor() {
        this.chunkSize = 500;
        this.skidBaseAlpha = 0.25;
        this.skidColour = 'white';
        this.chunks = {};
    }
    update(dt) { }
    skid(position, direction, size, alpha) {
        let chunk;
        const chunkPosition = this.chunkPosition(position);
        const hash = this.hashPosition(chunkPosition);
        if (hash in this.chunks) {
            chunk = this.chunks[hash];
        }
        else {
            const canvas = document.createElement('canvas');
            canvas.width = canvas.height = this.chunkSize;
            const context = canvas.getContext('2d');
            if (context === null) {
                throw new Error(`Couldn't get a 2d context for skid chunk '${hash}'.`);
            }
            this.chunks[hash] = chunk = { canvas, context };
        }
        this.drawSkidMark(chunk.context, vec_1.vec.sub(position, vec_1.vec.mul(chunkPosition, this.chunkSize)), direction, size, alpha);
    }
    chunkPosition(position) {
        return vec_1.vec.map(vec_1.vec.mul(position, 1 / this.chunkSize), Math.floor);
    }
    hashPosition(position) {
        return vec_1.vec.str(position, '_');
    }
    drawSkidMark(context, position, direction, size, alpha) {
        context.save();
        context.translate(position.x, position.y);
        context.rotate(direction);
        context.globalAlpha = alpha * this.skidBaseAlpha;
        context.fillStyle = this.skidColour;
        context.fillRect(-size.x - size.y / 2, -size.y / 2, size.x + size.y / 2, size.y / 2);
        context.restore();
    }
    draw(context, camera) {
        const bounds = camera.bounds;
        const start = this.chunkPosition(vec_1.vec.sub((0, vec_1.vec)(bounds.left, bounds.top), (0, vec_1.vec)(1)));
        const end = this.chunkPosition(vec_1.vec.add((0, vec_1.vec)(bounds.right, bounds.bottom), (0, vec_1.vec)(1)));
        for (let x = start.x; x <= end.x; x++) {
            for (let y = start.y; y <= end.y; y++) {
                const hash = this.hashPosition((0, vec_1.vec)(x, y));
                if (hash in this.chunks) {
                    context.drawImage(this.chunks[hash].canvas, x * this.chunkSize, y * this.chunkSize);
                }
            }
        }
    }
}
exports["default"] = SkidCanvas;


/***/ }),

/***/ "./src/TestWheel.ts":
/*!**************************!*\
  !*** ./src/TestWheel.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const Input_1 = __webpack_require__(/*! ./Input */ "./src/Input.ts");
const Wheel_1 = __webpack_require__(/*! ./Wheel */ "./src/Wheel.ts");
const vec_1 = __webpack_require__(/*! ./vec */ "./src/vec.ts");
const config = __webpack_require__(/*! ./config.json */ "./src/config.json");
class TestWheel {
    constructor(position, direction) {
        this.speed = 0;
        this.throttle = false;
        this.brake = false;
        this.handbrake = false;
        this.direction = direction;
        this.wheel = new Wheel_1.default(vec_1.vec.clone(position), direction);
    }
    get position() {
        return this.wheel.position;
    }
    getWheelStats() {
        return [this.wheel.stats];
    }
    handleInput() {
        this.throttle = Input_1.default.keyDown(config.controls.throttle);
        this.brake = Input_1.default.keyDown(config.controls.brake);
        this.handbrake = Input_1.default.keyDown(config.controls.handbrake);
        if (Input_1.default.keyDown(config.controls.left)) {
            this.direction -= Game_1.default.settings.carSteeringAmount;
        }
        if (Input_1.default.keyDown(config.controls.right)) {
            this.direction += Game_1.default.settings.carSteeringAmount;
        }
    }
    update(dt) {
        const drive = this.throttle ? Game_1.default.settings.carEnginePower : 0;
        const brake = this.brake ? Game_1.default.settings.carBrakePower : 0;
        this.wheel.update(dt, drive, brake, this.handbrake, this.direction);
    }
    draw(context, skidCanvas) {
        this.wheel.draw(context, skidCanvas);
    }
}
exports["default"] = TestWheel;


/***/ }),

/***/ "./src/Wheel.ts":
/*!**********************!*\
  !*** ./src/Wheel.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
const vec_1 = __webpack_require__(/*! ./vec */ "./src/vec.ts");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/utilities.ts");
class Wheel {
    constructor(position, direction = 0) {
        this.velocity = (0, vec_1.vec)();
        this.speed = 0;
        this.slipCoefficient = 0;
        this.speedCoefficient = 0;
        this.position = vec_1.vec.clone(position);
        this.direction = direction;
    }
    get slipAmount() {
        return this.slipCoefficient * this.speedCoefficient;
    }
    get stats() {
        return {
            slip: this.slipCoefficient,
            speed: this.speedCoefficient,
        };
    }
    update(dt, drive, brake, handbrake, direction) {
        this.direction = direction;
        const dv = vec_1.vec.rot((0, vec_1.vec)((drive - brake) * dt, 0), this.direction);
        this.speedCoefficient = (0, utilities_1.clamp)(this.speed / Game_1.default.settings.carMaxSpeed);
        const speedComponent = (0, utilities_1.clamp)((0, utilities_1.linearTransform)(this.speedCoefficient, Game_1.default.settings.tyreSpeedCoefficient, Game_1.default.settings.tyreSpeedOffset));
        if (vec_1.vec.eq(this.velocity, (0, vec_1.vec)())) {
            this.slipCoefficient = 0;
        }
        else {
            this.slipCoefficient = (0, utilities_1.clamp)(1 - vec_1.vec.dot(vec_1.vec.rot(vec_1.vec.ux(), this.direction), vec_1.vec.nor(this.velocity)));
        }
        const slipComponent = (0, utilities_1.clamp)((0, utilities_1.linearTransform)(this.slipCoefficient, Game_1.default.settings.tyreSlipCoefficient, Game_1.default.settings.tyreSlipOffset));
        const i = Game_1.default.settings.useSlipCurve
            ? (0, utilities_1.smoothPartial)(1 - (0, utilities_1.clamp)(slipComponent * speedComponent), Game_1.default.settings.slipCurveControlPoints)
            : 1 - (0, utilities_1.clamp)(slipComponent * speedComponent);
        const lateralDrag = (0, utilities_1.smoothstep)(Game_1.default.settings.tyreLateralDragMin, Game_1.default.settings.tyreLateralDragMax, i);
        const longitudinalDrag = handbrake ? lateralDrag : Game_1.default.settings.tyreLongitudinalDrag;
        const rv = vec_1.vec.rot(vec_1.vec.add(this.velocity, dv), -this.direction);
        rv.x *= 1 - longitudinalDrag;
        rv.y *= 1 - lateralDrag;
        this.velocity = vec_1.vec.rot(rv, this.direction);
        this.speed = vec_1.vec.len(this.velocity);
        if (this.speed < 1) {
            this.velocity = (0, vec_1.vec)();
        }
        this.position = vec_1.vec.add(this.position, vec_1.vec.mul(this.velocity, dt));
    }
    draw(context, skidCanvas) {
        context.save();
        context.translate(this.position.x, this.position.y);
        context.rotate(this.direction);
        context.strokeStyle = 'white';
        context.lineWidth = 1;
        context.strokeRect(-Game_1.default.settings.wheelLength / 2, -Game_1.default.settings.wheelWidth / 2, Game_1.default.settings.wheelLength, Game_1.default.settings.wheelWidth);
        context.restore();
        if (this.slipCoefficient > 0) {
            skidCanvas.skid(this.position, this.direction, (0, vec_1.vec)(Game_1.default.settings.wheelLength, Game_1.default.settings.wheelWidth), this.slipAmount);
        }
    }
}
exports["default"] = Wheel;


/***/ }),

/***/ "./src/constants.ts":
/*!**************************!*\
  !*** ./src/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FPS_MIN = exports.DEBUG = void 0;
exports.DEBUG = true;
exports.FPS_MIN = 1 / 30;


/***/ }),

/***/ "./src/utilities.ts":
/*!**************************!*\
  !*** ./src/utilities.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.debounce = exports.lerpArray = exports.frac = exports.smoothPartial = exports.linearTransform = exports.wrapDirection = exports.smoothstep = exports.lerp = exports.clamp = void 0;
function clamp(a, min = 0, max = 1) {
    return a < min ? min : (a > max ? max : a);
}
exports.clamp = clamp;
function lerp(a, b, i) {
    return a + (b - a) * i;
}
exports.lerp = lerp;
function smoothstep(a, b, i) {
    return lerp(a, b, 3 * Math.pow(i, 2) - 2 * Math.pow(i, 3));
}
exports.smoothstep = smoothstep;
function wrapDirection(d) {
    const c = Math.PI * 2;
    while (d < 0) {
        d += c;
    }
    while (d > c) {
        d -= c;
    }
    return d;
}
exports.wrapDirection = wrapDirection;
function linearTransform(x, m, c) {
    return x * m + c;
}
exports.linearTransform = linearTransform;
function smoothPartial(x, p) {
    return lerpArray(p, x, smoothstep);
}
exports.smoothPartial = smoothPartial;
function frac(a) {
    return a >= 0 ? a - Math.floor(a) : a - Math.ceil(a);
}
exports.frac = frac;
function lerpArray(a, i, f = lerp) {
    const s = i * (a.length - 1);
    const p = clamp(Math.trunc(s), 0, a.length - 1);
    return f(a[p] || 0, a[p + 1] || 0, frac(s));
}
exports.lerpArray = lerpArray;
function debounce(f, ms = 100) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            f.apply(this, args);
        }, ms);
    };
}
exports.debounce = debounce;


/***/ }),

/***/ "./src/vec.ts":
/*!********************!*\
  !*** ./src/vec.ts ***!
  \********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vec = void 0;
const vec = (x, y) => {
    if (x === undefined && y === undefined) {
        return { x: 0, y: 0 };
    }
    if (typeof x === 'object') {
        return exports.vec.clone(x);
    }
    if (y === undefined) {
        return exports.vec.diag(x !== null && x !== void 0 ? x : 0);
    }
    return { x: x !== null && x !== void 0 ? x : 0, y: y !== null && y !== void 0 ? y : 0 };
};
exports.vec = vec;
exports.vec.clone = (a) => ({ x: a.x, y: a.y });
exports.vec.diag = (n) => ({ x: n, y: n });
exports.vec.components = (a) => [a.x, a.y];
exports.vec.ux = () => (0, exports.vec)(1, 0);
exports.vec.uy = () => (0, exports.vec)(0, 1);
exports.vec.add = (a, b) => ({ x: a.x + b.x, y: a.y + b.y });
exports.vec.mul = (a, b) => ({ x: a.x * b, y: a.y * b });
exports.vec.sub = (a, b) => ({ x: a.x - b.x, y: a.y - b.y });
exports.vec.len = (a) => Math.sqrt(a.x * a.x + a.y * a.y);
exports.vec.manhattan = (a) => Math.abs(a.x) + Math.abs(a.y);
exports.vec.nor = (a) => {
    const l = exports.vec.len(a);
    return l ? { x: a.x / l, y: a.y / l } : (0, exports.vec)();
};
exports.vec.dot = (a, b) => a.x * b.x + a.y * b.y;
exports.vec.rot = (a, r) => {
    const s = Math.sin(r), c = Math.cos(r);
    return { x: c * a.x - s * a.y, y: s * a.x + c * a.y };
};
exports.vec.eq = (a, b) => a.x === b.x && a.y === b.y;
exports.vec.rad = (a) => Math.atan2(a.y, a.x);
exports.vec.map = (a, f) => ({ x: f(a.x, 'x'), y: f(a.y, 'y') });
exports.vec.str = (a, s = ', ') => [a.x, s, a.y].join('');
exports.vec.avg = (...v) => v.length
    ? (0, exports.vec)(v.reduce((a, c) => a + c.x, 0) / v.length, v.reduce((a, c) => a + c.y, 0) / v.length)
    : (0, exports.vec)();


/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/***/ ((module) => {

module.exports = JSON.parse('{"title":"Tyre physics model","showFPS":true,"controls":{"throttle":"ArrowUp","brake":"ArrowDown","left":"ArrowLeft","right":"ArrowRight","handbrake":"Space"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Game_1 = __webpack_require__(/*! ./Game */ "./src/Game.ts");
window.onload = () => {
    const game = new Game_1.default(document.querySelector('#main'));
    game.initialise();
};

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0osYUFBYSxvQ0FBb0M7QUFDakQsSUFBSTtBQUNKLGFBQWEsZ0RBQWdEO0FBQzdELElBQUk7QUFDSixhQUFhLG9DQUFvQztBQUNqRCxJQUFJO0FBQ0osYUFBYSxnREFBZ0Q7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtDQUErQyxFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FBUUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvS0FBb0ssZ0NBQWdDO0FBQ3BNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtB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QSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxnRkFBZ0YsdUVBQXVFO0FBQ3ZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLG9DQUFvQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUUrRDtBQUMvRCxpRUFBZSxLQUFLLEVBQUM7QUFDckI7Ozs7Ozs7Ozs7Ozs7QUN4OUVBLE1BQXFCLFVBQVU7SUFBL0I7UUFDbUIsa0JBQWEsR0FBVyxHQUFHLENBQUM7UUFDNUIsbUJBQWMsR0FBVyxDQUFDLENBQUM7UUFDM0Isb0JBQWUsR0FBVywwQkFBMEIsQ0FBQztRQUVyRCxrQkFBYSxHQUFXLEdBQUcsQ0FBQztRQUM1QixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQUMzQixvQkFBZSxHQUFXLDBCQUEwQixDQUFDO0lBbUR4RSxDQUFDO0lBakRRLE1BQU0sQ0FBQyxFQUFVLElBQVMsQ0FBQztJQUUzQixJQUFJLENBQUMsT0FBaUMsRUFBRSxNQUFjO1FBQzNELE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLE1BQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFHN0IsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDO1FBQzNDLE9BQU8sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxDQUNYLE9BQU8sRUFDUCxJQUFJLENBQUMsYUFBYSxFQUNsQixNQUFNLENBQ1AsQ0FBQztRQUdGLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUMzQyxPQUFPLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FDWCxPQUFPLEVBQ1AsSUFBSSxDQUFDLGFBQWEsRUFDbEIsTUFBTSxDQUNQLENBQUM7UUFDRixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFFBQVEsQ0FDZCxPQUFpQyxFQUNqQyxJQUFZLEVBQ1osTUFBb0I7UUFFcEIsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRXBCLE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDckQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNuRCxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDekMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUNsQztRQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUM7UUFDcEQsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQztRQUNwRCxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsSUFBSSxJQUFJLEVBQUU7WUFDekMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQy9CLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUNqQztRQUVELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUExREQsZ0NBMERDOzs7Ozs7Ozs7Ozs7O0FDN0RELGtFQUEwQjtBQUMxQiwrREFBNEI7QUFTNUIsTUFBcUIsTUFBTTtJQU16QixZQUFtQixRQUFhO1FBTGYsZUFBVSxHQUFXLEdBQUcsQ0FBQztRQU14QyxJQUFJLENBQUMsUUFBUSxHQUFHLFNBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFHLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixPQUFPO1lBQ0wsR0FBRyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2hELE1BQU0sRUFBRSxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsR0FBRyxDQUFDLGNBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuRCxJQUFJLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxjQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDakQsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ25ELENBQUM7SUFDSixDQUFDO0lBRU0sSUFBSSxDQUFDLE9BQWlDO1FBQzNDLE1BQU0sS0FBSyxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGNBQWMsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsU0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDOUUsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sQ0FBQyxTQUFTLENBQ2YsQ0FBQyxjQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsRUFDM0MsQ0FBQyxjQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FDNUMsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQTdCRCw0QkE2QkM7Ozs7Ozs7Ozs7Ozs7QUN2Q0Qsa0VBQTBCO0FBQzFCLHFFQUE0QjtBQUM1QixxRUFBNEI7QUFJNUIscUVBQTRCO0FBQzVCLCtEQUE0QjtBQUM1QixpRkFBbUQ7QUFDbkQsNkVBQXdDO0FBRXhDLElBQUssYUFLSjtBQUxELFdBQUssYUFBYTtJQUNoQiwyREFBYTtJQUNiLDZEQUFjO0lBQ2QseURBQVk7SUFDWiwyREFBYTtBQUNmLENBQUMsRUFMSSxhQUFhLEtBQWIsYUFBYSxRQUtqQjtBQUVELE1BQXFCLEdBQUc7SUFZdEIsWUFDRSxRQUFhLEVBQ2IsWUFBb0IsQ0FBQztRQVhoQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsVUFBSyxHQUFZLEtBQUssQ0FBQztRQUN2QixjQUFTLEdBQVksS0FBSyxDQUFDO1FBQzNCLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFFcEIsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQU0zQixJQUFJLENBQUMsUUFBUSxHQUFHLFNBQUcsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUM7UUFHM0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxlQUFLLENBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQzlDLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxHQUFHLElBQUksZUFBSyxDQUMvQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxFQUMvQyxJQUFJLENBQUMsU0FBUyxDQUNmLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxJQUFJLGVBQUssQ0FDN0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFDN0MsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxlQUFLLENBQzlDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEVBQzlDLElBQUksQ0FBQyxTQUFTLENBQ2YsQ0FBQztJQUNKLENBQUM7SUFFTyxnQkFBZ0IsQ0FBQyxLQUFvQjtRQUMzQyxJQUFJLE1BQVcsQ0FBQztRQUNoQixRQUFRLEtBQUssRUFBRTtZQUNiLEtBQUssYUFBYSxDQUFDLFNBQVM7Z0JBQzFCLE1BQU0sR0FBRyxhQUFHLEVBQ1YsY0FBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsRUFDL0IsY0FBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FDL0IsQ0FBQztnQkFDRixNQUFNO1lBQ1IsS0FBSyxhQUFhLENBQUMsVUFBVTtnQkFDM0IsTUFBTSxHQUFHLGFBQUcsRUFDVixjQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixFQUMvQixjQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixDQUNoQyxDQUFDO2dCQUNGLE1BQU07WUFDUixLQUFLLGFBQWEsQ0FBQyxRQUFRO2dCQUN6QixNQUFNLEdBQUcsYUFBRyxFQUNWLGNBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQzlCLGNBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQy9CLENBQUM7Z0JBQ0YsTUFBTTtZQUNSLEtBQUssYUFBYSxDQUFDLFNBQVM7Z0JBQzFCLE1BQU0sR0FBRyxhQUFHLEVBQ1YsY0FBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFDOUIsY0FBSSxDQUFDLFFBQVEsQ0FBQyxpQkFBaUIsQ0FDaEMsQ0FBQztnQkFDRixNQUFNO1NBQ1Q7UUFFRCxPQUFPLFNBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFHLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRU0sYUFBYTtRQUNsQixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxXQUFXO1FBRWhCLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQWUsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxLQUFLLEdBQUcsZUFBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQVksQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsZUFBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFNBQWdCLENBQUMsQ0FBQztRQUdqRSxNQUFNLGNBQWMsR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDLGlCQUFpQixHQUFHLENBQ3ZELElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLGNBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQ3pELENBQUM7UUFDRixJQUFJLGVBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFXLENBQUMsRUFBRTtZQUM5QyxJQUFJLENBQUMsUUFBUSxJQUFJLGNBQWMsQ0FBQztTQUNqQzthQUFNLElBQUksZUFBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEtBQVksQ0FBQyxFQUFFO1lBQ3RELElBQUksQ0FBQyxRQUFRLElBQUksY0FBYyxDQUFDO1NBQ2pDO2FBQU0sSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtZQUU5QixJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLGNBQUksQ0FBQyxRQUFRLENBQUMsc0JBQXNCLENBQUM7WUFHdkMsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxjQUFJLENBQUMsUUFBUSxDQUFDLHNCQUFzQixFQUFFO2dCQUNuRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQzthQUNuQjtTQUNGO1FBR0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxxQkFBSyxFQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxFQUFVO1FBQ3RCLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLGNBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsY0FBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLFFBQVEsR0FBRyw2QkFBYSxFQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FDNUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUNsRCxDQUFDLENBQUM7UUFHSCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLENBQ3pDLEVBQUUsRUFDRixjQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQ3pDLEtBQUssRUFDTCxJQUFJLENBQUMsU0FBUyxFQUNkLFFBQVEsQ0FDVCxDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUMxQyxFQUFFLEVBQ0YsY0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN6QyxLQUFLLEVBQ0wsSUFBSSxDQUFDLFNBQVMsRUFDZCxRQUFRLENBQ1QsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sQ0FDeEMsRUFBRSxFQUNGLGNBQUksQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDeEMsS0FBSyxFQUNMLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLFNBQVMsQ0FDZixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUN6QyxFQUFFLEVBQ0YsY0FBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUN4QyxLQUFLLEVBQ0wsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsU0FBUyxDQUNmLENBQUM7UUFHRixNQUFNLFFBQVEsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUd0RSxNQUFNLFNBQVMsR0FBRyxTQUFHLENBQUMsR0FBRyxDQUN2QixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEVBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsQ0FDL0MsQ0FBQztRQUNGLE1BQU0sUUFBUSxHQUFHLFNBQUcsQ0FBQyxHQUFHLENBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsRUFDNUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxDQUM5QyxDQUFDO1FBQ0YsTUFBTSxTQUFTLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUMvQixTQUFTLEVBQ1QsUUFBUSxDQUNULENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBRyxDQUFDLEdBQUcsQ0FBQyxTQUFHLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztRQUczQixlQUFLLENBQUMsS0FBSyxDQUFDLFVBQVUsRUFBRSxTQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2hELGVBQUssQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUN6QyxlQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakMsZUFBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3ZDLGVBQUssQ0FBQyxLQUFLLENBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVjtZQUNFLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsMEJBQTBCO1NBQ3ZFLENBQ0YsQ0FBQztRQUNGLGVBQUssQ0FBQyxLQUFLLENBQ1QsT0FBTyxFQUNQLE9BQU8sRUFDUDtZQUNFLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsMEJBQTBCO1NBQ3BFLENBQ0YsQ0FBQztRQVNGLGVBQUssQ0FBQyxLQUFLLENBQ1QsV0FBVyxFQUNYLFdBQVcsRUFDWDtZQUNFLFNBQVMsRUFBRSxLQUFLO1lBQ2hCLGdCQUFnQixFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsMEJBQTBCO1NBQ3hFLENBQ0YsQ0FBQztRQUdGLFFBQVEsR0FBRyw2QkFBYSxFQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxjQUFJLENBQUMsUUFBUSxDQUFDLG1CQUFtQixDQUNsRCxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUNuRSxhQUFhLENBQUMsU0FBUyxDQUN4QixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMxRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUNwRSxhQUFhLENBQUMsVUFBVSxDQUN6QixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztRQUMzRCxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUNsRSxhQUFhLENBQUMsUUFBUSxDQUN2QixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDL0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FDbkUsYUFBYSxDQUFDLFNBQVMsQ0FDeEIsQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2xFLENBQUM7SUFFTSxJQUFJLENBQUMsT0FBaUMsRUFBRSxVQUFzQjtRQUNuRSxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDZixPQUFPLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLFdBQVcsR0FBRyxPQUFPLENBQUM7UUFDOUIsT0FBTyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFDdEIsT0FBTyxDQUFDLFVBQVUsQ0FDaEIsQ0FBQyxjQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQzVCLENBQUMsY0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxFQUMzQixjQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFDdkIsY0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3ZCLENBQUM7UUFDRixPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFFbEIsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQy9CLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztDQUNGO0FBL09ELHlCQStPQzs7Ozs7Ozs7Ozs7OztBQ2pRRCwrREFBNEI7QUEwQzVCLE1BQXFCLEtBQUs7SUE0QnhCLFlBQW9CLFVBQWlDLEVBQUU7UUF2QnRDLG1CQUFjLEdBQWlCO1lBQzlDLE1BQU0sRUFBRSxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUM7WUFDVixJQUFJLEVBQUUsZ0NBQWdDO1lBQ3RDLFVBQVUsRUFBRSxFQUFFO1lBQ2QsZ0JBQWdCLEVBQUUsTUFBTTtZQUN4QixnQkFBZ0IsRUFBRSxPQUFPO1lBQ3pCLFlBQVksRUFBRTtnQkFDWixLQUFLLEVBQUUsTUFBTTtnQkFDYixTQUFTLEVBQUUsSUFBSTthQUNoQjtZQUNELGFBQWEsRUFBRTtnQkFDYixTQUFTLEVBQUUsSUFBSTtnQkFDZixTQUFTLEVBQUUsSUFBSTtnQkFDZixVQUFVLEVBQUUsSUFBSTtnQkFDaEIsVUFBVSxFQUFFLENBQUM7Z0JBQ2IsV0FBVyxFQUFFLEdBQUc7Z0JBQ2hCLFlBQVksRUFBRSxNQUFNO2dCQUNwQixLQUFLLEVBQUUsT0FBTztnQkFDZCxXQUFXLEVBQUUsYUFBRyxFQUFDLEVBQUUsQ0FBQzthQUNyQjtTQUNGLENBQUM7UUFHQSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLEdBQUcsRUFBc0IsQ0FBQztRQUM1QyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksR0FBRyxFQUF1QixDQUFDO0lBQ2hELENBQUM7SUFFTSxNQUFNLENBQUMsVUFBVSxDQUFDLFVBQWlDLEVBQUU7UUFDMUQsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU8sTUFBTSxDQUFDLFdBQVc7UUFDeEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUU7WUFDbkIsS0FBSyxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsT0FBTyxLQUFLLENBQUMsUUFBUSxDQUFDO0lBQ3hCLENBQUM7SUFFTSxNQUFNLENBQUMsS0FBSyxDQUNqQixLQUFhLEVBQ2IsS0FBc0IsRUFDdEIsVUFBK0IsRUFBRTtRQUVqQyxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbEMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQ25DLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUNoQixLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksRUFDakMsT0FBTyxDQUNSLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUNsQixLQUFhLEVBQ2IsS0FBc0IsRUFDdEIsUUFBYSxFQUNiLFVBQWdDLEVBQUU7UUFFbEMsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2xDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsTUFBTSxDQUNwQyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQzFCLEtBQUssQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUNsQyxPQUFPLENBQ1IsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBaUM7UUFDbEQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBR2xDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLEtBQUssQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzdCLElBQUksTUFBTSxDQUFDLEtBQUssS0FBSyxPQUFPLEVBQUU7Z0JBQzVCLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2FBQ25DO1FBQ0gsQ0FBQyxDQUFDLENBQUM7UUFDSCxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7UUFHbEIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksUUFBYSxDQUFDO1FBQ2xCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ2pDLElBQUksTUFBTSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBQ2xDLE1BQU0sVUFBVSxHQUFHLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDMUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7O1lBQzNCLFFBQVEsS0FBSyxDQUFDLEtBQUssRUFBRTtnQkFDbkIsS0FBSyxNQUFNO29CQUNULFFBQVEsR0FBRyxhQUFHLEVBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzVDLEtBQUssSUFBSSxVQUFVLENBQUM7b0JBQ3BCLE1BQU07Z0JBQ1IsS0FBSyxPQUFPO29CQUNWLFFBQVEsR0FBRyxhQUFHLEVBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7b0JBQzFFLE1BQU0sSUFBSSxVQUFVLENBQUM7b0JBQ3JCLE1BQU07YUFDVDtZQUNELEtBQUssQ0FBQyxTQUFTLENBQ2IsT0FBTyxFQUNQLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUM5RCxRQUFRLEVBQ1IsS0FBSyxDQUFDLEtBQUssRUFDWCxXQUFLLENBQUMsT0FBTyxtQ0FBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFDdEMsV0FBSyxDQUFDLElBQUksbUNBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQ2hDLFdBQUssQ0FBQyxnQkFBZ0IsbUNBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFDeEQsV0FBSyxDQUFDLGdCQUFnQixtQ0FBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUN6RCxDQUFDO1FBQ0osQ0FBQyxDQUFDLENBQUM7UUFDSCxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUM3QixJQUFJLE1BQU0sQ0FBQyxLQUFLLEtBQUssUUFBUSxFQUFFO2dCQUM3QixLQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sRUFBRSxNQUFNLENBQUMsQ0FBQzthQUNuQztRQUNILENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBR2xCLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDckIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU8sVUFBVSxDQUFDLE9BQWlDLEVBQUUsTUFBbUI7O1FBQ3ZFLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNmLE1BQU0sUUFBUSxHQUFHLFlBQU0sQ0FBQyxRQUFRLG1DQUFJLGFBQUcsR0FBRSxDQUFDO1FBQzFDLElBQUksTUFBTSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsU0FBUyxFQUFFO1lBQ3hDLElBQUksQ0FBQyxTQUFTLENBQ1osT0FBTyxFQUNQLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztrQkFDekMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQy9DLFNBQUcsQ0FBQyxHQUFHLENBQUMsUUFBUSxhQUFSLFFBQVEsY0FBUixRQUFRLEdBQUksYUFBRyxHQUFFLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUM5QyxNQUFNLEVBQ04sWUFBTSxDQUFDLE9BQU8sbUNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQ3RDLFlBQU0sQ0FBQyxJQUFJLG1DQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUNoQyxZQUFNLENBQUMsZ0JBQWdCLG1DQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLEVBQ3hELFlBQU0sQ0FBQyxnQkFBZ0IsbUNBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FDekQsQ0FBQztTQUNIO1FBQ0QsSUFBSSxNQUFNLENBQUMsVUFBVSxFQUFFO1lBQ3JCLE9BQU8sQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ3RCLE9BQU8sQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDO1lBQzlELFFBQVEsTUFBTSxDQUFDLFdBQVcsRUFBRTtnQkFDMUIsS0FBSyxHQUFHO29CQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3JELE1BQU07Z0JBQ1IsS0FBSyxHQUFHO29CQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3BELE1BQU07Z0JBQ1IsS0FBSyxHQUFHO29CQUNOLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ25ELE1BQU07YUFDVDtTQUNGO1FBQ0QsT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFTyxTQUFTLENBQ2YsT0FBaUMsRUFDakMsSUFBWSxFQUNaLFFBQWEsRUFDYixLQUF1QixFQUN2QixPQUFlLEVBQ2YsSUFBWSxFQUNaLGdCQUF3QixFQUN4QixnQkFBd0I7UUFFeEIsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2YsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDcEIsT0FBTyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7UUFDN0IsTUFBTSxjQUFjLEdBQUc7WUFDckIsS0FBSyxFQUFFLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxHQUFHLE9BQU8sR0FBRyxDQUFDO1lBQ3BELE1BQU0sRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxPQUFPLEdBQUcsQ0FBQztTQUM5QyxDQUFDO1FBQ0YsTUFBTSxDQUFDLEdBQUcsS0FBSyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUcvRSxPQUFPLENBQUMsU0FBUyxHQUFHLGdCQUFnQixDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxRQUFRLENBQ2QsQ0FBQyxHQUFHLE9BQU8sRUFDWCxRQUFRLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFDcEIsY0FBYyxDQUFDLEtBQUssRUFDcEIsY0FBYyxDQUFDLE1BQU0sQ0FDdEIsQ0FBQztRQUdGLE9BQU8sQ0FBQyxTQUFTLEdBQUcsZ0JBQWdCLENBQUM7UUFDckMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxPQUFPLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDcEIsQ0FBQztJQUVPLFNBQVMsQ0FBQyxPQUFpQyxFQUFFLFFBQWEsRUFBRSxJQUFZO1FBQzlFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQztRQUM3RCxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDbkIsQ0FBQztJQUVPLFFBQVEsQ0FBQyxPQUFpQyxFQUFFLFFBQWEsRUFBRSxJQUFZO1FBQzdFLE9BQU8sQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNwQixNQUFNLFFBQVEsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1FBQzFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNuQixDQUFDO0lBRU8sT0FBTyxDQUFDLE9BQWlDLEVBQUUsUUFBYSxFQUFFLElBQVk7UUFDNUUsT0FBTyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3BCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDOUQsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2pCLENBQUM7Q0FDRjtBQTNORCwyQkEyTkM7Ozs7Ozs7Ozs7Ozs7QUNyUUQsaUdBQStCO0FBQy9CLHFFQUE0QjtBQUM1QixxRUFBNEI7QUFDNUIsd0VBQThCO0FBQzlCLG9GQUFzQztBQUN0QyxvRkFBc0M7QUFDdEMscUVBQTRCO0FBQzVCLCtEQUF3QjtBQUN4QixpRkFBb0M7QUFDcEMsK0RBQTRCO0FBQzVCLGlGQUF1QztBQUN2QywrRUFBeUM7QUFDekMsNkVBQXdDO0FBRXhDLE1BQXFCLElBQUk7SUFvRHZCLFlBQW1CLFNBQTZCO1FBbkQvQix1QkFBa0IsR0FBUSxhQUFHLEdBQUUsQ0FBQztRQUNoQyx3QkFBbUIsR0FBVyxDQUFDLENBQUM7UUFNekMsY0FBUyxHQUFXLENBQUMsQ0FBQztRQUN0QixlQUFVLEdBQVcsQ0FBQyxDQUFDO1FBNEM3QixJQUFJLFNBQVMsS0FBSyxJQUFJLEVBQUU7WUFDdEIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDO1NBQ2pFO1FBQ0QsSUFBSSxTQUFTLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsRUFBRTtZQUNoRCxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQThCLENBQUM7UUFHN0MsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDN0MsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1NBQ3hCO2FBQU07WUFDTCxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDL0M7UUFHRCxNQUFNLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU8sTUFBTTtRQUNaLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsQ0FBQztJQUMxQyxDQUFDO0lBRU0sVUFBVTtRQUNmLGVBQUssQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksZ0JBQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksb0JBQVUsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxvQkFBVSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGVBQUssRUFBRSxDQUFDO1FBR3pCLE1BQU0sS0FBSyxHQUFHLEdBQUcsRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksYUFBRyxDQUNoQixJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsQ0FBQztZQUVGLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxtQkFBUyxDQUM1QixJQUFJLENBQUMsa0JBQWtCLEVBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsQ0FDekIsQ0FBQztRQUNKLENBQUMsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUM1QixLQUFLLEVBQUUsQ0FBQztRQUVSLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFdBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNqRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFHWixNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ3BDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxlQUFlLENBQUMsQ0FBQztRQUN4QyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZFLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGVBQWUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN6RCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsd0JBQXdCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUscUJBQXFCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFlBQVksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FB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LENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDNUQsZUFBTyxHQUFHLENBQUMsQ0FBTSxFQUFFLENBQVMsRUFBTyxFQUFFO0lBQ25DLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUN4RCxDQUFDO0FBQ0QsY0FBTSxHQUFHLENBQUMsQ0FBTSxFQUFFLENBQU0sRUFBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNqRSxlQUFPLEdBQUcsQ0FBQyxDQUFNLEVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbkQsZUFBTyxHQUFHLENBQUMsQ0FBTSxFQUFFLENBQW9DLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUNqRyxlQUFPLEdBQUcsQ0FBQyxDQUFNLEVBQUUsSUFBWSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMvRCxlQUFPLEdBQUcsQ0FBQyxHQUFHLENBQVEsRUFBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU07SUFDdEMsQ0FBQyxDQUFDLGVBQUcsRUFDSCxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFDekMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQzFDO0lBQ0QsQ0FBQyxDQUFDLGVBQUcsR0FBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pDVjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05BLGtFQUEwQjtBQUUxQixNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtJQUNuQixNQUFNLElBQUksR0FBRyxJQUFJLGNBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDdkQsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQ3BCLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3R5cmUtbW9kZWwvLi9ub2RlX21vZHVsZXMvZGF0Lmd1aS9idWlsZC9kYXQuZ3VpLm1vZHVsZS5qcyIsIndlYnBhY2s6Ly90eXJlLW1vZGVsLy4vc3JjL0JhY2tncm91bmQudHMiLCJ3ZWJwYWNrOi8vdHlyZS1tb2RlbC8uL3NyYy9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vdHlyZS1tb2RlbC8uL3NyYy9DYXIudHMiLCJ3ZWJwYWNrOi8vdHlyZS1tb2RlbC8uL3NyYy9EZWJ1Zy50cyIsIndlYnBhY2s6Ly90eXJlLW1vZGVsLy4vc3JjL0dhbWUudHMiLCJ3ZWJwYWNrOi8vdHlyZS1tb2RlbC8uL3NyYy9HcmFwaC50cyIsIndlYnBhY2s6Ly90eXJlLW1vZGVsLy4vc3JjL0lucHV0LnRzIiwid2VicGFjazovL3R5cmUtbW9kZWwvLi9zcmMvU2tpZENhbnZhcy50cyIsIndlYnBhY2s6Ly90eXJlLW1vZGVsLy4vc3JjL1Rlc3RXaGVlbC50cyIsIndlYnBhY2s6Ly90eXJlLW1vZGVsLy4vc3JjL1doZWVsLnRzIiwid2VicGFjazovL3R5cmUtbW9kZWwvLi9zcmMvY29uc3RhbnRzLnRzIiwid2VicGFjazovL3R5cmUtbW9kZWwvLi9zcmMvdXRpbGl0aWVzLnRzIiwid2VicGFjazovL3R5cmUtbW9kZWwvLi9zcmMvdmVjLnRzIiwid2VicGFjazovL3R5cmUtbW9kZWwvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlyZS1tb2RlbC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdHlyZS1tb2RlbC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3R5cmUtbW9kZWwvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90eXJlLW1vZGVsLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogZGF0LWd1aSBKYXZhU2NyaXB0IENvbnRyb2xsZXIgTGlicmFyeVxuICogaHR0cHM6Ly9naXRodWIuY29tL2RhdGFhcnRzL2RhdC5ndWlcbiAqXG4gKiBDb3B5cmlnaHQgMjAxMSBEYXRhIEFydHMgVGVhbSwgR29vZ2xlIENyZWF0aXZlIExhYlxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqL1xuXG5mdW5jdGlvbiBfX18kaW5zZXJ0U3R5bGUoY3NzKSB7XG4gIGlmICghY3NzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgc3R5bGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQvY3NzJyk7XG4gIHN0eWxlLmlubmVySFRNTCA9IGNzcztcbiAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cbiAgcmV0dXJuIGNzcztcbn1cblxuZnVuY3Rpb24gY29sb3JUb1N0cmluZyAoY29sb3IsIGZvcmNlQ1NTSGV4KSB7XG4gIHZhciBjb2xvckZvcm1hdCA9IGNvbG9yLl9fc3RhdGUuY29udmVyc2lvbk5hbWUudG9TdHJpbmcoKTtcbiAgdmFyIHIgPSBNYXRoLnJvdW5kKGNvbG9yLnIpO1xuICB2YXIgZyA9IE1hdGgucm91bmQoY29sb3IuZyk7XG4gIHZhciBiID0gTWF0aC5yb3VuZChjb2xvci5iKTtcbiAgdmFyIGEgPSBjb2xvci5hO1xuICB2YXIgaCA9IE1hdGgucm91bmQoY29sb3IuaCk7XG4gIHZhciBzID0gY29sb3Iucy50b0ZpeGVkKDEpO1xuICB2YXIgdiA9IGNvbG9yLnYudG9GaXhlZCgxKTtcbiAgaWYgKGZvcmNlQ1NTSGV4IHx8IGNvbG9yRm9ybWF0ID09PSAnVEhSRUVfQ0hBUl9IRVgnIHx8IGNvbG9yRm9ybWF0ID09PSAnU0lYX0NIQVJfSEVYJykge1xuICAgIHZhciBzdHIgPSBjb2xvci5oZXgudG9TdHJpbmcoMTYpO1xuICAgIHdoaWxlIChzdHIubGVuZ3RoIDwgNikge1xuICAgICAgc3RyID0gJzAnICsgc3RyO1xuICAgIH1cbiAgICByZXR1cm4gJyMnICsgc3RyO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnQ1NTX1JHQicpIHtcbiAgICByZXR1cm4gJ3JnYignICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJyknO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnQ1NTX1JHQkEnKSB7XG4gICAgcmV0dXJuICdyZ2JhKCcgKyByICsgJywnICsgZyArICcsJyArIGIgKyAnLCcgKyBhICsgJyknO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnSEVYJykge1xuICAgIHJldHVybiAnMHgnICsgY29sb3IuaGV4LnRvU3RyaW5nKDE2KTtcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ1JHQl9BUlJBWScpIHtcbiAgICByZXR1cm4gJ1snICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJ10nO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnUkdCQV9BUlJBWScpIHtcbiAgICByZXR1cm4gJ1snICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJywnICsgYSArICddJztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ1JHQl9PQkonKSB7XG4gICAgcmV0dXJuICd7cjonICsgciArICcsZzonICsgZyArICcsYjonICsgYiArICd9JztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ1JHQkFfT0JKJykge1xuICAgIHJldHVybiAne3I6JyArIHIgKyAnLGc6JyArIGcgKyAnLGI6JyArIGIgKyAnLGE6JyArIGEgKyAnfSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdIU1ZfT0JKJykge1xuICAgIHJldHVybiAne2g6JyArIGggKyAnLHM6JyArIHMgKyAnLHY6JyArIHYgKyAnfSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdIU1ZBX09CSicpIHtcbiAgICByZXR1cm4gJ3toOicgKyBoICsgJyxzOicgKyBzICsgJyx2OicgKyB2ICsgJyxhOicgKyBhICsgJ30nO1xuICB9XG4gIHJldHVybiAndW5rbm93biBmb3JtYXQnO1xufVxuXG52YXIgQVJSX0VBQ0ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcbnZhciBBUlJfU0xJQ0UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgQ29tbW9uID0ge1xuICBCUkVBSzoge30sXG4gIGV4dGVuZDogZnVuY3Rpb24gZXh0ZW5kKHRhcmdldCkge1xuICAgIHRoaXMuZWFjaChBUlJfU0xJQ0UuY2FsbChhcmd1bWVudHMsIDEpLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICB2YXIga2V5cyA9IHRoaXMuaXNPYmplY3Qob2JqKSA/IE9iamVjdC5rZXlzKG9iaikgOiBbXTtcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghdGhpcy5pc1VuZGVmaW5lZChvYmpba2V5XSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sIHRoaXMpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sXG4gIGRlZmF1bHRzOiBmdW5jdGlvbiBkZWZhdWx0cyh0YXJnZXQpIHtcbiAgICB0aGlzLmVhY2goQVJSX1NMSUNFLmNhbGwoYXJndW1lbnRzLCAxKSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgdmFyIGtleXMgPSB0aGlzLmlzT2JqZWN0KG9iaikgPyBPYmplY3Qua2V5cyhvYmopIDogW107XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAodGhpcy5pc1VuZGVmaW5lZCh0YXJnZXRba2V5XSkpIHtcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICB9XG4gICAgICB9LmJpbmQodGhpcykpO1xuICAgIH0sIHRoaXMpO1xuICAgIHJldHVybiB0YXJnZXQ7XG4gIH0sXG4gIGNvbXBvc2U6IGZ1bmN0aW9uIGNvbXBvc2UoKSB7XG4gICAgdmFyIHRvQ2FsbCA9IEFSUl9TTElDRS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBhcmdzID0gQVJSX1NMSUNFLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgIGZvciAodmFyIGkgPSB0b0NhbGwubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgYXJncyA9IFt0b0NhbGxbaV0uYXBwbHkodGhpcywgYXJncyldO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyZ3NbMF07XG4gICAgfTtcbiAgfSxcbiAgZWFjaDogZnVuY3Rpb24gZWFjaChvYmosIGl0ciwgc2NvcGUpIHtcbiAgICBpZiAoIW9iaikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoQVJSX0VBQ0ggJiYgb2JqLmZvckVhY2ggJiYgb2JqLmZvckVhY2ggPT09IEFSUl9FQUNIKSB7XG4gICAgICBvYmouZm9yRWFjaChpdHIsIHNjb3BlKTtcbiAgICB9IGVsc2UgaWYgKG9iai5sZW5ndGggPT09IG9iai5sZW5ndGggKyAwKSB7XG4gICAgICB2YXIga2V5ID0gdm9pZCAwO1xuICAgICAgdmFyIGwgPSB2b2lkIDA7XG4gICAgICBmb3IgKGtleSA9IDAsIGwgPSBvYmoubGVuZ3RoOyBrZXkgPCBsOyBrZXkrKykge1xuICAgICAgICBpZiAoa2V5IGluIG9iaiAmJiBpdHIuY2FsbChzY29wZSwgb2JqW2tleV0sIGtleSkgPT09IHRoaXMuQlJFQUspIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZm9yICh2YXIgX2tleSBpbiBvYmopIHtcbiAgICAgICAgaWYgKGl0ci5jYWxsKHNjb3BlLCBvYmpbX2tleV0sIF9rZXkpID09PSB0aGlzLkJSRUFLKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBkZWZlcjogZnVuY3Rpb24gZGVmZXIoZm5jKSB7XG4gICAgc2V0VGltZW91dChmbmMsIDApO1xuICB9LFxuICBkZWJvdW5jZTogZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgdGhyZXNob2xkLCBjYWxsSW1tZWRpYXRlbHkpIHtcbiAgICB2YXIgdGltZW91dCA9IHZvaWQgMDtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIG9iaiA9IHRoaXM7XG4gICAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgIGZ1bmN0aW9uIGRlbGF5ZWQoKSB7XG4gICAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgICBpZiAoIWNhbGxJbW1lZGlhdGVseSkgZnVuYy5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgfVxuICAgICAgdmFyIGNhbGxOb3cgPSBjYWxsSW1tZWRpYXRlbHkgfHwgIXRpbWVvdXQ7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChkZWxheWVkLCB0aHJlc2hvbGQpO1xuICAgICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgICAgZnVuYy5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgfVxuICAgIH07XG4gIH0sXG4gIHRvQXJyYXk6IGZ1bmN0aW9uIHRvQXJyYXkob2JqKSB7XG4gICAgaWYgKG9iai50b0FycmF5KSByZXR1cm4gb2JqLnRvQXJyYXkoKTtcbiAgICByZXR1cm4gQVJSX1NMSUNFLmNhbGwob2JqKTtcbiAgfSxcbiAgaXNVbmRlZmluZWQ6IGZ1bmN0aW9uIGlzVW5kZWZpbmVkKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IHVuZGVmaW5lZDtcbiAgfSxcbiAgaXNOdWxsOiBmdW5jdGlvbiBpc051bGwob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbiAgfSxcbiAgaXNOYU46IGZ1bmN0aW9uIChfaXNOYU4pIHtcbiAgICBmdW5jdGlvbiBpc05hTihfeCkge1xuICAgICAgcmV0dXJuIF9pc05hTi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgICBpc05hTi50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBfaXNOYU4udG9TdHJpbmcoKTtcbiAgICB9O1xuICAgIHJldHVybiBpc05hTjtcbiAgfShmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIGlzTmFOKG9iaik7XG4gIH0pLFxuICBpc0FycmF5OiBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqLmNvbnN0cnVjdG9yID09PSBBcnJheTtcbiAgfSxcbiAgaXNPYmplY3Q6IGZ1bmN0aW9uIGlzT2JqZWN0KG9iaikge1xuICAgIHJldHVybiBvYmogPT09IE9iamVjdChvYmopO1xuICB9LFxuICBpc051bWJlcjogZnVuY3Rpb24gaXNOdW1iZXIob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gb2JqICsgMDtcbiAgfSxcbiAgaXNTdHJpbmc6IGZ1bmN0aW9uIGlzU3RyaW5nKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG9iaiArICcnO1xuICB9LFxuICBpc0Jvb2xlYW46IGZ1bmN0aW9uIGlzQm9vbGVhbihvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBmYWxzZSB8fCBvYmogPT09IHRydWU7XG4gIH0sXG4gIGlzRnVuY3Rpb246IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEZ1bmN0aW9uO1xuICB9XG59O1xuXG52YXIgSU5URVJQUkVUQVRJT05TID0gW1xue1xuICBsaXRtdXM6IENvbW1vbi5pc1N0cmluZyxcbiAgY29udmVyc2lvbnM6IHtcbiAgICBUSFJFRV9DSEFSX0hFWDoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICB2YXIgdGVzdCA9IG9yaWdpbmFsLm1hdGNoKC9eIyhbQS1GMC05XSkoW0EtRjAtOV0pKFtBLUYwLTldKSQvaSk7XG4gICAgICAgIGlmICh0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdIRVgnLFxuICAgICAgICAgIGhleDogcGFyc2VJbnQoJzB4JyArIHRlc3RbMV0udG9TdHJpbmcoKSArIHRlc3RbMV0udG9TdHJpbmcoKSArIHRlc3RbMl0udG9TdHJpbmcoKSArIHRlc3RbMl0udG9TdHJpbmcoKSArIHRlc3RbM10udG9TdHJpbmcoKSArIHRlc3RbM10udG9TdHJpbmcoKSwgMClcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogY29sb3JUb1N0cmluZ1xuICAgIH0sXG4gICAgU0lYX0NIQVJfSEVYOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gb3JpZ2luYWwubWF0Y2goL14jKFtBLUYwLTldezZ9KSQvaSk7XG4gICAgICAgIGlmICh0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdIRVgnLFxuICAgICAgICAgIGhleDogcGFyc2VJbnQoJzB4JyArIHRlc3RbMV0udG9TdHJpbmcoKSwgMClcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogY29sb3JUb1N0cmluZ1xuICAgIH0sXG4gICAgQ1NTX1JHQjoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICB2YXIgdGVzdCA9IG9yaWdpbmFsLm1hdGNoKC9ecmdiXFwoXFxzKihcXFMrKVxccyosXFxzKihcXFMrKVxccyosXFxzKihcXFMrKVxccypcXCkvKTtcbiAgICAgICAgaWYgKHRlc3QgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcGFjZTogJ1JHQicsXG4gICAgICAgICAgcjogcGFyc2VGbG9hdCh0ZXN0WzFdKSxcbiAgICAgICAgICBnOiBwYXJzZUZsb2F0KHRlc3RbMl0pLFxuICAgICAgICAgIGI6IHBhcnNlRmxvYXQodGVzdFszXSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogY29sb3JUb1N0cmluZ1xuICAgIH0sXG4gICAgQ1NTX1JHQkE6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgdmFyIHRlc3QgPSBvcmlnaW5hbC5tYXRjaCgvXnJnYmFcXChcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKixcXHMqKFxcUyspXFxzKlxcKS8pO1xuICAgICAgICBpZiAodGVzdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICByOiBwYXJzZUZsb2F0KHRlc3RbMV0pLFxuICAgICAgICAgIGc6IHBhcnNlRmxvYXQodGVzdFsyXSksXG4gICAgICAgICAgYjogcGFyc2VGbG9hdCh0ZXN0WzNdKSxcbiAgICAgICAgICBhOiBwYXJzZUZsb2F0KHRlc3RbNF0pXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGNvbG9yVG9TdHJpbmdcbiAgICB9XG4gIH1cbn0sXG57XG4gIGxpdG11czogQ29tbW9uLmlzTnVtYmVyLFxuICBjb252ZXJzaW9uczoge1xuICAgIEhFWDoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnSEVYJyxcbiAgICAgICAgICBoZXg6IG9yaWdpbmFsLFxuICAgICAgICAgIGNvbnZlcnNpb25OYW1lOiAnSEVYJ1xuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4gY29sb3IuaGV4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufSxcbntcbiAgbGl0bXVzOiBDb21tb24uaXNBcnJheSxcbiAgY29udmVyc2lvbnM6IHtcbiAgICBSR0JfQVJSQVk6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgaWYgKG9yaWdpbmFsLmxlbmd0aCAhPT0gMykge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICByOiBvcmlnaW5hbFswXSxcbiAgICAgICAgICBnOiBvcmlnaW5hbFsxXSxcbiAgICAgICAgICBiOiBvcmlnaW5hbFsyXVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4gW2NvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmJdO1xuICAgICAgfVxuICAgIH0sXG4gICAgUkdCQV9BUlJBWToge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAob3JpZ2luYWwubGVuZ3RoICE9PSA0KSByZXR1cm4gZmFsc2U7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdSR0InLFxuICAgICAgICAgIHI6IG9yaWdpbmFsWzBdLFxuICAgICAgICAgIGc6IG9yaWdpbmFsWzFdLFxuICAgICAgICAgIGI6IG9yaWdpbmFsWzJdLFxuICAgICAgICAgIGE6IG9yaWdpbmFsWzNdXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiBbY29sb3IuciwgY29sb3IuZywgY29sb3IuYiwgY29sb3IuYV07XG4gICAgICB9XG4gICAgfVxuICB9XG59LFxue1xuICBsaXRtdXM6IENvbW1vbi5pc09iamVjdCxcbiAgY29udmVyc2lvbnM6IHtcbiAgICBSR0JBX09CSjoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLnIpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5nKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuYikgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmEpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICAgIHI6IG9yaWdpbmFsLnIsXG4gICAgICAgICAgICBnOiBvcmlnaW5hbC5nLFxuICAgICAgICAgICAgYjogb3JpZ2luYWwuYixcbiAgICAgICAgICAgIGE6IG9yaWdpbmFsLmFcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByOiBjb2xvci5yLFxuICAgICAgICAgIGc6IGNvbG9yLmcsXG4gICAgICAgICAgYjogY29sb3IuYixcbiAgICAgICAgICBhOiBjb2xvci5hXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfSxcbiAgICBSR0JfT0JKOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIGlmIChDb21tb24uaXNOdW1iZXIob3JpZ2luYWwucikgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmcpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5iKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcGFjZTogJ1JHQicsXG4gICAgICAgICAgICByOiBvcmlnaW5hbC5yLFxuICAgICAgICAgICAgZzogb3JpZ2luYWwuZyxcbiAgICAgICAgICAgIGI6IG9yaWdpbmFsLmJcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICByOiBjb2xvci5yLFxuICAgICAgICAgIGc6IGNvbG9yLmcsXG4gICAgICAgICAgYjogY29sb3IuYlxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgSFNWQV9PQko6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgaWYgKENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5oKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwucykgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLnYpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5hKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcGFjZTogJ0hTVicsXG4gICAgICAgICAgICBoOiBvcmlnaW5hbC5oLFxuICAgICAgICAgICAgczogb3JpZ2luYWwucyxcbiAgICAgICAgICAgIHY6IG9yaWdpbmFsLnYsXG4gICAgICAgICAgICBhOiBvcmlnaW5hbC5hXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaDogY29sb3IuaCxcbiAgICAgICAgICBzOiBjb2xvci5zLFxuICAgICAgICAgIHY6IGNvbG9yLnYsXG4gICAgICAgICAgYTogY29sb3IuYVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgSFNWX09CSjoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmgpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5zKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwudikpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3BhY2U6ICdIU1YnLFxuICAgICAgICAgICAgaDogb3JpZ2luYWwuaCxcbiAgICAgICAgICAgIHM6IG9yaWdpbmFsLnMsXG4gICAgICAgICAgICB2OiBvcmlnaW5hbC52XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaDogY29sb3IuaCxcbiAgICAgICAgICBzOiBjb2xvci5zLFxuICAgICAgICAgIHY6IGNvbG9yLnZcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1dO1xudmFyIHJlc3VsdCA9IHZvaWQgMDtcbnZhciB0b1JldHVybiA9IHZvaWQgMDtcbnZhciBpbnRlcnByZXQgPSBmdW5jdGlvbiBpbnRlcnByZXQoKSB7XG4gIHRvUmV0dXJuID0gZmFsc2U7XG4gIHZhciBvcmlnaW5hbCA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gQ29tbW9uLnRvQXJyYXkoYXJndW1lbnRzKSA6IGFyZ3VtZW50c1swXTtcbiAgQ29tbW9uLmVhY2goSU5URVJQUkVUQVRJT05TLCBmdW5jdGlvbiAoZmFtaWx5KSB7XG4gICAgaWYgKGZhbWlseS5saXRtdXMob3JpZ2luYWwpKSB7XG4gICAgICBDb21tb24uZWFjaChmYW1pbHkuY29udmVyc2lvbnMsIGZ1bmN0aW9uIChjb252ZXJzaW9uLCBjb252ZXJzaW9uTmFtZSkge1xuICAgICAgICByZXN1bHQgPSBjb252ZXJzaW9uLnJlYWQob3JpZ2luYWwpO1xuICAgICAgICBpZiAodG9SZXR1cm4gPT09IGZhbHNlICYmIHJlc3VsdCAhPT0gZmFsc2UpIHtcbiAgICAgICAgICB0b1JldHVybiA9IHJlc3VsdDtcbiAgICAgICAgICByZXN1bHQuY29udmVyc2lvbk5hbWUgPSBjb252ZXJzaW9uTmFtZTtcbiAgICAgICAgICByZXN1bHQuY29udmVyc2lvbiA9IGNvbnZlcnNpb247XG4gICAgICAgICAgcmV0dXJuIENvbW1vbi5CUkVBSztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gQ29tbW9uLkJSRUFLO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiB0b1JldHVybjtcbn07XG5cbnZhciB0bXBDb21wb25lbnQgPSB2b2lkIDA7XG52YXIgQ29sb3JNYXRoID0ge1xuICBoc3ZfdG9fcmdiOiBmdW5jdGlvbiBoc3ZfdG9fcmdiKGgsIHMsIHYpIHtcbiAgICB2YXIgaGkgPSBNYXRoLmZsb29yKGggLyA2MCkgJSA2O1xuICAgIHZhciBmID0gaCAvIDYwIC0gTWF0aC5mbG9vcihoIC8gNjApO1xuICAgIHZhciBwID0gdiAqICgxLjAgLSBzKTtcbiAgICB2YXIgcSA9IHYgKiAoMS4wIC0gZiAqIHMpO1xuICAgIHZhciB0ID0gdiAqICgxLjAgLSAoMS4wIC0gZikgKiBzKTtcbiAgICB2YXIgYyA9IFtbdiwgdCwgcF0sIFtxLCB2LCBwXSwgW3AsIHYsIHRdLCBbcCwgcSwgdl0sIFt0LCBwLCB2XSwgW3YsIHAsIHFdXVtoaV07XG4gICAgcmV0dXJuIHtcbiAgICAgIHI6IGNbMF0gKiAyNTUsXG4gICAgICBnOiBjWzFdICogMjU1LFxuICAgICAgYjogY1syXSAqIDI1NVxuICAgIH07XG4gIH0sXG4gIHJnYl90b19oc3Y6IGZ1bmN0aW9uIHJnYl90b19oc3YociwgZywgYikge1xuICAgIHZhciBtaW4gPSBNYXRoLm1pbihyLCBnLCBiKTtcbiAgICB2YXIgbWF4ID0gTWF0aC5tYXgociwgZywgYik7XG4gICAgdmFyIGRlbHRhID0gbWF4IC0gbWluO1xuICAgIHZhciBoID0gdm9pZCAwO1xuICAgIHZhciBzID0gdm9pZCAwO1xuICAgIGlmIChtYXggIT09IDApIHtcbiAgICAgIHMgPSBkZWx0YSAvIG1heDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaDogTmFOLFxuICAgICAgICBzOiAwLFxuICAgICAgICB2OiAwXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAociA9PT0gbWF4KSB7XG4gICAgICBoID0gKGcgLSBiKSAvIGRlbHRhO1xuICAgIH0gZWxzZSBpZiAoZyA9PT0gbWF4KSB7XG4gICAgICBoID0gMiArIChiIC0gcikgLyBkZWx0YTtcbiAgICB9IGVsc2Uge1xuICAgICAgaCA9IDQgKyAociAtIGcpIC8gZGVsdGE7XG4gICAgfVxuICAgIGggLz0gNjtcbiAgICBpZiAoaCA8IDApIHtcbiAgICAgIGggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgIGg6IGggKiAzNjAsXG4gICAgICBzOiBzLFxuICAgICAgdjogbWF4IC8gMjU1XG4gICAgfTtcbiAgfSxcbiAgcmdiX3RvX2hleDogZnVuY3Rpb24gcmdiX3RvX2hleChyLCBnLCBiKSB7XG4gICAgdmFyIGhleCA9IHRoaXMuaGV4X3dpdGhfY29tcG9uZW50KDAsIDIsIHIpO1xuICAgIGhleCA9IHRoaXMuaGV4X3dpdGhfY29tcG9uZW50KGhleCwgMSwgZyk7XG4gICAgaGV4ID0gdGhpcy5oZXhfd2l0aF9jb21wb25lbnQoaGV4LCAwLCBiKTtcbiAgICByZXR1cm4gaGV4O1xuICB9LFxuICBjb21wb25lbnRfZnJvbV9oZXg6IGZ1bmN0aW9uIGNvbXBvbmVudF9mcm9tX2hleChoZXgsIGNvbXBvbmVudEluZGV4KSB7XG4gICAgcmV0dXJuIGhleCA+PiBjb21wb25lbnRJbmRleCAqIDggJiAweEZGO1xuICB9LFxuICBoZXhfd2l0aF9jb21wb25lbnQ6IGZ1bmN0aW9uIGhleF93aXRoX2NvbXBvbmVudChoZXgsIGNvbXBvbmVudEluZGV4LCB2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSA8PCAodG1wQ29tcG9uZW50ID0gY29tcG9uZW50SW5kZXggKiA4KSB8IGhleCAmIH4oMHhGRiA8PCB0bXBDb21wb25lbnQpO1xuICB9XG59O1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgY2xhc3NDYWxsQ2hlY2sgPSBmdW5jdGlvbiAoaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufTtcblxudmFyIGNyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICAgIGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gICAgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gICAgcmV0dXJuIENvbnN0cnVjdG9yO1xuICB9O1xufSgpO1xuXG5cblxuXG5cblxuXG52YXIgZ2V0ID0gZnVuY3Rpb24gZ2V0KG9iamVjdCwgcHJvcGVydHksIHJlY2VpdmVyKSB7XG4gIGlmIChvYmplY3QgPT09IG51bGwpIG9iamVjdCA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgcHJvcGVydHkpO1xuXG4gIGlmIChkZXNjID09PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgcGFyZW50ID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKG9iamVjdCk7XG5cbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZ2V0KHBhcmVudCwgcHJvcGVydHksIHJlY2VpdmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoXCJ2YWx1ZVwiIGluIGRlc2MpIHtcbiAgICByZXR1cm4gZGVzYy52YWx1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZ2V0dGVyID0gZGVzYy5nZXQ7XG5cbiAgICBpZiAoZ2V0dGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGdldHRlci5jYWxsKHJlY2VpdmVyKTtcbiAgfVxufTtcblxudmFyIGluaGVyaXRzID0gZnVuY3Rpb24gKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIGlmICh0eXBlb2Ygc3VwZXJDbGFzcyAhPT0gXCJmdW5jdGlvblwiICYmIHN1cGVyQ2xhc3MgIT09IG51bGwpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIHdyaXRhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlXG4gICAgfVxuICB9KTtcbiAgaWYgKHN1cGVyQ2xhc3MpIE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcykgOiBzdWJDbGFzcy5fX3Byb3RvX18gPSBzdXBlckNsYXNzO1xufTtcblxuXG5cblxuXG5cblxuXG5cblxuXG52YXIgcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiA9IGZ1bmN0aW9uIChzZWxmLCBjYWxsKSB7XG4gIGlmICghc2VsZikge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBjYWxsICYmICh0eXBlb2YgY2FsbCA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSA/IGNhbGwgOiBzZWxmO1xufTtcblxudmFyIENvbG9yID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDb2xvcigpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBDb2xvcik7XG4gICAgdGhpcy5fX3N0YXRlID0gaW50ZXJwcmV0LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgaWYgKHRoaXMuX19zdGF0ZSA9PT0gZmFsc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGludGVycHJldCBjb2xvciBhcmd1bWVudHMnKTtcbiAgICB9XG4gICAgdGhpcy5fX3N0YXRlLmEgPSB0aGlzLl9fc3RhdGUuYSB8fCAxO1xuICB9XG4gIGNyZWF0ZUNsYXNzKENvbG9yLCBbe1xuICAgIGtleTogJ3RvU3RyaW5nJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gY29sb3JUb1N0cmluZyh0aGlzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd0b0hleFN0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvSGV4U3RyaW5nKCkge1xuICAgICAgcmV0dXJuIGNvbG9yVG9TdHJpbmcodGhpcywgdHJ1ZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9PcmlnaW5hbCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvT3JpZ2luYWwoKSB7XG4gICAgICByZXR1cm4gdGhpcy5fX3N0YXRlLmNvbnZlcnNpb24ud3JpdGUodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDb2xvcjtcbn0oKTtcbmZ1bmN0aW9uIGRlZmluZVJHQkNvbXBvbmVudCh0YXJnZXQsIGNvbXBvbmVudCwgY29tcG9uZW50SGV4SW5kZXgpIHtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgY29tcG9uZW50LCB7XG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICBpZiAodGhpcy5fX3N0YXRlLnNwYWNlID09PSAnUkdCJykge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3N0YXRlW2NvbXBvbmVudF07XG4gICAgICB9XG4gICAgICBDb2xvci5yZWNhbGN1bGF0ZVJHQih0aGlzLCBjb21wb25lbnQsIGNvbXBvbmVudEhleEluZGV4KTtcbiAgICAgIHJldHVybiB0aGlzLl9fc3RhdGVbY29tcG9uZW50XTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgIGlmICh0aGlzLl9fc3RhdGUuc3BhY2UgIT09ICdSR0InKSB7XG4gICAgICAgIENvbG9yLnJlY2FsY3VsYXRlUkdCKHRoaXMsIGNvbXBvbmVudCwgY29tcG9uZW50SGV4SW5kZXgpO1xuICAgICAgICB0aGlzLl9fc3RhdGUuc3BhY2UgPSAnUkdCJztcbiAgICAgIH1cbiAgICAgIHRoaXMuX19zdGF0ZVtjb21wb25lbnRdID0gdjtcbiAgICB9XG4gIH0pO1xufVxuZnVuY3Rpb24gZGVmaW5lSFNWQ29tcG9uZW50KHRhcmdldCwgY29tcG9uZW50KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbXBvbmVudCwge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgaWYgKHRoaXMuX19zdGF0ZS5zcGFjZSA9PT0gJ0hTVicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19zdGF0ZVtjb21wb25lbnRdO1xuICAgICAgfVxuICAgICAgQ29sb3IucmVjYWxjdWxhdGVIU1YodGhpcyk7XG4gICAgICByZXR1cm4gdGhpcy5fX3N0YXRlW2NvbXBvbmVudF07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgICBpZiAodGhpcy5fX3N0YXRlLnNwYWNlICE9PSAnSFNWJykge1xuICAgICAgICBDb2xvci5yZWNhbGN1bGF0ZUhTVih0aGlzKTtcbiAgICAgICAgdGhpcy5fX3N0YXRlLnNwYWNlID0gJ0hTVic7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc3RhdGVbY29tcG9uZW50XSA9IHY7XG4gICAgfVxuICB9KTtcbn1cbkNvbG9yLnJlY2FsY3VsYXRlUkdCID0gZnVuY3Rpb24gKGNvbG9yLCBjb21wb25lbnQsIGNvbXBvbmVudEhleEluZGV4KSB7XG4gIGlmIChjb2xvci5fX3N0YXRlLnNwYWNlID09PSAnSEVYJykge1xuICAgIGNvbG9yLl9fc3RhdGVbY29tcG9uZW50XSA9IENvbG9yTWF0aC5jb21wb25lbnRfZnJvbV9oZXgoY29sb3IuX19zdGF0ZS5oZXgsIGNvbXBvbmVudEhleEluZGV4KTtcbiAgfSBlbHNlIGlmIChjb2xvci5fX3N0YXRlLnNwYWNlID09PSAnSFNWJykge1xuICAgIENvbW1vbi5leHRlbmQoY29sb3IuX19zdGF0ZSwgQ29sb3JNYXRoLmhzdl90b19yZ2IoY29sb3IuX19zdGF0ZS5oLCBjb2xvci5fX3N0YXRlLnMsIGNvbG9yLl9fc3RhdGUudikpO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignQ29ycnVwdGVkIGNvbG9yIHN0YXRlJyk7XG4gIH1cbn07XG5Db2xvci5yZWNhbGN1bGF0ZUhTViA9IGZ1bmN0aW9uIChjb2xvcikge1xuICB2YXIgcmVzdWx0ID0gQ29sb3JNYXRoLnJnYl90b19oc3YoY29sb3IuciwgY29sb3IuZywgY29sb3IuYik7XG4gIENvbW1vbi5leHRlbmQoY29sb3IuX19zdGF0ZSwge1xuICAgIHM6IHJlc3VsdC5zLFxuICAgIHY6IHJlc3VsdC52XG4gIH0pO1xuICBpZiAoIUNvbW1vbi5pc05hTihyZXN1bHQuaCkpIHtcbiAgICBjb2xvci5fX3N0YXRlLmggPSByZXN1bHQuaDtcbiAgfSBlbHNlIGlmIChDb21tb24uaXNVbmRlZmluZWQoY29sb3IuX19zdGF0ZS5oKSkge1xuICAgIGNvbG9yLl9fc3RhdGUuaCA9IDA7XG4gIH1cbn07XG5Db2xvci5DT01QT05FTlRTID0gWydyJywgJ2cnLCAnYicsICdoJywgJ3MnLCAndicsICdoZXgnLCAnYSddO1xuZGVmaW5lUkdCQ29tcG9uZW50KENvbG9yLnByb3RvdHlwZSwgJ3InLCAyKTtcbmRlZmluZVJHQkNvbXBvbmVudChDb2xvci5wcm90b3R5cGUsICdnJywgMSk7XG5kZWZpbmVSR0JDb21wb25lbnQoQ29sb3IucHJvdG90eXBlLCAnYicsIDApO1xuZGVmaW5lSFNWQ29tcG9uZW50KENvbG9yLnByb3RvdHlwZSwgJ2gnKTtcbmRlZmluZUhTVkNvbXBvbmVudChDb2xvci5wcm90b3R5cGUsICdzJyk7XG5kZWZpbmVIU1ZDb21wb25lbnQoQ29sb3IucHJvdG90eXBlLCAndicpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbG9yLnByb3RvdHlwZSwgJ2EnLCB7XG4gIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgIHJldHVybiB0aGlzLl9fc3RhdGUuYTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgIHRoaXMuX19zdGF0ZS5hID0gdjtcbiAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoQ29sb3IucHJvdG90eXBlLCAnaGV4Jywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICBpZiAodGhpcy5fX3N0YXRlLnNwYWNlICE9PSAnSEVYJykge1xuICAgICAgdGhpcy5fX3N0YXRlLmhleCA9IENvbG9yTWF0aC5yZ2JfdG9faGV4KHRoaXMuciwgdGhpcy5nLCB0aGlzLmIpO1xuICAgICAgdGhpcy5fX3N0YXRlLnNwYWNlID0gJ0hFWCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9fc3RhdGUuaGV4O1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgdGhpcy5fX3N0YXRlLnNwYWNlID0gJ0hFWCc7XG4gICAgdGhpcy5fX3N0YXRlLmhleCA9IHY7XG4gIH1cbn0pO1xuXG52YXIgQ29udHJvbGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29udHJvbGxlcik7XG4gICAgdGhpcy5pbml0aWFsVmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMub2JqZWN0ID0gb2JqZWN0O1xuICAgIHRoaXMucHJvcGVydHkgPSBwcm9wZXJ0eTtcbiAgICB0aGlzLl9fb25DaGFuZ2UgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fX29uRmluaXNoQ2hhbmdlID0gdW5kZWZpbmVkO1xuICB9XG4gIGNyZWF0ZUNsYXNzKENvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnb25DaGFuZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbkNoYW5nZShmbmMpIHtcbiAgICAgIHRoaXMuX19vbkNoYW5nZSA9IGZuYztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uRmluaXNoQ2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25GaW5pc2hDaGFuZ2UoZm5jKSB7XG4gICAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UgPSBmbmM7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICB0aGlzLm9iamVjdFt0aGlzLnByb3BlcnR5XSA9IG5ld1ZhbHVlO1xuICAgICAgaWYgKHRoaXMuX19vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25DaGFuZ2UuY2FsbCh0aGlzLCBuZXdWYWx1ZSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZURpc3BsYXkoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VmFsdWUoKSB7XG4gICAgICByZXR1cm4gdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdpc01vZGlmaWVkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gaXNNb2RpZmllZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLmluaXRpYWxWYWx1ZSAhPT0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ29udHJvbGxlcjtcbn0oKTtcblxudmFyIEVWRU5UX01BUCA9IHtcbiAgSFRNTEV2ZW50czogWydjaGFuZ2UnXSxcbiAgTW91c2VFdmVudHM6IFsnY2xpY2snLCAnbW91c2Vtb3ZlJywgJ21vdXNlZG93bicsICdtb3VzZXVwJywgJ21vdXNlb3ZlciddLFxuICBLZXlib2FyZEV2ZW50czogWydrZXlkb3duJ11cbn07XG52YXIgRVZFTlRfTUFQX0lOViA9IHt9O1xuQ29tbW9uLmVhY2goRVZFTlRfTUFQLCBmdW5jdGlvbiAodiwgaykge1xuICBDb21tb24uZWFjaCh2LCBmdW5jdGlvbiAoZSkge1xuICAgIEVWRU5UX01BUF9JTlZbZV0gPSBrO1xuICB9KTtcbn0pO1xudmFyIENTU19WQUxVRV9QSVhFTFMgPSAvKFxcZCsoXFwuXFxkKyk/KXB4LztcbmZ1bmN0aW9uIGNzc1ZhbHVlVG9QaXhlbHModmFsKSB7XG4gIGlmICh2YWwgPT09ICcwJyB8fCBDb21tb24uaXNVbmRlZmluZWQodmFsKSkge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHZhciBtYXRjaCA9IHZhbC5tYXRjaChDU1NfVkFMVUVfUElYRUxTKTtcbiAgaWYgKCFDb21tb24uaXNOdWxsKG1hdGNoKSkge1xuICAgIHJldHVybiBwYXJzZUZsb2F0KG1hdGNoWzFdKTtcbiAgfVxuICByZXR1cm4gMDtcbn1cbnZhciBkb20gPSB7XG4gIG1ha2VTZWxlY3RhYmxlOiBmdW5jdGlvbiBtYWtlU2VsZWN0YWJsZShlbGVtLCBzZWxlY3RhYmxlKSB7XG4gICAgaWYgKGVsZW0gPT09IHVuZGVmaW5lZCB8fCBlbGVtLnN0eWxlID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICBlbGVtLm9uc2VsZWN0c3RhcnQgPSBzZWxlY3RhYmxlID8gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0gOiBmdW5jdGlvbiAoKSB7fTtcbiAgICBlbGVtLnN0eWxlLk1velVzZXJTZWxlY3QgPSBzZWxlY3RhYmxlID8gJ2F1dG8nIDogJ25vbmUnO1xuICAgIGVsZW0uc3R5bGUuS2h0bWxVc2VyU2VsZWN0ID0gc2VsZWN0YWJsZSA/ICdhdXRvJyA6ICdub25lJztcbiAgICBlbGVtLnVuc2VsZWN0YWJsZSA9IHNlbGVjdGFibGUgPyAnb24nIDogJ29mZic7XG4gIH0sXG4gIG1ha2VGdWxsc2NyZWVuOiBmdW5jdGlvbiBtYWtlRnVsbHNjcmVlbihlbGVtLCBob3IsIHZlcnQpIHtcbiAgICB2YXIgdmVydGljYWwgPSB2ZXJ0O1xuICAgIHZhciBob3Jpem9udGFsID0gaG9yO1xuICAgIGlmIChDb21tb24uaXNVbmRlZmluZWQoaG9yaXpvbnRhbCkpIHtcbiAgICAgIGhvcml6b250YWwgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKHZlcnRpY2FsKSkge1xuICAgICAgdmVydGljYWwgPSB0cnVlO1xuICAgIH1cbiAgICBlbGVtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgZWxlbS5zdHlsZS5sZWZ0ID0gMDtcbiAgICAgIGVsZW0uc3R5bGUucmlnaHQgPSAwO1xuICAgIH1cbiAgICBpZiAodmVydGljYWwpIHtcbiAgICAgIGVsZW0uc3R5bGUudG9wID0gMDtcbiAgICAgIGVsZW0uc3R5bGUuYm90dG9tID0gMDtcbiAgICB9XG4gIH0sXG4gIGZha2VFdmVudDogZnVuY3Rpb24gZmFrZUV2ZW50KGVsZW0sIGV2ZW50VHlwZSwgcGFycywgYXV4KSB7XG4gICAgdmFyIHBhcmFtcyA9IHBhcnMgfHwge307XG4gICAgdmFyIGNsYXNzTmFtZSA9IEVWRU5UX01BUF9JTlZbZXZlbnRUeXBlXTtcbiAgICBpZiAoIWNsYXNzTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFdmVudCB0eXBlICcgKyBldmVudFR5cGUgKyAnIG5vdCBzdXBwb3J0ZWQuJyk7XG4gICAgfVxuICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudChjbGFzc05hbWUpO1xuICAgIHN3aXRjaCAoY2xhc3NOYW1lKSB7XG4gICAgICBjYXNlICdNb3VzZUV2ZW50cyc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgY2xpZW50WCA9IHBhcmFtcy54IHx8IHBhcmFtcy5jbGllbnRYIHx8IDA7XG4gICAgICAgICAgdmFyIGNsaWVudFkgPSBwYXJhbXMueSB8fCBwYXJhbXMuY2xpZW50WSB8fCAwO1xuICAgICAgICAgIGV2dC5pbml0TW91c2VFdmVudChldmVudFR5cGUsIHBhcmFtcy5idWJibGVzIHx8IGZhbHNlLCBwYXJhbXMuY2FuY2VsYWJsZSB8fCB0cnVlLCB3aW5kb3csIHBhcmFtcy5jbGlja0NvdW50IHx8IDEsIDAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICBjbGllbnRYLFxuICAgICAgICAgIGNsaWVudFksXG4gICAgICAgICAgZmFsc2UsIGZhbHNlLCBmYWxzZSwgZmFsc2UsIDAsIG51bGwpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBjYXNlICdLZXlib2FyZEV2ZW50cyc6XG4gICAgICAgIHtcbiAgICAgICAgICB2YXIgaW5pdCA9IGV2dC5pbml0S2V5Ym9hcmRFdmVudCB8fCBldnQuaW5pdEtleUV2ZW50O1xuICAgICAgICAgIENvbW1vbi5kZWZhdWx0cyhwYXJhbXMsIHtcbiAgICAgICAgICAgIGNhbmNlbGFibGU6IHRydWUsXG4gICAgICAgICAgICBjdHJsS2V5OiBmYWxzZSxcbiAgICAgICAgICAgIGFsdEtleTogZmFsc2UsXG4gICAgICAgICAgICBzaGlmdEtleTogZmFsc2UsXG4gICAgICAgICAgICBtZXRhS2V5OiBmYWxzZSxcbiAgICAgICAgICAgIGtleUNvZGU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgIGNoYXJDb2RlOiB1bmRlZmluZWRcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBpbml0KGV2ZW50VHlwZSwgcGFyYW1zLmJ1YmJsZXMgfHwgZmFsc2UsIHBhcmFtcy5jYW5jZWxhYmxlLCB3aW5kb3csIHBhcmFtcy5jdHJsS2V5LCBwYXJhbXMuYWx0S2V5LCBwYXJhbXMuc2hpZnRLZXksIHBhcmFtcy5tZXRhS2V5LCBwYXJhbXMua2V5Q29kZSwgcGFyYW1zLmNoYXJDb2RlKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgICAge1xuICAgICAgICAgIGV2dC5pbml0RXZlbnQoZXZlbnRUeXBlLCBwYXJhbXMuYnViYmxlcyB8fCBmYWxzZSwgcGFyYW1zLmNhbmNlbGFibGUgfHwgdHJ1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgQ29tbW9uLmRlZmF1bHRzKGV2dCwgYXV4KTtcbiAgICBlbGVtLmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfSxcbiAgYmluZDogZnVuY3Rpb24gYmluZChlbGVtLCBldmVudCwgZnVuYywgbmV3Qm9vbCkge1xuICAgIHZhciBib29sID0gbmV3Qm9vbCB8fCBmYWxzZTtcbiAgICBpZiAoZWxlbS5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMsIGJvb2wpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5hdHRhY2hFdmVudCkge1xuICAgICAgZWxlbS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmMpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xuICB9LFxuICB1bmJpbmQ6IGZ1bmN0aW9uIHVuYmluZChlbGVtLCBldmVudCwgZnVuYywgbmV3Qm9vbCkge1xuICAgIHZhciBib29sID0gbmV3Qm9vbCB8fCBmYWxzZTtcbiAgICBpZiAoZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICBlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmMsIGJvb2wpO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5kZXRhY2hFdmVudCkge1xuICAgICAgZWxlbS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGZ1bmMpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xuICB9LFxuICBhZGRDbGFzczogZnVuY3Rpb24gYWRkQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGVsZW0uY2xhc3NOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xuICAgIH0gZWxzZSBpZiAoZWxlbS5jbGFzc05hbWUgIT09IGNsYXNzTmFtZSkge1xuICAgICAgdmFyIGNsYXNzZXMgPSBlbGVtLmNsYXNzTmFtZS5zcGxpdCgvICsvKTtcbiAgICAgIGlmIChjbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgY2xhc3Nlcy5wdXNoKGNsYXNzTmFtZSk7XG4gICAgICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJykucmVwbGFjZSgvXlxccysvLCAnJykucmVwbGFjZSgvXFxzKyQvLCAnJyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH0sXG4gIHJlbW92ZUNsYXNzOiBmdW5jdGlvbiByZW1vdmVDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICBpZiAoZWxlbS5jbGFzc05hbWUgPT09IGNsYXNzTmFtZSkge1xuICAgICAgICBlbGVtLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBjbGFzc2VzID0gZWxlbS5jbGFzc05hbWUuc3BsaXQoLyArLyk7XG4gICAgICAgIHZhciBpbmRleCA9IGNsYXNzZXMuaW5kZXhPZihjbGFzc05hbWUpO1xuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgY2xhc3Nlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgIGVsZW0uY2xhc3NOYW1lID0gY2xhc3Nlcy5qb2luKCcgJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZWxlbS5jbGFzc05hbWUgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBkb207XG4gIH0sXG4gIGhhc0NsYXNzOiBmdW5jdGlvbiBoYXNDbGFzcyhlbGVtLCBjbGFzc05hbWUpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cCgnKD86XnxcXFxccyspJyArIGNsYXNzTmFtZSArICcoPzpcXFxccyt8JCknKS50ZXN0KGVsZW0uY2xhc3NOYW1lKSB8fCBmYWxzZTtcbiAgfSxcbiAgZ2V0V2lkdGg6IGZ1bmN0aW9uIGdldFdpZHRoKGVsZW0pIHtcbiAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgIHJldHVybiBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydib3JkZXItbGVmdC13aWR0aCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ2JvcmRlci1yaWdodC13aWR0aCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ3BhZGRpbmctbGVmdCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ3BhZGRpbmctcmlnaHQnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlLndpZHRoKTtcbiAgfSxcbiAgZ2V0SGVpZ2h0OiBmdW5jdGlvbiBnZXRIZWlnaHQoZWxlbSkge1xuICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbSk7XG4gICAgcmV0dXJuIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ2JvcmRlci10b3Atd2lkdGgnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydib3JkZXItYm90dG9tLXdpZHRoJ10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsncGFkZGluZy10b3AnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydwYWRkaW5nLWJvdHRvbSddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGUuaGVpZ2h0KTtcbiAgfSxcbiAgZ2V0T2Zmc2V0OiBmdW5jdGlvbiBnZXRPZmZzZXQoZWwpIHtcbiAgICB2YXIgZWxlbSA9IGVsO1xuICAgIHZhciBvZmZzZXQgPSB7IGxlZnQ6IDAsIHRvcDogMCB9O1xuICAgIGlmIChlbGVtLm9mZnNldFBhcmVudCkge1xuICAgICAgZG8ge1xuICAgICAgICBvZmZzZXQubGVmdCArPSBlbGVtLm9mZnNldExlZnQ7XG4gICAgICAgIG9mZnNldC50b3AgKz0gZWxlbS5vZmZzZXRUb3A7XG4gICAgICAgIGVsZW0gPSBlbGVtLm9mZnNldFBhcmVudDtcbiAgICAgIH0gd2hpbGUgKGVsZW0pO1xuICAgIH1cbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9LFxuICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUoZWxlbSkge1xuICAgIHJldHVybiBlbGVtID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmIChlbGVtLnR5cGUgfHwgZWxlbS5ocmVmKTtcbiAgfVxufTtcblxudmFyIEJvb2xlYW5Db250cm9sbGVyID0gZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIGluaGVyaXRzKEJvb2xlYW5Db250cm9sbGVyLCBfQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIEJvb2xlYW5Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBCb29sZWFuQ29udHJvbGxlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKEJvb2xlYW5Db250cm9sbGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQm9vbGVhbkNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgX3RoaXMyLl9fcHJldiA9IF90aGlzMi5nZXRWYWx1ZSgpO1xuICAgIF90aGlzMi5fX2NoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBfdGhpczIuX19jaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgIF90aGlzLnNldFZhbHVlKCFfdGhpcy5fX3ByZXYpO1xuICAgIH1cbiAgICBkb20uYmluZChfdGhpczIuX19jaGVja2JveCwgJ2NoYW5nZScsIG9uQ2hhbmdlLCBmYWxzZSk7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fY2hlY2tib3gpO1xuICAgIF90aGlzMi51cGRhdGVEaXNwbGF5KCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhCb29sZWFuQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdzZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHYpIHtcbiAgICAgIHZhciB0b1JldHVybiA9IGdldChCb29sZWFuQ29udHJvbGxlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCb29sZWFuQ29udHJvbGxlci5wcm90b3R5cGUpLCAnc2V0VmFsdWUnLCB0aGlzKS5jYWxsKHRoaXMsIHYpO1xuICAgICAgaWYgKHRoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3ByZXYgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICByZXR1cm4gdG9SZXR1cm47XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICBpZiAodGhpcy5nZXRWYWx1ZSgpID09PSB0cnVlKSB7XG4gICAgICAgIHRoaXMuX19jaGVja2JveC5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnY2hlY2tlZCcpO1xuICAgICAgICB0aGlzLl9fY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuX19wcmV2ID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX19jaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX19wcmV2ID0gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0KEJvb2xlYW5Db250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEJvb2xlYW5Db250cm9sbGVyLnByb3RvdHlwZSksICd1cGRhdGVEaXNwbGF5JywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEJvb2xlYW5Db250cm9sbGVyO1xufShDb250cm9sbGVyKTtcblxudmFyIE9wdGlvbkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoT3B0aW9uQ29udHJvbGxlciwgX0NvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBPcHRpb25Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksIG9wdHMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBPcHRpb25Db250cm9sbGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoT3B0aW9uQ29udHJvbGxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9wdGlvbkNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgb3B0aW9ucyA9IG9wdHM7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIF90aGlzMi5fX3NlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIGlmIChDb21tb24uaXNBcnJheShvcHRpb25zKSkge1xuICAgICAgdmFyIG1hcCA9IHt9O1xuICAgICAgQ29tbW9uLmVhY2gob3B0aW9ucywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgbWFwW2VsZW1lbnRdID0gZWxlbWVudDtcbiAgICAgIH0pO1xuICAgICAgb3B0aW9ucyA9IG1hcDtcbiAgICB9XG4gICAgQ29tbW9uLmVhY2gob3B0aW9ucywgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgIG9wdC5pbm5lckhUTUwgPSBrZXk7XG4gICAgICBvcHQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIHZhbHVlKTtcbiAgICAgIF90aGlzLl9fc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XG4gICAgfSk7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBkb20uYmluZChfdGhpczIuX19zZWxlY3QsICdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgZGVzaXJlZFZhbHVlID0gdGhpcy5vcHRpb25zW3RoaXMuc2VsZWN0ZWRJbmRleF0udmFsdWU7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShkZXNpcmVkVmFsdWUpO1xuICAgIH0pO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX3NlbGVjdCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhPcHRpb25Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodikge1xuICAgICAgdmFyIHRvUmV0dXJuID0gZ2V0KE9wdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoT3B0aW9uQ29udHJvbGxlci5wcm90b3R5cGUpLCAnc2V0VmFsdWUnLCB0aGlzKS5jYWxsKHRoaXMsIHYpO1xuICAgICAgaWYgKHRoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbCh0aGlzLCB0aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvUmV0dXJuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgaWYgKGRvbS5pc0FjdGl2ZSh0aGlzLl9fc2VsZWN0KSkgcmV0dXJuIHRoaXM7XG4gICAgICB0aGlzLl9fc2VsZWN0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgcmV0dXJuIGdldChPcHRpb25Db250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9wdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlKSwgJ3VwZGF0ZURpc3BsYXknLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gT3B0aW9uQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG5cbnZhciBTdHJpbmdDb250cm9sbGVyID0gZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIGluaGVyaXRzKFN0cmluZ0NvbnRyb2xsZXIsIF9Db250cm9sbGVyKTtcbiAgZnVuY3Rpb24gU3RyaW5nQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RyaW5nQ29udHJvbGxlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKFN0cmluZ0NvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihTdHJpbmdDb250cm9sbGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5KSk7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xuICAgICAgX3RoaXMuc2V0VmFsdWUoX3RoaXMuX19pbnB1dC52YWx1ZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICAgIGlmIChfdGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbChfdGhpcywgX3RoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIF90aGlzMi5fX2lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBfdGhpczIuX19pbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAna2V5dXAnLCBvbkNoYW5nZSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdibHVyJywgb25CbHVyKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19pbnB1dCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhTdHJpbmdDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgaWYgKCFkb20uaXNBY3RpdmUodGhpcy5fX2lucHV0KSkge1xuICAgICAgICB0aGlzLl9faW5wdXQudmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZ2V0KFN0cmluZ0NvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3RyaW5nQ29udHJvbGxlci5wcm90b3R5cGUpLCAndXBkYXRlRGlzcGxheScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdHJpbmdDb250cm9sbGVyO1xufShDb250cm9sbGVyKTtcblxuZnVuY3Rpb24gbnVtRGVjaW1hbHMoeCkge1xuICB2YXIgX3ggPSB4LnRvU3RyaW5nKCk7XG4gIGlmIChfeC5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgIHJldHVybiBfeC5sZW5ndGggLSBfeC5pbmRleE9mKCcuJykgLSAxO1xuICB9XG4gIHJldHVybiAwO1xufVxudmFyIE51bWJlckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoTnVtYmVyQ29udHJvbGxlciwgX0NvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBOdW1iZXJDb250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bWJlckNvbnRyb2xsZXIpO1xuICAgIHZhciBfdGhpcyA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE51bWJlckNvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdW1iZXJDb250cm9sbGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5KSk7XG4gICAgdmFyIF9wYXJhbXMgPSBwYXJhbXMgfHwge307XG4gICAgX3RoaXMuX19taW4gPSBfcGFyYW1zLm1pbjtcbiAgICBfdGhpcy5fX21heCA9IF9wYXJhbXMubWF4O1xuICAgIF90aGlzLl9fc3RlcCA9IF9wYXJhbXMuc3RlcDtcbiAgICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKF90aGlzLl9fc3RlcCkpIHtcbiAgICAgIGlmIChfdGhpcy5pbml0aWFsVmFsdWUgPT09IDApIHtcbiAgICAgICAgX3RoaXMuX19pbXBsaWVkU3RlcCA9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBfdGhpcy5fX2ltcGxpZWRTdGVwID0gTWF0aC5wb3coMTAsIE1hdGguZmxvb3IoTWF0aC5sb2coTWF0aC5hYnMoX3RoaXMuaW5pdGlhbFZhbHVlKSkgLyBNYXRoLkxOMTApKSAvIDEwO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBfdGhpcy5fX2ltcGxpZWRTdGVwID0gX3RoaXMuX19zdGVwO1xuICAgIH1cbiAgICBfdGhpcy5fX3ByZWNpc2lvbiA9IG51bURlY2ltYWxzKF90aGlzLl9faW1wbGllZFN0ZXApO1xuICAgIHJldHVybiBfdGhpcztcbiAgfVxuICBjcmVhdGVDbGFzcyhOdW1iZXJDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ3NldFZhbHVlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2V0VmFsdWUodikge1xuICAgICAgdmFyIF92ID0gdjtcbiAgICAgIGlmICh0aGlzLl9fbWluICE9PSB1bmRlZmluZWQgJiYgX3YgPCB0aGlzLl9fbWluKSB7XG4gICAgICAgIF92ID0gdGhpcy5fX21pbjtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fX21heCAhPT0gdW5kZWZpbmVkICYmIF92ID4gdGhpcy5fX21heCkge1xuICAgICAgICBfdiA9IHRoaXMuX19tYXg7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fX3N0ZXAgIT09IHVuZGVmaW5lZCAmJiBfdiAlIHRoaXMuX19zdGVwICE9PSAwKSB7XG4gICAgICAgIF92ID0gTWF0aC5yb3VuZChfdiAvIHRoaXMuX19zdGVwKSAqIHRoaXMuX19zdGVwO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGdldChOdW1iZXJDb250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlckNvbnRyb2xsZXIucHJvdG90eXBlKSwgJ3NldFZhbHVlJywgdGhpcykuY2FsbCh0aGlzLCBfdik7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWluJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWluKG1pblZhbHVlKSB7XG4gICAgICB0aGlzLl9fbWluID0gbWluVmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtYXgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXgobWF4VmFsdWUpIHtcbiAgICAgIHRoaXMuX19tYXggPSBtYXhWYWx1ZTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3N0ZXAnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGVwKHN0ZXBWYWx1ZSkge1xuICAgICAgdGhpcy5fX3N0ZXAgPSBzdGVwVmFsdWU7XG4gICAgICB0aGlzLl9faW1wbGllZFN0ZXAgPSBzdGVwVmFsdWU7XG4gICAgICB0aGlzLl9fcHJlY2lzaW9uID0gbnVtRGVjaW1hbHMoc3RlcFZhbHVlKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTnVtYmVyQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIHJvdW5kVG9EZWNpbWFsKHZhbHVlLCBkZWNpbWFscykge1xuICB2YXIgdGVuVG8gPSBNYXRoLnBvdygxMCwgZGVjaW1hbHMpO1xuICByZXR1cm4gTWF0aC5yb3VuZCh2YWx1ZSAqIHRlblRvKSAvIHRlblRvO1xufVxudmFyIE51bWJlckNvbnRyb2xsZXJCb3ggPSBmdW5jdGlvbiAoX051bWJlckNvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoTnVtYmVyQ29udHJvbGxlckJveCwgX051bWJlckNvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBOdW1iZXJDb250cm9sbGVyQm94KG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bWJlckNvbnRyb2xsZXJCb3gpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChOdW1iZXJDb250cm9sbGVyQm94Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVtYmVyQ29udHJvbGxlckJveCkpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSk7XG4gICAgX3RoaXMyLl9fdHJ1bmNhdGlvblN1c3BlbmRlZCA9IGZhbHNlO1xuICAgIHZhciBfdGhpcyA9IF90aGlzMjtcbiAgICB2YXIgcHJldlkgPSB2b2lkIDA7XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICB2YXIgYXR0ZW1wdGVkID0gcGFyc2VGbG9hdChfdGhpcy5fX2lucHV0LnZhbHVlKTtcbiAgICAgIGlmICghQ29tbW9uLmlzTmFOKGF0dGVtcHRlZCkpIHtcbiAgICAgICAgX3RoaXMuc2V0VmFsdWUoYXR0ZW1wdGVkKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb25GaW5pc2goKSB7XG4gICAgICBpZiAoX3RoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBfdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwoX3RoaXMsIF90aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICBvbkZpbmlzaCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlRHJhZyhlKSB7XG4gICAgICB2YXIgZGlmZiA9IHByZXZZIC0gZS5jbGllbnRZO1xuICAgICAgX3RoaXMuc2V0VmFsdWUoX3RoaXMuZ2V0VmFsdWUoKSArIGRpZmYgKiBfdGhpcy5fX2ltcGxpZWRTdGVwKTtcbiAgICAgIHByZXZZID0gZS5jbGllbnRZO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIG9uTW91c2VEcmFnKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBvbkZpbmlzaCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBvbk1vdXNlRHJhZyk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgb25Nb3VzZVVwKTtcbiAgICAgIHByZXZZID0gZS5jbGllbnRZO1xuICAgIH1cbiAgICBfdGhpczIuX19pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgX3RoaXMyLl9faW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2NoYW5nZScsIG9uQ2hhbmdlKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2JsdXInLCBvbkJsdXIpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAnbW91c2Vkb3duJywgb25Nb3VzZURvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBfdGhpcy5fX3RydW5jYXRpb25TdXNwZW5kZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmJsdXIoKTtcbiAgICAgICAgX3RoaXMuX190cnVuY2F0aW9uU3VzcGVuZGVkID0gZmFsc2U7XG4gICAgICAgIG9uRmluaXNoKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19pbnB1dCk7XG4gICAgcmV0dXJuIF90aGlzMjtcbiAgfVxuICBjcmVhdGVDbGFzcyhOdW1iZXJDb250cm9sbGVyQm94LCBbe1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgdGhpcy5fX2lucHV0LnZhbHVlID0gdGhpcy5fX3RydW5jYXRpb25TdXNwZW5kZWQgPyB0aGlzLmdldFZhbHVlKCkgOiByb3VuZFRvRGVjaW1hbCh0aGlzLmdldFZhbHVlKCksIHRoaXMuX19wcmVjaXNpb24pO1xuICAgICAgcmV0dXJuIGdldChOdW1iZXJDb250cm9sbGVyQm94LnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlckNvbnRyb2xsZXJCb3gucHJvdG90eXBlKSwgJ3VwZGF0ZURpc3BsYXknLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTnVtYmVyQ29udHJvbGxlckJveDtcbn0oTnVtYmVyQ29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIG1hcCh2LCBpMSwgaTIsIG8xLCBvMikge1xuICByZXR1cm4gbzEgKyAobzIgLSBvMSkgKiAoKHYgLSBpMSkgLyAoaTIgLSBpMSkpO1xufVxudmFyIE51bWJlckNvbnRyb2xsZXJTbGlkZXIgPSBmdW5jdGlvbiAoX051bWJlckNvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoTnVtYmVyQ29udHJvbGxlclNsaWRlciwgX051bWJlckNvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBOdW1iZXJDb250cm9sbGVyU2xpZGVyKG9iamVjdCwgcHJvcGVydHksIG1pbiwgbWF4LCBzdGVwKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgTnVtYmVyQ29udHJvbGxlclNsaWRlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE51bWJlckNvbnRyb2xsZXJTbGlkZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdW1iZXJDb250cm9sbGVyU2xpZGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5LCB7IG1pbjogbWluLCBtYXg6IG1heCwgc3RlcDogc3RlcCB9KSk7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIF90aGlzMi5fX2JhY2tncm91bmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19mb3JlZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fYmFja2dyb3VuZCwgJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgICBkb20uYmluZChfdGhpczIuX19iYWNrZ3JvdW5kLCAndG91Y2hzdGFydCcsIG9uVG91Y2hTdGFydCk7XG4gICAgZG9tLmFkZENsYXNzKF90aGlzMi5fX2JhY2tncm91bmQsICdzbGlkZXInKTtcbiAgICBkb20uYWRkQ2xhc3MoX3RoaXMyLl9fZm9yZWdyb3VuZCwgJ3NsaWRlci1mZycpO1xuICAgIGZ1bmN0aW9uIG9uTW91c2VEb3duKGUpIHtcbiAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgb25Nb3VzZURyYWcpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBvbk1vdXNlRHJhZyhlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3VzZURyYWcoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIGJnUmVjdCA9IF90aGlzLl9fYmFja2dyb3VuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF90aGlzLnNldFZhbHVlKG1hcChlLmNsaWVudFgsIGJnUmVjdC5sZWZ0LCBiZ1JlY3QucmlnaHQsIF90aGlzLl9fbWluLCBfdGhpcy5fX21heCkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIG9uTW91c2VEcmFnKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBpZiAoX3RoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBfdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwoX3RoaXMsIF90aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvblRvdWNoU3RhcnQoZSkge1xuICAgICAgaWYgKGUudG91Y2hlcy5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbiAgICAgIG9uVG91Y2hNb3ZlKGUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvblRvdWNoTW92ZShlKSB7XG4gICAgICB2YXIgY2xpZW50WCA9IGUudG91Y2hlc1swXS5jbGllbnRYO1xuICAgICAgdmFyIGJnUmVjdCA9IF90aGlzLl9fYmFja2dyb3VuZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIF90aGlzLnNldFZhbHVlKG1hcChjbGllbnRYLCBiZ1JlY3QubGVmdCwgYmdSZWN0LnJpZ2h0LCBfdGhpcy5fX21pbiwgX3RoaXMuX19tYXgpKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Ub3VjaEVuZCgpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgb25Ub3VjaE1vdmUpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIG9uVG91Y2hFbmQpO1xuICAgICAgaWYgKF90aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKF90aGlzLCBfdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBfdGhpczIuX19iYWNrZ3JvdW5kLmFwcGVuZENoaWxkKF90aGlzMi5fX2ZvcmVncm91bmQpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2JhY2tncm91bmQpO1xuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoTnVtYmVyQ29udHJvbGxlclNsaWRlciwgW3tcbiAgICBrZXk6ICd1cGRhdGVEaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgIHZhciBwY3QgPSAodGhpcy5nZXRWYWx1ZSgpIC0gdGhpcy5fX21pbikgLyAodGhpcy5fX21heCAtIHRoaXMuX19taW4pO1xuICAgICAgdGhpcy5fX2ZvcmVncm91bmQuc3R5bGUud2lkdGggPSBwY3QgKiAxMDAgKyAnJSc7XG4gICAgICByZXR1cm4gZ2V0KE51bWJlckNvbnRyb2xsZXJTbGlkZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVtYmVyQ29udHJvbGxlclNsaWRlci5wcm90b3R5cGUpLCAndXBkYXRlRGlzcGxheScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBOdW1iZXJDb250cm9sbGVyU2xpZGVyO1xufShOdW1iZXJDb250cm9sbGVyKTtcblxudmFyIEZ1bmN0aW9uQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhGdW5jdGlvbkNvbnRyb2xsZXIsIF9Db250cm9sbGVyKTtcbiAgZnVuY3Rpb24gRnVuY3Rpb25Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHksIHRleHQpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBGdW5jdGlvbkNvbnRyb2xsZXIpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChGdW5jdGlvbkNvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihGdW5jdGlvbkNvbnRyb2xsZXIpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHkpKTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgX3RoaXMyLl9fYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMyLl9fYnV0dG9uLmlubmVySFRNTCA9IHRleHQgPT09IHVuZGVmaW5lZCA/ICdGaXJlJyA6IHRleHQ7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fYnV0dG9uLCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgX3RoaXMuZmlyZSgpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICAgIGRvbS5hZGRDbGFzcyhfdGhpczIuX19idXR0b24sICdidXR0b24nKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19idXR0b24pO1xuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoRnVuY3Rpb25Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ2ZpcmUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmaXJlKCkge1xuICAgICAgaWYgKHRoaXMuX19vbkNoYW5nZSkge1xuICAgICAgICB0aGlzLl9fb25DaGFuZ2UuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2V0VmFsdWUoKS5jYWxsKHRoaXMub2JqZWN0KTtcbiAgICAgIGlmICh0aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIEZ1bmN0aW9uQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG5cbnZhciBDb2xvckNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoQ29sb3JDb250cm9sbGVyLCBfQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIENvbG9yQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sb3JDb250cm9sbGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoQ29sb3JDb250cm9sbGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQ29sb3JDb250cm9sbGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5KSk7XG4gICAgX3RoaXMyLl9fY29sb3IgPSBuZXcgQ29sb3IoX3RoaXMyLmdldFZhbHVlKCkpO1xuICAgIF90aGlzMi5fX3RlbXAgPSBuZXcgQ29sb3IoMCk7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIF90aGlzMi5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZG9tLm1ha2VTZWxlY3RhYmxlKF90aGlzMi5kb21FbGVtZW50LCBmYWxzZSk7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19zZWxlY3Rvci5jbGFzc05hbWUgPSAnc2VsZWN0b3InO1xuICAgIF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19zYXR1cmF0aW9uX2ZpZWxkLmNsYXNzTmFtZSA9ICdzYXR1cmF0aW9uLWZpZWxkJztcbiAgICBfdGhpczIuX19maWVsZF9rbm9iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMyLl9fZmllbGRfa25vYi5jbGFzc05hbWUgPSAnZmllbGQta25vYic7XG4gICAgX3RoaXMyLl9fZmllbGRfa25vYl9ib3JkZXIgPSAnMnB4IHNvbGlkICc7XG4gICAgX3RoaXMyLl9faHVlX2tub2IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19odWVfa25vYi5jbGFzc05hbWUgPSAnaHVlLWtub2InO1xuICAgIF90aGlzMi5fX2h1ZV9maWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX2h1ZV9maWVsZC5jbGFzc05hbWUgPSAnaHVlLWZpZWxkJztcbiAgICBfdGhpczIuX19pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgX3RoaXMyLl9faW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBfdGhpczIuX19pbnB1dF90ZXh0U2hhZG93ID0gJzAgMXB4IDFweCAnO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAna2V5ZG93bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAxMykge1xuICAgICAgICBvbkJsdXIuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2JsdXInLCBvbkJsdXIpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX3NlbGVjdG9yLCAnbW91c2Vkb3duJywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLmFkZENsYXNzKHRoaXMsICdkcmFnJykuYmluZCh3aW5kb3csICdtb3VzZXVwJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MoX3RoaXMuX19zZWxlY3RvciwgJ2RyYWcnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX3NlbGVjdG9yLCAndG91Y2hzdGFydCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLCAnZHJhZycpLmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvbS5yZW1vdmVDbGFzcyhfdGhpcy5fX3NlbGVjdG9yLCAnZHJhZycpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdmFyIHZhbHVlRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX3NlbGVjdG9yLnN0eWxlLCB7XG4gICAgICB3aWR0aDogJzEyMnB4JyxcbiAgICAgIGhlaWdodDogJzEwMnB4JyxcbiAgICAgIHBhZGRpbmc6ICczcHgnLFxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzIyMicsXG4gICAgICBib3hTaGFkb3c6ICcwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuMyknXG4gICAgfSk7XG4gICAgQ29tbW9uLmV4dGVuZChfdGhpczIuX19maWVsZF9rbm9iLnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTJweCcsXG4gICAgICBoZWlnaHQ6ICcxMnB4JyxcbiAgICAgIGJvcmRlcjogX3RoaXMyLl9fZmllbGRfa25vYl9ib3JkZXIgKyAoX3RoaXMyLl9fY29sb3IudiA8IDAuNSA/ICcjZmZmJyA6ICcjMDAwJyksXG4gICAgICBib3hTaGFkb3c6ICcwcHggMXB4IDNweCByZ2JhKDAsMCwwLDAuNSknLFxuICAgICAgYm9yZGVyUmFkaXVzOiAnMTJweCcsXG4gICAgICB6SW5kZXg6IDFcbiAgICB9KTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX2h1ZV9rbm9iLnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHdpZHRoOiAnMTVweCcsXG4gICAgICBoZWlnaHQ6ICcycHgnLFxuICAgICAgYm9yZGVyUmlnaHQ6ICc0cHggc29saWQgI2ZmZicsXG4gICAgICB6SW5kZXg6IDFcbiAgICB9KTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQuc3R5bGUsIHtcbiAgICAgIHdpZHRoOiAnMTAwcHgnLFxuICAgICAgaGVpZ2h0OiAnMTAwcHgnLFxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLFxuICAgICAgbWFyZ2luUmlnaHQ6ICczcHgnLFxuICAgICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJ1xuICAgIH0pO1xuICAgIENvbW1vbi5leHRlbmQodmFsdWVGaWVsZC5zdHlsZSwge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGhlaWdodDogJzEwMCUnLFxuICAgICAgYmFja2dyb3VuZDogJ25vbmUnXG4gICAgfSk7XG4gICAgbGluZWFyR3JhZGllbnQodmFsdWVGaWVsZCwgJ3RvcCcsICdyZ2JhKDAsMCwwLDApJywgJyMwMDAnKTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX2h1ZV9maWVsZC5zdHlsZSwge1xuICAgICAgd2lkdGg6ICcxNXB4JyxcbiAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JyxcbiAgICAgIGN1cnNvcjogJ25zLXJlc2l6ZScsXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogJzNweCcsXG4gICAgICByaWdodDogJzNweCdcbiAgICB9KTtcbiAgICBodWVHcmFkaWVudChfdGhpczIuX19odWVfZmllbGQpO1xuICAgIENvbW1vbi5leHRlbmQoX3RoaXMyLl9faW5wdXQuc3R5bGUsIHtcbiAgICAgIG91dGxpbmU6ICdub25lJyxcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICBjb2xvcjogJyNmZmYnLFxuICAgICAgYm9yZGVyOiAwLFxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgICAgdGV4dFNoYWRvdzogX3RoaXMyLl9faW5wdXRfdGV4dFNoYWRvdyArICdyZ2JhKDAsMCwwLDAuNyknXG4gICAgfSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZCwgJ21vdXNlZG93bicsIGZpZWxkRG93bik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZCwgJ3RvdWNoc3RhcnQnLCBmaWVsZERvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2ZpZWxkX2tub2IsICdtb3VzZWRvd24nLCBmaWVsZERvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2ZpZWxkX2tub2IsICd0b3VjaHN0YXJ0JywgZmllbGREb3duKTtcbiAgICBkb20uYmluZChfdGhpczIuX19odWVfZmllbGQsICdtb3VzZWRvd24nLCBmaWVsZERvd25IKTtcbiAgICBkb20uYmluZChfdGhpczIuX19odWVfZmllbGQsICd0b3VjaHN0YXJ0JywgZmllbGREb3duSCk7XG4gICAgZnVuY3Rpb24gZmllbGREb3duKGUpIHtcbiAgICAgIHNldFNWKGUpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgc2V0U1YpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgc2V0U1YpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2V1cCcsIGZpZWxkVXBTVik7XG4gICAgICBkb20uYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZpZWxkVXBTVik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpZWxkRG93bkgoZSkge1xuICAgICAgc2V0SChlKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIHNldEgpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgc2V0SCk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgZmllbGRVcEgpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBmaWVsZFVwSCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGZpZWxkVXBTVigpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgc2V0U1YpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaG1vdmUnLCBzZXRTVik7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBmaWVsZFVwU1YpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZpZWxkVXBTVik7XG4gICAgICBvbkZpbmlzaCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaWVsZFVwSCgpIHtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgc2V0SCk7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3RvdWNobW92ZScsIHNldEgpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZXVwJywgZmllbGRVcEgpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaGVuZCcsIGZpZWxkVXBIKTtcbiAgICAgIG9uRmluaXNoKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uQmx1cigpIHtcbiAgICAgIHZhciBpID0gaW50ZXJwcmV0KHRoaXMudmFsdWUpO1xuICAgICAgaWYgKGkgIT09IGZhbHNlKSB7XG4gICAgICAgIF90aGlzLl9fY29sb3IuX19zdGF0ZSA9IGk7XG4gICAgICAgIF90aGlzLnNldFZhbHVlKF90aGlzLl9fY29sb3IudG9PcmlnaW5hbCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSBfdGhpcy5fX2NvbG9yLnRvU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uRmluaXNoKCkge1xuICAgICAgaWYgKF90aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKF90aGlzLCBfdGhpcy5fX2NvbG9yLnRvT3JpZ2luYWwoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQuYXBwZW5kQ2hpbGQodmFsdWVGaWVsZCk7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fZmllbGRfa25vYik7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZCk7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IuYXBwZW5kQ2hpbGQoX3RoaXMyLl9faHVlX2ZpZWxkKTtcbiAgICBfdGhpczIuX19odWVfZmllbGQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9faHVlX2tub2IpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2lucHV0KTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19zZWxlY3Rvcik7XG4gICAgX3RoaXMyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICBmdW5jdGlvbiBzZXRTVihlKSB7XG4gICAgICBpZiAoZS50eXBlLmluZGV4T2YoJ3RvdWNoJykgPT09IC0xKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHZhciBmaWVsZFJlY3QgPSBfdGhpcy5fX3NhdHVyYXRpb25fZmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgX3JlZiA9IGUudG91Y2hlcyAmJiBlLnRvdWNoZXNbMF0gfHwgZSxcbiAgICAgICAgICBjbGllbnRYID0gX3JlZi5jbGllbnRYLFxuICAgICAgICAgIGNsaWVudFkgPSBfcmVmLmNsaWVudFk7XG4gICAgICB2YXIgcyA9IChjbGllbnRYIC0gZmllbGRSZWN0LmxlZnQpIC8gKGZpZWxkUmVjdC5yaWdodCAtIGZpZWxkUmVjdC5sZWZ0KTtcbiAgICAgIHZhciB2ID0gMSAtIChjbGllbnRZIC0gZmllbGRSZWN0LnRvcCkgLyAoZmllbGRSZWN0LmJvdHRvbSAtIGZpZWxkUmVjdC50b3ApO1xuICAgICAgaWYgKHYgPiAxKSB7XG4gICAgICAgIHYgPSAxO1xuICAgICAgfSBlbHNlIGlmICh2IDwgMCkge1xuICAgICAgICB2ID0gMDtcbiAgICAgIH1cbiAgICAgIGlmIChzID4gMSkge1xuICAgICAgICBzID0gMTtcbiAgICAgIH0gZWxzZSBpZiAocyA8IDApIHtcbiAgICAgICAgcyA9IDA7XG4gICAgICB9XG4gICAgICBfdGhpcy5fX2NvbG9yLnYgPSB2O1xuICAgICAgX3RoaXMuX19jb2xvci5zID0gcztcbiAgICAgIF90aGlzLnNldFZhbHVlKF90aGlzLl9fY29sb3IudG9PcmlnaW5hbCgpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0SChlKSB7XG4gICAgICBpZiAoZS50eXBlLmluZGV4T2YoJ3RvdWNoJykgPT09IC0xKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICAgIHZhciBmaWVsZFJlY3QgPSBfdGhpcy5fX2h1ZV9maWVsZC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgIHZhciBfcmVmMiA9IGUudG91Y2hlcyAmJiBlLnRvdWNoZXNbMF0gfHwgZSxcbiAgICAgICAgICBjbGllbnRZID0gX3JlZjIuY2xpZW50WTtcbiAgICAgIHZhciBoID0gMSAtIChjbGllbnRZIC0gZmllbGRSZWN0LnRvcCkgLyAoZmllbGRSZWN0LmJvdHRvbSAtIGZpZWxkUmVjdC50b3ApO1xuICAgICAgaWYgKGggPiAxKSB7XG4gICAgICAgIGggPSAxO1xuICAgICAgfSBlbHNlIGlmIChoIDwgMCkge1xuICAgICAgICBoID0gMDtcbiAgICAgIH1cbiAgICAgIF90aGlzLl9fY29sb3IuaCA9IGggKiAzNjA7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShfdGhpcy5fX2NvbG9yLnRvT3JpZ2luYWwoKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoQ29sb3JDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgdmFyIGkgPSBpbnRlcnByZXQodGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIGlmIChpICE9PSBmYWxzZSkge1xuICAgICAgICB2YXIgbWlzbWF0Y2ggPSBmYWxzZTtcbiAgICAgICAgQ29tbW9uLmVhY2goQ29sb3IuQ09NUE9ORU5UUywgZnVuY3Rpb24gKGNvbXBvbmVudCkge1xuICAgICAgICAgIGlmICghQ29tbW9uLmlzVW5kZWZpbmVkKGlbY29tcG9uZW50XSkgJiYgIUNvbW1vbi5pc1VuZGVmaW5lZCh0aGlzLl9fY29sb3IuX19zdGF0ZVtjb21wb25lbnRdKSAmJiBpW2NvbXBvbmVudF0gIT09IHRoaXMuX19jb2xvci5fX3N0YXRlW2NvbXBvbmVudF0pIHtcbiAgICAgICAgICAgIG1pc21hdGNoID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBpZiAobWlzbWF0Y2gpIHtcbiAgICAgICAgICBDb21tb24uZXh0ZW5kKHRoaXMuX19jb2xvci5fX3N0YXRlLCBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgQ29tbW9uLmV4dGVuZCh0aGlzLl9fdGVtcC5fX3N0YXRlLCB0aGlzLl9fY29sb3IuX19zdGF0ZSk7XG4gICAgICB0aGlzLl9fdGVtcC5hID0gMTtcbiAgICAgIHZhciBmbGlwID0gdGhpcy5fX2NvbG9yLnYgPCAwLjUgfHwgdGhpcy5fX2NvbG9yLnMgPiAwLjUgPyAyNTUgOiAwO1xuICAgICAgdmFyIF9mbGlwID0gMjU1IC0gZmxpcDtcbiAgICAgIENvbW1vbi5leHRlbmQodGhpcy5fX2ZpZWxkX2tub2Iuc3R5bGUsIHtcbiAgICAgICAgbWFyZ2luTGVmdDogMTAwICogdGhpcy5fX2NvbG9yLnMgLSA3ICsgJ3B4JyxcbiAgICAgICAgbWFyZ2luVG9wOiAxMDAgKiAoMSAtIHRoaXMuX19jb2xvci52KSAtIDcgKyAncHgnLFxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuX190ZW1wLnRvSGV4U3RyaW5nKCksXG4gICAgICAgIGJvcmRlcjogdGhpcy5fX2ZpZWxkX2tub2JfYm9yZGVyICsgJ3JnYignICsgZmxpcCArICcsJyArIGZsaXAgKyAnLCcgKyBmbGlwICsgJyknXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX19odWVfa25vYi5zdHlsZS5tYXJnaW5Ub3AgPSAoMSAtIHRoaXMuX19jb2xvci5oIC8gMzYwKSAqIDEwMCArICdweCc7XG4gICAgICB0aGlzLl9fdGVtcC5zID0gMTtcbiAgICAgIHRoaXMuX190ZW1wLnYgPSAxO1xuICAgICAgbGluZWFyR3JhZGllbnQodGhpcy5fX3NhdHVyYXRpb25fZmllbGQsICdsZWZ0JywgJyNmZmYnLCB0aGlzLl9fdGVtcC50b0hleFN0cmluZygpKTtcbiAgICAgIHRoaXMuX19pbnB1dC52YWx1ZSA9IHRoaXMuX19jb2xvci50b1N0cmluZygpO1xuICAgICAgQ29tbW9uLmV4dGVuZCh0aGlzLl9faW5wdXQuc3R5bGUsIHtcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLl9fY29sb3IudG9IZXhTdHJpbmcoKSxcbiAgICAgICAgY29sb3I6ICdyZ2IoJyArIGZsaXAgKyAnLCcgKyBmbGlwICsgJywnICsgZmxpcCArICcpJyxcbiAgICAgICAgdGV4dFNoYWRvdzogdGhpcy5fX2lucHV0X3RleHRTaGFkb3cgKyAncmdiYSgnICsgX2ZsaXAgKyAnLCcgKyBfZmxpcCArICcsJyArIF9mbGlwICsgJywuNyknXG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIENvbG9yQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG52YXIgdmVuZG9ycyA9IFsnLW1vei0nLCAnLW8tJywgJy13ZWJraXQtJywgJy1tcy0nLCAnJ107XG5mdW5jdGlvbiBsaW5lYXJHcmFkaWVudChlbGVtLCB4LCBhLCBiKSB7XG4gIGVsZW0uc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICBDb21tb24uZWFjaCh2ZW5kb3JzLCBmdW5jdGlvbiAodmVuZG9yKSB7XG4gICAgZWxlbS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiAnICsgdmVuZG9yICsgJ2xpbmVhci1ncmFkaWVudCgnICsgeCArICcsICcgKyBhICsgJyAwJSwgJyArIGIgKyAnIDEwMCUpOyAnO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGh1ZUdyYWRpZW50KGVsZW0pIHtcbiAgZWxlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwgI2ZmMDBmZiAxNyUsICMwMDAwZmYgMzQlLCAjMDBmZmZmIDUwJSwgIzAwZmYwMCA2NyUsICNmZmZmMDAgODQlLCAjZmYwMDAwIDEwMCUpOyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwjZmYwMGZmIDE3JSwjMDAwMGZmIDM0JSwjMDBmZmZmIDUwJSwjMDBmZjAwIDY3JSwjZmZmZjAwIDg0JSwjZmYwMDAwIDEwMCUpOyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogLW8tbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZjAwMDAgMCUsI2ZmMDBmZiAxNyUsIzAwMDBmZiAzNCUsIzAwZmZmZiA1MCUsIzAwZmYwMCA2NyUsI2ZmZmYwMCA4NCUsI2ZmMDAwMCAxMDAlKTsnO1xuICBlbGVtLnN0eWxlLmNzc1RleHQgKz0gJ2JhY2tncm91bmQ6IC1tcy1saW5lYXItZ3JhZGllbnQodG9wLCAgI2ZmMDAwMCAwJSwjZmYwMGZmIDE3JSwjMDAwMGZmIDM0JSwjMDBmZmZmIDUwJSwjMDBmZjAwIDY3JSwjZmZmZjAwIDg0JSwjZmYwMDAwIDEwMCUpOyc7XG4gIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZjAwMDAgMCUsI2ZmMDBmZiAxNyUsIzAwMDBmZiAzNCUsIzAwZmZmZiA1MCUsIzAwZmYwMCA2NyUsI2ZmZmYwMCA4NCUsI2ZmMDAwMCAxMDAlKTsnO1xufVxuXG52YXIgY3NzID0ge1xuICBsb2FkOiBmdW5jdGlvbiBsb2FkKHVybCwgaW5kb2MpIHtcbiAgICB2YXIgZG9jID0gaW5kb2MgfHwgZG9jdW1lbnQ7XG4gICAgdmFyIGxpbmsgPSBkb2MuY3JlYXRlRWxlbWVudCgnbGluaycpO1xuICAgIGxpbmsudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgbGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG4gICAgbGluay5ocmVmID0gdXJsO1xuICAgIGRvYy5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKGxpbmspO1xuICB9LFxuICBpbmplY3Q6IGZ1bmN0aW9uIGluamVjdChjc3NDb250ZW50LCBpbmRvYykge1xuICAgIHZhciBkb2MgPSBpbmRvYyB8fCBkb2N1bWVudDtcbiAgICB2YXIgaW5qZWN0ZWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIGluamVjdGVkLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIGluamVjdGVkLmlubmVySFRNTCA9IGNzc0NvbnRlbnQ7XG4gICAgdmFyIGhlYWQgPSBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICB0cnkge1xuICAgICAgaGVhZC5hcHBlbmRDaGlsZChpbmplY3RlZCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgIH1cbiAgfVxufTtcblxudmFyIHNhdmVEaWFsb2dDb250ZW50cyA9IFwiPGRpdiBpZD1cXFwiZGctc2F2ZVxcXCIgY2xhc3M9XFxcImRnIGRpYWxvZ3VlXFxcIj5cXG5cXG4gIEhlcmUncyB0aGUgbmV3IGxvYWQgcGFyYW1ldGVyIGZvciB5b3VyIDxjb2RlPkdVSTwvY29kZT4ncyBjb25zdHJ1Y3RvcjpcXG5cXG4gIDx0ZXh0YXJlYSBpZD1cXFwiZGctbmV3LWNvbnN0cnVjdG9yXFxcIj48L3RleHRhcmVhPlxcblxcbiAgPGRpdiBpZD1cXFwiZGctc2F2ZS1sb2NhbGx5XFxcIj5cXG5cXG4gICAgPGlucHV0IGlkPVxcXCJkZy1sb2NhbC1zdG9yYWdlXFxcIiB0eXBlPVxcXCJjaGVja2JveFxcXCIvPiBBdXRvbWF0aWNhbGx5IHNhdmVcXG4gICAgdmFsdWVzIHRvIDxjb2RlPmxvY2FsU3RvcmFnZTwvY29kZT4gb24gZXhpdC5cXG5cXG4gICAgPGRpdiBpZD1cXFwiZGctbG9jYWwtZXhwbGFpblxcXCI+VGhlIHZhbHVlcyBzYXZlZCB0byA8Y29kZT5sb2NhbFN0b3JhZ2U8L2NvZGU+IHdpbGxcXG4gICAgICBvdmVycmlkZSB0aG9zZSBwYXNzZWQgdG8gPGNvZGU+ZGF0LkdVSTwvY29kZT4ncyBjb25zdHJ1Y3Rvci4gVGhpcyBtYWtlcyBpdFxcbiAgICAgIGVhc2llciB0byB3b3JrIGluY3JlbWVudGFsbHksIGJ1dCA8Y29kZT5sb2NhbFN0b3JhZ2U8L2NvZGU+IGlzIGZyYWdpbGUsXFxuICAgICAgYW5kIHlvdXIgZnJpZW5kcyBtYXkgbm90IHNlZSB0aGUgc2FtZSB2YWx1ZXMgeW91IGRvLlxcblxcbiAgICA8L2Rpdj5cXG5cXG4gIDwvZGl2PlxcblxcbjwvZGl2PlwiO1xuXG52YXIgQ29udHJvbGxlckZhY3RvcnkgPSBmdW5jdGlvbiBDb250cm9sbGVyRmFjdG9yeShvYmplY3QsIHByb3BlcnR5KSB7XG4gIHZhciBpbml0aWFsVmFsdWUgPSBvYmplY3RbcHJvcGVydHldO1xuICBpZiAoQ29tbW9uLmlzQXJyYXkoYXJndW1lbnRzWzJdKSB8fCBDb21tb24uaXNPYmplY3QoYXJndW1lbnRzWzJdKSkge1xuICAgIHJldHVybiBuZXcgT3B0aW9uQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5LCBhcmd1bWVudHNbMl0pO1xuICB9XG4gIGlmIChDb21tb24uaXNOdW1iZXIoaW5pdGlhbFZhbHVlKSkge1xuICAgIGlmIChDb21tb24uaXNOdW1iZXIoYXJndW1lbnRzWzJdKSAmJiBDb21tb24uaXNOdW1iZXIoYXJndW1lbnRzWzNdKSkge1xuICAgICAgaWYgKENvbW1vbi5pc051bWJlcihhcmd1bWVudHNbNF0pKSB7XG4gICAgICAgIHJldHVybiBuZXcgTnVtYmVyQ29udHJvbGxlclNsaWRlcihvYmplY3QsIHByb3BlcnR5LCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSwgYXJndW1lbnRzWzRdKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgTnVtYmVyQ29udHJvbGxlclNsaWRlcihvYmplY3QsIHByb3BlcnR5LCBhcmd1bWVudHNbMl0sIGFyZ3VtZW50c1szXSk7XG4gICAgfVxuICAgIGlmIChDb21tb24uaXNOdW1iZXIoYXJndW1lbnRzWzRdKSkge1xuICAgICAgcmV0dXJuIG5ldyBOdW1iZXJDb250cm9sbGVyQm94KG9iamVjdCwgcHJvcGVydHksIHsgbWluOiBhcmd1bWVudHNbMl0sIG1heDogYXJndW1lbnRzWzNdLCBzdGVwOiBhcmd1bWVudHNbNF0gfSk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgTnVtYmVyQ29udHJvbGxlckJveChvYmplY3QsIHByb3BlcnR5LCB7IG1pbjogYXJndW1lbnRzWzJdLCBtYXg6IGFyZ3VtZW50c1szXSB9KTtcbiAgfVxuICBpZiAoQ29tbW9uLmlzU3RyaW5nKGluaXRpYWxWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IFN0cmluZ0NvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSk7XG4gIH1cbiAgaWYgKENvbW1vbi5pc0Z1bmN0aW9uKGluaXRpYWxWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5LCAnJyk7XG4gIH1cbiAgaWYgKENvbW1vbi5pc0Jvb2xlYW4oaW5pdGlhbFZhbHVlKSkge1xuICAgIHJldHVybiBuZXcgQm9vbGVhbkNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spIHtcbiAgc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbn1cbnZhciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tc1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCByZXF1ZXN0QW5pbWF0aW9uRnJhbWU7XG5cbnZhciBDZW50ZXJlZERpdiA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2VudGVyZWREaXYoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ2VudGVyZWREaXYpO1xuICAgIHRoaXMuYmFja2dyb3VuZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBDb21tb24uZXh0ZW5kKHRoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUsIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3JnYmEoMCwwLDAsMC44KScsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgZGlzcGxheTogJ25vbmUnLFxuICAgICAgekluZGV4OiAnMTAwMCcsXG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgV2Via2l0VHJhbnNpdGlvbjogJ29wYWNpdHkgMC4ycyBsaW5lYXInLFxuICAgICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgMC4ycyBsaW5lYXInXG4gICAgfSk7XG4gICAgZG9tLm1ha2VGdWxsc2NyZWVuKHRoaXMuYmFja2dyb3VuZEVsZW1lbnQpO1xuICAgIHRoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIENvbW1vbi5leHRlbmQodGhpcy5kb21FbGVtZW50LnN0eWxlLCB7XG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIHpJbmRleDogJzEwMDEnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIFdlYmtpdFRyYW5zaXRpb246ICctd2Via2l0LXRyYW5zZm9ybSAwLjJzIGVhc2Utb3V0LCBvcGFjaXR5IDAuMnMgbGluZWFyJyxcbiAgICAgIHRyYW5zaXRpb246ICd0cmFuc2Zvcm0gMC4ycyBlYXNlLW91dCwgb3BhY2l0eSAwLjJzIGxpbmVhcidcbiAgICB9KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuYmFja2dyb3VuZEVsZW1lbnQpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIGRvbS5iaW5kKHRoaXMuYmFja2dyb3VuZEVsZW1lbnQsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmhpZGUoKTtcbiAgICB9KTtcbiAgfVxuICBjcmVhdGVDbGFzcyhDZW50ZXJlZERpdiwgW3tcbiAgICBrZXk6ICdzaG93JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2hvdygpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICB0aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcbiAgICAgIHRoaXMubGF5b3V0KCk7XG4gICAgICBDb21tb24uZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgX3RoaXMuZG9tRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgICAgX3RoaXMuZG9tRWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnc2NhbGUoMSknO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaGlkZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdmFyIGhpZGUgPSBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgICBfdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIF90aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvbS51bmJpbmQoX3RoaXMuZG9tRWxlbWVudCwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoaWRlKTtcbiAgICAgICAgZG9tLnVuYmluZChfdGhpcy5kb21FbGVtZW50LCAndHJhbnNpdGlvbmVuZCcsIGhpZGUpO1xuICAgICAgICBkb20udW5iaW5kKF90aGlzLmRvbUVsZW1lbnQsICdvVHJhbnNpdGlvbkVuZCcsIGhpZGUpO1xuICAgICAgfTtcbiAgICAgIGRvbS5iaW5kKHRoaXMuZG9tRWxlbWVudCwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCBoaWRlKTtcbiAgICAgIGRvbS5iaW5kKHRoaXMuZG9tRWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCBoaWRlKTtcbiAgICAgIGRvbS5iaW5kKHRoaXMuZG9tRWxlbWVudCwgJ29UcmFuc2l0aW9uRW5kJywgaGlkZSk7XG4gICAgICB0aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLndlYmtpdFRyYW5zZm9ybSA9ICdzY2FsZSgxLjEpJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdsYXlvdXQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsYXlvdXQoKSB7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9IHdpbmRvdy5pbm5lcldpZHRoIC8gMiAtIGRvbS5nZXRXaWR0aCh0aGlzLmRvbUVsZW1lbnQpIC8gMiArICdweCc7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gd2luZG93LmlubmVySGVpZ2h0IC8gMiAtIGRvbS5nZXRIZWlnaHQodGhpcy5kb21FbGVtZW50KSAvIDIgKyAncHgnO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ2VudGVyZWREaXY7XG59KCk7XG5cbnZhciBzdHlsZVNoZWV0ID0gX19fJGluc2VydFN0eWxlKFwiLmRnIHVse2xpc3Qtc3R5bGU6bm9uZTttYXJnaW46MDtwYWRkaW5nOjA7d2lkdGg6MTAwJTtjbGVhcjpib3RofS5kZy5hY3twb3NpdGlvbjpmaXhlZDt0b3A6MDtsZWZ0OjA7cmlnaHQ6MDtoZWlnaHQ6MDt6LWluZGV4OjB9LmRnOm5vdCguYWMpIC5tYWlue292ZXJmbG93OmhpZGRlbn0uZGcubWFpbnstd2Via2l0LXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyOy1vLXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyOy1tb3otdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7dHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXJ9LmRnLm1haW4udGFsbGVyLXRoYW4td2luZG93e292ZXJmbG93LXk6YXV0b30uZGcubWFpbi50YWxsZXItdGhhbi13aW5kb3cgLmNsb3NlLWJ1dHRvbntvcGFjaXR5OjE7bWFyZ2luLXRvcDotMXB4O2JvcmRlci10b3A6MXB4IHNvbGlkICMyYzJjMmN9LmRnLm1haW4gdWwuY2xvc2VkIC5jbG9zZS1idXR0b257b3BhY2l0eToxICFpbXBvcnRhbnR9LmRnLm1haW46aG92ZXIgLmNsb3NlLWJ1dHRvbiwuZGcubWFpbiAuY2xvc2UtYnV0dG9uLmRyYWd7b3BhY2l0eToxfS5kZy5tYWluIC5jbG9zZS1idXR0b257LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcjstby10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcjstbW96LXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyO3RyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyO2JvcmRlcjowO2xpbmUtaGVpZ2h0OjE5cHg7aGVpZ2h0OjIwcHg7Y3Vyc29yOnBvaW50ZXI7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1jb2xvcjojMDAwfS5kZy5tYWluIC5jbG9zZS1idXR0b24uY2xvc2UtdG9we3Bvc2l0aW9uOnJlbGF0aXZlfS5kZy5tYWluIC5jbG9zZS1idXR0b24uY2xvc2UtYm90dG9te3Bvc2l0aW9uOmFic29sdXRlfS5kZy5tYWluIC5jbG9zZS1idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojMTExfS5kZy5he2Zsb2F0OnJpZ2h0O21hcmdpbi1yaWdodDoxNXB4O292ZXJmbG93LXk6dmlzaWJsZX0uZGcuYS5oYXMtc2F2ZT51bC5jbG9zZS10b3B7bWFyZ2luLXRvcDowfS5kZy5hLmhhcy1zYXZlPnVsLmNsb3NlLWJvdHRvbXttYXJnaW4tdG9wOjI3cHh9LmRnLmEuaGFzLXNhdmU+dWwuY2xvc2Vke21hcmdpbi10b3A6MH0uZGcuYSAuc2F2ZS1yb3d7dG9wOjA7ei1pbmRleDoxMDAyfS5kZy5hIC5zYXZlLXJvdy5jbG9zZS10b3B7cG9zaXRpb246cmVsYXRpdmV9LmRnLmEgLnNhdmUtcm93LmNsb3NlLWJvdHRvbXtwb3NpdGlvbjpmaXhlZH0uZGcgbGl7LXdlYmtpdC10cmFuc2l0aW9uOmhlaWdodCAuMXMgZWFzZS1vdXQ7LW8tdHJhbnNpdGlvbjpoZWlnaHQgLjFzIGVhc2Utb3V0Oy1tb3otdHJhbnNpdGlvbjpoZWlnaHQgLjFzIGVhc2Utb3V0O3RyYW5zaXRpb246aGVpZ2h0IC4xcyBlYXNlLW91dDstd2Via2l0LXRyYW5zaXRpb246b3ZlcmZsb3cgLjFzIGxpbmVhcjstby10cmFuc2l0aW9uOm92ZXJmbG93IC4xcyBsaW5lYXI7LW1vei10cmFuc2l0aW9uOm92ZXJmbG93IC4xcyBsaW5lYXI7dHJhbnNpdGlvbjpvdmVyZmxvdyAuMXMgbGluZWFyfS5kZyBsaTpub3QoLmZvbGRlcil7Y3Vyc29yOmF1dG87aGVpZ2h0OjI3cHg7bGluZS1oZWlnaHQ6MjdweDtwYWRkaW5nOjAgNHB4IDAgNXB4fS5kZyBsaS5mb2xkZXJ7cGFkZGluZzowO2JvcmRlci1sZWZ0OjRweCBzb2xpZCByZ2JhKDAsMCwwLDApfS5kZyBsaS50aXRsZXtjdXJzb3I6cG9pbnRlcjttYXJnaW4tbGVmdDotNHB4fS5kZyAuY2xvc2VkIGxpOm5vdCgudGl0bGUpLC5kZyAuY2xvc2VkIHVsIGxpLC5kZyAuY2xvc2VkIHVsIGxpPip7aGVpZ2h0OjA7b3ZlcmZsb3c6aGlkZGVuO2JvcmRlcjowfS5kZyAuY3J7Y2xlYXI6Ym90aDtwYWRkaW5nLWxlZnQ6M3B4O2hlaWdodDoyN3B4O292ZXJmbG93OmhpZGRlbn0uZGcgLnByb3BlcnR5LW5hbWV7Y3Vyc29yOmRlZmF1bHQ7ZmxvYXQ6bGVmdDtjbGVhcjpsZWZ0O3dpZHRoOjQwJTtvdmVyZmxvdzpoaWRkZW47dGV4dC1vdmVyZmxvdzplbGxpcHNpc30uZGcgLmNyLmZ1bmN0aW9uIC5wcm9wZXJ0eS1uYW1le3dpZHRoOjEwMCV9LmRnIC5je2Zsb2F0OmxlZnQ7d2lkdGg6NjAlO3Bvc2l0aW9uOnJlbGF0aXZlfS5kZyAuYyBpbnB1dFt0eXBlPXRleHRde2JvcmRlcjowO21hcmdpbi10b3A6NHB4O3BhZGRpbmc6M3B4O3dpZHRoOjEwMCU7ZmxvYXQ6cmlnaHR9LmRnIC5oYXMtc2xpZGVyIGlucHV0W3R5cGU9dGV4dF17d2lkdGg6MzAlO21hcmdpbi1sZWZ0OjB9LmRnIC5zbGlkZXJ7ZmxvYXQ6bGVmdDt3aWR0aDo2NiU7bWFyZ2luLWxlZnQ6LTVweDttYXJnaW4tcmlnaHQ6MDtoZWlnaHQ6MTlweDttYXJnaW4tdG9wOjRweH0uZGcgLnNsaWRlci1mZ3toZWlnaHQ6MTAwJX0uZGcgLmMgaW5wdXRbdHlwZT1jaGVja2JveF17bWFyZ2luLXRvcDo3cHh9LmRnIC5jIHNlbGVjdHttYXJnaW4tdG9wOjVweH0uZGcgLmNyLmZ1bmN0aW9uLC5kZyAuY3IuZnVuY3Rpb24gLnByb3BlcnR5LW5hbWUsLmRnIC5jci5mdW5jdGlvbiAqLC5kZyAuY3IuYm9vbGVhbiwuZGcgLmNyLmJvb2xlYW4gKntjdXJzb3I6cG9pbnRlcn0uZGcgLmNyLmNvbG9ye292ZXJmbG93OnZpc2libGV9LmRnIC5zZWxlY3RvcntkaXNwbGF5Om5vbmU7cG9zaXRpb246YWJzb2x1dGU7bWFyZ2luLWxlZnQ6LTlweDttYXJnaW4tdG9wOjIzcHg7ei1pbmRleDoxMH0uZGcgLmM6aG92ZXIgLnNlbGVjdG9yLC5kZyAuc2VsZWN0b3IuZHJhZ3tkaXNwbGF5OmJsb2NrfS5kZyBsaS5zYXZlLXJvd3twYWRkaW5nOjB9LmRnIGxpLnNhdmUtcm93IC5idXR0b257ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzowcHggNnB4fS5kZy5kaWFsb2d1ZXtiYWNrZ3JvdW5kLWNvbG9yOiMyMjI7d2lkdGg6NDYwcHg7cGFkZGluZzoxNXB4O2ZvbnQtc2l6ZToxM3B4O2xpbmUtaGVpZ2h0OjE1cHh9I2RnLW5ldy1jb25zdHJ1Y3RvcntwYWRkaW5nOjEwcHg7Y29sb3I6IzIyMjtmb250LWZhbWlseTpNb25hY28sIG1vbm9zcGFjZTtmb250LXNpemU6MTBweDtib3JkZXI6MDtyZXNpemU6bm9uZTtib3gtc2hhZG93Omluc2V0IDFweCAxcHggMXB4ICM4ODg7d29yZC13cmFwOmJyZWFrLXdvcmQ7bWFyZ2luOjEycHggMDtkaXNwbGF5OmJsb2NrO3dpZHRoOjQ0MHB4O292ZXJmbG93LXk6c2Nyb2xsO2hlaWdodDoxMDBweDtwb3NpdGlvbjpyZWxhdGl2ZX0jZGctbG9jYWwtZXhwbGFpbntkaXNwbGF5Om5vbmU7Zm9udC1zaXplOjExcHg7bGluZS1oZWlnaHQ6MTdweDtib3JkZXItcmFkaXVzOjNweDtiYWNrZ3JvdW5kLWNvbG9yOiMzMzM7cGFkZGluZzo4cHg7bWFyZ2luLXRvcDoxMHB4fSNkZy1sb2NhbC1leHBsYWluIGNvZGV7Zm9udC1zaXplOjEwcHh9I2RhdC1ndWktc2F2ZS1sb2NhbGx5e2Rpc3BsYXk6bm9uZX0uZGd7Y29sb3I6I2VlZTtmb250OjExcHggJ0x1Y2lkYSBHcmFuZGUnLCBzYW5zLXNlcmlmO3RleHQtc2hhZG93OjAgLTFweCAwICMxMTF9LmRnLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFye3dpZHRoOjVweDtiYWNrZ3JvdW5kOiMxYTFhMWF9LmRnLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLWNvcm5lcntoZWlnaHQ6MDtkaXNwbGF5Om5vbmV9LmRnLm1haW46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1ie2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6IzY3Njc2N30uZGcgbGk6bm90KC5mb2xkZXIpe2JhY2tncm91bmQ6IzFhMWExYTtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMmMyYzJjfS5kZyBsaS5zYXZlLXJvd3tsaW5lLWhlaWdodDoyNXB4O2JhY2tncm91bmQ6I2RhZDVjYjtib3JkZXI6MH0uZGcgbGkuc2F2ZS1yb3cgc2VsZWN0e21hcmdpbi1sZWZ0OjVweDt3aWR0aDoxMDhweH0uZGcgbGkuc2F2ZS1yb3cgLmJ1dHRvbnttYXJnaW4tbGVmdDo1cHg7bWFyZ2luLXRvcDoxcHg7Ym9yZGVyLXJhZGl1czoycHg7Zm9udC1zaXplOjlweDtsaW5lLWhlaWdodDo3cHg7cGFkZGluZzo0cHggNHB4IDVweCA0cHg7YmFja2dyb3VuZDojYzViZGFkO2NvbG9yOiNmZmY7dGV4dC1zaGFkb3c6MCAxcHggMCAjYjBhNThmO2JveC1zaGFkb3c6MCAtMXB4IDAgI2IwYTU4ZjtjdXJzb3I6cG9pbnRlcn0uZGcgbGkuc2F2ZS1yb3cgLmJ1dHRvbi5nZWFyc3tiYWNrZ3JvdW5kOiNjNWJkYWQgdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXNBQUFBTkNBWUFBQUIvOVpRN0FBQUFHWFJGV0hSVGIyWjBkMkZ5WlFCQlpHOWlaU0JKYldGblpWSmxZV1I1Y2NsbFBBQUFBUUpKUkVGVWVOcGlZS0FVL1AvL1B3R0lDL0FwQ0FCaUJTQVcrSThBQ2xBY2dLeFE0VDlob01BRVVyeHgyUVNHTjYrZWdEWCsvdldUNGU3TjgyQU1Zb1BBeC9ldndXb1lvU1liQUNYMnM3S3hDeHpjc2V6RGgzZXZGb0RFQllURUVxeWNnZ1dBekE5QXVVU1FRZ2VZUGE5ZlB2Ni9ZV20vQWN4NUlQYjd0eS9mdytRWmJsdzY3dkRzOFIwWUh5UWhnT2J4K3lBSmtCcW1HNWRQUERoMWFQT0dSL2V1Z1cwRzR2bElvVElmeUZjQStRZWtoaEhKaFBkUXhiaUFJZ3VNQlRRWnJQRDcxMDhNNnJvV1lERlFpSUFBdjZBb3cvMWJGd1hnaXMrZjJMVUF5bndvSWFOY3o4WE54M0RsN01FSlVER1FweDlndFE4WUN1ZUIrRDI2T0VDQUFRRGFkdDdlNDZENDJRQUFBQUJKUlU1RXJrSmdnZz09KSAycHggMXB4IG5vLXJlcGVhdDtoZWlnaHQ6N3B4O3dpZHRoOjhweH0uZGcgbGkuc2F2ZS1yb3cgLmJ1dHRvbjpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNiYWIxOWU7Ym94LXNoYWRvdzowIC0xcHggMCAjYjBhNThmfS5kZyBsaS5mb2xkZXJ7Ym9yZGVyLWJvdHRvbTowfS5kZyBsaS50aXRsZXtwYWRkaW5nLWxlZnQ6MTZweDtiYWNrZ3JvdW5kOiMwMDAgdXJsKGRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEJRQUZBSkVBQVAvLy8vUHo4Ly8vLy8vLy95SDVCQUVBQUFJQUxBQUFBQUFGQUFVQUFBSUlsSStoS2dGeG9DZ0FPdz09KSA2cHggMTBweCBuby1yZXBlYXQ7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjIpfS5kZyAuY2xvc2VkIGxpLnRpdGxle2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvZ2lmO2Jhc2U2NCxSMGxHT0RsaEJRQUZBSkVBQVAvLy8vUHo4Ly8vLy8vLy95SDVCQUVBQUFJQUxBQUFBQUFGQUFVQUFBSUlsR0lXcU1DYldBRUFPdz09KX0uZGcgLmNyLmJvb2xlYW57Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICM4MDY3ODd9LmRnIC5jci5jb2xvcntib3JkZXItbGVmdDozcHggc29saWR9LmRnIC5jci5mdW5jdGlvbntib3JkZXItbGVmdDozcHggc29saWQgI2U2MWQ1Zn0uZGcgLmNyLm51bWJlcntib3JkZXItbGVmdDozcHggc29saWQgIzJGQTFENn0uZGcgLmNyLm51bWJlciBpbnB1dFt0eXBlPXRleHRde2NvbG9yOiMyRkExRDZ9LmRnIC5jci5zdHJpbmd7Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICMxZWQzNmZ9LmRnIC5jci5zdHJpbmcgaW5wdXRbdHlwZT10ZXh0XXtjb2xvcjojMWVkMzZmfS5kZyAuY3IuZnVuY3Rpb246aG92ZXIsLmRnIC5jci5ib29sZWFuOmhvdmVye2JhY2tncm91bmQ6IzExMX0uZGcgLmMgaW5wdXRbdHlwZT10ZXh0XXtiYWNrZ3JvdW5kOiMzMDMwMzA7b3V0bGluZTpub25lfS5kZyAuYyBpbnB1dFt0eXBlPXRleHRdOmhvdmVye2JhY2tncm91bmQ6IzNjM2MzY30uZGcgLmMgaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tiYWNrZ3JvdW5kOiM0OTQ5NDk7Y29sb3I6I2ZmZn0uZGcgLmMgLnNsaWRlcntiYWNrZ3JvdW5kOiMzMDMwMzA7Y3Vyc29yOmV3LXJlc2l6ZX0uZGcgLmMgLnNsaWRlci1mZ3tiYWNrZ3JvdW5kOiMyRkExRDY7bWF4LXdpZHRoOjEwMCV9LmRnIC5jIC5zbGlkZXI6aG92ZXJ7YmFja2dyb3VuZDojM2MzYzNjfS5kZyAuYyAuc2xpZGVyOmhvdmVyIC5zbGlkZXItZmd7YmFja2dyb3VuZDojNDRhYmRhfVxcblwiKTtcblxuY3NzLmluamVjdChzdHlsZVNoZWV0KTtcbnZhciBDU1NfTkFNRVNQQUNFID0gJ2RnJztcbnZhciBISURFX0tFWV9DT0RFID0gNzI7XG52YXIgQ0xPU0VfQlVUVE9OX0hFSUdIVCA9IDIwO1xudmFyIERFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRSA9ICdEZWZhdWx0JztcbnZhciBTVVBQT1JUU19MT0NBTF9TVE9SQUdFID0gZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIHJldHVybiAhIXdpbmRvdy5sb2NhbFN0b3JhZ2U7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn0oKTtcbnZhciBTQVZFX0RJQUxPR1VFID0gdm9pZCAwO1xudmFyIGF1dG9QbGFjZVZpcmdpbiA9IHRydWU7XG52YXIgYXV0b1BsYWNlQ29udGFpbmVyID0gdm9pZCAwO1xudmFyIGhpZGUgPSBmYWxzZTtcbnZhciBoaWRlYWJsZUd1aXMgPSBbXTtcbnZhciBHVUkgPSBmdW5jdGlvbiBHVUkocGFycykge1xuICB2YXIgX3RoaXMgPSB0aGlzO1xuICB2YXIgcGFyYW1zID0gcGFycyB8fCB7fTtcbiAgdGhpcy5kb21FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRoaXMuX191bCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gIHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9fdWwpO1xuICBkb20uYWRkQ2xhc3ModGhpcy5kb21FbGVtZW50LCBDU1NfTkFNRVNQQUNFKTtcbiAgdGhpcy5fX2ZvbGRlcnMgPSB7fTtcbiAgdGhpcy5fX2NvbnRyb2xsZXJzID0gW107XG4gIHRoaXMuX19yZW1lbWJlcmVkT2JqZWN0cyA9IFtdO1xuICB0aGlzLl9fcmVtZW1iZXJlZE9iamVjdEluZGVjZXNUb0NvbnRyb2xsZXJzID0gW107XG4gIHRoaXMuX19saXN0ZW5pbmcgPSBbXTtcbiAgcGFyYW1zID0gQ29tbW9uLmRlZmF1bHRzKHBhcmFtcywge1xuICAgIGNsb3NlT25Ub3A6IGZhbHNlLFxuICAgIGF1dG9QbGFjZTogdHJ1ZSxcbiAgICB3aWR0aDogR1VJLkRFRkFVTFRfV0lEVEhcbiAgfSk7XG4gIHBhcmFtcyA9IENvbW1vbi5kZWZhdWx0cyhwYXJhbXMsIHtcbiAgICByZXNpemFibGU6IHBhcmFtcy5hdXRvUGxhY2UsXG4gICAgaGlkZWFibGU6IHBhcmFtcy5hdXRvUGxhY2VcbiAgfSk7XG4gIGlmICghQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5sb2FkKSkge1xuICAgIGlmIChwYXJhbXMucHJlc2V0KSB7XG4gICAgICBwYXJhbXMubG9hZC5wcmVzZXQgPSBwYXJhbXMucHJlc2V0O1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBwYXJhbXMubG9hZCA9IHsgcHJlc2V0OiBERUZBVUxUX0RFRkFVTFRfUFJFU0VUX05BTUUgfTtcbiAgfVxuICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5wYXJlbnQpICYmIHBhcmFtcy5oaWRlYWJsZSkge1xuICAgIGhpZGVhYmxlR3Vpcy5wdXNoKHRoaXMpO1xuICB9XG4gIHBhcmFtcy5yZXNpemFibGUgPSBDb21tb24uaXNVbmRlZmluZWQocGFyYW1zLnBhcmVudCkgJiYgcGFyYW1zLnJlc2l6YWJsZTtcbiAgaWYgKHBhcmFtcy5hdXRvUGxhY2UgJiYgQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5zY3JvbGxhYmxlKSkge1xuICAgIHBhcmFtcy5zY3JvbGxhYmxlID0gdHJ1ZTtcbiAgfVxuICB2YXIgdXNlTG9jYWxTdG9yYWdlID0gU1VQUE9SVFNfTE9DQUxfU1RPUkFHRSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShnZXRMb2NhbFN0b3JhZ2VIYXNoKHRoaXMsICdpc0xvY2FsJykpID09PSAndHJ1ZSc7XG4gIHZhciBzYXZlVG9Mb2NhbFN0b3JhZ2UgPSB2b2lkIDA7XG4gIHZhciB0aXRsZVJvdyA9IHZvaWQgMDtcbiAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGhpcyxcbiAge1xuICAgIHBhcmVudDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMucGFyZW50O1xuICAgICAgfVxuICAgIH0sXG4gICAgc2Nyb2xsYWJsZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuc2Nyb2xsYWJsZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGF1dG9QbGFjZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuYXV0b1BsYWNlO1xuICAgICAgfVxuICAgIH0sXG4gICAgY2xvc2VPblRvcDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuY2xvc2VPblRvcDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHByZXNldDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIGlmIChfdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZ2V0Um9vdCgpLnByZXNldDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGFyYW1zLmxvYWQucHJlc2V0O1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgICAgaWYgKF90aGlzLnBhcmVudCkge1xuICAgICAgICAgIF90aGlzLmdldFJvb3QoKS5wcmVzZXQgPSB2O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmFtcy5sb2FkLnByZXNldCA9IHY7XG4gICAgICAgIH1cbiAgICAgICAgc2V0UHJlc2V0U2VsZWN0SW5kZXgodGhpcyk7XG4gICAgICAgIF90aGlzLnJldmVydCgpO1xuICAgICAgfVxuICAgIH0sXG4gICAgd2lkdGg6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLndpZHRoO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgICAgcGFyYW1zLndpZHRoID0gdjtcbiAgICAgICAgc2V0V2lkdGgoX3RoaXMsIHYpO1xuICAgICAgfVxuICAgIH0sXG4gICAgbmFtZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMubmFtZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgICAgIHBhcmFtcy5uYW1lID0gdjtcbiAgICAgICAgaWYgKHRpdGxlUm93KSB7XG4gICAgICAgICAgdGl0bGVSb3cuaW5uZXJIVE1MID0gcGFyYW1zLm5hbWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NlZDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMuY2xvc2VkO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICAgICAgcGFyYW1zLmNsb3NlZCA9IHY7XG4gICAgICAgIGlmIChwYXJhbXMuY2xvc2VkKSB7XG4gICAgICAgICAgZG9tLmFkZENsYXNzKF90aGlzLl9fdWwsIEdVSS5DTEFTU19DTE9TRUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRvbS5yZW1vdmVDbGFzcyhfdGhpcy5fX3VsLCBHVUkuQ0xBU1NfQ0xPU0VEKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XG4gICAgICAgIGlmIChfdGhpcy5fX2Nsb3NlQnV0dG9uKSB7XG4gICAgICAgICAgX3RoaXMuX19jbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSB2ID8gR1VJLlRFWFRfT1BFTiA6IEdVSS5URVhUX0NMT1NFRDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgbG9hZDoge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiBwYXJhbXMubG9hZDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHVzZUxvY2FsU3RvcmFnZToge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgICAgIHJldHVybiB1c2VMb2NhbFN0b3JhZ2U7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEoYm9vbCkge1xuICAgICAgICBpZiAoU1VQUE9SVFNfTE9DQUxfU1RPUkFHRSkge1xuICAgICAgICAgIHVzZUxvY2FsU3RvcmFnZSA9IGJvb2w7XG4gICAgICAgICAgaWYgKGJvb2wpIHtcbiAgICAgICAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ3VubG9hZCcsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvbS51bmJpbmQod2luZG93LCAndW5sb2FkJywgc2F2ZVRvTG9jYWxTdG9yYWdlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZ2V0TG9jYWxTdG9yYWdlSGFzaChfdGhpcywgJ2lzTG9jYWwnKSwgYm9vbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5wYXJlbnQpKSB7XG4gICAgdGhpcy5jbG9zZWQgPSBwYXJhbXMuY2xvc2VkIHx8IGZhbHNlO1xuICAgIGRvbS5hZGRDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIEdVSS5DTEFTU19NQUlOKTtcbiAgICBkb20ubWFrZVNlbGVjdGFibGUodGhpcy5kb21FbGVtZW50LCBmYWxzZSk7XG4gICAgaWYgKFNVUFBPUlRTX0xPQ0FMX1NUT1JBR0UpIHtcbiAgICAgIGlmICh1c2VMb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgX3RoaXMudXNlTG9jYWxTdG9yYWdlID0gdHJ1ZTtcbiAgICAgICAgdmFyIHNhdmVkR3VpID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0TG9jYWxTdG9yYWdlSGFzaCh0aGlzLCAnZ3VpJykpO1xuICAgICAgICBpZiAoc2F2ZWRHdWkpIHtcbiAgICAgICAgICBwYXJhbXMubG9hZCA9IEpTT04ucGFyc2Uoc2F2ZWRHdWkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19jbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRoaXMuX19jbG9zZUJ1dHRvbi5pbm5lckhUTUwgPSBHVUkuVEVYVF9DTE9TRUQ7XG4gICAgZG9tLmFkZENsYXNzKHRoaXMuX19jbG9zZUJ1dHRvbiwgR1VJLkNMQVNTX0NMT1NFX0JVVFRPTik7XG4gICAgaWYgKHBhcmFtcy5jbG9zZU9uVG9wKSB7XG4gICAgICBkb20uYWRkQ2xhc3ModGhpcy5fX2Nsb3NlQnV0dG9uLCBHVUkuQ0xBU1NfQ0xPU0VfVE9QKTtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5fX2Nsb3NlQnV0dG9uLCB0aGlzLmRvbUVsZW1lbnQuY2hpbGROb2Rlc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLl9fY2xvc2VCdXR0b24sIEdVSS5DTEFTU19DTE9TRV9CT1RUT00pO1xuICAgICAgdGhpcy5kb21FbGVtZW50LmFwcGVuZENoaWxkKHRoaXMuX19jbG9zZUJ1dHRvbik7XG4gICAgfVxuICAgIGRvbS5iaW5kKHRoaXMuX19jbG9zZUJ1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgX3RoaXMuY2xvc2VkID0gIV90aGlzLmNsb3NlZDtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocGFyYW1zLmNsb3NlZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJhbXMuY2xvc2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIHRpdGxlUm93TmFtZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHBhcmFtcy5uYW1lKTtcbiAgICBkb20uYWRkQ2xhc3ModGl0bGVSb3dOYW1lLCAnY29udHJvbGxlci1uYW1lJyk7XG4gICAgdGl0bGVSb3cgPSBhZGRSb3coX3RoaXMsIHRpdGxlUm93TmFtZSk7XG4gICAgdmFyIG9uQ2xpY2tUaXRsZSA9IGZ1bmN0aW9uIG9uQ2xpY2tUaXRsZShlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBfdGhpcy5jbG9zZWQgPSAhX3RoaXMuY2xvc2VkO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgZG9tLmFkZENsYXNzKHRoaXMuX191bCwgR1VJLkNMQVNTX0NMT1NFRCk7XG4gICAgZG9tLmFkZENsYXNzKHRpdGxlUm93LCAndGl0bGUnKTtcbiAgICBkb20uYmluZCh0aXRsZVJvdywgJ2NsaWNrJywgb25DbGlja1RpdGxlKTtcbiAgICBpZiAoIXBhcmFtcy5jbG9zZWQpIHtcbiAgICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG4gIGlmIChwYXJhbXMuYXV0b1BsYWNlKSB7XG4gICAgaWYgKENvbW1vbi5pc1VuZGVmaW5lZChwYXJhbXMucGFyZW50KSkge1xuICAgICAgaWYgKGF1dG9QbGFjZVZpcmdpbikge1xuICAgICAgICBhdXRvUGxhY2VDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZG9tLmFkZENsYXNzKGF1dG9QbGFjZUNvbnRhaW5lciwgQ1NTX05BTUVTUEFDRSk7XG4gICAgICAgIGRvbS5hZGRDbGFzcyhhdXRvUGxhY2VDb250YWluZXIsIEdVSS5DTEFTU19BVVRPX1BMQUNFX0NPTlRBSU5FUik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXV0b1BsYWNlQ29udGFpbmVyKTtcbiAgICAgICAgYXV0b1BsYWNlVmlyZ2luID0gZmFsc2U7XG4gICAgICB9XG4gICAgICBhdXRvUGxhY2VDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLmRvbUVsZW1lbnQsIEdVSS5DTEFTU19BVVRPX1BMQUNFKTtcbiAgICB9XG4gICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgc2V0V2lkdGgoX3RoaXMsIHBhcmFtcy53aWR0aCk7XG4gICAgfVxuICB9XG4gIHRoaXMuX19yZXNpemVIYW5kbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIF90aGlzLm9uUmVzaXplRGVib3VuY2VkKCk7XG4gIH07XG4gIGRvbS5iaW5kKHdpbmRvdywgJ3Jlc2l6ZScsIHRoaXMuX19yZXNpemVIYW5kbGVyKTtcbiAgZG9tLmJpbmQodGhpcy5fX3VsLCAnd2Via2l0VHJhbnNpdGlvbkVuZCcsIHRoaXMuX19yZXNpemVIYW5kbGVyKTtcbiAgZG9tLmJpbmQodGhpcy5fX3VsLCAndHJhbnNpdGlvbmVuZCcsIHRoaXMuX19yZXNpemVIYW5kbGVyKTtcbiAgZG9tLmJpbmQodGhpcy5fX3VsLCAnb1RyYW5zaXRpb25FbmQnLCB0aGlzLl9fcmVzaXplSGFuZGxlcik7XG4gIHRoaXMub25SZXNpemUoKTtcbiAgaWYgKHBhcmFtcy5yZXNpemFibGUpIHtcbiAgICBhZGRSZXNpemVIYW5kbGUodGhpcyk7XG4gIH1cbiAgc2F2ZVRvTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24gc2F2ZVRvTG9jYWxTdG9yYWdlKCkge1xuICAgIGlmIChTVVBQT1JUU19MT0NBTF9TVE9SQUdFICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdldExvY2FsU3RvcmFnZUhhc2goX3RoaXMsICdpc0xvY2FsJykpID09PSAndHJ1ZScpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdldExvY2FsU3RvcmFnZUhhc2goX3RoaXMsICdndWknKSwgSlNPTi5zdHJpbmdpZnkoX3RoaXMuZ2V0U2F2ZU9iamVjdCgpKSk7XG4gICAgfVxuICB9O1xuICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZUlmUG9zc2libGUgPSBzYXZlVG9Mb2NhbFN0b3JhZ2U7XG4gIGZ1bmN0aW9uIHJlc2V0V2lkdGgoKSB7XG4gICAgdmFyIHJvb3QgPSBfdGhpcy5nZXRSb290KCk7XG4gICAgcm9vdC53aWR0aCArPSAxO1xuICAgIENvbW1vbi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICByb290LndpZHRoIC09IDE7XG4gICAgfSk7XG4gIH1cbiAgaWYgKCFwYXJhbXMucGFyZW50KSB7XG4gICAgcmVzZXRXaWR0aCgpO1xuICB9XG59O1xuR1VJLnRvZ2dsZUhpZGUgPSBmdW5jdGlvbiAoKSB7XG4gIGhpZGUgPSAhaGlkZTtcbiAgQ29tbW9uLmVhY2goaGlkZWFibGVHdWlzLCBmdW5jdGlvbiAoZ3VpKSB7XG4gICAgZ3VpLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IGhpZGUgPyAnbm9uZScgOiAnJztcbiAgfSk7XG59O1xuR1VJLkNMQVNTX0FVVE9fUExBQ0UgPSAnYSc7XG5HVUkuQ0xBU1NfQVVUT19QTEFDRV9DT05UQUlORVIgPSAnYWMnO1xuR1VJLkNMQVNTX01BSU4gPSAnbWFpbic7XG5HVUkuQ0xBU1NfQ09OVFJPTExFUl9ST1cgPSAnY3InO1xuR1VJLkNMQVNTX1RPT19UQUxMID0gJ3RhbGxlci10aGFuLXdpbmRvdyc7XG5HVUkuQ0xBU1NfQ0xPU0VEID0gJ2Nsb3NlZCc7XG5HVUkuQ0xBU1NfQ0xPU0VfQlVUVE9OID0gJ2Nsb3NlLWJ1dHRvbic7XG5HVUkuQ0xBU1NfQ0xPU0VfVE9QID0gJ2Nsb3NlLXRvcCc7XG5HVUkuQ0xBU1NfQ0xPU0VfQk9UVE9NID0gJ2Nsb3NlLWJvdHRvbSc7XG5HVUkuQ0xBU1NfRFJBRyA9ICdkcmFnJztcbkdVSS5ERUZBVUxUX1dJRFRIID0gMjQ1O1xuR1VJLlRFWFRfQ0xPU0VEID0gJ0Nsb3NlIENvbnRyb2xzJztcbkdVSS5URVhUX09QRU4gPSAnT3BlbiBDb250cm9scyc7XG5HVUkuX2tleWRvd25IYW5kbGVyID0gZnVuY3Rpb24gKGUpIHtcbiAgaWYgKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudHlwZSAhPT0gJ3RleHQnICYmIChlLndoaWNoID09PSBISURFX0tFWV9DT0RFIHx8IGUua2V5Q29kZSA9PT0gSElERV9LRVlfQ09ERSkpIHtcbiAgICBHVUkudG9nZ2xlSGlkZSgpO1xuICB9XG59O1xuZG9tLmJpbmQod2luZG93LCAna2V5ZG93bicsIEdVSS5fa2V5ZG93bkhhbmRsZXIsIGZhbHNlKTtcbkNvbW1vbi5leHRlbmQoR1VJLnByb3RvdHlwZSxcbntcbiAgYWRkOiBmdW5jdGlvbiBhZGQob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBfYWRkKHRoaXMsIG9iamVjdCwgcHJvcGVydHksIHtcbiAgICAgIGZhY3RvcnlBcmdzOiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpXG4gICAgfSk7XG4gIH0sXG4gIGFkZENvbG9yOiBmdW5jdGlvbiBhZGRDb2xvcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgcmV0dXJuIF9hZGQodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSwge1xuICAgICAgY29sb3I6IHRydWVcbiAgICB9KTtcbiAgfSxcbiAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoY29udHJvbGxlcikge1xuICAgIHRoaXMuX191bC5yZW1vdmVDaGlsZChjb250cm9sbGVyLl9fbGkpO1xuICAgIHRoaXMuX19jb250cm9sbGVycy5zcGxpY2UodGhpcy5fX2NvbnRyb2xsZXJzLmluZGV4T2YoY29udHJvbGxlciksIDEpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgQ29tbW9uLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH0sXG4gIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ09ubHkgdGhlIHJvb3QgR1VJIHNob3VsZCBiZSByZW1vdmVkIHdpdGggLmRlc3Ryb3koKS4gJyArICdGb3Igc3ViZm9sZGVycywgdXNlIGd1aS5yZW1vdmVGb2xkZXIoZm9sZGVyKSBpbnN0ZWFkLicpO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdXRvUGxhY2UpIHtcbiAgICAgIGF1dG9QbGFjZUNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLmRvbUVsZW1lbnQpO1xuICAgIH1cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIENvbW1vbi5lYWNoKHRoaXMuX19mb2xkZXJzLCBmdW5jdGlvbiAoc3ViZm9sZGVyKSB7XG4gICAgICBfdGhpcy5yZW1vdmVGb2xkZXIoc3ViZm9sZGVyKTtcbiAgICB9KTtcbiAgICBkb20udW5iaW5kKHdpbmRvdywgJ2tleWRvd24nLCBHVUkuX2tleWRvd25IYW5kbGVyLCBmYWxzZSk7XG4gICAgcmVtb3ZlTGlzdGVuZXJzKHRoaXMpO1xuICB9LFxuICBhZGRGb2xkZXI6IGZ1bmN0aW9uIGFkZEZvbGRlcihuYW1lKSB7XG4gICAgaWYgKHRoaXMuX19mb2xkZXJzW25hbWVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGFscmVhZHkgaGF2ZSBhIGZvbGRlciBpbiB0aGlzIEdVSSBieSB0aGUnICsgJyBuYW1lIFwiJyArIG5hbWUgKyAnXCInKTtcbiAgICB9XG4gICAgdmFyIG5ld0d1aVBhcmFtcyA9IHsgbmFtZTogbmFtZSwgcGFyZW50OiB0aGlzIH07XG4gICAgbmV3R3VpUGFyYW1zLmF1dG9QbGFjZSA9IHRoaXMuYXV0b1BsYWNlO1xuICAgIGlmICh0aGlzLmxvYWQgJiZcbiAgICB0aGlzLmxvYWQuZm9sZGVycyAmJlxuICAgIHRoaXMubG9hZC5mb2xkZXJzW25hbWVdKSB7XG4gICAgICBuZXdHdWlQYXJhbXMuY2xvc2VkID0gdGhpcy5sb2FkLmZvbGRlcnNbbmFtZV0uY2xvc2VkO1xuICAgICAgbmV3R3VpUGFyYW1zLmxvYWQgPSB0aGlzLmxvYWQuZm9sZGVyc1tuYW1lXTtcbiAgICB9XG4gICAgdmFyIGd1aSA9IG5ldyBHVUkobmV3R3VpUGFyYW1zKTtcbiAgICB0aGlzLl9fZm9sZGVyc1tuYW1lXSA9IGd1aTtcbiAgICB2YXIgbGkgPSBhZGRSb3codGhpcywgZ3VpLmRvbUVsZW1lbnQpO1xuICAgIGRvbS5hZGRDbGFzcyhsaSwgJ2ZvbGRlcicpO1xuICAgIHJldHVybiBndWk7XG4gIH0sXG4gIHJlbW92ZUZvbGRlcjogZnVuY3Rpb24gcmVtb3ZlRm9sZGVyKGZvbGRlcikge1xuICAgIHRoaXMuX191bC5yZW1vdmVDaGlsZChmb2xkZXIuZG9tRWxlbWVudC5wYXJlbnRFbGVtZW50KTtcbiAgICBkZWxldGUgdGhpcy5fX2ZvbGRlcnNbZm9sZGVyLm5hbWVdO1xuICAgIGlmICh0aGlzLmxvYWQgJiZcbiAgICB0aGlzLmxvYWQuZm9sZGVycyAmJlxuICAgIHRoaXMubG9hZC5mb2xkZXJzW2ZvbGRlci5uYW1lXSkge1xuICAgICAgZGVsZXRlIHRoaXMubG9hZC5mb2xkZXJzW2ZvbGRlci5uYW1lXTtcbiAgICB9XG4gICAgcmVtb3ZlTGlzdGVuZXJzKGZvbGRlcik7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBDb21tb24uZWFjaChmb2xkZXIuX19mb2xkZXJzLCBmdW5jdGlvbiAoc3ViZm9sZGVyKSB7XG4gICAgICBmb2xkZXIucmVtb3ZlRm9sZGVyKHN1YmZvbGRlcik7XG4gICAgfSk7XG4gICAgQ29tbW9uLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLm9uUmVzaXplKCk7XG4gICAgfSk7XG4gIH0sXG4gIG9wZW46IGZ1bmN0aW9uIG9wZW4oKSB7XG4gICAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIHRoaXMuY2xvc2VkID0gdHJ1ZTtcbiAgfSxcbiAgaGlkZTogZnVuY3Rpb24gaGlkZSgpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSxcbiAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcbiAgICB0aGlzLmRvbUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICcnO1xuICB9LFxuICBvblJlc2l6ZTogZnVuY3Rpb24gb25SZXNpemUoKSB7XG4gICAgdmFyIHJvb3QgPSB0aGlzLmdldFJvb3QoKTtcbiAgICBpZiAocm9vdC5zY3JvbGxhYmxlKSB7XG4gICAgICB2YXIgdG9wID0gZG9tLmdldE9mZnNldChyb290Ll9fdWwpLnRvcDtcbiAgICAgIHZhciBoID0gMDtcbiAgICAgIENvbW1vbi5lYWNoKHJvb3QuX191bC5jaGlsZE5vZGVzLCBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICBpZiAoIShyb290LmF1dG9QbGFjZSAmJiBub2RlID09PSByb290Ll9fc2F2ZV9yb3cpKSB7XG4gICAgICAgICAgaCArPSBkb20uZ2V0SGVpZ2h0KG5vZGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIGlmICh3aW5kb3cuaW5uZXJIZWlnaHQgLSB0b3AgLSBDTE9TRV9CVVRUT05fSEVJR0hUIDwgaCkge1xuICAgICAgICBkb20uYWRkQ2xhc3Mocm9vdC5kb21FbGVtZW50LCBHVUkuQ0xBU1NfVE9PX1RBTEwpO1xuICAgICAgICByb290Ll9fdWwuc3R5bGUuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0IC0gdG9wIC0gQ0xPU0VfQlVUVE9OX0hFSUdIVCArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3Mocm9vdC5kb21FbGVtZW50LCBHVUkuQ0xBU1NfVE9PX1RBTEwpO1xuICAgICAgICByb290Ll9fdWwuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocm9vdC5fX3Jlc2l6ZV9oYW5kbGUpIHtcbiAgICAgIENvbW1vbi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJvb3QuX19yZXNpemVfaGFuZGxlLnN0eWxlLmhlaWdodCA9IHJvb3QuX191bC5vZmZzZXRIZWlnaHQgKyAncHgnO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChyb290Ll9fY2xvc2VCdXR0b24pIHtcbiAgICAgIHJvb3QuX19jbG9zZUJ1dHRvbi5zdHlsZS53aWR0aCA9IHJvb3Qud2lkdGggKyAncHgnO1xuICAgIH1cbiAgfSxcbiAgb25SZXNpemVEZWJvdW5jZWQ6IENvbW1vbi5kZWJvdW5jZShmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5vblJlc2l6ZSgpO1xuICB9LCA1MCksXG4gIHJlbWVtYmVyOiBmdW5jdGlvbiByZW1lbWJlcigpIHtcbiAgICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKFNBVkVfRElBTE9HVUUpKSB7XG4gICAgICBTQVZFX0RJQUxPR1VFID0gbmV3IENlbnRlcmVkRGl2KCk7XG4gICAgICBTQVZFX0RJQUxPR1VFLmRvbUVsZW1lbnQuaW5uZXJIVE1MID0gc2F2ZURpYWxvZ0NvbnRlbnRzO1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignWW91IGNhbiBvbmx5IGNhbGwgcmVtZW1iZXIgb24gYSB0b3AgbGV2ZWwgR1VJLicpO1xuICAgIH1cbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIENvbW1vbi5lYWNoKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyksIGZ1bmN0aW9uIChvYmplY3QpIHtcbiAgICAgIGlmIChfdGhpcy5fX3JlbWVtYmVyZWRPYmplY3RzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhZGRTYXZlTWVudShfdGhpcyk7XG4gICAgICB9XG4gICAgICBpZiAoX3RoaXMuX19yZW1lbWJlcmVkT2JqZWN0cy5pbmRleE9mKG9iamVjdCkgPT09IC0xKSB7XG4gICAgICAgIF90aGlzLl9fcmVtZW1iZXJlZE9iamVjdHMucHVzaChvYmplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmICh0aGlzLmF1dG9QbGFjZSkge1xuICAgICAgc2V0V2lkdGgodGhpcywgdGhpcy53aWR0aCk7XG4gICAgfVxuICB9LFxuICBnZXRSb290OiBmdW5jdGlvbiBnZXRSb290KCkge1xuICAgIHZhciBndWkgPSB0aGlzO1xuICAgIHdoaWxlIChndWkucGFyZW50KSB7XG4gICAgICBndWkgPSBndWkucGFyZW50O1xuICAgIH1cbiAgICByZXR1cm4gZ3VpO1xuICB9LFxuICBnZXRTYXZlT2JqZWN0OiBmdW5jdGlvbiBnZXRTYXZlT2JqZWN0KCkge1xuICAgIHZhciB0b1JldHVybiA9IHRoaXMubG9hZDtcbiAgICB0b1JldHVybi5jbG9zZWQgPSB0aGlzLmNsb3NlZDtcbiAgICBpZiAodGhpcy5fX3JlbWVtYmVyZWRPYmplY3RzLmxlbmd0aCA+IDApIHtcbiAgICAgIHRvUmV0dXJuLnByZXNldCA9IHRoaXMucHJlc2V0O1xuICAgICAgaWYgKCF0b1JldHVybi5yZW1lbWJlcmVkKSB7XG4gICAgICAgIHRvUmV0dXJuLnJlbWVtYmVyZWQgPSB7fTtcbiAgICAgIH1cbiAgICAgIHRvUmV0dXJuLnJlbWVtYmVyZWRbdGhpcy5wcmVzZXRdID0gZ2V0Q3VycmVudFByZXNldCh0aGlzKTtcbiAgICB9XG4gICAgdG9SZXR1cm4uZm9sZGVycyA9IHt9O1xuICAgIENvbW1vbi5lYWNoKHRoaXMuX19mb2xkZXJzLCBmdW5jdGlvbiAoZWxlbWVudCwga2V5KSB7XG4gICAgICB0b1JldHVybi5mb2xkZXJzW2tleV0gPSBlbGVtZW50LmdldFNhdmVPYmplY3QoKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdG9SZXR1cm47XG4gIH0sXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUoKSB7XG4gICAgaWYgKCF0aGlzLmxvYWQucmVtZW1iZXJlZCkge1xuICAgICAgdGhpcy5sb2FkLnJlbWVtYmVyZWQgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5sb2FkLnJlbWVtYmVyZWRbdGhpcy5wcmVzZXRdID0gZ2V0Q3VycmVudFByZXNldCh0aGlzKTtcbiAgICBtYXJrUHJlc2V0TW9kaWZpZWQodGhpcywgZmFsc2UpO1xuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlSWZQb3NzaWJsZSgpO1xuICB9LFxuICBzYXZlQXM6IGZ1bmN0aW9uIHNhdmVBcyhwcmVzZXROYW1lKSB7XG4gICAgaWYgKCF0aGlzLmxvYWQucmVtZW1iZXJlZCkge1xuICAgICAgdGhpcy5sb2FkLnJlbWVtYmVyZWQgPSB7fTtcbiAgICAgIHRoaXMubG9hZC5yZW1lbWJlcmVkW0RFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRV0gPSBnZXRDdXJyZW50UHJlc2V0KHRoaXMsIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmxvYWQucmVtZW1iZXJlZFtwcmVzZXROYW1lXSA9IGdldEN1cnJlbnRQcmVzZXQodGhpcyk7XG4gICAgdGhpcy5wcmVzZXQgPSBwcmVzZXROYW1lO1xuICAgIGFkZFByZXNldE9wdGlvbih0aGlzLCBwcmVzZXROYW1lLCB0cnVlKTtcbiAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZUlmUG9zc2libGUoKTtcbiAgfSxcbiAgcmV2ZXJ0OiBmdW5jdGlvbiByZXZlcnQoZ3VpKSB7XG4gICAgQ29tbW9uLmVhY2godGhpcy5fX2NvbnRyb2xsZXJzLCBmdW5jdGlvbiAoY29udHJvbGxlcikge1xuICAgICAgaWYgKCF0aGlzLmdldFJvb3QoKS5sb2FkLnJlbWVtYmVyZWQpIHtcbiAgICAgICAgY29udHJvbGxlci5zZXRWYWx1ZShjb250cm9sbGVyLmluaXRpYWxWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWNhbGxTYXZlZFZhbHVlKGd1aSB8fCB0aGlzLmdldFJvb3QoKSwgY29udHJvbGxlcik7XG4gICAgICB9XG4gICAgICBpZiAoY29udHJvbGxlci5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuX19vbkZpbmlzaENoYW5nZS5jYWxsKGNvbnRyb2xsZXIsIGNvbnRyb2xsZXIuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gICAgQ29tbW9uLmVhY2godGhpcy5fX2ZvbGRlcnMsIGZ1bmN0aW9uIChmb2xkZXIpIHtcbiAgICAgIGZvbGRlci5yZXZlcnQoZm9sZGVyKTtcbiAgICB9KTtcbiAgICBpZiAoIWd1aSkge1xuICAgICAgbWFya1ByZXNldE1vZGlmaWVkKHRoaXMuZ2V0Um9vdCgpLCBmYWxzZSk7XG4gICAgfVxuICB9LFxuICBsaXN0ZW46IGZ1bmN0aW9uIGxpc3Rlbihjb250cm9sbGVyKSB7XG4gICAgdmFyIGluaXQgPSB0aGlzLl9fbGlzdGVuaW5nLmxlbmd0aCA9PT0gMDtcbiAgICB0aGlzLl9fbGlzdGVuaW5nLnB1c2goY29udHJvbGxlcik7XG4gICAgaWYgKGluaXQpIHtcbiAgICAgIHVwZGF0ZURpc3BsYXlzKHRoaXMuX19saXN0ZW5pbmcpO1xuICAgIH1cbiAgfSxcbiAgdXBkYXRlRGlzcGxheTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICBDb21tb24uZWFjaCh0aGlzLl9fY29udHJvbGxlcnMsIGZ1bmN0aW9uIChjb250cm9sbGVyKSB7XG4gICAgICBjb250cm9sbGVyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcbiAgICBDb21tb24uZWFjaCh0aGlzLl9fZm9sZGVycywgZnVuY3Rpb24gKGZvbGRlcikge1xuICAgICAgZm9sZGVyLnVwZGF0ZURpc3BsYXkoKTtcbiAgICB9KTtcbiAgfVxufSk7XG5mdW5jdGlvbiBhZGRSb3coZ3VpLCBuZXdEb20sIGxpQmVmb3JlKSB7XG4gIHZhciBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGlmIChuZXdEb20pIHtcbiAgICBsaS5hcHBlbmRDaGlsZChuZXdEb20pO1xuICB9XG4gIGlmIChsaUJlZm9yZSkge1xuICAgIGd1aS5fX3VsLmluc2VydEJlZm9yZShsaSwgbGlCZWZvcmUpO1xuICB9IGVsc2Uge1xuICAgIGd1aS5fX3VsLmFwcGVuZENoaWxkKGxpKTtcbiAgfVxuICBndWkub25SZXNpemUoKTtcbiAgcmV0dXJuIGxpO1xufVxuZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXJzKGd1aSkge1xuICBkb20udW5iaW5kKHdpbmRvdywgJ3Jlc2l6ZScsIGd1aS5fX3Jlc2l6ZUhhbmRsZXIpO1xuICBpZiAoZ3VpLnNhdmVUb0xvY2FsU3RvcmFnZUlmUG9zc2libGUpIHtcbiAgICBkb20udW5iaW5kKHdpbmRvdywgJ3VubG9hZCcsIGd1aS5zYXZlVG9Mb2NhbFN0b3JhZ2VJZlBvc3NpYmxlKTtcbiAgfVxufVxuZnVuY3Rpb24gbWFya1ByZXNldE1vZGlmaWVkKGd1aSwgbW9kaWZpZWQpIHtcbiAgdmFyIG9wdCA9IGd1aS5fX3ByZXNldF9zZWxlY3RbZ3VpLl9fcHJlc2V0X3NlbGVjdC5zZWxlY3RlZEluZGV4XTtcbiAgaWYgKG1vZGlmaWVkKSB7XG4gICAgb3B0LmlubmVySFRNTCA9IG9wdC52YWx1ZSArICcqJztcbiAgfSBlbHNlIHtcbiAgICBvcHQuaW5uZXJIVE1MID0gb3B0LnZhbHVlO1xuICB9XG59XG5mdW5jdGlvbiBhdWdtZW50Q29udHJvbGxlcihndWksIGxpLCBjb250cm9sbGVyKSB7XG4gIGNvbnRyb2xsZXIuX19saSA9IGxpO1xuICBjb250cm9sbGVyLl9fZ3VpID0gZ3VpO1xuICBDb21tb24uZXh0ZW5kKGNvbnRyb2xsZXIsIHtcbiAgICBvcHRpb25zOiBmdW5jdGlvbiBvcHRpb25zKF9vcHRpb25zKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgdmFyIG5leHRTaWJsaW5nID0gY29udHJvbGxlci5fX2xpLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgY29udHJvbGxlci5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIF9hZGQoZ3VpLCBjb250cm9sbGVyLm9iamVjdCwgY29udHJvbGxlci5wcm9wZXJ0eSwge1xuICAgICAgICAgIGJlZm9yZTogbmV4dFNpYmxpbmcsXG4gICAgICAgICAgZmFjdG9yeUFyZ3M6IFtDb21tb24udG9BcnJheShhcmd1bWVudHMpXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIGlmIChDb21tb24uaXNBcnJheShfb3B0aW9ucykgfHwgQ29tbW9uLmlzT2JqZWN0KF9vcHRpb25zKSkge1xuICAgICAgICB2YXIgX25leHRTaWJsaW5nID0gY29udHJvbGxlci5fX2xpLm5leHRFbGVtZW50U2libGluZztcbiAgICAgICAgY29udHJvbGxlci5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuIF9hZGQoZ3VpLCBjb250cm9sbGVyLm9iamVjdCwgY29udHJvbGxlci5wcm9wZXJ0eSwge1xuICAgICAgICAgIGJlZm9yZTogX25leHRTaWJsaW5nLFxuICAgICAgICAgIGZhY3RvcnlBcmdzOiBbX29wdGlvbnNdXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbmFtZTogZnVuY3Rpb24gbmFtZShfbmFtZSkge1xuICAgICAgY29udHJvbGxlci5fX2xpLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTCA9IF9uYW1lO1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgfSxcbiAgICBsaXN0ZW46IGZ1bmN0aW9uIGxpc3RlbigpIHtcbiAgICAgIGNvbnRyb2xsZXIuX19ndWkubGlzdGVuKGNvbnRyb2xsZXIpO1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIGNvbnRyb2xsZXIuX19ndWkucmVtb3ZlKGNvbnRyb2xsZXIpO1xuICAgICAgcmV0dXJuIGNvbnRyb2xsZXI7XG4gICAgfVxuICB9KTtcbiAgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBOdW1iZXJDb250cm9sbGVyU2xpZGVyKSB7XG4gICAgdmFyIGJveCA9IG5ldyBOdW1iZXJDb250cm9sbGVyQm94KGNvbnRyb2xsZXIub2JqZWN0LCBjb250cm9sbGVyLnByb3BlcnR5LCB7IG1pbjogY29udHJvbGxlci5fX21pbiwgbWF4OiBjb250cm9sbGVyLl9fbWF4LCBzdGVwOiBjb250cm9sbGVyLl9fc3RlcCB9KTtcbiAgICBDb21tb24uZWFjaChbJ3VwZGF0ZURpc3BsYXknLCAnb25DaGFuZ2UnLCAnb25GaW5pc2hDaGFuZ2UnLCAnc3RlcCcsICdtaW4nLCAnbWF4J10sIGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgIHZhciBwYyA9IGNvbnRyb2xsZXJbbWV0aG9kXTtcbiAgICAgIHZhciBwYiA9IGJveFttZXRob2RdO1xuICAgICAgY29udHJvbGxlclttZXRob2RdID0gYm94W21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgcGIuYXBwbHkoYm94LCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHBjLmFwcGx5KGNvbnRyb2xsZXIsIGFyZ3MpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgICBkb20uYWRkQ2xhc3MobGksICdoYXMtc2xpZGVyJyk7XG4gICAgY29udHJvbGxlci5kb21FbGVtZW50Lmluc2VydEJlZm9yZShib3guZG9tRWxlbWVudCwgY29udHJvbGxlci5kb21FbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyIGluc3RhbmNlb2YgTnVtYmVyQ29udHJvbGxlckJveCkge1xuICAgIHZhciByID0gZnVuY3Rpb24gcihyZXR1cm5lZCkge1xuICAgICAgaWYgKENvbW1vbi5pc051bWJlcihjb250cm9sbGVyLl9fbWluKSAmJiBDb21tb24uaXNOdW1iZXIoY29udHJvbGxlci5fX21heCkpIHtcbiAgICAgICAgdmFyIG9sZE5hbWUgPSBjb250cm9sbGVyLl9fbGkuZmlyc3RFbGVtZW50Q2hpbGQuZmlyc3RFbGVtZW50Q2hpbGQuaW5uZXJIVE1MO1xuICAgICAgICB2YXIgd2FzTGlzdGVuaW5nID0gY29udHJvbGxlci5fX2d1aS5fX2xpc3RlbmluZy5pbmRleE9mKGNvbnRyb2xsZXIpID4gLTE7XG4gICAgICAgIGNvbnRyb2xsZXIucmVtb3ZlKCk7XG4gICAgICAgIHZhciBuZXdDb250cm9sbGVyID0gX2FkZChndWksIGNvbnRyb2xsZXIub2JqZWN0LCBjb250cm9sbGVyLnByb3BlcnR5LCB7XG4gICAgICAgICAgYmVmb3JlOiBjb250cm9sbGVyLl9fbGkubmV4dEVsZW1lbnRTaWJsaW5nLFxuICAgICAgICAgIGZhY3RvcnlBcmdzOiBbY29udHJvbGxlci5fX21pbiwgY29udHJvbGxlci5fX21heCwgY29udHJvbGxlci5fX3N0ZXBdXG4gICAgICAgIH0pO1xuICAgICAgICBuZXdDb250cm9sbGVyLm5hbWUob2xkTmFtZSk7XG4gICAgICAgIGlmICh3YXNMaXN0ZW5pbmcpIG5ld0NvbnRyb2xsZXIubGlzdGVuKCk7XG4gICAgICAgIHJldHVybiBuZXdDb250cm9sbGVyO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldHVybmVkO1xuICAgIH07XG4gICAgY29udHJvbGxlci5taW4gPSBDb21tb24uY29tcG9zZShyLCBjb250cm9sbGVyLm1pbik7XG4gICAgY29udHJvbGxlci5tYXggPSBDb21tb24uY29tcG9zZShyLCBjb250cm9sbGVyLm1heCk7XG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciBpbnN0YW5jZW9mIEJvb2xlYW5Db250cm9sbGVyKSB7XG4gICAgZG9tLmJpbmQobGksICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5mYWtlRXZlbnQoY29udHJvbGxlci5fX2NoZWNrYm94LCAnY2xpY2snKTtcbiAgICB9KTtcbiAgICBkb20uYmluZChjb250cm9sbGVyLl9fY2hlY2tib3gsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBGdW5jdGlvbkNvbnRyb2xsZXIpIHtcbiAgICBkb20uYmluZChsaSwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLmZha2VFdmVudChjb250cm9sbGVyLl9fYnV0dG9uLCAnY2xpY2snKTtcbiAgICB9KTtcbiAgICBkb20uYmluZChsaSwgJ21vdXNlb3ZlcicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyhjb250cm9sbGVyLl9fYnV0dG9uLCAnaG92ZXInKTtcbiAgICB9KTtcbiAgICBkb20uYmluZChsaSwgJ21vdXNlb3V0JywgZnVuY3Rpb24gKCkge1xuICAgICAgZG9tLnJlbW92ZUNsYXNzKGNvbnRyb2xsZXIuX19idXR0b24sICdob3ZlcicpO1xuICAgIH0pO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBDb2xvckNvbnRyb2xsZXIpIHtcbiAgICBkb20uYWRkQ2xhc3MobGksICdjb2xvcicpO1xuICAgIGNvbnRyb2xsZXIudXBkYXRlRGlzcGxheSA9IENvbW1vbi5jb21wb3NlKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgIGxpLnN0eWxlLmJvcmRlckxlZnRDb2xvciA9IGNvbnRyb2xsZXIuX19jb2xvci50b1N0cmluZygpO1xuICAgICAgcmV0dXJuIHZhbDtcbiAgICB9LCBjb250cm9sbGVyLnVwZGF0ZURpc3BsYXkpO1xuICAgIGNvbnRyb2xsZXIudXBkYXRlRGlzcGxheSgpO1xuICB9XG4gIGNvbnRyb2xsZXIuc2V0VmFsdWUgPSBDb21tb24uY29tcG9zZShmdW5jdGlvbiAodmFsKSB7XG4gICAgaWYgKGd1aS5nZXRSb290KCkuX19wcmVzZXRfc2VsZWN0ICYmIGNvbnRyb2xsZXIuaXNNb2RpZmllZCgpKSB7XG4gICAgICBtYXJrUHJlc2V0TW9kaWZpZWQoZ3VpLmdldFJvb3QoKSwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2YWw7XG4gIH0sIGNvbnRyb2xsZXIuc2V0VmFsdWUpO1xufVxuZnVuY3Rpb24gcmVjYWxsU2F2ZWRWYWx1ZShndWksIGNvbnRyb2xsZXIpIHtcbiAgdmFyIHJvb3QgPSBndWkuZ2V0Um9vdCgpO1xuICB2YXIgbWF0Y2hlZEluZGV4ID0gcm9vdC5fX3JlbWVtYmVyZWRPYmplY3RzLmluZGV4T2YoY29udHJvbGxlci5vYmplY3QpO1xuICBpZiAobWF0Y2hlZEluZGV4ICE9PSAtMSkge1xuICAgIHZhciBjb250cm9sbGVyTWFwID0gcm9vdC5fX3JlbWVtYmVyZWRPYmplY3RJbmRlY2VzVG9Db250cm9sbGVyc1ttYXRjaGVkSW5kZXhdO1xuICAgIGlmIChjb250cm9sbGVyTWFwID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnRyb2xsZXJNYXAgPSB7fTtcbiAgICAgIHJvb3QuX19yZW1lbWJlcmVkT2JqZWN0SW5kZWNlc1RvQ29udHJvbGxlcnNbbWF0Y2hlZEluZGV4XSA9IGNvbnRyb2xsZXJNYXA7XG4gICAgfVxuICAgIGNvbnRyb2xsZXJNYXBbY29udHJvbGxlci5wcm9wZXJ0eV0gPSBjb250cm9sbGVyO1xuICAgIGlmIChyb290LmxvYWQgJiYgcm9vdC5sb2FkLnJlbWVtYmVyZWQpIHtcbiAgICAgIHZhciBwcmVzZXRNYXAgPSByb290LmxvYWQucmVtZW1iZXJlZDtcbiAgICAgIHZhciBwcmVzZXQgPSB2b2lkIDA7XG4gICAgICBpZiAocHJlc2V0TWFwW2d1aS5wcmVzZXRdKSB7XG4gICAgICAgIHByZXNldCA9IHByZXNldE1hcFtndWkucHJlc2V0XTtcbiAgICAgIH0gZWxzZSBpZiAocHJlc2V0TWFwW0RFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRV0pIHtcbiAgICAgICAgcHJlc2V0ID0gcHJlc2V0TWFwW0RFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAocHJlc2V0W21hdGNoZWRJbmRleF0gJiYgcHJlc2V0W21hdGNoZWRJbmRleF1bY29udHJvbGxlci5wcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgdmFsdWUgPSBwcmVzZXRbbWF0Y2hlZEluZGV4XVtjb250cm9sbGVyLnByb3BlcnR5XTtcbiAgICAgICAgY29udHJvbGxlci5pbml0aWFsVmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgY29udHJvbGxlci5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBfYWRkKGd1aSwgb2JqZWN0LCBwcm9wZXJ0eSwgcGFyYW1zKSB7XG4gIGlmIChvYmplY3RbcHJvcGVydHldID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ09iamVjdCBcIicgKyBvYmplY3QgKyAnXCIgaGFzIG5vIHByb3BlcnR5IFwiJyArIHByb3BlcnR5ICsgJ1wiJyk7XG4gIH1cbiAgdmFyIGNvbnRyb2xsZXIgPSB2b2lkIDA7XG4gIGlmIChwYXJhbXMuY29sb3IpIHtcbiAgICBjb250cm9sbGVyID0gbmV3IENvbG9yQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZmFjdG9yeUFyZ3MgPSBbb2JqZWN0LCBwcm9wZXJ0eV0uY29uY2F0KHBhcmFtcy5mYWN0b3J5QXJncyk7XG4gICAgY29udHJvbGxlciA9IENvbnRyb2xsZXJGYWN0b3J5LmFwcGx5KGd1aSwgZmFjdG9yeUFyZ3MpO1xuICB9XG4gIGlmIChwYXJhbXMuYmVmb3JlIGluc3RhbmNlb2YgQ29udHJvbGxlcikge1xuICAgIHBhcmFtcy5iZWZvcmUgPSBwYXJhbXMuYmVmb3JlLl9fbGk7XG4gIH1cbiAgcmVjYWxsU2F2ZWRWYWx1ZShndWksIGNvbnRyb2xsZXIpO1xuICBkb20uYWRkQ2xhc3MoY29udHJvbGxlci5kb21FbGVtZW50LCAnYycpO1xuICB2YXIgbmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZG9tLmFkZENsYXNzKG5hbWUsICdwcm9wZXJ0eS1uYW1lJyk7XG4gIG5hbWUuaW5uZXJIVE1MID0gY29udHJvbGxlci5wcm9wZXJ0eTtcbiAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmFtZSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250cm9sbGVyLmRvbUVsZW1lbnQpO1xuICB2YXIgbGkgPSBhZGRSb3coZ3VpLCBjb250YWluZXIsIHBhcmFtcy5iZWZvcmUpO1xuICBkb20uYWRkQ2xhc3MobGksIEdVSS5DTEFTU19DT05UUk9MTEVSX1JPVyk7XG4gIGlmIChjb250cm9sbGVyIGluc3RhbmNlb2YgQ29sb3JDb250cm9sbGVyKSB7XG4gICAgZG9tLmFkZENsYXNzKGxpLCAnY29sb3InKTtcbiAgfSBlbHNlIHtcbiAgICBkb20uYWRkQ2xhc3MobGksIF90eXBlb2YoY29udHJvbGxlci5nZXRWYWx1ZSgpKSk7XG4gIH1cbiAgYXVnbWVudENvbnRyb2xsZXIoZ3VpLCBsaSwgY29udHJvbGxlcik7XG4gIGd1aS5fX2NvbnRyb2xsZXJzLnB1c2goY29udHJvbGxlcik7XG4gIHJldHVybiBjb250cm9sbGVyO1xufVxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlSGFzaChndWksIGtleSkge1xuICByZXR1cm4gZG9jdW1lbnQubG9jYXRpb24uaHJlZiArICcuJyArIGtleTtcbn1cbmZ1bmN0aW9uIGFkZFByZXNldE9wdGlvbihndWksIG5hbWUsIHNldFNlbGVjdGVkKSB7XG4gIHZhciBvcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgb3B0LmlubmVySFRNTCA9IG5hbWU7XG4gIG9wdC52YWx1ZSA9IG5hbWU7XG4gIGd1aS5fX3ByZXNldF9zZWxlY3QuYXBwZW5kQ2hpbGQob3B0KTtcbiAgaWYgKHNldFNlbGVjdGVkKSB7XG4gICAgZ3VpLl9fcHJlc2V0X3NlbGVjdC5zZWxlY3RlZEluZGV4ID0gZ3VpLl9fcHJlc2V0X3NlbGVjdC5sZW5ndGggLSAxO1xuICB9XG59XG5mdW5jdGlvbiBzaG93SGlkZUV4cGxhaW4oZ3VpLCBleHBsYWluKSB7XG4gIGV4cGxhaW4uc3R5bGUuZGlzcGxheSA9IGd1aS51c2VMb2NhbFN0b3JhZ2UgPyAnYmxvY2snIDogJ25vbmUnO1xufVxuZnVuY3Rpb24gYWRkU2F2ZU1lbnUoZ3VpKSB7XG4gIHZhciBkaXYgPSBndWkuX19zYXZlX3JvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGRvbS5hZGRDbGFzcyhndWkuZG9tRWxlbWVudCwgJ2hhcy1zYXZlJyk7XG4gIGd1aS5fX3VsLmluc2VydEJlZm9yZShkaXYsIGd1aS5fX3VsLmZpcnN0Q2hpbGQpO1xuICBkb20uYWRkQ2xhc3MoZGl2LCAnc2F2ZS1yb3cnKTtcbiAgdmFyIGdlYXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBnZWFycy5pbm5lckhUTUwgPSAnJm5ic3A7JztcbiAgZG9tLmFkZENsYXNzKGdlYXJzLCAnYnV0dG9uIGdlYXJzJyk7XG4gIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGJ1dHRvbi5pbm5lckhUTUwgPSAnU2F2ZSc7XG4gIGRvbS5hZGRDbGFzcyhidXR0b24sICdidXR0b24nKTtcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbiwgJ3NhdmUnKTtcbiAgdmFyIGJ1dHRvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGJ1dHRvbjIuaW5uZXJIVE1MID0gJ05ldyc7XG4gIGRvbS5hZGRDbGFzcyhidXR0b24yLCAnYnV0dG9uJyk7XG4gIGRvbS5hZGRDbGFzcyhidXR0b24yLCAnc2F2ZS1hcycpO1xuICB2YXIgYnV0dG9uMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgYnV0dG9uMy5pbm5lckhUTUwgPSAnUmV2ZXJ0JztcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbjMsICdidXR0b24nKTtcbiAgZG9tLmFkZENsYXNzKGJ1dHRvbjMsICdyZXZlcnQnKTtcbiAgdmFyIHNlbGVjdCA9IGd1aS5fX3ByZXNldF9zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgaWYgKGd1aS5sb2FkICYmIGd1aS5sb2FkLnJlbWVtYmVyZWQpIHtcbiAgICBDb21tb24uZWFjaChndWkubG9hZC5yZW1lbWJlcmVkLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgYWRkUHJlc2V0T3B0aW9uKGd1aSwga2V5LCBrZXkgPT09IGd1aS5wcmVzZXQpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIGFkZFByZXNldE9wdGlvbihndWksIERFRkFVTFRfREVGQVVMVF9QUkVTRVRfTkFNRSwgZmFsc2UpO1xuICB9XG4gIGRvbS5iaW5kKHNlbGVjdCwgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZ3VpLl9fcHJlc2V0X3NlbGVjdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgIGd1aS5fX3ByZXNldF9zZWxlY3RbaW5kZXhdLmlubmVySFRNTCA9IGd1aS5fX3ByZXNldF9zZWxlY3RbaW5kZXhdLnZhbHVlO1xuICAgIH1cbiAgICBndWkucHJlc2V0ID0gdGhpcy52YWx1ZTtcbiAgfSk7XG4gIGRpdi5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICBkaXYuYXBwZW5kQ2hpbGQoZ2VhcnMpO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbjIpO1xuICBkaXYuYXBwZW5kQ2hpbGQoYnV0dG9uMyk7XG4gIGlmIChTVVBQT1JUU19MT0NBTF9TVE9SQUdFKSB7XG4gICAgdmFyIGV4cGxhaW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGctbG9jYWwtZXhwbGFpbicpO1xuICAgIHZhciBsb2NhbFN0b3JhZ2VDaGVja0JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZy1sb2NhbC1zdG9yYWdlJyk7XG4gICAgdmFyIHNhdmVMb2NhbGx5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RnLXNhdmUtbG9jYWxseScpO1xuICAgIHNhdmVMb2NhbGx5LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShnZXRMb2NhbFN0b3JhZ2VIYXNoKGd1aSwgJ2lzTG9jYWwnKSkgPT09ICd0cnVlJykge1xuICAgICAgbG9jYWxTdG9yYWdlQ2hlY2tCb3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICB9XG4gICAgc2hvd0hpZGVFeHBsYWluKGd1aSwgZXhwbGFpbik7XG4gICAgZG9tLmJpbmQobG9jYWxTdG9yYWdlQ2hlY2tCb3gsICdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBndWkudXNlTG9jYWxTdG9yYWdlID0gIWd1aS51c2VMb2NhbFN0b3JhZ2U7XG4gICAgICBzaG93SGlkZUV4cGxhaW4oZ3VpLCBleHBsYWluKTtcbiAgICB9KTtcbiAgfVxuICB2YXIgbmV3Q29uc3RydWN0b3JUZXh0QXJlYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZy1uZXctY29uc3RydWN0b3InKTtcbiAgZG9tLmJpbmQobmV3Q29uc3RydWN0b3JUZXh0QXJlYSwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmIChlLm1ldGFLZXkgJiYgKGUud2hpY2ggPT09IDY3IHx8IGUua2V5Q29kZSA9PT0gNjcpKSB7XG4gICAgICBTQVZFX0RJQUxPR1VFLmhpZGUoKTtcbiAgICB9XG4gIH0pO1xuICBkb20uYmluZChnZWFycywgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIG5ld0NvbnN0cnVjdG9yVGV4dEFyZWEuaW5uZXJIVE1MID0gSlNPTi5zdHJpbmdpZnkoZ3VpLmdldFNhdmVPYmplY3QoKSwgdW5kZWZpbmVkLCAyKTtcbiAgICBTQVZFX0RJQUxPR1VFLnNob3coKTtcbiAgICBuZXdDb25zdHJ1Y3RvclRleHRBcmVhLmZvY3VzKCk7XG4gICAgbmV3Q29uc3RydWN0b3JUZXh0QXJlYS5zZWxlY3QoKTtcbiAgfSk7XG4gIGRvbS5iaW5kKGJ1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGd1aS5zYXZlKCk7XG4gIH0pO1xuICBkb20uYmluZChidXR0b24yLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByZXNldE5hbWUgPSBwcm9tcHQoJ0VudGVyIGEgbmV3IHByZXNldCBuYW1lLicpO1xuICAgIGlmIChwcmVzZXROYW1lKSB7XG4gICAgICBndWkuc2F2ZUFzKHByZXNldE5hbWUpO1xuICAgIH1cbiAgfSk7XG4gIGRvbS5iaW5kKGJ1dHRvbjMsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBndWkucmV2ZXJ0KCk7XG4gIH0pO1xufVxuZnVuY3Rpb24gYWRkUmVzaXplSGFuZGxlKGd1aSkge1xuICB2YXIgcG1vdXNlWCA9IHZvaWQgMDtcbiAgZ3VpLl9fcmVzaXplX2hhbmRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBDb21tb24uZXh0ZW5kKGd1aS5fX3Jlc2l6ZV9oYW5kbGUuc3R5bGUsIHtcbiAgICB3aWR0aDogJzZweCcsXG4gICAgbWFyZ2luTGVmdDogJy0zcHgnLFxuICAgIGhlaWdodDogJzIwMHB4JyxcbiAgICBjdXJzb3I6ICdldy1yZXNpemUnLFxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnXG4gIH0pO1xuICBmdW5jdGlvbiBkcmFnKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZ3VpLndpZHRoICs9IHBtb3VzZVggLSBlLmNsaWVudFg7XG4gICAgZ3VpLm9uUmVzaXplKCk7XG4gICAgcG1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZnVuY3Rpb24gZHJhZ1N0b3AoKSB7XG4gICAgZG9tLnJlbW92ZUNsYXNzKGd1aS5fX2Nsb3NlQnV0dG9uLCBHVUkuQ0xBU1NfRFJBRyk7XG4gICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBkcmFnU3RvcCk7XG4gIH1cbiAgZnVuY3Rpb24gZHJhZ1N0YXJ0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcG1vdXNlWCA9IGUuY2xpZW50WDtcbiAgICBkb20uYWRkQ2xhc3MoZ3VpLl9fY2xvc2VCdXR0b24sIEdVSS5DTEFTU19EUkFHKTtcbiAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBkcmFnKTtcbiAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZXVwJywgZHJhZ1N0b3ApO1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBkb20uYmluZChndWkuX19yZXNpemVfaGFuZGxlLCAnbW91c2Vkb3duJywgZHJhZ1N0YXJ0KTtcbiAgZG9tLmJpbmQoZ3VpLl9fY2xvc2VCdXR0b24sICdtb3VzZWRvd24nLCBkcmFnU3RhcnQpO1xuICBndWkuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoZ3VpLl9fcmVzaXplX2hhbmRsZSwgZ3VpLmRvbUVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQpO1xufVxuZnVuY3Rpb24gc2V0V2lkdGgoZ3VpLCB3KSB7XG4gIGd1aS5kb21FbGVtZW50LnN0eWxlLndpZHRoID0gdyArICdweCc7XG4gIGlmIChndWkuX19zYXZlX3JvdyAmJiBndWkuYXV0b1BsYWNlKSB7XG4gICAgZ3VpLl9fc2F2ZV9yb3cuc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcbiAgfVxuICBpZiAoZ3VpLl9fY2xvc2VCdXR0b24pIHtcbiAgICBndWkuX19jbG9zZUJ1dHRvbi5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuICB9XG59XG5mdW5jdGlvbiBnZXRDdXJyZW50UHJlc2V0KGd1aSwgdXNlSW5pdGlhbFZhbHVlcykge1xuICB2YXIgdG9SZXR1cm4gPSB7fTtcbiAgQ29tbW9uLmVhY2goZ3VpLl9fcmVtZW1iZXJlZE9iamVjdHMsIGZ1bmN0aW9uICh2YWwsIGluZGV4KSB7XG4gICAgdmFyIHNhdmVkVmFsdWVzID0ge307XG4gICAgdmFyIGNvbnRyb2xsZXJNYXAgPSBndWkuX19yZW1lbWJlcmVkT2JqZWN0SW5kZWNlc1RvQ29udHJvbGxlcnNbaW5kZXhdO1xuICAgIENvbW1vbi5lYWNoKGNvbnRyb2xsZXJNYXAsIGZ1bmN0aW9uIChjb250cm9sbGVyLCBwcm9wZXJ0eSkge1xuICAgICAgc2F2ZWRWYWx1ZXNbcHJvcGVydHldID0gdXNlSW5pdGlhbFZhbHVlcyA/IGNvbnRyb2xsZXIuaW5pdGlhbFZhbHVlIDogY29udHJvbGxlci5nZXRWYWx1ZSgpO1xuICAgIH0pO1xuICAgIHRvUmV0dXJuW2luZGV4XSA9IHNhdmVkVmFsdWVzO1xuICB9KTtcbiAgcmV0dXJuIHRvUmV0dXJuO1xufVxuZnVuY3Rpb24gc2V0UHJlc2V0U2VsZWN0SW5kZXgoZ3VpKSB7XG4gIGZvciAodmFyIGluZGV4ID0gMDsgaW5kZXggPCBndWkuX19wcmVzZXRfc2VsZWN0Lmxlbmd0aDsgaW5kZXgrKykge1xuICAgIGlmIChndWkuX19wcmVzZXRfc2VsZWN0W2luZGV4XS52YWx1ZSA9PT0gZ3VpLnByZXNldCkge1xuICAgICAgZ3VpLl9fcHJlc2V0X3NlbGVjdC5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiB1cGRhdGVEaXNwbGF5cyhjb250cm9sbGVyQXJyYXkpIHtcbiAgaWYgKGNvbnRyb2xsZXJBcnJheS5sZW5ndGggIT09IDApIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUkMS5jYWxsKHdpbmRvdywgZnVuY3Rpb24gKCkge1xuICAgICAgdXBkYXRlRGlzcGxheXMoY29udHJvbGxlckFycmF5KTtcbiAgICB9KTtcbiAgfVxuICBDb21tb24uZWFjaChjb250cm9sbGVyQXJyYXksIGZ1bmN0aW9uIChjKSB7XG4gICAgYy51cGRhdGVEaXNwbGF5KCk7XG4gIH0pO1xufVxuXG52YXIgY29sb3IgPSB7XG4gIENvbG9yOiBDb2xvcixcbiAgbWF0aDogQ29sb3JNYXRoLFxuICBpbnRlcnByZXQ6IGludGVycHJldFxufTtcbnZhciBjb250cm9sbGVycyA9IHtcbiAgQ29udHJvbGxlcjogQ29udHJvbGxlcixcbiAgQm9vbGVhbkNvbnRyb2xsZXI6IEJvb2xlYW5Db250cm9sbGVyLFxuICBPcHRpb25Db250cm9sbGVyOiBPcHRpb25Db250cm9sbGVyLFxuICBTdHJpbmdDb250cm9sbGVyOiBTdHJpbmdDb250cm9sbGVyLFxuICBOdW1iZXJDb250cm9sbGVyOiBOdW1iZXJDb250cm9sbGVyLFxuICBOdW1iZXJDb250cm9sbGVyQm94OiBOdW1iZXJDb250cm9sbGVyQm94LFxuICBOdW1iZXJDb250cm9sbGVyU2xpZGVyOiBOdW1iZXJDb250cm9sbGVyU2xpZGVyLFxuICBGdW5jdGlvbkNvbnRyb2xsZXI6IEZ1bmN0aW9uQ29udHJvbGxlcixcbiAgQ29sb3JDb250cm9sbGVyOiBDb2xvckNvbnRyb2xsZXJcbn07XG52YXIgZG9tJDEgPSB7IGRvbTogZG9tIH07XG52YXIgZ3VpID0geyBHVUk6IEdVSSB9O1xudmFyIEdVSSQxID0gR1VJO1xudmFyIGluZGV4ID0ge1xuICBjb2xvcjogY29sb3IsXG4gIGNvbnRyb2xsZXJzOiBjb250cm9sbGVycyxcbiAgZG9tOiBkb20kMSxcbiAgZ3VpOiBndWksXG4gIEdVSTogR1VJJDFcbn07XG5cbmV4cG9ydCB7IGNvbG9yLCBjb250cm9sbGVycywgZG9tJDEgYXMgZG9tLCBndWksIEdVSSQxIGFzIEdVSSB9O1xuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXQuZ3VpLm1vZHVsZS5qcy5tYXBcbiIsImltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xuaW1wb3J0IENhbWVyYSwgeyBDYW1lcmFCb3VuZHMgfSBmcm9tICcuL0NhbWVyYSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhY2tncm91bmQgaW1wbGVtZW50cyBFbnRpdHkge1xuICBwcml2YXRlIHJlYWRvbmx5IGxhcmdlR3JpZFNpemU6IG51bWJlciA9IDMwMDtcbiAgcHJpdmF0ZSByZWFkb25seSBsYXJnZUdyaWRXaWR0aDogbnVtYmVyID0gMjtcbiAgcHJpdmF0ZSByZWFkb25seSBsYXJnZUdyaWRDb2xvdXI6IHN0cmluZyA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgc21hbGxHcmlkU2l6ZTogbnVtYmVyID0gMTAwO1xuICBwcml2YXRlIHJlYWRvbmx5IHNtYWxsR3JpZFdpZHRoOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIHJlYWRvbmx5IHNtYWxsR3JpZENvbG91cjogc3RyaW5nID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSc7XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7fVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FtZXJhOiBDYW1lcmEpOiB2b2lkIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb25zdCBib3VuZHMgPSBjYW1lcmEuYm91bmRzO1xuXG4gICAgLy8gTGFyZ2UgZ3JpZFxuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmxhcmdlR3JpZENvbG91cjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMubGFyZ2VHcmlkV2lkdGg7XG4gICAgdGhpcy5kcmF3R3JpZChcbiAgICAgIGNvbnRleHQsXG4gICAgICB0aGlzLmxhcmdlR3JpZFNpemUsXG4gICAgICBib3VuZHNcbiAgICApO1xuXG4gICAgLy8gU21hbGwgZ3JpZFxuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLnNtYWxsR3JpZENvbG91cjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IHRoaXMuc21hbGxHcmlkV2lkdGg7XG4gICAgdGhpcy5kcmF3R3JpZChcbiAgICAgIGNvbnRleHQsXG4gICAgICB0aGlzLnNtYWxsR3JpZFNpemUsXG4gICAgICBib3VuZHNcbiAgICApO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3R3JpZChcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgc2l6ZTogbnVtYmVyLFxuICAgIGJvdW5kczogQ2FtZXJhQm91bmRzXG4gICk6IHZvaWQge1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG5cbiAgICBjb25zdCBzdGFydFggPSBNYXRoLmZsb29yKGJvdW5kcy5sZWZ0IC8gc2l6ZSkgKiBzaXplO1xuICAgIGNvbnN0IGVuZFggPSBNYXRoLmNlaWwoYm91bmRzLnJpZ2h0IC8gc2l6ZSkgKiBzaXplO1xuICAgIGZvciAobGV0IHggPSBzdGFydFg7IHggPD0gZW5kWDsgeCArPSBzaXplKSB7XG4gICAgICBjb250ZXh0Lm1vdmVUbyh4LCBib3VuZHMudG9wKTtcbiAgICAgIGNvbnRleHQubGluZVRvKHgsIGJvdW5kcy5ib3R0b20pO1xuICAgIH1cblxuICAgIGNvbnN0IHN0YXJ0WSA9IE1hdGguZmxvb3IoYm91bmRzLnRvcCAvIHNpemUpICogc2l6ZTtcbiAgICBjb25zdCBlbmRZID0gTWF0aC5jZWlsKGJvdW5kcy5ib3R0b20gLyBzaXplKSAqIHNpemU7XG4gICAgZm9yIChsZXQgeSA9IHN0YXJ0WTsgeSA8PSBlbmRZOyB5ICs9IHNpemUpIHtcbiAgICAgIGNvbnRleHQubW92ZVRvKGJvdW5kcy5sZWZ0LCB5KTtcbiAgICAgIGNvbnRleHQubGluZVRvKGJvdW5kcy5yaWdodCwgeSk7XG4gICAgfVxuXG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJy4vdmVjJztcblxuZXhwb3J0IHR5cGUgQ2FtZXJhQm91bmRzID0ge1xuICB0b3A6IG51bWJlcjtcbiAgYm90dG9tOiBudW1iZXI7XG4gIGxlZnQ6IG51bWJlcjtcbiAgcmlnaHQ6IG51bWJlclxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FtZXJhIHtcbiAgcHJpdmF0ZSByZWFkb25seSBlYXNlQW1vdW50OiBudW1iZXIgPSAwLjk7XG5cbiAgcHVibGljIHBvc2l0aW9uOiB2ZWM7XG4gIHByaXZhdGUgYWN0dWFsUG9zaXRpb246IHZlYztcblxuICBwdWJsaWMgY29uc3RydWN0b3IocG9zaXRpb246IHZlYykge1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuY2xvbmUocG9zaXRpb24pO1xuICAgIHRoaXMuYWN0dWFsUG9zaXRpb24gPSB2ZWMuY2xvbmUocG9zaXRpb24pO1xuICB9XG5cbiAgcHVibGljIGdldCBib3VuZHMoKTogQ2FtZXJhQm91bmRzIHtcbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiB0aGlzLmFjdHVhbFBvc2l0aW9uLnkgLSAoR2FtZS5zY3JlZW4ueSAvIDIpLFxuICAgICAgYm90dG9tOiB0aGlzLmFjdHVhbFBvc2l0aW9uLnkgKyAoR2FtZS5zY3JlZW4ueSAvIDIpLFxuICAgICAgbGVmdDogdGhpcy5hY3R1YWxQb3NpdGlvbi54IC0gKEdhbWUuc2NyZWVuLnggLyAyKSxcbiAgICAgIHJpZ2h0OiB0aGlzLmFjdHVhbFBvc2l0aW9uLnggKyAoR2FtZS5zY3JlZW4ueCAvIDIpXG4gICAgfTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCk6IHZvaWQge1xuICAgIGNvbnN0IGRlbHRhID0gdmVjLnN1Yih0aGlzLmFjdHVhbFBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKTtcbiAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gdmVjLmFkZCh0aGlzLnBvc2l0aW9uLCB2ZWMubXVsKGRlbHRhLCB0aGlzLmVhc2VBbW91bnQpKTtcbiAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgIChHYW1lLnNjcmVlbi54IC8gMikgLSB0aGlzLmFjdHVhbFBvc2l0aW9uLngsXG4gICAgICAoR2FtZS5zY3JlZW4ueSAvIDIpIC0gdGhpcy5hY3R1YWxQb3NpdGlvbi55XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCBEZWJ1ZyBmcm9tICcuL0RlYnVnJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBTa2lkQ2FudmFzIGZyb20gJy4vU2tpZENhbnZhcyc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcbmltcG9ydCBIYXNXaGVlbHMsIHsgV2hlZWxTdGF0cyB9IGZyb20gJy4vSGFzV2hlZWxzJztcbmltcG9ydCBXaGVlbCBmcm9tICcuL1doZWVsJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJy4vdmVjJztcbmltcG9ydCB7IGNsYW1wLCB3cmFwRGlyZWN0aW9uIH0gZnJvbSAnLi91dGlsaXRpZXMnO1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzb24nO1xuXG5lbnVtIFdoZWVsUG9zaXRpb24ge1xuICBGcm9udExlZnQgPSAwLFxuICBGcm9udFJpZ2h0ID0gMSxcbiAgQmFja0xlZnQgPSAyLFxuICBCYWNrUmlnaHQgPSAzLFxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXIgaW1wbGVtZW50cyBFbnRpdHksIEhhc1doZWVscyB7XG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjO1xuICBwdWJsaWMgZGlyZWN0aW9uOiBudW1iZXI7XG4gIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgdGhyb3R0bGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGJyYWtlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBoYW5kYnJha2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHN0ZWVyaW5nOiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgd2hlZWxzOiBXaGVlbFtdID0gW107XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHBvc2l0aW9uOiB2ZWMsXG4gICAgZGlyZWN0aW9uOiBudW1iZXIgPSAwXG4gICkge1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuY2xvbmUocG9zaXRpb24pO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXG4gICAgLy8gQWRkIHdoZWVsc1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uRnJvbnRMZWZ0XSA9IG5ldyBXaGVlbChcbiAgICAgIHRoaXMuZ2V0V2hlZWxQb3NpdGlvbihXaGVlbFBvc2l0aW9uLkZyb250TGVmdCksXG4gICAgICB0aGlzLmRpcmVjdGlvblxuICAgICk7XG4gICAgdGhpcy53aGVlbHNbV2hlZWxQb3NpdGlvbi5Gcm9udFJpZ2h0XSA9IG5ldyBXaGVlbChcbiAgICAgIHRoaXMuZ2V0V2hlZWxQb3NpdGlvbihXaGVlbFBvc2l0aW9uLkZyb250UmlnaHQpLFxuICAgICAgdGhpcy5kaXJlY3Rpb25cbiAgICApO1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uQmFja0xlZnRdID0gbmV3IFdoZWVsKFxuICAgICAgdGhpcy5nZXRXaGVlbFBvc2l0aW9uKFdoZWVsUG9zaXRpb24uQmFja0xlZnQpLFxuICAgICAgdGhpcy5kaXJlY3Rpb25cbiAgICApO1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uQmFja1JpZ2h0XSA9IG5ldyBXaGVlbChcbiAgICAgIHRoaXMuZ2V0V2hlZWxQb3NpdGlvbihXaGVlbFBvc2l0aW9uLkJhY2tSaWdodCksXG4gICAgICB0aGlzLmRpcmVjdGlvblxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldFdoZWVsUG9zaXRpb24od2hlZWw6IFdoZWVsUG9zaXRpb24pOiB2ZWMge1xuICAgIGxldCBvZmZzZXQ6IHZlYztcbiAgICBzd2l0Y2ggKHdoZWVsKSB7XG4gICAgICBjYXNlIFdoZWVsUG9zaXRpb24uRnJvbnRMZWZ0OlxuICAgICAgICBvZmZzZXQgPSB2ZWMoXG4gICAgICAgICAgR2FtZS5zZXR0aW5ncy5mcm9udFdoZWVsc09mZnNldCxcbiAgICAgICAgICBHYW1lLnNldHRpbmdzLmxlZnRXaGVlbHNPZmZzZXRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFdoZWVsUG9zaXRpb24uRnJvbnRSaWdodDpcbiAgICAgICAgb2Zmc2V0ID0gdmVjKFxuICAgICAgICAgIEdhbWUuc2V0dGluZ3MuZnJvbnRXaGVlbHNPZmZzZXQsXG4gICAgICAgICAgR2FtZS5zZXR0aW5ncy5yaWdodFdoZWVsc09mZnNldFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgV2hlZWxQb3NpdGlvbi5CYWNrTGVmdDpcbiAgICAgICAgb2Zmc2V0ID0gdmVjKFxuICAgICAgICAgIEdhbWUuc2V0dGluZ3MuYmFja1doZWVsc09mZnNldCxcbiAgICAgICAgICBHYW1lLnNldHRpbmdzLmxlZnRXaGVlbHNPZmZzZXRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFdoZWVsUG9zaXRpb24uQmFja1JpZ2h0OlxuICAgICAgICBvZmZzZXQgPSB2ZWMoXG4gICAgICAgICAgR2FtZS5zZXR0aW5ncy5iYWNrV2hlZWxzT2Zmc2V0LFxuICAgICAgICAgIEdhbWUuc2V0dGluZ3MucmlnaHRXaGVlbHNPZmZzZXRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZlYy5hZGQodGhpcy5wb3NpdGlvbiwgdmVjLnJvdChvZmZzZXQsIHRoaXMuZGlyZWN0aW9uKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0V2hlZWxTdGF0cygpOiBXaGVlbFN0YXRzW10ge1xuICAgIHJldHVybiB0aGlzLndoZWVscy5tYXAod2hlZWwgPT4gd2hlZWwuc3RhdHMpO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUlucHV0KCk6IHZvaWQge1xuICAgIC8vIFRocm90dGxlIC8gYnJha2UgLyBoYW5kYnJha2VcbiAgICB0aGlzLnRocm90dGxlID0gSW5wdXQua2V5RG93bihjb25maWcuY29udHJvbHMudGhyb3R0bGUgYXMgYW55KTtcbiAgICB0aGlzLmJyYWtlID0gSW5wdXQua2V5RG93bihjb25maWcuY29udHJvbHMuYnJha2UgYXMgYW55KTtcbiAgICB0aGlzLmhhbmRicmFrZSA9IElucHV0LmtleURvd24oY29uZmlnLmNvbnRyb2xzLmhhbmRicmFrZSBhcyBhbnkpO1xuXG4gICAgLy8gU3RlZXJpbmdcbiAgICBjb25zdCBzdGVlcmluZ0Ftb3VudCA9IEdhbWUuc2V0dGluZ3MuY2FyU3RlZXJpbmdBbW91bnQgKyAoXG4gICAgICBNYXRoLmFicyh0aGlzLnN0ZWVyaW5nKSAqIEdhbWUuc2V0dGluZ3MuY2FyU3RlZXJpbmdDdXJ2ZVxuICAgICk7XG4gICAgaWYgKElucHV0LmtleURvd24oY29uZmlnLmNvbnRyb2xzLmxlZnQgYXMgYW55KSkge1xuICAgICAgdGhpcy5zdGVlcmluZyAtPSBzdGVlcmluZ0Ftb3VudDtcbiAgICB9IGVsc2UgaWYgKElucHV0LmtleURvd24oY29uZmlnLmNvbnRyb2xzLnJpZ2h0IGFzIGFueSkpIHtcbiAgICAgIHRoaXMuc3RlZXJpbmcgKz0gc3RlZXJpbmdBbW91bnQ7XG4gICAgfSBlbHNlIGlmICh0aGlzLnN0ZWVyaW5nICE9PSAwKSB7XG4gICAgICAvLyBJZiBubyBzdGVlcmluZyBrZXlzIGFyZSBwcmVzc2VkLCBncmFkdWFsbHkgcmVzZXQgc3RlZXJpbmdcbiAgICAgIHRoaXMuc3RlZXJpbmcgKz0gKHRoaXMuc3RlZXJpbmcgPCAwID8gMSA6IC0xKSAqXG4gICAgICAgIEdhbWUuc2V0dGluZ3MuY2FyU3RlZXJpbmdSZXNldEFtb3VudDtcblxuICAgICAgLy8gU25hcCBzdGVlcmluZyBiYWNrIHRvIHplcm8gd2hlbiBpdCBnZXRzIHNtYWxsIGVub3VnaFxuICAgICAgaWYgKE1hdGguYWJzKHRoaXMuc3RlZXJpbmcpIDw9IEdhbWUuc2V0dGluZ3MuY2FyU3RlZXJpbmdSZXNldEFtb3VudCkge1xuICAgICAgICB0aGlzLnN0ZWVyaW5nID0gMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDbGFtcCBzdGVlcmluZ1xuICAgIHRoaXMuc3RlZXJpbmcgPSBjbGFtcCh0aGlzLnN0ZWVyaW5nLCAtMSwgMSk7XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkcml2ZSA9IHRoaXMudGhyb3R0bGUgPyBHYW1lLnNldHRpbmdzLmNhckVuZ2luZVBvd2VyIDogMDtcbiAgICBjb25zdCBicmFrZSA9IHRoaXMuYnJha2UgPyBHYW1lLnNldHRpbmdzLmNhckJyYWtlUG93ZXIgOiAwO1xuICAgIGxldCBzdGVlcmluZyA9IHdyYXBEaXJlY3Rpb24odGhpcy5kaXJlY3Rpb24gKyAoXG4gICAgICB0aGlzLnN0ZWVyaW5nICogR2FtZS5zZXR0aW5ncy5jYXJTdGVlcmluZ0FuZ2xlTWF4XG4gICAgKSk7XG5cbiAgICAvLyBVcGRhdGUgd2hlZWxzXG4gICAgdGhpcy53aGVlbHNbV2hlZWxQb3NpdGlvbi5Gcm9udExlZnRdLnVwZGF0ZShcbiAgICAgIGR0LFxuICAgICAgR2FtZS5zZXR0aW5ncy5mcm9udFdoZWVsRHJpdmUgPyBkcml2ZSA6IDAsXG4gICAgICBicmFrZSxcbiAgICAgIHRoaXMuaGFuZGJyYWtlLFxuICAgICAgc3RlZXJpbmdcbiAgICApO1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uRnJvbnRSaWdodF0udXBkYXRlKFxuICAgICAgZHQsXG4gICAgICBHYW1lLnNldHRpbmdzLmZyb250V2hlZWxEcml2ZSA/IGRyaXZlIDogMCxcbiAgICAgIGJyYWtlLFxuICAgICAgdGhpcy5oYW5kYnJha2UsXG4gICAgICBzdGVlcmluZ1xuICAgICk7XG4gICAgdGhpcy53aGVlbHNbV2hlZWxQb3NpdGlvbi5CYWNrTGVmdF0udXBkYXRlKFxuICAgICAgZHQsXG4gICAgICBHYW1lLnNldHRpbmdzLnJlYXJXaGVlbERyaXZlID8gZHJpdmUgOiAwLFxuICAgICAgYnJha2UsXG4gICAgICB0aGlzLmhhbmRicmFrZSxcbiAgICAgIHRoaXMuZGlyZWN0aW9uXG4gICAgKTtcbiAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkJhY2tSaWdodF0udXBkYXRlKFxuICAgICAgZHQsXG4gICAgICBHYW1lLnNldHRpbmdzLnJlYXJXaGVlbERyaXZlID8gZHJpdmUgOiAwLFxuICAgICAgYnJha2UsXG4gICAgICB0aGlzLmhhbmRicmFrZSxcbiAgICAgIHRoaXMuZGlyZWN0aW9uXG4gICAgKTtcblxuICAgIC8vIEZpbmQgY2FyIGNlbnRlclxuICAgIGNvbnN0IHBvc2l0aW9uID0gdmVjLmF2ZyguLi50aGlzLndoZWVscy5tYXAod2hlZWwgPT4gd2hlZWwucG9zaXRpb24pKTtcblxuICAgIC8vIEZpbmQgY2FyIGRpcmVjdGlvblxuICAgIGNvbnN0IGZyb250QXhsZSA9IHZlYy5hdmcoXG4gICAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkZyb250TGVmdF0ucG9zaXRpb24sXG4gICAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkZyb250UmlnaHRdLnBvc2l0aW9uXG4gICAgKTtcbiAgICBjb25zdCByZWFyQXhsZSA9IHZlYy5hdmcoXG4gICAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkJhY2tMZWZ0XS5wb3NpdGlvbixcbiAgICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uQmFja1JpZ2h0XS5wb3NpdGlvblxuICAgICk7XG4gICAgY29uc3QgZGlyZWN0aW9uID0gdmVjLnJhZCh2ZWMuc3ViKFxuICAgICAgZnJvbnRBeGxlLFxuICAgICAgcmVhckF4bGVcbiAgICApKTtcblxuICAgIHRoaXMuc3BlZWQgPSB2ZWMubGVuKHZlYy5zdWIocG9zaXRpb24sIHRoaXMucG9zaXRpb24pKTtcbiAgICB0aGlzLnBvc2l0aW9uID0gcG9zaXRpb247XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cbiAgICAvLyBEZWJ1ZyBvdXRwdXRcbiAgICBEZWJ1Zy52YWx1ZSgncG9zaXRpb24nLCB2ZWMuc3RyKHRoaXMucG9zaXRpb24pKTtcbiAgICBEZWJ1Zy52YWx1ZSgnZGlyZWN0aW9uJywgdGhpcy5kaXJlY3Rpb24pO1xuICAgIERlYnVnLnZhbHVlKCdzcGVlZCcsIHRoaXMuc3BlZWQpO1xuICAgIERlYnVnLnZhbHVlKCdzdGVlcmluZycsIHRoaXMuc3RlZXJpbmcpO1xuICAgIERlYnVnLnZhbHVlKFxuICAgICAgJ3Rocm90dGxlJyxcbiAgICAgICd0aHJvdHRsZScsXG4gICAgICB7XG4gICAgICAgIHNob3dMYWJlbDogZmFsc2UsXG4gICAgICAgIGZvcmVncm91bmRDb2xvdXI6IHRoaXMudGhyb3R0bGUgPyAnd2hpdGUnIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgICB9XG4gICAgKTtcbiAgICBEZWJ1Zy52YWx1ZShcbiAgICAgICdicmFrZScsXG4gICAgICAnYnJha2UnLFxuICAgICAge1xuICAgICAgICBzaG93TGFiZWw6IGZhbHNlLFxuICAgICAgICBmb3JlZ3JvdW5kQ29sb3VyOiB0aGlzLmJyYWtlID8gJ3doaXRlJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgICAgfVxuICAgICk7XG4gICAgLy8gRGVidWcudmFsdWUoXG4gICAgLy8gICAncmV2ZXJzZScsXG4gICAgLy8gICAncmV2ZXJzZScsXG4gICAgLy8gICB7XG4gICAgLy8gICAgIHNob3dMYWJlbDogZmFsc2UsXG4gICAgLy8gICAgIGZvcmVncm91bmRDb2xvdXI6IHRoaXMucmV2ZXJzZSA/ICd3aGl0ZScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpJyxcbiAgICAvLyAgIH1cbiAgICAvLyApO1xuICAgIERlYnVnLnZhbHVlKFxuICAgICAgJ2hhbmRicmFrZScsXG4gICAgICAnaGFuZGJyYWtlJyxcbiAgICAgIHtcbiAgICAgICAgc2hvd0xhYmVsOiBmYWxzZSxcbiAgICAgICAgZm9yZWdyb3VuZENvbG91cjogdGhpcy5oYW5kYnJha2UgPyAnd2hpdGUnIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgICB9XG4gICAgKTtcblxuICAgIC8vIENvbnN0cmFpbiB3aGVlbHNcbiAgICBzdGVlcmluZyA9IHdyYXBEaXJlY3Rpb24odGhpcy5kaXJlY3Rpb24gKyAoXG4gICAgICB0aGlzLnN0ZWVyaW5nICogR2FtZS5zZXR0aW5ncy5jYXJTdGVlcmluZ0FuZ2xlTWF4XG4gICAgKSk7XG4gICAgdGhpcy53aGVlbHNbV2hlZWxQb3NpdGlvbi5Gcm9udExlZnRdLnBvc2l0aW9uID0gdGhpcy5nZXRXaGVlbFBvc2l0aW9uKFxuICAgICAgV2hlZWxQb3NpdGlvbi5Gcm9udExlZnRcbiAgICApO1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uRnJvbnRMZWZ0XS5kaXJlY3Rpb24gPSBzdGVlcmluZztcbiAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkZyb250UmlnaHRdLnBvc2l0aW9uID0gdGhpcy5nZXRXaGVlbFBvc2l0aW9uKFxuICAgICAgV2hlZWxQb3NpdGlvbi5Gcm9udFJpZ2h0XG4gICAgKTtcbiAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkZyb250UmlnaHRdLmRpcmVjdGlvbiA9IHN0ZWVyaW5nO1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uQmFja0xlZnRdLnBvc2l0aW9uID0gdGhpcy5nZXRXaGVlbFBvc2l0aW9uKFxuICAgICAgV2hlZWxQb3NpdGlvbi5CYWNrTGVmdFxuICAgICk7XG4gICAgdGhpcy53aGVlbHNbV2hlZWxQb3NpdGlvbi5CYWNrTGVmdF0uZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gICAgdGhpcy53aGVlbHNbV2hlZWxQb3NpdGlvbi5CYWNrUmlnaHRdLnBvc2l0aW9uID0gdGhpcy5nZXRXaGVlbFBvc2l0aW9uKFxuICAgICAgV2hlZWxQb3NpdGlvbi5CYWNrUmlnaHRcbiAgICApO1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uQmFja1JpZ2h0XS5kaXJlY3Rpb24gPSB0aGlzLmRpcmVjdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgc2tpZENhbnZhczogU2tpZENhbnZhcyk6IHZvaWQge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICBjb250ZXh0LnJvdGF0ZSh0aGlzLmRpcmVjdGlvbik7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgIGNvbnRleHQuc3Ryb2tlUmVjdChcbiAgICAgIC1HYW1lLnNldHRpbmdzLmNhckxlbmd0aCAvIDIsXG4gICAgICAtR2FtZS5zZXR0aW5ncy5jYXJXaWR0aCAvIDIsXG4gICAgICBHYW1lLnNldHRpbmdzLmNhckxlbmd0aCxcbiAgICAgIEdhbWUuc2V0dGluZ3MuY2FyV2lkdGhcbiAgICApO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgZm9yIChjb25zdCB3aGVlbCBvZiB0aGlzLndoZWVscykge1xuICAgICAgd2hlZWwuZHJhdyhjb250ZXh0LCBza2lkQ2FudmFzKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IHZlYyB9IGZyb20gJy4vdmVjJztcblxudHlwZSBEZWJ1Z09wdGlvbnMgPSB7XG4gIG1hcmdpbjogbnVtYmVyLFxuICBwYWRkaW5nOiBudW1iZXIsXG4gIGZvbnQ6IHN0cmluZyxcbiAgbGluZUhlaWdodDogbnVtYmVyLFxuICBmb3JlZ3JvdW5kQ29sb3VyOiBDb2xvdXIsXG4gIGJhY2tncm91bmRDb2xvdXI6IENvbG91cixcbiAgZGVmYXVsdFZhbHVlOiBEZWJ1Z1ZhbHVlLFxuICBkZWZhdWx0TWFya2VyOiBEZWJ1Z01hcmtlclxufTtcblxudHlwZSBEZWJ1Z1ZhbHVlID0ge1xuICBsYWJlbD86IHN0cmluZyxcbiAgdmFsdWU/OiBudW1iZXIgfCBzdHJpbmcsXG4gIGFsaWduOiAnbGVmdCcgfCAncmlnaHQnLFxuICBzaG93TGFiZWw6IGJvb2xlYW4sXG4gIHBhZGRpbmc/OiBudW1iZXIsXG4gIGZvbnQ/OiBzdHJpbmcsXG4gIGZvcmVncm91bmRDb2xvdXI/OiBDb2xvdXIsXG4gIGJhY2tncm91bmRDb2xvdXI/OiBDb2xvdXJcbn07XG5cbnR5cGUgRGVidWdNYXJrZXIgPSB7XG4gIGxhYmVsPzogc3RyaW5nLFxuICB2YWx1ZT86IG51bWJlciB8IHN0cmluZyxcbiAgcG9zaXRpb24/OiB2ZWMsXG4gIHNob3dMYWJlbDogYm9vbGVhbixcbiAgc2hvd1ZhbHVlOiBib29sZWFuLFxuICBzaG93TWFya2VyOiBib29sZWFuLFxuICBtYXJrZXJTaXplOiBudW1iZXIsXG4gIG1hcmtlclN0eWxlOiAneCcgfCAnKycgfCAnLicsXG4gIG1hcmtlckNvbG91cjogQ29sb3VyLFxuICBzcGFjZTogJ3dvcmxkJyB8ICdzY3JlZW4nLFxuICBwYWRkaW5nPzogbnVtYmVyLFxuICBmb250Pzogc3RyaW5nLFxuICBsYWJlbE9mZnNldDogdmVjLFxuICBmb3JlZ3JvdW5kQ29sb3VyPzogQ29sb3VyLFxuICBiYWNrZ3JvdW5kQ29sb3VyPzogQ29sb3VyXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWJ1ZyB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBEZWJ1ZztcbiAgcHJpdmF0ZSB2YWx1ZXM6IE1hcDxzdHJpbmcsIERlYnVnVmFsdWU+O1xuICBwcml2YXRlIG1hcmtlcnM6IE1hcDxzdHJpbmcsIERlYnVnTWFya2VyPjtcbiAgcHJpdmF0ZSBvcHRpb25zOiBEZWJ1Z09wdGlvbnM7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGVmYXVsdE9wdGlvbnM6IERlYnVnT3B0aW9ucyA9IHtcbiAgICBtYXJnaW46IDEwLFxuICAgIHBhZGRpbmc6IDQsXG4gICAgZm9udDogJzEwcHQgTHVjaWRhIENvbnNvbGUsIG1vbm9zcGFjZScsXG4gICAgbGluZUhlaWdodDogMTIsXG4gICAgZm9yZWdyb3VuZENvbG91cjogJyNmZmYnLFxuICAgIGJhY2tncm91bmRDb2xvdXI6ICcjMzMzOCcsXG4gICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICBhbGlnbjogJ2xlZnQnLFxuICAgICAgc2hvd0xhYmVsOiB0cnVlLFxuICAgIH0sXG4gICAgZGVmYXVsdE1hcmtlcjoge1xuICAgICAgc2hvd0xhYmVsOiB0cnVlLFxuICAgICAgc2hvd1ZhbHVlOiB0cnVlLFxuICAgICAgc2hvd01hcmtlcjogdHJ1ZSxcbiAgICAgIG1hcmtlclNpemU6IDYsXG4gICAgICBtYXJrZXJTdHlsZTogJ3gnLFxuICAgICAgbWFya2VyQ29sb3VyOiAnI2NjYycsXG4gICAgICBzcGFjZTogJ3dvcmxkJyxcbiAgICAgIGxhYmVsT2Zmc2V0OiB2ZWMoMTApLFxuICAgIH0sXG4gIH07XG5cbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihvcHRpb25zOiBQYXJ0aWFsPERlYnVnT3B0aW9ucz4gPSB7fSkge1xuICAgIHRoaXMub3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICAgIHRoaXMudmFsdWVzID0gbmV3IE1hcDxzdHJpbmcsIERlYnVnVmFsdWU+KCk7XG4gICAgdGhpcy5tYXJrZXJzID0gbmV3IE1hcDxzdHJpbmcsIERlYnVnTWFya2VyPigpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXNlKG9wdGlvbnM6IFBhcnRpYWw8RGVidWdPcHRpb25zPiA9IHt9KTogdm9pZCB7XG4gICAgRGVidWcuaW5zdGFuY2UgPSBuZXcgRGVidWcob3B0aW9ucyk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBEZWJ1ZyB7XG4gICAgaWYgKCFEZWJ1Zy5pbnN0YW5jZSkge1xuICAgICAgRGVidWcuaW5pdGlhbGlzZSgpO1xuICAgIH1cbiAgICByZXR1cm4gRGVidWcuaW5zdGFuY2U7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIHZhbHVlKFxuICAgIGxhYmVsOiBzdHJpbmcsXG4gICAgdmFsdWU6IHN0cmluZyB8IG51bWJlcixcbiAgICBvcHRpb25zOiBQYXJ0aWFsPERlYnVnVmFsdWU+ID0ge31cbiAgKTogdm9pZCB7XG4gICAgY29uc3QgZGVidWcgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xuICAgIGRlYnVnLnZhbHVlcy5zZXQobGFiZWwsIE9iamVjdC5hc3NpZ24oXG4gICAgICB7IGxhYmVsLCB2YWx1ZSB9LFxuICAgICAgZGVidWcuZGVmYXVsdE9wdGlvbnMuZGVmYXVsdFZhbHVlLFxuICAgICAgb3B0aW9uc1xuICAgICkpO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtYXJrZXIoXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxuICAgIHBvc2l0aW9uOiB2ZWMsXG4gICAgb3B0aW9uczogUGFydGlhbDxEZWJ1Z01hcmtlcj4gPSB7fVxuICApOiB2b2lkIHtcbiAgICBjb25zdCBkZWJ1ZyA9IERlYnVnLmdldEluc3RhbmNlKCk7XG4gICAgZGVidWcubWFya2Vycy5zZXQobGFiZWwsIE9iamVjdC5hc3NpZ24oXG4gICAgICB7IGxhYmVsLCB2YWx1ZSwgcG9zaXRpb24gfSxcbiAgICAgIGRlYnVnLmRlZmF1bHRPcHRpb25zLmRlZmF1bHRNYXJrZXIsXG4gICAgICBvcHRpb25zXG4gICAgKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgY29uc3QgZGVidWcgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xuXG4gICAgLy8gRHJhdyB3b3JsZC1zcGFjZSBtYXJrZXJzXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5zY2FsZSgxLCAxKTtcbiAgICBkZWJ1Zy5tYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHtcbiAgICAgIGlmIChtYXJrZXIuc3BhY2UgPT09ICd3b3JsZCcpIHtcbiAgICAgICAgZGVidWcuZHJhd01hcmtlcihjb250ZXh0LCBtYXJrZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgLy8gRHJhdyB2YWx1ZXMgYW5kIHNjcmVlbi1zcGFjZSBtYXJrZXJzXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgbGV0IHBvc2l0aW9uOiB2ZWM7XG4gICAgbGV0IGxlZnRZID0gZGVidWcub3B0aW9ucy5tYXJnaW47XG4gICAgbGV0IHJpZ2h0WSA9IGRlYnVnLm9wdGlvbnMubWFyZ2luO1xuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSAoZGVidWcub3B0aW9ucy5saW5lSGVpZ2h0ICsgZGVidWcub3B0aW9ucy5wYWRkaW5nICogMik7XG4gICAgZGVidWcudmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgc3dpdGNoICh2YWx1ZS5hbGlnbikge1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICBwb3NpdGlvbiA9IHZlYyhkZWJ1Zy5vcHRpb25zLm1hcmdpbiwgbGVmdFkpO1xuICAgICAgICAgIGxlZnRZICs9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICBwb3NpdGlvbiA9IHZlYyhjb250ZXh0LmNhbnZhcy5jbGllbnRXaWR0aCAtIGRlYnVnLm9wdGlvbnMubWFyZ2luLCByaWdodFkpO1xuICAgICAgICAgIHJpZ2h0WSArPSBsaW5lSGVpZ2h0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVidWcuZHJhd0xhYmVsKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICAodmFsdWUuc2hvd0xhYmVsID8gYCR7dmFsdWUubGFiZWx9OiBgIDogJycpICsgYCR7dmFsdWUudmFsdWV9YCxcbiAgICAgICAgcG9zaXRpb24sXG4gICAgICAgIHZhbHVlLmFsaWduLFxuICAgICAgICB2YWx1ZS5wYWRkaW5nID8/IGRlYnVnLm9wdGlvbnMucGFkZGluZyxcbiAgICAgICAgdmFsdWUuZm9udCA/PyBkZWJ1Zy5vcHRpb25zLmZvbnQsXG4gICAgICAgIHZhbHVlLmZvcmVncm91bmRDb2xvdXIgPz8gZGVidWcub3B0aW9ucy5mb3JlZ3JvdW5kQ29sb3VyLFxuICAgICAgICB2YWx1ZS5iYWNrZ3JvdW5kQ29sb3VyID8/IGRlYnVnLm9wdGlvbnMuYmFja2dyb3VuZENvbG91clxuICAgICAgKTtcbiAgICB9KTtcbiAgICBkZWJ1Zy5tYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHtcbiAgICAgIGlmIChtYXJrZXIuc3BhY2UgPT09ICdzY3JlZW4nKSB7XG4gICAgICAgIGRlYnVnLmRyYXdNYXJrZXIoY29udGV4dCwgbWFya2VyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcblxuICAgIC8vIENsZWFyIHZhbHVlcyBhbmQgbWFya2VycyByZWFkeSBmb3IgbmV4dCBmcmFtZVxuICAgIGRlYnVnLnZhbHVlcy5jbGVhcigpO1xuICAgIGRlYnVnLm1hcmtlcnMuY2xlYXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd01hcmtlcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG1hcmtlcjogRGVidWdNYXJrZXIpOiB2b2lkIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG1hcmtlci5wb3NpdGlvbiA/PyB2ZWMoKTtcbiAgICBpZiAobWFya2VyLnNob3dMYWJlbCB8fCBtYXJrZXIuc2hvd1ZhbHVlKSB7XG4gICAgICB0aGlzLmRyYXdMYWJlbChcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgKG1hcmtlci5zaG93TGFiZWwgPyBgJHttYXJrZXIubGFiZWx9OiBgIDogJycpXG4gICAgICAgICAgKyAobWFya2VyLnNob3dWYWx1ZSA/IGAke21hcmtlci52YWx1ZX1gIDogJycpLFxuICAgICAgICB2ZWMuYWRkKHBvc2l0aW9uID8/IHZlYygpLCBtYXJrZXIubGFiZWxPZmZzZXQpLFxuICAgICAgICAnbGVmdCcsXG4gICAgICAgIG1hcmtlci5wYWRkaW5nID8/IHRoaXMub3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBtYXJrZXIuZm9udCA/PyB0aGlzLm9wdGlvbnMuZm9udCxcbiAgICAgICAgbWFya2VyLmZvcmVncm91bmRDb2xvdXIgPz8gdGhpcy5vcHRpb25zLmZvcmVncm91bmRDb2xvdXIsXG4gICAgICAgIG1hcmtlci5iYWNrZ3JvdW5kQ29sb3VyID8/IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3VyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobWFya2VyLnNob3dNYXJrZXIpIHtcbiAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMjtcbiAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb250ZXh0LmZpbGxTdHlsZSA9IG1hcmtlci5tYXJrZXJDb2xvdXI7XG4gICAgICBzd2l0Y2ggKG1hcmtlci5tYXJrZXJTdHlsZSkge1xuICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICB0aGlzLmRyYXdDcm9zcyhjb250ZXh0LCBwb3NpdGlvbiwgbWFya2VyLm1hcmtlclNpemUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICB0aGlzLmRyYXdQbHVzKGNvbnRleHQsIHBvc2l0aW9uLCBtYXJrZXIubWFya2VyU2l6ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgIHRoaXMuZHJhd0RvdChjb250ZXh0LCBwb3NpdGlvbiwgbWFya2VyLm1hcmtlclNpemUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0xhYmVsKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgcG9zaXRpb246IHZlYyxcbiAgICBhbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyxcbiAgICBwYWRkaW5nOiBudW1iZXIsXG4gICAgZm9udDogc3RyaW5nLFxuICAgIGZvcmVncm91bmRDb2xvdXI6IENvbG91cixcbiAgICBiYWNrZ3JvdW5kQ29sb3VyOiBDb2xvdXJcbiAgKTogdm9pZCB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5mb250ID0gZm9udDtcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgIGNvbnN0IGJhY2tncm91bmRTaXplID0ge1xuICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGggKyBwYWRkaW5nICogMixcbiAgICAgIGhlaWdodDogdGhpcy5vcHRpb25zLmxpbmVIZWlnaHQgKyBwYWRkaW5nICogMixcbiAgICB9O1xuICAgIGNvbnN0IHggPSBhbGlnbiA9PT0gJ3JpZ2h0JyA/IChwb3NpdGlvbi54IC0gYmFja2dyb3VuZFNpemUud2lkdGgpIDogcG9zaXRpb24ueDtcblxuICAgIC8vIERyYXcgYmFja2dyb3VuZFxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG91cjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgeCAtIHBhZGRpbmcsXG4gICAgICBwb3NpdGlvbi55IC0gcGFkZGluZyxcbiAgICAgIGJhY2tncm91bmRTaXplLndpZHRoLFxuICAgICAgYmFja2dyb3VuZFNpemUuaGVpZ2h0XG4gICAgKTtcblxuICAgIC8vIERyYXcgdGV4dFxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZm9yZWdyb3VuZENvbG91cjtcbiAgICBjb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHBvc2l0aW9uLnkpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3Q3Jvc3MoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBwb3NpdGlvbjogdmVjLCBzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnN0IGhhbGZTaXplID0gc2l6ZSAvIDI7XG4gICAgY29udGV4dC5tb3ZlVG8ocG9zaXRpb24ueCAtIGhhbGZTaXplLCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xuICAgIGNvbnRleHQubGluZVRvKHBvc2l0aW9uLnggKyBoYWxmU2l6ZSwgcG9zaXRpb24ueSArIGhhbGZTaXplKTtcbiAgICBjb250ZXh0Lm1vdmVUbyhwb3NpdGlvbi54IC0gaGFsZlNpemUsIHBvc2l0aW9uLnkgKyBoYWxmU2l6ZSk7XG4gICAgY29udGV4dC5saW5lVG8ocG9zaXRpb24ueCArIGhhbGZTaXplLCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdQbHVzKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcG9zaXRpb246IHZlYywgc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBoYWxmU2l6ZSA9IHNpemUgLyAyO1xuICAgIGNvbnRleHQubW92ZVRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgLSBoYWxmU2l6ZSk7XG4gICAgY29udGV4dC5saW5lVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSArIGhhbGZTaXplKTtcbiAgICBjb250ZXh0Lm1vdmVUbyhwb3NpdGlvbi54IC0gaGFsZlNpemUsIHBvc2l0aW9uLnkpO1xuICAgIGNvbnRleHQubGluZVRvKHBvc2l0aW9uLnggKyBoYWxmU2l6ZSwgcG9zaXRpb24ueSk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0RvdChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvc2l0aW9uOiB2ZWMsIHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5hcmMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZSAvIDIsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgZGF0IGZyb20gJ2RhdC5ndWknO1xuaW1wb3J0IERlYnVnIGZyb20gJy4vRGVidWcnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IENhbWVyYSBmcm9tICcuL0NhbWVyYSc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQnO1xuaW1wb3J0IFNraWRDYW52YXMgZnJvbSAnLi9Ta2lkQ2FudmFzJztcbmltcG9ydCBHcmFwaCBmcm9tICcuL0dyYXBoJztcbmltcG9ydCBDYXIgZnJvbSAnLi9DYXInO1xuaW1wb3J0IFRlc3RXaGVlbCBmcm9tICcuL1Rlc3RXaGVlbCc7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICcuL3ZlYyc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4vdXRpbGl0aWVzJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWcuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBwcml2YXRlIHJlYWRvbmx5IGluaXRpYWxDYXJQb3NpdGlvbjogdmVjID0gdmVjKCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5pdGlhbENhckRpcmVjdGlvbjogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwcml2YXRlIGxhc3RGcmFtZVRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBsYXN0RnJhbWVDb3VudFRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBmcmFtZVJhdGU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgZnJhbWVDb3VudDogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgc3RhdGljIHNjcmVlbjogdmVjO1xuICBwcml2YXRlIGNhbWVyYTogQ2FtZXJhO1xuICBwcml2YXRlIGJhY2tncm91bmQ6IEJhY2tncm91bmQ7XG4gIHByaXZhdGUgc2tpZENhbnZhczogU2tpZENhbnZhcztcbiAgcHJpdmF0ZSBncmFwaDogR3JhcGg7XG5cbiAgcHJpdmF0ZSBjYXI6IENhcjtcbiAgcHJpdmF0ZSB0ZXN0V2hlZWw6IFRlc3RXaGVlbDtcblxuICBwdWJsaWMgc3RhdGljIHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge1xuICAgIHJlc2V0OiAoKSA9PiB7IH0sXG4gICAgdGVzdFdoZWVsOiBmYWxzZSxcbiAgICBkcmF3U2xpcEdyYXBoOiB0cnVlLFxuICAgIGNhcldpZHRoOiAzMCxcbiAgICBjYXJMZW5ndGg6IDUwLFxuICAgIGZyb250V2hlZWxzT2Zmc2V0OiAxNyxcbiAgICBiYWNrV2hlZWxzT2Zmc2V0OiAtMTcsXG4gICAgcmlnaHRXaGVlbHNPZmZzZXQ6IDE0LFxuICAgIGxlZnRXaGVlbHNPZmZzZXQ6IC0xNCxcbiAgICBjYXJFbmdpbmVQb3dlcjogODAsXG4gICAgY2FyQnJha2VQb3dlcjogNTAsXG4gICAgY2FyU3RlZXJpbmdBbW91bnQ6IDAuMDIsXG4gICAgY2FyU3RlZXJpbmdDdXJ2ZTogMC4wNixcbiAgICBjYXJTdGVlcmluZ1Jlc2V0QW1vdW50OiAwLjA4LFxuICAgIGNhck1heFNwZWVkOiAxNzAsXG4gICAgY2FyU3RlZXJpbmdBbmdsZU1heDogMC43LFxuICAgIHdoZWVsV2lkdGg6IDQsXG4gICAgd2hlZWxMZW5ndGg6IDEyLFxuICAgIHR5cmVMb25naXR1ZGluYWxEcmFnOiAwLjAwMSxcbiAgICB0eXJlTGF0ZXJhbERyYWdNaW46IDAuMDI4LFxuICAgIHR5cmVMYXRlcmFsRHJhZ01heDogMC4xOTMsXG4gICAgdHlyZVNwZWVkT2Zmc2V0OiAtMC4xMjEsXG4gICAgdHlyZVNwZWVkQ29lZmZpY2llbnQ6IDEuNixcbiAgICB0eXJlU2xpcE9mZnNldDogMC43NixcbiAgICB0eXJlU2xpcENvZWZmaWNpZW50OiAwLjgsXG4gICAgdXNlU2xpcEN1cnZlOiB0cnVlLFxuICAgIHNsaXBDdXJ2ZUNvbnRyb2xQb2ludHM6IFswLCAwLjAsIDAuMSwgMC4zLCAwLjUsIDAuNiwgMC43LCAwLjgsIDAuODUsIDAuOTUsIDFdLFxuICAgIGZyb250V2hlZWxEcml2ZTogdHJ1ZSxcbiAgICByZWFyV2hlZWxEcml2ZTogdHJ1ZSxcbiAgfTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoY29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwpIHtcbiAgICBpZiAoY29udGFpbmVyID09PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0EgdmFsaWQgY29udGFpbmVyIGVsZW1lbnQgbXVzdCBiZSBzcGVjaWZpZWQuJyk7XG4gICAgfVxuICAgIGlmIChjb250YWluZXIudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSAnY2FudmFzJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDb250YWluZXIgZWxlbWVudCBtdXN0IGJlIGEgY2FudmFzLicpO1xuICAgIH1cbiAgICB0aGlzLmNhbnZhcyA9IGNvbnRhaW5lciBhcyBIVE1MQ2FudmFzRWxlbWVudDtcblxuICAgIC8vIEdldCBhIDJkIGNvbnRleHRcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoY29udGV4dCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZ2V0IGEgMmQgY29udGV4dC5cIik7XG4gICAgfVxuXG4gICAgLy8gSGFuZGxlIHJlc2l6ZVxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLnJlc2l6ZS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgdGhpcy5yZXNpemUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplKCk6IHZvaWQge1xuICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0O1xuICB9XG5cbiAgcHVibGljIGluaXRpYWxpc2UoKTogdm9pZCB7XG4gICAgSW5wdXQuaW5pdGlhbGlzZSgpO1xuXG4gICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKHRoaXMuaW5pdGlhbENhclBvc2l0aW9uKTtcbiAgICB0aGlzLmJhY2tncm91bmQgPSBuZXcgQmFja2dyb3VuZCgpO1xuICAgIHRoaXMuc2tpZENhbnZhcyA9IG5ldyBTa2lkQ2FudmFzKCk7XG4gICAgdGhpcy5ncmFwaCA9IG5ldyBHcmFwaCgpO1xuXG4gICAgLy8gUmVzZXQgY2FyIHBvc2l0aW9uIGFuZCBkaXJlY3Rpb25cbiAgICBjb25zdCByZXNldCA9ICgpID0+IHtcbiAgICAgIHRoaXMuY2FyID0gbmV3IENhcihcbiAgICAgICAgdGhpcy5pbml0aWFsQ2FyUG9zaXRpb24sXG4gICAgICAgIHRoaXMuaW5pdGlhbENhckRpcmVjdGlvblxuICAgICAgKTtcblxuICAgICAgdGhpcy50ZXN0V2hlZWwgPSBuZXcgVGVzdFdoZWVsKFxuICAgICAgICB0aGlzLmluaXRpYWxDYXJQb3NpdGlvbixcbiAgICAgICAgdGhpcy5pbml0aWFsQ2FyRGlyZWN0aW9uXG4gICAgICApO1xuICAgIH07XG4gICAgR2FtZS5zZXR0aW5ncy5yZXNldCA9IHJlc2V0O1xuICAgIHJlc2V0KCk7XG5cbiAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSB0aGlzLmxhc3RGcmFtZUNvdW50VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIHRoaXMubG9vcCgpO1xuXG4gICAgLy8gU2V0dXAgR1VJXG4gICAgY29uc3QgZ3VpID0gbmV3IGRhdC5HVUkoeyB3aWR0aDogMzUwIH0pO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ3Jlc2V0Jyk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAndGVzdFdoZWVsJyk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAnZHJhd1NsaXBHcmFwaCcpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ2NhcldpZHRoJykubWluKDEwKS5tYXgoMTAwKS5zdGVwKDEpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ2Nhckxlbmd0aCcpLm1pbigxMCkubWF4KDEwMCkuc3RlcCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICdmcm9udFdoZWVsc09mZnNldCcpLm1pbigtMTAwKS5tYXgoMTAwKS5zdGVwKDEpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ2JhY2tXaGVlbHNPZmZzZXQnKS5taW4oLTEwMCkubWF4KDEwMCkuc3RlcCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICdyaWdodFdoZWVsc09mZnNldCcpLm1pbigtMTAwKS5tYXgoMTAwKS5zdGVwKDEpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ2xlZnRXaGVlbHNPZmZzZXQnKS5taW4oLTEwMCkubWF4KDEwMCkuc3RlcCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICdjYXJFbmdpbmVQb3dlcicpLm1pbigwKS5tYXgoMTAwKS5zdGVwKDEpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ2NhckJyYWtlUG93ZXInKS5taW4oMCkubWF4KDEwMCkuc3RlcCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICdjYXJTdGVlcmluZ0Ftb3VudCcpLm1pbigwKS5tYXgoMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAnY2FyU3RlZXJpbmdDdXJ2ZScpLm1pbigwKS5tYXgoMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAnY2FyU3RlZXJpbmdSZXNldEFtb3VudCcpLm1pbigwKS5tYXgoMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAnY2FyTWF4U3BlZWQnKS5taW4oMCkubWF4KDUwMCkuc3RlcCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICdjYXJTdGVlcmluZ0FuZ2xlTWF4JykubWluKDApLm1heChNYXRoLlBJKS5zdGVwKDAuMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAnd2hlZWxXaWR0aCcpLm1pbigxMCkubWF4KDEwMCkuc3RlcCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICd3aGVlbExlbmd0aCcpLm1pbigxMCkubWF4KDEwMCkuc3RlcCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICd0eXJlTG9uZ2l0dWRpbmFsRHJhZycpLm1pbigwKS5tYXgoMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAndHlyZUxhdGVyYWxEcmFnTWluJykubWluKDApLm1heCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICd0eXJlTGF0ZXJhbERyYWdNYXgnKS5taW4oMCkubWF4KDEpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ3R5cmVTcGVlZE9mZnNldCcpXG4gICAgICAubWluKC0xKS5tYXgoMSlcbiAgICAgIC5vbkNoYW5nZShkZWJvdW5jZSh0aGlzLmdyYXBoLnVwZGF0ZS5iaW5kKHRoaXMuZ3JhcGgpKSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAndHlyZVNwZWVkQ29lZmZpY2llbnQnKVxuICAgICAgLm1pbigwKS5tYXgoNSlcbiAgICAgIC5vbkNoYW5nZShkZWJvdW5jZSh0aGlzLmdyYXBoLnVwZGF0ZS5iaW5kKHRoaXMuZ3JhcGgpKSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAndHlyZVNsaXBPZmZzZXQnKVxuICAgICAgLm1pbigtMSkubWF4KDEpXG4gICAgICAub25DaGFuZ2UoZGVib3VuY2UodGhpcy5ncmFwaC51cGRhdGUuYmluZCh0aGlzLmdyYXBoKSkpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ3R5cmVTbGlwQ29lZmZpY2llbnQnKVxuICAgICAgLm1pbigwKS5tYXgoNSlcbiAgICAgIC5vbkNoYW5nZShkZWJvdW5jZSh0aGlzLmdyYXBoLnVwZGF0ZS5iaW5kKHRoaXMuZ3JhcGgpKSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAndXNlU2xpcEN1cnZlJylcbiAgICAgIC5vbkNoYW5nZShkZWJvdW5jZSh0aGlzLmdyYXBoLnVwZGF0ZS5iaW5kKHRoaXMuZ3JhcGgpKSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAnZnJvbnRXaGVlbERyaXZlJyk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAncmVhcldoZWVsRHJpdmUnKTtcblxuICAgIHRoaXMuZ3JhcGgudXBkYXRlKDApO1xuICB9XG5cbiAgcHJpdmF0ZSBsb29wKCk6IHZvaWQge1xuICAgIGNvbnN0IG5vdyA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnN0IGVsYXBzZWRUaW1lID0gTWF0aC5taW4obm93IC0gdGhpcy5sYXN0RnJhbWVUaW1lLCBjb25zdGFudHMuRlBTX01JTik7XG5cbiAgICAvLyBDYWxjdWxhdGUgZnJhbWVyYXRlXG4gICAgaWYgKG5vdyAtIHRoaXMubGFzdEZyYW1lQ291bnRUaW1lID49IDEwMDApIHtcbiAgICAgIHRoaXMubGFzdEZyYW1lQ291bnRUaW1lID0gbm93O1xuICAgICAgdGhpcy5mcmFtZVJhdGUgPSB0aGlzLmZyYW1lQ291bnQ7XG4gICAgICB0aGlzLmZyYW1lQ291bnQgPSAwO1xuICAgIH1cbiAgICB0aGlzLmZyYW1lQ291bnQrKztcbiAgICB0aGlzLmxhc3RGcmFtZVRpbWUgPSBub3c7XG4gICAgaWYgKGNvbmZpZy5zaG93RlBTKSB7XG4gICAgICBEZWJ1Zy52YWx1ZSgnRlBTJywgdGhpcy5mcmFtZVJhdGUpO1xuICAgIH1cblxuICAgIC8vIERvIGdhbWUgbG9vcFxuICAgIHRoaXMuaGFuZGxlSW5wdXQoKTtcbiAgICB0aGlzLnVwZGF0ZShlbGFwc2VkVGltZSk7XG4gICAgdGhpcy5kcmF3KCk7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmxvb3AuYmluZCh0aGlzKSk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZUlucHV0KCk6IHZvaWQge1xuICAgIGlmIChHYW1lLnNldHRpbmdzLnRlc3RXaGVlbCkge1xuICAgICAgdGhpcy50ZXN0V2hlZWwuaGFuZGxlSW5wdXQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jYXIuaGFuZGxlSW5wdXQoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgR2FtZS5zY3JlZW4gPSB2ZWModGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XG5cbiAgICBpZiAoR2FtZS5zZXR0aW5ncy50ZXN0V2hlZWwpIHtcbiAgICAgIHRoaXMudGVzdFdoZWVsLnVwZGF0ZShkdCk7XG4gICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbiA9IHZlYy5jbG9uZSh0aGlzLnRlc3RXaGVlbC5wb3NpdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FyLnVwZGF0ZShkdCk7XG4gICAgICB0aGlzLmNhbWVyYS5wb3NpdGlvbiA9IHZlYy5jbG9uZSh0aGlzLmNhci5wb3NpdGlvbik7XG4gICAgfVxuXG4gICAgSW5wdXQudXBkYXRlKCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXcoKTogdm9pZCB7XG4gICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCgwLCAwLCBHYW1lLnNjcmVlbi54LCBHYW1lLnNjcmVlbi55KTtcbiAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xuICAgIHRoaXMuY2FtZXJhLmRyYXcodGhpcy5jb250ZXh0KTtcbiAgICB0aGlzLmJhY2tncm91bmQuZHJhdyh0aGlzLmNvbnRleHQsIHRoaXMuY2FtZXJhKTtcbiAgICB0aGlzLnNraWRDYW52YXMuZHJhdyh0aGlzLmNvbnRleHQsIHRoaXMuY2FtZXJhKTtcblxuICAgIGlmIChHYW1lLnNldHRpbmdzLnRlc3RXaGVlbCkge1xuICAgICAgdGhpcy50ZXN0V2hlZWwuZHJhdyh0aGlzLmNvbnRleHQsIHRoaXMuc2tpZENhbnZhcyk7XG4gICAgICB0aGlzLmdyYXBoLmRyYXcodGhpcy5jb250ZXh0LCB0aGlzLnRlc3RXaGVlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FyLmRyYXcodGhpcy5jb250ZXh0LCB0aGlzLnNraWRDYW52YXMpO1xuICAgICAgdGhpcy5ncmFwaC5kcmF3KHRoaXMuY29udGV4dCwgdGhpcy5jYXIpO1xuICAgIH1cblxuICAgIERlYnVnLmRyYXcodGhpcy5jb250ZXh0KTtcbiAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5pbXBvcnQgSGFzV2hlZWxzIGZyb20gJy4vSGFzV2hlZWxzJztcbmltcG9ydCB7XG4gIGNsYW1wLFxuICBsZXJwQXJyYXksXG4gIGxpbmVhclRyYW5zZm9ybSxcbiAgc21vb3RoUGFydGlhbCxcbiAgc21vb3Roc3RlcCxcbn0gZnJvbSAnLi91dGlsaXRpZXMnO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnLi92ZWMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHcmFwaCBpbXBsZW1lbnRzIEVudGl0eSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2l6ZTogdmVjID0gdmVjKDIwMCwgMjAwKTtcbiAgcHJpdmF0ZSByZWFkb25seSBtYXJnaW46IG51bWJlciA9IDIwO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbG91cnM6IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXVtdID0gW1xuICAgIFswLCAwLCAyNTVdLFxuICAgIFswLCAyNTUsIDI1NV0sXG4gICAgWzI1NSwgMjU1LCAwXSxcbiAgICBbMjU1LCAwLCAwXSxcbiAgXTtcbiAgcHJpdmF0ZSByZWFkb25seSBsYWJlbEZvbnQ6ICdib2xkIDE0cHggc2Fucy1zZXJpZic7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGFiZWxDb2xvdXI6IHN0cmluZyA9ICd3aGl0ZSc7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2xpcEN1cnZlQ29sb3VyOiBzdHJpbmcgPSAnYmxhY2snO1xuXG4gIHByaXZhdGUgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgcHJpdmF0ZSBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLnNpemUueDtcbiAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLnNpemUueTtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICBpZiAoY29udGV4dCAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZ2V0IGEgMmQgY29udGV4dCBmb3IgdGhlIHNsaXAgY3VydmUgZ3JhcGguXCIpO1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XG5cbiAgICAvLyBTbGlwIHRyYW5zZm9ybXNcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSB0aGlzLnNpemUueDsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8PSB0aGlzLnNpemUueTsgeSsrKSB7XG4gICAgICAgIGNvbnN0IHNsaXAgPSBjbGFtcChsaW5lYXJUcmFuc2Zvcm0oXG4gICAgICAgICAgeCAvIHRoaXMuc2l6ZS54LFxuICAgICAgICAgIEdhbWUuc2V0dGluZ3MudHlyZVNsaXBDb2VmZmljaWVudCxcbiAgICAgICAgICBHYW1lLnNldHRpbmdzLnR5cmVTbGlwT2Zmc2V0XG4gICAgICAgICkpO1xuICAgICAgICBjb25zdCBzcGVlZCA9IGNsYW1wKGxpbmVhclRyYW5zZm9ybShcbiAgICAgICAgICB5IC8gdGhpcy5zaXplLnksXG4gICAgICAgICAgR2FtZS5zZXR0aW5ncy50eXJlU3BlZWRDb2VmZmljaWVudCxcbiAgICAgICAgICBHYW1lLnNldHRpbmdzLnR5cmVTcGVlZE9mZnNldFxuICAgICAgICApKTtcbiAgICAgICAgY29uc3QgaW52ZXJzZURyYWcgPSBjbGFtcChzbGlwICogc3BlZWQpO1xuXG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLmZsb29yKGxlcnBBcnJheSh0aGlzLmNvbG91cnMubWFwKGMgPT4gY1swXSksIGludmVyc2VEcmFnLCBzbW9vdGhzdGVwKSk7XG4gICAgICAgIGNvbnN0IGcgPSBNYXRoLmZsb29yKGxlcnBBcnJheSh0aGlzLmNvbG91cnMubWFwKGMgPT4gY1sxXSksIGludmVyc2VEcmFnLCBzbW9vdGhzdGVwKSk7XG4gICAgICAgIGNvbnN0IGIgPSBNYXRoLmZsb29yKGxlcnBBcnJheSh0aGlzLmNvbG91cnMubWFwKGMgPT4gY1syXSksIGludmVyc2VEcmFnLCBzbW9vdGhzdGVwKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgdGhpcy5zaXplLnkgLSB5LCAxLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBTbGlwIGN1cnZlXG4gICAgaWYgKEdhbWUuc2V0dGluZ3MudXNlU2xpcEN1cnZlKSB7XG4gICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5zbGlwQ3VydmVDb2xvdXI7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSB0aGlzLnNpemUueDsgeCsrKSB7XG4gICAgICAgIGNvbnN0IHkgPSBzbW9vdGhQYXJ0aWFsKHggLyB0aGlzLnNpemUueCwgR2FtZS5zZXR0aW5ncy5zbGlwQ3VydmVDb250cm9sUG9pbnRzKTtcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHRoaXMuc2l6ZS55IC0gKHkgKiB0aGlzLnNpemUueSksIDIsIDIpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBjYXI6IEhhc1doZWVscyk6IHZvaWQge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKFxuICAgICAgR2FtZS5zY3JlZW4ueCAtIHRoaXMuc2l6ZS54IC0gdGhpcy5tYXJnaW4sXG4gICAgICBHYW1lLnNjcmVlbi55IC0gdGhpcy5zaXplLnkgLSB0aGlzLm1hcmdpblxuICAgICk7XG5cbiAgICAvLyBEcmF3IHNsaXAgbWFwXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICB0aGlzLmNhbnZhcyxcbiAgICAgIDAsIDBcbiAgICApO1xuXG4gICAgLy8gRHJhdyBsYWJlbHNcbiAgICBjb250ZXh0LmZvbnQgPSB0aGlzLmxhYmVsRm9udDtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMubGFiZWxDb2xvdXI7XG4gICAgY29udGV4dC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGNvbnRleHQuZmlsbFRleHQoXG4gICAgICAnc2xpcCcsXG4gICAgICB0aGlzLnNpemUueCAvIDIsXG4gICAgICB0aGlzLnNpemUueSArIHRoaXMubWFyZ2luIC8gMlxuICAgICk7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5yb3RhdGUoLU1hdGguUEkgLyAyKTtcbiAgICBjb250ZXh0LmZpbGxUZXh0KFxuICAgICAgJ3NwZWVkJyxcbiAgICAgIC10aGlzLnNpemUueCAvIDIsXG4gICAgICAtdGhpcy5tYXJnaW4gLyAyXG4gICAgKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcblxuICAgIC8vIERyYXcgd2hlZWwgc3RhdHNcbiAgICBjb25zdCB3aGVlbFN0YXRzID0gY2FyLmdldFdoZWVsU3RhdHMoKTtcbiAgICBmb3IgKGNvbnN0IHdoZWVsIG9mIHdoZWVsU3RhdHMpIHtcbiAgICAgIHRoaXMuZHJhd0Nyb3NzKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICB2ZWMod2hlZWwuc2xpcCAqIHRoaXMuc2l6ZS54LCAoMSAtIHdoZWVsLnNwZWVkKSAqIHRoaXMuc2l6ZS55KSxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3Q3Jvc3MoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHBvc2l0aW9uOiB2ZWMsXG4gICAgY29sb3VyOiBzdHJpbmcgPSAnd2hpdGUnLFxuICAgIHNpemU6IG51bWJlciA9IDZcbiAgKTogdm9pZCB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG91cjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDI7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBoYWxmU2l6ZSA9IHNpemUgLyAyO1xuICAgIGNvbnRleHQubW92ZVRvKHBvc2l0aW9uLnggLSBoYWxmU2l6ZSwgcG9zaXRpb24ueSAtIGhhbGZTaXplKTtcbiAgICBjb250ZXh0LmxpbmVUbyhwb3NpdGlvbi54ICsgaGFsZlNpemUsIHBvc2l0aW9uLnkgKyBoYWxmU2l6ZSk7XG4gICAgY29udGV4dC5tb3ZlVG8ocG9zaXRpb24ueCAtIGhhbGZTaXplLCBwb3NpdGlvbi55ICsgaGFsZlNpemUpO1xuICAgIGNvbnRleHQubGluZVRvKHBvc2l0aW9uLnggKyBoYWxmU2l6ZSwgcG9zaXRpb24ueSAtIGhhbGZTaXplKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICcuL3ZlYyc7XG5cbnR5cGUgTW91c2VTdGF0ZSA9IHtcbiAgYnV0dG9uOiBib29sZWFuO1xuICBwb3NpdGlvbjogdmVjO1xufTtcblxuY29uc3Qga2V5cyA9IFtcbiAgJ0Fycm93VXAnLFxuICAnQXJyb3dEb3duJyxcbiAgJ0Fycm93TGVmdCcsXG4gICdBcnJvd1JpZ2h0JyxcbiAgJ1NwYWNlJyxcbiAgJ0VudGVyJyxcbiAgJ1NoaWZ0JyxcbiAgJ0NvbnRyb2wnLFxuICAnRXNjYXBlJyxcbl0gYXMgY29uc3Q7XG5cbnR5cGUgS2V5Ym9hcmRTdGF0ZSA9IHtcbiAgW2tleSBpbiB0eXBlb2Yga2V5c1tudW1iZXJdXT86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBJbnB1dDtcbiAgcHJpdmF0ZSBrZXlib2FyZFN0YXRlOiBLZXlib2FyZFN0YXRlID0ge307XG4gIHByaXZhdGUgcHJldmlvdXNLZXlib2FyZFN0YXRlOiBLZXlib2FyZFN0YXRlID0ge307XG4gIHByaXZhdGUgbW91c2VTdGF0ZTogTW91c2VTdGF0ZSA9IHsgYnV0dG9uOiBmYWxzZSwgcG9zaXRpb246IHZlYygpIH07XG4gIHByaXZhdGUgcHJldmlvdXNNb3VzZVN0YXRlOiBNb3VzZVN0YXRlID0geyBidXR0b246IGZhbHNlLCBwb3NpdGlvbjogdmVjKCkgfTtcblxuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoKSA9PiB7XG4gICAgICB0aGlzLm1vdXNlU3RhdGUuYnV0dG9uID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgIHRoaXMubW91c2VTdGF0ZS5idXR0b24gPSBmYWxzZTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsICgpID0+IHtcbiAgICAgIHRoaXMubW91c2VTdGF0ZS5idXR0b24gPSB0cnVlO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsICgpID0+IHtcbiAgICAgIHRoaXMubW91c2VTdGF0ZS5idXR0b24gPSBmYWxzZTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgZSA9PiB7XG4gICAgICB0aGlzLm1vdXNlU3RhdGUucG9zaXRpb24ueCA9IGUub2Zmc2V0WDtcbiAgICAgIHRoaXMubW91c2VTdGF0ZS5wb3NpdGlvbi55ID0gZS5vZmZzZXRZO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICB0aGlzLmtleWJvYXJkU3RhdGVbZS5jb2RlIGFzIGtleW9mIEtleWJvYXJkU3RhdGVdID0gdHJ1ZTtcbiAgICB9KTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCBlID0+IHtcbiAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZVtlLmNvZGUgYXMga2V5b2YgS2V5Ym9hcmRTdGF0ZV0gPSBmYWxzZTtcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGlzZSgpOiB2b2lkIHtcbiAgICBJbnB1dC5pbnN0YW5jZSA9IG5ldyBJbnB1dCgpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogSW5wdXQge1xuICAgIGlmIChJbnB1dC5pbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0lucHV0IG1hbmFnZXIgbm90IHByb3Blcmx5IGluaXRpYWxpc2VkJyk7XG4gICAgfVxuICAgIHJldHVybiBJbnB1dC5pbnN0YW5jZTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXQuZ2V0SW5zdGFuY2UoKTtcbiAgICBpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpbnN0YW5jZS5rZXlib2FyZFN0YXRlKTtcbiAgICBpbnN0YW5jZS5wcmV2aW91c01vdXNlU3RhdGUgPSB7XG4gICAgICBidXR0b246IGluc3RhbmNlLm1vdXNlU3RhdGUuYnV0dG9uLFxuICAgICAgcG9zaXRpb246IHZlYy5jbG9uZShpbnN0YW5jZS5tb3VzZVN0YXRlLnBvc2l0aW9uKSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBrZXlEb3duKGtleT86IGtleW9mIEtleWJvYXJkU3RhdGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0LmdldEluc3RhbmNlKCk7XG5cbiAgICAvLyBDaGVjayBpZiBhbnkga2V5IGlzIGRvd25cbiAgICBpZiAoIWtleSkge1xuICAgICAgZm9yIChjb25zdCBrIGluIE9iamVjdC5rZXlzKGluc3RhbmNlLmtleWJvYXJkU3RhdGUpKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5rZXlib2FyZFN0YXRlW2sgYXMga2V5b2YgS2V5Ym9hcmRTdGF0ZV0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISFpbnN0YW5jZS5rZXlib2FyZFN0YXRlW2tleV07XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGtleVByZXNzZWQoa2V5Pzoga2V5b2YgS2V5Ym9hcmRTdGF0ZSk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXQuZ2V0SW5zdGFuY2UoKTtcblxuICAgIC8vIENoZWNrIGlmIGFueSBrZXkgd2FzIHByZXNzZWRcbiAgICBpZiAoIWtleSkge1xuICAgICAgZm9yIChjb25zdCBrIGluIE9iamVjdC5rZXlzKGluc3RhbmNlLmtleWJvYXJkU3RhdGUpKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpbnN0YW5jZS5rZXlib2FyZFN0YXRlW2sgYXMga2V5b2YgS2V5Ym9hcmRTdGF0ZV0gJiZcbiAgICAgICAgICAoXG4gICAgICAgICAgICAhKGsgaW4gaW5zdGFuY2UucHJldmlvdXNLZXlib2FyZFN0YXRlKSB8fFxuICAgICAgICAgICAgIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtrIGFzIGtleW9mIEtleWJvYXJkU3RhdGVdXG4gICAgICAgICAgKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISFpbnN0YW5jZS5rZXlib2FyZFN0YXRlW2tleV0gJiYgIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtrZXldO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBrZXlSZWxlYXNlZChrZXk/OiBrZXlvZiBLZXlib2FyZFN0YXRlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dC5nZXRJbnN0YW5jZSgpO1xuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGtleSB3YXMgcmVsZWFzZWRcbiAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgayBpbiBpbnN0YW5jZS5rZXlib2FyZFN0YXRlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtrIGFzIGtleW9mIEtleWJvYXJkU3RhdGVdICYmXG4gICAgICAgICAgISFpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGVbayBhcyBrZXlvZiBLZXlib2FyZFN0YXRlXVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgIWluc3RhbmNlLmtleWJvYXJkU3RhdGVba2V5IGFzIGtleW9mIEtleWJvYXJkU3RhdGVdICYmXG4gICAgICAhIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtrZXkgYXMga2V5b2YgS2V5Ym9hcmRTdGF0ZV1cbiAgICApO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtb3VzZURvd24oKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dC5nZXRJbnN0YW5jZSgpO1xuICAgIHJldHVybiAhIWluc3RhbmNlLm1vdXNlU3RhdGUuYnV0dG9uO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtb3VzZVByZXNzZWQoKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dC5nZXRJbnN0YW5jZSgpO1xuICAgIHJldHVybiAhIWluc3RhbmNlLm1vdXNlU3RhdGUuYnV0dG9uICYmICFpbnN0YW5jZS5wcmV2aW91c01vdXNlU3RhdGUuYnV0dG9uO1xuICB9XG5cbiAgcHVibGljIHN0YXRpYyBtb3VzZVJlbGVhc2VkKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXQuZ2V0SW5zdGFuY2UoKTtcbiAgICByZXR1cm4gIWluc3RhbmNlLm1vdXNlU3RhdGUuYnV0dG9uICYmICEhaW5zdGFuY2UucHJldmlvdXNNb3VzZVN0YXRlLmJ1dHRvbjtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgbW91c2VQb3NpdGlvbigpOiB2ZWMge1xuICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXQuZ2V0SW5zdGFuY2UoKTtcbiAgICByZXR1cm4gaW5zdGFuY2UubW91c2VTdGF0ZS5wb3NpdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IENhbWVyYSBmcm9tICcuL0NhbWVyYSc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcbmltcG9ydCB7IHZlYyB9IGZyb20gJy4vdmVjJztcblxudHlwZSBDaHVuayA9IHtcbiAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcbiAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2tpZENhbnZhcyBpbXBsZW1lbnRzIEVudGl0eSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgY2h1bmtTaXplOiBudW1iZXIgPSA1MDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgc2tpZEJhc2VBbHBoYTogbnVtYmVyID0gMC4yNTtcbiAgcHJpdmF0ZSByZWFkb25seSBza2lkQ29sb3VyOiBzdHJpbmcgPSAnd2hpdGUnO1xuXG4gIHByaXZhdGUgY2h1bmtzOiBSZWNvcmQ8c3RyaW5nLCBDaHVuaz4gPSB7fTtcblxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHsgfVxuXG4gIHB1YmxpYyBza2lkKFxuICAgIHBvc2l0aW9uOiB2ZWMsXG4gICAgZGlyZWN0aW9uOiBudW1iZXIsXG4gICAgc2l6ZTogdmVjLFxuICAgIGFscGhhOiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgLy8gR2V0IHRoZSBjaHVuayBmb3IgdGhlIHNwZWNpZmllZCBwb3NpdGlvblxuICAgIGxldCBjaHVuazogQ2h1bms7XG4gICAgY29uc3QgY2h1bmtQb3NpdGlvbiA9IHRoaXMuY2h1bmtQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgY29uc3QgaGFzaCA9IHRoaXMuaGFzaFBvc2l0aW9uKGNodW5rUG9zaXRpb24pO1xuICAgIGlmIChoYXNoIGluIHRoaXMuY2h1bmtzKSB7XG4gICAgICBjaHVuayA9IHRoaXMuY2h1bmtzW2hhc2hdO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBBIGNodW5rIGRvZXNuJ3QgZXhpc3QgZm9yIHRoaXMgcG9zaXRpb24sIHNvIGNyZWF0ZSBvbmVcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLmhlaWdodCA9IHRoaXMuY2h1bmtTaXplO1xuXG4gICAgICAvLyBHZXQgYSAyZCBjb250ZXh0XG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBpZiAoY29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkbid0IGdldCBhIDJkIGNvbnRleHQgZm9yIHNraWQgY2h1bmsgJyR7aGFzaH0nLmApO1xuICAgICAgfVxuICAgICAgdGhpcy5jaHVua3NbaGFzaF0gPSBjaHVuayA9IHsgY2FudmFzLCBjb250ZXh0IH07XG4gICAgfVxuXG4gICAgLy8gRHJhdyBhIHNraWQgbWFyayBvbiB0aGUgY2h1bmtcbiAgICB0aGlzLmRyYXdTa2lkTWFyayhcbiAgICAgIGNodW5rLmNvbnRleHQsXG4gICAgICB2ZWMuc3ViKHBvc2l0aW9uLCB2ZWMubXVsKGNodW5rUG9zaXRpb24sIHRoaXMuY2h1bmtTaXplKSksXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBzaXplLFxuICAgICAgYWxwaGFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjaHVua1Bvc2l0aW9uKHBvc2l0aW9uOiB2ZWMpOiB2ZWMge1xuICAgIHJldHVybiB2ZWMubWFwKHZlYy5tdWwocG9zaXRpb24sIDEgLyB0aGlzLmNodW5rU2l6ZSksIE1hdGguZmxvb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNoUG9zaXRpb24ocG9zaXRpb246IHZlYyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZlYy5zdHIocG9zaXRpb24sICdfJyk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdTa2lkTWFyayhcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgcG9zaXRpb246IHZlYyxcbiAgICBkaXJlY3Rpb246IG51bWJlcixcbiAgICBzaXplOiB2ZWMsXG4gICAgYWxwaGE6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZShwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICBjb250ZXh0LnJvdGF0ZShkaXJlY3Rpb24pO1xuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBhbHBoYSAqIHRoaXMuc2tpZEJhc2VBbHBoYTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuc2tpZENvbG91cjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgLXNpemUueCAtIHNpemUueSAvIDIsXG4gICAgICAtc2l6ZS55IC8gMixcbiAgICAgIHNpemUueCArIHNpemUueSAvIDIsXG4gICAgICBzaXplLnkgLyAyXG4gICAgKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FtZXJhOiBDYW1lcmEpOiB2b2lkIHtcbiAgICBjb25zdCBib3VuZHMgPSBjYW1lcmEuYm91bmRzO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5jaHVua1Bvc2l0aW9uKHZlYy5zdWIodmVjKGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wKSwgdmVjKDEpKSk7XG4gICAgY29uc3QgZW5kID0gdGhpcy5jaHVua1Bvc2l0aW9uKHZlYy5hZGQodmVjKGJvdW5kcy5yaWdodCwgYm91bmRzLmJvdHRvbSksIHZlYygxKSkpO1xuXG4gICAgLy8gRHJhdyBhbGwgY2h1bmtzIGN1cnJlbnRseSB3aXRoaW4gdGhlIGNhbWVyYSBib3VuZHNcbiAgICBmb3IgKGxldCB4ID0gc3RhcnQueDsgeCA8PSBlbmQueDsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gc3RhcnQueTsgeSA8PSBlbmQueTsgeSsrKSB7XG4gICAgICAgIGNvbnN0IGhhc2ggPSB0aGlzLmhhc2hQb3NpdGlvbih2ZWMoeCwgeSkpO1xuICAgICAgICBpZiAoaGFzaCBpbiB0aGlzLmNodW5rcykge1xuICAgICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgICAgICAgdGhpcy5jaHVua3NbaGFzaF0uY2FudmFzLFxuICAgICAgICAgICAgeCAqIHRoaXMuY2h1bmtTaXplLFxuICAgICAgICAgICAgeSAqIHRoaXMuY2h1bmtTaXplXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCBJbnB1dCBmcm9tICcuL0lucHV0JztcbmltcG9ydCBTa2lkQ2FudmFzIGZyb20gJy4vU2tpZENhbnZhcyc7XG5pbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcbmltcG9ydCBIYXNXaGVlbHMsIHsgV2hlZWxTdGF0cyB9IGZyb20gJy4vSGFzV2hlZWxzJztcbmltcG9ydCBXaGVlbCBmcm9tICcuL1doZWVsJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJy4vdmVjJztcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qc29uJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGVzdFdoZWVsIGltcGxlbWVudHMgRW50aXR5LCBIYXNXaGVlbHMge1xuICBwdWJsaWMgZGlyZWN0aW9uOiBudW1iZXI7XG4gIHB1YmxpYyBzcGVlZDogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgdGhyb3R0bGU6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGJyYWtlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBoYW5kYnJha2U6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBwcml2YXRlIHdoZWVsOiBXaGVlbDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoXG4gICAgcG9zaXRpb246IHZlYyxcbiAgICBkaXJlY3Rpb246IG51bWJlclxuICApIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuICAgIC8vIEFkZCB0ZXN0IHdoZWVsXG4gICAgdGhpcy53aGVlbCA9IG5ldyBXaGVlbChcbiAgICAgIHZlYy5jbG9uZShwb3NpdGlvbiksXG4gICAgICBkaXJlY3Rpb25cbiAgICApO1xuICB9XG5cbiAgcHVibGljIGdldCBwb3NpdGlvbigpOiB2ZWMge1xuICAgIHJldHVybiB0aGlzLndoZWVsLnBvc2l0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldFdoZWVsU3RhdHMoKTogV2hlZWxTdGF0c1tdIHtcbiAgICByZXR1cm4gW3RoaXMud2hlZWwuc3RhdHNdO1xuICB9XG5cbiAgcHVibGljIGhhbmRsZUlucHV0KCk6IHZvaWQge1xuICAgIC8vIFRocm90dGxlIC8gYnJha2UgLyBoYW5kYnJha2VcbiAgICB0aGlzLnRocm90dGxlID0gSW5wdXQua2V5RG93bihjb25maWcuY29udHJvbHMudGhyb3R0bGUgYXMgYW55KTtcbiAgICB0aGlzLmJyYWtlID0gSW5wdXQua2V5RG93bihjb25maWcuY29udHJvbHMuYnJha2UgYXMgYW55KTtcbiAgICB0aGlzLmhhbmRicmFrZSA9IElucHV0LmtleURvd24oY29uZmlnLmNvbnRyb2xzLmhhbmRicmFrZSBhcyBhbnkpO1xuXG4gICAgLy8gU3RlZXJpbmdcbiAgICBpZiAoSW5wdXQua2V5RG93bihjb25maWcuY29udHJvbHMubGVmdCBhcyBhbnkpKSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiAtPSBHYW1lLnNldHRpbmdzLmNhclN0ZWVyaW5nQW1vdW50O1xuICAgIH1cbiAgICBpZiAoSW5wdXQua2V5RG93bihjb25maWcuY29udHJvbHMucmlnaHQgYXMgYW55KSkge1xuICAgICAgdGhpcy5kaXJlY3Rpb24gKz0gR2FtZS5zZXR0aW5ncy5jYXJTdGVlcmluZ0Ftb3VudDtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkcml2ZSA9IHRoaXMudGhyb3R0bGUgPyBHYW1lLnNldHRpbmdzLmNhckVuZ2luZVBvd2VyIDogMDtcbiAgICBjb25zdCBicmFrZSA9IHRoaXMuYnJha2UgPyBHYW1lLnNldHRpbmdzLmNhckJyYWtlUG93ZXIgOiAwO1xuXG4gICAgdGhpcy53aGVlbC51cGRhdGUoZHQsIGRyaXZlLCBicmFrZSwgdGhpcy5oYW5kYnJha2UsIHRoaXMuZGlyZWN0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgc2tpZENhbnZhczogU2tpZENhbnZhcyk6IHZvaWQge1xuICAgIHRoaXMud2hlZWwuZHJhdyhjb250ZXh0LCBza2lkQ2FudmFzKTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xuaW1wb3J0IHsgV2hlZWxTdGF0cyB9IGZyb20gJy4vSGFzV2hlZWxzJztcbmltcG9ydCBTa2lkQ2FudmFzIGZyb20gJy4vU2tpZENhbnZhcyc7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICcuL3ZlYyc7XG5pbXBvcnQge1xuICBjbGFtcCxcbiAgbGluZWFyVHJhbnNmb3JtLFxuICBzbW9vdGhQYXJ0aWFsLFxuICBzbW9vdGhzdGVwLFxufSBmcm9tICcuL3V0aWxpdGllcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdoZWVsIGltcGxlbWVudHMgRW50aXR5IHtcbiAgcHVibGljIHBvc2l0aW9uOiB2ZWM7XG4gIHB1YmxpYyBkaXJlY3Rpb246IG51bWJlcjtcbiAgcHVibGljIHZlbG9jaXR5OiB2ZWMgPSB2ZWMoKTtcbiAgcHVibGljIHNwZWVkOiBudW1iZXIgPSAwO1xuXG4gIHB1YmxpYyBzbGlwQ29lZmZpY2llbnQ6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBzcGVlZENvZWZmaWNpZW50OiBudW1iZXIgPSAwO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwb3NpdGlvbjogdmVjLFxuICAgIGRpcmVjdGlvbjogbnVtYmVyID0gMFxuICApIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjLmNsb25lKHBvc2l0aW9uKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2xpcEFtb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnNsaXBDb2VmZmljaWVudCAqIHRoaXMuc3BlZWRDb2VmZmljaWVudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc3RhdHMoKTogV2hlZWxTdGF0cyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHNsaXA6IHRoaXMuc2xpcENvZWZmaWNpZW50LFxuICAgICAgc3BlZWQ6IHRoaXMuc3BlZWRDb2VmZmljaWVudCxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShcbiAgICBkdDogbnVtYmVyLFxuICAgIGRyaXZlOiBudW1iZXIsXG4gICAgYnJha2U6IG51bWJlcixcbiAgICBoYW5kYnJha2U6IGJvb2xlYW4sXG4gICAgZGlyZWN0aW9uOiBudW1iZXJcbiAgKTogdm9pZCB7XG4gICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb247XG5cbiAgICAvLyBDYWxjdWxhdGUgZGVsdGEtdiAodGhpcyBpcyB3aGVyZSB0aGUgd2hlZWwgKndhbnRzKiB0byBnbylcbiAgICBjb25zdCBkdiA9IHZlYy5yb3QodmVjKChkcml2ZSAtIGJyYWtlKSAqIGR0LCAwKSwgdGhpcy5kaXJlY3Rpb24pO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBzcGVlZCBjb2VmZmljaWVudCAodGhlIG1hZ25pdHVkZSBvZiB0aGUgdHlyZSdzIHZlbG9jaXR5XG4gICAgLy8gbm9ybWFsaXNlZCB0byB0aGUgbWF4IHNwZWVkIG9mIHRoZSBjYXIpXG4gICAgdGhpcy5zcGVlZENvZWZmaWNpZW50ID0gY2xhbXAodGhpcy5zcGVlZCAvIEdhbWUuc2V0dGluZ3MuY2FyTWF4U3BlZWQpO1xuICAgIGNvbnN0IHNwZWVkQ29tcG9uZW50ID0gY2xhbXAobGluZWFyVHJhbnNmb3JtKFxuICAgICAgdGhpcy5zcGVlZENvZWZmaWNpZW50LFxuICAgICAgR2FtZS5zZXR0aW5ncy50eXJlU3BlZWRDb2VmZmljaWVudCxcbiAgICAgIEdhbWUuc2V0dGluZ3MudHlyZVNwZWVkT2Zmc2V0XG4gICAgKSk7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIGFtb3VudCBvZiBzbGlwICh0aGUgZGlmZmVyZW5jZSBiZXR3ZWVuIHRoZSBkaXJlY3Rpb24gdGhlIHR5cmUgaXNcbiAgICAvLyBmYWNpbmcsIGFuZCB0aGUgZGlyZWN0aW9uIHRoZSB0eXJlIGlzIGFjdHVhbGx5IHRyYXZlbGxpbmcpXG4gICAgaWYgKHZlYy5lcSh0aGlzLnZlbG9jaXR5LCB2ZWMoKSkpIHtcbiAgICAgIHRoaXMuc2xpcENvZWZmaWNpZW50ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbGlwQ29lZmZpY2llbnQgPSBjbGFtcCgxIC0gdmVjLmRvdChcbiAgICAgICAgdmVjLnJvdCh2ZWMudXgoKSwgdGhpcy5kaXJlY3Rpb24pLFxuICAgICAgICB2ZWMubm9yKHRoaXMudmVsb2NpdHkpXG4gICAgICApKTtcbiAgICB9XG4gICAgY29uc3Qgc2xpcENvbXBvbmVudCA9IGNsYW1wKGxpbmVhclRyYW5zZm9ybShcbiAgICAgIHRoaXMuc2xpcENvZWZmaWNpZW50LFxuICAgICAgR2FtZS5zZXR0aW5ncy50eXJlU2xpcENvZWZmaWNpZW50LFxuICAgICAgR2FtZS5zZXR0aW5ncy50eXJlU2xpcE9mZnNldFxuICAgICkpO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGxhdGVyYWwgZHJhZyAodGhlIGFtb3VudCBvZiBkcmFnIGF0IGEgbm9ybWFsIHRvIHRoZSB0eXJlJ3MgZGlyZWN0aW9uKVxuICAgIGNvbnN0IGkgPSBHYW1lLnNldHRpbmdzLnVzZVNsaXBDdXJ2ZVxuICAgICAgPyBzbW9vdGhQYXJ0aWFsKFxuICAgICAgICAxIC0gY2xhbXAoc2xpcENvbXBvbmVudCAqIHNwZWVkQ29tcG9uZW50KSxcbiAgICAgICAgR2FtZS5zZXR0aW5ncy5zbGlwQ3VydmVDb250cm9sUG9pbnRzXG4gICAgICApXG4gICAgICA6IDEgLSBjbGFtcChzbGlwQ29tcG9uZW50ICogc3BlZWRDb21wb25lbnQpO1xuICAgIGNvbnN0IGxhdGVyYWxEcmFnID0gc21vb3Roc3RlcChcbiAgICAgIEdhbWUuc2V0dGluZ3MudHlyZUxhdGVyYWxEcmFnTWluLFxuICAgICAgR2FtZS5zZXR0aW5ncy50eXJlTGF0ZXJhbERyYWdNYXgsXG4gICAgICBpXG4gICAgKTtcblxuICAgIC8vIENhbGN1bGF0ZSBsb25naXR1ZGluYWwgZHJhZyAodGhlIGFtb3VudCBvZiBkcmF3IGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHR5cmUpXG4gICAgLy8gV2hlbiB0aGUgdHlyZSBpcyByb2xsaW5nLCB0aGlzIGlzIGEgcmVhbGx5IHNtYWxsIG51bWJlciByZXByZXNlbnRpbmcgYWlyIHJlc2lzdGFuY2UsXG4gICAgLy8gcm9sbGluZyBmcmljdGlvbiBldGMuXG4gICAgLy8gV2hlbiB0aGUgaGFuZGJyYWtlIGlzIGFwcGxpZWQsIHRoaXMgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIGxhdGVyYWwgZHJhZ1xuICAgIGNvbnN0IGxvbmdpdHVkaW5hbERyYWcgPSBoYW5kYnJha2UgPyBsYXRlcmFsRHJhZyA6IEdhbWUuc2V0dGluZ3MudHlyZUxvbmdpdHVkaW5hbERyYWc7XG5cbiAgICAvLyBDYWxjdWxhdGUgYSB2ZWxvY2l0eSB2ZWN0b3IgcG9pbnRpbmcgaW4gdGhlIHR5cmUncyBkaXJlY3Rpb24gc28gd2UgY2FuIGFwcGx5XG4gICAgLy8gbG9uZ2l0dWRpbmFsIGFuZCBsYXRlcmFsIGRyYWdcbiAgICBjb25zdCBydiA9IHZlYy5yb3QodmVjLmFkZCh0aGlzLnZlbG9jaXR5LCBkdiksIC10aGlzLmRpcmVjdGlvbik7XG4gICAgcnYueCAqPSAxIC0gbG9uZ2l0dWRpbmFsRHJhZztcbiAgICBydi55ICo9IDEgLSBsYXRlcmFsRHJhZztcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVjLnJvdChydiwgdGhpcy5kaXJlY3Rpb24pO1xuICAgIHRoaXMuc3BlZWQgPSB2ZWMubGVuKHRoaXMudmVsb2NpdHkpO1xuXG4gICAgLy8gSWYgdmVsb2NpdHkgZ2V0cyBzbWFsbCBlbm91Z2gsIHN0b3AgdG8gcHJldmVudCBhbnkgZmxvYXRpbmctcG9pbnQgaW5zdGFiaWxpdHlcbiAgICBpZiAodGhpcy5zcGVlZCA8IDEpIHtcbiAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWMoKTtcbiAgICB9XG5cbiAgICAvLyBFdWxlciBpbnRlZ3JhdGlvblxuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuYWRkKHRoaXMucG9zaXRpb24sIHZlYy5tdWwodGhpcy52ZWxvY2l0eSwgZHQpKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgc2tpZENhbnZhczogU2tpZENhbnZhcyk6IHZvaWQge1xuICAgIGNvbnRleHQuc2F2ZSgpO1xuICAgIGNvbnRleHQudHJhbnNsYXRlKHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcbiAgICBjb250ZXh0LnJvdGF0ZSh0aGlzLmRpcmVjdGlvbik7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICd3aGl0ZSc7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgIGNvbnRleHQuc3Ryb2tlUmVjdChcbiAgICAgIC1HYW1lLnNldHRpbmdzLndoZWVsTGVuZ3RoIC8gMixcbiAgICAgIC1HYW1lLnNldHRpbmdzLndoZWVsV2lkdGggLyAyLFxuICAgICAgR2FtZS5zZXR0aW5ncy53aGVlbExlbmd0aCxcbiAgICAgIEdhbWUuc2V0dGluZ3Mud2hlZWxXaWR0aFxuICAgICk7XG4gICAgY29udGV4dC5yZXN0b3JlKCk7XG5cbiAgICAvLyBEcmF3IHNraWQtbWFya1xuICAgIGlmICh0aGlzLnNsaXBDb2VmZmljaWVudCA+IDApIHtcbiAgICAgIHNraWRDYW52YXMuc2tpZChcbiAgICAgICAgdGhpcy5wb3NpdGlvbixcbiAgICAgICAgdGhpcy5kaXJlY3Rpb24sXG4gICAgICAgIHZlYyhcbiAgICAgICAgICBHYW1lLnNldHRpbmdzLndoZWVsTGVuZ3RoLFxuICAgICAgICAgIEdhbWUuc2V0dGluZ3Mud2hlZWxXaWR0aFxuICAgICAgICApLFxuICAgICAgICB0aGlzLnNsaXBBbW91bnRcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCJleHBvcnQgY29uc3QgREVCVUcgPSB0cnVlO1xuZXhwb3J0IGNvbnN0IEZQU19NSU4gPSAxIC8gMzA7XG4iLCJleHBvcnQgZnVuY3Rpb24gY2xhbXAoYTogbnVtYmVyLCBtaW46IG51bWJlciA9IDAsIG1heDogbnVtYmVyID0gMSk6IG51bWJlciB7XG4gIHJldHVybiBhIDwgbWluID8gbWluIDogKGEgPiBtYXggPyBtYXggOiBhKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlcnAoYTogbnVtYmVyLCBiOiBudW1iZXIsIGk6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBhICsgKGIgLSBhKSAqIGk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzbW9vdGhzdGVwKGE6IG51bWJlciwgYjogbnVtYmVyLCBpOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gbGVycChhLCBiLCAzICogTWF0aC5wb3coaSwgMikgLSAyICogTWF0aC5wb3coaSwgMykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gd3JhcERpcmVjdGlvbihkOiBudW1iZXIpOiBudW1iZXIge1xuICBjb25zdCBjID0gTWF0aC5QSSAqIDI7XG4gIHdoaWxlIChkIDwgMCkgeyBkICs9IGM7IH1cbiAgd2hpbGUgKGQgPiBjKSB7IGQgLT0gYzsgfVxuICByZXR1cm4gZDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxpbmVhclRyYW5zZm9ybSh4OiBudW1iZXIsIG06IG51bWJlciwgYzogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIHggKiBtICsgYztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNtb290aFBhcnRpYWwoeDogbnVtYmVyLCBwOiBudW1iZXJbXSk6IG51bWJlciB7XG4gIHJldHVybiBsZXJwQXJyYXkocCwgeCwgc21vb3Roc3RlcCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFjKGE6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBhID49IDAgPyBhIC0gTWF0aC5mbG9vcihhKSA6IGEgLSBNYXRoLmNlaWwoYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwQXJyYXkoYTogbnVtYmVyW10sIGk6IG51bWJlciwgZjogdHlwZW9mIGxlcnAgPSBsZXJwKSB7XG4gIGNvbnN0IHMgPSBpICogKGEubGVuZ3RoIC0gMSk7XG4gIGNvbnN0IHAgPSBjbGFtcChNYXRoLnRydW5jKHMpLCAwLCBhLmxlbmd0aCAtIDEpO1xuICByZXR1cm4gZihhW3BdIHx8IDAsIGFbcCArIDFdIHx8IDAsIGZyYWMocykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZjogRnVuY3Rpb24sIG1zOiBudW1iZXIgPSAxMDApIHtcbiAgbGV0IHRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PjtcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGYuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSwgbXMpO1xuICB9O1xufVxuIiwiZXhwb3J0IHR5cGUgdmVjID0geyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IHZlYyA9ICh4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogdmVjID0+IHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCAmJiB5ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB2ZWMuY2xvbmUoeCk7XG4gIH1cbiAgaWYgKHkgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2ZWMuZGlhZyh4ID8/IDApO1xuICB9XG4gIHJldHVybiB7IHg6IHggPz8gMCwgeTogeSA/PyAwIH07XG59XG52ZWMuY2xvbmUgPSAoYTogdmVjKTogdmVjID0+ICh7IHg6IGEueCwgeTogYS55IH0pO1xudmVjLmRpYWcgPSAobjogbnVtYmVyKTogdmVjID0+ICh7IHg6IG4sIHk6IG4gfSk7XG52ZWMuY29tcG9uZW50cyA9IChhOiB2ZWMpOiBbbnVtYmVyLCBudW1iZXJdID0+IFthLngsIGEueV07XG52ZWMudXggPSAoKSA9PiB2ZWMoMSwgMCk7XG52ZWMudXkgPSAoKSA9PiB2ZWMoMCwgMSk7XG52ZWMuYWRkID0gKGE6IHZlYywgYjogdmVjKTogdmVjID0+ICh7IHg6IGEueCArIGIueCwgeTogYS55ICsgYi55IH0pO1xudmVjLm11bCA9IChhOiB2ZWMsIGI6IG51bWJlcik6IHZlYyA9PiAoeyB4OiBhLnggKiBiLCB5OiBhLnkgKiBiIH0pO1xudmVjLnN1YiA9IChhOiB2ZWMsIGI6IHZlYykgPT4gKHsgeDogYS54IC0gYi54LCB5OiBhLnkgLSBiLnkgfSk7XG52ZWMubGVuID0gKGE6IHZlYyk6IG51bWJlciA9PiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55KTtcbnZlYy5tYW5oYXR0YW4gPSAoYTogdmVjKTogbnVtYmVyID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xudmVjLm5vciA9IChhOiB2ZWMpOiB2ZWMgPT4ge1xuICBjb25zdCBsID0gdmVjLmxlbihhKTtcbiAgcmV0dXJuIGwgPyB7IHg6IGEueCAvIGwsIHk6IGEueSAvIGwgfSA6IHZlYygpO1xufTtcbnZlYy5kb3QgPSAoYTogdmVjLCBiOiB2ZWMpOiBudW1iZXIgPT4gYS54ICogYi54ICsgYS55ICogYi55O1xudmVjLnJvdCA9IChhOiB2ZWMsIHI6IG51bWJlcik6IHZlYyA9PiB7XG4gIGNvbnN0IHMgPSBNYXRoLnNpbihyKSwgYyA9IE1hdGguY29zKHIpO1xuICByZXR1cm4geyB4OiBjICogYS54IC0gcyAqIGEueSwgeTogcyAqIGEueCArIGMgKiBhLnkgfTtcbn1cbnZlYy5lcSA9IChhOiB2ZWMsIGI6IHZlYyk6IGJvb2xlYW4gPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnk7XG52ZWMucmFkID0gKGE6IHZlYyk6IG51bWJlciA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcbnZlYy5tYXAgPSAoYTogdmVjLCBmOiAobjogbnVtYmVyLCBsPzogc3RyaW5nKSA9PiBudW1iZXIpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSB9KTtcbnZlYy5zdHIgPSAoYTogdmVjLCBzOiBzdHJpbmcgPSAnLCAnKSA9PiBbYS54LCBzLCBhLnldLmpvaW4oJycpO1xudmVjLmF2ZyA9ICguLi52OiB2ZWNbXSk6IHZlYyA9PiB2Lmxlbmd0aFxuICA/IHZlYyhcbiAgICB2LnJlZHVjZSgoYSwgYykgPT4gYSArIGMueCwgMCkgLyB2Lmxlbmd0aCxcbiAgICB2LnJlZHVjZSgoYSwgYykgPT4gYSArIGMueSwgMCkgLyB2Lmxlbmd0aCxcbiAgKVxuICA6IHZlYygpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKSk7XG4gIGdhbWUuaW5pdGlhbGlzZSgpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==