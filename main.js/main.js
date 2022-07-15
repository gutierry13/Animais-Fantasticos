/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./InitTAb.js":
/*!********************!*\
  !*** ./InitTAb.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabMenu)\n/* harmony export */ });\nclass initTabMenu {\r\n  constructor(menu, content) {\r\n    this.menu = document.querySelectorAll(menu)\r\n    this.desc = document.querySelectorAll(content)\r\n    this.newTabClass = 'newclass'\r\n  }\r\n\r\n  activeTab(index) {\r\n    this.desc.forEach(section => {\r\n      section.classList.remove(this.newTabClass)\r\n    })\r\n    this.desc[index].classList.add(this.newTabClass)\r\n  }\r\n\r\n  addTabNavEvent() {\r\n    this.menu.forEach((item, index) => {\r\n      item.addEventListener('click', () => {\r\n        this.activeTab(index)\r\n      })\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (this.menu.length && this.desc.length) {\r\n      this.activeTab(0)\r\n      this.addTabNavEvent()\r\n    }\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./InitTAb.js?");

/***/ }),

/***/ "./animaisfetch.js":
/*!*************************!*\
  !*** ./animaisfetch.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimaisFetch)\n/* harmony export */ });\n/* harmony import */ var _animanumeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./animanumeros.js */ \"./animanumeros.js\");\n\n\nfunction initAnimaisFetch() {\n  async function fetchAnimais(url) {\n    const animaisResposta = await fetch(url)\n    const animaisjson = await animaisResposta.json()\n    const numerosGrid = document.querySelector('.numeros-grid')\n    function createAnimais(animal) {\n      const div = document.createElement('div')\n      div.classList.add('numero-animal')\n      div.innerHTML = `<h3>${animal.specie}</h3> <span data-numero>${animal.total}<span>`\n      return div\n    }\n    animaisjson.forEach(animal => {\n      const divAnimal = createAnimais(animal)\n\n      numerosGrid.appendChild(divAnimal)\n    })\n    ;(0,_animanumeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])()\n  }\n\n  fetchAnimais('./animisAPI.json')\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./animaisfetch.js?");

/***/ }),

/***/ "./animanumeros.js":
/*!*************************!*\
  !*** ./animanumeros.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ animaNumeros)\n/* harmony export */ });\nfunction animaNumeros() {\n  function numerosAnimation() {\n    const numeros = document.querySelectorAll('[data-numero]')\n    numeros.forEach(numero => {\n      const total = +numero.innerText\n      const incremento = Math.floor(total / 100)\n      let start = 0\n      const timer = setInterval(() => {\n        start += incremento\n        numero.innerText = start\n        if (start > total) {\n          clearInterval(timer)\n          numero.innerText = total\n        }\n      }, 25 * Math.random())\n    })\n  }\n  let observer\n  function handleMutation(mut) {\n    if (mut[0].target.classList.contains('scroll-animation')) {\n      observer.disconnect()\n      numerosAnimation()\n    }\n  }\n  const objetoTarget = document.querySelector('.numeros-querySelector')\n  observer = new MutationObserver(handleMutation)\n  observer.observe(objetoTarget, { attributes: true })\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./animanumeros.js?");

/***/ }),

/***/ "./fetchbtc.js":
/*!*********************!*\
  !*** ./fetchbtc.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchBtc)\n/* harmony export */ });\nfunction fetchBtc() {}\n\nfetch('https://www.blockchain.com/pt/ticker')\n  .then(response => response.json())\n  .then(json => {\n    const btcPreco = document.querySelector('.btc-preco')\n    btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4)\n  })\n  .catch(erro => {\n    console.log(Error(erro))\n  })\n\n\n//# sourceURL=webpack://animaisfantasticos/./fetchbtc.js?");

/***/ }),

/***/ "./funcionamento.js":
/*!**************************!*\
  !*** ./funcionamento.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ funcionamentoEmpresa)\n/* harmony export */ });\nfunction funcionamentoEmpresa() {\r\n  const funcionamento = document.querySelector('[data-semana]')\r\n  const diasSemana = funcionamento.dataset.semana.split(',').map(Number)\r\n  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number)\r\n  const dataAgora = new Date()\r\n  const diaAgora = dataAgora.getDay()\r\n  const horarioAgora = dataAgora.getHours()\r\n  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1\r\n  const horarioAberto =\r\n    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]\r\n  if (semanaAberto && horarioAberto) {\r\n    funcionamento.classList.add('aberto')\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./funcionamento.js?");

/***/ }),

/***/ "./initAcord.js":
/*!**********************!*\
  !*** ./initAcord.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Accordion)\n/* harmony export */ });\nclass Accordion {\r\n  constructor(list) {\r\n    this.questionItem = document.querySelectorAll(list)\r\n    this.activeClass = 'active'\r\n  }\r\n\r\n  toggleAcord(item) {\r\n    item.classList.add(this.activeClass)\r\n    item.nextElementSibling.classList.toggle(this.activeClass)\r\n  }\r\n\r\n  addAccordionEvent() {\r\n    this.questionItem.forEach(item => {\r\n      item.addEventListener('click', () => {\r\n        this.toggleAcord(item)\r\n      })\r\n    })\r\n  }\r\n\r\n  init() {\r\n    if (this.questionItem.length) {\r\n      this.toggleAcord(this.questionItem[0])\r\n      this.addAccordionEvent()\r\n    }\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./initAcord.js?");

/***/ }),

/***/ "./initScroll.js":
/*!***********************!*\
  !*** ./initScroll.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScroll)\n/* harmony export */ });\nclass initScroll {\n  constructor(links, options) {\n    this.internalLink = document.querySelectorAll(links)\n    if (options === undefined) {\n      this.options = { behavior: 'smooth', block: 'start' }\n    } else {\n      this.options = options\n    }\n    this.scrollToSection = this.scrollToSection.bind(this)\n  }\n\n  scrollToSection(event) {\n    event.preventDefault()\n    const href = event.currentTarget.getAttribute('href')\n    const section = document.querySelector(href)\n    section.scrollIntoView(this.options)\n  }\n\n  addLinkEvent() {\n    this.internalLink.forEach(link => {\n      link.addEventListener('click', this.scrollToSection)\n    })\n  }\n\n  init() {\n    this.addLinkEvent()\n    return this\n  }\n}\n\n\n//# sourceURL=webpack://animaisfantasticos/./initScroll.js?");

/***/ }),

/***/ "./initdropdown.js":
/*!*************************!*\
  !*** ./initdropdown.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDown)\n/* harmony export */ });\nfunction initDropDown() {\r\n  const dropDownMenus = document.querySelectorAll('[data-dropdown]')\r\n  function outsideClickFromElement(element, events, callback) {\r\n    const html = document.documentElement\r\n    function clickOutside(event) {\r\n      if (!element.contains(event.target)) {\r\n        html.removeEventListener('click', clickOutside)\r\n        callback()\r\n      }\r\n    }\r\n    html.addEventListener('click', clickOutside)\r\n    const outside = 'data-outside'\r\n    if (!element.hasAttribute(outside)) {\r\n      html.addEventListener('click', clickOutside)\r\n      element.setAttribute(outside, '')\r\n    }\r\n  }\r\n  function handleclick(event) {\r\n    event.preventDefault()\r\n    this.classList.add('active')\r\n    outsideClickFromElement(this, () => {\r\n      this.classList.remove('active')\r\n    })\r\n  }\r\n  dropDownMenus.forEach(item => {\r\n    // item.addEventListener('touchstart', handleclick)\r\n    // item.addEventListener('click', handleclick)\r\n    ;[('touchstart', 'click')].forEach(userEvent => {\r\n      item.addEventListener(userEvent, handleclick)\r\n    })\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./initdropdown.js?");

/***/ }),

/***/ "./mobilemenu.js":
/*!***********************!*\
  !*** ./mobilemenu.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mobileMenu)\n/* harmony export */ });\n/* harmony import */ var _initdropdown_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initdropdown.js */ \"./initdropdown.js\");\n\r\n\r\nfunction mobileMenu() {}\r\nconst menuButton = document.querySelector('[data-menu=\"button\"]')\r\nconst menuList = document.querySelector('[data-menu=\"list\"]')\r\nfunction openMenu() {\r\n  menuList.classList.add('active')\r\n  menuButton.classList.add('active')\r\n  ;(0,_initdropdown_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(menuList, ['click', 'touchstart'], () => {\r\n    console.log('teste')\r\n    menuList.classList.remove('active')\r\n    menuButton.classList.remove('active')\r\n  })\r\n}\r\nmenuButton.addEventListener('click', openMenu)\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./mobilemenu.js?");

/***/ }),

/***/ "./modal.js":
/*!******************!*\
  !*** ./modal.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor(btnAbir, btnFechar, contModal) {\r\n    this.botaoAbrir = document.querySelector(btnAbir)\r\n    this.botaoFechar = document.querySelector(btnFechar)\r\n    this.containerModal = document.querySelector(contModal)\r\n    this.eventToggleModal = this.eventToggleModal.bind(this)\r\n    this.cliqForaModal = this.cliqForaModal.bind(this)\r\n  }\r\n\r\n  toggleModal() {\r\n    this.containerModal.classList.toggle('ativo')\r\n  }\r\n\r\n  eventToggleModal(event) {\r\n    event.preventDefault()\r\n    this.toggleModal()\r\n  }\r\n\r\n  cliqForaModal(event) {\r\n    if (event.target === this.containerModal) this.toggleModal()\r\n  }\r\n\r\n  addModalEvent() {\r\n    this.botaoAbrir.addEventListener('click', this.eventToggleModal)\r\n    this.botaoFechar.addEventListener('click', this.eventToggleModal)\r\n    this.containerModal.addEventListener('click', this.cliqForaModal)\r\n  }\r\n\r\n  init() {\r\n    if (this.botaoAbrir && this.containerModal && this.containerModal) {\r\n      this.addModalEvent()\r\n    }\r\n    return this\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./modal.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initScroll_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initScroll.js */ \"./initScroll.js\");\n/* harmony import */ var _initAcord_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./initAcord.js */ \"./initAcord.js\");\n/* harmony import */ var _InitTAb_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InitTAb.js */ \"./InitTAb.js\");\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ \"./modal.js\");\n/* harmony import */ var _scrollSuave_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scrollSuave.js */ \"./scrollSuave.js\");\n/* harmony import */ var _toolTip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolTip.js */ \"./toolTip.js\");\n/* harmony import */ var _initdropdown_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initdropdown.js */ \"./initdropdown.js\");\n/* harmony import */ var _mobilemenu_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mobilemenu.js */ \"./mobilemenu.js\");\n/* harmony import */ var _funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./funcionamento.js */ \"./funcionamento.js\");\n/* harmony import */ var _animaisfetch_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./animaisfetch.js */ \"./animaisfetch.js\");\n/* harmony import */ var _fetchbtc_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fetchbtc.js */ \"./fetchbtc.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollsuave = new _initScroll_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.js-nav a[href^=\"#\"]')\r\nscrollsuave.init()\r\nconst accordion = new _initAcord_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]('.js-acord dt')\r\naccordion.init()\r\nconst tabNav = new _InitTAb_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.js-tabmenu li', '.js-description section')\r\ntabNav.init()\r\nconst modal = new _modal_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\r\n  '[data-modal=\"abrir\"]',\r\n  '[data-modal=\"fechar\"]',\r\n  '[data-modal=\"container\"]'\r\n)\r\nmodal.init()\r\n\r\n;(0,_scrollSuave_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\r\n;(0,_toolTip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])()\r\n;(0,_initdropdown_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\r\n;(0,_mobilemenu_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\r\n;(0,_funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])()\r\n;(0,_animaisfetch_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])()\r\n;(0,_fetchbtc_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])()\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./script.js?");

/***/ }),

/***/ "./scrollSuave.js":
/*!************************!*\
  !*** ./scrollSuave.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimationScroll)\n/* harmony export */ });\nfunction initAnimationScroll() {\r\n  const sections = document.querySelectorAll('.js-scroll')\r\n  const windowPath = window.innerHeight * 0.6\r\n  function animationScroll() {\r\n    sections.forEach(section => {\r\n      const sectionTop = section.getBoundingClientRect().top\r\n      const sectionVisible = sectionTop - windowPath < 0\r\n      if (sectionVisible) {\r\n        section.classList.add('scroll-animation')\r\n        // } else if (section.classList.contains('scroll-animation')) {\r\n        //   section.classList.remove('scroll-animation')\r\n      } else {\r\n        section.classList.remove('scroll-animation')\r\n      }\r\n    })\r\n  }\r\n  animationScroll()\r\n  window.addEventListener('scroll', animationScroll)\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./scrollSuave.js?");

/***/ }),

/***/ "./toolTip.js":
/*!********************!*\
  !*** ./toolTip.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\nfunction initToolTip() {\r\n  const toolTips = document.querySelectorAll('[data-tooltip=\"\"]')\r\n  const onmouseleave = {\r\n    toolTipBox: '',\r\n    handleEvent() {\r\n      this.toolTipBox.remove()\r\n    }\r\n  }\r\n  const onMouseMove = {\r\n    handleEvent(event) {\r\n      this.toolTipBox.style.top = `${event.pageY + 20}px`\r\n      this.toolTipBox.style.left = `${event.pageX + 20}px`\r\n    }\r\n  }\r\n  function criarToolTipBox(element) {\r\n    const toolTipBox = document.createElement('div')\r\n    const text = element.getAttribute('aria-label')\r\n    toolTipBox.classList.add('tooltip')\r\n    toolTipBox.innerText = text\r\n    document.body.appendChild(toolTipBox)\r\n    return toolTipBox\r\n  }\r\n  function onMouseOver() {\r\n    const toolTipBox = criarToolTipBox(this)\r\n\r\n    onmouseleave.toolTipBox = toolTipBox\r\n    onMouseMove.toolTipBox = toolTipBox\r\n    this.addEventListener('mouseleave', onmouseleave)\r\n    this.addEventListener('mousemove', onMouseMove)\r\n  }\r\n  toolTips.forEach(item => {\r\n    item.addEventListener('mouseover', onMouseOver)\r\n  })\r\n}\r\n\n\n//# sourceURL=webpack://animaisfantasticos/./toolTip.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;