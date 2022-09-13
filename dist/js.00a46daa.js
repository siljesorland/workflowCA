// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"js/question-1/question-1.js":[function(require,module,exports) {
function newUser(person) {
  return "".concat(person.school, " ").concat(person.firstName, " ").concat(person.lastName, " ").concat(person.age);
}

var Ola = {
  school: 'Noroff',
  firstName: 'Ola',
  lastName: 'Nordmann',
  age: 18,
  isAdmin: false
};

function newAdmin(person) {
  return "".concat(person.school, " ").concat(person.firstName, " ").concat(person.lastName, " ").concat(person.age, " Is Admin: ").concat(person.isAdmin);
}

var Kari = {
  school: 'Noroff',
  firstName: 'Kari',
  lastName: 'Nordmann',
  age: 36,
  isAdmin: true
};
console.log(newUser(Ola));
console.log(newAdmin(Kari));
},{}],"js/question-2/question-2.js":[function(require,module,exports) {
var GameGenre;

(function (GameGenre) {
  GameGenre[GameGenre["Action"] = 0] = "Action";
  GameGenre[GameGenre["Adventure"] = 1] = "Adventure";
  GameGenre[GameGenre["Sport"] = 2] = "Sport";
})(GameGenre || (GameGenre = {}));

var Action = {
  name: 'Fun adventure Game',
  genre: 'ADVENTURE',
  onlinePlay: true
};

function createGame(game) {
  return "Name: ".concat(game.name, " Genre: ").concat(game.genre, " Play online: ").concat(game.onlinePlay);
}

console.log(createGame(Action));
},{}],"js/question-3/question-3.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateTax = calculateTax;
exports.convertKrone = convertKrone;
exports.formatDecimalSpaces = formatDecimalSpaces;
exports.getDiscountPercentage = getDiscountPercentage;

function getDiscountPercentage(normalPrice, discountedPrice) {
  return Math.round(100 - normalPrice / discountedPrice * 100);
}

console.log(getDiscountPercentage(75, 100));

function formatDecimalSpaces(value) {
  var decimalSpaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return +(Math.round(value + "e+".concat(decimalSpaces)) + "e-".concat(decimalSpaces));
}

console.log(formatDecimalSpaces(15.5555555));

function convertKrone(amount) {
  var toKrone = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var kroneValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 10.18;

  if (toKrone) {
    return formatDecimalSpaces(amount * kroneValue);
  }

  return formatDecimalSpaces(amount / kroneValue);
}

console.log(convertKrone(10));

function calculateTax(amount) {
  var taxRate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 25;
  return formatDecimalSpaces(amount + amount * (taxRate / 100));
}

console.log(calculateTax(100));
},{}],"js/question-4/items.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tomato = exports.milk = exports.lettuce = exports.cheese = exports.bread = void 0;
var milk = {
  id: 942,
  name: 'Milk',
  price: 19.99
};
exports.milk = milk;
var bread = {
  id: 24,
  name: 'Bread',
  price: 9.25
};
exports.bread = bread;
var cheese = {
  id: 52,
  name: 'Cheese',
  price: 5.95
};
exports.cheese = cheese;
var tomato = {
  id: 84,
  name: 'Tomato',
  price: 3.5
};
exports.tomato = tomato;
var lettuce = {
  id: 663,
  name: 'Lettuce',
  price: 1.95
};
exports.lettuce = lettuce;
},{}],"js/question-4/question-4.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ShoppingCart = void 0;

var _items = require("./items");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ShoppingCart = /*#__PURE__*/_createClass(function ShoppingCart() {
  _classCallCheck(this, ShoppingCart);

  this.cart = [_items.bread, _items.cheese, _items.lettuce, _items.milk, _items.tomato];
});

exports.ShoppingCart = ShoppingCart;
;

function getCostTotal() {
  var costTotal = ShoppingCart.cart.reduce(function (total, currentItem) {
    total += currentItem.price;
    return total;
  }, 0);
  return costTotal;
}

console.log(getCostTotal);
getNumberOfItems();
{
  return ShoppingCart.cart.length;
} // Add the correct return type

getCostTotal();
{
  var costTotal = (void 0).cart.reduce(function (total, currentItem) {
    total += currentItem.price;
    return total;
  }, 0);
  return costTotal;
} // Add the correct return type

getNumberOfItems();
{
  return (void 0).cart.length;
} // Add the correct return type

getCart();
{
  return _toConsumableArray((void 0).cart);
} // Set the parameter to be of the Item type and set the return
//    type to be of the correct type

addToCart(item);
{
  var itemExists = (void 0).cart.find(function (currentItem) {
    if (currentItem.id === item.id) {
      return true;
    }
  });

  if (!itemExists) {
    (void 0).cart.push(item);
  }
} // Set the parameter to be of the Item type and set the return
//    type to be of the correct type

removeFromCart(item);
{
  var newCart = (void 0).cart.filter(function (currentItem) {
    if (currentItem.id !== item.id) {
      return true;
    }
  });
  (void 0).cart = _toConsumableArray(newCart);
}
},{"./items":"js/question-4/items.js"}],"js/index.js":[function(require,module,exports) {
"use strict";

require("./question-1/question-1.js");

require("./question-2/question-2.js");

require("./question-3/question-3.js");

require("./question-4/question-4.js");
},{"./question-1/question-1.js":"js/question-1/question-1.js","./question-2/question-2.js":"js/question-2/question-2.js","./question-3/question-3.js":"js/question-3/question-3.js","./question-4/question-4.js":"js/question-4/question-4.js"}],"../../../AppData/Roaming/nvm/v16.17.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60449" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Roaming/nvm/v16.17.0/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/index.js"], null)
//# sourceMappingURL=/js.00a46daa.js.map