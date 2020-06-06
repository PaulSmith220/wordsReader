/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./common/Message.ts":
/*!***************************!*\
  !*** ./common/Message.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Message; });
class Message {
  static FromEvent(event) {
    const [command, data] = event.split('||');
    return new Message(command, JSON.parse(data));
  }

  constructor(command, argument) {
    this.command = command;
    this.argument = argument;
  }

  toString() {
    return this.command + '||' + JSON.stringify(this.argument);
  }

}

/***/ }),

/***/ "./main/EventsManager/EventsManager.ts":
/*!*********************************************!*\
  !*** ./main/EventsManager/EventsManager.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventsManager; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _voiceList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./voiceList */ "./main/EventsManager/voiceList.ts");
/* harmony import */ var _common_Message__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Message */ "./common/Message.ts");
/* harmony import */ var _openFileDialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./openFileDialog */ "./main/EventsManager/openFileDialog.ts");
/* harmony import */ var _parseFiles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./parseFiles */ "./main/EventsManager/parseFiles.ts");
/* harmony import */ var _readWord__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./readWord */ "./main/EventsManager/readWord.ts");








const reply = (event, message) => event.reply('asynchronous-reply', message.toString());

class EventsManager {
  constructor(store) {
    this.store = store;

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "events", {
      getVoicesList: async event => {
        const voices = await Object(_voiceList__WEBPACK_IMPORTED_MODULE_2__["default"])();
        reply(event, new _common_Message__WEBPACK_IMPORTED_MODULE_3__["default"]('voicesList', voices));
      },
      getInitData: event => {
        reply(event, new _common_Message__WEBPACK_IMPORTED_MODULE_3__["default"]('initData', this.store.data));
      },
      loadFile: async (event, message) => {
        try {
          const filePath = await Object(_openFileDialog__WEBPACK_IMPORTED_MODULE_4__["default"])();
          const data = Object(_parseFiles__WEBPACK_IMPORTED_MODULE_5__["default"])(filePath, message.argument);
          this.store.set('words', data);
          reply(event, new _common_Message__WEBPACK_IMPORTED_MODULE_3__["default"]('wordsUpdated', data));
        } catch (e) {
          console.log('User cancelled file selection', e);
        }
      },
      readWord: async (event, message) => {
        const words = JSON.parse(message.argument);
        await Object(_readWord__WEBPACK_IMPORTED_MODULE_6__["default"])(words, this.store.get('voices'));
        console.log('Done reading word');
        reply(event, new _common_Message__WEBPACK_IMPORTED_MODULE_3__["default"]('wordPlayed', {}));
      },
      'readWordOnce': async (event, message) => {
        const words = JSON.parse(message.argument);
        await Object(_readWord__WEBPACK_IMPORTED_MODULE_6__["default"])(words, this.store.get('voices'));
        console.log('Done reading word once');
      },
      selectLine: (event, message) => {
        const num = parseInt(message.argument || '0');
        this.store.set('lastLine', num);
      },
      setVoices: (event, message) => {
        const voices = JSON.parse(message.argument);
        this.store.set('voices', voices);
      }
    });
  }

  send(command, data = null) {
    const message = new _common_Message__WEBPACK_IMPORTED_MODULE_3__["default"](command, data);
    electron__WEBPACK_IMPORTED_MODULE_1__["ipcMain"].emit(message.toString());
  }

  subscribe() {
    electron__WEBPACK_IMPORTED_MODULE_1__["ipcMain"].on('asynchronous-message', this.processEvent.bind(this));
  }

  async processEvent(systemEvent, event) {
    const message = _common_Message__WEBPACK_IMPORTED_MODULE_3__["default"].FromEvent(event);
    console.log('Event received: ', message.command);
    console.log(message.argument);

    if (!!this.events[message.command]) {
      this.events[message.command](systemEvent, message);
    }
  }

}

/***/ }),

/***/ "./main/EventsManager/index.ts":
/*!*************************************!*\
  !*** ./main/EventsManager/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _EventsManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./EventsManager */ "./main/EventsManager/EventsManager.ts");

/* harmony default export */ __webpack_exports__["default"] = (_EventsManager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./main/EventsManager/openFileDialog.ts":
/*!**********************************************!*\
  !*** ./main/EventsManager/openFileDialog.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const {
  dialog
} = __webpack_require__(/*! electron */ "electron");

const options = {
  title: 'Open a file with words',
  buttonLabel: 'Load',
  filters: [{
    name: 'txt',
    extensions: ['txt']
  }],
  properties: ['openFile'],
  message: 'The text should be in "English word - Russian word" format'
};
/* harmony default export */ __webpack_exports__["default"] = (() => new Promise(async (resolve, reject) => {
  const {
    cancelled,
    filePaths
  } = await dialog.showOpenDialog(null, options);

  if (cancelled || !filePaths.length) {
    reject('');
  } else {
    resolve(filePaths[0]);
  }
}));

/***/ }),

/***/ "./main/EventsManager/parseFiles.ts":
/*!******************************************!*\
  !*** ./main/EventsManager/parseFiles.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const path = __webpack_require__(/*! path */ "path");

const fs = __webpack_require__(/*! fs */ "fs");

/* harmony default export */ __webpack_exports__["default"] = ((filePath, delimiter) => {
  const file = fs.readFileSync(path.resolve(filePath), 'utf-8');
  const lines = file.split('\n').filter(l => l.trim() !== '');
  const data = lines.map(line => {
    const [original, translation] = line.split(delimiter);
    return [original.trim().replace(/(\.|\,)/g, ''), (translation || 'No translation').replace(/\.$/, '').replace(/(\.|\,)/g, '').trim()];
  });
  return data;
});

/***/ }),

/***/ "./main/EventsManager/readWord.ts":
/*!****************************************!*\
  !*** ./main/EventsManager/readWord.ts ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ "child_process");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);

let currentReading = new Promise(resolve => resolve());

const read = (word, voice) => new Promise(resolve => Object(child_process__WEBPACK_IMPORTED_MODULE_0__["exec"])(`say -v ${voice} -r 150 "${word}"`, (error, out, err) => {
  resolve(word);

  if (error) {
    console.log("error", error.message);
    return;
  }

  if (err) {
    console.log('stderr', err);
    return;
  }
}));

const delay = (ms = 0) => new Promise(resolve => setTimeout(resolve, ms));

/* harmony default export */ __webpack_exports__["default"] = (async ([original, translation, reversed], voices = ['Allison', 'Milena']) => {
  await currentReading;
  currentReading = new Promise(async resolve => {
    const f1 = reversed ? async () => await read(translation, voices[1]) : async () => await read(original, voices[0]);
    const f2 = !reversed ? async () => await read(translation, voices[1]) : async () => await read(original, voices[0]);
    await f1();
    await delay(500);
    await f2();
    resolve();
  });
  await currentReading;
  return currentReading;
});

/***/ }),

/***/ "./main/EventsManager/voiceList.ts":
/*!*****************************************!*\
  !*** ./main/EventsManager/voiceList.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! child_process */ "child_process");
/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_0__);


const getVoices = () => new Promise(resolve => Object(child_process__WEBPACK_IMPORTED_MODULE_0__["exec"])(`say -v '?'`, (error, out, err) => {
  if (error) {
    console.log("error", error.message);
    return;
  }

  if (err) {
    console.log('stderr', err);
    return;
  }

  const voices = out.split('\n').map(line => {
    const [name, code] = line.replace(/\t/g, ' ').replace(/\s{1,}/g, ' ').split(' ');
    return {
      name,
      code
    };
  }).filter(v => v && v.code && v.code.indexOf('_') !== -1); // @ts-ignore

  voices.sort((a, b) => {
    if (a.code > b.code) {
      a.name > b.name ? -1 : 1;
    } else {
      return -1;
    }
  });
  resolve(voices);
}));

/* harmony default export */ __webpack_exports__["default"] = (getVoices);

/***/ }),

/***/ "./main/Store/ConfigFile.ts":
/*!**********************************!*\
  !*** ./main/Store/ConfigFile.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfigFile; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);


class ConfigFile {
  constructor(filePath, defaults) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "filePath", '');

    this.filePath = filePath;

    if (!this.checkExists()) {
      this.write(defaults);
    }
  }

  checkExists() {
    return fs__WEBPACK_IMPORTED_MODULE_1__["existsSync"](this.filePath);
  }

  read() {
    const fileContents = fs__WEBPACK_IMPORTED_MODULE_1__["readFileSync"](this.filePath);
    return JSON.parse(fileContents);
  }

  write(data) {
    fs__WEBPACK_IMPORTED_MODULE_1__["writeFileSync"](this.filePath, JSON.stringify(data, null, '\t'));
  }

}

/***/ }),

/***/ "./main/Store/Store.ts":
/*!*****************************!*\
  !*** ./main/Store/Store.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Store; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ConfigFile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ConfigFile */ "./main/Store/ConfigFile.ts");




class Store {
  constructor(initialState) {
    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "data", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "configFile", void 0);

    const userDataPath = (electron__WEBPACK_IMPORTED_MODULE_1___default.a.app || electron__WEBPACK_IMPORTED_MODULE_1___default.a.remote.app).getPath('userData');
    this.configFile = new _ConfigFile__WEBPACK_IMPORTED_MODULE_3__["default"](path__WEBPACK_IMPORTED_MODULE_2___default.a.join(userDataPath, initialState.configName + '.json'), initialState.defaults);
    this.data = this.configFile.read();
    console.log('Store initialized to use ' + this.configFile.filePath);
    console.log('Dark mode set to ', this.data.darkMode);
  }

  get(key) {
    return this.data[key];
  }

  set(key, val) {
    this.data[key] = val;
    this.configFile.write(this.data);
  }

}

/***/ }),

/***/ "./main/Store/index.ts":
/*!*****************************!*\
  !*** ./main/Store/index.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Store */ "./main/Store/Store.ts");


const store = new _Store__WEBPACK_IMPORTED_MODULE_1__["default"]({
  configName: 'words-data',
  defaults: {
    words: [],
    lastLine: 0,
    voices: ['Allison', 'xMilena'],
    darkMode: electron__WEBPACK_IMPORTED_MODULE_0__["nativeTheme"].shouldUseDarkColors
  }
});
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./main/main.ts":
/*!**********************!*\
  !*** ./main/main.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! electron */ "electron");
/* harmony import */ var electron__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(electron__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store */ "./main/Store/index.ts");
/* harmony import */ var _EventsManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./EventsManager */ "./main/EventsManager/index.ts");




const eventsManager = new _EventsManager__WEBPACK_IMPORTED_MODULE_3__["default"](_Store__WEBPACK_IMPORTED_MODULE_2__["default"]);
let mainWindow;
process.on('uncaughtException', function (err) {
  console.log(err);
});

function createWindow() {
  mainWindow = new electron__WEBPACK_IMPORTED_MODULE_0__["BrowserWindow"]({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  });
  eventsManager.subscribe();

  if (true) {
    mainWindow.loadURL(`http://localhost:8000/build`);
  } else {}

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

electron__WEBPACK_IMPORTED_MODULE_0__["app"].on('ready', createWindow);
electron__WEBPACK_IMPORTED_MODULE_0__["app"].allowRendererProcessReuse = true;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("child_process");

/***/ }),

/***/ "electron":
/*!***************************!*\
  !*** external "electron" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("electron");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=main.js.map