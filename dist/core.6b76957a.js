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
})({"core/core.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
exports.initialGameSettings = void 0;
var gameMechanicsSettings = {
  // true - move to bottom
  // false - move to top
  currentIndexDialog: 0,
  isActionActive: false,
  progressesDirections: {
    progress1: true,
    progress2: true,
    progress3: true
  },
  widthProgress: {
    progress1: 0,
    progress2: 0,
    progress3: 0
  },
  valvesIndicators: {
    indicator1: false,
    indicator2: false,
    indicator3: false,
    indicator4: false
  }
};
var initialGameSettings = {};
/**
 * @param {object} settings Parameters for the game.
 * @param {array} settings.array Array with dialogs.
 * @param {object} settings.heroes Objects with heroes.
 * @param {object} settings.heroes.heroN Hero object
 * @param {string} settings.heroes.heroN.name Name of hero
 * @param {number} settings.heroes.heroN.hp Hp of hero
 * @param {element} settings.elements DOM elements for game
 * @param {element} settings.elements.dialogs DOM element for insert dialogue
 * @param {element} settings.elements.chooseActions Dom element for insert any actions
 */

exports.initialGameSettings = initialGameSettings;

function init(settings) {
  exports.initialGameSettings = initialGameSettings = settings; // не хуйня ли?

  updateArray();
} // function createBtnNext(div) {
//   const button = document.createElement('button');
//   button.addEventListener('click', nextDialog);
//   button.innerText = 'Далее';
//   button.className = 'btn btn-dark btn-next';
//   div.appendChild(button);
// }


function updateArray() {
  initialGameSettings.elements.fromWho.innerText = initialGameSettings.array[initialGameSettings.heroes.hero1.nameInArray].questions[gameMechanicsSettings.currentIndexDialog].questionFrom;
  initialGameSettings.elements.dialogs.innerText = initialGameSettings.array[initialGameSettings.heroes.hero1.nameInArray].questions[gameMechanicsSettings.currentIndexDialog].question;
}

function checkType() {}

function nextDialog() {
  gameMechanicsSettings.currentIndexDialog += 1;
  updateArray();
} // func 'talk' idea for update
// danil


function talk(config) {
  console.log('hello');
  talkToOneInner.innerHTML = "\n      <div class=\"row mt-3 name\">\n          <p class=\"lead\" id=\"name-dialog\">".concat(config.speaking, "</p>\n      </div>\n      <div class=\"row dialog\">\n          <p class=\"lead\" id=\"text-dialog\">").concat(dialogsMassive[0][0]["question".concat(btnClickTalkVasiliy)], "</p>\n      </div>\n\n      <div class=\"row mt-3 name\">\n          <p class=\"lead\" id=\"name-dialog\">\u0412\u0430\u0441\u0438\u043B\u0438\u0439</p>\n      </div>\n\n      <div class=\"row dialog\">\n          <p class=\"lead\" id=\"text-dialog\">").concat(dialogsMassive[0][0]["answer".concat(btnClickTalkVasiliy, "Good")], " <button class=\"btn btn-dark\" onclick=\"removeTalkDiv()\" style=\"float: right; margin-left: 1vw;\">OK</button></p>\n      </div>\n  ");
} // Function for talk with Vasiliy or Bloger
// function talk(who) {
//   const talkToOneInner = document.getElementById('talkToOneInner');
//   talkToOneInner.innerHTML = ``;
//   if (who == 'Василий') {
//     btnClickTalkVasiliy += 1;
//     if (btnClickTalkVasiliy != 7) {
//       if (vasiliyRelationship == 'Хорошие' || vasiliyRelationship == 'Отличные') {
//         talkToOneInner.innerHTML = `
//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Полина</p>
//                     </div>
//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[0][0][`question${btnClickTalkVasiliy}`]
//                         }</p>
//                     </div>
//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Василий</p>
//                     </div>
//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[0][0][`answer${btnClickTalkVasiliy}Good`]
//                         } <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
//                     </div>
//                 `;
//       } else if (vasiliyRelationship == 'Плохие') {
//         talkToOneInner.innerHTML = `
//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Полина</p>
//                     </div>
//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[0][0][`question${btnClickTalkVasiliy}`]
//                         }</p>
//                     </div>
//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Василий</p>
//                     </div>
//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[0][0][`answer${btnClickTalkVasiliy}Bad`]
//                         } <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
//                     </div>
//                 `;
//       }
//     } else {
//       const talkBtnNav = document.getElementById('talkBtnNav');
//       talkBtnNav.parentNode.removeChild(talkBtnNav);
//       const talkToOne = document.getElementById('talkToOne');
//       talkToOne.parentNode.removeChild(talkToOne);
//       const talkToOneInner = document.getElementById('talkToOneInner');
//       talkToOneInner.parentNode.removeChild(talkToOneInner);
//     }
//   } else if (who == 'Блогер') {
//     btnClickTalkBloger += 1;
//     if (btnClickTalkBloger != 7) {
//       if (blogerRelationship == 'Хорошие' || blogerRelationship == 'Отличные') {
//         talkToOneInner.innerHTML = `
//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Полина</p>
//                     </div>
//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[1][0][`question${btnClickTalkBloger}`]
//                         }</p>
//                     </div>
//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Блогер</p>
//                     </div>
//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[1][0][`answer${btnClickTalkBloger}Good`]
//                         } <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
//                     </div>
//                 `;
//       } else if (blogerRelationship == 'Плохие') {
//         talkToOneInner.innerHTML = `
//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Полина</p>
//                     </div>
//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[1][0][`question${btnClickTalkBloger}`]
//                         }</p>
//                     </div>
//                     <div class="row mt-3 name">
//                         <p class="lead" id="name-dialog">Блогер</p>
//                     </div>
//                     <div class="row dialog">
//                         <p class="lead" id="text-dialog">${
//                           dialogsMassive[1][0][`answer${btnClickTalkBloger}Bad`]
//                         } <button class="btn btn-dark" onclick="removeTalkDiv()" style="float: right; margin-left: 1vw;">OK</button></p>
//                     </div>
//                 `;
//       }
//     } else {
//       const talkBtnNav = document.getElementById('talkBtnNav');
//       talkBtnNav.parentNode.removeChild(talkBtnNav);
//       const talkToOne = document.getElementById('talkToOne');
//       talkToOne.parentNode.removeChild(talkToOne);
//       const talkToOneInner = document.getElementById('talkToOneInner');
//       talkToOneInner.parentNode.removeChild(talkToOneInner);
//       const Toast = Swal.mixin({
//         toast: true,
//         position: 'top-end',
//         showConfirmButton: false,
//         timer: 2000,
//         timerProgressBar: true,
//         onOpen: (toast) => {
//           toast.addEventListener('mouseenter', Swal.stopTimer);
//           toast.addEventListener('mouseleave', Swal.resumeTimer);
//         },
//       });
//       Toast.fire({
//         icon: 'success',
//         title: 'Получено достижение: Поговорим?',
//       });
//       localStorage.setItem('achievement2-chapter4', 'open');
//     }
//   }
// }
// Remove div with dialogs (talk with Vasiliy or Bloger)
// TODO with gameSettings
// function removeTalkDiv() {
// talkToOne.innerHTML = ``;
// }
// Next task


function nextTask(text) {
  var Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
    onOpen: function onOpen(toast) {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    }
  });
  Toast.fire({
    icon: 'info',
    title: "\u0417\u0430\u0434\u0430\u043D\u0438\u0435: ".concat(text)
  });
  document.getElementById('task').innerHTML = "\u0417\u0430\u0434\u0430\u043D\u0438\u0435: ".concat(text);
} // Random number


function getRandNumb(min, max) {
  return Math.round(Math.random() * (max - min) + min);
} // Change background


function changeBg(path) {
  document.body.style.backgroundImage = "url(".concat(path, ")");
} // function chooseAction(variants = [positive, neutral, unpositive]) {
//   const chooseText = document.createElement('p');
//   chooseText.className = 'choose-action-text';
//   chooseText.innerText = 'Выбери: ';
//   const chooseActionBtns = document.createElement('div');
//   chooseActionBtns.className = 'd-flex justify-content-center';
//   variants.forEach((variant) => {
//     const button = document.createElement('button');
//     button.addEventListener('click', () => {
//       variant.func();
//       initialGameSettings.isActionActive = !initialGameSettings.isActionActive;
//     });
//     button.className = 'btn btn-dark btn-choose-action';
//     button.innerText = variant.text;
//     const colDiv = document.createElement('div');
//     colDiv.appendChild(button);
//     chooseActionBtns.appendChild(colDiv);
//   });
//   const chooseActionDiv = document.createElement('div');
//   chooseActionDiv.className = 'choose-action-div';
//   chooseActionDiv.appendChild(chooseText);
//   chooseActionDiv.appendChild(chooseActionBtns);
//   initialGameSettings.elements.chooseActions.appendChild(chooseActionDiv);
// }
// chooseAction(initialGameSettings, (variants = [positive, neutral, unpositive]));
// Mechanic with Valves (last fight with Vasiliy)


function valve(valveIndicator) {
  valveIndicator = true;
  var massiveNubmers = new Array().fill(10);
  console.log(massiveNubmers);
  var valveProgressWidthStart1 = getRandNumb(0, 8);
  var valveProgressWidthStart2 = getRandNumb(0, 8);
  var valveProgressWidthStart3 = getRandNumb(0, 8);
  valveProgressWidthStart1 = massiveNubmers[valveProgressWidthStart1];
  valveProgressWidthStart2 = massiveNubmers[valveProgressWidthStart2];
  valveProgressWidthStart3 = massiveNubmers[valveProgressWidthStart3];
  widthProgress1 = valveProgressWidthStart1;
  widthProgress2 = valveProgressWidthStart2;
  widthProgress3 = valveProgressWidthStart3;
  progressClickDirection1 = 'top';
  progressClickDirection2 = 'top';
  progressClickDirection3 = 'top';
  var valvesDiv = document.getElementById('valvesDiv');
  valvesDiv.innerHTML = "\n        <div class=\"d-flex justify-content-center\" id=\"valveDiv\"> \n            <div class=\"d-flex align-items-center\" id=\"valve-1\">\n                <div class=\"progress\" id=\"valve-progress-1\">\n                    <div id=\"valve-progress-w-1\" class=\"progress-bar bg-dark\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: ".concat(valveProgressWidthStart1, "%\"></div>\n                </div>\n\n                <button type=\"button\" id=\"btn-valve-click-1\" class=\"btn btn-dark\" onclick=\"valveProgressClick(1)\">\n                    <i class=\"fas fa-sync\"></i>\n                </button>\n            </div>\n\n            <div class=\"d-flex align-items-center\" id=\"valve-2\">\n                <div class=\"progress\" id=\"valve-progress-2\">\n                    <div id=\"valve-progress-w-2\" class=\"progress-bar bg-dark\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: ").concat(valveProgressWidthStart2, "%\"></div>\n                </div>\n\n                <button type=\"button\" id=\"btn-valve-click-2\" class=\"btn btn-dark\" onclick=\"valveProgressClick(2)\">\n                    <i class=\"fas fa-sync\"></i>\n                </button>\n            </div>\n\n            <div class=\"d-flex align-items-center\" id=\"valve-3\">\n                <div class=\"progress\" id=\"valve-progress-3\">\n                    <div id=\"valve-progress-w-3\" class=\"progress-bar bg-dark\" role=\"progressbar\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: ").concat(valveProgressWidthStart3, "%\"></div>\n                </div>\n\n                <button type=\"button\" id=\"btn-valve-click-3\" class=\"btn btn-dark\" onclick=\"valveProgressClick(3)\">\n                    <i class=\"fas fa-sync\"></i>\n                </button>\n            </div>\n        </div>\n    ");
} // Valve progress


function valveProgressClick(progressElement) {
  var progress1 = document.getElementById('valve-progress-w-1');
  var progress2 = document.getElementById('valve-progress-w-2');
  var progress3 = document.getElementById('valve-progress-w-3');

  if ((widthProgress1 == 50 || widthProgress1 == 60) && (widthProgress2 == 50 || widthProgress2 == 60) && (widthProgress3 == 50 || widthProgress3 == 60)) {
    sound.src = 'sounds/valveSuccess.mp3';
    var valveDiv = document.getElementById('valveDiv');
    valveDiv.parentNode.removeChild(valveDiv);
    vasiliyHp -= 10;
    var progressbarVasiliyHp = document.getElementById('progressbarVasiliyHp');
    progressbarVasiliyHp.style.width = "".concat(vasiliyHp, "%");
    progressbarVasiliyHp.innerHTML = "".concat(vasiliyHp, "%");
    var btnValve = document.getElementById(valveBtn);
    btnValve.parentNode.removeChild(btnValve);
  } else {
    switch (progressElement) {
      case 1:
        if (widthProgress1 <= 0) {
          progressClickDirection1 = 'top';
        } else if (widthProgress1 >= 100) {
          progressClickDirection1 = 'bottom';
        }

        if (progressClickDirection1 == 'top') {
          widthProgress1 += 10;
          progress1.style.width = "".concat(widthProgress1, "%");
        } else if (progressClickDirection1 == 'bottom') {
          widthProgress1 -= 10;
          progress1.style.width = "".concat(widthProgress1, "%");
        }

        break;

      case 2:
        if (widthProgress2 <= 0) {
          progressClickDirection2 = 'top';
        } else if (widthProgress2 >= 100) {
          progressClickDirection2 = 'bottom';
        }

        if (progressClickDirection2 == 'top') {
          widthProgress2 += 10;
          progress2.style.width = "".concat(widthProgress2, "%");
        } else if (progressClickDirection2 == 'bottom') {
          widthProgress2 -= 10;
          progress2.style.width = "".concat(widthProgress2, "%");
        }

        break;

      case 3:
        if (widthProgress3 <= 0) {
          progressClickDirection3 = 'top';
        } else if (widthProgress3 >= 100) {
          progressClickDirection3 = 'bottom';
        }

        if (progressClickDirection3 == 'top') {
          widthProgress3 += 10;
          progress3.style.width = "".concat(widthProgress3, "%");
        } else if (progressClickDirection3 == 'bottom') {
          widthProgress3 -= 10;
          progress3.style.width = "".concat(widthProgress3, "%");
        }

        break;
    }
  }
} // Delete div with choose dialog (who is right - Vasiliy or Bloger?)


function deleteChooseDialogDiv() {
  var chooseDialogDiv = document.getElementById('chooseDialogDiv');
  chooseDialogDiv.parentNode.removeChild(chooseDialogDiv);
} // Delete save from localStorage


function clearLc() {
  localStorage.removeItem('mainRoomLaboratory');
}

function settingsArray(massive) {
  arrayDialog = massive;
}

function dialogsInner() {
  if (counterDialog < arrayDialog.length) {
    dialogs.innerHTML = "\n            ".concat(arrayDialog[counterDialog], "\n            <button onclick=\"dialogsInner();\">Next</button>\n        ");
    counterDialog++;
  }
}
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57260" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","core/core.js"], null)
//# sourceMappingURL=/core.6b76957a.js.map