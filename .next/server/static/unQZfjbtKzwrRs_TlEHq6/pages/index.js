module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/+P4":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__("Bhuq");

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "/+oN":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "/HRN":
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "0iUn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "2Eek":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("ltjX");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "9Jkg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("fozc");

/***/ }),

/***/ "AT/M":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "Bhuq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("/+oN");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "FbiP":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Gf4D");

/***/ }),

/***/ "Gf4D":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/freeze");

/***/ }),

/***/ "K47E":
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "MI3g":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js
var iterator = __webpack_require__("XVgq");
var iterator_default = /*#__PURE__*/__webpack_require__.n(iterator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/symbol.js
var symbol = __webpack_require__("Z7t5");
var symbol_default = /*#__PURE__*/__webpack_require__.n(symbol);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js



function typeof_typeof2(obj) { if (typeof symbol_default.a === "function" && typeof iterator_default.a === "symbol") { typeof_typeof2 = function _typeof2(obj) { return typeof obj; }; } else { typeof_typeof2 = function _typeof2(obj) { return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof obj; }; } return typeof_typeof2(obj); }

function typeof_typeof(obj) {
  if (typeof symbol_default.a === "function" && typeof_typeof2(iterator_default.a) === "symbol") {
    typeof_typeof = function _typeof(obj) {
      return typeof_typeof2(obj);
    };
  } else {
    typeof_typeof = function _typeof(obj) {
      return obj && typeof symbol_default.a === "function" && obj.constructor === symbol_default.a && obj !== symbol_default.a.prototype ? "symbol" : typeof_typeof2(obj);
    };
  }

  return typeof_typeof(obj);
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _possibleConstructorReturn; });


function _possibleConstructorReturn(self, call) {
  if (call && (typeof_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(assertThisInitialized["a" /* default */])(self);
}

/***/ }),

/***/ "N9n2":
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__("SqZg");

var setPrototypeOf = __webpack_require__("vjea");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "O40h":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _asyncToGenerator; });
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("eVuF");
/* harmony import */ var _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

/***/ }),

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("ln6h");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("O40h");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js
var classCallCheck = __webpack_require__("0iUn");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js
var createClass = __webpack_require__("sLSF");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js + 1 modules
var possibleConstructorReturn = __webpack_require__("MI3g");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js
var getPrototypeOf = __webpack_require__("a7VT");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js + 1 modules
var inherits = __webpack_require__("Tit0");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js
var defineProperty = __webpack_require__("vYYK");

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__("zr5I");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js
var define_properties = __webpack_require__("2Eek");
var define_properties_default = /*#__PURE__*/__webpack_require__.n(define_properties);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/freeze.js
var freeze = __webpack_require__("FbiP");
var freeze_default = /*#__PURE__*/__webpack_require__.n(freeze);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js


function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return freeze_default()(define_properties_default()(strings, {
    raw: {
      value: freeze_default()(raw)
    }
  }));
}
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__("id0+");
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/About.js







function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  text-align: left;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Wrapper = external_styled_components_default.a.div(_templateObject());

var About_About =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(About, _React$Component);

  function About() {
    Object(classCallCheck["a" /* default */])(this, About);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(About).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(About, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement(Wrapper, null, external_react_default.a.createElement(external_react_markdown_default.a, this.props));
    }
  }]);

  return About;
}(external_react_default.a.Component);


// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js
var assertThisInitialized = __webpack_require__("AT/M");

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");

// CONCATENATED MODULE: ./components/LangBox.js









function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-align: right;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  border: none;\n  padding: 15px;\n  cursor: pointer;\n  outline: none;\n  text-decoration: none;\n  &:hover {\n    color: #198964\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  font-size: 28px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function LangBox_templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 60px;\n  margin: 10px;\n"]);

  LangBox_templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Logo = external_styled_components_default.a.img(LangBox_templateObject());
var Title = external_styled_components_default.a.div(_templateObject2());
var Button = external_styled_components_default.a.a(_templateObject3());
var Right = external_styled_components_default.a.div(_templateObject4());

var LangBox_Header =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(Header, _React$Component);

  function Header() {
    var _getPrototypeOf2;

    var _this;

    Object(classCallCheck["a" /* default */])(this, Header);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(possibleConstructorReturn["a" /* default */])(this, (_getPrototypeOf2 = Object(getPrototypeOf["a" /* default */])(Header)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(defineProperty["a" /* default */])(Object(assertThisInitialized["a" /* default */])(_this), "onClick", function (lang) {
      return _this.props.onClick(lang);
    });

    return _this;
  }

  Object(createClass["a" /* default */])(Header, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", {
        className: "row"
      }, external_react_default.a.createElement("div", {
        className: "col-8"
      }, external_react_default.a.createElement(Logo, {
        src: "/static/logo.png"
      }), external_react_default.a.createElement(Title, null, "Asian Human Rights Court Simulation")), external_react_default.a.createElement(Right, {
        className: "col-4"
      }, external_react_default.a.createElement(Button, {
        href: "/en"
      }, "EN"), external_react_default.a.createElement(Button, {
        href: "/ch"
      }, "CH"), external_react_default.a.createElement(Button, {
        href: "/kr"
      }, "KR"), external_react_default.a.createElement(Button, {
        href: "/jp"
      }, "JP")));
    }
  }]);

  return Header;
}(external_react_default.a.Component);


// CONCATENATED MODULE: ./static/readme/ch.md
/* harmony default export */ var ch = ("## About\n\n模擬亞洲人權法院（AHRCS）係於2018年10月8日，在亞洲公民社會之共同努力下成立。該等公民社會成員係為於其自主成立且民有、民治、民享之人權法院中，透過透明之法律程序保護人權原則價值，而籌設AHRCS。\n\n## FAQ\n\n* 為什麼我們要創設模擬亞洲人權法院？\n\n亞洲係唯一沒有區域性人權法院的大陸，然而，亟須審理之人權侵害案件絕不會少，酷刑、強迫失蹤、法外處決等嚴重侵害人權事件仍一再發生。因此，為在亞洲內部各地保護人權，設立亞洲之區域性人權法院，或將跨國人權保護機制制度化至關重要。\n\n* 亞洲人權法院怎麼做？\n\n目前AHRCS共有來自10個國家地區，包括孟加拉、香港、印度、日本、馬來西亞、南韓、新加坡、斯里蘭卡、台灣及泰國的13名法官。除前述法官外，AHRCS尚有2名顧問：曾於歐洲人權法院擔任法官之András Sajó，及台灣前大法官許玉秀。除前述法官及顧問外，另設秘書處設於台灣，由馬來西亞、新加坡及台灣人擔任職員。AHRCS首次合議庭將於於2019年7月審理第一案：邱和順訴台灣政府案，並召開第一次大會以訂定AHRCS章程及訴訟規範。\n\n* 為什麼亞洲人權法院很重要？亞洲人權法院的願景是什麼？\n\n雖然亞洲各政府尚未開始籌設人權法院，但公民社會無需繼續等待，而可自行推動設置該等人權保護機制。吾等係於人權運動人士、律師、學者及公民團體之集體努力下，籌設以公民社會為基礎之模擬亞洲人權法院，於此民有、民治、民享之人權法院中，以透明之法律程序保護人權原則價值。\n\n## 邱和順訴台灣政府案\n\n邱和順被控於1987年11月，帶領12人之幫派殺害一名女性且將其分屍，另於1987年10月綁架一名10歲男童。其於1989年受死刑判決。邱君及其他11名「幫眾」為其案件之共同被告。經22年之反覆上訴，其死刑判決於2011年定讞。邱和順提交法院之申請文件表示，其與其他共同被告之自白為定罪主因，但該等自白中部分係由檢警以刑求及威嚇方式取得，該等檢警人員亦已因1994年之初始調查中使用刑求而遭判刑。邱另表示，兩案中並無物證顯示12名被告均涉入該案。自邱君於1988年遭逮捕後，以遭關押30年。\n");
// CONCATENATED MODULE: ./static/readme/en.md
/* harmony default export */ var en = ("## About\n\nThe Asian Human Rights Court Simulation (AHRCS) was founded on 8 October 2018, through the collaborative efforts of Asian civil society members, who have aspired to build a human rights court of the peoples, by the peoples, and for the peoples via our own initiatives, to ensure that human rights principles and values are safeguarded through transparent legal proceedings.\n\n## FAQ\n\n* why are we doing it?\n\nQ:Asia is the sole continent without a regional human rights court. Yet, there is no shortage of human rights grievances and cases in desperate need to be heard. Grave human rights violations including torture, enforced disappearance, extra-judicial executions have time and again occurred. For this reason, it is of paramount importance for Asia to create a regional human rights court or to institutionalize a transnational human rights mechanism to safeguard human rights protections in and across Asia.\n\n* what are we doing?\n\nAt present, the AHRCS has thirteen judges appointed from ten jurisdictions including Bangladesh, Hong Kong, India, Japan, Malaysia, Republic of Korea, Singapore, Sri Lanka, Taiwan and Thailand. In addition to these appointed judges, the AHRCS has two advisors: András Sajó, a former judge of the European Court of Human Rights, and Yu-Hsiu Hsu, a former justice of Taiwan’s Constitutional Court. Alongside the judges and advisors, the Secretariat, based in Taiwan, is joined by staff members from Malaysia, Singapore and Taiwan. In July 2019, the first chamber of the AHRCS will hear its first case, Mr. Chiou Ho-shun v Taiwan Government, and to hold a plenary meeting to finalize the Rules and Statute of the AHRCS.\n\n* why is it important? what is our vision?\n\nAlthough Asian governments have yet to embark on the creation of a human rights court, civil societies need not wait and can build such a human rights protection mechanism through their own initiatives. It is on the basis such collective efforts of human rights activists, lawyers, scholars and organizations that we aspire to establish a civil society-based Asian Human Right Court Simulation, where we are to safeguard human rights principles and values through transparent legal proceedings in a human rights court of the peoples, by the peoples, and for the peoples.\n\n## Chiou Ho-shun v. Taiwan Goverment\n\nMr. Chiou Ho-shun, accused of being the head of a 12-member criminal gang responsible for murdering and dismembering a female in Nov. 1987, and for kidnapping a 10-year-old boy in Dec. 1987, was first sentenced to death in Nov. 1989. Mr. Chiou and the other 11 so-called “criminal gang” members were co-defendants in his case’s criminal procedure. After 22 years of repeated appeal hearings, his death sentence was finalized in 2011. According to the application Mr. Chiou submitted to the Court, Mr. Chiou claims that his conviction was based on confessions made by Mr. Chiou and other co-defendants, part of which was proved to have been extracted by torture and coercion by prosecutors and police officers who have since been convicted of using torture during the initial investigation in 1994. He further claims that there was no material evidence in the two cases indicating that all 12 defendants were involved in the case. Mr. Chiou has been imprisoned for the past 30 years since he was arrested in Sep. 1988.\n");
// CONCATENATED MODULE: ./static/readme/jp.md
/* harmony default export */ var jp = ("## About\n\nアジア人権模擬裁判所（AHRCS）は、人民による、人民のための、そして私たち自身を通して人々のために人権裁判所を構築することを熱望しているアジア市民社会のメンバーの共同の努力を通じて2018年10月8日に設立されました。 透明性のある訴訟手続きを通じて人権の原則と価値を確実に保護するための取り組みです。\n\n## FAQ\n\n* 設立趣旨\n\nアジアは、地域人権裁判所のない唯一の大陸です。 それでも、人権侵害の不足はなく、絶望的な事件は審理される必要があります。 拷問、強制失踪、法廷外での処刑を含む重大な人権侵害が繰り返し発生しています。 このため、アジアでは、地域的人権裁判所を設置、またはアジア全域で人権保護を保護するための国際人権メカニズムを制度化することが最も重要です。\n\n* 活動内容について\n\n現在、AHRCSはバングラデシュ、香港、インド、日本、マレーシア、大韓民国、シンガポール、スリランカ、台湾、タイを含む10の管轄区域から13名の裁判官を任命しています。 これらの指名された裁判官に加えて、AHRCSは2人の顧問を持っています：アンドラサジョ（人権裁判所の元裁判官）とYu-Hsiu Hsu（台湾の憲法裁判所の元裁判官）。 裁判官や顧問と共に、台湾に本部を置く事務局には、マレーシア、シンガポール、台湾のスタッフが加わります。  2019年7月、AHRCSの最初の会議は、その最初の事件、台湾政府に対するChiou Ho-shun氏の意見を聞き、AHRCSの規則と規約を最終決定するための総会を開催する予定です。\n\n* 当団体の重要性について、我々のビジョンについて\n\nアジア各国政府はまだ人権裁判所の創設に着手していませんが、市民社会は待つ必要はなく、独自のイニシアチブを通じてそのような人権保護メカニズムを構築することができます。 人権活動家、弁護士、学者および組織のこのような集団的努力に基づいて、市民社会を基盤としたアジア人権模擬裁判所を確立することを目指しています。 人民による、人民のための人権裁判所です。\n\n## 台湾政府に対する邸和順の告訴\n\n1987年11月に女性を殺害し、侮辱し、1987年12月に10歳の少年を誘拐した責任を負う12人のギャングの頭であると非難されたChiou Ho-shun氏は、Chiou氏と他の11人のいわゆる「犯罪組織」メンバーは、彼の事件の刑事訴訟において共同被告人であった。  22年に及ぶ上訴審理の繰り返しの後、2011年に彼の死刑判決は確定した。Chiou氏が裁判所に提出した申請によれば、Chiou氏は彼の有罪判決は他の共同被告による自白に基づいていると主張する。 その一部は、その後1994年の最初の捜査で拷問を使用したとして有罪判決を受けた検察官および警察官による拷問および強要によって抽出されたことが証明された。 被告は事件に関与していた。  Chiou氏は、1988年9月に逮捕されてから過去30年間の禁固刑を受けています。\n");
// CONCATENATED MODULE: ./static/readme/kr.md
/* harmony default export */ var kr = ("## About\n\n아시아인권법정은 스스로의 노력으로 시민의, 시민에 의한, 시민을 위한 시민들의 인권법정을 세우려는 열망을 가진 아시아 시민 사회 구성원들의 협력적인 노력을 통해 2018년 10월 8일에 설립되었습니다. 아시아인권법정은 투명한 법적 과정을 통해 인권의 원칙과 가치를 지키기 위해 노력하겠습니다.\n\n## FAQ\n\n* 아시아인권법정은 왜 열리나요?\n\n아시아는 인권법정을 가지지 않은 유일한 대륙입니다. 그러나 관심을 가져야 할 인권 관련 고충과 절박한 사건들이 부족하지 않습니다. 고문을 포함한 중대한 인권 위반 사례, 강제 실종, 사법 절차를 따르지 않은 처형은 반복적으로 발생하고 있습니다. 이런 이유로, 아시아 지역을 위한 인권 법정을 설립하거나 국가를 넘어서는 인권 보호 절차를 제도화하는 것이 너무나도 중요합니다.\n\n* 아시아인권법정은 무엇을 하나요?\n\n현재 아시아인권법정은 방글라데시, 홍콩, 인도, 일본, 말레이시아, 한국, 싱가폴, 스리랑카, 대만, 태국 10개 지역에서 13명의 판사를 임명하였습니다. 이들 판사와 별도로 아시아인권법정은 유럽인권법정판사로 활동했던 András Sajó와 대만헌법재판관이었던 Yu-Hsiu Hsu 두명이 고문으로 활동합니다. 판사와 고문 외에도 말레이시아와 싱가폴, 대만으로부터 온 스탭이 대만에 사무국을 구성하였습니다. 2019년 7월에 아시아인권법정의 첫 Chamber(?)가 Chiou Ho-shun과 대만 정부간에 일어난 첫번째 사건을 다루고, 아시아인권법정의 규칙과 규정을 확정하기 위해 열립니다.\n\n* 아시아인권법정은 왜 중요한가요? 아시아인권법정의 비전은 무엇인가요?\n\n아시아의 정부들은 인권법정을 만드는데 적극적이지 않지만 더 기다리지 않고 시민사회가 주도적으로 인권을 지키는 절차를 만들 수 있습니다. 시민사회 기반의 아시아인권법정을 만들려는 인권운동가와 법률가, 학자, 기관들의 협력은 시민의, 시민에 의한, 시민을 위한 인권법정에서 투명한 법적 과정을 통해 인권의 원칙과 가치를 지키는 기반이 될 것입니다.\n\n## Chiou Ho-shun v. 대만 정부\n\nChiou Ho-shun씨는 1987년 11월에 한 여성을 살해하고 토막을 낸 혐의와 1987년 12월에 10살 소년을 납치한 혐의로 기소되었고, 1989년 11월에 사형을 처음으로 선고되었습니다.Chiou씨와 다른 열한명의 \"범죄집단\"은 그의 범죄행위에 함께 가담한 공동 피고인이었습니다. 22년간의 반복 항소 심리 끝에 그의 사형 선고는 2011년에 확정되었습니다. Chiou씨가 반복적으로 법정에 제출한 문서에 따르면, 그의 유죄 판결은 Chiou씨와 그의 공동 피고인의 증언에 따라 이뤄졌고, 이 증언 중 일부는 1994년에 첫 조사 동안 고문을 사용했음이 밝혀진 검사와 경찰의 고문과 강제에 의해 이뤄졌음이 증명되었다고 Chiou씨는 주장합니다. 더 나가 그는 두 사건에 12명의 모든 피고가 연루되었음을 밝히는 확실한 증거가 없다고 주장합니다. Chiou씨는 1988년 11월에 체포된 이후 지난 30년간 감옥에 있었습니다.\n");
// CONCATENATED MODULE: ./pages/index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return pages_App; });

















var contents = {
  ch: ch,
  en: en,
  jp: jp,
  kr: kr
};

var pages_App =
/*#__PURE__*/
function (_React$Component) {
  Object(inherits["a" /* default */])(App, _React$Component);

  function App() {
    Object(classCallCheck["a" /* default */])(this, App);

    return Object(possibleConstructorReturn["a" /* default */])(this, Object(getPrototypeOf["a" /* default */])(App).apply(this, arguments));
  }

  Object(createClass["a" /* default */])(App, [{
    key: "render",
    value: function render() {
      var content = this.props.content;
      return external_react_default.a.createElement(external_react_default.a.Fragment, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, "Asian Human Rights Court Simulation"), external_react_default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
        integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
        crossOrigin: "anonymous"
      })), external_react_default.a.createElement("div", {
        className: "container"
      }, external_react_default.a.createElement(LangBox_Header, null), external_react_default.a.createElement(About_About, {
        source: content
      })));
    }
  }]);

  return App;
}(external_react_default.a.Component);

Object(defineProperty["a" /* default */])(pages_App, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref2 = Object(asyncToGenerator["a" /* default */])(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(_ref) {
    var query, lang;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
            lang = query.lang;
            return _context.abrupt("return", {
              content: contents[lang]
            });

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
}());



/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TRZx":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Wk4r");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "Tit0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/create.js
var create = __webpack_require__("SqZg");
var create_default = /*#__PURE__*/__webpack_require__.n(create);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js
var set_prototype_of = __webpack_require__("TRZx");
var set_prototype_of_default = /*#__PURE__*/__webpack_require__.n(set_prototype_of);

// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js

function _setPrototypeOf(o, p) {
  _setPrototypeOf = set_prototype_of_default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}
// CONCATENATED MODULE: ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _inherits; });


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = create_default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

/***/ }),

/***/ "WaGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__("hfKm");

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "Wk4r":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "ZDA2":
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__("iZP3");

var assertThisInitialized = __webpack_require__("K47E");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "a7VT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("Bhuq");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("TRZx");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* global __NEXT_DATA__ */

var _interopRequireDefault = __webpack_require__("KI45");

var _stringify = _interopRequireDefault(__webpack_require__("9Jkg"));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__("/HRN"));

var _createClass2 = _interopRequireDefault(__webpack_require__("WaGi"));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__("ZDA2"));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__("/+P4"));

var _inherits2 = _interopRequireDefault(__webpack_require__("N9n2"));

var __importStar = void 0 && (void 0).__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) {
    if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  }
  result["default"] = mod;
  return result;
};

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var url_1 = __webpack_require__("bzos");

var react_1 = __importStar(__webpack_require__("cDcd"));

var prop_types_1 = __importDefault(__webpack_require__("rf6O"));

var router_1 = __importStar(__webpack_require__("4Q3z"));

var utils_1 = __webpack_require__("p8BD");

function isLocal(href) {
  var url = url_1.parse(href, false, true);
  var origin = url_1.parse(utils_1.getLocationOrigin(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return function (href, as) {
    if (href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? utils_1.formatWithValidation(url) : url;
}

var Link =
/*#__PURE__*/
function (_react_1$Component) {
  (0, _inherits2.default)(Link, _react_1$Component);

  function Link() {
    var _this;

    (0, _classCallCheck2.default)(this, Link);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Link).apply(this, arguments)); // The function is memoized so that no extra lifecycles are needed
    // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html

    _this.formatUrls = memoizedFormatUrl(function (href, asHref) {
      return {
        href: formatUrl(href),
        as: formatUrl(asHref, true)
      };
    });

    _this.linkClicked = function (e) {
      var _e$currentTarget = e.currentTarget,
          nodeName = _e$currentTarget.nodeName,
          target = _e$currentTarget.target;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var _this$formatUrls = _this.formatUrls(_this.props.href, _this.props.as),
          href = _this$formatUrls.href,
          as = _this$formatUrls.as;

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      var pathname = window.location.pathname;
      href = url_1.resolve(pathname, href);
      as = as ? url_1.resolve(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var scroll = _this.props.scroll;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      router_1.default[_this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: _this.props.shallow
      }).then(function (success) {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      }).catch(function (err) {
        if (_this.props.onError) _this.props.onError(err);
      });
    };

    return _this;
  }

  (0, _createClass2.default)(Link, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.prefetch();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if ((0, _stringify.default)(this.props.href) !== (0, _stringify.default)(prevProps.href)) {
        this.prefetch();
      }
    }
  }, {
    key: "prefetch",
    value: function prefetch() {
      if (!this.props.prefetch) return;
      if (typeof window === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

      var pathname = window.location.pathname;

      var _this$formatUrls2 = this.formatUrls(this.props.href, this.props.as),
          parsedHref = _this$formatUrls2.href;

      var href = url_1.resolve(pathname, parsedHref);
      router_1.default.prefetch(href);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var children = this.props.children;

      var _this$formatUrls3 = this.formatUrls(this.props.href, this.props.as),
          href = _this$formatUrls3.href,
          as = _this$formatUrls3.as; // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag


      if (typeof children === 'string') {
        children = react_1.default.createElement("a", null, children);
      } // This will return the first child, if multiple are provided it will throw an error


      var child = react_1.Children.only(children);
      var props = {
        onClick: function onClick(e) {
          if (child.props && typeof child.props.onClick === 'function') {
            child.props.onClick(e);
          }

          if (!e.defaultPrevented) {
            _this2.linkClicked(e);
          }
        }
      }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

      if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
        props.href = as || href;
      } // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly.


      if (true) {
        if (props.href && typeof __NEXT_DATA__ !== 'undefined' && __NEXT_DATA__.nextExport) {
          props.href = router_1.Router._rewriteUrlForNextExport(props.href);
        }
      }

      return react_1.default.cloneElement(child, props);
    }
  }]);
  return Link;
}(react_1.Component);

if (false) { var exact, warn; }

exports.default = Link;

/***/ }),

/***/ "cu1A":
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "fozc":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/json/stringify");

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "id0+":
/***/ (function(module, exports) {

module.exports = require("react-markdown");

/***/ }),

/***/ "ln6h":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cu1A");


/***/ }),

/***/ "ltjX":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "p8BD":
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "sLSF":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "vYYK":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("hfKm");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
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

/***/ }),

/***/ "vjea":
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__("TRZx");

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "zr5I":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })

/******/ });