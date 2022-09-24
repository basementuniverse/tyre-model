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
const Input_1 = __webpack_require__(/*! ./Input */ "./src/Input.ts");
const Wheel_1 = __webpack_require__(/*! ./Wheel */ "./src/Wheel.ts");
const vec_1 = __webpack_require__(/*! ./vec */ "./src/vec.ts");
const utilities_1 = __webpack_require__(/*! ./utilities */ "./src/utilities.ts");
const config = __webpack_require__(/*! ./config.json */ "./src/config.json");
const Debug_1 = __webpack_require__(/*! ./Debug */ "./src/Debug.ts");
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
        this.reverse = false;
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
        this.handbrake = Input_1.default.keyDown(config.controls.handbrake);
        this.throttle = Input_1.default.keyDown(config.controls.throttle);
        this.brake = Input_1.default.keyDown(config.controls.brake);
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
        Debug_1.default.value('reverse', 'reverse', {
            showLabel: false,
            foregroundColour: this.reverse ? 'white' : 'rgba(255, 255, 255, 0.2)',
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
        gui.add(Game.settings, 'carEngineReversePower').min(0).max(100).step(1);
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
    carEngineReversePower: 30,
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
        this.context.restore();
    }
    draw(context, car) {
        context.save();
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.translate(Game_1.default.screen.x - this.size.x - this.margin, Game_1.default.screen.y - this.size.y - this.margin);
        context.drawImage(this.canvas, 0, 0);
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
        this.mouseState = { button: false, position: (0, vec_1.vec)(), wheel: 0 };
        this.previousMouseState = { button: false, position: (0, vec_1.vec)(), wheel: 0 };
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
        window.addEventListener('wheel', e => {
            this.mouseState.wheel = e.deltaY > 0 ? 1 : -1;
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
            wheel: 0,
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
    static mouseWheelUp() {
        const instance = Input.getInstance();
        return instance.mouseState.wheel > 0;
    }
    static mouseWheelDown() {
        const instance = Input.getInstance();
        return instance.mouseState.wheel < 0;
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
        this.reverse = false;
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
        this.handbrake = Input_1.default.keyDown(config.controls.handbrake);
        this.throttle = Input_1.default.keyDown(config.controls.throttle);
        this.brake = Input_1.default.keyDown(config.controls.brake);
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
        const lateralDrag = (0, utilities_1.smoothstep)(Game_1.default.settings.tyreLateralDragMin, Game_1.default.settings.tyreLateralDragMax, 1 - (0, utilities_1.clamp)(slipComponent * speedComponent));
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
exports.debounce = exports.lerpArray = exports.frac = exports.linearTransform = exports.wrapDirection = exports.smoothstep = exports.lerp = exports.clamp = void 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0osYUFBYSxvQ0FBb0M7QUFDakQsSUFBSTtBQUNKLGFBQWEsZ0RBQWdEO0FBQzdELElBQUk7QUFDSixhQUFhLG9DQUFvQztBQUNqRCxJQUFJO0FBQ0osYUFBYSxnREFBZ0Q7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFFBQVE7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxvQ0FBb0MsU0FBUztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLCtDQUErQyxFQUFFO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG9CQUFvQixrQkFBa0I7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7O0FBUUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvS0FBb0ssZ0NBQWdDO0FBQ3BNO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtB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QSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxnRkFBZ0YsdUVBQXVFO0FBQ3ZKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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O1FBQ3hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsV0FBVyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0RSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqRSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsdUJBQXVCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4RSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsZUFBZSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMxRCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSx3QkFBd0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDL0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1RSxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsWUFBWSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9ELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLG9CQUFvQixDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRCxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsb0JBQW9CLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNELEdBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQzthQUN0QyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ2QsUUFBUSxDQUFDLHdCQUFRLEVBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFD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QUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXJlLW1vZGVsLy4vbm9kZV9tb2R1bGVzL2RhdC5ndWkvYnVpbGQvZGF0Lmd1aS5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vdHlyZS1tb2RlbC8uL3NyYy9CYWNrZ3JvdW5kLnRzIiwid2VicGFjazovL3R5cmUtbW9kZWwvLi9zcmMvQ2FtZXJhLnRzIiwid2VicGFjazovL3R5cmUtbW9kZWwvLi9zcmMvQ2FyLnRzIiwid2VicGFjazovL3R5cmUtbW9kZWwvLi9zcmMvRGVidWcudHMiLCJ3ZWJwYWNrOi8vdHlyZS1tb2RlbC8uL3NyYy9HYW1lLnRzIiwid2VicGFjazovL3R5cmUtbW9kZWwvLi9zcmMvR3JhcGgudHMiLCJ3ZWJwYWNrOi8vdHlyZS1tb2RlbC8uL3NyYy9JbnB1dC50cyIsIndlYnBhY2s6Ly90eXJlLW1vZGVsLy4vc3JjL1NraWRDYW52YXMudHMiLCJ3ZWJwYWNrOi8vdHlyZS1tb2RlbC8uL3NyYy9UZXN0V2hlZWwudHMiLCJ3ZWJwYWNrOi8vdHlyZS1tb2RlbC8uL3NyYy9XaGVlbC50cyIsIndlYnBhY2s6Ly90eXJlLW1vZGVsLy4vc3JjL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly90eXJlLW1vZGVsLy4vc3JjL3V0aWxpdGllcy50cyIsIndlYnBhY2s6Ly90eXJlLW1vZGVsLy4vc3JjL3ZlYy50cyIsIndlYnBhY2s6Ly90eXJlLW1vZGVsL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3R5cmUtbW9kZWwvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3R5cmUtbW9kZWwvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90eXJlLW1vZGVsL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdHlyZS1tb2RlbC8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIGRhdC1ndWkgSmF2YVNjcmlwdCBDb250cm9sbGVyIExpYnJhcnlcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRhYXJ0cy9kYXQuZ3VpXG4gKlxuICogQ29weXJpZ2h0IDIwMTEgRGF0YSBBcnRzIFRlYW0sIEdvb2dsZSBDcmVhdGl2ZSBMYWJcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKi9cblxuZnVuY3Rpb24gX19fJGluc2VydFN0eWxlKGNzcykge1xuICBpZiAoIWNzcykge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIHN0eWxlLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0L2NzcycpO1xuICBzdHlsZS5pbm5lckhUTUwgPSBjc3M7XG4gIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXG4gIHJldHVybiBjc3M7XG59XG5cbmZ1bmN0aW9uIGNvbG9yVG9TdHJpbmcgKGNvbG9yLCBmb3JjZUNTU0hleCkge1xuICB2YXIgY29sb3JGb3JtYXQgPSBjb2xvci5fX3N0YXRlLmNvbnZlcnNpb25OYW1lLnRvU3RyaW5nKCk7XG4gIHZhciByID0gTWF0aC5yb3VuZChjb2xvci5yKTtcbiAgdmFyIGcgPSBNYXRoLnJvdW5kKGNvbG9yLmcpO1xuICB2YXIgYiA9IE1hdGgucm91bmQoY29sb3IuYik7XG4gIHZhciBhID0gY29sb3IuYTtcbiAgdmFyIGggPSBNYXRoLnJvdW5kKGNvbG9yLmgpO1xuICB2YXIgcyA9IGNvbG9yLnMudG9GaXhlZCgxKTtcbiAgdmFyIHYgPSBjb2xvci52LnRvRml4ZWQoMSk7XG4gIGlmIChmb3JjZUNTU0hleCB8fCBjb2xvckZvcm1hdCA9PT0gJ1RIUkVFX0NIQVJfSEVYJyB8fCBjb2xvckZvcm1hdCA9PT0gJ1NJWF9DSEFSX0hFWCcpIHtcbiAgICB2YXIgc3RyID0gY29sb3IuaGV4LnRvU3RyaW5nKDE2KTtcbiAgICB3aGlsZSAoc3RyLmxlbmd0aCA8IDYpIHtcbiAgICAgIHN0ciA9ICcwJyArIHN0cjtcbiAgICB9XG4gICAgcmV0dXJuICcjJyArIHN0cjtcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ0NTU19SR0InKSB7XG4gICAgcmV0dXJuICdyZ2IoJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcpJztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ0NTU19SR0JBJykge1xuICAgIHJldHVybiAncmdiYSgnICsgciArICcsJyArIGcgKyAnLCcgKyBiICsgJywnICsgYSArICcpJztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ0hFWCcpIHtcbiAgICByZXR1cm4gJzB4JyArIGNvbG9yLmhleC50b1N0cmluZygxNik7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdSR0JfQVJSQVknKSB7XG4gICAgcmV0dXJuICdbJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICddJztcbiAgfSBlbHNlIGlmIChjb2xvckZvcm1hdCA9PT0gJ1JHQkFfQVJSQVknKSB7XG4gICAgcmV0dXJuICdbJyArIHIgKyAnLCcgKyBnICsgJywnICsgYiArICcsJyArIGEgKyAnXSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdSR0JfT0JKJykge1xuICAgIHJldHVybiAne3I6JyArIHIgKyAnLGc6JyArIGcgKyAnLGI6JyArIGIgKyAnfSc7XG4gIH0gZWxzZSBpZiAoY29sb3JGb3JtYXQgPT09ICdSR0JBX09CSicpIHtcbiAgICByZXR1cm4gJ3tyOicgKyByICsgJyxnOicgKyBnICsgJyxiOicgKyBiICsgJyxhOicgKyBhICsgJ30nO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnSFNWX09CSicpIHtcbiAgICByZXR1cm4gJ3toOicgKyBoICsgJyxzOicgKyBzICsgJyx2OicgKyB2ICsgJ30nO1xuICB9IGVsc2UgaWYgKGNvbG9yRm9ybWF0ID09PSAnSFNWQV9PQkonKSB7XG4gICAgcmV0dXJuICd7aDonICsgaCArICcsczonICsgcyArICcsdjonICsgdiArICcsYTonICsgYSArICd9JztcbiAgfVxuICByZXR1cm4gJ3Vua25vd24gZm9ybWF0Jztcbn1cblxudmFyIEFSUl9FQUNIID0gQXJyYXkucHJvdG90eXBlLmZvckVhY2g7XG52YXIgQVJSX1NMSUNFID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIENvbW1vbiA9IHtcbiAgQlJFQUs6IHt9LFxuICBleHRlbmQ6IGZ1bmN0aW9uIGV4dGVuZCh0YXJnZXQpIHtcbiAgICB0aGlzLmVhY2goQVJSX1NMSUNFLmNhbGwoYXJndW1lbnRzLCAxKSwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgdmFyIGtleXMgPSB0aGlzLmlzT2JqZWN0KG9iaikgPyBPYmplY3Qua2V5cyhvYmopIDogW107XG4gICAgICBrZXlzLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIXRoaXMuaXNVbmRlZmluZWQob2JqW2tleV0pKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LCB0aGlzKTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9LFxuICBkZWZhdWx0czogZnVuY3Rpb24gZGVmYXVsdHModGFyZ2V0KSB7XG4gICAgdGhpcy5lYWNoKEFSUl9TTElDRS5jYWxsKGFyZ3VtZW50cywgMSksIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgIHZhciBrZXlzID0gdGhpcy5pc09iamVjdChvYmopID8gT2JqZWN0LmtleXMob2JqKSA6IFtdO1xuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNVbmRlZmluZWQodGFyZ2V0W2tleV0pKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBvYmpba2V5XTtcbiAgICAgICAgfVxuICAgICAgfS5iaW5kKHRoaXMpKTtcbiAgICB9LCB0aGlzKTtcbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9LFxuICBjb21wb3NlOiBmdW5jdGlvbiBjb21wb3NlKCkge1xuICAgIHZhciB0b0NhbGwgPSBBUlJfU0xJQ0UuY2FsbChhcmd1bWVudHMpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgYXJncyA9IEFSUl9TTElDRS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICBmb3IgKHZhciBpID0gdG9DYWxsLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgIGFyZ3MgPSBbdG9DYWxsW2ldLmFwcGx5KHRoaXMsIGFyZ3MpXTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcmdzWzBdO1xuICAgIH07XG4gIH0sXG4gIGVhY2g6IGZ1bmN0aW9uIGVhY2gob2JqLCBpdHIsIHNjb3BlKSB7XG4gICAgaWYgKCFvYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEFSUl9FQUNIICYmIG9iai5mb3JFYWNoICYmIG9iai5mb3JFYWNoID09PSBBUlJfRUFDSCkge1xuICAgICAgb2JqLmZvckVhY2goaXRyLCBzY29wZSk7XG4gICAgfSBlbHNlIGlmIChvYmoubGVuZ3RoID09PSBvYmoubGVuZ3RoICsgMCkge1xuICAgICAgdmFyIGtleSA9IHZvaWQgMDtcbiAgICAgIHZhciBsID0gdm9pZCAwO1xuICAgICAgZm9yIChrZXkgPSAwLCBsID0gb2JqLmxlbmd0aDsga2V5IDwgbDsga2V5KyspIHtcbiAgICAgICAgaWYgKGtleSBpbiBvYmogJiYgaXRyLmNhbGwoc2NvcGUsIG9ialtrZXldLCBrZXkpID09PSB0aGlzLkJSRUFLKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAodmFyIF9rZXkgaW4gb2JqKSB7XG4gICAgICAgIGlmIChpdHIuY2FsbChzY29wZSwgb2JqW19rZXldLCBfa2V5KSA9PT0gdGhpcy5CUkVBSykge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZGVmZXI6IGZ1bmN0aW9uIGRlZmVyKGZuYykge1xuICAgIHNldFRpbWVvdXQoZm5jLCAwKTtcbiAgfSxcbiAgZGVib3VuY2U6IGZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHRocmVzaG9sZCwgY2FsbEltbWVkaWF0ZWx5KSB7XG4gICAgdmFyIHRpbWVvdXQgPSB2b2lkIDA7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBvYmogPSB0aGlzO1xuICAgICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgICBmdW5jdGlvbiBkZWxheWVkKCkge1xuICAgICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgICAgaWYgKCFjYWxsSW1tZWRpYXRlbHkpIGZ1bmMuYXBwbHkob2JqLCBhcmdzKTtcbiAgICAgIH1cbiAgICAgIHZhciBjYWxsTm93ID0gY2FsbEltbWVkaWF0ZWx5IHx8ICF0aW1lb3V0O1xuICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZGVsYXllZCwgdGhyZXNob2xkKTtcbiAgICAgIGlmIChjYWxsTm93KSB7XG4gICAgICAgIGZ1bmMuYXBwbHkob2JqLCBhcmdzKTtcbiAgICAgIH1cbiAgICB9O1xuICB9LFxuICB0b0FycmF5OiBmdW5jdGlvbiB0b0FycmF5KG9iaikge1xuICAgIGlmIChvYmoudG9BcnJheSkgcmV0dXJuIG9iai50b0FycmF5KCk7XG4gICAgcmV0dXJuIEFSUl9TTElDRS5jYWxsKG9iaik7XG4gIH0sXG4gIGlzVW5kZWZpbmVkOiBmdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7XG4gIH0sXG4gIGlzTnVsbDogZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG51bGw7XG4gIH0sXG4gIGlzTmFOOiBmdW5jdGlvbiAoX2lzTmFOKSB7XG4gICAgZnVuY3Rpb24gaXNOYU4oX3gpIHtcbiAgICAgIHJldHVybiBfaXNOYU4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgaXNOYU4udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gX2lzTmFOLnRvU3RyaW5nKCk7XG4gICAgfTtcbiAgICByZXR1cm4gaXNOYU47XG4gIH0oZnVuY3Rpb24gKG9iaikge1xuICAgIHJldHVybiBpc05hTihvYmopO1xuICB9KSxcbiAgaXNBcnJheTogQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iai5jb25zdHJ1Y3RvciA9PT0gQXJyYXk7XG4gIH0sXG4gIGlzT2JqZWN0OiBmdW5jdGlvbiBpc09iamVjdChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBPYmplY3Qob2JqKTtcbiAgfSxcbiAgaXNOdW1iZXI6IGZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgIHJldHVybiBvYmogPT09IG9iaiArIDA7XG4gIH0sXG4gIGlzU3RyaW5nOiBmdW5jdGlvbiBpc1N0cmluZyhvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSBvYmogKyAnJztcbiAgfSxcbiAgaXNCb29sZWFuOiBmdW5jdGlvbiBpc0Jvb2xlYW4ob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gZmFsc2UgfHwgb2JqID09PSB0cnVlO1xuICB9LFxuICBpc0Z1bmN0aW9uOiBmdW5jdGlvbiBpc0Z1bmN0aW9uKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBGdW5jdGlvbjtcbiAgfVxufTtcblxudmFyIElOVEVSUFJFVEFUSU9OUyA9IFtcbntcbiAgbGl0bXVzOiBDb21tb24uaXNTdHJpbmcsXG4gIGNvbnZlcnNpb25zOiB7XG4gICAgVEhSRUVfQ0hBUl9IRVg6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgdmFyIHRlc3QgPSBvcmlnaW5hbC5tYXRjaCgvXiMoW0EtRjAtOV0pKFtBLUYwLTldKShbQS1GMC05XSkkL2kpO1xuICAgICAgICBpZiAodGVzdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnSEVYJyxcbiAgICAgICAgICBoZXg6IHBhcnNlSW50KCcweCcgKyB0ZXN0WzFdLnRvU3RyaW5nKCkgKyB0ZXN0WzFdLnRvU3RyaW5nKCkgKyB0ZXN0WzJdLnRvU3RyaW5nKCkgKyB0ZXN0WzJdLnRvU3RyaW5nKCkgKyB0ZXN0WzNdLnRvU3RyaW5nKCkgKyB0ZXN0WzNdLnRvU3RyaW5nKCksIDApXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGNvbG9yVG9TdHJpbmdcbiAgICB9LFxuICAgIFNJWF9DSEFSX0hFWDoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICB2YXIgdGVzdCA9IG9yaWdpbmFsLm1hdGNoKC9eIyhbQS1GMC05XXs2fSkkL2kpO1xuICAgICAgICBpZiAodGVzdCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnSEVYJyxcbiAgICAgICAgICBoZXg6IHBhcnNlSW50KCcweCcgKyB0ZXN0WzFdLnRvU3RyaW5nKCksIDApXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGNvbG9yVG9TdHJpbmdcbiAgICB9LFxuICAgIENTU19SR0I6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgdmFyIHRlc3QgPSBvcmlnaW5hbC5tYXRjaCgvXnJnYlxcKFxccyooXFxTKylcXHMqLFxccyooXFxTKylcXHMqLFxccyooXFxTKylcXHMqXFwpLyk7XG4gICAgICAgIGlmICh0ZXN0ID09PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc3BhY2U6ICdSR0InLFxuICAgICAgICAgIHI6IHBhcnNlRmxvYXQodGVzdFsxXSksXG4gICAgICAgICAgZzogcGFyc2VGbG9hdCh0ZXN0WzJdKSxcbiAgICAgICAgICBiOiBwYXJzZUZsb2F0KHRlc3RbM10pXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGNvbG9yVG9TdHJpbmdcbiAgICB9LFxuICAgIENTU19SR0JBOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIHZhciB0ZXN0ID0gb3JpZ2luYWwubWF0Y2goL15yZ2JhXFwoXFxzKihcXFMrKVxccyosXFxzKihcXFMrKVxccyosXFxzKihcXFMrKVxccyosXFxzKihcXFMrKVxccypcXCkvKTtcbiAgICAgICAgaWYgKHRlc3QgPT09IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcGFjZTogJ1JHQicsXG4gICAgICAgICAgcjogcGFyc2VGbG9hdCh0ZXN0WzFdKSxcbiAgICAgICAgICBnOiBwYXJzZUZsb2F0KHRlc3RbMl0pLFxuICAgICAgICAgIGI6IHBhcnNlRmxvYXQodGVzdFszXSksXG4gICAgICAgICAgYTogcGFyc2VGbG9hdCh0ZXN0WzRdKVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBjb2xvclRvU3RyaW5nXG4gICAgfVxuICB9XG59LFxue1xuICBsaXRtdXM6IENvbW1vbi5pc051bWJlcixcbiAgY29udmVyc2lvbnM6IHtcbiAgICBIRVg6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcGFjZTogJ0hFWCcsXG4gICAgICAgICAgaGV4OiBvcmlnaW5hbCxcbiAgICAgICAgICBjb252ZXJzaW9uTmFtZTogJ0hFWCdcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIGNvbG9yLmhleDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0sXG57XG4gIGxpdG11czogQ29tbW9uLmlzQXJyYXksXG4gIGNvbnZlcnNpb25zOiB7XG4gICAgUkdCX0FSUkFZOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIGlmIChvcmlnaW5hbC5sZW5ndGggIT09IDMpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzcGFjZTogJ1JHQicsXG4gICAgICAgICAgcjogb3JpZ2luYWxbMF0sXG4gICAgICAgICAgZzogb3JpZ2luYWxbMV0sXG4gICAgICAgICAgYjogb3JpZ2luYWxbMl1cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICB3cml0ZTogZnVuY3Rpb24gd3JpdGUoY29sb3IpIHtcbiAgICAgICAgcmV0dXJuIFtjb2xvci5yLCBjb2xvci5nLCBjb2xvci5iXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIFJHQkFfQVJSQVk6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgaWYgKG9yaWdpbmFsLmxlbmd0aCAhPT0gNCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNwYWNlOiAnUkdCJyxcbiAgICAgICAgICByOiBvcmlnaW5hbFswXSxcbiAgICAgICAgICBnOiBvcmlnaW5hbFsxXSxcbiAgICAgICAgICBiOiBvcmlnaW5hbFsyXSxcbiAgICAgICAgICBhOiBvcmlnaW5hbFszXVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4gW2NvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIsIGNvbG9yLmFdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSxcbntcbiAgbGl0bXVzOiBDb21tb24uaXNPYmplY3QsXG4gIGNvbnZlcnNpb25zOiB7XG4gICAgUkdCQV9PQko6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgaWYgKENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5yKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuZykgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLmIpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5hKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzcGFjZTogJ1JHQicsXG4gICAgICAgICAgICByOiBvcmlnaW5hbC5yLFxuICAgICAgICAgICAgZzogb3JpZ2luYWwuZyxcbiAgICAgICAgICAgIGI6IG9yaWdpbmFsLmIsXG4gICAgICAgICAgICBhOiBvcmlnaW5hbC5hXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcjogY29sb3IucixcbiAgICAgICAgICBnOiBjb2xvci5nLFxuICAgICAgICAgIGI6IGNvbG9yLmIsXG4gICAgICAgICAgYTogY29sb3IuYVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH0sXG4gICAgUkdCX09CSjoge1xuICAgICAgcmVhZDogZnVuY3Rpb24gcmVhZChvcmlnaW5hbCkge1xuICAgICAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLnIpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5nKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuYikpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3BhY2U6ICdSR0InLFxuICAgICAgICAgICAgcjogb3JpZ2luYWwucixcbiAgICAgICAgICAgIGc6IG9yaWdpbmFsLmcsXG4gICAgICAgICAgICBiOiBvcmlnaW5hbC5iXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9LFxuICAgICAgd3JpdGU6IGZ1bmN0aW9uIHdyaXRlKGNvbG9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgcjogY29sb3IucixcbiAgICAgICAgICBnOiBjb2xvci5nLFxuICAgICAgICAgIGI6IGNvbG9yLmJcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIEhTVkFfT0JKOiB7XG4gICAgICByZWFkOiBmdW5jdGlvbiByZWFkKG9yaWdpbmFsKSB7XG4gICAgICAgIGlmIChDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuaCkgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLnMpICYmIENvbW1vbi5pc051bWJlcihvcmlnaW5hbC52KSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwuYSkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc3BhY2U6ICdIU1YnLFxuICAgICAgICAgICAgaDogb3JpZ2luYWwuaCxcbiAgICAgICAgICAgIHM6IG9yaWdpbmFsLnMsXG4gICAgICAgICAgICB2OiBvcmlnaW5hbC52LFxuICAgICAgICAgICAgYTogb3JpZ2luYWwuYVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGg6IGNvbG9yLmgsXG4gICAgICAgICAgczogY29sb3IucyxcbiAgICAgICAgICB2OiBjb2xvci52LFxuICAgICAgICAgIGE6IGNvbG9yLmFcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9LFxuICAgIEhTVl9PQko6IHtcbiAgICAgIHJlYWQ6IGZ1bmN0aW9uIHJlYWQob3JpZ2luYWwpIHtcbiAgICAgICAgaWYgKENvbW1vbi5pc051bWJlcihvcmlnaW5hbC5oKSAmJiBDb21tb24uaXNOdW1iZXIob3JpZ2luYWwucykgJiYgQ29tbW9uLmlzTnVtYmVyKG9yaWdpbmFsLnYpKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNwYWNlOiAnSFNWJyxcbiAgICAgICAgICAgIGg6IG9yaWdpbmFsLmgsXG4gICAgICAgICAgICBzOiBvcmlnaW5hbC5zLFxuICAgICAgICAgICAgdjogb3JpZ2luYWwudlxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHdyaXRlOiBmdW5jdGlvbiB3cml0ZShjb2xvcikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGg6IGNvbG9yLmgsXG4gICAgICAgICAgczogY29sb3IucyxcbiAgICAgICAgICB2OiBjb2xvci52XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9XG59XTtcbnZhciByZXN1bHQgPSB2b2lkIDA7XG52YXIgdG9SZXR1cm4gPSB2b2lkIDA7XG52YXIgaW50ZXJwcmV0ID0gZnVuY3Rpb24gaW50ZXJwcmV0KCkge1xuICB0b1JldHVybiA9IGZhbHNlO1xuICB2YXIgb3JpZ2luYWwgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IENvbW1vbi50b0FycmF5KGFyZ3VtZW50cykgOiBhcmd1bWVudHNbMF07XG4gIENvbW1vbi5lYWNoKElOVEVSUFJFVEFUSU9OUywgZnVuY3Rpb24gKGZhbWlseSkge1xuICAgIGlmIChmYW1pbHkubGl0bXVzKG9yaWdpbmFsKSkge1xuICAgICAgQ29tbW9uLmVhY2goZmFtaWx5LmNvbnZlcnNpb25zLCBmdW5jdGlvbiAoY29udmVyc2lvbiwgY29udmVyc2lvbk5hbWUpIHtcbiAgICAgICAgcmVzdWx0ID0gY29udmVyc2lvbi5yZWFkKG9yaWdpbmFsKTtcbiAgICAgICAgaWYgKHRvUmV0dXJuID09PSBmYWxzZSAmJiByZXN1bHQgIT09IGZhbHNlKSB7XG4gICAgICAgICAgdG9SZXR1cm4gPSByZXN1bHQ7XG4gICAgICAgICAgcmVzdWx0LmNvbnZlcnNpb25OYW1lID0gY29udmVyc2lvbk5hbWU7XG4gICAgICAgICAgcmVzdWx0LmNvbnZlcnNpb24gPSBjb252ZXJzaW9uO1xuICAgICAgICAgIHJldHVybiBDb21tb24uQlJFQUs7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIENvbW1vbi5CUkVBSztcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gdG9SZXR1cm47XG59O1xuXG52YXIgdG1wQ29tcG9uZW50ID0gdm9pZCAwO1xudmFyIENvbG9yTWF0aCA9IHtcbiAgaHN2X3RvX3JnYjogZnVuY3Rpb24gaHN2X3RvX3JnYihoLCBzLCB2KSB7XG4gICAgdmFyIGhpID0gTWF0aC5mbG9vcihoIC8gNjApICUgNjtcbiAgICB2YXIgZiA9IGggLyA2MCAtIE1hdGguZmxvb3IoaCAvIDYwKTtcbiAgICB2YXIgcCA9IHYgKiAoMS4wIC0gcyk7XG4gICAgdmFyIHEgPSB2ICogKDEuMCAtIGYgKiBzKTtcbiAgICB2YXIgdCA9IHYgKiAoMS4wIC0gKDEuMCAtIGYpICogcyk7XG4gICAgdmFyIGMgPSBbW3YsIHQsIHBdLCBbcSwgdiwgcF0sIFtwLCB2LCB0XSwgW3AsIHEsIHZdLCBbdCwgcCwgdl0sIFt2LCBwLCBxXV1baGldO1xuICAgIHJldHVybiB7XG4gICAgICByOiBjWzBdICogMjU1LFxuICAgICAgZzogY1sxXSAqIDI1NSxcbiAgICAgIGI6IGNbMl0gKiAyNTVcbiAgICB9O1xuICB9LFxuICByZ2JfdG9faHN2OiBmdW5jdGlvbiByZ2JfdG9faHN2KHIsIGcsIGIpIHtcbiAgICB2YXIgbWluID0gTWF0aC5taW4ociwgZywgYik7XG4gICAgdmFyIG1heCA9IE1hdGgubWF4KHIsIGcsIGIpO1xuICAgIHZhciBkZWx0YSA9IG1heCAtIG1pbjtcbiAgICB2YXIgaCA9IHZvaWQgMDtcbiAgICB2YXIgcyA9IHZvaWQgMDtcbiAgICBpZiAobWF4ICE9PSAwKSB7XG4gICAgICBzID0gZGVsdGEgLyBtYXg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGg6IE5hTixcbiAgICAgICAgczogMCxcbiAgICAgICAgdjogMFxuICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHIgPT09IG1heCkge1xuICAgICAgaCA9IChnIC0gYikgLyBkZWx0YTtcbiAgICB9IGVsc2UgaWYgKGcgPT09IG1heCkge1xuICAgICAgaCA9IDIgKyAoYiAtIHIpIC8gZGVsdGE7XG4gICAgfSBlbHNlIHtcbiAgICAgIGggPSA0ICsgKHIgLSBnKSAvIGRlbHRhO1xuICAgIH1cbiAgICBoIC89IDY7XG4gICAgaWYgKGggPCAwKSB7XG4gICAgICBoICs9IDE7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICBoOiBoICogMzYwLFxuICAgICAgczogcyxcbiAgICAgIHY6IG1heCAvIDI1NVxuICAgIH07XG4gIH0sXG4gIHJnYl90b19oZXg6IGZ1bmN0aW9uIHJnYl90b19oZXgociwgZywgYikge1xuICAgIHZhciBoZXggPSB0aGlzLmhleF93aXRoX2NvbXBvbmVudCgwLCAyLCByKTtcbiAgICBoZXggPSB0aGlzLmhleF93aXRoX2NvbXBvbmVudChoZXgsIDEsIGcpO1xuICAgIGhleCA9IHRoaXMuaGV4X3dpdGhfY29tcG9uZW50KGhleCwgMCwgYik7XG4gICAgcmV0dXJuIGhleDtcbiAgfSxcbiAgY29tcG9uZW50X2Zyb21faGV4OiBmdW5jdGlvbiBjb21wb25lbnRfZnJvbV9oZXgoaGV4LCBjb21wb25lbnRJbmRleCkge1xuICAgIHJldHVybiBoZXggPj4gY29tcG9uZW50SW5kZXggKiA4ICYgMHhGRjtcbiAgfSxcbiAgaGV4X3dpdGhfY29tcG9uZW50OiBmdW5jdGlvbiBoZXhfd2l0aF9jb21wb25lbnQoaGV4LCBjb21wb25lbnRJbmRleCwgdmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgPDwgKHRtcENvbXBvbmVudCA9IGNvbXBvbmVudEluZGV4ICogOCkgfCBoZXggJiB+KDB4RkYgPDwgdG1wQ29tcG9uZW50KTtcbiAgfVxufTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxuXG5cblxuXG5cblxudmFyIGdldCA9IGZ1bmN0aW9uIGdldChvYmplY3QsIHByb3BlcnR5LCByZWNlaXZlcikge1xuICBpZiAob2JqZWN0ID09PSBudWxsKSBvYmplY3QgPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4gIHZhciBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHByb3BlcnR5KTtcblxuICBpZiAoZGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHBhcmVudCA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihvYmplY3QpO1xuXG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGdldChwYXJlbnQsIHByb3BlcnR5LCByZWNlaXZlcik7XG4gICAgfVxuICB9IGVsc2UgaWYgKFwidmFsdWVcIiBpbiBkZXNjKSB7XG4gICAgcmV0dXJuIGRlc2MudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGdldHRlciA9IGRlc2MuZ2V0O1xuXG4gICAgaWYgKGdldHRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHJldHVybiBnZXR0ZXIuY2FsbChyZWNlaXZlcik7XG4gIH1cbn07XG5cbnZhciBpbmhlcml0cyA9IGZ1bmN0aW9uIChzdWJDbGFzcywgc3VwZXJDbGFzcykge1xuICBpZiAodHlwZW9mIHN1cGVyQ2xhc3MgIT09IFwiZnVuY3Rpb25cIiAmJiBzdXBlckNsYXNzICE9PSBudWxsKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uLCBub3QgXCIgKyB0eXBlb2Ygc3VwZXJDbGFzcyk7XG4gIH1cblxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2Yoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIDogc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn07XG5cblxuXG5cblxuXG5cblxuXG5cblxudmFyIHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4gPSBmdW5jdGlvbiAoc2VsZiwgY2FsbCkge1xuICBpZiAoIXNlbGYpIHtcbiAgICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7XG4gIH1cblxuICByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjtcbn07XG5cbnZhciBDb2xvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ29sb3IoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQ29sb3IpO1xuICAgIHRoaXMuX19zdGF0ZSA9IGludGVycHJldC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGlmICh0aGlzLl9fc3RhdGUgPT09IGZhbHNlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBpbnRlcnByZXQgY29sb3IgYXJndW1lbnRzJyk7XG4gICAgfVxuICAgIHRoaXMuX19zdGF0ZS5hID0gdGhpcy5fX3N0YXRlLmEgfHwgMTtcbiAgfVxuICBjcmVhdGVDbGFzcyhDb2xvciwgW3tcbiAgICBrZXk6ICd0b1N0cmluZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgICAgcmV0dXJuIGNvbG9yVG9TdHJpbmcodGhpcyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAndG9IZXhTdHJpbmcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b0hleFN0cmluZygpIHtcbiAgICAgIHJldHVybiBjb2xvclRvU3RyaW5nKHRoaXMsIHRydWUpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3RvT3JpZ2luYWwnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0b09yaWdpbmFsKCkge1xuICAgICAgcmV0dXJuIHRoaXMuX19zdGF0ZS5jb252ZXJzaW9uLndyaXRlKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gQ29sb3I7XG59KCk7XG5mdW5jdGlvbiBkZWZpbmVSR0JDb21wb25lbnQodGFyZ2V0LCBjb21wb25lbnQsIGNvbXBvbmVudEhleEluZGV4KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbXBvbmVudCwge1xuICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgaWYgKHRoaXMuX19zdGF0ZS5zcGFjZSA9PT0gJ1JHQicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19zdGF0ZVtjb21wb25lbnRdO1xuICAgICAgfVxuICAgICAgQ29sb3IucmVjYWxjdWxhdGVSR0IodGhpcywgY29tcG9uZW50LCBjb21wb25lbnRIZXhJbmRleCk7XG4gICAgICByZXR1cm4gdGhpcy5fX3N0YXRlW2NvbXBvbmVudF07XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgICBpZiAodGhpcy5fX3N0YXRlLnNwYWNlICE9PSAnUkdCJykge1xuICAgICAgICBDb2xvci5yZWNhbGN1bGF0ZVJHQih0aGlzLCBjb21wb25lbnQsIGNvbXBvbmVudEhleEluZGV4KTtcbiAgICAgICAgdGhpcy5fX3N0YXRlLnNwYWNlID0gJ1JHQic7XG4gICAgICB9XG4gICAgICB0aGlzLl9fc3RhdGVbY29tcG9uZW50XSA9IHY7XG4gICAgfVxuICB9KTtcbn1cbmZ1bmN0aW9uIGRlZmluZUhTVkNvbXBvbmVudCh0YXJnZXQsIGNvbXBvbmVudCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBjb21wb25lbnQsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgIGlmICh0aGlzLl9fc3RhdGUuc3BhY2UgPT09ICdIU1YnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fc3RhdGVbY29tcG9uZW50XTtcbiAgICAgIH1cbiAgICAgIENvbG9yLnJlY2FsY3VsYXRlSFNWKHRoaXMpO1xuICAgICAgcmV0dXJuIHRoaXMuX19zdGF0ZVtjb21wb25lbnRdO1xuICAgIH0sXG4gICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgICAgaWYgKHRoaXMuX19zdGF0ZS5zcGFjZSAhPT0gJ0hTVicpIHtcbiAgICAgICAgQ29sb3IucmVjYWxjdWxhdGVIU1YodGhpcyk7XG4gICAgICAgIHRoaXMuX19zdGF0ZS5zcGFjZSA9ICdIU1YnO1xuICAgICAgfVxuICAgICAgdGhpcy5fX3N0YXRlW2NvbXBvbmVudF0gPSB2O1xuICAgIH1cbiAgfSk7XG59XG5Db2xvci5yZWNhbGN1bGF0ZVJHQiA9IGZ1bmN0aW9uIChjb2xvciwgY29tcG9uZW50LCBjb21wb25lbnRIZXhJbmRleCkge1xuICBpZiAoY29sb3IuX19zdGF0ZS5zcGFjZSA9PT0gJ0hFWCcpIHtcbiAgICBjb2xvci5fX3N0YXRlW2NvbXBvbmVudF0gPSBDb2xvck1hdGguY29tcG9uZW50X2Zyb21faGV4KGNvbG9yLl9fc3RhdGUuaGV4LCBjb21wb25lbnRIZXhJbmRleCk7XG4gIH0gZWxzZSBpZiAoY29sb3IuX19zdGF0ZS5zcGFjZSA9PT0gJ0hTVicpIHtcbiAgICBDb21tb24uZXh0ZW5kKGNvbG9yLl9fc3RhdGUsIENvbG9yTWF0aC5oc3ZfdG9fcmdiKGNvbG9yLl9fc3RhdGUuaCwgY29sb3IuX19zdGF0ZS5zLCBjb2xvci5fX3N0YXRlLnYpKTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0NvcnJ1cHRlZCBjb2xvciBzdGF0ZScpO1xuICB9XG59O1xuQ29sb3IucmVjYWxjdWxhdGVIU1YgPSBmdW5jdGlvbiAoY29sb3IpIHtcbiAgdmFyIHJlc3VsdCA9IENvbG9yTWF0aC5yZ2JfdG9faHN2KGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpO1xuICBDb21tb24uZXh0ZW5kKGNvbG9yLl9fc3RhdGUsIHtcbiAgICBzOiByZXN1bHQucyxcbiAgICB2OiByZXN1bHQudlxuICB9KTtcbiAgaWYgKCFDb21tb24uaXNOYU4ocmVzdWx0LmgpKSB7XG4gICAgY29sb3IuX19zdGF0ZS5oID0gcmVzdWx0Lmg7XG4gIH0gZWxzZSBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKGNvbG9yLl9fc3RhdGUuaCkpIHtcbiAgICBjb2xvci5fX3N0YXRlLmggPSAwO1xuICB9XG59O1xuQ29sb3IuQ09NUE9ORU5UUyA9IFsncicsICdnJywgJ2InLCAnaCcsICdzJywgJ3YnLCAnaGV4JywgJ2EnXTtcbmRlZmluZVJHQkNvbXBvbmVudChDb2xvci5wcm90b3R5cGUsICdyJywgMik7XG5kZWZpbmVSR0JDb21wb25lbnQoQ29sb3IucHJvdG90eXBlLCAnZycsIDEpO1xuZGVmaW5lUkdCQ29tcG9uZW50KENvbG9yLnByb3RvdHlwZSwgJ2InLCAwKTtcbmRlZmluZUhTVkNvbXBvbmVudChDb2xvci5wcm90b3R5cGUsICdoJyk7XG5kZWZpbmVIU1ZDb21wb25lbnQoQ29sb3IucHJvdG90eXBlLCAncycpO1xuZGVmaW5lSFNWQ29tcG9uZW50KENvbG9yLnByb3RvdHlwZSwgJ3YnKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb2xvci5wcm90b3R5cGUsICdhJywge1xuICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICByZXR1cm4gdGhpcy5fX3N0YXRlLmE7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24gc2V0JCQxKHYpIHtcbiAgICB0aGlzLl9fc3RhdGUuYSA9IHY7XG4gIH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbG9yLnByb3RvdHlwZSwgJ2hleCcsIHtcbiAgZ2V0OiBmdW5jdGlvbiBnZXQkJDEoKSB7XG4gICAgaWYgKHRoaXMuX19zdGF0ZS5zcGFjZSAhPT0gJ0hFWCcpIHtcbiAgICAgIHRoaXMuX19zdGF0ZS5oZXggPSBDb2xvck1hdGgucmdiX3RvX2hleCh0aGlzLnIsIHRoaXMuZywgdGhpcy5iKTtcbiAgICAgIHRoaXMuX19zdGF0ZS5zcGFjZSA9ICdIRVgnO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fX3N0YXRlLmhleDtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgIHRoaXMuX19zdGF0ZS5zcGFjZSA9ICdIRVgnO1xuICAgIHRoaXMuX19zdGF0ZS5oZXggPSB2O1xuICB9XG59KTtcblxudmFyIENvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENvbnRyb2xsZXIpO1xuICAgIHRoaXMuaW5pdGlhbFZhbHVlID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLm9iamVjdCA9IG9iamVjdDtcbiAgICB0aGlzLnByb3BlcnR5ID0gcHJvcGVydHk7XG4gICAgdGhpcy5fX29uQ2hhbmdlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX19vbkZpbmlzaENoYW5nZSA9IHVuZGVmaW5lZDtcbiAgfVxuICBjcmVhdGVDbGFzcyhDb250cm9sbGVyLCBbe1xuICAgIGtleTogJ29uQ2hhbmdlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DaGFuZ2UoZm5jKSB7XG4gICAgICB0aGlzLl9fb25DaGFuZ2UgPSBmbmM7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbkZpbmlzaENoYW5nZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uRmluaXNoQ2hhbmdlKGZuYykge1xuICAgICAgdGhpcy5fX29uRmluaXNoQ2hhbmdlID0gZm5jO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnc2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZShuZXdWYWx1ZSkge1xuICAgICAgdGhpcy5vYmplY3RbdGhpcy5wcm9wZXJ0eV0gPSBuZXdWYWx1ZTtcbiAgICAgIGlmICh0aGlzLl9fb25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5fX29uQ2hhbmdlLmNhbGwodGhpcywgbmV3VmFsdWUpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVEaXNwbGF5KCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgcmV0dXJuIHRoaXMub2JqZWN0W3RoaXMucHJvcGVydHldO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNNb2RpZmllZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzTW9kaWZpZWQoKSB7XG4gICAgICByZXR1cm4gdGhpcy5pbml0aWFsVmFsdWUgIT09IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIENvbnRyb2xsZXI7XG59KCk7XG5cbnZhciBFVkVOVF9NQVAgPSB7XG4gIEhUTUxFdmVudHM6IFsnY2hhbmdlJ10sXG4gIE1vdXNlRXZlbnRzOiBbJ2NsaWNrJywgJ21vdXNlbW92ZScsICdtb3VzZWRvd24nLCAnbW91c2V1cCcsICdtb3VzZW92ZXInXSxcbiAgS2V5Ym9hcmRFdmVudHM6IFsna2V5ZG93biddXG59O1xudmFyIEVWRU5UX01BUF9JTlYgPSB7fTtcbkNvbW1vbi5lYWNoKEVWRU5UX01BUCwgZnVuY3Rpb24gKHYsIGspIHtcbiAgQ29tbW9uLmVhY2godiwgZnVuY3Rpb24gKGUpIHtcbiAgICBFVkVOVF9NQVBfSU5WW2VdID0gaztcbiAgfSk7XG59KTtcbnZhciBDU1NfVkFMVUVfUElYRUxTID0gLyhcXGQrKFxcLlxcZCspPylweC87XG5mdW5jdGlvbiBjc3NWYWx1ZVRvUGl4ZWxzKHZhbCkge1xuICBpZiAodmFsID09PSAnMCcgfHwgQ29tbW9uLmlzVW5kZWZpbmVkKHZhbCkpIHtcbiAgICByZXR1cm4gMDtcbiAgfVxuICB2YXIgbWF0Y2ggPSB2YWwubWF0Y2goQ1NTX1ZBTFVFX1BJWEVMUyk7XG4gIGlmICghQ29tbW9uLmlzTnVsbChtYXRjaCkpIHtcbiAgICByZXR1cm4gcGFyc2VGbG9hdChtYXRjaFsxXSk7XG4gIH1cbiAgcmV0dXJuIDA7XG59XG52YXIgZG9tID0ge1xuICBtYWtlU2VsZWN0YWJsZTogZnVuY3Rpb24gbWFrZVNlbGVjdGFibGUoZWxlbSwgc2VsZWN0YWJsZSkge1xuICAgIGlmIChlbGVtID09PSB1bmRlZmluZWQgfHwgZWxlbS5zdHlsZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgZWxlbS5vbnNlbGVjdHN0YXJ0ID0gc2VsZWN0YWJsZSA/IGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IDogZnVuY3Rpb24gKCkge307XG4gICAgZWxlbS5zdHlsZS5Nb3pVc2VyU2VsZWN0ID0gc2VsZWN0YWJsZSA/ICdhdXRvJyA6ICdub25lJztcbiAgICBlbGVtLnN0eWxlLktodG1sVXNlclNlbGVjdCA9IHNlbGVjdGFibGUgPyAnYXV0bycgOiAnbm9uZSc7XG4gICAgZWxlbS51bnNlbGVjdGFibGUgPSBzZWxlY3RhYmxlID8gJ29uJyA6ICdvZmYnO1xuICB9LFxuICBtYWtlRnVsbHNjcmVlbjogZnVuY3Rpb24gbWFrZUZ1bGxzY3JlZW4oZWxlbSwgaG9yLCB2ZXJ0KSB7XG4gICAgdmFyIHZlcnRpY2FsID0gdmVydDtcbiAgICB2YXIgaG9yaXpvbnRhbCA9IGhvcjtcbiAgICBpZiAoQ29tbW9uLmlzVW5kZWZpbmVkKGhvcml6b250YWwpKSB7XG4gICAgICBob3Jpem9udGFsID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKENvbW1vbi5pc1VuZGVmaW5lZCh2ZXJ0aWNhbCkpIHtcbiAgICAgIHZlcnRpY2FsID0gdHJ1ZTtcbiAgICB9XG4gICAgZWxlbS5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgIGVsZW0uc3R5bGUubGVmdCA9IDA7XG4gICAgICBlbGVtLnN0eWxlLnJpZ2h0ID0gMDtcbiAgICB9XG4gICAgaWYgKHZlcnRpY2FsKSB7XG4gICAgICBlbGVtLnN0eWxlLnRvcCA9IDA7XG4gICAgICBlbGVtLnN0eWxlLmJvdHRvbSA9IDA7XG4gICAgfVxuICB9LFxuICBmYWtlRXZlbnQ6IGZ1bmN0aW9uIGZha2VFdmVudChlbGVtLCBldmVudFR5cGUsIHBhcnMsIGF1eCkge1xuICAgIHZhciBwYXJhbXMgPSBwYXJzIHx8IHt9O1xuICAgIHZhciBjbGFzc05hbWUgPSBFVkVOVF9NQVBfSU5WW2V2ZW50VHlwZV07XG4gICAgaWYgKCFjbGFzc05hbWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXZlbnQgdHlwZSAnICsgZXZlbnRUeXBlICsgJyBub3Qgc3VwcG9ydGVkLicpO1xuICAgIH1cbiAgICB2YXIgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoY2xhc3NOYW1lKTtcbiAgICBzd2l0Y2ggKGNsYXNzTmFtZSkge1xuICAgICAgY2FzZSAnTW91c2VFdmVudHMnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGNsaWVudFggPSBwYXJhbXMueCB8fCBwYXJhbXMuY2xpZW50WCB8fCAwO1xuICAgICAgICAgIHZhciBjbGllbnRZID0gcGFyYW1zLnkgfHwgcGFyYW1zLmNsaWVudFkgfHwgMDtcbiAgICAgICAgICBldnQuaW5pdE1vdXNlRXZlbnQoZXZlbnRUeXBlLCBwYXJhbXMuYnViYmxlcyB8fCBmYWxzZSwgcGFyYW1zLmNhbmNlbGFibGUgfHwgdHJ1ZSwgd2luZG93LCBwYXJhbXMuY2xpY2tDb3VudCB8fCAxLCAwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZLFxuICAgICAgICAgIGZhbHNlLCBmYWxzZSwgZmFsc2UsIGZhbHNlLCAwLCBudWxsKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgY2FzZSAnS2V5Ym9hcmRFdmVudHMnOlxuICAgICAgICB7XG4gICAgICAgICAgdmFyIGluaXQgPSBldnQuaW5pdEtleWJvYXJkRXZlbnQgfHwgZXZ0LmluaXRLZXlFdmVudDtcbiAgICAgICAgICBDb21tb24uZGVmYXVsdHMocGFyYW1zLCB7XG4gICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlLFxuICAgICAgICAgICAgY3RybEtleTogZmFsc2UsXG4gICAgICAgICAgICBhbHRLZXk6IGZhbHNlLFxuICAgICAgICAgICAgc2hpZnRLZXk6IGZhbHNlLFxuICAgICAgICAgICAgbWV0YUtleTogZmFsc2UsXG4gICAgICAgICAgICBrZXlDb2RlOiB1bmRlZmluZWQsXG4gICAgICAgICAgICBjaGFyQ29kZTogdW5kZWZpbmVkXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgaW5pdChldmVudFR5cGUsIHBhcmFtcy5idWJibGVzIHx8IGZhbHNlLCBwYXJhbXMuY2FuY2VsYWJsZSwgd2luZG93LCBwYXJhbXMuY3RybEtleSwgcGFyYW1zLmFsdEtleSwgcGFyYW1zLnNoaWZ0S2V5LCBwYXJhbXMubWV0YUtleSwgcGFyYW1zLmtleUNvZGUsIHBhcmFtcy5jaGFyQ29kZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHtcbiAgICAgICAgICBldnQuaW5pdEV2ZW50KGV2ZW50VHlwZSwgcGFyYW1zLmJ1YmJsZXMgfHwgZmFsc2UsIHBhcmFtcy5jYW5jZWxhYmxlIHx8IHRydWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIENvbW1vbi5kZWZhdWx0cyhldnQsIGF1eCk7XG4gICAgZWxlbS5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gIH0sXG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQoZWxlbSwgZXZlbnQsIGZ1bmMsIG5ld0Jvb2wpIHtcbiAgICB2YXIgYm9vbCA9IG5ld0Jvb2wgfHwgZmFsc2U7XG4gICAgaWYgKGVsZW0uYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZWxlbS5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jLCBib29sKTtcbiAgICB9IGVsc2UgaWYgKGVsZW0uYXR0YWNoRXZlbnQpIHtcbiAgICAgIGVsZW0uYXR0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmdW5jKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbiAgfSxcbiAgdW5iaW5kOiBmdW5jdGlvbiB1bmJpbmQoZWxlbSwgZXZlbnQsIGZ1bmMsIG5ld0Jvb2wpIHtcbiAgICB2YXIgYm9vbCA9IG5ld0Jvb2wgfHwgZmFsc2U7XG4gICAgaWYgKGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBmdW5jLCBib29sKTtcbiAgICB9IGVsc2UgaWYgKGVsZW0uZGV0YWNoRXZlbnQpIHtcbiAgICAgIGVsZW0uZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBmdW5jKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbiAgfSxcbiAgYWRkQ2xhc3M6IGZ1bmN0aW9uIGFkZENsYXNzKGVsZW0sIGNsYXNzTmFtZSkge1xuICAgIGlmIChlbGVtLmNsYXNzTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzTmFtZTtcbiAgICB9IGVsc2UgaWYgKGVsZW0uY2xhc3NOYW1lICE9PSBjbGFzc05hbWUpIHtcbiAgICAgIHZhciBjbGFzc2VzID0gZWxlbS5jbGFzc05hbWUuc3BsaXQoLyArLyk7XG4gICAgICBpZiAoY2xhc3Nlcy5pbmRleE9mKGNsYXNzTmFtZSkgPT09IC0xKSB7XG4gICAgICAgIGNsYXNzZXMucHVzaChjbGFzc05hbWUpO1xuICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpLnJlcGxhY2UoL15cXHMrLywgJycpLnJlcGxhY2UoL1xccyskLywgJycpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZG9tO1xuICB9LFxuICByZW1vdmVDbGFzczogZnVuY3Rpb24gcmVtb3ZlQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgaWYgKGNsYXNzTmFtZSkge1xuICAgICAgaWYgKGVsZW0uY2xhc3NOYW1lID09PSBjbGFzc05hbWUpIHtcbiAgICAgICAgZWxlbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgY2xhc3NlcyA9IGVsZW0uY2xhc3NOYW1lLnNwbGl0KC8gKy8pO1xuICAgICAgICB2YXIgaW5kZXggPSBjbGFzc2VzLmluZGV4T2YoY2xhc3NOYW1lKTtcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICAgIGNsYXNzZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICBlbGVtLmNsYXNzTmFtZSA9IGNsYXNzZXMuam9pbignICcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW0uY2xhc3NOYW1lID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xuICB9LFxuICBoYXNDbGFzczogZnVuY3Rpb24gaGFzQ2xhc3MoZWxlbSwgY2xhc3NOYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoJyg/Ol58XFxcXHMrKScgKyBjbGFzc05hbWUgKyAnKD86XFxcXHMrfCQpJykudGVzdChlbGVtLmNsYXNzTmFtZSkgfHwgZmFsc2U7XG4gIH0sXG4gIGdldFdpZHRoOiBmdW5jdGlvbiBnZXRXaWR0aChlbGVtKSB7XG4gICAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtKTtcbiAgICByZXR1cm4gY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsnYm9yZGVyLWxlZnQtd2lkdGgnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydib3JkZXItcmlnaHQtd2lkdGgnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydwYWRkaW5nLWxlZnQnXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydwYWRkaW5nLXJpZ2h0J10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZS53aWR0aCk7XG4gIH0sXG4gIGdldEhlaWdodDogZnVuY3Rpb24gZ2V0SGVpZ2h0KGVsZW0pIHtcbiAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW0pO1xuICAgIHJldHVybiBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlWydib3JkZXItdG9wLXdpZHRoJ10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsnYm9yZGVyLWJvdHRvbS13aWR0aCddKSArIGNzc1ZhbHVlVG9QaXhlbHMoc3R5bGVbJ3BhZGRpbmctdG9wJ10pICsgY3NzVmFsdWVUb1BpeGVscyhzdHlsZVsncGFkZGluZy1ib3R0b20nXSkgKyBjc3NWYWx1ZVRvUGl4ZWxzKHN0eWxlLmhlaWdodCk7XG4gIH0sXG4gIGdldE9mZnNldDogZnVuY3Rpb24gZ2V0T2Zmc2V0KGVsKSB7XG4gICAgdmFyIGVsZW0gPSBlbDtcbiAgICB2YXIgb2Zmc2V0ID0geyBsZWZ0OiAwLCB0b3A6IDAgfTtcbiAgICBpZiAoZWxlbS5vZmZzZXRQYXJlbnQpIHtcbiAgICAgIGRvIHtcbiAgICAgICAgb2Zmc2V0LmxlZnQgKz0gZWxlbS5vZmZzZXRMZWZ0O1xuICAgICAgICBvZmZzZXQudG9wICs9IGVsZW0ub2Zmc2V0VG9wO1xuICAgICAgICBlbGVtID0gZWxlbS5vZmZzZXRQYXJlbnQ7XG4gICAgICB9IHdoaWxlIChlbGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfSxcbiAgaXNBY3RpdmU6IGZ1bmN0aW9uIGlzQWN0aXZlKGVsZW0pIHtcbiAgICByZXR1cm4gZWxlbSA9PT0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJiAoZWxlbS50eXBlIHx8IGVsZW0uaHJlZik7XG4gIH1cbn07XG5cbnZhciBCb29sZWFuQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhCb29sZWFuQ29udHJvbGxlciwgX0NvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBCb29sZWFuQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgQm9vbGVhbkNvbnRyb2xsZXIpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChCb29sZWFuQ29udHJvbGxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKEJvb2xlYW5Db250cm9sbGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5KSk7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIF90aGlzMi5fX3ByZXYgPSBfdGhpczIuZ2V0VmFsdWUoKTtcbiAgICBfdGhpczIuX19jaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgX3RoaXMyLl9fY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgZnVuY3Rpb24gb25DaGFuZ2UoKSB7XG4gICAgICBfdGhpcy5zZXRWYWx1ZSghX3RoaXMuX19wcmV2KTtcbiAgICB9XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fY2hlY2tib3gsICdjaGFuZ2UnLCBvbkNoYW5nZSwgZmFsc2UpO1xuICAgIF90aGlzMi5kb21FbGVtZW50LmFwcGVuZENoaWxkKF90aGlzMi5fX2NoZWNrYm94KTtcbiAgICBfdGhpczIudXBkYXRlRGlzcGxheSgpO1xuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoQm9vbGVhbkNvbnRyb2xsZXIsIFt7XG4gICAga2V5OiAnc2V0VmFsdWUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZXRWYWx1ZSh2KSB7XG4gICAgICB2YXIgdG9SZXR1cm4gPSBnZXQoQm9vbGVhbkNvbnRyb2xsZXIucHJvdG90eXBlLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoQm9vbGVhbkNvbnRyb2xsZXIucHJvdG90eXBlKSwgJ3NldFZhbHVlJywgdGhpcykuY2FsbCh0aGlzLCB2KTtcbiAgICAgIGlmICh0aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX19wcmV2ID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgcmV0dXJuIHRvUmV0dXJuO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3VwZGF0ZURpc3BsYXknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB1cGRhdGVEaXNwbGF5KCkge1xuICAgICAgaWYgKHRoaXMuZ2V0VmFsdWUoKSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9fY2hlY2tib3guc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJ2NoZWNrZWQnKTtcbiAgICAgICAgdGhpcy5fX2NoZWNrYm94LmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9fcHJldiA9IHRydWU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9fY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9fcHJldiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGdldChCb29sZWFuQ29udHJvbGxlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihCb29sZWFuQ29udHJvbGxlci5wcm90b3R5cGUpLCAndXBkYXRlRGlzcGxheScsIHRoaXMpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBCb29sZWFuQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG5cbnZhciBPcHRpb25Db250cm9sbGVyID0gZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIGluaGVyaXRzKE9wdGlvbkNvbnRyb2xsZXIsIF9Db250cm9sbGVyKTtcbiAgZnVuY3Rpb24gT3B0aW9uQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5LCBvcHRzKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgT3B0aW9uQ29udHJvbGxlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKE9wdGlvbkNvbnRyb2xsZXIuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihPcHRpb25Db250cm9sbGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5KSk7XG4gICAgdmFyIG9wdGlvbnMgPSBvcHRzO1xuICAgIHZhciBfdGhpcyA9IF90aGlzMjtcbiAgICBfdGhpczIuX19zZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICBpZiAoQ29tbW9uLmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgIHZhciBtYXAgPSB7fTtcbiAgICAgIENvbW1vbi5lYWNoKG9wdGlvbnMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgIG1hcFtlbGVtZW50XSA9IGVsZW1lbnQ7XG4gICAgICB9KTtcbiAgICAgIG9wdGlvbnMgPSBtYXA7XG4gICAgfVxuICAgIENvbW1vbi5lYWNoKG9wdGlvbnMsIGZ1bmN0aW9uICh2YWx1ZSwga2V5KSB7XG4gICAgICB2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICBvcHQuaW5uZXJIVE1MID0ga2V5O1xuICAgICAgb3B0LnNldEF0dHJpYnV0ZSgndmFsdWUnLCB2YWx1ZSk7XG4gICAgICBfdGhpcy5fX3NlbGVjdC5hcHBlbmRDaGlsZChvcHQpO1xuICAgIH0pO1xuICAgIF90aGlzMi51cGRhdGVEaXNwbGF5KCk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fc2VsZWN0LCAnY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGRlc2lyZWRWYWx1ZSA9IHRoaXMub3B0aW9uc1t0aGlzLnNlbGVjdGVkSW5kZXhdLnZhbHVlO1xuICAgICAgX3RoaXMuc2V0VmFsdWUoZGVzaXJlZFZhbHVlKTtcbiAgICB9KTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19zZWxlY3QpO1xuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoT3B0aW9uQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdzZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHYpIHtcbiAgICAgIHZhciB0b1JldHVybiA9IGdldChPcHRpb25Db250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE9wdGlvbkNvbnRyb2xsZXIucHJvdG90eXBlKSwgJ3NldFZhbHVlJywgdGhpcykuY2FsbCh0aGlzLCB2KTtcbiAgICAgIGlmICh0aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwodGhpcywgdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b1JldHVybjtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd1cGRhdGVEaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgIGlmIChkb20uaXNBY3RpdmUodGhpcy5fX3NlbGVjdCkpIHJldHVybiB0aGlzO1xuICAgICAgdGhpcy5fX3NlbGVjdC52YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcbiAgICAgIHJldHVybiBnZXQoT3B0aW9uQ29udHJvbGxlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihPcHRpb25Db250cm9sbGVyLnByb3RvdHlwZSksICd1cGRhdGVEaXNwbGF5JywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE9wdGlvbkNvbnRyb2xsZXI7XG59KENvbnRyb2xsZXIpO1xuXG52YXIgU3RyaW5nQ29udHJvbGxlciA9IGZ1bmN0aW9uIChfQ29udHJvbGxlcikge1xuICBpbmhlcml0cyhTdHJpbmdDb250cm9sbGVyLCBfQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIFN0cmluZ0NvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFN0cmluZ0NvbnRyb2xsZXIpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChTdHJpbmdDb250cm9sbGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoU3RyaW5nQ29udHJvbGxlcikpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSkpO1xuICAgIHZhciBfdGhpcyA9IF90aGlzMjtcbiAgICBmdW5jdGlvbiBvbkNoYW5nZSgpIHtcbiAgICAgIF90aGlzLnNldFZhbHVlKF90aGlzLl9faW5wdXQudmFsdWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICBpZiAoX3RoaXMuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBfdGhpcy5fX29uRmluaXNoQ2hhbmdlLmNhbGwoX3RoaXMsIF90aGlzLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBfdGhpczIuX19pbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgX3RoaXMyLl9faW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2tleXVwJywgb25DaGFuZ2UpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAnY2hhbmdlJywgb25DaGFuZ2UpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2lucHV0LCAnYmx1cicsIG9uQmx1cik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDEzKSB7XG4gICAgICAgIHRoaXMuYmx1cigpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF90aGlzMi51cGRhdGVEaXNwbGF5KCk7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9faW5wdXQpO1xuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoU3RyaW5nQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICd1cGRhdGVEaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgIGlmICghZG9tLmlzQWN0aXZlKHRoaXMuX19pbnB1dCkpIHtcbiAgICAgICAgdGhpcy5fX2lucHV0LnZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGdldChTdHJpbmdDb250cm9sbGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKFN0cmluZ0NvbnRyb2xsZXIucHJvdG90eXBlKSwgJ3VwZGF0ZURpc3BsYXknLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU3RyaW5nQ29udHJvbGxlcjtcbn0oQ29udHJvbGxlcik7XG5cbmZ1bmN0aW9uIG51bURlY2ltYWxzKHgpIHtcbiAgdmFyIF94ID0geC50b1N0cmluZygpO1xuICBpZiAoX3guaW5kZXhPZignLicpID4gLTEpIHtcbiAgICByZXR1cm4gX3gubGVuZ3RoIC0gX3guaW5kZXhPZignLicpIC0gMTtcbiAgfVxuICByZXR1cm4gMDtcbn1cbnZhciBOdW1iZXJDb250cm9sbGVyID0gZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIGluaGVyaXRzKE51bWJlckNvbnRyb2xsZXIsIF9Db250cm9sbGVyKTtcbiAgZnVuY3Rpb24gTnVtYmVyQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBOdW1iZXJDb250cm9sbGVyKTtcbiAgICB2YXIgX3RoaXMgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChOdW1iZXJDb250cm9sbGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVtYmVyQ29udHJvbGxlcikpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSkpO1xuICAgIHZhciBfcGFyYW1zID0gcGFyYW1zIHx8IHt9O1xuICAgIF90aGlzLl9fbWluID0gX3BhcmFtcy5taW47XG4gICAgX3RoaXMuX19tYXggPSBfcGFyYW1zLm1heDtcbiAgICBfdGhpcy5fX3N0ZXAgPSBfcGFyYW1zLnN0ZXA7XG4gICAgaWYgKENvbW1vbi5pc1VuZGVmaW5lZChfdGhpcy5fX3N0ZXApKSB7XG4gICAgICBpZiAoX3RoaXMuaW5pdGlhbFZhbHVlID09PSAwKSB7XG4gICAgICAgIF90aGlzLl9faW1wbGllZFN0ZXAgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgX3RoaXMuX19pbXBsaWVkU3RlcCA9IE1hdGgucG93KDEwLCBNYXRoLmZsb29yKE1hdGgubG9nKE1hdGguYWJzKF90aGlzLmluaXRpYWxWYWx1ZSkpIC8gTWF0aC5MTjEwKSkgLyAxMDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgX3RoaXMuX19pbXBsaWVkU3RlcCA9IF90aGlzLl9fc3RlcDtcbiAgICB9XG4gICAgX3RoaXMuX19wcmVjaXNpb24gPSBudW1EZWNpbWFscyhfdGhpcy5fX2ltcGxpZWRTdGVwKTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoTnVtYmVyQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdzZXRWYWx1ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNldFZhbHVlKHYpIHtcbiAgICAgIHZhciBfdiA9IHY7XG4gICAgICBpZiAodGhpcy5fX21pbiAhPT0gdW5kZWZpbmVkICYmIF92IDwgdGhpcy5fX21pbikge1xuICAgICAgICBfdiA9IHRoaXMuX19taW47XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX19tYXggIT09IHVuZGVmaW5lZCAmJiBfdiA+IHRoaXMuX19tYXgpIHtcbiAgICAgICAgX3YgPSB0aGlzLl9fbWF4O1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuX19zdGVwICE9PSB1bmRlZmluZWQgJiYgX3YgJSB0aGlzLl9fc3RlcCAhPT0gMCkge1xuICAgICAgICBfdiA9IE1hdGgucm91bmQoX3YgLyB0aGlzLl9fc3RlcCkgKiB0aGlzLl9fc3RlcDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBnZXQoTnVtYmVyQ29udHJvbGxlci5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdW1iZXJDb250cm9sbGVyLnByb3RvdHlwZSksICdzZXRWYWx1ZScsIHRoaXMpLmNhbGwodGhpcywgX3YpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21pbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1pbihtaW5WYWx1ZSkge1xuICAgICAgdGhpcy5fX21pbiA9IG1pblZhbHVlO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbWF4JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWF4KG1heFZhbHVlKSB7XG4gICAgICB0aGlzLl9fbWF4ID0gbWF4VmFsdWU7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzdGVwJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc3RlcChzdGVwVmFsdWUpIHtcbiAgICAgIHRoaXMuX19zdGVwID0gc3RlcFZhbHVlO1xuICAgICAgdGhpcy5fX2ltcGxpZWRTdGVwID0gc3RlcFZhbHVlO1xuICAgICAgdGhpcy5fX3ByZWNpc2lvbiA9IG51bURlY2ltYWxzKHN0ZXBWYWx1ZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE51bWJlckNvbnRyb2xsZXI7XG59KENvbnRyb2xsZXIpO1xuXG5mdW5jdGlvbiByb3VuZFRvRGVjaW1hbCh2YWx1ZSwgZGVjaW1hbHMpIHtcbiAgdmFyIHRlblRvID0gTWF0aC5wb3coMTAsIGRlY2ltYWxzKTtcbiAgcmV0dXJuIE1hdGgucm91bmQodmFsdWUgKiB0ZW5UbykgLyB0ZW5Ubztcbn1cbnZhciBOdW1iZXJDb250cm9sbGVyQm94ID0gZnVuY3Rpb24gKF9OdW1iZXJDb250cm9sbGVyKSB7XG4gIGluaGVyaXRzKE51bWJlckNvbnRyb2xsZXJCb3gsIF9OdW1iZXJDb250cm9sbGVyKTtcbiAgZnVuY3Rpb24gTnVtYmVyQ29udHJvbGxlckJveChvYmplY3QsIHByb3BlcnR5LCBwYXJhbXMpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBOdW1iZXJDb250cm9sbGVyQm94KTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoTnVtYmVyQ29udHJvbGxlckJveC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlckNvbnRyb2xsZXJCb3gpKS5jYWxsKHRoaXMsIG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykpO1xuICAgIF90aGlzMi5fX3RydW5jYXRpb25TdXNwZW5kZWQgPSBmYWxzZTtcbiAgICB2YXIgX3RoaXMgPSBfdGhpczI7XG4gICAgdmFyIHByZXZZID0gdm9pZCAwO1xuICAgIGZ1bmN0aW9uIG9uQ2hhbmdlKCkge1xuICAgICAgdmFyIGF0dGVtcHRlZCA9IHBhcnNlRmxvYXQoX3RoaXMuX19pbnB1dC52YWx1ZSk7XG4gICAgICBpZiAoIUNvbW1vbi5pc05hTihhdHRlbXB0ZWQpKSB7XG4gICAgICAgIF90aGlzLnNldFZhbHVlKGF0dGVtcHRlZCk7XG4gICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uRmluaXNoKCkge1xuICAgICAgaWYgKF90aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKF90aGlzLCBfdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb25CbHVyKCkge1xuICAgICAgb25GaW5pc2goKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3VzZURyYWcoZSkge1xuICAgICAgdmFyIGRpZmYgPSBwcmV2WSAtIGUuY2xpZW50WTtcbiAgICAgIF90aGlzLnNldFZhbHVlKF90aGlzLmdldFZhbHVlKCkgKyBkaWZmICogX3RoaXMuX19pbXBsaWVkU3RlcCk7XG4gICAgICBwcmV2WSA9IGUuY2xpZW50WTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBvbk1vdXNlRHJhZyk7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgb25GaW5pc2goKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3VzZURvd24oZSkge1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgb25Nb3VzZURyYWcpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2V1cCcsIG9uTW91c2VVcCk7XG4gICAgICBwcmV2WSA9IGUuY2xpZW50WTtcbiAgICB9XG4gICAgX3RoaXMyLl9faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIF90aGlzMi5fX2lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdjaGFuZ2UnLCBvbkNoYW5nZSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdibHVyJywgb25CbHVyKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ21vdXNlZG93bicsIG9uTW91c2VEb3duKTtcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgX3RoaXMuX190cnVuY2F0aW9uU3VzcGVuZGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICAgIF90aGlzLl9fdHJ1bmNhdGlvblN1c3BlbmRlZCA9IGZhbHNlO1xuICAgICAgICBvbkZpbmlzaCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIF90aGlzMi51cGRhdGVEaXNwbGF5KCk7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9faW5wdXQpO1xuICAgIHJldHVybiBfdGhpczI7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoTnVtYmVyQ29udHJvbGxlckJveCwgW3tcbiAgICBrZXk6ICd1cGRhdGVEaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgIHRoaXMuX19pbnB1dC52YWx1ZSA9IHRoaXMuX190cnVuY2F0aW9uU3VzcGVuZGVkID8gdGhpcy5nZXRWYWx1ZSgpIDogcm91bmRUb0RlY2ltYWwodGhpcy5nZXRWYWx1ZSgpLCB0aGlzLl9fcHJlY2lzaW9uKTtcbiAgICAgIHJldHVybiBnZXQoTnVtYmVyQ29udHJvbGxlckJveC5wcm90b3R5cGUuX19wcm90b19fIHx8IE9iamVjdC5nZXRQcm90b3R5cGVPZihOdW1iZXJDb250cm9sbGVyQm94LnByb3RvdHlwZSksICd1cGRhdGVEaXNwbGF5JywgdGhpcykuY2FsbCh0aGlzKTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIE51bWJlckNvbnRyb2xsZXJCb3g7XG59KE51bWJlckNvbnRyb2xsZXIpO1xuXG5mdW5jdGlvbiBtYXAodiwgaTEsIGkyLCBvMSwgbzIpIHtcbiAgcmV0dXJuIG8xICsgKG8yIC0gbzEpICogKCh2IC0gaTEpIC8gKGkyIC0gaTEpKTtcbn1cbnZhciBOdW1iZXJDb250cm9sbGVyU2xpZGVyID0gZnVuY3Rpb24gKF9OdW1iZXJDb250cm9sbGVyKSB7XG4gIGluaGVyaXRzKE51bWJlckNvbnRyb2xsZXJTbGlkZXIsIF9OdW1iZXJDb250cm9sbGVyKTtcbiAgZnVuY3Rpb24gTnVtYmVyQ29udHJvbGxlclNsaWRlcihvYmplY3QsIHByb3BlcnR5LCBtaW4sIG1heCwgc3RlcCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIE51bWJlckNvbnRyb2xsZXJTbGlkZXIpO1xuICAgIHZhciBfdGhpczIgPSBwb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsIChOdW1iZXJDb250cm9sbGVyU2xpZGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTnVtYmVyQ29udHJvbGxlclNsaWRlcikpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSwgeyBtaW46IG1pbiwgbWF4OiBtYXgsIHN0ZXA6IHN0ZXAgfSkpO1xuICAgIHZhciBfdGhpcyA9IF90aGlzMjtcbiAgICBfdGhpczIuX19iYWNrZ3JvdW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMyLl9fZm9yZWdyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2JhY2tncm91bmQsICdtb3VzZWRvd24nLCBvbk1vdXNlRG93bik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9fYmFja2dyb3VuZCwgJ3RvdWNoc3RhcnQnLCBvblRvdWNoU3RhcnQpO1xuICAgIGRvbS5hZGRDbGFzcyhfdGhpczIuX19iYWNrZ3JvdW5kLCAnc2xpZGVyJyk7XG4gICAgZG9tLmFkZENsYXNzKF90aGlzMi5fX2ZvcmVncm91bmQsICdzbGlkZXItZmcnKTtcbiAgICBmdW5jdGlvbiBvbk1vdXNlRG93bihlKSB7XG4gICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIG9uTW91c2VEcmFnKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgb25Nb3VzZURyYWcoZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uTW91c2VEcmFnKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHZhciBiZ1JlY3QgPSBfdGhpcy5fX2JhY2tncm91bmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShtYXAoZS5jbGllbnRYLCBiZ1JlY3QubGVmdCwgYmdSZWN0LnJpZ2h0LCBfdGhpcy5fX21pbiwgX3RoaXMuX19tYXgpKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBvbk1vdXNlRHJhZyk7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgICAgaWYgKF90aGlzLl9fb25GaW5pc2hDaGFuZ2UpIHtcbiAgICAgICAgX3RoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKF90aGlzLCBfdGhpcy5nZXRWYWx1ZSgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGUpIHtcbiAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ3RvdWNoZW5kJywgb25Ub3VjaEVuZCk7XG4gICAgICBvblRvdWNoTW92ZShlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb25Ub3VjaE1vdmUoZSkge1xuICAgICAgdmFyIGNsaWVudFggPSBlLnRvdWNoZXNbMF0uY2xpZW50WDtcbiAgICAgIHZhciBiZ1JlY3QgPSBfdGhpcy5fX2JhY2tncm91bmQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShtYXAoY2xpZW50WCwgYmdSZWN0LmxlZnQsIGJnUmVjdC5yaWdodCwgX3RoaXMuX19taW4sIF90aGlzLl9fbWF4KSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG9uVG91Y2hFbmQoKSB7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3RvdWNobW92ZScsIG9uVG91Y2hNb3ZlKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBvblRvdWNoRW5kKTtcbiAgICAgIGlmIChfdGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbChfdGhpcywgX3RoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfVxuICAgIF90aGlzMi51cGRhdGVEaXNwbGF5KCk7XG4gICAgX3RoaXMyLl9fYmFja2dyb3VuZC5hcHBlbmRDaGlsZChfdGhpczIuX19mb3JlZ3JvdW5kKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19iYWNrZ3JvdW5kKTtcbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG4gIGNyZWF0ZUNsYXNzKE51bWJlckNvbnRyb2xsZXJTbGlkZXIsIFt7XG4gICAga2V5OiAndXBkYXRlRGlzcGxheScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgICB2YXIgcGN0ID0gKHRoaXMuZ2V0VmFsdWUoKSAtIHRoaXMuX19taW4pIC8gKHRoaXMuX19tYXggLSB0aGlzLl9fbWluKTtcbiAgICAgIHRoaXMuX19mb3JlZ3JvdW5kLnN0eWxlLndpZHRoID0gcGN0ICogMTAwICsgJyUnO1xuICAgICAgcmV0dXJuIGdldChOdW1iZXJDb250cm9sbGVyU2xpZGVyLnByb3RvdHlwZS5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKE51bWJlckNvbnRyb2xsZXJTbGlkZXIucHJvdG90eXBlKSwgJ3VwZGF0ZURpc3BsYXknLCB0aGlzKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gTnVtYmVyQ29udHJvbGxlclNsaWRlcjtcbn0oTnVtYmVyQ29udHJvbGxlcik7XG5cbnZhciBGdW5jdGlvbkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoX0NvbnRyb2xsZXIpIHtcbiAgaW5oZXJpdHMoRnVuY3Rpb25Db250cm9sbGVyLCBfQ29udHJvbGxlcik7XG4gIGZ1bmN0aW9uIEZ1bmN0aW9uQ29udHJvbGxlcihvYmplY3QsIHByb3BlcnR5LCB0ZXh0KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgRnVuY3Rpb25Db250cm9sbGVyKTtcbiAgICB2YXIgX3RoaXMyID0gcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCAoRnVuY3Rpb25Db250cm9sbGVyLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YoRnVuY3Rpb25Db250cm9sbGVyKSkuY2FsbCh0aGlzLCBvYmplY3QsIHByb3BlcnR5KSk7XG4gICAgdmFyIF90aGlzID0gX3RoaXMyO1xuICAgIF90aGlzMi5fX2J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX2J1dHRvbi5pbm5lckhUTUwgPSB0ZXh0ID09PSB1bmRlZmluZWQgPyAnRmlyZScgOiB0ZXh0O1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX2J1dHRvbiwgJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIF90aGlzLmZpcmUoKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbiAgICBkb20uYWRkQ2xhc3MoX3RoaXMyLl9fYnV0dG9uLCAnYnV0dG9uJyk7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fYnV0dG9uKTtcbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG4gIGNyZWF0ZUNsYXNzKEZ1bmN0aW9uQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICdmaXJlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZmlyZSgpIHtcbiAgICAgIGlmICh0aGlzLl9fb25DaGFuZ2UpIHtcbiAgICAgICAgdGhpcy5fX29uQ2hhbmdlLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgICB0aGlzLmdldFZhbHVlKCkuY2FsbCh0aGlzLm9iamVjdCk7XG4gICAgICBpZiAodGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIHRoaXMuX19vbkZpbmlzaENoYW5nZS5jYWxsKHRoaXMsIHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBGdW5jdGlvbkNvbnRyb2xsZXI7XG59KENvbnRyb2xsZXIpO1xuXG52YXIgQ29sb3JDb250cm9sbGVyID0gZnVuY3Rpb24gKF9Db250cm9sbGVyKSB7XG4gIGluaGVyaXRzKENvbG9yQ29udHJvbGxlciwgX0NvbnRyb2xsZXIpO1xuICBmdW5jdGlvbiBDb2xvckNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENvbG9yQ29udHJvbGxlcik7XG4gICAgdmFyIF90aGlzMiA9IHBvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgKENvbG9yQ29udHJvbGxlci5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKENvbG9yQ29udHJvbGxlcikpLmNhbGwodGhpcywgb2JqZWN0LCBwcm9wZXJ0eSkpO1xuICAgIF90aGlzMi5fX2NvbG9yID0gbmV3IENvbG9yKF90aGlzMi5nZXRWYWx1ZSgpKTtcbiAgICBfdGhpczIuX190ZW1wID0gbmV3IENvbG9yKDApO1xuICAgIHZhciBfdGhpcyA9IF90aGlzMjtcbiAgICBfdGhpczIuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRvbS5tYWtlU2VsZWN0YWJsZShfdGhpczIuZG9tRWxlbWVudCwgZmFsc2UpO1xuICAgIF90aGlzMi5fX3NlbGVjdG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMyLl9fc2VsZWN0b3IuY2xhc3NOYW1lID0gJ3NlbGVjdG9yJztcbiAgICBfdGhpczIuX19zYXR1cmF0aW9uX2ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMyLl9fc2F0dXJhdGlvbl9maWVsZC5jbGFzc05hbWUgPSAnc2F0dXJhdGlvbi1maWVsZCc7XG4gICAgX3RoaXMyLl9fZmllbGRfa25vYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIF90aGlzMi5fX2ZpZWxkX2tub2IuY2xhc3NOYW1lID0gJ2ZpZWxkLWtub2InO1xuICAgIF90aGlzMi5fX2ZpZWxkX2tub2JfYm9yZGVyID0gJzJweCBzb2xpZCAnO1xuICAgIF90aGlzMi5fX2h1ZV9rbm9iID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgX3RoaXMyLl9faHVlX2tub2IuY2xhc3NOYW1lID0gJ2h1ZS1rbm9iJztcbiAgICBfdGhpczIuX19odWVfZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBfdGhpczIuX19odWVfZmllbGQuY2xhc3NOYW1lID0gJ2h1ZS1maWVsZCc7XG4gICAgX3RoaXMyLl9faW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIF90aGlzMi5fX2lucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgX3RoaXMyLl9faW5wdXRfdGV4dFNoYWRvdyA9ICcwIDFweCAxcHggJztcbiAgICBkb20uYmluZChfdGhpczIuX19pbnB1dCwgJ2tleWRvd24nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMTMpIHtcbiAgICAgICAgb25CbHVyLmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faW5wdXQsICdibHVyJywgb25CbHVyKTtcbiAgICBkb20uYmluZChfdGhpczIuX19zZWxlY3RvciwgJ21vdXNlZG93bicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5hZGRDbGFzcyh0aGlzLCAnZHJhZycpLmJpbmQod2luZG93LCAnbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKF90aGlzLl9fc2VsZWN0b3IsICdkcmFnJyk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkb20uYmluZChfdGhpczIuX19zZWxlY3RvciwgJ3RvdWNoc3RhcnQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkb20uYWRkQ2xhc3ModGhpcywgJ2RyYWcnKS5iaW5kKHdpbmRvdywgJ3RvdWNoZW5kJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBkb20ucmVtb3ZlQ2xhc3MoX3RoaXMuX19zZWxlY3RvciwgJ2RyYWcnKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZUZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgQ29tbW9uLmV4dGVuZChfdGhpczIuX19zZWxlY3Rvci5zdHlsZSwge1xuICAgICAgd2lkdGg6ICcxMjJweCcsXG4gICAgICBoZWlnaHQ6ICcxMDJweCcsXG4gICAgICBwYWRkaW5nOiAnM3B4JyxcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMjInLFxuICAgICAgYm94U2hhZG93OiAnMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjMpJ1xuICAgIH0pO1xuICAgIENvbW1vbi5leHRlbmQoX3RoaXMyLl9fZmllbGRfa25vYi5zdHlsZSwge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogJzEycHgnLFxuICAgICAgaGVpZ2h0OiAnMTJweCcsXG4gICAgICBib3JkZXI6IF90aGlzMi5fX2ZpZWxkX2tub2JfYm9yZGVyICsgKF90aGlzMi5fX2NvbG9yLnYgPCAwLjUgPyAnI2ZmZicgOiAnIzAwMCcpLFxuICAgICAgYm94U2hhZG93OiAnMHB4IDFweCAzcHggcmdiYSgwLDAsMCwwLjUpJyxcbiAgICAgIGJvcmRlclJhZGl1czogJzEycHgnLFxuICAgICAgekluZGV4OiAxXG4gICAgfSk7XG4gICAgQ29tbW9uLmV4dGVuZChfdGhpczIuX19odWVfa25vYi5zdHlsZSwge1xuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB3aWR0aDogJzE1cHgnLFxuICAgICAgaGVpZ2h0OiAnMnB4JyxcbiAgICAgIGJvcmRlclJpZ2h0OiAnNHB4IHNvbGlkICNmZmYnLFxuICAgICAgekluZGV4OiAxXG4gICAgfSk7XG4gICAgQ29tbW9uLmV4dGVuZChfdGhpczIuX19zYXR1cmF0aW9uX2ZpZWxkLnN0eWxlLCB7XG4gICAgICB3aWR0aDogJzEwMHB4JyxcbiAgICAgIGhlaWdodDogJzEwMHB4JyxcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjNTU1JyxcbiAgICAgIG1hcmdpblJpZ2h0OiAnM3B4JyxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgY3Vyc29yOiAncG9pbnRlcidcbiAgICB9KTtcbiAgICBDb21tb24uZXh0ZW5kKHZhbHVlRmllbGQuc3R5bGUsIHtcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgICBoZWlnaHQ6ICcxMDAlJyxcbiAgICAgIGJhY2tncm91bmQ6ICdub25lJ1xuICAgIH0pO1xuICAgIGxpbmVhckdyYWRpZW50KHZhbHVlRmllbGQsICd0b3AnLCAncmdiYSgwLDAsMCwwKScsICcjMDAwJyk7XG4gICAgQ29tbW9uLmV4dGVuZChfdGhpczIuX19odWVfZmllbGQuc3R5bGUsIHtcbiAgICAgIHdpZHRoOiAnMTVweCcsXG4gICAgICBoZWlnaHQ6ICcxMDBweCcsXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgIzU1NScsXG4gICAgICBjdXJzb3I6ICducy1yZXNpemUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6ICczcHgnLFxuICAgICAgcmlnaHQ6ICczcHgnXG4gICAgfSk7XG4gICAgaHVlR3JhZGllbnQoX3RoaXMyLl9faHVlX2ZpZWxkKTtcbiAgICBDb21tb24uZXh0ZW5kKF90aGlzMi5fX2lucHV0LnN0eWxlLCB7XG4gICAgICBvdXRsaW5lOiAnbm9uZScsXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxuICAgICAgY29sb3I6ICcjZmZmJyxcbiAgICAgIGJvcmRlcjogMCxcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgIHRleHRTaGFkb3c6IF90aGlzMi5fX2lucHV0X3RleHRTaGFkb3cgKyAncmdiYSgwLDAsMCwwLjcpJ1xuICAgIH0pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQsICdtb3VzZWRvd24nLCBmaWVsZERvd24pO1xuICAgIGRvbS5iaW5kKF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQsICd0b3VjaHN0YXJ0JywgZmllbGREb3duKTtcbiAgICBkb20uYmluZChfdGhpczIuX19maWVsZF9rbm9iLCAnbW91c2Vkb3duJywgZmllbGREb3duKTtcbiAgICBkb20uYmluZChfdGhpczIuX19maWVsZF9rbm9iLCAndG91Y2hzdGFydCcsIGZpZWxkRG93bik7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faHVlX2ZpZWxkLCAnbW91c2Vkb3duJywgZmllbGREb3duSCk7XG4gICAgZG9tLmJpbmQoX3RoaXMyLl9faHVlX2ZpZWxkLCAndG91Y2hzdGFydCcsIGZpZWxkRG93bkgpO1xuICAgIGZ1bmN0aW9uIGZpZWxkRG93bihlKSB7XG4gICAgICBzZXRTVihlKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIHNldFNWKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ3RvdWNobW92ZScsIHNldFNWKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ21vdXNldXAnLCBmaWVsZFVwU1YpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBmaWVsZFVwU1YpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaWVsZERvd25IKGUpIHtcbiAgICAgIHNldEgoZSk7XG4gICAgICBkb20uYmluZCh3aW5kb3csICdtb3VzZW1vdmUnLCBzZXRIKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ3RvdWNobW92ZScsIHNldEgpO1xuICAgICAgZG9tLmJpbmQod2luZG93LCAnbW91c2V1cCcsIGZpZWxkVXBIKTtcbiAgICAgIGRvbS5iaW5kKHdpbmRvdywgJ3RvdWNoZW5kJywgZmllbGRVcEgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmaWVsZFVwU1YoKSB7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIHNldFNWKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAndG91Y2htb3ZlJywgc2V0U1YpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZXVwJywgZmllbGRVcFNWKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBmaWVsZFVwU1YpO1xuICAgICAgb25GaW5pc2goKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZmllbGRVcEgoKSB7XG4gICAgICBkb20udW5iaW5kKHdpbmRvdywgJ21vdXNlbW92ZScsIHNldEgpO1xuICAgICAgZG9tLnVuYmluZCh3aW5kb3csICd0b3VjaG1vdmUnLCBzZXRIKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2V1cCcsIGZpZWxkVXBIKTtcbiAgICAgIGRvbS51bmJpbmQod2luZG93LCAndG91Y2hlbmQnLCBmaWVsZFVwSCk7XG4gICAgICBvbkZpbmlzaCgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBvbkJsdXIoKSB7XG4gICAgICB2YXIgaSA9IGludGVycHJldCh0aGlzLnZhbHVlKTtcbiAgICAgIGlmIChpICE9PSBmYWxzZSkge1xuICAgICAgICBfdGhpcy5fX2NvbG9yLl9fc3RhdGUgPSBpO1xuICAgICAgICBfdGhpcy5zZXRWYWx1ZShfdGhpcy5fX2NvbG9yLnRvT3JpZ2luYWwoKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gX3RoaXMuX19jb2xvci50b1N0cmluZygpO1xuICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBvbkZpbmlzaCgpIHtcbiAgICAgIGlmIChfdGhpcy5fX29uRmluaXNoQ2hhbmdlKSB7XG4gICAgICAgIF90aGlzLl9fb25GaW5pc2hDaGFuZ2UuY2FsbChfdGhpcywgX3RoaXMuX19jb2xvci50b09yaWdpbmFsKCkpO1xuICAgICAgfVxuICAgIH1cbiAgICBfdGhpczIuX19zYXR1cmF0aW9uX2ZpZWxkLmFwcGVuZENoaWxkKHZhbHVlRmllbGQpO1xuICAgIF90aGlzMi5fX3NlbGVjdG9yLmFwcGVuZENoaWxkKF90aGlzMi5fX2ZpZWxkX2tub2IpO1xuICAgIF90aGlzMi5fX3NlbGVjdG9yLmFwcGVuZENoaWxkKF90aGlzMi5fX3NhdHVyYXRpb25fZmllbGQpO1xuICAgIF90aGlzMi5fX3NlbGVjdG9yLmFwcGVuZENoaWxkKF90aGlzMi5fX2h1ZV9maWVsZCk7XG4gICAgX3RoaXMyLl9faHVlX2ZpZWxkLmFwcGVuZENoaWxkKF90aGlzMi5fX2h1ZV9rbm9iKTtcbiAgICBfdGhpczIuZG9tRWxlbWVudC5hcHBlbmRDaGlsZChfdGhpczIuX19pbnB1dCk7XG4gICAgX3RoaXMyLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQoX3RoaXMyLl9fc2VsZWN0b3IpO1xuICAgIF90aGlzMi51cGRhdGVEaXNwbGF5KCk7XG4gICAgZnVuY3Rpb24gc2V0U1YoZSkge1xuICAgICAgaWYgKGUudHlwZS5pbmRleE9mKCd0b3VjaCcpID09PSAtMSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICB2YXIgZmllbGRSZWN0ID0gX3RoaXMuX19zYXR1cmF0aW9uX2ZpZWxkLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgdmFyIF9yZWYgPSBlLnRvdWNoZXMgJiYgZS50b3VjaGVzWzBdIHx8IGUsXG4gICAgICAgICAgY2xpZW50WCA9IF9yZWYuY2xpZW50WCxcbiAgICAgICAgICBjbGllbnRZID0gX3JlZi5jbGllbnRZO1xuICAgICAgdmFyIHMgPSAoY2xpZW50WCAtIGZpZWxkUmVjdC5sZWZ0KSAvIChmaWVsZFJlY3QucmlnaHQgLSBmaWVsZFJlY3QubGVmdCk7XG4gICAgICB2YXIgdiA9IDEgLSAoY2xpZW50WSAtIGZpZWxkUmVjdC50b3ApIC8gKGZpZWxkUmVjdC5ib3R0b20gLSBmaWVsZFJlY3QudG9wKTtcbiAgICAgIGlmICh2ID4gMSkge1xuICAgICAgICB2ID0gMTtcbiAgICAgIH0gZWxzZSBpZiAodiA8IDApIHtcbiAgICAgICAgdiA9IDA7XG4gICAgICB9XG4gICAgICBpZiAocyA+IDEpIHtcbiAgICAgICAgcyA9IDE7XG4gICAgICB9IGVsc2UgaWYgKHMgPCAwKSB7XG4gICAgICAgIHMgPSAwO1xuICAgICAgfVxuICAgICAgX3RoaXMuX19jb2xvci52ID0gdjtcbiAgICAgIF90aGlzLl9fY29sb3IucyA9IHM7XG4gICAgICBfdGhpcy5zZXRWYWx1ZShfdGhpcy5fX2NvbG9yLnRvT3JpZ2luYWwoKSk7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldEgoZSkge1xuICAgICAgaWYgKGUudHlwZS5pbmRleE9mKCd0b3VjaCcpID09PSAtMSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICB2YXIgZmllbGRSZWN0ID0gX3RoaXMuX19odWVfZmllbGQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICB2YXIgX3JlZjIgPSBlLnRvdWNoZXMgJiYgZS50b3VjaGVzWzBdIHx8IGUsXG4gICAgICAgICAgY2xpZW50WSA9IF9yZWYyLmNsaWVudFk7XG4gICAgICB2YXIgaCA9IDEgLSAoY2xpZW50WSAtIGZpZWxkUmVjdC50b3ApIC8gKGZpZWxkUmVjdC5ib3R0b20gLSBmaWVsZFJlY3QudG9wKTtcbiAgICAgIGlmIChoID4gMSkge1xuICAgICAgICBoID0gMTtcbiAgICAgIH0gZWxzZSBpZiAoaCA8IDApIHtcbiAgICAgICAgaCA9IDA7XG4gICAgICB9XG4gICAgICBfdGhpcy5fX2NvbG9yLmggPSBoICogMzYwO1xuICAgICAgX3RoaXMuc2V0VmFsdWUoX3RoaXMuX19jb2xvci50b09yaWdpbmFsKCkpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gX3RoaXMyO1xuICB9XG4gIGNyZWF0ZUNsYXNzKENvbG9yQ29udHJvbGxlciwgW3tcbiAgICBrZXk6ICd1cGRhdGVEaXNwbGF5JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdXBkYXRlRGlzcGxheSgpIHtcbiAgICAgIHZhciBpID0gaW50ZXJwcmV0KHRoaXMuZ2V0VmFsdWUoKSk7XG4gICAgICBpZiAoaSAhPT0gZmFsc2UpIHtcbiAgICAgICAgdmFyIG1pc21hdGNoID0gZmFsc2U7XG4gICAgICAgIENvbW1vbi5lYWNoKENvbG9yLkNPTVBPTkVOVFMsIGZ1bmN0aW9uIChjb21wb25lbnQpIHtcbiAgICAgICAgICBpZiAoIUNvbW1vbi5pc1VuZGVmaW5lZChpW2NvbXBvbmVudF0pICYmICFDb21tb24uaXNVbmRlZmluZWQodGhpcy5fX2NvbG9yLl9fc3RhdGVbY29tcG9uZW50XSkgJiYgaVtjb21wb25lbnRdICE9PSB0aGlzLl9fY29sb3IuX19zdGF0ZVtjb21wb25lbnRdKSB7XG4gICAgICAgICAgICBtaXNtYXRjaCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgaWYgKG1pc21hdGNoKSB7XG4gICAgICAgICAgQ29tbW9uLmV4dGVuZCh0aGlzLl9fY29sb3IuX19zdGF0ZSwgaSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIENvbW1vbi5leHRlbmQodGhpcy5fX3RlbXAuX19zdGF0ZSwgdGhpcy5fX2NvbG9yLl9fc3RhdGUpO1xuICAgICAgdGhpcy5fX3RlbXAuYSA9IDE7XG4gICAgICB2YXIgZmxpcCA9IHRoaXMuX19jb2xvci52IDwgMC41IHx8IHRoaXMuX19jb2xvci5zID4gMC41ID8gMjU1IDogMDtcbiAgICAgIHZhciBfZmxpcCA9IDI1NSAtIGZsaXA7XG4gICAgICBDb21tb24uZXh0ZW5kKHRoaXMuX19maWVsZF9rbm9iLnN0eWxlLCB7XG4gICAgICAgIG1hcmdpbkxlZnQ6IDEwMCAqIHRoaXMuX19jb2xvci5zIC0gNyArICdweCcsXG4gICAgICAgIG1hcmdpblRvcDogMTAwICogKDEgLSB0aGlzLl9fY29sb3IudikgLSA3ICsgJ3B4JyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLl9fdGVtcC50b0hleFN0cmluZygpLFxuICAgICAgICBib3JkZXI6IHRoaXMuX19maWVsZF9rbm9iX2JvcmRlciArICdyZ2IoJyArIGZsaXAgKyAnLCcgKyBmbGlwICsgJywnICsgZmxpcCArICcpJ1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9faHVlX2tub2Iuc3R5bGUubWFyZ2luVG9wID0gKDEgLSB0aGlzLl9fY29sb3IuaCAvIDM2MCkgKiAxMDAgKyAncHgnO1xuICAgICAgdGhpcy5fX3RlbXAucyA9IDE7XG4gICAgICB0aGlzLl9fdGVtcC52ID0gMTtcbiAgICAgIGxpbmVhckdyYWRpZW50KHRoaXMuX19zYXR1cmF0aW9uX2ZpZWxkLCAnbGVmdCcsICcjZmZmJywgdGhpcy5fX3RlbXAudG9IZXhTdHJpbmcoKSk7XG4gICAgICB0aGlzLl9faW5wdXQudmFsdWUgPSB0aGlzLl9fY29sb3IudG9TdHJpbmcoKTtcbiAgICAgIENvbW1vbi5leHRlbmQodGhpcy5fX2lucHV0LnN0eWxlLCB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5fX2NvbG9yLnRvSGV4U3RyaW5nKCksXG4gICAgICAgIGNvbG9yOiAncmdiKCcgKyBmbGlwICsgJywnICsgZmxpcCArICcsJyArIGZsaXAgKyAnKScsXG4gICAgICAgIHRleHRTaGFkb3c6IHRoaXMuX19pbnB1dF90ZXh0U2hhZG93ICsgJ3JnYmEoJyArIF9mbGlwICsgJywnICsgX2ZsaXAgKyAnLCcgKyBfZmxpcCArICcsLjcpJ1xuICAgICAgfSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBDb2xvckNvbnRyb2xsZXI7XG59KENvbnRyb2xsZXIpO1xudmFyIHZlbmRvcnMgPSBbJy1tb3otJywgJy1vLScsICctd2Via2l0LScsICctbXMtJywgJyddO1xuZnVuY3Rpb24gbGluZWFyR3JhZGllbnQoZWxlbSwgeCwgYSwgYikge1xuICBlbGVtLnN0eWxlLmJhY2tncm91bmQgPSAnJztcbiAgQ29tbW9uLmVhY2godmVuZG9ycywgZnVuY3Rpb24gKHZlbmRvcikge1xuICAgIGVsZW0uc3R5bGUuY3NzVGV4dCArPSAnYmFja2dyb3VuZDogJyArIHZlbmRvciArICdsaW5lYXItZ3JhZGllbnQoJyArIHggKyAnLCAnICsgYSArICcgMCUsICcgKyBiICsgJyAxMDAlKTsgJztcbiAgfSk7XG59XG5mdW5jdGlvbiBodWVHcmFkaWVudChlbGVtKSB7XG4gIGVsZW0uc3R5bGUuYmFja2dyb3VuZCA9ICcnO1xuICBlbGVtLnN0eWxlLmNzc1RleHQgKz0gJ2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZjAwMDAgMCUsICNmZjAwZmYgMTclLCAjMDAwMGZmIDM0JSwgIzAwZmZmZiA1MCUsICMwMGZmMDAgNjclLCAjZmZmZjAwIDg0JSwgI2ZmMDAwMCAxMDAlKTsnO1xuICBlbGVtLnN0eWxlLmNzc1RleHQgKz0gJ2JhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZjAwMDAgMCUsI2ZmMDBmZiAxNyUsIzAwMDBmZiAzNCUsIzAwZmZmZiA1MCUsIzAwZmYwMCA2NyUsI2ZmZmYwMCA4NCUsI2ZmMDAwMCAxMDAlKTsnO1xuICBlbGVtLnN0eWxlLmNzc1RleHQgKz0gJ2JhY2tncm91bmQ6IC1vLWxpbmVhci1ncmFkaWVudCh0b3AsICAjZmYwMDAwIDAlLCNmZjAwZmYgMTclLCMwMDAwZmYgMzQlLCMwMGZmZmYgNTAlLCMwMGZmMDAgNjclLCNmZmZmMDAgODQlLCNmZjAwMDAgMTAwJSk7JztcbiAgZWxlbS5zdHlsZS5jc3NUZXh0ICs9ICdiYWNrZ3JvdW5kOiAtbXMtbGluZWFyLWdyYWRpZW50KHRvcCwgICNmZjAwMDAgMCUsI2ZmMDBmZiAxNyUsIzAwMDBmZiAzNCUsIzAwZmZmZiA1MCUsIzAwZmYwMCA2NyUsI2ZmZmYwMCA4NCUsI2ZmMDAwMCAxMDAlKTsnO1xuICBlbGVtLnN0eWxlLmNzc1RleHQgKz0gJ2JhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0b3AsICAjZmYwMDAwIDAlLCNmZjAwZmYgMTclLCMwMDAwZmYgMzQlLCMwMGZmZmYgNTAlLCMwMGZmMDAgNjclLCNmZmZmMDAgODQlLCNmZjAwMDAgMTAwJSk7Jztcbn1cblxudmFyIGNzcyA9IHtcbiAgbG9hZDogZnVuY3Rpb24gbG9hZCh1cmwsIGluZG9jKSB7XG4gICAgdmFyIGRvYyA9IGluZG9jIHx8IGRvY3VtZW50O1xuICAgIHZhciBsaW5rID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICBsaW5rLnR5cGUgPSAndGV4dC9jc3MnO1xuICAgIGxpbmsucmVsID0gJ3N0eWxlc2hlZXQnO1xuICAgIGxpbmsuaHJlZiA9IHVybDtcbiAgICBkb2MuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgfSxcbiAgaW5qZWN0OiBmdW5jdGlvbiBpbmplY3QoY3NzQ29udGVudCwgaW5kb2MpIHtcbiAgICB2YXIgZG9jID0gaW5kb2MgfHwgZG9jdW1lbnQ7XG4gICAgdmFyIGluamVjdGVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgICBpbmplY3RlZC50eXBlID0gJ3RleHQvY3NzJztcbiAgICBpbmplY3RlZC5pbm5lckhUTUwgPSBjc3NDb250ZW50O1xuICAgIHZhciBoZWFkID0gZG9jLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgdHJ5IHtcbiAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoaW5qZWN0ZWQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBzYXZlRGlhbG9nQ29udGVudHMgPSBcIjxkaXYgaWQ9XFxcImRnLXNhdmVcXFwiIGNsYXNzPVxcXCJkZyBkaWFsb2d1ZVxcXCI+XFxuXFxuICBIZXJlJ3MgdGhlIG5ldyBsb2FkIHBhcmFtZXRlciBmb3IgeW91ciA8Y29kZT5HVUk8L2NvZGU+J3MgY29uc3RydWN0b3I6XFxuXFxuICA8dGV4dGFyZWEgaWQ9XFxcImRnLW5ldy1jb25zdHJ1Y3RvclxcXCI+PC90ZXh0YXJlYT5cXG5cXG4gIDxkaXYgaWQ9XFxcImRnLXNhdmUtbG9jYWxseVxcXCI+XFxuXFxuICAgIDxpbnB1dCBpZD1cXFwiZGctbG9jYWwtc3RvcmFnZVxcXCIgdHlwZT1cXFwiY2hlY2tib3hcXFwiLz4gQXV0b21hdGljYWxseSBzYXZlXFxuICAgIHZhbHVlcyB0byA8Y29kZT5sb2NhbFN0b3JhZ2U8L2NvZGU+IG9uIGV4aXQuXFxuXFxuICAgIDxkaXYgaWQ9XFxcImRnLWxvY2FsLWV4cGxhaW5cXFwiPlRoZSB2YWx1ZXMgc2F2ZWQgdG8gPGNvZGU+bG9jYWxTdG9yYWdlPC9jb2RlPiB3aWxsXFxuICAgICAgb3ZlcnJpZGUgdGhvc2UgcGFzc2VkIHRvIDxjb2RlPmRhdC5HVUk8L2NvZGU+J3MgY29uc3RydWN0b3IuIFRoaXMgbWFrZXMgaXRcXG4gICAgICBlYXNpZXIgdG8gd29yayBpbmNyZW1lbnRhbGx5LCBidXQgPGNvZGU+bG9jYWxTdG9yYWdlPC9jb2RlPiBpcyBmcmFnaWxlLFxcbiAgICAgIGFuZCB5b3VyIGZyaWVuZHMgbWF5IG5vdCBzZWUgdGhlIHNhbWUgdmFsdWVzIHlvdSBkby5cXG5cXG4gICAgPC9kaXY+XFxuXFxuICA8L2Rpdj5cXG5cXG48L2Rpdj5cIjtcblxudmFyIENvbnRyb2xsZXJGYWN0b3J5ID0gZnVuY3Rpb24gQ29udHJvbGxlckZhY3Rvcnkob2JqZWN0LCBwcm9wZXJ0eSkge1xuICB2YXIgaW5pdGlhbFZhbHVlID0gb2JqZWN0W3Byb3BlcnR5XTtcbiAgaWYgKENvbW1vbi5pc0FycmF5KGFyZ3VtZW50c1syXSkgfHwgQ29tbW9uLmlzT2JqZWN0KGFyZ3VtZW50c1syXSkpIHtcbiAgICByZXR1cm4gbmV3IE9wdGlvbkNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSwgYXJndW1lbnRzWzJdKTtcbiAgfVxuICBpZiAoQ29tbW9uLmlzTnVtYmVyKGluaXRpYWxWYWx1ZSkpIHtcbiAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKGFyZ3VtZW50c1syXSkgJiYgQ29tbW9uLmlzTnVtYmVyKGFyZ3VtZW50c1szXSkpIHtcbiAgICAgIGlmIChDb21tb24uaXNOdW1iZXIoYXJndW1lbnRzWzRdKSkge1xuICAgICAgICByZXR1cm4gbmV3IE51bWJlckNvbnRyb2xsZXJTbGlkZXIob2JqZWN0LCBwcm9wZXJ0eSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10sIGFyZ3VtZW50c1s0XSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IE51bWJlckNvbnRyb2xsZXJTbGlkZXIob2JqZWN0LCBwcm9wZXJ0eSwgYXJndW1lbnRzWzJdLCBhcmd1bWVudHNbM10pO1xuICAgIH1cbiAgICBpZiAoQ29tbW9uLmlzTnVtYmVyKGFyZ3VtZW50c1s0XSkpIHtcbiAgICAgIHJldHVybiBuZXcgTnVtYmVyQ29udHJvbGxlckJveChvYmplY3QsIHByb3BlcnR5LCB7IG1pbjogYXJndW1lbnRzWzJdLCBtYXg6IGFyZ3VtZW50c1szXSwgc3RlcDogYXJndW1lbnRzWzRdIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IE51bWJlckNvbnRyb2xsZXJCb3gob2JqZWN0LCBwcm9wZXJ0eSwgeyBtaW46IGFyZ3VtZW50c1syXSwgbWF4OiBhcmd1bWVudHNbM10gfSk7XG4gIH1cbiAgaWYgKENvbW1vbi5pc1N0cmluZyhpbml0aWFsVmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBTdHJpbmdDb250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpO1xuICB9XG4gIGlmIChDb21tb24uaXNGdW5jdGlvbihpbml0aWFsVmFsdWUpKSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbkNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSwgJycpO1xuICB9XG4gIGlmIChDb21tb24uaXNCb29sZWFuKGluaXRpYWxWYWx1ZSkpIHtcbiAgICByZXR1cm4gbmV3IEJvb2xlYW5Db250cm9sbGVyKG9iamVjdCwgcHJvcGVydHkpO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKSB7XG4gIHNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG59XG52YXIgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cub1JlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubXNSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO1xuXG52YXIgQ2VudGVyZWREaXYgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIENlbnRlcmVkRGl2KCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIENlbnRlcmVkRGl2KTtcbiAgICB0aGlzLmJhY2tncm91bmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgQ29tbW9uLmV4dGVuZCh0aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLCB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDAsMCwwLDAuOCknLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGRpc3BsYXk6ICdub25lJyxcbiAgICAgIHpJbmRleDogJzEwMDAnLFxuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIFdlYmtpdFRyYW5zaXRpb246ICdvcGFjaXR5IDAuMnMgbGluZWFyJyxcbiAgICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IDAuMnMgbGluZWFyJ1xuICAgIH0pO1xuICAgIGRvbS5tYWtlRnVsbHNjcmVlbih0aGlzLmJhY2tncm91bmRFbGVtZW50KTtcbiAgICB0aGlzLmJhY2tncm91bmRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB0aGlzLmRvbUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBDb21tb24uZXh0ZW5kKHRoaXMuZG9tRWxlbWVudC5zdHlsZSwge1xuICAgICAgcG9zaXRpb246ICdmaXhlZCcsXG4gICAgICBkaXNwbGF5OiAnbm9uZScsXG4gICAgICB6SW5kZXg6ICcxMDAxJyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBXZWJraXRUcmFuc2l0aW9uOiAnLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBlYXNlLW91dCwgb3BhY2l0eSAwLjJzIGxpbmVhcicsXG4gICAgICB0cmFuc2l0aW9uOiAndHJhbnNmb3JtIDAuMnMgZWFzZS1vdXQsIG9wYWNpdHkgMC4ycyBsaW5lYXInXG4gICAgfSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLmJhY2tncm91bmRFbGVtZW50KTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBkb20uYmluZCh0aGlzLmJhY2tncm91bmRFbGVtZW50LCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5oaWRlKCk7XG4gICAgfSk7XG4gIH1cbiAgY3JlYXRlQ2xhc3MoQ2VudGVyZWREaXYsIFt7XG4gICAga2V5OiAnc2hvdycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnc2NhbGUoMS4xKSc7XG4gICAgICB0aGlzLmxheW91dCgpO1xuICAgICAgQ29tbW9uLmRlZmVyKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMuYmFja2dyb3VuZEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIF90aGlzLmRvbUVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICAgIF90aGlzLmRvbUVsZW1lbnQuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJ3NjYWxlKDEpJztcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2hpZGUnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBoaWRlKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgIHZhciBoaWRlID0gZnVuY3Rpb24gaGlkZSgpIHtcbiAgICAgICAgX3RoaXMuZG9tRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBfdGhpcy5iYWNrZ3JvdW5kRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb20udW5iaW5kKF90aGlzLmRvbUVsZW1lbnQsICd3ZWJraXRUcmFuc2l0aW9uRW5kJywgaGlkZSk7XG4gICAgICAgIGRvbS51bmJpbmQoX3RoaXMuZG9tRWxlbWVudCwgJ3RyYW5zaXRpb25lbmQnLCBoaWRlKTtcbiAgICAgICAgZG9tLnVuYmluZChfdGhpcy5kb21FbGVtZW50LCAnb1RyYW5zaXRpb25FbmQnLCBoaWRlKTtcbiAgICAgIH07XG4gICAgICBkb20uYmluZCh0aGlzLmRvbUVsZW1lbnQsICd3ZWJraXRUcmFuc2l0aW9uRW5kJywgaGlkZSk7XG4gICAgICBkb20uYmluZCh0aGlzLmRvbUVsZW1lbnQsICd0cmFuc2l0aW9uZW5kJywgaGlkZSk7XG4gICAgICBkb20uYmluZCh0aGlzLmRvbUVsZW1lbnQsICdvVHJhbnNpdGlvbkVuZCcsIGhpZGUpO1xuICAgICAgdGhpcy5iYWNrZ3JvdW5kRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnc2NhbGUoMS4xKSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbGF5b3V0JyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbGF5b3V0KCkge1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSB3aW5kb3cuaW5uZXJXaWR0aCAvIDIgLSBkb20uZ2V0V2lkdGgodGhpcy5kb21FbGVtZW50KSAvIDIgKyAncHgnO1xuICAgICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLnRvcCA9IHdpbmRvdy5pbm5lckhlaWdodCAvIDIgLSBkb20uZ2V0SGVpZ2h0KHRoaXMuZG9tRWxlbWVudCkgLyAyICsgJ3B4JztcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIENlbnRlcmVkRGl2O1xufSgpO1xuXG52YXIgc3R5bGVTaGVldCA9IF9fXyRpbnNlcnRTdHlsZShcIi5kZyB1bHtsaXN0LXN0eWxlOm5vbmU7bWFyZ2luOjA7cGFkZGluZzowO3dpZHRoOjEwMCU7Y2xlYXI6Ym90aH0uZGcuYWN7cG9zaXRpb246Zml4ZWQ7dG9wOjA7bGVmdDowO3JpZ2h0OjA7aGVpZ2h0OjA7ei1pbmRleDowfS5kZzpub3QoLmFjKSAubWFpbntvdmVyZmxvdzpoaWRkZW59LmRnLm1haW57LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcjstby10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcjstbW96LXRyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyO3RyYW5zaXRpb246b3BhY2l0eSAuMXMgbGluZWFyfS5kZy5tYWluLnRhbGxlci10aGFuLXdpbmRvd3tvdmVyZmxvdy15OmF1dG99LmRnLm1haW4udGFsbGVyLXRoYW4td2luZG93IC5jbG9zZS1idXR0b257b3BhY2l0eToxO21hcmdpbi10b3A6LTFweDtib3JkZXItdG9wOjFweCBzb2xpZCAjMmMyYzJjfS5kZy5tYWluIHVsLmNsb3NlZCAuY2xvc2UtYnV0dG9ue29wYWNpdHk6MSAhaW1wb3J0YW50fS5kZy5tYWluOmhvdmVyIC5jbG9zZS1idXR0b24sLmRnLm1haW4gLmNsb3NlLWJ1dHRvbi5kcmFne29wYWNpdHk6MX0uZGcubWFpbiAuY2xvc2UtYnV0dG9uey13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7LW8tdHJhbnNpdGlvbjpvcGFjaXR5IC4xcyBsaW5lYXI7LW1vei10cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcjt0cmFuc2l0aW9uOm9wYWNpdHkgLjFzIGxpbmVhcjtib3JkZXI6MDtsaW5lLWhlaWdodDoxOXB4O2hlaWdodDoyMHB4O2N1cnNvcjpwb2ludGVyO3RleHQtYWxpZ246Y2VudGVyO2JhY2tncm91bmQtY29sb3I6IzAwMH0uZGcubWFpbiAuY2xvc2UtYnV0dG9uLmNsb3NlLXRvcHtwb3NpdGlvbjpyZWxhdGl2ZX0uZGcubWFpbiAuY2xvc2UtYnV0dG9uLmNsb3NlLWJvdHRvbXtwb3NpdGlvbjphYnNvbHV0ZX0uZGcubWFpbiAuY2xvc2UtYnV0dG9uOmhvdmVye2JhY2tncm91bmQtY29sb3I6IzExMX0uZGcuYXtmbG9hdDpyaWdodDttYXJnaW4tcmlnaHQ6MTVweDtvdmVyZmxvdy15OnZpc2libGV9LmRnLmEuaGFzLXNhdmU+dWwuY2xvc2UtdG9we21hcmdpbi10b3A6MH0uZGcuYS5oYXMtc2F2ZT51bC5jbG9zZS1ib3R0b217bWFyZ2luLXRvcDoyN3B4fS5kZy5hLmhhcy1zYXZlPnVsLmNsb3NlZHttYXJnaW4tdG9wOjB9LmRnLmEgLnNhdmUtcm93e3RvcDowO3otaW5kZXg6MTAwMn0uZGcuYSAuc2F2ZS1yb3cuY2xvc2UtdG9we3Bvc2l0aW9uOnJlbGF0aXZlfS5kZy5hIC5zYXZlLXJvdy5jbG9zZS1ib3R0b217cG9zaXRpb246Zml4ZWR9LmRnIGxpey13ZWJraXQtdHJhbnNpdGlvbjpoZWlnaHQgLjFzIGVhc2Utb3V0Oy1vLXRyYW5zaXRpb246aGVpZ2h0IC4xcyBlYXNlLW91dDstbW96LXRyYW5zaXRpb246aGVpZ2h0IC4xcyBlYXNlLW91dDt0cmFuc2l0aW9uOmhlaWdodCAuMXMgZWFzZS1vdXQ7LXdlYmtpdC10cmFuc2l0aW9uOm92ZXJmbG93IC4xcyBsaW5lYXI7LW8tdHJhbnNpdGlvbjpvdmVyZmxvdyAuMXMgbGluZWFyOy1tb3otdHJhbnNpdGlvbjpvdmVyZmxvdyAuMXMgbGluZWFyO3RyYW5zaXRpb246b3ZlcmZsb3cgLjFzIGxpbmVhcn0uZGcgbGk6bm90KC5mb2xkZXIpe2N1cnNvcjphdXRvO2hlaWdodDoyN3B4O2xpbmUtaGVpZ2h0OjI3cHg7cGFkZGluZzowIDRweCAwIDVweH0uZGcgbGkuZm9sZGVye3BhZGRpbmc6MDtib3JkZXItbGVmdDo0cHggc29saWQgcmdiYSgwLDAsMCwwKX0uZGcgbGkudGl0bGV7Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLWxlZnQ6LTRweH0uZGcgLmNsb3NlZCBsaTpub3QoLnRpdGxlKSwuZGcgLmNsb3NlZCB1bCBsaSwuZGcgLmNsb3NlZCB1bCBsaT4qe2hlaWdodDowO292ZXJmbG93OmhpZGRlbjtib3JkZXI6MH0uZGcgLmNye2NsZWFyOmJvdGg7cGFkZGluZy1sZWZ0OjNweDtoZWlnaHQ6MjdweDtvdmVyZmxvdzpoaWRkZW59LmRnIC5wcm9wZXJ0eS1uYW1le2N1cnNvcjpkZWZhdWx0O2Zsb2F0OmxlZnQ7Y2xlYXI6bGVmdDt3aWR0aDo0MCU7b3ZlcmZsb3c6aGlkZGVuO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXN9LmRnIC5jci5mdW5jdGlvbiAucHJvcGVydHktbmFtZXt3aWR0aDoxMDAlfS5kZyAuY3tmbG9hdDpsZWZ0O3dpZHRoOjYwJTtwb3NpdGlvbjpyZWxhdGl2ZX0uZGcgLmMgaW5wdXRbdHlwZT10ZXh0XXtib3JkZXI6MDttYXJnaW4tdG9wOjRweDtwYWRkaW5nOjNweDt3aWR0aDoxMDAlO2Zsb2F0OnJpZ2h0fS5kZyAuaGFzLXNsaWRlciBpbnB1dFt0eXBlPXRleHRde3dpZHRoOjMwJTttYXJnaW4tbGVmdDowfS5kZyAuc2xpZGVye2Zsb2F0OmxlZnQ7d2lkdGg6NjYlO21hcmdpbi1sZWZ0Oi01cHg7bWFyZ2luLXJpZ2h0OjA7aGVpZ2h0OjE5cHg7bWFyZ2luLXRvcDo0cHh9LmRnIC5zbGlkZXItZmd7aGVpZ2h0OjEwMCV9LmRnIC5jIGlucHV0W3R5cGU9Y2hlY2tib3hde21hcmdpbi10b3A6N3B4fS5kZyAuYyBzZWxlY3R7bWFyZ2luLXRvcDo1cHh9LmRnIC5jci5mdW5jdGlvbiwuZGcgLmNyLmZ1bmN0aW9uIC5wcm9wZXJ0eS1uYW1lLC5kZyAuY3IuZnVuY3Rpb24gKiwuZGcgLmNyLmJvb2xlYW4sLmRnIC5jci5ib29sZWFuICp7Y3Vyc29yOnBvaW50ZXJ9LmRnIC5jci5jb2xvcntvdmVyZmxvdzp2aXNpYmxlfS5kZyAuc2VsZWN0b3J7ZGlzcGxheTpub25lO3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbi1sZWZ0Oi05cHg7bWFyZ2luLXRvcDoyM3B4O3otaW5kZXg6MTB9LmRnIC5jOmhvdmVyIC5zZWxlY3RvciwuZGcgLnNlbGVjdG9yLmRyYWd7ZGlzcGxheTpibG9ja30uZGcgbGkuc2F2ZS1yb3d7cGFkZGluZzowfS5kZyBsaS5zYXZlLXJvdyAuYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MHB4IDZweH0uZGcuZGlhbG9ndWV7YmFja2dyb3VuZC1jb2xvcjojMjIyO3dpZHRoOjQ2MHB4O3BhZGRpbmc6MTVweDtmb250LXNpemU6MTNweDtsaW5lLWhlaWdodDoxNXB4fSNkZy1uZXctY29uc3RydWN0b3J7cGFkZGluZzoxMHB4O2NvbG9yOiMyMjI7Zm9udC1mYW1pbHk6TW9uYWNvLCBtb25vc3BhY2U7Zm9udC1zaXplOjEwcHg7Ym9yZGVyOjA7cmVzaXplOm5vbmU7Ym94LXNoYWRvdzppbnNldCAxcHggMXB4IDFweCAjODg4O3dvcmQtd3JhcDpicmVhay13b3JkO21hcmdpbjoxMnB4IDA7ZGlzcGxheTpibG9jazt3aWR0aDo0NDBweDtvdmVyZmxvdy15OnNjcm9sbDtoZWlnaHQ6MTAwcHg7cG9zaXRpb246cmVsYXRpdmV9I2RnLWxvY2FsLWV4cGxhaW57ZGlzcGxheTpub25lO2ZvbnQtc2l6ZToxMXB4O2xpbmUtaGVpZ2h0OjE3cHg7Ym9yZGVyLXJhZGl1czozcHg7YmFja2dyb3VuZC1jb2xvcjojMzMzO3BhZGRpbmc6OHB4O21hcmdpbi10b3A6MTBweH0jZGctbG9jYWwtZXhwbGFpbiBjb2Rle2ZvbnQtc2l6ZToxMHB4fSNkYXQtZ3VpLXNhdmUtbG9jYWxseXtkaXNwbGF5Om5vbmV9LmRne2NvbG9yOiNlZWU7Zm9udDoxMXB4ICdMdWNpZGEgR3JhbmRlJywgc2Fucy1zZXJpZjt0ZXh0LXNoYWRvdzowIC0xcHggMCAjMTExfS5kZy5tYWluOjotd2Via2l0LXNjcm9sbGJhcnt3aWR0aDo1cHg7YmFja2dyb3VuZDojMWExYTFhfS5kZy5tYWluOjotd2Via2l0LXNjcm9sbGJhci1jb3JuZXJ7aGVpZ2h0OjA7ZGlzcGxheTpub25lfS5kZy5tYWluOjotd2Via2l0LXNjcm9sbGJhci10aHVtYntib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOiM2NzY3Njd9LmRnIGxpOm5vdCguZm9sZGVyKXtiYWNrZ3JvdW5kOiMxYTFhMWE7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgIzJjMmMyY30uZGcgbGkuc2F2ZS1yb3d7bGluZS1oZWlnaHQ6MjVweDtiYWNrZ3JvdW5kOiNkYWQ1Y2I7Ym9yZGVyOjB9LmRnIGxpLnNhdmUtcm93IHNlbGVjdHttYXJnaW4tbGVmdDo1cHg7d2lkdGg6MTA4cHh9LmRnIGxpLnNhdmUtcm93IC5idXR0b257bWFyZ2luLWxlZnQ6NXB4O21hcmdpbi10b3A6MXB4O2JvcmRlci1yYWRpdXM6MnB4O2ZvbnQtc2l6ZTo5cHg7bGluZS1oZWlnaHQ6N3B4O3BhZGRpbmc6NHB4IDRweCA1cHggNHB4O2JhY2tncm91bmQ6I2M1YmRhZDtjb2xvcjojZmZmO3RleHQtc2hhZG93OjAgMXB4IDAgI2IwYTU4Zjtib3gtc2hhZG93OjAgLTFweCAwICNiMGE1OGY7Y3Vyc29yOnBvaW50ZXJ9LmRnIGxpLnNhdmUtcm93IC5idXR0b24uZ2VhcnN7YmFja2dyb3VuZDojYzViZGFkIHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFzQUFBQU5DQVlBQUFCLzlaUTdBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQVFKSlJFRlVlTnBpWUtBVS9QLy9Qd0dJQy9BcENBQmlCU0FXK0k4QUNsQWNnS3hRNFQ5aG9NQUVVcnh4MlFTR042K2VnRFgrL3ZXVDRlN044MkFNWW9QQXgvZXZ3V29Zb1NZYkFDWDJzN0t4Q3h6Y3NlekRoM2V2Rm9ERUJZVEVFcXljZ2dXQXpBOUF1VVNRUWdlWVBhOWZQdjYvWVdtL0FjeDVJUGI3dHkvZncrUVpibHc2N3ZEczhSMFlIeVFoZ09ieCt5QUprQnFtRzVkUFBEaDFhUE9HUi9ldWdXMEc0dmxJb1RJZnlGY0ErUWVraGhISmhQZFF4YmlBSWd1TUJUUVpyUEQ3MTA4TTZyb1dZREZRaUlBQXY2QW93LzFiRndYZ2lzK2YyTFVBeW53b0lhTmN6OFhOeDNEbDdNRUpVREdRcHg5Z3RROFlDdWVCK0QyNk9FQ0FBUURhZHQ3ZTQ2RDQyUUFBQUFCSlJVNUVya0pnZ2c9PSkgMnB4IDFweCBuby1yZXBlYXQ7aGVpZ2h0OjdweDt3aWR0aDo4cHh9LmRnIGxpLnNhdmUtcm93IC5idXR0b246aG92ZXJ7YmFja2dyb3VuZC1jb2xvcjojYmFiMTllO2JveC1zaGFkb3c6MCAtMXB4IDAgI2IwYTU4Zn0uZGcgbGkuZm9sZGVye2JvcmRlci1ib3R0b206MH0uZGcgbGkudGl0bGV7cGFkZGluZy1sZWZ0OjE2cHg7YmFja2dyb3VuZDojMDAwIHVybChkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhCUUFGQUpFQUFQLy8vL1B6OC8vLy8vLy8veUg1QkFFQUFBSUFMQUFBQUFBRkFBVUFBQUlJbEkraEtnRnhvQ2dBT3c9PSkgNnB4IDEwcHggbm8tcmVwZWF0O2N1cnNvcjpwb2ludGVyO2JvcmRlci1ib3R0b206MXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4yKX0uZGcgLmNsb3NlZCBsaS50aXRsZXtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL2dpZjtiYXNlNjQsUjBsR09EbGhCUUFGQUpFQUFQLy8vL1B6OC8vLy8vLy8veUg1QkFFQUFBSUFMQUFBQUFBRkFBVUFBQUlJbEdJV3FNQ2JXQUVBT3c9PSl9LmRnIC5jci5ib29sZWFue2JvcmRlci1sZWZ0OjNweCBzb2xpZCAjODA2Nzg3fS5kZyAuY3IuY29sb3J7Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkfS5kZyAuY3IuZnVuY3Rpb257Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICNlNjFkNWZ9LmRnIC5jci5udW1iZXJ7Ym9yZGVyLWxlZnQ6M3B4IHNvbGlkICMyRkExRDZ9LmRnIC5jci5udW1iZXIgaW5wdXRbdHlwZT10ZXh0XXtjb2xvcjojMkZBMUQ2fS5kZyAuY3Iuc3RyaW5ne2JvcmRlci1sZWZ0OjNweCBzb2xpZCAjMWVkMzZmfS5kZyAuY3Iuc3RyaW5nIGlucHV0W3R5cGU9dGV4dF17Y29sb3I6IzFlZDM2Zn0uZGcgLmNyLmZ1bmN0aW9uOmhvdmVyLC5kZyAuY3IuYm9vbGVhbjpob3ZlcntiYWNrZ3JvdW5kOiMxMTF9LmRnIC5jIGlucHV0W3R5cGU9dGV4dF17YmFja2dyb3VuZDojMzAzMDMwO291dGxpbmU6bm9uZX0uZGcgLmMgaW5wdXRbdHlwZT10ZXh0XTpob3ZlcntiYWNrZ3JvdW5kOiMzYzNjM2N9LmRnIC5jIGlucHV0W3R5cGU9dGV4dF06Zm9jdXN7YmFja2dyb3VuZDojNDk0OTQ5O2NvbG9yOiNmZmZ9LmRnIC5jIC5zbGlkZXJ7YmFja2dyb3VuZDojMzAzMDMwO2N1cnNvcjpldy1yZXNpemV9LmRnIC5jIC5zbGlkZXItZmd7YmFja2dyb3VuZDojMkZBMUQ2O21heC13aWR0aDoxMDAlfS5kZyAuYyAuc2xpZGVyOmhvdmVye2JhY2tncm91bmQ6IzNjM2MzY30uZGcgLmMgLnNsaWRlcjpob3ZlciAuc2xpZGVyLWZne2JhY2tncm91bmQ6IzQ0YWJkYX1cXG5cIik7XG5cbmNzcy5pbmplY3Qoc3R5bGVTaGVldCk7XG52YXIgQ1NTX05BTUVTUEFDRSA9ICdkZyc7XG52YXIgSElERV9LRVlfQ09ERSA9IDcyO1xudmFyIENMT1NFX0JVVFRPTl9IRUlHSFQgPSAyMDtcbnZhciBERUZBVUxUX0RFRkFVTFRfUFJFU0VUX05BTUUgPSAnRGVmYXVsdCc7XG52YXIgU1VQUE9SVFNfTE9DQUxfU1RPUkFHRSA9IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISF3aW5kb3cubG9jYWxTdG9yYWdlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59KCk7XG52YXIgU0FWRV9ESUFMT0dVRSA9IHZvaWQgMDtcbnZhciBhdXRvUGxhY2VWaXJnaW4gPSB0cnVlO1xudmFyIGF1dG9QbGFjZUNvbnRhaW5lciA9IHZvaWQgMDtcbnZhciBoaWRlID0gZmFsc2U7XG52YXIgaGlkZWFibGVHdWlzID0gW107XG52YXIgR1VJID0gZnVuY3Rpb24gR1VJKHBhcnMpIHtcbiAgdmFyIF90aGlzID0gdGhpcztcbiAgdmFyIHBhcmFtcyA9IHBhcnMgfHwge307XG4gIHRoaXMuZG9tRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aGlzLl9fdWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICB0aGlzLmRvbUVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5fX3VsKTtcbiAgZG9tLmFkZENsYXNzKHRoaXMuZG9tRWxlbWVudCwgQ1NTX05BTUVTUEFDRSk7XG4gIHRoaXMuX19mb2xkZXJzID0ge307XG4gIHRoaXMuX19jb250cm9sbGVycyA9IFtdO1xuICB0aGlzLl9fcmVtZW1iZXJlZE9iamVjdHMgPSBbXTtcbiAgdGhpcy5fX3JlbWVtYmVyZWRPYmplY3RJbmRlY2VzVG9Db250cm9sbGVycyA9IFtdO1xuICB0aGlzLl9fbGlzdGVuaW5nID0gW107XG4gIHBhcmFtcyA9IENvbW1vbi5kZWZhdWx0cyhwYXJhbXMsIHtcbiAgICBjbG9zZU9uVG9wOiBmYWxzZSxcbiAgICBhdXRvUGxhY2U6IHRydWUsXG4gICAgd2lkdGg6IEdVSS5ERUZBVUxUX1dJRFRIXG4gIH0pO1xuICBwYXJhbXMgPSBDb21tb24uZGVmYXVsdHMocGFyYW1zLCB7XG4gICAgcmVzaXphYmxlOiBwYXJhbXMuYXV0b1BsYWNlLFxuICAgIGhpZGVhYmxlOiBwYXJhbXMuYXV0b1BsYWNlXG4gIH0pO1xuICBpZiAoIUNvbW1vbi5pc1VuZGVmaW5lZChwYXJhbXMubG9hZCkpIHtcbiAgICBpZiAocGFyYW1zLnByZXNldCkge1xuICAgICAgcGFyYW1zLmxvYWQucHJlc2V0ID0gcGFyYW1zLnByZXNldDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcGFyYW1zLmxvYWQgPSB7IHByZXNldDogREVGQVVMVF9ERUZBVUxUX1BSRVNFVF9OQU1FIH07XG4gIH1cbiAgaWYgKENvbW1vbi5pc1VuZGVmaW5lZChwYXJhbXMucGFyZW50KSAmJiBwYXJhbXMuaGlkZWFibGUpIHtcbiAgICBoaWRlYWJsZUd1aXMucHVzaCh0aGlzKTtcbiAgfVxuICBwYXJhbXMucmVzaXphYmxlID0gQ29tbW9uLmlzVW5kZWZpbmVkKHBhcmFtcy5wYXJlbnQpICYmIHBhcmFtcy5yZXNpemFibGU7XG4gIGlmIChwYXJhbXMuYXV0b1BsYWNlICYmIENvbW1vbi5pc1VuZGVmaW5lZChwYXJhbXMuc2Nyb2xsYWJsZSkpIHtcbiAgICBwYXJhbXMuc2Nyb2xsYWJsZSA9IHRydWU7XG4gIH1cbiAgdmFyIHVzZUxvY2FsU3RvcmFnZSA9IFNVUFBPUlRTX0xPQ0FMX1NUT1JBR0UgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0TG9jYWxTdG9yYWdlSGFzaCh0aGlzLCAnaXNMb2NhbCcpKSA9PT0gJ3RydWUnO1xuICB2YXIgc2F2ZVRvTG9jYWxTdG9yYWdlID0gdm9pZCAwO1xuICB2YXIgdGl0bGVSb3cgPSB2b2lkIDA7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsXG4gIHtcbiAgICBwYXJlbnQ6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLnBhcmVudDtcbiAgICAgIH1cbiAgICB9LFxuICAgIHNjcm9sbGFibGU6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLnNjcm9sbGFibGU7XG4gICAgICB9XG4gICAgfSxcbiAgICBhdXRvUGxhY2U6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmF1dG9QbGFjZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGNsb3NlT25Ub3A6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmNsb3NlT25Ub3A7XG4gICAgICB9XG4gICAgfSxcbiAgICBwcmVzZXQ6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICBpZiAoX3RoaXMucGFyZW50KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmdldFJvb3QoKS5wcmVzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhcmFtcy5sb2FkLnByZXNldDtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgICAgIGlmIChfdGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICBfdGhpcy5nZXRSb290KCkucHJlc2V0ID0gdjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJhbXMubG9hZC5wcmVzZXQgPSB2O1xuICAgICAgICB9XG4gICAgICAgIHNldFByZXNldFNlbGVjdEluZGV4KHRoaXMpO1xuICAgICAgICBfdGhpcy5yZXZlcnQoKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHdpZHRoOiB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCQkMSgpIHtcbiAgICAgICAgcmV0dXJuIHBhcmFtcy53aWR0aDtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgICAgIHBhcmFtcy53aWR0aCA9IHY7XG4gICAgICAgIHNldFdpZHRoKF90aGlzLCB2KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG5hbWU6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLm5hbWU7XG4gICAgICB9LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQkJDEodikge1xuICAgICAgICBwYXJhbXMubmFtZSA9IHY7XG4gICAgICAgIGlmICh0aXRsZVJvdykge1xuICAgICAgICAgIHRpdGxlUm93LmlubmVySFRNTCA9IHBhcmFtcy5uYW1lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBjbG9zZWQ6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmNsb3NlZDtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCQkMSh2KSB7XG4gICAgICAgIHBhcmFtcy5jbG9zZWQgPSB2O1xuICAgICAgICBpZiAocGFyYW1zLmNsb3NlZCkge1xuICAgICAgICAgIGRvbS5hZGRDbGFzcyhfdGhpcy5fX3VsLCBHVUkuQ0xBU1NfQ0xPU0VEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkb20ucmVtb3ZlQ2xhc3MoX3RoaXMuX191bCwgR1VJLkNMQVNTX0NMT1NFRCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xuICAgICAgICBpZiAoX3RoaXMuX19jbG9zZUJ1dHRvbikge1xuICAgICAgICAgIF90aGlzLl9fY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gdiA/IEdVSS5URVhUX09QRU4gOiBHVUkuVEVYVF9DTE9TRUQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGxvYWQ6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICByZXR1cm4gcGFyYW1zLmxvYWQ7XG4gICAgICB9XG4gICAgfSxcbiAgICB1c2VMb2NhbFN0b3JhZ2U6IHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0JCQxKCkge1xuICAgICAgICByZXR1cm4gdXNlTG9jYWxTdG9yYWdlO1xuICAgICAgfSxcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0JCQxKGJvb2wpIHtcbiAgICAgICAgaWYgKFNVUFBPUlRTX0xPQ0FMX1NUT1JBR0UpIHtcbiAgICAgICAgICB1c2VMb2NhbFN0b3JhZ2UgPSBib29sO1xuICAgICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICBkb20uYmluZCh3aW5kb3csICd1bmxvYWQnLCBzYXZlVG9Mb2NhbFN0b3JhZ2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb20udW5iaW5kKHdpbmRvdywgJ3VubG9hZCcsIHNhdmVUb0xvY2FsU3RvcmFnZSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGdldExvY2FsU3RvcmFnZUhhc2goX3RoaXMsICdpc0xvY2FsJyksIGJvb2wpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgaWYgKENvbW1vbi5pc1VuZGVmaW5lZChwYXJhbXMucGFyZW50KSkge1xuICAgIHRoaXMuY2xvc2VkID0gcGFyYW1zLmNsb3NlZCB8fCBmYWxzZTtcbiAgICBkb20uYWRkQ2xhc3ModGhpcy5kb21FbGVtZW50LCBHVUkuQ0xBU1NfTUFJTik7XG4gICAgZG9tLm1ha2VTZWxlY3RhYmxlKHRoaXMuZG9tRWxlbWVudCwgZmFsc2UpO1xuICAgIGlmIChTVVBQT1JUU19MT0NBTF9TVE9SQUdFKSB7XG4gICAgICBpZiAodXNlTG9jYWxTdG9yYWdlKSB7XG4gICAgICAgIF90aGlzLnVzZUxvY2FsU3RvcmFnZSA9IHRydWU7XG4gICAgICAgIHZhciBzYXZlZEd1aSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGdldExvY2FsU3RvcmFnZUhhc2godGhpcywgJ2d1aScpKTtcbiAgICAgICAgaWYgKHNhdmVkR3VpKSB7XG4gICAgICAgICAgcGFyYW1zLmxvYWQgPSBKU09OLnBhcnNlKHNhdmVkR3VpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9fY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aGlzLl9fY2xvc2VCdXR0b24uaW5uZXJIVE1MID0gR1VJLlRFWFRfQ0xPU0VEO1xuICAgIGRvbS5hZGRDbGFzcyh0aGlzLl9fY2xvc2VCdXR0b24sIEdVSS5DTEFTU19DTE9TRV9CVVRUT04pO1xuICAgIGlmIChwYXJhbXMuY2xvc2VPblRvcCkge1xuICAgICAgZG9tLmFkZENsYXNzKHRoaXMuX19jbG9zZUJ1dHRvbiwgR1VJLkNMQVNTX0NMT1NFX1RPUCk7XG4gICAgICB0aGlzLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKHRoaXMuX19jbG9zZUJ1dHRvbiwgdGhpcy5kb21FbGVtZW50LmNoaWxkTm9kZXNbMF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb20uYWRkQ2xhc3ModGhpcy5fX2Nsb3NlQnV0dG9uLCBHVUkuQ0xBU1NfQ0xPU0VfQk9UVE9NKTtcbiAgICAgIHRoaXMuZG9tRWxlbWVudC5hcHBlbmRDaGlsZCh0aGlzLl9fY2xvc2VCdXR0b24pO1xuICAgIH1cbiAgICBkb20uYmluZCh0aGlzLl9fY2xvc2VCdXR0b24sICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIF90aGlzLmNsb3NlZCA9ICFfdGhpcy5jbG9zZWQ7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHBhcmFtcy5jbG9zZWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcGFyYW1zLmNsb3NlZCA9IHRydWU7XG4gICAgfVxuICAgIHZhciB0aXRsZVJvd05hbWUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShwYXJhbXMubmFtZSk7XG4gICAgZG9tLmFkZENsYXNzKHRpdGxlUm93TmFtZSwgJ2NvbnRyb2xsZXItbmFtZScpO1xuICAgIHRpdGxlUm93ID0gYWRkUm93KF90aGlzLCB0aXRsZVJvd05hbWUpO1xuICAgIHZhciBvbkNsaWNrVGl0bGUgPSBmdW5jdGlvbiBvbkNsaWNrVGl0bGUoZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgX3RoaXMuY2xvc2VkID0gIV90aGlzLmNsb3NlZDtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIGRvbS5hZGRDbGFzcyh0aGlzLl9fdWwsIEdVSS5DTEFTU19DTE9TRUQpO1xuICAgIGRvbS5hZGRDbGFzcyh0aXRsZVJvdywgJ3RpdGxlJyk7XG4gICAgZG9tLmJpbmQodGl0bGVSb3csICdjbGljaycsIG9uQ2xpY2tUaXRsZSk7XG4gICAgaWYgKCFwYXJhbXMuY2xvc2VkKSB7XG4gICAgICB0aGlzLmNsb3NlZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuICBpZiAocGFyYW1zLmF1dG9QbGFjZSkge1xuICAgIGlmIChDb21tb24uaXNVbmRlZmluZWQocGFyYW1zLnBhcmVudCkpIHtcbiAgICAgIGlmIChhdXRvUGxhY2VWaXJnaW4pIHtcbiAgICAgICAgYXV0b1BsYWNlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRvbS5hZGRDbGFzcyhhdXRvUGxhY2VDb250YWluZXIsIENTU19OQU1FU1BBQ0UpO1xuICAgICAgICBkb20uYWRkQ2xhc3MoYXV0b1BsYWNlQ29udGFpbmVyLCBHVUkuQ0xBU1NfQVVUT19QTEFDRV9DT05UQUlORVIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGF1dG9QbGFjZUNvbnRhaW5lcik7XG4gICAgICAgIGF1dG9QbGFjZVZpcmdpbiA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgYXV0b1BsYWNlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMuZG9tRWxlbWVudCk7XG4gICAgICBkb20uYWRkQ2xhc3ModGhpcy5kb21FbGVtZW50LCBHVUkuQ0xBU1NfQVVUT19QTEFDRSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5wYXJlbnQpIHtcbiAgICAgIHNldFdpZHRoKF90aGlzLCBwYXJhbXMud2lkdGgpO1xuICAgIH1cbiAgfVxuICB0aGlzLl9fcmVzaXplSGFuZGxlciA9IGZ1bmN0aW9uICgpIHtcbiAgICBfdGhpcy5vblJlc2l6ZURlYm91bmNlZCgpO1xuICB9O1xuICBkb20uYmluZCh3aW5kb3csICdyZXNpemUnLCB0aGlzLl9fcmVzaXplSGFuZGxlcik7XG4gIGRvbS5iaW5kKHRoaXMuX191bCwgJ3dlYmtpdFRyYW5zaXRpb25FbmQnLCB0aGlzLl9fcmVzaXplSGFuZGxlcik7XG4gIGRvbS5iaW5kKHRoaXMuX191bCwgJ3RyYW5zaXRpb25lbmQnLCB0aGlzLl9fcmVzaXplSGFuZGxlcik7XG4gIGRvbS5iaW5kKHRoaXMuX191bCwgJ29UcmFuc2l0aW9uRW5kJywgdGhpcy5fX3Jlc2l6ZUhhbmRsZXIpO1xuICB0aGlzLm9uUmVzaXplKCk7XG4gIGlmIChwYXJhbXMucmVzaXphYmxlKSB7XG4gICAgYWRkUmVzaXplSGFuZGxlKHRoaXMpO1xuICB9XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSA9IGZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZSgpIHtcbiAgICBpZiAoU1VQUE9SVFNfTE9DQUxfU1RPUkFHRSAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShnZXRMb2NhbFN0b3JhZ2VIYXNoKF90aGlzLCAnaXNMb2NhbCcpKSA9PT0gJ3RydWUnKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShnZXRMb2NhbFN0b3JhZ2VIYXNoKF90aGlzLCAnZ3VpJyksIEpTT04uc3RyaW5naWZ5KF90aGlzLmdldFNhdmVPYmplY3QoKSkpO1xuICAgIH1cbiAgfTtcbiAgdGhpcy5zYXZlVG9Mb2NhbFN0b3JhZ2VJZlBvc3NpYmxlID0gc2F2ZVRvTG9jYWxTdG9yYWdlO1xuICBmdW5jdGlvbiByZXNldFdpZHRoKCkge1xuICAgIHZhciByb290ID0gX3RoaXMuZ2V0Um9vdCgpO1xuICAgIHJvb3Qud2lkdGggKz0gMTtcbiAgICBDb21tb24uZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgcm9vdC53aWR0aCAtPSAxO1xuICAgIH0pO1xuICB9XG4gIGlmICghcGFyYW1zLnBhcmVudCkge1xuICAgIHJlc2V0V2lkdGgoKTtcbiAgfVxufTtcbkdVSS50b2dnbGVIaWRlID0gZnVuY3Rpb24gKCkge1xuICBoaWRlID0gIWhpZGU7XG4gIENvbW1vbi5lYWNoKGhpZGVhYmxlR3VpcywgZnVuY3Rpb24gKGd1aSkge1xuICAgIGd1aS5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBoaWRlID8gJ25vbmUnIDogJyc7XG4gIH0pO1xufTtcbkdVSS5DTEFTU19BVVRPX1BMQUNFID0gJ2EnO1xuR1VJLkNMQVNTX0FVVE9fUExBQ0VfQ09OVEFJTkVSID0gJ2FjJztcbkdVSS5DTEFTU19NQUlOID0gJ21haW4nO1xuR1VJLkNMQVNTX0NPTlRST0xMRVJfUk9XID0gJ2NyJztcbkdVSS5DTEFTU19UT09fVEFMTCA9ICd0YWxsZXItdGhhbi13aW5kb3cnO1xuR1VJLkNMQVNTX0NMT1NFRCA9ICdjbG9zZWQnO1xuR1VJLkNMQVNTX0NMT1NFX0JVVFRPTiA9ICdjbG9zZS1idXR0b24nO1xuR1VJLkNMQVNTX0NMT1NFX1RPUCA9ICdjbG9zZS10b3AnO1xuR1VJLkNMQVNTX0NMT1NFX0JPVFRPTSA9ICdjbG9zZS1ib3R0b20nO1xuR1VJLkNMQVNTX0RSQUcgPSAnZHJhZyc7XG5HVUkuREVGQVVMVF9XSURUSCA9IDI0NTtcbkdVSS5URVhUX0NMT1NFRCA9ICdDbG9zZSBDb250cm9scyc7XG5HVUkuVEVYVF9PUEVOID0gJ09wZW4gQ29udHJvbHMnO1xuR1VJLl9rZXlkb3duSGFuZGxlciA9IGZ1bmN0aW9uIChlKSB7XG4gIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50LnR5cGUgIT09ICd0ZXh0JyAmJiAoZS53aGljaCA9PT0gSElERV9LRVlfQ09ERSB8fCBlLmtleUNvZGUgPT09IEhJREVfS0VZX0NPREUpKSB7XG4gICAgR1VJLnRvZ2dsZUhpZGUoKTtcbiAgfVxufTtcbmRvbS5iaW5kKHdpbmRvdywgJ2tleWRvd24nLCBHVUkuX2tleWRvd25IYW5kbGVyLCBmYWxzZSk7XG5Db21tb24uZXh0ZW5kKEdVSS5wcm90b3R5cGUsXG57XG4gIGFkZDogZnVuY3Rpb24gYWRkKG9iamVjdCwgcHJvcGVydHkpIHtcbiAgICByZXR1cm4gX2FkZCh0aGlzLCBvYmplY3QsIHByb3BlcnR5LCB7XG4gICAgICBmYWN0b3J5QXJnczogQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKVxuICAgIH0pO1xuICB9LFxuICBhZGRDb2xvcjogZnVuY3Rpb24gYWRkQ29sb3Iob2JqZWN0LCBwcm9wZXJ0eSkge1xuICAgIHJldHVybiBfYWRkKHRoaXMsIG9iamVjdCwgcHJvcGVydHksIHtcbiAgICAgIGNvbG9yOiB0cnVlXG4gICAgfSk7XG4gIH0sXG4gIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKGNvbnRyb2xsZXIpIHtcbiAgICB0aGlzLl9fdWwucmVtb3ZlQ2hpbGQoY29udHJvbGxlci5fX2xpKTtcbiAgICB0aGlzLl9fY29udHJvbGxlcnMuc3BsaWNlKHRoaXMuX19jb250cm9sbGVycy5pbmRleE9mKGNvbnRyb2xsZXIpLCAxKTtcbiAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgIENvbW1vbi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5vblJlc2l6ZSgpO1xuICAgIH0pO1xuICB9LFxuICBkZXN0cm95OiBmdW5jdGlvbiBkZXN0cm95KCkge1xuICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPbmx5IHRoZSByb290IEdVSSBzaG91bGQgYmUgcmVtb3ZlZCB3aXRoIC5kZXN0cm95KCkuICcgKyAnRm9yIHN1YmZvbGRlcnMsIHVzZSBndWkucmVtb3ZlRm9sZGVyKGZvbGRlcikgaW5zdGVhZC4nKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuYXV0b1BsYWNlKSB7XG4gICAgICBhdXRvUGxhY2VDb250YWluZXIucmVtb3ZlQ2hpbGQodGhpcy5kb21FbGVtZW50KTtcbiAgICB9XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBDb21tb24uZWFjaCh0aGlzLl9fZm9sZGVycywgZnVuY3Rpb24gKHN1YmZvbGRlcikge1xuICAgICAgX3RoaXMucmVtb3ZlRm9sZGVyKHN1YmZvbGRlcik7XG4gICAgfSk7XG4gICAgZG9tLnVuYmluZCh3aW5kb3csICdrZXlkb3duJywgR1VJLl9rZXlkb3duSGFuZGxlciwgZmFsc2UpO1xuICAgIHJlbW92ZUxpc3RlbmVycyh0aGlzKTtcbiAgfSxcbiAgYWRkRm9sZGVyOiBmdW5jdGlvbiBhZGRGb2xkZXIobmFtZSkge1xuICAgIGlmICh0aGlzLl9fZm9sZGVyc1tuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBhbHJlYWR5IGhhdmUgYSBmb2xkZXIgaW4gdGhpcyBHVUkgYnkgdGhlJyArICcgbmFtZSBcIicgKyBuYW1lICsgJ1wiJyk7XG4gICAgfVxuICAgIHZhciBuZXdHdWlQYXJhbXMgPSB7IG5hbWU6IG5hbWUsIHBhcmVudDogdGhpcyB9O1xuICAgIG5ld0d1aVBhcmFtcy5hdXRvUGxhY2UgPSB0aGlzLmF1dG9QbGFjZTtcbiAgICBpZiAodGhpcy5sb2FkICYmXG4gICAgdGhpcy5sb2FkLmZvbGRlcnMgJiZcbiAgICB0aGlzLmxvYWQuZm9sZGVyc1tuYW1lXSkge1xuICAgICAgbmV3R3VpUGFyYW1zLmNsb3NlZCA9IHRoaXMubG9hZC5mb2xkZXJzW25hbWVdLmNsb3NlZDtcbiAgICAgIG5ld0d1aVBhcmFtcy5sb2FkID0gdGhpcy5sb2FkLmZvbGRlcnNbbmFtZV07XG4gICAgfVxuICAgIHZhciBndWkgPSBuZXcgR1VJKG5ld0d1aVBhcmFtcyk7XG4gICAgdGhpcy5fX2ZvbGRlcnNbbmFtZV0gPSBndWk7XG4gICAgdmFyIGxpID0gYWRkUm93KHRoaXMsIGd1aS5kb21FbGVtZW50KTtcbiAgICBkb20uYWRkQ2xhc3MobGksICdmb2xkZXInKTtcbiAgICByZXR1cm4gZ3VpO1xuICB9LFxuICByZW1vdmVGb2xkZXI6IGZ1bmN0aW9uIHJlbW92ZUZvbGRlcihmb2xkZXIpIHtcbiAgICB0aGlzLl9fdWwucmVtb3ZlQ2hpbGQoZm9sZGVyLmRvbUVsZW1lbnQucGFyZW50RWxlbWVudCk7XG4gICAgZGVsZXRlIHRoaXMuX19mb2xkZXJzW2ZvbGRlci5uYW1lXTtcbiAgICBpZiAodGhpcy5sb2FkICYmXG4gICAgdGhpcy5sb2FkLmZvbGRlcnMgJiZcbiAgICB0aGlzLmxvYWQuZm9sZGVyc1tmb2xkZXIubmFtZV0pIHtcbiAgICAgIGRlbGV0ZSB0aGlzLmxvYWQuZm9sZGVyc1tmb2xkZXIubmFtZV07XG4gICAgfVxuICAgIHJlbW92ZUxpc3RlbmVycyhmb2xkZXIpO1xuICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgQ29tbW9uLmVhY2goZm9sZGVyLl9fZm9sZGVycywgZnVuY3Rpb24gKHN1YmZvbGRlcikge1xuICAgICAgZm9sZGVyLnJlbW92ZUZvbGRlcihzdWJmb2xkZXIpO1xuICAgIH0pO1xuICAgIENvbW1vbi5kZWZlcihmdW5jdGlvbiAoKSB7XG4gICAgICBfdGhpcy5vblJlc2l6ZSgpO1xuICAgIH0pO1xuICB9LFxuICBvcGVuOiBmdW5jdGlvbiBvcGVuKCkge1xuICAgIHRoaXMuY2xvc2VkID0gZmFsc2U7XG4gIH0sXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICB0aGlzLmNsb3NlZCA9IHRydWU7XG4gIH0sXG4gIGhpZGU6IGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0sXG4gIHNob3c6IGZ1bmN0aW9uIHNob3coKSB7XG4gICAgdGhpcy5kb21FbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgfSxcbiAgb25SZXNpemU6IGZ1bmN0aW9uIG9uUmVzaXplKCkge1xuICAgIHZhciByb290ID0gdGhpcy5nZXRSb290KCk7XG4gICAgaWYgKHJvb3Quc2Nyb2xsYWJsZSkge1xuICAgICAgdmFyIHRvcCA9IGRvbS5nZXRPZmZzZXQocm9vdC5fX3VsKS50b3A7XG4gICAgICB2YXIgaCA9IDA7XG4gICAgICBDb21tb24uZWFjaChyb290Ll9fdWwuY2hpbGROb2RlcywgZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgaWYgKCEocm9vdC5hdXRvUGxhY2UgJiYgbm9kZSA9PT0gcm9vdC5fX3NhdmVfcm93KSkge1xuICAgICAgICAgIGggKz0gZG9tLmdldEhlaWdodChub2RlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAod2luZG93LmlubmVySGVpZ2h0IC0gdG9wIC0gQ0xPU0VfQlVUVE9OX0hFSUdIVCA8IGgpIHtcbiAgICAgICAgZG9tLmFkZENsYXNzKHJvb3QuZG9tRWxlbWVudCwgR1VJLkNMQVNTX1RPT19UQUxMKTtcbiAgICAgICAgcm9vdC5fX3VsLnN0eWxlLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAtIHRvcCAtIENMT1NFX0JVVFRPTl9IRUlHSFQgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9tLnJlbW92ZUNsYXNzKHJvb3QuZG9tRWxlbWVudCwgR1VJLkNMQVNTX1RPT19UQUxMKTtcbiAgICAgICAgcm9vdC5fX3VsLnN0eWxlLmhlaWdodCA9ICdhdXRvJztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHJvb3QuX19yZXNpemVfaGFuZGxlKSB7XG4gICAgICBDb21tb24uZGVmZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICByb290Ll9fcmVzaXplX2hhbmRsZS5zdHlsZS5oZWlnaHQgPSByb290Ll9fdWwub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocm9vdC5fX2Nsb3NlQnV0dG9uKSB7XG4gICAgICByb290Ll9fY2xvc2VCdXR0b24uc3R5bGUud2lkdGggPSByb290LndpZHRoICsgJ3B4JztcbiAgICB9XG4gIH0sXG4gIG9uUmVzaXplRGVib3VuY2VkOiBDb21tb24uZGVib3VuY2UoZnVuY3Rpb24gKCkge1xuICAgIHRoaXMub25SZXNpemUoKTtcbiAgfSwgNTApLFxuICByZW1lbWJlcjogZnVuY3Rpb24gcmVtZW1iZXIoKSB7XG4gICAgaWYgKENvbW1vbi5pc1VuZGVmaW5lZChTQVZFX0RJQUxPR1VFKSkge1xuICAgICAgU0FWRV9ESUFMT0dVRSA9IG5ldyBDZW50ZXJlZERpdigpO1xuICAgICAgU0FWRV9ESUFMT0dVRS5kb21FbGVtZW50LmlubmVySFRNTCA9IHNhdmVEaWFsb2dDb250ZW50cztcbiAgICB9XG4gICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW4gb25seSBjYWxsIHJlbWVtYmVyIG9uIGEgdG9wIGxldmVsIEdVSS4nKTtcbiAgICB9XG4gICAgdmFyIF90aGlzID0gdGhpcztcbiAgICBDb21tb24uZWFjaChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLCBmdW5jdGlvbiAob2JqZWN0KSB7XG4gICAgICBpZiAoX3RoaXMuX19yZW1lbWJlcmVkT2JqZWN0cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYWRkU2F2ZU1lbnUoX3RoaXMpO1xuICAgICAgfVxuICAgICAgaWYgKF90aGlzLl9fcmVtZW1iZXJlZE9iamVjdHMuaW5kZXhPZihvYmplY3QpID09PSAtMSkge1xuICAgICAgICBfdGhpcy5fX3JlbWVtYmVyZWRPYmplY3RzLnB1c2gob2JqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAodGhpcy5hdXRvUGxhY2UpIHtcbiAgICAgIHNldFdpZHRoKHRoaXMsIHRoaXMud2lkdGgpO1xuICAgIH1cbiAgfSxcbiAgZ2V0Um9vdDogZnVuY3Rpb24gZ2V0Um9vdCgpIHtcbiAgICB2YXIgZ3VpID0gdGhpcztcbiAgICB3aGlsZSAoZ3VpLnBhcmVudCkge1xuICAgICAgZ3VpID0gZ3VpLnBhcmVudDtcbiAgICB9XG4gICAgcmV0dXJuIGd1aTtcbiAgfSxcbiAgZ2V0U2F2ZU9iamVjdDogZnVuY3Rpb24gZ2V0U2F2ZU9iamVjdCgpIHtcbiAgICB2YXIgdG9SZXR1cm4gPSB0aGlzLmxvYWQ7XG4gICAgdG9SZXR1cm4uY2xvc2VkID0gdGhpcy5jbG9zZWQ7XG4gICAgaWYgKHRoaXMuX19yZW1lbWJlcmVkT2JqZWN0cy5sZW5ndGggPiAwKSB7XG4gICAgICB0b1JldHVybi5wcmVzZXQgPSB0aGlzLnByZXNldDtcbiAgICAgIGlmICghdG9SZXR1cm4ucmVtZW1iZXJlZCkge1xuICAgICAgICB0b1JldHVybi5yZW1lbWJlcmVkID0ge307XG4gICAgICB9XG4gICAgICB0b1JldHVybi5yZW1lbWJlcmVkW3RoaXMucHJlc2V0XSA9IGdldEN1cnJlbnRQcmVzZXQodGhpcyk7XG4gICAgfVxuICAgIHRvUmV0dXJuLmZvbGRlcnMgPSB7fTtcbiAgICBDb21tb24uZWFjaCh0aGlzLl9fZm9sZGVycywgZnVuY3Rpb24gKGVsZW1lbnQsIGtleSkge1xuICAgICAgdG9SZXR1cm4uZm9sZGVyc1trZXldID0gZWxlbWVudC5nZXRTYXZlT2JqZWN0KCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRvUmV0dXJuO1xuICB9LFxuICBzYXZlOiBmdW5jdGlvbiBzYXZlKCkge1xuICAgIGlmICghdGhpcy5sb2FkLnJlbWVtYmVyZWQpIHtcbiAgICAgIHRoaXMubG9hZC5yZW1lbWJlcmVkID0ge307XG4gICAgfVxuICAgIHRoaXMubG9hZC5yZW1lbWJlcmVkW3RoaXMucHJlc2V0XSA9IGdldEN1cnJlbnRQcmVzZXQodGhpcyk7XG4gICAgbWFya1ByZXNldE1vZGlmaWVkKHRoaXMsIGZhbHNlKTtcbiAgICB0aGlzLnNhdmVUb0xvY2FsU3RvcmFnZUlmUG9zc2libGUoKTtcbiAgfSxcbiAgc2F2ZUFzOiBmdW5jdGlvbiBzYXZlQXMocHJlc2V0TmFtZSkge1xuICAgIGlmICghdGhpcy5sb2FkLnJlbWVtYmVyZWQpIHtcbiAgICAgIHRoaXMubG9hZC5yZW1lbWJlcmVkID0ge307XG4gICAgICB0aGlzLmxvYWQucmVtZW1iZXJlZFtERUZBVUxUX0RFRkFVTFRfUFJFU0VUX05BTUVdID0gZ2V0Q3VycmVudFByZXNldCh0aGlzLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5sb2FkLnJlbWVtYmVyZWRbcHJlc2V0TmFtZV0gPSBnZXRDdXJyZW50UHJlc2V0KHRoaXMpO1xuICAgIHRoaXMucHJlc2V0ID0gcHJlc2V0TmFtZTtcbiAgICBhZGRQcmVzZXRPcHRpb24odGhpcywgcHJlc2V0TmFtZSwgdHJ1ZSk7XG4gICAgdGhpcy5zYXZlVG9Mb2NhbFN0b3JhZ2VJZlBvc3NpYmxlKCk7XG4gIH0sXG4gIHJldmVydDogZnVuY3Rpb24gcmV2ZXJ0KGd1aSkge1xuICAgIENvbW1vbi5lYWNoKHRoaXMuX19jb250cm9sbGVycywgZnVuY3Rpb24gKGNvbnRyb2xsZXIpIHtcbiAgICAgIGlmICghdGhpcy5nZXRSb290KCkubG9hZC5yZW1lbWJlcmVkKSB7XG4gICAgICAgIGNvbnRyb2xsZXIuc2V0VmFsdWUoY29udHJvbGxlci5pbml0aWFsVmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVjYWxsU2F2ZWRWYWx1ZShndWkgfHwgdGhpcy5nZXRSb290KCksIGNvbnRyb2xsZXIpO1xuICAgICAgfVxuICAgICAgaWYgKGNvbnRyb2xsZXIuX19vbkZpbmlzaENoYW5nZSkge1xuICAgICAgICBjb250cm9sbGVyLl9fb25GaW5pc2hDaGFuZ2UuY2FsbChjb250cm9sbGVyLCBjb250cm9sbGVyLmdldFZhbHVlKCkpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICAgIENvbW1vbi5lYWNoKHRoaXMuX19mb2xkZXJzLCBmdW5jdGlvbiAoZm9sZGVyKSB7XG4gICAgICBmb2xkZXIucmV2ZXJ0KGZvbGRlcik7XG4gICAgfSk7XG4gICAgaWYgKCFndWkpIHtcbiAgICAgIG1hcmtQcmVzZXRNb2RpZmllZCh0aGlzLmdldFJvb3QoKSwgZmFsc2UpO1xuICAgIH1cbiAgfSxcbiAgbGlzdGVuOiBmdW5jdGlvbiBsaXN0ZW4oY29udHJvbGxlcikge1xuICAgIHZhciBpbml0ID0gdGhpcy5fX2xpc3RlbmluZy5sZW5ndGggPT09IDA7XG4gICAgdGhpcy5fX2xpc3RlbmluZy5wdXNoKGNvbnRyb2xsZXIpO1xuICAgIGlmIChpbml0KSB7XG4gICAgICB1cGRhdGVEaXNwbGF5cyh0aGlzLl9fbGlzdGVuaW5nKTtcbiAgICB9XG4gIH0sXG4gIHVwZGF0ZURpc3BsYXk6IGZ1bmN0aW9uIHVwZGF0ZURpc3BsYXkoKSB7XG4gICAgQ29tbW9uLmVhY2godGhpcy5fX2NvbnRyb2xsZXJzLCBmdW5jdGlvbiAoY29udHJvbGxlcikge1xuICAgICAgY29udHJvbGxlci51cGRhdGVEaXNwbGF5KCk7XG4gICAgfSk7XG4gICAgQ29tbW9uLmVhY2godGhpcy5fX2ZvbGRlcnMsIGZ1bmN0aW9uIChmb2xkZXIpIHtcbiAgICAgIGZvbGRlci51cGRhdGVEaXNwbGF5KCk7XG4gICAgfSk7XG4gIH1cbn0pO1xuZnVuY3Rpb24gYWRkUm93KGd1aSwgbmV3RG9tLCBsaUJlZm9yZSkge1xuICB2YXIgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBpZiAobmV3RG9tKSB7XG4gICAgbGkuYXBwZW5kQ2hpbGQobmV3RG9tKTtcbiAgfVxuICBpZiAobGlCZWZvcmUpIHtcbiAgICBndWkuX191bC5pbnNlcnRCZWZvcmUobGksIGxpQmVmb3JlKTtcbiAgfSBlbHNlIHtcbiAgICBndWkuX191bC5hcHBlbmRDaGlsZChsaSk7XG4gIH1cbiAgZ3VpLm9uUmVzaXplKCk7XG4gIHJldHVybiBsaTtcbn1cbmZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVycyhndWkpIHtcbiAgZG9tLnVuYmluZCh3aW5kb3csICdyZXNpemUnLCBndWkuX19yZXNpemVIYW5kbGVyKTtcbiAgaWYgKGd1aS5zYXZlVG9Mb2NhbFN0b3JhZ2VJZlBvc3NpYmxlKSB7XG4gICAgZG9tLnVuYmluZCh3aW5kb3csICd1bmxvYWQnLCBndWkuc2F2ZVRvTG9jYWxTdG9yYWdlSWZQb3NzaWJsZSk7XG4gIH1cbn1cbmZ1bmN0aW9uIG1hcmtQcmVzZXRNb2RpZmllZChndWksIG1vZGlmaWVkKSB7XG4gIHZhciBvcHQgPSBndWkuX19wcmVzZXRfc2VsZWN0W2d1aS5fX3ByZXNldF9zZWxlY3Quc2VsZWN0ZWRJbmRleF07XG4gIGlmIChtb2RpZmllZCkge1xuICAgIG9wdC5pbm5lckhUTUwgPSBvcHQudmFsdWUgKyAnKic7XG4gIH0gZWxzZSB7XG4gICAgb3B0LmlubmVySFRNTCA9IG9wdC52YWx1ZTtcbiAgfVxufVxuZnVuY3Rpb24gYXVnbWVudENvbnRyb2xsZXIoZ3VpLCBsaSwgY29udHJvbGxlcikge1xuICBjb250cm9sbGVyLl9fbGkgPSBsaTtcbiAgY29udHJvbGxlci5fX2d1aSA9IGd1aTtcbiAgQ29tbW9uLmV4dGVuZChjb250cm9sbGVyLCB7XG4gICAgb3B0aW9uczogZnVuY3Rpb24gb3B0aW9ucyhfb3B0aW9ucykge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIHZhciBuZXh0U2libGluZyA9IGNvbnRyb2xsZXIuX19saS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnRyb2xsZXIucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiBfYWRkKGd1aSwgY29udHJvbGxlci5vYmplY3QsIGNvbnRyb2xsZXIucHJvcGVydHksIHtcbiAgICAgICAgICBiZWZvcmU6IG5leHRTaWJsaW5nLFxuICAgICAgICAgIGZhY3RvcnlBcmdzOiBbQ29tbW9uLnRvQXJyYXkoYXJndW1lbnRzKV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBpZiAoQ29tbW9uLmlzQXJyYXkoX29wdGlvbnMpIHx8IENvbW1vbi5pc09iamVjdChfb3B0aW9ucykpIHtcbiAgICAgICAgdmFyIF9uZXh0U2libGluZyA9IGNvbnRyb2xsZXIuX19saS5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgICAgIGNvbnRyb2xsZXIucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybiBfYWRkKGd1aSwgY29udHJvbGxlci5vYmplY3QsIGNvbnRyb2xsZXIucHJvcGVydHksIHtcbiAgICAgICAgICBiZWZvcmU6IF9uZXh0U2libGluZyxcbiAgICAgICAgICBmYWN0b3J5QXJnczogW19vcHRpb25zXVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9LFxuICAgIG5hbWU6IGZ1bmN0aW9uIG5hbWUoX25hbWUpIHtcbiAgICAgIGNvbnRyb2xsZXIuX19saS5maXJzdEVsZW1lbnRDaGlsZC5maXJzdEVsZW1lbnRDaGlsZC5pbm5lckhUTUwgPSBfbmFtZTtcbiAgICAgIHJldHVybiBjb250cm9sbGVyO1xuICAgIH0sXG4gICAgbGlzdGVuOiBmdW5jdGlvbiBsaXN0ZW4oKSB7XG4gICAgICBjb250cm9sbGVyLl9fZ3VpLmxpc3Rlbihjb250cm9sbGVyKTtcbiAgICAgIHJldHVybiBjb250cm9sbGVyO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICBjb250cm9sbGVyLl9fZ3VpLnJlbW92ZShjb250cm9sbGVyKTtcbiAgICAgIHJldHVybiBjb250cm9sbGVyO1xuICAgIH1cbiAgfSk7XG4gIGlmIChjb250cm9sbGVyIGluc3RhbmNlb2YgTnVtYmVyQ29udHJvbGxlclNsaWRlcikge1xuICAgIHZhciBib3ggPSBuZXcgTnVtYmVyQ29udHJvbGxlckJveChjb250cm9sbGVyLm9iamVjdCwgY29udHJvbGxlci5wcm9wZXJ0eSwgeyBtaW46IGNvbnRyb2xsZXIuX19taW4sIG1heDogY29udHJvbGxlci5fX21heCwgc3RlcDogY29udHJvbGxlci5fX3N0ZXAgfSk7XG4gICAgQ29tbW9uLmVhY2goWyd1cGRhdGVEaXNwbGF5JywgJ29uQ2hhbmdlJywgJ29uRmluaXNoQ2hhbmdlJywgJ3N0ZXAnLCAnbWluJywgJ21heCddLCBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICB2YXIgcGMgPSBjb250cm9sbGVyW21ldGhvZF07XG4gICAgICB2YXIgcGIgPSBib3hbbWV0aG9kXTtcbiAgICAgIGNvbnRyb2xsZXJbbWV0aG9kXSA9IGJveFttZXRob2RdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgIHBiLmFwcGx5KGJveCwgYXJncyk7XG4gICAgICAgIHJldHVybiBwYy5hcHBseShjb250cm9sbGVyLCBhcmdzKTtcbiAgICAgIH07XG4gICAgfSk7XG4gICAgZG9tLmFkZENsYXNzKGxpLCAnaGFzLXNsaWRlcicpO1xuICAgIGNvbnRyb2xsZXIuZG9tRWxlbWVudC5pbnNlcnRCZWZvcmUoYm94LmRvbUVsZW1lbnQsIGNvbnRyb2xsZXIuZG9tRWxlbWVudC5maXJzdEVsZW1lbnRDaGlsZCk7XG4gIH0gZWxzZSBpZiAoY29udHJvbGxlciBpbnN0YW5jZW9mIE51bWJlckNvbnRyb2xsZXJCb3gpIHtcbiAgICB2YXIgciA9IGZ1bmN0aW9uIHIocmV0dXJuZWQpIHtcbiAgICAgIGlmIChDb21tb24uaXNOdW1iZXIoY29udHJvbGxlci5fX21pbikgJiYgQ29tbW9uLmlzTnVtYmVyKGNvbnRyb2xsZXIuX19tYXgpKSB7XG4gICAgICAgIHZhciBvbGROYW1lID0gY29udHJvbGxlci5fX2xpLmZpcnN0RWxlbWVudENoaWxkLmZpcnN0RWxlbWVudENoaWxkLmlubmVySFRNTDtcbiAgICAgICAgdmFyIHdhc0xpc3RlbmluZyA9IGNvbnRyb2xsZXIuX19ndWkuX19saXN0ZW5pbmcuaW5kZXhPZihjb250cm9sbGVyKSA+IC0xO1xuICAgICAgICBjb250cm9sbGVyLnJlbW92ZSgpO1xuICAgICAgICB2YXIgbmV3Q29udHJvbGxlciA9IF9hZGQoZ3VpLCBjb250cm9sbGVyLm9iamVjdCwgY29udHJvbGxlci5wcm9wZXJ0eSwge1xuICAgICAgICAgIGJlZm9yZTogY29udHJvbGxlci5fX2xpLm5leHRFbGVtZW50U2libGluZyxcbiAgICAgICAgICBmYWN0b3J5QXJnczogW2NvbnRyb2xsZXIuX19taW4sIGNvbnRyb2xsZXIuX19tYXgsIGNvbnRyb2xsZXIuX19zdGVwXVxuICAgICAgICB9KTtcbiAgICAgICAgbmV3Q29udHJvbGxlci5uYW1lKG9sZE5hbWUpO1xuICAgICAgICBpZiAod2FzTGlzdGVuaW5nKSBuZXdDb250cm9sbGVyLmxpc3RlbigpO1xuICAgICAgICByZXR1cm4gbmV3Q29udHJvbGxlcjtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXR1cm5lZDtcbiAgICB9O1xuICAgIGNvbnRyb2xsZXIubWluID0gQ29tbW9uLmNvbXBvc2UociwgY29udHJvbGxlci5taW4pO1xuICAgIGNvbnRyb2xsZXIubWF4ID0gQ29tbW9uLmNvbXBvc2UociwgY29udHJvbGxlci5tYXgpO1xuICB9IGVsc2UgaWYgKGNvbnRyb2xsZXIgaW5zdGFuY2VvZiBCb29sZWFuQ29udHJvbGxlcikge1xuICAgIGRvbS5iaW5kKGxpLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkb20uZmFrZUV2ZW50KGNvbnRyb2xsZXIuX19jaGVja2JveCwgJ2NsaWNrJyk7XG4gICAgfSk7XG4gICAgZG9tLmJpbmQoY29udHJvbGxlci5fX2NoZWNrYm94LCAnY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyIGluc3RhbmNlb2YgRnVuY3Rpb25Db250cm9sbGVyKSB7XG4gICAgZG9tLmJpbmQobGksICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5mYWtlRXZlbnQoY29udHJvbGxlci5fX2J1dHRvbiwgJ2NsaWNrJyk7XG4gICAgfSk7XG4gICAgZG9tLmJpbmQobGksICdtb3VzZW92ZXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBkb20uYWRkQ2xhc3MoY29udHJvbGxlci5fX2J1dHRvbiwgJ2hvdmVyJyk7XG4gICAgfSk7XG4gICAgZG9tLmJpbmQobGksICdtb3VzZW91dCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGRvbS5yZW1vdmVDbGFzcyhjb250cm9sbGVyLl9fYnV0dG9uLCAnaG92ZXInKTtcbiAgICB9KTtcbiAgfSBlbHNlIGlmIChjb250cm9sbGVyIGluc3RhbmNlb2YgQ29sb3JDb250cm9sbGVyKSB7XG4gICAgZG9tLmFkZENsYXNzKGxpLCAnY29sb3InKTtcbiAgICBjb250cm9sbGVyLnVwZGF0ZURpc3BsYXkgPSBDb21tb24uY29tcG9zZShmdW5jdGlvbiAodmFsKSB7XG4gICAgICBsaS5zdHlsZS5ib3JkZXJMZWZ0Q29sb3IgPSBjb250cm9sbGVyLl9fY29sb3IudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiB2YWw7XG4gICAgfSwgY29udHJvbGxlci51cGRhdGVEaXNwbGF5KTtcbiAgICBjb250cm9sbGVyLnVwZGF0ZURpc3BsYXkoKTtcbiAgfVxuICBjb250cm9sbGVyLnNldFZhbHVlID0gQ29tbW9uLmNvbXBvc2UoZnVuY3Rpb24gKHZhbCkge1xuICAgIGlmIChndWkuZ2V0Um9vdCgpLl9fcHJlc2V0X3NlbGVjdCAmJiBjb250cm9sbGVyLmlzTW9kaWZpZWQoKSkge1xuICAgICAgbWFya1ByZXNldE1vZGlmaWVkKGd1aS5nZXRSb290KCksIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsO1xuICB9LCBjb250cm9sbGVyLnNldFZhbHVlKTtcbn1cbmZ1bmN0aW9uIHJlY2FsbFNhdmVkVmFsdWUoZ3VpLCBjb250cm9sbGVyKSB7XG4gIHZhciByb290ID0gZ3VpLmdldFJvb3QoKTtcbiAgdmFyIG1hdGNoZWRJbmRleCA9IHJvb3QuX19yZW1lbWJlcmVkT2JqZWN0cy5pbmRleE9mKGNvbnRyb2xsZXIub2JqZWN0KTtcbiAgaWYgKG1hdGNoZWRJbmRleCAhPT0gLTEpIHtcbiAgICB2YXIgY29udHJvbGxlck1hcCA9IHJvb3QuX19yZW1lbWJlcmVkT2JqZWN0SW5kZWNlc1RvQ29udHJvbGxlcnNbbWF0Y2hlZEluZGV4XTtcbiAgICBpZiAoY29udHJvbGxlck1hcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb250cm9sbGVyTWFwID0ge307XG4gICAgICByb290Ll9fcmVtZW1iZXJlZE9iamVjdEluZGVjZXNUb0NvbnRyb2xsZXJzW21hdGNoZWRJbmRleF0gPSBjb250cm9sbGVyTWFwO1xuICAgIH1cbiAgICBjb250cm9sbGVyTWFwW2NvbnRyb2xsZXIucHJvcGVydHldID0gY29udHJvbGxlcjtcbiAgICBpZiAocm9vdC5sb2FkICYmIHJvb3QubG9hZC5yZW1lbWJlcmVkKSB7XG4gICAgICB2YXIgcHJlc2V0TWFwID0gcm9vdC5sb2FkLnJlbWVtYmVyZWQ7XG4gICAgICB2YXIgcHJlc2V0ID0gdm9pZCAwO1xuICAgICAgaWYgKHByZXNldE1hcFtndWkucHJlc2V0XSkge1xuICAgICAgICBwcmVzZXQgPSBwcmVzZXRNYXBbZ3VpLnByZXNldF07XG4gICAgICB9IGVsc2UgaWYgKHByZXNldE1hcFtERUZBVUxUX0RFRkFVTFRfUFJFU0VUX05BTUVdKSB7XG4gICAgICAgIHByZXNldCA9IHByZXNldE1hcFtERUZBVUxUX0RFRkFVTFRfUFJFU0VUX05BTUVdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHByZXNldFttYXRjaGVkSW5kZXhdICYmIHByZXNldFttYXRjaGVkSW5kZXhdW2NvbnRyb2xsZXIucHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gcHJlc2V0W21hdGNoZWRJbmRleF1bY29udHJvbGxlci5wcm9wZXJ0eV07XG4gICAgICAgIGNvbnRyb2xsZXIuaW5pdGlhbFZhbHVlID0gdmFsdWU7XG4gICAgICAgIGNvbnRyb2xsZXIuc2V0VmFsdWUodmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gX2FkZChndWksIG9iamVjdCwgcHJvcGVydHksIHBhcmFtcykge1xuICBpZiAob2JqZWN0W3Byb3BlcnR5XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdPYmplY3QgXCInICsgb2JqZWN0ICsgJ1wiIGhhcyBubyBwcm9wZXJ0eSBcIicgKyBwcm9wZXJ0eSArICdcIicpO1xuICB9XG4gIHZhciBjb250cm9sbGVyID0gdm9pZCAwO1xuICBpZiAocGFyYW1zLmNvbG9yKSB7XG4gICAgY29udHJvbGxlciA9IG5ldyBDb2xvckNvbnRyb2xsZXIob2JqZWN0LCBwcm9wZXJ0eSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGZhY3RvcnlBcmdzID0gW29iamVjdCwgcHJvcGVydHldLmNvbmNhdChwYXJhbXMuZmFjdG9yeUFyZ3MpO1xuICAgIGNvbnRyb2xsZXIgPSBDb250cm9sbGVyRmFjdG9yeS5hcHBseShndWksIGZhY3RvcnlBcmdzKTtcbiAgfVxuICBpZiAocGFyYW1zLmJlZm9yZSBpbnN0YW5jZW9mIENvbnRyb2xsZXIpIHtcbiAgICBwYXJhbXMuYmVmb3JlID0gcGFyYW1zLmJlZm9yZS5fX2xpO1xuICB9XG4gIHJlY2FsbFNhdmVkVmFsdWUoZ3VpLCBjb250cm9sbGVyKTtcbiAgZG9tLmFkZENsYXNzKGNvbnRyb2xsZXIuZG9tRWxlbWVudCwgJ2MnKTtcbiAgdmFyIG5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGRvbS5hZGRDbGFzcyhuYW1lLCAncHJvcGVydHktbmFtZScpO1xuICBuYW1lLmlubmVySFRNTCA9IGNvbnRyb2xsZXIucHJvcGVydHk7XG4gIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5hbWUpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udHJvbGxlci5kb21FbGVtZW50KTtcbiAgdmFyIGxpID0gYWRkUm93KGd1aSwgY29udGFpbmVyLCBwYXJhbXMuYmVmb3JlKTtcbiAgZG9tLmFkZENsYXNzKGxpLCBHVUkuQ0xBU1NfQ09OVFJPTExFUl9ST1cpO1xuICBpZiAoY29udHJvbGxlciBpbnN0YW5jZW9mIENvbG9yQ29udHJvbGxlcikge1xuICAgIGRvbS5hZGRDbGFzcyhsaSwgJ2NvbG9yJyk7XG4gIH0gZWxzZSB7XG4gICAgZG9tLmFkZENsYXNzKGxpLCBfdHlwZW9mKGNvbnRyb2xsZXIuZ2V0VmFsdWUoKSkpO1xuICB9XG4gIGF1Z21lbnRDb250cm9sbGVyKGd1aSwgbGksIGNvbnRyb2xsZXIpO1xuICBndWkuX19jb250cm9sbGVycy5wdXNoKGNvbnRyb2xsZXIpO1xuICByZXR1cm4gY29udHJvbGxlcjtcbn1cbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZUhhc2goZ3VpLCBrZXkpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmxvY2F0aW9uLmhyZWYgKyAnLicgKyBrZXk7XG59XG5mdW5jdGlvbiBhZGRQcmVzZXRPcHRpb24oZ3VpLCBuYW1lLCBzZXRTZWxlY3RlZCkge1xuICB2YXIgb3B0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gIG9wdC5pbm5lckhUTUwgPSBuYW1lO1xuICBvcHQudmFsdWUgPSBuYW1lO1xuICBndWkuX19wcmVzZXRfc2VsZWN0LmFwcGVuZENoaWxkKG9wdCk7XG4gIGlmIChzZXRTZWxlY3RlZCkge1xuICAgIGd1aS5fX3ByZXNldF9zZWxlY3Quc2VsZWN0ZWRJbmRleCA9IGd1aS5fX3ByZXNldF9zZWxlY3QubGVuZ3RoIC0gMTtcbiAgfVxufVxuZnVuY3Rpb24gc2hvd0hpZGVFeHBsYWluKGd1aSwgZXhwbGFpbikge1xuICBleHBsYWluLnN0eWxlLmRpc3BsYXkgPSBndWkudXNlTG9jYWxTdG9yYWdlID8gJ2Jsb2NrJyA6ICdub25lJztcbn1cbmZ1bmN0aW9uIGFkZFNhdmVNZW51KGd1aSkge1xuICB2YXIgZGl2ID0gZ3VpLl9fc2F2ZV9yb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBkb20uYWRkQ2xhc3MoZ3VpLmRvbUVsZW1lbnQsICdoYXMtc2F2ZScpO1xuICBndWkuX191bC5pbnNlcnRCZWZvcmUoZGl2LCBndWkuX191bC5maXJzdENoaWxkKTtcbiAgZG9tLmFkZENsYXNzKGRpdiwgJ3NhdmUtcm93Jyk7XG4gIHZhciBnZWFycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZ2VhcnMuaW5uZXJIVE1MID0gJyZuYnNwOyc7XG4gIGRvbS5hZGRDbGFzcyhnZWFycywgJ2J1dHRvbiBnZWFycycpO1xuICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBidXR0b24uaW5uZXJIVE1MID0gJ1NhdmUnO1xuICBkb20uYWRkQ2xhc3MoYnV0dG9uLCAnYnV0dG9uJyk7XG4gIGRvbS5hZGRDbGFzcyhidXR0b24sICdzYXZlJyk7XG4gIHZhciBidXR0b24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBidXR0b24yLmlubmVySFRNTCA9ICdOZXcnO1xuICBkb20uYWRkQ2xhc3MoYnV0dG9uMiwgJ2J1dHRvbicpO1xuICBkb20uYWRkQ2xhc3MoYnV0dG9uMiwgJ3NhdmUtYXMnKTtcbiAgdmFyIGJ1dHRvbjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGJ1dHRvbjMuaW5uZXJIVE1MID0gJ1JldmVydCc7XG4gIGRvbS5hZGRDbGFzcyhidXR0b24zLCAnYnV0dG9uJyk7XG4gIGRvbS5hZGRDbGFzcyhidXR0b24zLCAncmV2ZXJ0Jyk7XG4gIHZhciBzZWxlY3QgPSBndWkuX19wcmVzZXRfc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIGlmIChndWkubG9hZCAmJiBndWkubG9hZC5yZW1lbWJlcmVkKSB7XG4gICAgQ29tbW9uLmVhY2goZ3VpLmxvYWQucmVtZW1iZXJlZCwgZnVuY3Rpb24gKHZhbHVlLCBrZXkpIHtcbiAgICAgIGFkZFByZXNldE9wdGlvbihndWksIGtleSwga2V5ID09PSBndWkucHJlc2V0KTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBhZGRQcmVzZXRPcHRpb24oZ3VpLCBERUZBVUxUX0RFRkFVTFRfUFJFU0VUX05BTUUsIGZhbHNlKTtcbiAgfVxuICBkb20uYmluZChzZWxlY3QsICdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgZm9yICh2YXIgaW5kZXggPSAwOyBpbmRleCA8IGd1aS5fX3ByZXNldF9zZWxlY3QubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBndWkuX19wcmVzZXRfc2VsZWN0W2luZGV4XS5pbm5lckhUTUwgPSBndWkuX19wcmVzZXRfc2VsZWN0W2luZGV4XS52YWx1ZTtcbiAgICB9XG4gICAgZ3VpLnByZXNldCA9IHRoaXMudmFsdWU7XG4gIH0pO1xuICBkaXYuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgZGl2LmFwcGVuZENoaWxkKGdlYXJzKTtcbiAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gIGRpdi5hcHBlbmRDaGlsZChidXR0b24yKTtcbiAgZGl2LmFwcGVuZENoaWxkKGJ1dHRvbjMpO1xuICBpZiAoU1VQUE9SVFNfTE9DQUxfU1RPUkFHRSkge1xuICAgIHZhciBleHBsYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RnLWxvY2FsLWV4cGxhaW4nKTtcbiAgICB2YXIgbG9jYWxTdG9yYWdlQ2hlY2tCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGctbG9jYWwtc3RvcmFnZScpO1xuICAgIHZhciBzYXZlTG9jYWxseSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZy1zYXZlLWxvY2FsbHknKTtcbiAgICBzYXZlTG9jYWxseS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oZ2V0TG9jYWxTdG9yYWdlSGFzaChndWksICdpc0xvY2FsJykpID09PSAndHJ1ZScpIHtcbiAgICAgIGxvY2FsU3RvcmFnZUNoZWNrQm94LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG4gICAgfVxuICAgIHNob3dIaWRlRXhwbGFpbihndWksIGV4cGxhaW4pO1xuICAgIGRvbS5iaW5kKGxvY2FsU3RvcmFnZUNoZWNrQm94LCAnY2hhbmdlJywgZnVuY3Rpb24gKCkge1xuICAgICAgZ3VpLnVzZUxvY2FsU3RvcmFnZSA9ICFndWkudXNlTG9jYWxTdG9yYWdlO1xuICAgICAgc2hvd0hpZGVFeHBsYWluKGd1aSwgZXhwbGFpbik7XG4gICAgfSk7XG4gIH1cbiAgdmFyIG5ld0NvbnN0cnVjdG9yVGV4dEFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGctbmV3LWNvbnN0cnVjdG9yJyk7XG4gIGRvbS5iaW5kKG5ld0NvbnN0cnVjdG9yVGV4dEFyZWEsICdrZXlkb3duJywgZnVuY3Rpb24gKGUpIHtcbiAgICBpZiAoZS5tZXRhS2V5ICYmIChlLndoaWNoID09PSA2NyB8fCBlLmtleUNvZGUgPT09IDY3KSkge1xuICAgICAgU0FWRV9ESUFMT0dVRS5oaWRlKCk7XG4gICAgfVxuICB9KTtcbiAgZG9tLmJpbmQoZ2VhcnMsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBuZXdDb25zdHJ1Y3RvclRleHRBcmVhLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KGd1aS5nZXRTYXZlT2JqZWN0KCksIHVuZGVmaW5lZCwgMik7XG4gICAgU0FWRV9ESUFMT0dVRS5zaG93KCk7XG4gICAgbmV3Q29uc3RydWN0b3JUZXh0QXJlYS5mb2N1cygpO1xuICAgIG5ld0NvbnN0cnVjdG9yVGV4dEFyZWEuc2VsZWN0KCk7XG4gIH0pO1xuICBkb20uYmluZChidXR0b24sICdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBndWkuc2F2ZSgpO1xuICB9KTtcbiAgZG9tLmJpbmQoYnV0dG9uMiwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcmVzZXROYW1lID0gcHJvbXB0KCdFbnRlciBhIG5ldyBwcmVzZXQgbmFtZS4nKTtcbiAgICBpZiAocHJlc2V0TmFtZSkge1xuICAgICAgZ3VpLnNhdmVBcyhwcmVzZXROYW1lKTtcbiAgICB9XG4gIH0pO1xuICBkb20uYmluZChidXR0b24zLCAnY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZ3VpLnJldmVydCgpO1xuICB9KTtcbn1cbmZ1bmN0aW9uIGFkZFJlc2l6ZUhhbmRsZShndWkpIHtcbiAgdmFyIHBtb3VzZVggPSB2b2lkIDA7XG4gIGd1aS5fX3Jlc2l6ZV9oYW5kbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgQ29tbW9uLmV4dGVuZChndWkuX19yZXNpemVfaGFuZGxlLnN0eWxlLCB7XG4gICAgd2lkdGg6ICc2cHgnLFxuICAgIG1hcmdpbkxlZnQ6ICctM3B4JyxcbiAgICBoZWlnaHQ6ICcyMDBweCcsXG4gICAgY3Vyc29yOiAnZXctcmVzaXplJyxcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJ1xuICB9KTtcbiAgZnVuY3Rpb24gZHJhZyhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGd1aS53aWR0aCArPSBwbW91c2VYIC0gZS5jbGllbnRYO1xuICAgIGd1aS5vblJlc2l6ZSgpO1xuICAgIHBtb3VzZVggPSBlLmNsaWVudFg7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGZ1bmN0aW9uIGRyYWdTdG9wKCkge1xuICAgIGRvbS5yZW1vdmVDbGFzcyhndWkuX19jbG9zZUJ1dHRvbiwgR1VJLkNMQVNTX0RSQUcpO1xuICAgIGRvbS51bmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgZG9tLnVuYmluZCh3aW5kb3csICdtb3VzZXVwJywgZHJhZ1N0b3ApO1xuICB9XG4gIGZ1bmN0aW9uIGRyYWdTdGFydChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHBtb3VzZVggPSBlLmNsaWVudFg7XG4gICAgZG9tLmFkZENsYXNzKGd1aS5fX2Nsb3NlQnV0dG9uLCBHVUkuQ0xBU1NfRFJBRyk7XG4gICAgZG9tLmJpbmQod2luZG93LCAnbW91c2Vtb3ZlJywgZHJhZyk7XG4gICAgZG9tLmJpbmQod2luZG93LCAnbW91c2V1cCcsIGRyYWdTdG9wKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgZG9tLmJpbmQoZ3VpLl9fcmVzaXplX2hhbmRsZSwgJ21vdXNlZG93bicsIGRyYWdTdGFydCk7XG4gIGRvbS5iaW5kKGd1aS5fX2Nsb3NlQnV0dG9uLCAnbW91c2Vkb3duJywgZHJhZ1N0YXJ0KTtcbiAgZ3VpLmRvbUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGd1aS5fX3Jlc2l6ZV9oYW5kbGUsIGd1aS5kb21FbGVtZW50LmZpcnN0RWxlbWVudENoaWxkKTtcbn1cbmZ1bmN0aW9uIHNldFdpZHRoKGd1aSwgdykge1xuICBndWkuZG9tRWxlbWVudC5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xuICBpZiAoZ3VpLl9fc2F2ZV9yb3cgJiYgZ3VpLmF1dG9QbGFjZSkge1xuICAgIGd1aS5fX3NhdmVfcm93LnN0eWxlLndpZHRoID0gdyArICdweCc7XG4gIH1cbiAgaWYgKGd1aS5fX2Nsb3NlQnV0dG9uKSB7XG4gICAgZ3VpLl9fY2xvc2VCdXR0b24uc3R5bGUud2lkdGggPSB3ICsgJ3B4JztcbiAgfVxufVxuZnVuY3Rpb24gZ2V0Q3VycmVudFByZXNldChndWksIHVzZUluaXRpYWxWYWx1ZXMpIHtcbiAgdmFyIHRvUmV0dXJuID0ge307XG4gIENvbW1vbi5lYWNoKGd1aS5fX3JlbWVtYmVyZWRPYmplY3RzLCBmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgIHZhciBzYXZlZFZhbHVlcyA9IHt9O1xuICAgIHZhciBjb250cm9sbGVyTWFwID0gZ3VpLl9fcmVtZW1iZXJlZE9iamVjdEluZGVjZXNUb0NvbnRyb2xsZXJzW2luZGV4XTtcbiAgICBDb21tb24uZWFjaChjb250cm9sbGVyTWFwLCBmdW5jdGlvbiAoY29udHJvbGxlciwgcHJvcGVydHkpIHtcbiAgICAgIHNhdmVkVmFsdWVzW3Byb3BlcnR5XSA9IHVzZUluaXRpYWxWYWx1ZXMgPyBjb250cm9sbGVyLmluaXRpYWxWYWx1ZSA6IGNvbnRyb2xsZXIuZ2V0VmFsdWUoKTtcbiAgICB9KTtcbiAgICB0b1JldHVybltpbmRleF0gPSBzYXZlZFZhbHVlcztcbiAgfSk7XG4gIHJldHVybiB0b1JldHVybjtcbn1cbmZ1bmN0aW9uIHNldFByZXNldFNlbGVjdEluZGV4KGd1aSkge1xuICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgZ3VpLl9fcHJlc2V0X3NlbGVjdC5sZW5ndGg7IGluZGV4KyspIHtcbiAgICBpZiAoZ3VpLl9fcHJlc2V0X3NlbGVjdFtpbmRleF0udmFsdWUgPT09IGd1aS5wcmVzZXQpIHtcbiAgICAgIGd1aS5fX3ByZXNldF9zZWxlY3Quc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gdXBkYXRlRGlzcGxheXMoY29udHJvbGxlckFycmF5KSB7XG4gIGlmIChjb250cm9sbGVyQXJyYXkubGVuZ3RoICE9PSAwKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lJDEuY2FsbCh3aW5kb3csIGZ1bmN0aW9uICgpIHtcbiAgICAgIHVwZGF0ZURpc3BsYXlzKGNvbnRyb2xsZXJBcnJheSk7XG4gICAgfSk7XG4gIH1cbiAgQ29tbW9uLmVhY2goY29udHJvbGxlckFycmF5LCBmdW5jdGlvbiAoYykge1xuICAgIGMudXBkYXRlRGlzcGxheSgpO1xuICB9KTtcbn1cblxudmFyIGNvbG9yID0ge1xuICBDb2xvcjogQ29sb3IsXG4gIG1hdGg6IENvbG9yTWF0aCxcbiAgaW50ZXJwcmV0OiBpbnRlcnByZXRcbn07XG52YXIgY29udHJvbGxlcnMgPSB7XG4gIENvbnRyb2xsZXI6IENvbnRyb2xsZXIsXG4gIEJvb2xlYW5Db250cm9sbGVyOiBCb29sZWFuQ29udHJvbGxlcixcbiAgT3B0aW9uQ29udHJvbGxlcjogT3B0aW9uQ29udHJvbGxlcixcbiAgU3RyaW5nQ29udHJvbGxlcjogU3RyaW5nQ29udHJvbGxlcixcbiAgTnVtYmVyQ29udHJvbGxlcjogTnVtYmVyQ29udHJvbGxlcixcbiAgTnVtYmVyQ29udHJvbGxlckJveDogTnVtYmVyQ29udHJvbGxlckJveCxcbiAgTnVtYmVyQ29udHJvbGxlclNsaWRlcjogTnVtYmVyQ29udHJvbGxlclNsaWRlcixcbiAgRnVuY3Rpb25Db250cm9sbGVyOiBGdW5jdGlvbkNvbnRyb2xsZXIsXG4gIENvbG9yQ29udHJvbGxlcjogQ29sb3JDb250cm9sbGVyXG59O1xudmFyIGRvbSQxID0geyBkb206IGRvbSB9O1xudmFyIGd1aSA9IHsgR1VJOiBHVUkgfTtcbnZhciBHVUkkMSA9IEdVSTtcbnZhciBpbmRleCA9IHtcbiAgY29sb3I6IGNvbG9yLFxuICBjb250cm9sbGVyczogY29udHJvbGxlcnMsXG4gIGRvbTogZG9tJDEsXG4gIGd1aTogZ3VpLFxuICBHVUk6IEdVSSQxXG59O1xuXG5leHBvcnQgeyBjb2xvciwgY29udHJvbGxlcnMsIGRvbSQxIGFzIGRvbSwgZ3VpLCBHVUkkMSBhcyBHVUkgfTtcbmV4cG9ydCBkZWZhdWx0IGluZGV4O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0Lmd1aS5tb2R1bGUuanMubWFwXG4iLCJpbXBvcnQgRW50aXR5IGZyb20gJy4vRW50aXR5JztcbmltcG9ydCBDYW1lcmEsIHsgQ2FtZXJhQm91bmRzIH0gZnJvbSAnLi9DYW1lcmEnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCYWNrZ3JvdW5kIGltcGxlbWVudHMgRW50aXR5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBsYXJnZUdyaWRTaXplOiBudW1iZXIgPSAzMDA7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGFyZ2VHcmlkV2lkdGg6IG51bWJlciA9IDI7XG4gIHByaXZhdGUgcmVhZG9ubHkgbGFyZ2VHcmlkQ29sb3VyOiBzdHJpbmcgPSAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpJztcblxuICBwcml2YXRlIHJlYWRvbmx5IHNtYWxsR3JpZFNpemU6IG51bWJlciA9IDEwMDtcbiAgcHJpdmF0ZSByZWFkb25seSBzbWFsbEdyaWRXaWR0aDogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSByZWFkb25seSBzbWFsbEdyaWRDb2xvdXI6IHN0cmluZyA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSknO1xuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge31cblxuICBwdWJsaWMgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIGNhbWVyYTogQ2FtZXJhKTogdm9pZCB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29uc3QgYm91bmRzID0gY2FtZXJhLmJvdW5kcztcblxuICAgIC8vIExhcmdlIGdyaWRcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5sYXJnZUdyaWRDb2xvdXI7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSB0aGlzLmxhcmdlR3JpZFdpZHRoO1xuICAgIHRoaXMuZHJhd0dyaWQoXG4gICAgICBjb250ZXh0LFxuICAgICAgdGhpcy5sYXJnZUdyaWRTaXplLFxuICAgICAgYm91bmRzXG4gICAgKTtcblxuICAgIC8vIFNtYWxsIGdyaWRcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5zbWFsbEdyaWRDb2xvdXI7XG4gICAgY29udGV4dC5saW5lV2lkdGggPSB0aGlzLnNtYWxsR3JpZFdpZHRoO1xuICAgIHRoaXMuZHJhd0dyaWQoXG4gICAgICBjb250ZXh0LFxuICAgICAgdGhpcy5zbWFsbEdyaWRTaXplLFxuICAgICAgYm91bmRzXG4gICAgKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0dyaWQoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHNpemU6IG51bWJlcixcbiAgICBib3VuZHM6IENhbWVyYUJvdW5kc1xuICApOiB2b2lkIHtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuXG4gICAgY29uc3Qgc3RhcnRYID0gTWF0aC5mbG9vcihib3VuZHMubGVmdCAvIHNpemUpICogc2l6ZTtcbiAgICBjb25zdCBlbmRYID0gTWF0aC5jZWlsKGJvdW5kcy5yaWdodCAvIHNpemUpICogc2l6ZTtcbiAgICBmb3IgKGxldCB4ID0gc3RhcnRYOyB4IDw9IGVuZFg7IHggKz0gc2l6ZSkge1xuICAgICAgY29udGV4dC5tb3ZlVG8oeCwgYm91bmRzLnRvcCk7XG4gICAgICBjb250ZXh0LmxpbmVUbyh4LCBib3VuZHMuYm90dG9tKTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFkgPSBNYXRoLmZsb29yKGJvdW5kcy50b3AgLyBzaXplKSAqIHNpemU7XG4gICAgY29uc3QgZW5kWSA9IE1hdGguY2VpbChib3VuZHMuYm90dG9tIC8gc2l6ZSkgKiBzaXplO1xuICAgIGZvciAobGV0IHkgPSBzdGFydFk7IHkgPD0gZW5kWTsgeSArPSBzaXplKSB7XG4gICAgICBjb250ZXh0Lm1vdmVUbyhib3VuZHMubGVmdCwgeSk7XG4gICAgICBjb250ZXh0LmxpbmVUbyhib3VuZHMucmlnaHQsIHkpO1xuICAgIH1cblxuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICcuL3ZlYyc7XG5cbmV4cG9ydCB0eXBlIENhbWVyYUJvdW5kcyA9IHtcbiAgdG9wOiBudW1iZXI7XG4gIGJvdHRvbTogbnVtYmVyO1xuICBsZWZ0OiBudW1iZXI7XG4gIHJpZ2h0OiBudW1iZXJcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhbWVyYSB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZWFzZUFtb3VudDogbnVtYmVyID0gMC45O1xuXG4gIHB1YmxpYyBwb3NpdGlvbjogdmVjO1xuICBwcml2YXRlIGFjdHVhbFBvc2l0aW9uOiB2ZWM7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHBvc2l0aW9uOiB2ZWMpIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjLmNsb25lKHBvc2l0aW9uKTtcbiAgICB0aGlzLmFjdHVhbFBvc2l0aW9uID0gdmVjLmNsb25lKHBvc2l0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgYm91bmRzKCk6IENhbWVyYUJvdW5kcyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogdGhpcy5hY3R1YWxQb3NpdGlvbi55IC0gKEdhbWUuc2NyZWVuLnkgLyAyKSxcbiAgICAgIGJvdHRvbTogdGhpcy5hY3R1YWxQb3NpdGlvbi55ICsgKEdhbWUuc2NyZWVuLnkgLyAyKSxcbiAgICAgIGxlZnQ6IHRoaXMuYWN0dWFsUG9zaXRpb24ueCAtIChHYW1lLnNjcmVlbi54IC8gMiksXG4gICAgICByaWdodDogdGhpcy5hY3R1YWxQb3NpdGlvbi54ICsgKEdhbWUuc2NyZWVuLnggLyAyKVxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQpOiB2b2lkIHtcbiAgICBjb25zdCBkZWx0YSA9IHZlYy5zdWIodGhpcy5hY3R1YWxQb3NpdGlvbiwgdGhpcy5wb3NpdGlvbik7XG4gICAgdGhpcy5hY3R1YWxQb3NpdGlvbiA9IHZlYy5hZGQodGhpcy5wb3NpdGlvbiwgdmVjLm11bChkZWx0YSwgdGhpcy5lYXNlQW1vdW50KSk7XG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUoXG4gICAgICAoR2FtZS5zY3JlZW4ueCAvIDIpIC0gdGhpcy5hY3R1YWxQb3NpdGlvbi54LFxuICAgICAgKEdhbWUuc2NyZWVuLnkgLyAyKSAtIHRoaXMuYWN0dWFsUG9zaXRpb24ueVxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCBHYW1lIGZyb20gJy4vR2FtZSc7XG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9JbnB1dCc7XG5pbXBvcnQgU2tpZENhbnZhcyBmcm9tICcuL1NraWRDYW52YXMnO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5pbXBvcnQgSGFzV2hlZWxzLCB7IFdoZWVsU3RhdHMgfSBmcm9tICcuL0hhc1doZWVscyc7XG5pbXBvcnQgV2hlZWwgZnJvbSAnLi9XaGVlbCc7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICcuL3ZlYyc7XG5pbXBvcnQgeyBjbGFtcCwgd3JhcERpcmVjdGlvbiB9IGZyb20gJy4vdXRpbGl0aWVzJztcbmltcG9ydCAqIGFzIGNvbmZpZyBmcm9tICcuL2NvbmZpZy5qc29uJztcbmltcG9ydCBEZWJ1ZyBmcm9tICcuL0RlYnVnJztcblxuZW51bSBXaGVlbFBvc2l0aW9uIHtcbiAgRnJvbnRMZWZ0ID0gMCxcbiAgRnJvbnRSaWdodCA9IDEsXG4gIEJhY2tMZWZ0ID0gMixcbiAgQmFja1JpZ2h0ID0gMyxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyIGltcGxlbWVudHMgRW50aXR5LCBIYXNXaGVlbHMge1xuICBwdWJsaWMgcG9zaXRpb246IHZlYztcbiAgcHVibGljIGRpcmVjdGlvbjogbnVtYmVyO1xuICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIHRocm90dGxlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBicmFrZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgcmV2ZXJzZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgaGFuZGJyYWtlOiBib29sZWFuID0gZmFsc2U7XG4gIHB1YmxpYyBzdGVlcmluZzogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIHdoZWVsczogV2hlZWxbXSA9IFtdO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwb3NpdGlvbjogdmVjLFxuICAgIGRpcmVjdGlvbjogbnVtYmVyID0gMFxuICApIHtcbiAgICB0aGlzLnBvc2l0aW9uID0gdmVjLmNsb25lKHBvc2l0aW9uKTtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuICAgIC8vIEFkZCB3aGVlbHNcbiAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkZyb250TGVmdF0gPSBuZXcgV2hlZWwoXG4gICAgICB0aGlzLmdldFdoZWVsUG9zaXRpb24oV2hlZWxQb3NpdGlvbi5Gcm9udExlZnQpLFxuICAgICAgdGhpcy5kaXJlY3Rpb25cbiAgICApO1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uRnJvbnRSaWdodF0gPSBuZXcgV2hlZWwoXG4gICAgICB0aGlzLmdldFdoZWVsUG9zaXRpb24oV2hlZWxQb3NpdGlvbi5Gcm9udFJpZ2h0KSxcbiAgICAgIHRoaXMuZGlyZWN0aW9uXG4gICAgKTtcbiAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkJhY2tMZWZ0XSA9IG5ldyBXaGVlbChcbiAgICAgIHRoaXMuZ2V0V2hlZWxQb3NpdGlvbihXaGVlbFBvc2l0aW9uLkJhY2tMZWZ0KSxcbiAgICAgIHRoaXMuZGlyZWN0aW9uXG4gICAgKTtcbiAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkJhY2tSaWdodF0gPSBuZXcgV2hlZWwoXG4gICAgICB0aGlzLmdldFdoZWVsUG9zaXRpb24oV2hlZWxQb3NpdGlvbi5CYWNrUmlnaHQpLFxuICAgICAgdGhpcy5kaXJlY3Rpb25cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXaGVlbFBvc2l0aW9uKHdoZWVsOiBXaGVlbFBvc2l0aW9uKTogdmVjIHtcbiAgICBsZXQgb2Zmc2V0OiB2ZWM7XG4gICAgc3dpdGNoICh3aGVlbCkge1xuICAgICAgY2FzZSBXaGVlbFBvc2l0aW9uLkZyb250TGVmdDpcbiAgICAgICAgb2Zmc2V0ID0gdmVjKFxuICAgICAgICAgIEdhbWUuc2V0dGluZ3MuZnJvbnRXaGVlbHNPZmZzZXQsXG4gICAgICAgICAgR2FtZS5zZXR0aW5ncy5sZWZ0V2hlZWxzT2Zmc2V0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXaGVlbFBvc2l0aW9uLkZyb250UmlnaHQ6XG4gICAgICAgIG9mZnNldCA9IHZlYyhcbiAgICAgICAgICBHYW1lLnNldHRpbmdzLmZyb250V2hlZWxzT2Zmc2V0LFxuICAgICAgICAgIEdhbWUuc2V0dGluZ3MucmlnaHRXaGVlbHNPZmZzZXRcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFdoZWVsUG9zaXRpb24uQmFja0xlZnQ6XG4gICAgICAgIG9mZnNldCA9IHZlYyhcbiAgICAgICAgICBHYW1lLnNldHRpbmdzLmJhY2tXaGVlbHNPZmZzZXQsXG4gICAgICAgICAgR2FtZS5zZXR0aW5ncy5sZWZ0V2hlZWxzT2Zmc2V0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBXaGVlbFBvc2l0aW9uLkJhY2tSaWdodDpcbiAgICAgICAgb2Zmc2V0ID0gdmVjKFxuICAgICAgICAgIEdhbWUuc2V0dGluZ3MuYmFja1doZWVsc09mZnNldCxcbiAgICAgICAgICBHYW1lLnNldHRpbmdzLnJpZ2h0V2hlZWxzT2Zmc2V0XG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHJldHVybiB2ZWMuYWRkKHRoaXMucG9zaXRpb24sIHZlYy5yb3Qob2Zmc2V0LCB0aGlzLmRpcmVjdGlvbikpO1xuICB9XG5cbiAgcHVibGljIGdldFdoZWVsU3RhdHMoKTogV2hlZWxTdGF0c1tdIHtcbiAgICByZXR1cm4gdGhpcy53aGVlbHMubWFwKHdoZWVsID0+IHdoZWVsLnN0YXRzKTtcbiAgfVxuXG4gIHB1YmxpYyBoYW5kbGVJbnB1dCgpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRicmFrZSA9IElucHV0LmtleURvd24oY29uZmlnLmNvbnRyb2xzLmhhbmRicmFrZSBhcyBhbnkpO1xuXG4gICAgLy8gVGhyb3R0bGUgLyBicmVhayAvIHJldmVyc2VcbiAgICB0aGlzLnRocm90dGxlID0gSW5wdXQua2V5RG93bihjb25maWcuY29udHJvbHMudGhyb3R0bGUgYXMgYW55KTtcbiAgICB0aGlzLmJyYWtlID0gSW5wdXQua2V5RG93bihjb25maWcuY29udHJvbHMuYnJha2UgYXMgYW55KTtcblxuICAgIC8vIFN0ZWVyaW5nXG4gICAgY29uc3Qgc3RlZXJpbmdBbW91bnQgPSBHYW1lLnNldHRpbmdzLmNhclN0ZWVyaW5nQW1vdW50ICsgKFxuICAgICAgTWF0aC5hYnModGhpcy5zdGVlcmluZykgKiBHYW1lLnNldHRpbmdzLmNhclN0ZWVyaW5nQ3VydmVcbiAgICApO1xuICAgIGlmIChJbnB1dC5rZXlEb3duKGNvbmZpZy5jb250cm9scy5sZWZ0IGFzIGFueSkpIHtcbiAgICAgIHRoaXMuc3RlZXJpbmcgLT0gc3RlZXJpbmdBbW91bnQ7XG4gICAgfSBlbHNlIGlmIChJbnB1dC5rZXlEb3duKGNvbmZpZy5jb250cm9scy5yaWdodCBhcyBhbnkpKSB7XG4gICAgICB0aGlzLnN0ZWVyaW5nICs9IHN0ZWVyaW5nQW1vdW50O1xuICAgIH0gZWxzZSBpZiAodGhpcy5zdGVlcmluZyAhPT0gMCkge1xuICAgICAgLy8gSWYgbm8gc3RlZXJpbmcga2V5cyBhcmUgcHJlc3NlZCwgZ3JhZHVhbGx5IHJlc2V0IHN0ZWVyaW5nXG4gICAgICB0aGlzLnN0ZWVyaW5nICs9ICh0aGlzLnN0ZWVyaW5nIDwgMCA/IDEgOiAtMSkgKlxuICAgICAgICBHYW1lLnNldHRpbmdzLmNhclN0ZWVyaW5nUmVzZXRBbW91bnQ7XG5cbiAgICAgIC8vIFNuYXAgc3RlZXJpbmcgYmFjayB0byB6ZXJvIHdoZW4gaXQgZ2V0cyBzbWFsbCBlbm91Z2hcbiAgICAgIGlmIChNYXRoLmFicyh0aGlzLnN0ZWVyaW5nKSA8PSBHYW1lLnNldHRpbmdzLmNhclN0ZWVyaW5nUmVzZXRBbW91bnQpIHtcbiAgICAgICAgdGhpcy5zdGVlcmluZyA9IDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xhbXAgc3RlZXJpbmdcbiAgICB0aGlzLnN0ZWVyaW5nID0gY2xhbXAodGhpcy5zdGVlcmluZywgLTEsIDEpO1xuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgZHJpdmUgPSB0aGlzLnRocm90dGxlID8gR2FtZS5zZXR0aW5ncy5jYXJFbmdpbmVQb3dlciA6IDA7XG4gICAgY29uc3QgYnJha2UgPSB0aGlzLmJyYWtlID8gR2FtZS5zZXR0aW5ncy5jYXJCcmFrZVBvd2VyIDogMDtcbiAgICBsZXQgc3RlZXJpbmcgPSB3cmFwRGlyZWN0aW9uKHRoaXMuZGlyZWN0aW9uICsgKFxuICAgICAgdGhpcy5zdGVlcmluZyAqIEdhbWUuc2V0dGluZ3MuY2FyU3RlZXJpbmdBbmdsZU1heFxuICAgICkpO1xuXG4gICAgLy8gVXBkYXRlIHdoZWVsc1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uRnJvbnRMZWZ0XS51cGRhdGUoXG4gICAgICBkdCxcbiAgICAgIEdhbWUuc2V0dGluZ3MuZnJvbnRXaGVlbERyaXZlID8gZHJpdmUgOiAwLFxuICAgICAgYnJha2UsXG4gICAgICB0aGlzLmhhbmRicmFrZSxcbiAgICAgIHN0ZWVyaW5nXG4gICAgKTtcbiAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkZyb250UmlnaHRdLnVwZGF0ZShcbiAgICAgIGR0LFxuICAgICAgR2FtZS5zZXR0aW5ncy5mcm9udFdoZWVsRHJpdmUgPyBkcml2ZSA6IDAsXG4gICAgICBicmFrZSxcbiAgICAgIHRoaXMuaGFuZGJyYWtlLFxuICAgICAgc3RlZXJpbmdcbiAgICApO1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uQmFja0xlZnRdLnVwZGF0ZShcbiAgICAgIGR0LFxuICAgICAgR2FtZS5zZXR0aW5ncy5yZWFyV2hlZWxEcml2ZSA/IGRyaXZlIDogMCxcbiAgICAgIGJyYWtlLFxuICAgICAgdGhpcy5oYW5kYnJha2UsXG4gICAgICB0aGlzLmRpcmVjdGlvblxuICAgICk7XG4gICAgdGhpcy53aGVlbHNbV2hlZWxQb3NpdGlvbi5CYWNrUmlnaHRdLnVwZGF0ZShcbiAgICAgIGR0LFxuICAgICAgR2FtZS5zZXR0aW5ncy5yZWFyV2hlZWxEcml2ZSA/IGRyaXZlIDogMCxcbiAgICAgIGJyYWtlLFxuICAgICAgdGhpcy5oYW5kYnJha2UsXG4gICAgICB0aGlzLmRpcmVjdGlvblxuICAgICk7XG5cbiAgICAvLyBGaW5kIGNhciBjZW50ZXJcbiAgICBjb25zdCBwb3NpdGlvbiA9IHZlYy5hdmcoLi4udGhpcy53aGVlbHMubWFwKHdoZWVsID0+IHdoZWVsLnBvc2l0aW9uKSk7XG5cbiAgICAvLyBGaW5kIGNhciBkaXJlY3Rpb25cbiAgICBjb25zdCBmcm9udEF4bGUgPSB2ZWMuYXZnKFxuICAgICAgdGhpcy53aGVlbHNbV2hlZWxQb3NpdGlvbi5Gcm9udExlZnRdLnBvc2l0aW9uLFxuICAgICAgdGhpcy53aGVlbHNbV2hlZWxQb3NpdGlvbi5Gcm9udFJpZ2h0XS5wb3NpdGlvblxuICAgICk7XG4gICAgY29uc3QgcmVhckF4bGUgPSB2ZWMuYXZnKFxuICAgICAgdGhpcy53aGVlbHNbV2hlZWxQb3NpdGlvbi5CYWNrTGVmdF0ucG9zaXRpb24sXG4gICAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkJhY2tSaWdodF0ucG9zaXRpb25cbiAgICApO1xuICAgIGNvbnN0IGRpcmVjdGlvbiA9IHZlYy5yYWQodmVjLnN1YihcbiAgICAgIGZyb250QXhsZSxcbiAgICAgIHJlYXJBeGxlXG4gICAgKSk7XG5cbiAgICB0aGlzLnNwZWVkID0gdmVjLmxlbih2ZWMuc3ViKHBvc2l0aW9uLCB0aGlzLnBvc2l0aW9uKSk7XG4gICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXG4gICAgRGVidWcudmFsdWUoJ3Bvc2l0aW9uJywgdmVjLnN0cih0aGlzLnBvc2l0aW9uKSk7XG4gICAgRGVidWcudmFsdWUoJ2RpcmVjdGlvbicsIHRoaXMuZGlyZWN0aW9uKTtcbiAgICBEZWJ1Zy52YWx1ZSgnc3BlZWQnLCB0aGlzLnNwZWVkKTtcbiAgICBEZWJ1Zy52YWx1ZSgnc3RlZXJpbmcnLCB0aGlzLnN0ZWVyaW5nKTtcbiAgICBEZWJ1Zy52YWx1ZShcbiAgICAgICd0aHJvdHRsZScsXG4gICAgICAndGhyb3R0bGUnLFxuICAgICAge1xuICAgICAgICBzaG93TGFiZWw6IGZhbHNlLFxuICAgICAgICBmb3JlZ3JvdW5kQ29sb3VyOiB0aGlzLnRocm90dGxlID8gJ3doaXRlJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgICAgfVxuICAgICk7XG4gICAgRGVidWcudmFsdWUoXG4gICAgICAnYnJha2UnLFxuICAgICAgJ2JyYWtlJyxcbiAgICAgIHtcbiAgICAgICAgc2hvd0xhYmVsOiBmYWxzZSxcbiAgICAgICAgZm9yZWdyb3VuZENvbG91cjogdGhpcy5icmFrZSA/ICd3aGl0ZScgOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpJyxcbiAgICAgIH1cbiAgICApO1xuICAgIERlYnVnLnZhbHVlKFxuICAgICAgJ3JldmVyc2UnLFxuICAgICAgJ3JldmVyc2UnLFxuICAgICAge1xuICAgICAgICBzaG93TGFiZWw6IGZhbHNlLFxuICAgICAgICBmb3JlZ3JvdW5kQ29sb3VyOiB0aGlzLnJldmVyc2UgPyAnd2hpdGUnIDogJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKScsXG4gICAgICB9XG4gICAgKTtcbiAgICBEZWJ1Zy52YWx1ZShcbiAgICAgICdoYW5kYnJha2UnLFxuICAgICAgJ2hhbmRicmFrZScsXG4gICAgICB7XG4gICAgICAgIHNob3dMYWJlbDogZmFsc2UsXG4gICAgICAgIGZvcmVncm91bmRDb2xvdXI6IHRoaXMuaGFuZGJyYWtlID8gJ3doaXRlJyA6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMiknLFxuICAgICAgfVxuICAgICk7XG5cbiAgICAvLyBDb25zdHJhaW4gd2hlZWxzXG4gICAgc3RlZXJpbmcgPSB3cmFwRGlyZWN0aW9uKHRoaXMuZGlyZWN0aW9uICsgKFxuICAgICAgdGhpcy5zdGVlcmluZyAqIEdhbWUuc2V0dGluZ3MuY2FyU3RlZXJpbmdBbmdsZU1heFxuICAgICkpO1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uRnJvbnRMZWZ0XS5wb3NpdGlvbiA9IHRoaXMuZ2V0V2hlZWxQb3NpdGlvbihcbiAgICAgIFdoZWVsUG9zaXRpb24uRnJvbnRMZWZ0XG4gICAgKTtcbiAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkZyb250TGVmdF0uZGlyZWN0aW9uID0gc3RlZXJpbmc7XG4gICAgdGhpcy53aGVlbHNbV2hlZWxQb3NpdGlvbi5Gcm9udFJpZ2h0XS5wb3NpdGlvbiA9IHRoaXMuZ2V0V2hlZWxQb3NpdGlvbihcbiAgICAgIFdoZWVsUG9zaXRpb24uRnJvbnRSaWdodFxuICAgICk7XG4gICAgdGhpcy53aGVlbHNbV2hlZWxQb3NpdGlvbi5Gcm9udFJpZ2h0XS5kaXJlY3Rpb24gPSBzdGVlcmluZztcbiAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkJhY2tMZWZ0XS5wb3NpdGlvbiA9IHRoaXMuZ2V0V2hlZWxQb3NpdGlvbihcbiAgICAgIFdoZWVsUG9zaXRpb24uQmFja0xlZnRcbiAgICApO1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uQmFja0xlZnRdLmRpcmVjdGlvbiA9IHRoaXMuZGlyZWN0aW9uO1xuICAgIHRoaXMud2hlZWxzW1doZWVsUG9zaXRpb24uQmFja1JpZ2h0XS5wb3NpdGlvbiA9IHRoaXMuZ2V0V2hlZWxQb3NpdGlvbihcbiAgICAgIFdoZWVsUG9zaXRpb24uQmFja1JpZ2h0XG4gICAgKTtcbiAgICB0aGlzLndoZWVsc1tXaGVlbFBvc2l0aW9uLkJhY2tSaWdodF0uZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb247XG4gIH1cblxuICBwdWJsaWMgZHJhdyhjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHNraWRDYW52YXM6IFNraWRDYW52YXMpOiB2b2lkIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZSh0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XG4gICAgY29udGV4dC5yb3RhdGUodGhpcy5kaXJlY3Rpb24pO1xuICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnd2hpdGUnO1xuICAgIGNvbnRleHQubGluZVdpZHRoID0gMTtcbiAgICBjb250ZXh0LnN0cm9rZVJlY3QoXG4gICAgICAtR2FtZS5zZXR0aW5ncy5jYXJMZW5ndGggLyAyLFxuICAgICAgLUdhbWUuc2V0dGluZ3MuY2FyV2lkdGggLyAyLFxuICAgICAgR2FtZS5zZXR0aW5ncy5jYXJMZW5ndGgsXG4gICAgICBHYW1lLnNldHRpbmdzLmNhcldpZHRoXG4gICAgKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcblxuICAgIGZvciAoY29uc3Qgd2hlZWwgb2YgdGhpcy53aGVlbHMpIHtcbiAgICAgIHdoZWVsLmRyYXcoY29udGV4dCwgc2tpZENhbnZhcyk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICcuL3ZlYyc7XG5cbnR5cGUgRGVidWdPcHRpb25zID0ge1xuICBtYXJnaW46IG51bWJlcixcbiAgcGFkZGluZzogbnVtYmVyLFxuICBmb250OiBzdHJpbmcsXG4gIGxpbmVIZWlnaHQ6IG51bWJlcixcbiAgZm9yZWdyb3VuZENvbG91cjogQ29sb3VyLFxuICBiYWNrZ3JvdW5kQ29sb3VyOiBDb2xvdXIsXG4gIGRlZmF1bHRWYWx1ZTogRGVidWdWYWx1ZSxcbiAgZGVmYXVsdE1hcmtlcjogRGVidWdNYXJrZXJcbn07XG5cbnR5cGUgRGVidWdWYWx1ZSA9IHtcbiAgbGFiZWw/OiBzdHJpbmcsXG4gIHZhbHVlPzogbnVtYmVyIHwgc3RyaW5nLFxuICBhbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyxcbiAgc2hvd0xhYmVsOiBib29sZWFuLFxuICBwYWRkaW5nPzogbnVtYmVyLFxuICBmb250Pzogc3RyaW5nLFxuICBmb3JlZ3JvdW5kQ29sb3VyPzogQ29sb3VyLFxuICBiYWNrZ3JvdW5kQ29sb3VyPzogQ29sb3VyXG59O1xuXG50eXBlIERlYnVnTWFya2VyID0ge1xuICBsYWJlbD86IHN0cmluZyxcbiAgdmFsdWU/OiBudW1iZXIgfCBzdHJpbmcsXG4gIHBvc2l0aW9uPzogdmVjLFxuICBzaG93TGFiZWw6IGJvb2xlYW4sXG4gIHNob3dWYWx1ZTogYm9vbGVhbixcbiAgc2hvd01hcmtlcjogYm9vbGVhbixcbiAgbWFya2VyU2l6ZTogbnVtYmVyLFxuICBtYXJrZXJTdHlsZTogJ3gnIHwgJysnIHwgJy4nLFxuICBtYXJrZXJDb2xvdXI6IENvbG91cixcbiAgc3BhY2U6ICd3b3JsZCcgfCAnc2NyZWVuJyxcbiAgcGFkZGluZz86IG51bWJlcixcbiAgZm9udD86IHN0cmluZyxcbiAgbGFiZWxPZmZzZXQ6IHZlYyxcbiAgZm9yZWdyb3VuZENvbG91cj86IENvbG91cixcbiAgYmFja2dyb3VuZENvbG91cj86IENvbG91clxufTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVidWcge1xuICBwcml2YXRlIHN0YXRpYyBpbnN0YW5jZTogRGVidWc7XG4gIHByaXZhdGUgdmFsdWVzOiBNYXA8c3RyaW5nLCBEZWJ1Z1ZhbHVlPjtcbiAgcHJpdmF0ZSBtYXJrZXJzOiBNYXA8c3RyaW5nLCBEZWJ1Z01hcmtlcj47XG4gIHByaXZhdGUgb3B0aW9uczogRGVidWdPcHRpb25zO1xuICBwcml2YXRlIHJlYWRvbmx5IGRlZmF1bHRPcHRpb25zOiBEZWJ1Z09wdGlvbnMgPSB7XG4gICAgbWFyZ2luOiAxMCxcbiAgICBwYWRkaW5nOiA0LFxuICAgIGZvbnQ6ICcxMHB0IEx1Y2lkYSBDb25zb2xlLCBtb25vc3BhY2UnLFxuICAgIGxpbmVIZWlnaHQ6IDEyLFxuICAgIGZvcmVncm91bmRDb2xvdXI6ICcjZmZmJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3VyOiAnIzMzMzgnLFxuICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAgYWxpZ246ICdsZWZ0JyxcbiAgICAgIHNob3dMYWJlbDogdHJ1ZSxcbiAgICB9LFxuICAgIGRlZmF1bHRNYXJrZXI6IHtcbiAgICAgIHNob3dMYWJlbDogdHJ1ZSxcbiAgICAgIHNob3dWYWx1ZTogdHJ1ZSxcbiAgICAgIHNob3dNYXJrZXI6IHRydWUsXG4gICAgICBtYXJrZXJTaXplOiA2LFxuICAgICAgbWFya2VyU3R5bGU6ICd4JyxcbiAgICAgIG1hcmtlckNvbG91cjogJyNjY2MnLFxuICAgICAgc3BhY2U6ICd3b3JsZCcsXG4gICAgICBsYWJlbE9mZnNldDogdmVjKDEwKSxcbiAgICB9LFxuICB9O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3Iob3B0aW9uczogUGFydGlhbDxEZWJ1Z09wdGlvbnM+ID0ge30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHt9LCB0aGlzLmRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICB0aGlzLnZhbHVlcyA9IG5ldyBNYXA8c3RyaW5nLCBEZWJ1Z1ZhbHVlPigpO1xuICAgIHRoaXMubWFya2VycyA9IG5ldyBNYXA8c3RyaW5nLCBEZWJ1Z01hcmtlcj4oKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbml0aWFsaXNlIHRoZSBkZWJ1ZyByZW5kZXJlciBmb3IgZGlzcGxheWluZyB2YWx1ZXMgYW5kIG1hcmtlcnNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGlzZShvcHRpb25zOiBQYXJ0aWFsPERlYnVnT3B0aW9ucz4gPSB7fSk6IHZvaWQge1xuICAgIERlYnVnLmluc3RhbmNlID0gbmV3IERlYnVnKG9wdGlvbnMpO1xuICB9XG5cbiAgcHJpdmF0ZSBzdGF0aWMgZ2V0SW5zdGFuY2UoKTogRGVidWcge1xuICAgIGlmICghRGVidWcuaW5zdGFuY2UpIHtcbiAgICAgIERlYnVnLmluaXRpYWxpc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIERlYnVnLmluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYSBkZWJ1ZyB2YWx1ZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyB2YWx1ZShcbiAgICBsYWJlbDogc3RyaW5nLFxuICAgIHZhbHVlOiBzdHJpbmcgfCBudW1iZXIsXG4gICAgb3B0aW9uczogUGFydGlhbDxEZWJ1Z1ZhbHVlPiA9IHt9XG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGRlYnVnID0gRGVidWcuZ2V0SW5zdGFuY2UoKTtcbiAgICBkZWJ1Zy52YWx1ZXMuc2V0KGxhYmVsLCBPYmplY3QuYXNzaWduKFxuICAgICAgeyBsYWJlbCwgdmFsdWUgfSxcbiAgICAgIGRlYnVnLmRlZmF1bHRPcHRpb25zLmRlZmF1bHRWYWx1ZSxcbiAgICAgIG9wdGlvbnNcbiAgICApKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTaG93IGEgbWFya2VyIGluIHdvcmxkIG9yIHNjcmVlbiBzcGFjZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBtYXJrZXIoXG4gICAgbGFiZWw6IHN0cmluZyxcbiAgICB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyLFxuICAgIHBvc2l0aW9uOiB2ZWMsXG4gICAgb3B0aW9uczogUGFydGlhbDxEZWJ1Z01hcmtlcj4gPSB7fVxuICApOiB2b2lkIHtcbiAgICBjb25zdCBkZWJ1ZyA9IERlYnVnLmdldEluc3RhbmNlKCk7XG4gICAgZGVidWcubWFya2Vycy5zZXQobGFiZWwsIE9iamVjdC5hc3NpZ24oXG4gICAgICB7IGxhYmVsLCB2YWx1ZSwgcG9zaXRpb24gfSxcbiAgICAgIGRlYnVnLmRlZmF1bHRPcHRpb25zLmRlZmF1bHRNYXJrZXIsXG4gICAgICBvcHRpb25zXG4gICAgKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEKTogdm9pZCB7XG4gICAgY29uc3QgZGVidWcgPSBEZWJ1Zy5nZXRJbnN0YW5jZSgpO1xuXG4gICAgLy8gRHJhdyB3b3JsZC1zcGFjZSBtYXJrZXJzXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5zY2FsZSgxLCAxKTtcbiAgICBkZWJ1Zy5tYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHtcbiAgICAgIGlmIChtYXJrZXIuc3BhY2UgPT09ICd3b3JsZCcpIHtcbiAgICAgICAgZGVidWcuZHJhd01hcmtlcihjb250ZXh0LCBtYXJrZXIpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuXG4gICAgLy8gRHJhdyB2YWx1ZXMgYW5kIHNjcmVlbi1zcGFjZSBtYXJrZXJzXG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5zZXRUcmFuc2Zvcm0oMSwgMCwgMCwgMSwgMCwgMCk7XG4gICAgbGV0IHBvc2l0aW9uOiB2ZWM7XG4gICAgbGV0IGxlZnRZID0gZGVidWcub3B0aW9ucy5tYXJnaW47XG4gICAgbGV0IHJpZ2h0WSA9IGRlYnVnLm9wdGlvbnMubWFyZ2luO1xuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSAoZGVidWcub3B0aW9ucy5saW5lSGVpZ2h0ICsgZGVidWcub3B0aW9ucy5wYWRkaW5nICogMik7XG4gICAgZGVidWcudmFsdWVzLmZvckVhY2godmFsdWUgPT4ge1xuICAgICAgc3dpdGNoICh2YWx1ZS5hbGlnbikge1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICBwb3NpdGlvbiA9IHZlYyhkZWJ1Zy5vcHRpb25zLm1hcmdpbiwgbGVmdFkpO1xuICAgICAgICAgIGxlZnRZICs9IGxpbmVIZWlnaHQ7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICBwb3NpdGlvbiA9IHZlYyhjb250ZXh0LmNhbnZhcy5jbGllbnRXaWR0aCAtIGRlYnVnLm9wdGlvbnMubWFyZ2luLCByaWdodFkpO1xuICAgICAgICAgIHJpZ2h0WSArPSBsaW5lSGVpZ2h0O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgZGVidWcuZHJhd0xhYmVsKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICAodmFsdWUuc2hvd0xhYmVsID8gYCR7dmFsdWUubGFiZWx9OiBgIDogJycpICsgYCR7dmFsdWUudmFsdWV9YCxcbiAgICAgICAgcG9zaXRpb24sXG4gICAgICAgIHZhbHVlLmFsaWduLFxuICAgICAgICB2YWx1ZS5wYWRkaW5nID8/IGRlYnVnLm9wdGlvbnMucGFkZGluZyxcbiAgICAgICAgdmFsdWUuZm9udCA/PyBkZWJ1Zy5vcHRpb25zLmZvbnQsXG4gICAgICAgIHZhbHVlLmZvcmVncm91bmRDb2xvdXIgPz8gZGVidWcub3B0aW9ucy5mb3JlZ3JvdW5kQ29sb3VyLFxuICAgICAgICB2YWx1ZS5iYWNrZ3JvdW5kQ29sb3VyID8/IGRlYnVnLm9wdGlvbnMuYmFja2dyb3VuZENvbG91clxuICAgICAgKTtcbiAgICB9KTtcbiAgICBkZWJ1Zy5tYXJrZXJzLmZvckVhY2gobWFya2VyID0+IHtcbiAgICAgIGlmIChtYXJrZXIuc3BhY2UgPT09ICdzY3JlZW4nKSB7XG4gICAgICAgIGRlYnVnLmRyYXdNYXJrZXIoY29udGV4dCwgbWFya2VyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcblxuICAgIC8vIENsZWFyIHZhbHVlcyBhbmQgbWFya2VycyByZWFkeSBmb3IgbmV4dCBmcmFtZVxuICAgIGRlYnVnLnZhbHVlcy5jbGVhcigpO1xuICAgIGRlYnVnLm1hcmtlcnMuY2xlYXIoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd01hcmtlcihjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIG1hcmtlcjogRGVidWdNYXJrZXIpOiB2b2lkIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb25zdCBwb3NpdGlvbiA9IG1hcmtlci5wb3NpdGlvbiA/PyB2ZWMoKTtcbiAgICBpZiAobWFya2VyLnNob3dMYWJlbCB8fCBtYXJrZXIuc2hvd1ZhbHVlKSB7XG4gICAgICB0aGlzLmRyYXdMYWJlbChcbiAgICAgICAgY29udGV4dCxcbiAgICAgICAgKG1hcmtlci5zaG93TGFiZWwgPyBgJHttYXJrZXIubGFiZWx9OiBgIDogJycpXG4gICAgICAgICAgKyAobWFya2VyLnNob3dWYWx1ZSA/IGAke21hcmtlci52YWx1ZX1gIDogJycpLFxuICAgICAgICB2ZWMuYWRkKHBvc2l0aW9uID8/IHZlYygpLCBtYXJrZXIubGFiZWxPZmZzZXQpLFxuICAgICAgICAnbGVmdCcsXG4gICAgICAgIG1hcmtlci5wYWRkaW5nID8/IHRoaXMub3B0aW9ucy5wYWRkaW5nLFxuICAgICAgICBtYXJrZXIuZm9udCA/PyB0aGlzLm9wdGlvbnMuZm9udCxcbiAgICAgICAgbWFya2VyLmZvcmVncm91bmRDb2xvdXIgPz8gdGhpcy5vcHRpb25zLmZvcmVncm91bmRDb2xvdXIsXG4gICAgICAgIG1hcmtlci5iYWNrZ3JvdW5kQ29sb3VyID8/IHRoaXMub3B0aW9ucy5iYWNrZ3JvdW5kQ29sb3VyXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAobWFya2VyLnNob3dNYXJrZXIpIHtcbiAgICAgIGNvbnRleHQubGluZVdpZHRoID0gMjtcbiAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjb250ZXh0LmZpbGxTdHlsZSA9IG1hcmtlci5tYXJrZXJDb2xvdXI7XG4gICAgICBzd2l0Y2ggKG1hcmtlci5tYXJrZXJTdHlsZSkge1xuICAgICAgICBjYXNlICd4JzpcbiAgICAgICAgICB0aGlzLmRyYXdDcm9zcyhjb250ZXh0LCBwb3NpdGlvbiwgbWFya2VyLm1hcmtlclNpemUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICcrJzpcbiAgICAgICAgICB0aGlzLmRyYXdQbHVzKGNvbnRleHQsIHBvc2l0aW9uLCBtYXJrZXIubWFya2VyU2l6ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJy4nOlxuICAgICAgICAgIHRoaXMuZHJhd0RvdChjb250ZXh0LCBwb3NpdGlvbiwgbWFya2VyLm1hcmtlclNpemUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0xhYmVsKFxuICAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCxcbiAgICB0ZXh0OiBzdHJpbmcsXG4gICAgcG9zaXRpb246IHZlYyxcbiAgICBhbGlnbjogJ2xlZnQnIHwgJ3JpZ2h0JyxcbiAgICBwYWRkaW5nOiBudW1iZXIsXG4gICAgZm9udDogc3RyaW5nLFxuICAgIGZvcmVncm91bmRDb2xvdXI6IENvbG91cixcbiAgICBiYWNrZ3JvdW5kQ29sb3VyOiBDb2xvdXJcbiAgKTogdm9pZCB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5mb250ID0gZm9udDtcbiAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICd0b3AnO1xuICAgIGNvbnN0IGJhY2tncm91bmRTaXplID0ge1xuICAgICAgd2lkdGg6IGNvbnRleHQubWVhc3VyZVRleHQodGV4dCkud2lkdGggKyBwYWRkaW5nICogMixcbiAgICAgIGhlaWdodDogdGhpcy5vcHRpb25zLmxpbmVIZWlnaHQgKyBwYWRkaW5nICogMixcbiAgICB9O1xuICAgIGNvbnN0IHggPSBhbGlnbiA9PT0gJ3JpZ2h0JyA/IChwb3NpdGlvbi54IC0gYmFja2dyb3VuZFNpemUud2lkdGgpIDogcG9zaXRpb24ueDtcblxuICAgIC8vIERyYXcgYmFja2dyb3VuZFxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gYmFja2dyb3VuZENvbG91cjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgeCAtIHBhZGRpbmcsXG4gICAgICBwb3NpdGlvbi55IC0gcGFkZGluZyxcbiAgICAgIGJhY2tncm91bmRTaXplLndpZHRoLFxuICAgICAgYmFja2dyb3VuZFNpemUuaGVpZ2h0XG4gICAgKTtcblxuICAgIC8vIERyYXcgdGV4dFxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZm9yZWdyb3VuZENvbG91cjtcbiAgICBjb250ZXh0LmZpbGxUZXh0KHRleHQsIHgsIHBvc2l0aW9uLnkpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3Q3Jvc3MoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBwb3NpdGlvbjogdmVjLCBzaXplOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgIGNvbnN0IGhhbGZTaXplID0gc2l6ZSAvIDI7XG4gICAgY29udGV4dC5tb3ZlVG8ocG9zaXRpb24ueCAtIGhhbGZTaXplLCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xuICAgIGNvbnRleHQubGluZVRvKHBvc2l0aW9uLnggKyBoYWxmU2l6ZSwgcG9zaXRpb24ueSArIGhhbGZTaXplKTtcbiAgICBjb250ZXh0Lm1vdmVUbyhwb3NpdGlvbi54IC0gaGFsZlNpemUsIHBvc2l0aW9uLnkgKyBoYWxmU2l6ZSk7XG4gICAgY29udGV4dC5saW5lVG8ocG9zaXRpb24ueCArIGhhbGZTaXplLCBwb3NpdGlvbi55IC0gaGFsZlNpemUpO1xuICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdQbHVzKGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcG9zaXRpb246IHZlYywgc2l6ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBoYWxmU2l6ZSA9IHNpemUgLyAyO1xuICAgIGNvbnRleHQubW92ZVRvKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgLSBoYWxmU2l6ZSk7XG4gICAgY29udGV4dC5saW5lVG8ocG9zaXRpb24ueCwgcG9zaXRpb24ueSArIGhhbGZTaXplKTtcbiAgICBjb250ZXh0Lm1vdmVUbyhwb3NpdGlvbi54IC0gaGFsZlNpemUsIHBvc2l0aW9uLnkpO1xuICAgIGNvbnRleHQubGluZVRvKHBvc2l0aW9uLnggKyBoYWxmU2l6ZSwgcG9zaXRpb24ueSk7XG4gICAgY29udGV4dC5zdHJva2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgZHJhd0RvdChjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHBvc2l0aW9uOiB2ZWMsIHNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgY29udGV4dC5hcmMocG9zaXRpb24ueCwgcG9zaXRpb24ueSwgc2l6ZSAvIDIsIDAsIE1hdGguUEkgKiAyKTtcbiAgICBjb250ZXh0LmZpbGwoKTtcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgZGF0IGZyb20gJ2RhdC5ndWknO1xuaW1wb3J0IERlYnVnIGZyb20gJy4vRGVidWcnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IENhbWVyYSBmcm9tICcuL0NhbWVyYSc7XG5pbXBvcnQgQmFja2dyb3VuZCBmcm9tICcuL0JhY2tncm91bmQnO1xuaW1wb3J0IFNraWRDYW52YXMgZnJvbSAnLi9Ta2lkQ2FudmFzJztcbmltcG9ydCBHcmFwaCBmcm9tICcuL0dyYXBoJztcbmltcG9ydCBDYXIgZnJvbSAnLi9DYXInO1xuaW1wb3J0IFRlc3RXaGVlbCBmcm9tICcuL1Rlc3RXaGVlbCc7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICcuL3ZlYyc7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJy4vdXRpbGl0aWVzJztcbmltcG9ydCAqIGFzIGNvbnN0YW50cyBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgKiBhcyBjb25maWcgZnJvbSAnLi9jb25maWcuanNvbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICBwcml2YXRlIHJlYWRvbmx5IGluaXRpYWxDYXJQb3NpdGlvbjogdmVjID0gdmVjKCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgaW5pdGlhbENhckRpcmVjdGlvbjogbnVtYmVyID0gMDtcblxuICBwcml2YXRlIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XG4gIHByaXZhdGUgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xuICBwcml2YXRlIGxhc3RGcmFtZVRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBsYXN0RnJhbWVDb3VudFRpbWU6IG51bWJlcjtcbiAgcHJpdmF0ZSBmcmFtZVJhdGU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgZnJhbWVDb3VudDogbnVtYmVyID0gMDtcblxuICBwdWJsaWMgc3RhdGljIHNjcmVlbjogdmVjO1xuICBwcml2YXRlIGNhbWVyYTogQ2FtZXJhO1xuICBwcml2YXRlIGJhY2tncm91bmQ6IEJhY2tncm91bmQ7XG4gIHByaXZhdGUgc2tpZENhbnZhczogU2tpZENhbnZhcztcbiAgcHJpdmF0ZSBncmFwaDogR3JhcGg7XG5cbiAgcHJpdmF0ZSBjYXI6IENhcjtcbiAgcHJpdmF0ZSB0ZXN0V2hlZWw6IFRlc3RXaGVlbDtcblxuICBwdWJsaWMgc3RhdGljIHNldHRpbmdzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+ID0ge1xuICAgIHJlc2V0OiAoKSA9PiB7IH0sXG4gICAgdGVzdFdoZWVsOiBmYWxzZSxcbiAgICBkcmF3U2xpcEdyYXBoOiB0cnVlLFxuICAgIGNhcldpZHRoOiAzMCxcbiAgICBjYXJMZW5ndGg6IDUwLFxuICAgIGZyb250V2hlZWxzT2Zmc2V0OiAxNyxcbiAgICBiYWNrV2hlZWxzT2Zmc2V0OiAtMTcsXG4gICAgcmlnaHRXaGVlbHNPZmZzZXQ6IDE0LFxuICAgIGxlZnRXaGVlbHNPZmZzZXQ6IC0xNCxcbiAgICBjYXJFbmdpbmVQb3dlcjogODAsXG4gICAgY2FyRW5naW5lUmV2ZXJzZVBvd2VyOiAzMCxcbiAgICBjYXJCcmFrZVBvd2VyOiA1MCxcbiAgICBjYXJTdGVlcmluZ0Ftb3VudDogMC4wMixcbiAgICBjYXJTdGVlcmluZ0N1cnZlOiAwLjA2LFxuICAgIGNhclN0ZWVyaW5nUmVzZXRBbW91bnQ6IDAuMDgsXG4gICAgY2FyTWF4U3BlZWQ6IDE3MCxcbiAgICBjYXJTdGVlcmluZ0FuZ2xlTWF4OiAwLjcsXG4gICAgd2hlZWxXaWR0aDogNCxcbiAgICB3aGVlbExlbmd0aDogMTIsXG4gICAgdHlyZUxvbmdpdHVkaW5hbERyYWc6IDAuMDAxLFxuICAgIHR5cmVMYXRlcmFsRHJhZ01pbjogMC4wMjgsXG4gICAgdHlyZUxhdGVyYWxEcmFnTWF4OiAwLjE5MyxcbiAgICB0eXJlU3BlZWRPZmZzZXQ6IC0wLjEyMSxcbiAgICB0eXJlU3BlZWRDb2VmZmljaWVudDogMS42LFxuICAgIHR5cmVTbGlwT2Zmc2V0OiAwLjc2LFxuICAgIHR5cmVTbGlwQ29lZmZpY2llbnQ6IDAuOCxcbiAgICBmcm9udFdoZWVsRHJpdmU6IHRydWUsXG4gICAgcmVhcldoZWVsRHJpdmU6IHRydWUsXG4gIH07XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsKSB7XG4gICAgaWYgKGNvbnRhaW5lciA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdBIHZhbGlkIGNvbnRhaW5lciBlbGVtZW50IG11c3QgYmUgc3BlY2lmaWVkLicpO1xuICAgIH1cbiAgICBpZiAoY29udGFpbmVyLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gJ2NhbnZhcycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ29udGFpbmVyIGVsZW1lbnQgbXVzdCBiZSBhIGNhbnZhcy4nKTtcbiAgICB9XG4gICAgdGhpcy5jYW52YXMgPSBjb250YWluZXIgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XG5cbiAgICAvLyBHZXQgYSAyZCBjb250ZXh0XG4gICAgY29uc3QgY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgaWYgKGNvbnRleHQgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGdldCBhIDJkIGNvbnRleHQuXCIpO1xuICAgIH1cblxuICAgIC8vIEhhbmRsZSByZXNpemVcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5yZXNpemUuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIHRoaXMucmVzaXplKCk7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZSgpOiB2b2lkIHtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcbiAgfVxuXG4gIHB1YmxpYyBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgIElucHV0LmluaXRpYWxpc2UoKTtcblxuICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSh0aGlzLmluaXRpYWxDYXJQb3NpdGlvbik7XG4gICAgdGhpcy5iYWNrZ3JvdW5kID0gbmV3IEJhY2tncm91bmQoKTtcbiAgICB0aGlzLnNraWRDYW52YXMgPSBuZXcgU2tpZENhbnZhcygpO1xuICAgIHRoaXMuZ3JhcGggPSBuZXcgR3JhcGgoKTtcblxuICAgIC8vIFJlc2V0IGNhciBwb3NpdGlvbiBhbmQgZGlyZWN0aW9uXG4gICAgY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgICB0aGlzLmNhciA9IG5ldyBDYXIoXG4gICAgICAgIHRoaXMuaW5pdGlhbENhclBvc2l0aW9uLFxuICAgICAgICB0aGlzLmluaXRpYWxDYXJEaXJlY3Rpb25cbiAgICAgICk7XG5cbiAgICAgIHRoaXMudGVzdFdoZWVsID0gbmV3IFRlc3RXaGVlbChcbiAgICAgICAgdGhpcy5pbml0aWFsQ2FyUG9zaXRpb24sXG4gICAgICAgIHRoaXMuaW5pdGlhbENhckRpcmVjdGlvblxuICAgICAgKTtcbiAgICB9O1xuICAgIEdhbWUuc2V0dGluZ3MucmVzZXQgPSByZXNldDtcbiAgICByZXNldCgpO1xuXG4gICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gdGhpcy5sYXN0RnJhbWVDb3VudFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICB0aGlzLmxvb3AoKTtcblxuICAgIC8vIFNldHVwIEdVSVxuICAgIGNvbnN0IGd1aSA9IG5ldyBkYXQuR1VJKHsgd2lkdGg6IDM1MCB9KTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICdyZXNldCcpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ3Rlc3RXaGVlbCcpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ2RyYXdTbGlwR3JhcGgnKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICdjYXJXaWR0aCcpLm1pbigxMCkubWF4KDEwMCkuc3RlcCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICdjYXJMZW5ndGgnKS5taW4oMTApLm1heCgxMDApLnN0ZXAoMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAnZnJvbnRXaGVlbHNPZmZzZXQnKS5taW4oLTEwMCkubWF4KDEwMCkuc3RlcCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICdiYWNrV2hlZWxzT2Zmc2V0JykubWluKC0xMDApLm1heCgxMDApLnN0ZXAoMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAncmlnaHRXaGVlbHNPZmZzZXQnKS5taW4oLTEwMCkubWF4KDEwMCkuc3RlcCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICdsZWZ0V2hlZWxzT2Zmc2V0JykubWluKC0xMDApLm1heCgxMDApLnN0ZXAoMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAnY2FyRW5naW5lUG93ZXInKS5taW4oMCkubWF4KDEwMCkuc3RlcCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICdjYXJFbmdpbmVSZXZlcnNlUG93ZXInKS5taW4oMCkubWF4KDEwMCkuc3RlcCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICdjYXJCcmFrZVBvd2VyJykubWluKDApLm1heCgxMDApLnN0ZXAoMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAnY2FyU3RlZXJpbmdBbW91bnQnKS5taW4oMCkubWF4KDEpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ2NhclN0ZWVyaW5nQ3VydmUnKS5taW4oMCkubWF4KDEpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ2NhclN0ZWVyaW5nUmVzZXRBbW91bnQnKS5taW4oMCkubWF4KDEpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ2Nhck1heFNwZWVkJykubWluKDApLm1heCg1MDApLnN0ZXAoMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAnY2FyU3RlZXJpbmdBbmdsZU1heCcpLm1pbigwKS5tYXgoTWF0aC5QSSkuc3RlcCgwLjEpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ3doZWVsV2lkdGgnKS5taW4oMTApLm1heCgxMDApLnN0ZXAoMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAnd2hlZWxMZW5ndGgnKS5taW4oMTApLm1heCgxMDApLnN0ZXAoMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAndHlyZUxvbmdpdHVkaW5hbERyYWcnKS5taW4oMCkubWF4KDEpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ3R5cmVMYXRlcmFsRHJhZ01pbicpLm1pbigwKS5tYXgoMSk7XG4gICAgZ3VpLmFkZChHYW1lLnNldHRpbmdzLCAndHlyZUxhdGVyYWxEcmFnTWF4JykubWluKDApLm1heCgxKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICd0eXJlU3BlZWRPZmZzZXQnKVxuICAgICAgLm1pbigtMSkubWF4KDEpXG4gICAgICAub25DaGFuZ2UoZGVib3VuY2UodGhpcy5ncmFwaC51cGRhdGUuYmluZCh0aGlzLmdyYXBoKSkpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ3R5cmVTcGVlZENvZWZmaWNpZW50JylcbiAgICAgIC5taW4oMCkubWF4KDUpXG4gICAgICAub25DaGFuZ2UoZGVib3VuY2UodGhpcy5ncmFwaC51cGRhdGUuYmluZCh0aGlzLmdyYXBoKSkpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ3R5cmVTbGlwT2Zmc2V0JylcbiAgICAgIC5taW4oLTEpLm1heCgxKVxuICAgICAgLm9uQ2hhbmdlKGRlYm91bmNlKHRoaXMuZ3JhcGgudXBkYXRlLmJpbmQodGhpcy5ncmFwaCkpKTtcbiAgICBndWkuYWRkKEdhbWUuc2V0dGluZ3MsICd0eXJlU2xpcENvZWZmaWNpZW50JylcbiAgICAgIC5taW4oMCkubWF4KDUpXG4gICAgICAub25DaGFuZ2UoZGVib3VuY2UodGhpcy5ncmFwaC51cGRhdGUuYmluZCh0aGlzLmdyYXBoKSkpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ2Zyb250V2hlZWxEcml2ZScpO1xuICAgIGd1aS5hZGQoR2FtZS5zZXR0aW5ncywgJ3JlYXJXaGVlbERyaXZlJyk7XG5cbiAgICB0aGlzLmdyYXBoLnVwZGF0ZSgwKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9vcCgpOiB2b2lkIHtcbiAgICBjb25zdCBub3cgPSBwZXJmb3JtYW5jZS5ub3coKTtcbiAgICBjb25zdCBlbGFwc2VkVGltZSA9IE1hdGgubWluKG5vdyAtIHRoaXMubGFzdEZyYW1lVGltZSwgY29uc3RhbnRzLkZQU19NSU4pO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGZyYW1lcmF0ZVxuICAgIGlmIChub3cgLSB0aGlzLmxhc3RGcmFtZUNvdW50VGltZSA+PSAxMDAwKSB7XG4gICAgICB0aGlzLmxhc3RGcmFtZUNvdW50VGltZSA9IG5vdztcbiAgICAgIHRoaXMuZnJhbWVSYXRlID0gdGhpcy5mcmFtZUNvdW50O1xuICAgICAgdGhpcy5mcmFtZUNvdW50ID0gMDtcbiAgICB9XG4gICAgdGhpcy5mcmFtZUNvdW50Kys7XG4gICAgdGhpcy5sYXN0RnJhbWVUaW1lID0gbm93O1xuICAgIGlmIChjb25maWcuc2hvd0ZQUykge1xuICAgICAgRGVidWcudmFsdWUoJ0ZQUycsIHRoaXMuZnJhbWVSYXRlKTtcbiAgICB9XG5cbiAgICAvLyBEbyBnYW1lIGxvb3BcbiAgICB0aGlzLmhhbmRsZUlucHV0KCk7XG4gICAgdGhpcy51cGRhdGUoZWxhcHNlZFRpbWUpO1xuICAgIHRoaXMuZHJhdygpO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5sb29wLmJpbmQodGhpcykpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVJbnB1dCgpOiB2b2lkIHtcbiAgICBpZiAoR2FtZS5zZXR0aW5ncy50ZXN0V2hlZWwpIHtcbiAgICAgIHRoaXMudGVzdFdoZWVsLmhhbmRsZUlucHV0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FyLmhhbmRsZUlucHV0KCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgIEdhbWUuc2NyZWVuID0gdmVjKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xuXG4gICAgaWYgKEdhbWUuc2V0dGluZ3MudGVzdFdoZWVsKSB7XG4gICAgICB0aGlzLnRlc3RXaGVlbC51cGRhdGUoZHQpO1xuICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24gPSB2ZWMuY2xvbmUodGhpcy50ZXN0V2hlZWwucG9zaXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhci51cGRhdGUoZHQpO1xuICAgICAgdGhpcy5jYW1lcmEucG9zaXRpb24gPSB2ZWMuY2xvbmUodGhpcy5jYXIucG9zaXRpb24pO1xuICAgIH1cblxuICAgIElucHV0LnVwZGF0ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3KCk6IHZvaWQge1xuICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoMCwgMCwgR2FtZS5zY3JlZW4ueCwgR2FtZS5zY3JlZW4ueSk7XG4gICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICB0aGlzLmNhbWVyYS5kcmF3KHRoaXMuY29udGV4dCk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kLmRyYXcodGhpcy5jb250ZXh0LCB0aGlzLmNhbWVyYSk7XG4gICAgdGhpcy5za2lkQ2FudmFzLmRyYXcodGhpcy5jb250ZXh0LCB0aGlzLmNhbWVyYSk7XG5cbiAgICBpZiAoR2FtZS5zZXR0aW5ncy50ZXN0V2hlZWwpIHtcbiAgICAgIHRoaXMudGVzdFdoZWVsLmRyYXcodGhpcy5jb250ZXh0LCB0aGlzLnNraWRDYW52YXMpO1xuICAgICAgdGhpcy5ncmFwaC5kcmF3KHRoaXMuY29udGV4dCwgdGhpcy50ZXN0V2hlZWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNhci5kcmF3KHRoaXMuY29udGV4dCwgdGhpcy5za2lkQ2FudmFzKTtcbiAgICAgIHRoaXMuZ3JhcGguZHJhdyh0aGlzLmNvbnRleHQsIHRoaXMuY2FyKTtcbiAgICB9XG5cbiAgICBEZWJ1Zy5kcmF3KHRoaXMuY29udGV4dCk7XG4gICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxufVxuIiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9HYW1lJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xuaW1wb3J0IEhhc1doZWVscyBmcm9tICcuL0hhc1doZWVscyc7XG5pbXBvcnQge1xuICBjbGFtcCxcbiAgbGVycEFycmF5LFxuICBsaW5lYXJUcmFuc2Zvcm0sXG4gIHNtb290aHN0ZXAsXG59IGZyb20gJy4vdXRpbGl0aWVzJztcbmltcG9ydCB7IHZlYyB9IGZyb20gJy4vdmVjJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR3JhcGggaW1wbGVtZW50cyBFbnRpdHkge1xuICBwcml2YXRlIHJlYWRvbmx5IHNpemU6IHZlYyA9IHZlYygyMDAsIDIwMCk7XG4gIHByaXZhdGUgcmVhZG9ubHkgbWFyZ2luOiBudW1iZXIgPSAyMDtcbiAgcHJpdmF0ZSByZWFkb25seSBjb2xvdXJzOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlcl1bXSA9IFtcbiAgICBbMCwgMCwgMjU1XSxcbiAgICBbMCwgMjU1LCAyNTVdLFxuICAgIFsyNTUsIDI1NSwgMF0sXG4gICAgWzI1NSwgMCwgMF0sXG4gIF07XG5cbiAgcHJpdmF0ZSBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBwcml2YXRlIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuc2l6ZS54O1xuICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuc2l6ZS55O1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgIGlmIChjb250ZXh0ICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBnZXQgYSAyZCBjb250ZXh0IGZvciB0aGUgc2xpcCBjdXJ2ZSBncmFwaC5cIik7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8PSB0aGlzLnNpemUueDsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8PSB0aGlzLnNpemUueTsgeSsrKSB7XG4gICAgICAgIGNvbnN0IHNsaXAgPSBjbGFtcChsaW5lYXJUcmFuc2Zvcm0oXG4gICAgICAgICAgeCAvIHRoaXMuc2l6ZS54LFxuICAgICAgICAgIEdhbWUuc2V0dGluZ3MudHlyZVNsaXBDb2VmZmljaWVudCxcbiAgICAgICAgICBHYW1lLnNldHRpbmdzLnR5cmVTbGlwT2Zmc2V0XG4gICAgICAgICkpO1xuICAgICAgICBjb25zdCBzcGVlZCA9IGNsYW1wKGxpbmVhclRyYW5zZm9ybShcbiAgICAgICAgICB5IC8gdGhpcy5zaXplLnksXG4gICAgICAgICAgR2FtZS5zZXR0aW5ncy50eXJlU3BlZWRDb2VmZmljaWVudCxcbiAgICAgICAgICBHYW1lLnNldHRpbmdzLnR5cmVTcGVlZE9mZnNldFxuICAgICAgICApKTtcbiAgICAgICAgY29uc3QgaW52ZXJzZURyYWcgPSBjbGFtcChzbGlwICogc3BlZWQpO1xuXG4gICAgICAgIGNvbnN0IHIgPSBNYXRoLmZsb29yKGxlcnBBcnJheSh0aGlzLmNvbG91cnMubWFwKGMgPT4gY1swXSksIGludmVyc2VEcmFnLCBzbW9vdGhzdGVwKSk7XG4gICAgICAgIGNvbnN0IGcgPSBNYXRoLmZsb29yKGxlcnBBcnJheSh0aGlzLmNvbG91cnMubWFwKGMgPT4gY1sxXSksIGludmVyc2VEcmFnLCBzbW9vdGhzdGVwKSk7XG4gICAgICAgIGNvbnN0IGIgPSBNYXRoLmZsb29yKGxlcnBBcnJheSh0aGlzLmNvbG91cnMubWFwKGMgPT4gY1syXSksIGludmVyc2VEcmFnLCBzbW9vdGhzdGVwKSk7XG5cbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGByZ2IoJHtyfSwgJHtnfSwgJHtifSlgO1xuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgdGhpcy5zaXplLnkgLSB5LCAxLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FyOiBIYXNXaGVlbHMpOiB2b2lkIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZShcbiAgICAgIEdhbWUuc2NyZWVuLnggLSB0aGlzLnNpemUueCAtIHRoaXMubWFyZ2luLFxuICAgICAgR2FtZS5zY3JlZW4ueSAtIHRoaXMuc2l6ZS55IC0gdGhpcy5tYXJnaW5cbiAgICApO1xuICAgIGNvbnRleHQuZHJhd0ltYWdlKFxuICAgICAgdGhpcy5jYW52YXMsXG4gICAgICAwLCAwXG4gICAgKTtcbiAgICBjb25zdCB3aGVlbFN0YXRzID0gY2FyLmdldFdoZWVsU3RhdHMoKTtcbiAgICBmb3IgKGNvbnN0IHdoZWVsIG9mIHdoZWVsU3RhdHMpIHtcbiAgICAgIHRoaXMuZHJhd0Nyb3NzKFxuICAgICAgICBjb250ZXh0LFxuICAgICAgICB2ZWMod2hlZWwuc2xpcCAqIHRoaXMuc2l6ZS54LCAoMSAtIHdoZWVsLnNwZWVkKSAqIHRoaXMuc2l6ZS55KSxcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBkcmF3Q3Jvc3MoXG4gICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELFxuICAgIHBvc2l0aW9uOiB2ZWMsXG4gICAgY29sb3VyOiBzdHJpbmcgPSAnd2hpdGUnLFxuICAgIHNpemU6IG51bWJlciA9IDZcbiAgKTogdm9pZCB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC5zdHJva2VTdHlsZSA9IGNvbG91cjtcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDI7XG4gICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICBjb25zdCBoYWxmU2l6ZSA9IHNpemUgLyAyO1xuICAgIGNvbnRleHQubW92ZVRvKHBvc2l0aW9uLnggLSBoYWxmU2l6ZSwgcG9zaXRpb24ueSAtIGhhbGZTaXplKTtcbiAgICBjb250ZXh0LmxpbmVUbyhwb3NpdGlvbi54ICsgaGFsZlNpemUsIHBvc2l0aW9uLnkgKyBoYWxmU2l6ZSk7XG4gICAgY29udGV4dC5tb3ZlVG8ocG9zaXRpb24ueCAtIGhhbGZTaXplLCBwb3NpdGlvbi55ICsgaGFsZlNpemUpO1xuICAgIGNvbnRleHQubGluZVRvKHBvc2l0aW9uLnggKyBoYWxmU2l6ZSwgcG9zaXRpb24ueSAtIGhhbGZTaXplKTtcbiAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgIGNvbnRleHQucmVzdG9yZSgpO1xuICB9XG59XG4iLCJpbXBvcnQgeyB2ZWMgfSBmcm9tICcuL3ZlYyc7XG5cbnR5cGUgTW91c2VTdGF0ZSA9IHtcbiAgYnV0dG9uOiBib29sZWFuO1xuICBwb3NpdGlvbjogdmVjO1xuICB3aGVlbDogbnVtYmVyO1xufTtcblxuY29uc3Qga2V5cyA9IFtcbiAgJ0Fycm93VXAnLFxuICAnQXJyb3dEb3duJyxcbiAgJ0Fycm93TGVmdCcsXG4gICdBcnJvd1JpZ2h0JyxcbiAgJ1NwYWNlJyxcbiAgJ0VudGVyJyxcbiAgJ1NoaWZ0JyxcbiAgJ0NvbnRyb2wnLFxuICAnRXNjYXBlJyxcbl0gYXMgY29uc3Q7XG5cbnR5cGUgS2V5Ym9hcmRTdGF0ZSA9IHtcbiAgW2tleSBpbiB0eXBlb2Yga2V5c1tudW1iZXJdXT86IGJvb2xlYW47XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbnB1dCB7XG4gIHByaXZhdGUgc3RhdGljIGluc3RhbmNlOiBJbnB1dDtcbiAgcHJpdmF0ZSBrZXlib2FyZFN0YXRlOiBLZXlib2FyZFN0YXRlID0ge307XG4gIHByaXZhdGUgcHJldmlvdXNLZXlib2FyZFN0YXRlOiBLZXlib2FyZFN0YXRlID0ge307XG4gIHByaXZhdGUgbW91c2VTdGF0ZTogTW91c2VTdGF0ZSA9IHsgYnV0dG9uOiBmYWxzZSwgcG9zaXRpb246IHZlYygpLCB3aGVlbDogMCB9O1xuICBwcml2YXRlIHByZXZpb3VzTW91c2VTdGF0ZTogTW91c2VTdGF0ZSA9IHsgYnV0dG9uOiBmYWxzZSwgcG9zaXRpb246IHZlYygpLCB3aGVlbDogMCB9O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHtcbiAgICAgIHRoaXMubW91c2VTdGF0ZS5idXR0b24gPSB0cnVlO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgdGhpcy5tb3VzZVN0YXRlLmJ1dHRvbiA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuICAgICAgdGhpcy5tb3VzZVN0YXRlLmJ1dHRvbiA9IHRydWU7XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgKCkgPT4ge1xuICAgICAgdGhpcy5tb3VzZVN0YXRlLmJ1dHRvbiA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBlID0+IHtcbiAgICAgIHRoaXMubW91c2VTdGF0ZS5wb3NpdGlvbi54ID0gZS5vZmZzZXRYO1xuICAgICAgdGhpcy5tb3VzZVN0YXRlLnBvc2l0aW9uLnkgPSBlLm9mZnNldFk7XG4gICAgfSk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+IHtcbiAgICAgIHRoaXMua2V5Ym9hcmRTdGF0ZVtlLmNvZGUgYXMga2V5b2YgS2V5Ym9hcmRTdGF0ZV0gPSB0cnVlO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGUgPT4ge1xuICAgICAgdGhpcy5rZXlib2FyZFN0YXRlW2UuY29kZSBhcyBrZXlvZiBLZXlib2FyZFN0YXRlXSA9IGZhbHNlO1xuICAgIH0pO1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4ge1xuICAgICAgdGhpcy5tb3VzZVN0YXRlLndoZWVsID0gZS5kZWx0YVkgPiAwID8gMSA6IC0xO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEluaXRpYWxpc2UgdGhlIGlucHV0IG1hbmFnZXIgZm9yIG1hbmFnaW5nIG1vdXNlIGFuZCBrZXlib2FyZCBpbnB1dFxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBpbml0aWFsaXNlKCk6IHZvaWQge1xuICAgIElucHV0Lmluc3RhbmNlID0gbmV3IElucHV0KCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXRpYyBnZXRJbnN0YW5jZSgpOiBJbnB1dCB7XG4gICAgaWYgKElucHV0Lmluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5wdXQgbWFuYWdlciBub3QgcHJvcGVybHkgaW5pdGlhbGlzZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIElucHV0Lmluc3RhbmNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIGlucHV0IGRldmljZXNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgdXBkYXRlKCk6IHZvaWQge1xuICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXQuZ2V0SW5zdGFuY2UoKTtcbiAgICBpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGUgPSBPYmplY3QuYXNzaWduKHt9LCBpbnN0YW5jZS5rZXlib2FyZFN0YXRlKTtcbiAgICBpbnN0YW5jZS5wcmV2aW91c01vdXNlU3RhdGUgPSB7XG4gICAgICBidXR0b246IGluc3RhbmNlLm1vdXNlU3RhdGUuYnV0dG9uLFxuICAgICAgcG9zaXRpb246IHZlYy5jbG9uZShpbnN0YW5jZS5tb3VzZVN0YXRlLnBvc2l0aW9uKSxcbiAgICAgIHdoZWVsOiAwLFxuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBrZXkgaXMgY3VycmVudGx5IHByZXNzZWQgZG93blxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBrZXlEb3duKGtleT86IGtleW9mIEtleWJvYXJkU3RhdGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0LmdldEluc3RhbmNlKCk7XG5cbiAgICAvLyBDaGVjayBpZiBhbnkga2V5IGlzIGRvd25cbiAgICBpZiAoIWtleSkge1xuICAgICAgZm9yIChjb25zdCBrIGluIE9iamVjdC5rZXlzKGluc3RhbmNlLmtleWJvYXJkU3RhdGUpKSB7XG4gICAgICAgIGlmIChpbnN0YW5jZS5rZXlib2FyZFN0YXRlW2sgYXMga2V5b2YgS2V5Ym9hcmRTdGF0ZV0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gISFpbnN0YW5jZS5rZXlib2FyZFN0YXRlW2tleV07XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBrZXkgaGFzIGJlZW4gcHJlc3NlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBrZXlQcmVzc2VkKGtleT86IGtleW9mIEtleWJvYXJkU3RhdGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0LmdldEluc3RhbmNlKCk7XG5cbiAgICAvLyBDaGVjayBpZiBhbnkga2V5IHdhcyBwcmVzc2VkXG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIGZvciAoY29uc3QgayBpbiBPYmplY3Qua2V5cyhpbnN0YW5jZS5rZXlib2FyZFN0YXRlKSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtrIGFzIGtleW9mIEtleWJvYXJkU3RhdGVdICYmXG4gICAgICAgICAgKFxuICAgICAgICAgICAgIShrIGluIGluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZSkgfHxcbiAgICAgICAgICAgICFpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGVbayBhcyBrZXlvZiBLZXlib2FyZFN0YXRlXVxuICAgICAgICAgIClcbiAgICAgICAgKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuICEhaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtrZXldICYmICFpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGVba2V5XTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIGtleSBoYXMgYmVlbiByZWxlYXNlZCBzaW5jZSB0aGUgbGFzdCBmcmFtZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBrZXlSZWxlYXNlZChrZXk/OiBrZXlvZiBLZXlib2FyZFN0YXRlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dC5nZXRJbnN0YW5jZSgpO1xuXG4gICAgLy8gQ2hlY2sgaWYgYW55IGtleSB3YXMgcmVsZWFzZWRcbiAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgIGZvciAoY29uc3QgayBpbiBpbnN0YW5jZS5rZXlib2FyZFN0YXRlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAhaW5zdGFuY2Uua2V5Ym9hcmRTdGF0ZVtrIGFzIGtleW9mIEtleWJvYXJkU3RhdGVdICYmXG4gICAgICAgICAgISFpbnN0YW5jZS5wcmV2aW91c0tleWJvYXJkU3RhdGVbayBhcyBrZXlvZiBLZXlib2FyZFN0YXRlXVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgIWluc3RhbmNlLmtleWJvYXJkU3RhdGVba2V5IGFzIGtleW9mIEtleWJvYXJkU3RhdGVdICYmXG4gICAgICAhIWluc3RhbmNlLnByZXZpb3VzS2V5Ym9hcmRTdGF0ZVtrZXkgYXMga2V5b2YgS2V5Ym9hcmRTdGF0ZV1cbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIGEgbW91c2UgYnV0dG9uIGlzIGN1cnJlbnRseSBwcmVzc2VkIGRvd25cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbW91c2VEb3duKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXQuZ2V0SW5zdGFuY2UoKTtcbiAgICByZXR1cm4gISFpbnN0YW5jZS5tb3VzZVN0YXRlLmJ1dHRvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiBhIG1vdXNlIGJ1dHRvbiBoYXMgYmVlbiBwcmVzc2VkIHNpbmNlIHRoZSBsYXN0IGZyYW1lXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG1vdXNlUHJlc3NlZCgpOiBib29sZWFuIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0LmdldEluc3RhbmNlKCk7XG4gICAgcmV0dXJuICEhaW5zdGFuY2UubW91c2VTdGF0ZS5idXR0b24gJiYgIWluc3RhbmNlLnByZXZpb3VzTW91c2VTdGF0ZS5idXR0b247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgYSBtb3VzZSBidXR0b24gaGFzIGJlZW4gcmVsZWFzZWQgc2luY2UgdGhlIGxhc3QgZnJhbWVcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgbW91c2VSZWxlYXNlZCgpOiBib29sZWFuIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0LmdldEluc3RhbmNlKCk7XG4gICAgcmV0dXJuICFpbnN0YW5jZS5tb3VzZVN0YXRlLmJ1dHRvbiAmJiAhIWluc3RhbmNlLnByZXZpb3VzTW91c2VTdGF0ZS5idXR0b247XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIG1vdXNld2hlZWwgaXMgc2Nyb2xsaW5nIHVwXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG1vdXNlV2hlZWxVcCgpOiBib29sZWFuIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IElucHV0LmdldEluc3RhbmNlKCk7XG4gICAgcmV0dXJuIGluc3RhbmNlLm1vdXNlU3RhdGUud2hlZWwgPiAwO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBtb3VzZXdoZWVsIGlzIHNjcm9sbGluZyBkb3duXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG1vdXNlV2hlZWxEb3duKCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGluc3RhbmNlID0gSW5wdXQuZ2V0SW5zdGFuY2UoKTtcbiAgICByZXR1cm4gaW5zdGFuY2UubW91c2VTdGF0ZS53aGVlbCA8IDA7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBjdXJyZW50IG1vdXNlIHBvc2l0aW9uIGluIHNjcmVlbi1zcGFjZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBtb3VzZVBvc2l0aW9uKCk6IHZlYyB7XG4gICAgY29uc3QgaW5zdGFuY2UgPSBJbnB1dC5nZXRJbnN0YW5jZSgpO1xuICAgIHJldHVybiBpbnN0YW5jZS5tb3VzZVN0YXRlLnBvc2l0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgQ2FtZXJhIGZyb20gJy4vQ2FtZXJhJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnLi92ZWMnO1xuXG50eXBlIENodW5rID0ge1xuICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xuICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTa2lkQ2FudmFzIGltcGxlbWVudHMgRW50aXR5IHtcbiAgcHJpdmF0ZSByZWFkb25seSBjaHVua1NpemU6IG51bWJlciA9IDUwMDtcbiAgcHJpdmF0ZSByZWFkb25seSBza2lkQmFzZUFscGhhOiBudW1iZXIgPSAwLjI1O1xuICBwcml2YXRlIHJlYWRvbmx5IHNraWRDb2xvdXI6IHN0cmluZyA9ICd3aGl0ZSc7XG5cbiAgcHJpdmF0ZSBjaHVua3M6IFJlY29yZDxzdHJpbmcsIENodW5rPiA9IHt9O1xuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQgeyB9XG5cbiAgcHVibGljIHNraWQoXG4gICAgcG9zaXRpb246IHZlYyxcbiAgICBkaXJlY3Rpb246IG51bWJlcixcbiAgICBzaXplOiB2ZWMsXG4gICAgYWxwaGE6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICAvLyBHZXQgdGhlIGNodW5rIGZvciB0aGUgc3BlY2lmaWVkIHBvc2l0aW9uXG4gICAgbGV0IGNodW5rOiBDaHVuaztcbiAgICBjb25zdCBjaHVua1Bvc2l0aW9uID0gdGhpcy5jaHVua1Bvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICBjb25zdCBoYXNoID0gdGhpcy5oYXNoUG9zaXRpb24oY2h1bmtQb3NpdGlvbik7XG4gICAgaWYgKGhhc2ggaW4gdGhpcy5jaHVua3MpIHtcbiAgICAgIGNodW5rID0gdGhpcy5jaHVua3NbaGFzaF07XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLmhlaWdodCA9IHRoaXMuY2h1bmtTaXplO1xuXG4gICAgICAvLyBHZXQgYSAyZCBjb250ZXh0XG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICBpZiAoY29udGV4dCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYENvdWxkbid0IGdldCBhIDJkIGNvbnRleHQgZm9yIHNraWQgY2h1bmsgJyR7aGFzaH0nLmApO1xuICAgICAgfVxuICAgICAgdGhpcy5jaHVua3NbaGFzaF0gPSBjaHVuayA9IHsgY2FudmFzLCBjb250ZXh0IH07XG4gICAgfVxuXG4gICAgLy8gRHJhdyBhIHNraWQgbWFyayBvbiB0aGUgY2h1bmtcbiAgICB0aGlzLmRyYXdTa2lkTWFyayhcbiAgICAgIGNodW5rLmNvbnRleHQsXG4gICAgICB2ZWMuc3ViKHBvc2l0aW9uLCB2ZWMubXVsKGNodW5rUG9zaXRpb24sIHRoaXMuY2h1bmtTaXplKSksXG4gICAgICBkaXJlY3Rpb24sXG4gICAgICBzaXplLFxuICAgICAgYWxwaGFcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBjaHVua1Bvc2l0aW9uKHBvc2l0aW9uOiB2ZWMpOiB2ZWMge1xuICAgIHJldHVybiB2ZWMubWFwKHZlYy5tdWwocG9zaXRpb24sIDEgLyB0aGlzLmNodW5rU2l6ZSksIE1hdGguZmxvb3IpO1xuICB9XG5cbiAgcHJpdmF0ZSBoYXNoUG9zaXRpb24ocG9zaXRpb246IHZlYyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHZlYy5zdHIocG9zaXRpb24sICdfJyk7XG4gIH1cblxuICBwcml2YXRlIGRyYXdTa2lkTWFyayhcbiAgICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsXG4gICAgcG9zaXRpb246IHZlYyxcbiAgICBkaXJlY3Rpb246IG51bWJlcixcbiAgICBzaXplOiB2ZWMsXG4gICAgYWxwaGE6IG51bWJlclxuICApOiB2b2lkIHtcbiAgICBjb250ZXh0LnNhdmUoKTtcbiAgICBjb250ZXh0LnRyYW5zbGF0ZShwb3NpdGlvbi54LCBwb3NpdGlvbi55KTtcbiAgICBjb250ZXh0LnJvdGF0ZShkaXJlY3Rpb24pO1xuICAgIGNvbnRleHQuZ2xvYmFsQWxwaGEgPSBhbHBoYSAqIHRoaXMuc2tpZEJhc2VBbHBoYTtcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuc2tpZENvbG91cjtcbiAgICBjb250ZXh0LmZpbGxSZWN0KFxuICAgICAgLXNpemUueCAtIHNpemUueSAvIDIsXG4gICAgICAtc2l6ZS55IC8gMixcbiAgICAgIHNpemUueCArIHNpemUueSAvIDIsXG4gICAgICBzaXplLnkgLyAyXG4gICAgKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgfVxuXG4gIHB1YmxpYyBkcmF3KGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgY2FtZXJhOiBDYW1lcmEpOiB2b2lkIHtcbiAgICBjb25zdCBib3VuZHMgPSBjYW1lcmEuYm91bmRzO1xuICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy5jaHVua1Bvc2l0aW9uKHZlYy5zdWIodmVjKGJvdW5kcy5sZWZ0LCBib3VuZHMudG9wKSwgdmVjKDEpKSk7XG4gICAgY29uc3QgZW5kID0gdGhpcy5jaHVua1Bvc2l0aW9uKHZlYy5hZGQodmVjKGJvdW5kcy5yaWdodCwgYm91bmRzLmJvdHRvbSksIHZlYygxKSkpO1xuICAgIGZvciAobGV0IHggPSBzdGFydC54OyB4IDw9IGVuZC54OyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSBzdGFydC55OyB5IDw9IGVuZC55OyB5KyspIHtcbiAgICAgICAgY29uc3QgaGFzaCA9IHRoaXMuaGFzaFBvc2l0aW9uKHZlYyh4LCB5KSk7XG4gICAgICAgIGlmIChoYXNoIGluIHRoaXMuY2h1bmtzKSB7XG4gICAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoXG4gICAgICAgICAgICB0aGlzLmNodW5rc1toYXNoXS5jYW52YXMsXG4gICAgICAgICAgICB4ICogdGhpcy5jaHVua1NpemUsXG4gICAgICAgICAgICB5ICogdGhpcy5jaHVua1NpemVcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuaW1wb3J0IElucHV0IGZyb20gJy4vSW5wdXQnO1xuaW1wb3J0IFNraWRDYW52YXMgZnJvbSAnLi9Ta2lkQ2FudmFzJztcbmltcG9ydCBFbnRpdHkgZnJvbSAnLi9FbnRpdHknO1xuaW1wb3J0IEhhc1doZWVscywgeyBXaGVlbFN0YXRzIH0gZnJvbSAnLi9IYXNXaGVlbHMnO1xuaW1wb3J0IFdoZWVsIGZyb20gJy4vV2hlZWwnO1xuaW1wb3J0IHsgdmVjIH0gZnJvbSAnLi92ZWMnO1xuaW1wb3J0ICogYXMgY29uZmlnIGZyb20gJy4vY29uZmlnLmpzb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXN0V2hlZWwgaW1wbGVtZW50cyBFbnRpdHksIEhhc1doZWVscyB7XG4gIHB1YmxpYyBkaXJlY3Rpb246IG51bWJlcjtcbiAgcHVibGljIHNwZWVkOiBudW1iZXIgPSAwO1xuXG4gIHB1YmxpYyB0aHJvdHRsZTogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgYnJha2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHJldmVyc2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIGhhbmRicmFrZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIHByaXZhdGUgd2hlZWw6IFdoZWVsO1xuXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihcbiAgICBwb3NpdGlvbjogdmVjLFxuICAgIGRpcmVjdGlvbjogbnVtYmVyXG4gICkge1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuXG4gICAgLy8gQWRkIHRlc3Qgd2hlZWxcbiAgICB0aGlzLndoZWVsID0gbmV3IFdoZWVsKFxuICAgICAgdmVjLmNsb25lKHBvc2l0aW9uKSxcbiAgICAgIGRpcmVjdGlvblxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBvc2l0aW9uKCk6IHZlYyB7XG4gICAgcmV0dXJuIHRoaXMud2hlZWwucG9zaXRpb247XG4gIH1cblxuICBwdWJsaWMgZ2V0V2hlZWxTdGF0cygpOiBXaGVlbFN0YXRzW10ge1xuICAgIHJldHVybiBbdGhpcy53aGVlbC5zdGF0c107XG4gIH1cblxuICBwdWJsaWMgaGFuZGxlSW5wdXQoKTogdm9pZCB7XG4gICAgdGhpcy5oYW5kYnJha2UgPSBJbnB1dC5rZXlEb3duKGNvbmZpZy5jb250cm9scy5oYW5kYnJha2UgYXMgYW55KTtcblxuICAgIC8vIFRocm90dGxlIC8gYnJlYWsgLyByZXZlcnNlXG4gICAgdGhpcy50aHJvdHRsZSA9IElucHV0LmtleURvd24oY29uZmlnLmNvbnRyb2xzLnRocm90dGxlIGFzIGFueSk7XG4gICAgdGhpcy5icmFrZSA9IElucHV0LmtleURvd24oY29uZmlnLmNvbnRyb2xzLmJyYWtlIGFzIGFueSk7XG5cbiAgICAvLyBTdGVlcmluZ1xuICAgIGlmIChJbnB1dC5rZXlEb3duKGNvbmZpZy5jb250cm9scy5sZWZ0IGFzIGFueSkpIHtcbiAgICAgIHRoaXMuZGlyZWN0aW9uIC09IEdhbWUuc2V0dGluZ3MuY2FyU3RlZXJpbmdBbW91bnQ7XG4gICAgfVxuICAgIGlmIChJbnB1dC5rZXlEb3duKGNvbmZpZy5jb250cm9scy5yaWdodCBhcyBhbnkpKSB7XG4gICAgICB0aGlzLmRpcmVjdGlvbiArPSBHYW1lLnNldHRpbmdzLmNhclN0ZWVyaW5nQW1vdW50O1xuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGRyaXZlID0gdGhpcy50aHJvdHRsZSA/IEdhbWUuc2V0dGluZ3MuY2FyRW5naW5lUG93ZXIgOiAwO1xuICAgIGNvbnN0IGJyYWtlID0gdGhpcy5icmFrZSA/IEdhbWUuc2V0dGluZ3MuY2FyQnJha2VQb3dlciA6IDA7XG5cbiAgICB0aGlzLndoZWVsLnVwZGF0ZShkdCwgZHJpdmUsIGJyYWtlLCB0aGlzLmhhbmRicmFrZSwgdGhpcy5kaXJlY3Rpb24pO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBza2lkQ2FudmFzOiBTa2lkQ2FudmFzKTogdm9pZCB7XG4gICAgdGhpcy53aGVlbC5kcmF3KGNvbnRleHQsIHNraWRDYW52YXMpO1xuICB9XG59XG4iLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuaW1wb3J0IEVudGl0eSBmcm9tICcuL0VudGl0eSc7XG5pbXBvcnQgeyB2ZWMgfSBmcm9tICcuL3ZlYyc7XG5pbXBvcnQge1xuICBjbGFtcCxcbiAgbGluZWFyVHJhbnNmb3JtLFxuICBzbW9vdGhzdGVwLFxufSBmcm9tICcuL3V0aWxpdGllcyc7XG5pbXBvcnQgU2tpZENhbnZhcyBmcm9tICcuL1NraWRDYW52YXMnO1xuaW1wb3J0IHsgV2hlZWxTdGF0cyB9IGZyb20gJy4vSGFzV2hlZWxzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV2hlZWwgaW1wbGVtZW50cyBFbnRpdHkge1xuICBwdWJsaWMgcG9zaXRpb246IHZlYztcbiAgcHVibGljIGRpcmVjdGlvbjogbnVtYmVyO1xuICBwdWJsaWMgdmVsb2NpdHk6IHZlYyA9IHZlYygpO1xuICBwdWJsaWMgc3BlZWQ6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIHNsaXBDb2VmZmljaWVudDogbnVtYmVyID0gMDtcbiAgcHVibGljIHNwZWVkQ29lZmZpY2llbnQ6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKFxuICAgIHBvc2l0aW9uOiB2ZWMsXG4gICAgZGlyZWN0aW9uOiBudW1iZXIgPSAwXG4gICkge1xuICAgIHRoaXMucG9zaXRpb24gPSB2ZWMuY2xvbmUocG9zaXRpb24pO1xuICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uO1xuICB9XG5cbiAgcHVibGljIGdldCBzbGlwQW1vdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuc2xpcENvZWZmaWNpZW50ICogdGhpcy5zcGVlZENvZWZmaWNpZW50O1xuICB9XG5cbiAgcHVibGljIGdldCBzdGF0cygpOiBXaGVlbFN0YXRzIHtcbiAgICByZXR1cm4ge1xuICAgICAgc2xpcDogdGhpcy5zbGlwQ29lZmZpY2llbnQsXG4gICAgICBzcGVlZDogdGhpcy5zcGVlZENvZWZmaWNpZW50LFxuICAgIH07XG4gIH1cblxuICBwdWJsaWMgdXBkYXRlKFxuICAgIGR0OiBudW1iZXIsXG4gICAgZHJpdmU6IG51bWJlcixcbiAgICBicmFrZTogbnVtYmVyLFxuICAgIGhhbmRicmFrZTogYm9vbGVhbixcbiAgICBkaXJlY3Rpb246IG51bWJlclxuICApOiB2b2lkIHtcbiAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbjtcblxuICAgIC8vIENhbGN1bGF0ZSBkZWx0YS12ICh0aGlzIGlzIHdoZXJlIHRoZSB3aGVlbCAqd2FudHMqIHRvIGdvKVxuICAgIGNvbnN0IGR2ID0gdmVjLnJvdCh2ZWMoKGRyaXZlIC0gYnJha2UpICogZHQsIDApLCB0aGlzLmRpcmVjdGlvbik7XG5cbiAgICAvLyBDYWxjdWxhdGUgdGhlIHNwZWVkIGNvZWZmaWNpZW50ICh0aGUgbWFnbml0dWRlIG9mIHRoZSB0eXJlJ3MgdmVsb2NpdHlcbiAgICAvLyBub3JtYWxpc2VkIHRvIHRoZSBtYXggc3BlZWQgb2YgdGhlIGNhcilcbiAgICB0aGlzLnNwZWVkQ29lZmZpY2llbnQgPSBjbGFtcCh0aGlzLnNwZWVkIC8gR2FtZS5zZXR0aW5ncy5jYXJNYXhTcGVlZCk7XG4gICAgY29uc3Qgc3BlZWRDb21wb25lbnQgPSBjbGFtcChsaW5lYXJUcmFuc2Zvcm0oXG4gICAgICB0aGlzLnNwZWVkQ29lZmZpY2llbnQsXG4gICAgICBHYW1lLnNldHRpbmdzLnR5cmVTcGVlZENvZWZmaWNpZW50LFxuICAgICAgR2FtZS5zZXR0aW5ncy50eXJlU3BlZWRPZmZzZXRcbiAgICApKTtcblxuICAgIC8vIENhbGN1bGF0ZSB0aGUgYW1vdW50IG9mIHNsaXAgKHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIGRpcmVjdGlvbiB0aGUgdHlyZSBpc1xuICAgIC8vIGZhY2luZywgYW5kIHRoZSBkaXJlY3Rpb24gdGhlIHR5cmUgaXMgYWN0dWFsbHkgdHJhdmVsbGluZylcbiAgICBpZiAodmVjLmVxKHRoaXMudmVsb2NpdHksIHZlYygpKSkge1xuICAgICAgdGhpcy5zbGlwQ29lZmZpY2llbnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNsaXBDb2VmZmljaWVudCA9IGNsYW1wKDEgLSB2ZWMuZG90KFxuICAgICAgICB2ZWMucm90KHZlYy51eCgpLCB0aGlzLmRpcmVjdGlvbiksXG4gICAgICAgIHZlYy5ub3IodGhpcy52ZWxvY2l0eSlcbiAgICAgICkpO1xuICAgIH1cbiAgICBjb25zdCBzbGlwQ29tcG9uZW50ID0gY2xhbXAobGluZWFyVHJhbnNmb3JtKFxuICAgICAgdGhpcy5zbGlwQ29lZmZpY2llbnQsXG4gICAgICBHYW1lLnNldHRpbmdzLnR5cmVTbGlwQ29lZmZpY2llbnQsXG4gICAgICBHYW1lLnNldHRpbmdzLnR5cmVTbGlwT2Zmc2V0XG4gICAgKSk7XG5cbiAgICAvLyBDYWxjdWxhdGUgbGF0ZXJhbCBkcmFnICh0aGUgYW1vdW50IG9mIGRyYWcgYXQgYSBub3JtYWwgdG8gdGhlIHR5cmUnc1xuICAgIC8vIGRpcmVjdGlvbilcbiAgICBjb25zdCBsYXRlcmFsRHJhZyA9IHNtb290aHN0ZXAoXG4gICAgICBHYW1lLnNldHRpbmdzLnR5cmVMYXRlcmFsRHJhZ01pbixcbiAgICAgIEdhbWUuc2V0dGluZ3MudHlyZUxhdGVyYWxEcmFnTWF4LFxuICAgICAgMSAtIGNsYW1wKHNsaXBDb21wb25lbnQgKiBzcGVlZENvbXBvbmVudClcbiAgICApO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGxvbmdpdHVkaW5hbCBkcmFnICh0aGUgYW1vdW50IG9mIGRyYXcgaW4gdGhlIGRpcmVjdGlvbiBvZiB0aGUgdHlyZSlcbiAgICAvLyBXaGVuIHRoZSB0eXJlIGlzIHJvbGxpbmcsIHRoaXMgaXMgYSByZWFsbHkgc21hbGwgbnVtYmVyIHJlcHJlc2VudGluZyBhaXIgcmVzaXN0YW5jZSxcbiAgICAvLyByb2xsaW5nIGZyaWN0aW9uIGV0Yy5cbiAgICAvLyBXaGVuIHRoZSBoYW5kYnJha2UgaXMgYXBwbGllZCwgdGhpcyBzaG91bGQgYmUgdGhlIHNhbWUgYXMgbGF0ZXJhbCBkcmFnXG4gICAgY29uc3QgbG9uZ2l0dWRpbmFsRHJhZyA9IGhhbmRicmFrZSA/IGxhdGVyYWxEcmFnIDogR2FtZS5zZXR0aW5ncy50eXJlTG9uZ2l0dWRpbmFsRHJhZztcblxuICAgIC8vIENhbGN1bGF0ZSBhIHZlbG9jaXR5IHZlY3RvciBwb2ludGluZyBpbiB0aGUgdHlyZSdzIGRpcmVjdGlvbiBzbyB3ZSBjYW4gYXBwbHlcbiAgICAvLyBsb25naXR1ZGluYWwgZHJhZyAoZmFjaW5nIGluIHRoZSBkaXJlY3Rpb24gb2YgdGhlIHR5cmUpIGFuZCBsYXRlcmFsIGRyYWdcbiAgICBjb25zdCBydiA9IHZlYy5yb3QodmVjLmFkZCh0aGlzLnZlbG9jaXR5LCBkdiksIC10aGlzLmRpcmVjdGlvbik7XG4gICAgcnYueCAqPSAxIC0gbG9uZ2l0dWRpbmFsRHJhZztcbiAgICBydi55ICo9IDEgLSBsYXRlcmFsRHJhZztcbiAgICB0aGlzLnZlbG9jaXR5ID0gdmVjLnJvdChydiwgdGhpcy5kaXJlY3Rpb24pO1xuICAgIHRoaXMuc3BlZWQgPSB2ZWMubGVuKHRoaXMudmVsb2NpdHkpO1xuXG4gICAgLy8gSWYgdmVsb2NpdHkgZ2V0cyBzbWFsbCBlbm91Z2gsIHNuYXAgdG8gMFxuICAgIGlmICh0aGlzLnNwZWVkIDwgMSkge1xuICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlYygpO1xuICAgIH1cblxuICAgIC8vIEV1bGVyIGludGVncmF0aW9uXG4gICAgdGhpcy5wb3NpdGlvbiA9IHZlYy5hZGQodGhpcy5wb3NpdGlvbiwgdmVjLm11bCh0aGlzLnZlbG9jaXR5LCBkdCkpO1xuICB9XG5cbiAgcHVibGljIGRyYXcoY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBza2lkQ2FudmFzOiBTa2lkQ2FudmFzKTogdm9pZCB7XG4gICAgY29udGV4dC5zYXZlKCk7XG4gICAgY29udGV4dC50cmFuc2xhdGUodGhpcy5wb3NpdGlvbi54LCB0aGlzLnBvc2l0aW9uLnkpO1xuICAgIGNvbnRleHQucm90YXRlKHRoaXMuZGlyZWN0aW9uKTtcbiAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3doaXRlJztcbiAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgY29udGV4dC5zdHJva2VSZWN0KFxuICAgICAgLUdhbWUuc2V0dGluZ3Mud2hlZWxMZW5ndGggLyAyLFxuICAgICAgLUdhbWUuc2V0dGluZ3Mud2hlZWxXaWR0aCAvIDIsXG4gICAgICBHYW1lLnNldHRpbmdzLndoZWVsTGVuZ3RoLFxuICAgICAgR2FtZS5zZXR0aW5ncy53aGVlbFdpZHRoXG4gICAgKTtcbiAgICBjb250ZXh0LnJlc3RvcmUoKTtcblxuICAgIC8vIERyYXcgc2tpZCBtYXJrXG4gICAgaWYgKHRoaXMuc2xpcENvZWZmaWNpZW50ID4gMCkge1xuICAgICAgc2tpZENhbnZhcy5za2lkKFxuICAgICAgICB0aGlzLnBvc2l0aW9uLFxuICAgICAgICB0aGlzLmRpcmVjdGlvbixcbiAgICAgICAgdmVjKFxuICAgICAgICAgIEdhbWUuc2V0dGluZ3Mud2hlZWxMZW5ndGgsXG4gICAgICAgICAgR2FtZS5zZXR0aW5ncy53aGVlbFdpZHRoXG4gICAgICAgICksXG4gICAgICAgIHRoaXMuc2xpcEFtb3VudFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBERUJVRyA9IHRydWU7XG5leHBvcnQgY29uc3QgRlBTX01JTiA9IDEgLyAzMDtcbiIsImltcG9ydCB7IHZlYyB9IGZyb20gJy4vdmVjJztcblxuZXhwb3J0IGZ1bmN0aW9uIGNsYW1wKGE6IG51bWJlciwgbWluOiBudW1iZXIgPSAwLCBtYXg6IG51bWJlciA9IDEpOiBudW1iZXIge1xuICByZXR1cm4gYSA8IG1pbiA/IG1pbiA6IChhID4gbWF4ID8gbWF4IDogYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwKGE6IG51bWJlciwgYjogbnVtYmVyLCBpOiBudW1iZXIpOiBudW1iZXIge1xuICByZXR1cm4gYSArIChiIC0gYSkgKiBpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc21vb3Roc3RlcChhOiBudW1iZXIsIGI6IG51bWJlciwgaTogbnVtYmVyKTogbnVtYmVyIHtcbiAgcmV0dXJuIGxlcnAoYSwgYiwgMyAqIE1hdGgucG93KGksIDIpIC0gMiAqIE1hdGgucG93KGksIDMpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBEaXJlY3Rpb24oZDogbnVtYmVyKTogbnVtYmVyIHtcbiAgY29uc3QgYyA9IE1hdGguUEkgKiAyO1xuICB3aGlsZSAoZCA8IDApIHsgZCArPSBjOyB9XG4gIHdoaWxlIChkID4gYykgeyBkIC09IGM7IH1cbiAgcmV0dXJuIGQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsaW5lYXJUcmFuc2Zvcm0oXG4gIHg6IG51bWJlcixcbiAgbTogbnVtYmVyLFxuICBjOiBudW1iZXJcbik6IG51bWJlciB7XG4gIHJldHVybiB4ICogbSArIGM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmcmFjKGE6IG51bWJlcik6IG51bWJlciB7XG4gIHJldHVybiBhID49IDAgPyBhIC0gTWF0aC5mbG9vcihhKSA6IGEgLSBNYXRoLmNlaWwoYSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZXJwQXJyYXkoYTogbnVtYmVyW10sIGk6IG51bWJlciwgZjogdHlwZW9mIGxlcnAgPSBsZXJwKSB7XG4gIGNvbnN0IHMgPSBpICogKGEubGVuZ3RoIC0gMSk7XG4gIGNvbnN0IHAgPSBjbGFtcChNYXRoLnRydW5jKHMpLCAwLCBhLmxlbmd0aCAtIDEpO1xuICByZXR1cm4gZihhW3BdIHx8IDAsIGFbcCArIDFdIHx8IDAsIGZyYWMocykpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZjogRnVuY3Rpb24sIG1zOiBudW1iZXIgPSAxMDApIHtcbiAgbGV0IHRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PjtcbiAgcmV0dXJuICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGYuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfSwgbXMpO1xuICB9O1xufVxuIiwiZXhwb3J0IHR5cGUgdmVjID0geyB4OiBudW1iZXIsIHk6IG51bWJlciB9O1xuZXhwb3J0IGNvbnN0IHZlYyA9ICh4PzogbnVtYmVyLCB5PzogbnVtYmVyKTogdmVjID0+IHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCAmJiB5ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4geyB4OiAwLCB5OiAwIH07XG4gIH1cbiAgaWYgKHR5cGVvZiB4ID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB2ZWMuY2xvbmUoeCk7XG4gIH1cbiAgaWYgKHkgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB2ZWMuZGlhZyh4ID8/IDApO1xuICB9XG4gIHJldHVybiB7IHg6IHggPz8gMCwgeTogeSA/PyAwIH07XG59XG52ZWMuY2xvbmUgPSAoYTogdmVjKTogdmVjID0+ICh7IHg6IGEueCwgeTogYS55IH0pO1xudmVjLmRpYWcgPSAobjogbnVtYmVyKTogdmVjID0+ICh7IHg6IG4sIHk6IG4gfSk7XG52ZWMuY29tcG9uZW50cyA9IChhOiB2ZWMpOiBbbnVtYmVyLCBudW1iZXJdID0+IFthLngsIGEueV07XG52ZWMudXggPSAoKSA9PiB2ZWMoMSwgMCk7XG52ZWMudXkgPSAoKSA9PiB2ZWMoMCwgMSk7XG52ZWMuYWRkID0gKGE6IHZlYywgYjogdmVjKTogdmVjID0+ICh7IHg6IGEueCArIGIueCwgeTogYS55ICsgYi55IH0pO1xudmVjLm11bCA9IChhOiB2ZWMsIGI6IG51bWJlcik6IHZlYyA9PiAoeyB4OiBhLnggKiBiLCB5OiBhLnkgKiBiIH0pO1xudmVjLnN1YiA9IChhOiB2ZWMsIGI6IHZlYykgPT4gKHsgeDogYS54IC0gYi54LCB5OiBhLnkgLSBiLnkgfSk7XG52ZWMubGVuID0gKGE6IHZlYyk6IG51bWJlciA9PiBNYXRoLnNxcnQoYS54ICogYS54ICsgYS55ICogYS55KTtcbnZlYy5tYW5oYXR0YW4gPSAoYTogdmVjKTogbnVtYmVyID0+IE1hdGguYWJzKGEueCkgKyBNYXRoLmFicyhhLnkpO1xudmVjLm5vciA9IChhOiB2ZWMpOiB2ZWMgPT4ge1xuICBjb25zdCBsID0gdmVjLmxlbihhKTtcbiAgcmV0dXJuIGwgPyB7IHg6IGEueCAvIGwsIHk6IGEueSAvIGwgfSA6IHZlYygpO1xufTtcbnZlYy5kb3QgPSAoYTogdmVjLCBiOiB2ZWMpOiBudW1iZXIgPT4gYS54ICogYi54ICsgYS55ICogYi55O1xudmVjLnJvdCA9IChhOiB2ZWMsIHI6IG51bWJlcik6IHZlYyA9PiB7XG4gIGNvbnN0IHMgPSBNYXRoLnNpbihyKSwgYyA9IE1hdGguY29zKHIpO1xuICByZXR1cm4geyB4OiBjICogYS54IC0gcyAqIGEueSwgeTogcyAqIGEueCArIGMgKiBhLnkgfTtcbn1cbnZlYy5lcSA9IChhOiB2ZWMsIGI6IHZlYyk6IGJvb2xlYW4gPT4gYS54ID09PSBiLnggJiYgYS55ID09PSBiLnk7XG52ZWMucmFkID0gKGE6IHZlYyk6IG51bWJlciA9PiBNYXRoLmF0YW4yKGEueSwgYS54KTtcbnZlYy5tYXAgPSAoYTogdmVjLCBmOiAobjogbnVtYmVyLCBsPzogc3RyaW5nKSA9PiBudW1iZXIpID0+ICh7IHg6IGYoYS54LCAneCcpLCB5OiBmKGEueSwgJ3knKSB9KTtcbnZlYy5zdHIgPSAoYTogdmVjLCBzOiBzdHJpbmcgPSAnLCAnKSA9PiBbYS54LCBzLCBhLnldLmpvaW4oJycpO1xudmVjLmF2ZyA9ICguLi52OiB2ZWNbXSk6IHZlYyA9PiB2Lmxlbmd0aFxuICA/IHZlYyhcbiAgICB2LnJlZHVjZSgoYSwgYykgPT4gYSArIGMueCwgMCkgLyB2Lmxlbmd0aCxcbiAgICB2LnJlZHVjZSgoYSwgYykgPT4gYSArIGMueSwgMCkgLyB2Lmxlbmd0aCxcbiAgKVxuICA6IHZlYygpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCBnYW1lID0gbmV3IEdhbWUoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKSk7XG4gIGdhbWUuaW5pdGlhbGlzZSgpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==