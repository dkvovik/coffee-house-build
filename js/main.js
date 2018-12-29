/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/main.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/location.js":
/*!****************************!*\
  !*** ./src/js/location.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*eslint-disable*/
ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 12,
    controls: ['zoomControl']
  }),
      collection = new ymaps.GeoObjectCollection(null, {
    preset: groups.style
  });
  myMap.behaviors.disable('scrollZoom');
  myMap.geoObjects.add(collection);

  for (var j = 0, m = groups.items.length; j < m; j++) {
    createMenuGroup(groups.items[j]);
  }

  function createMenuGroup(item) {
    var placemark = new ymaps.Placemark(item.center, {
      balloonContent: "<b>".concat(item.address, "</b><br>")
    }, {
      iconLayout: 'default#image',
      iconImageHref: 'images/baloon.png',
      iconImageSize: [35, 49],
      iconImageOffset: [-22, -55]
    }); // Добавляем метку в коллекцию.

    collection.add(placemark);
  }
}

var groups = {
  name: 'Известные памятники',
  style: 'islands#redIcon',
  items: [{
    center: [55.719455, 37.608266],
    address: 'Москва, улица Шаболовка, 30/12'
  }, {
    center: [55.794445, 37.588248],
    address: 'Москва, Савеловский вокзала, д. 2'
  }, {
    center: [55.793586, 37.615246],
    address: 'Москва, Сущевский Вал д. 59'
  }, {
    center: [55.776375, 37.581757],
    address: 'Москва, Тверская застава, д. 7, стр. 1 (Белорусский вокзал, зал пригородных касс, подъезд № 2)'
  }, {
    center: [55.778851, 37.582035],
    address: 'Ленинградский пр-т, д. 4 (Кофе Хауз Киоск)'
  }, {
    center: [55.682651, 37.661913],
    address: 'Москва, Андропова пр-кт, д. 22'
  }, {
    center: [55.708780, 37.733006],
    address: 'Волгоградский пр-т, д. 46/15, стр. 3А'
  }, {
    center: [55.684503, 37.621947],
    address: 'Варшавское шоссе, д. 26, стр 5.7.8 (Кофе Хауз Киоск)'
  }, {
    center: [55.737532, 37.590138],
    address: 'Москва, Зубовский бульвар, д. 4, 2-й этаж'
  }, {
    center: [55.737532, 37.590138],
    address: 'Москва, Зубовский бульвар, д. 4, 6-й этаж (РИА Новости)'
  }, {
    center: [55.735961, 37.591701],
    address: 'Москва, Зубовский бульвар, д. 15, стр. 1'
  }, {
    center: [55.750712, 37.596148],
    address: 'Арбат, д 19 (Шоколадный киоск)'
  }, {
    center: [55.757491, 37.660808],
    address: 'Земляной Вал, д. 29 (Шоколадный киоск)'
  }, {
    center: [55.729741, 37.639455],
    address: 'Москва, Павелецкая площадь, д. 1А, стр. 1'
  }, {
    center: [55.798616, 37.939861],
    address: 'МО, Балашиха, Парковая ул., д. 2'
  }, {
    center: [55.757491, 37.635404],
    address: 'Москва, Маросейка 6/8 стр. 1'
  }, {
    center: [55.734151, 37.618920],
    address: 'Б. Полянка, д. 30'
  }, {
    center: [55.708284, 37.652847],
    address: 'Ленинская Слобода д. 19, БЦ Омега Плаза'
  }, {
    center: [55.739027, 38.011367],
    address: 'Автозаводская д. 13 (Кофе Хауз Киоск)'
  }, {
    center: [55.773611, 37.655670],
    address: 'Москва, Комсомольская площадь, д. 2 (Казанский вокзал, 5-ый подъезд)'
  }, {
    center: [55.773448, 37.655331],
    address: 'Москва, Комсомольская площадь, д. 2 (Казанский вокзал, платформа пригород)'
  }, {
    center: [55.773448, 37.655331],
    address: 'Москва, Комсомольская площадь, д. 2 (Казанский вокзал, подъезд 2)'
  }, {
    center: [55.773448, 37.655331],
    address: 'Москва, Комсомольская площадь, д. 2 (Казанский вокзал, павильон 23)'
  }, {
    center: [55.776475, 37.657736],
    address: 'Комсомольская площадь, д. 5 (Ярославский вокзал)<br> Комсомольская площадь, д. 5 (Ярославский вокзал) КАССЫ'
  }, {
    center: [55.776127, 37.655347],
    address: 'Комсомольская пл., д. 3 (Кофе Хауз Киоск)'
  }, {
    center: [55.966339, 37.415885],
    address: 'Москва, аэропорт Шереметьево, терминал B'
  }]
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor */ "./src/js/vendor.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ "./src/js/location.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_location__WEBPACK_IMPORTED_MODULE_1__);


/** owl-carousel **/

/* owl-special-offers */

$(document).ready(function () {
  var owl = $('.owl-carousel.owl-special-offers');
  var owlWrapper = owl.parent('.owl-carousel-wrapper');
  owl.on('initialized.owl.carousel', function (event) {
    owlWrapper.find('span.length-offer').html(event.item.count);
  });
  owl.owlCarousel({
    items: 1,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    margin: 25,
    smartSpeed: 500,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    dots: false,
    loop: true
  });
  owl.on('changed.owl.carousel', function (event) {
    if (event.item.index === 2) {
      owlWrapper.find('span.current-offer').html(event.item.count);
    } else {
      owlWrapper.find('span.current-offer').html(event.item.index - 2);
    }
  });
  owlWrapper.find('.btn-next').click(function () {
    owl.trigger('next.owl.carousel', [700]);
  });
  owlWrapper.find('.btn-prev').click(function () {
    owl.trigger('prev.owl.carousel', [700]);
  });
});
/* END owl-special-offers */

/* owl-menu */

$(document).ready(function () {
  var owlMenu = $('.owl-carousel.owl-menu.owl-menu-combo');
  var owlMenuWrapper = owlMenu.parent('.owl-carousel-wrapper');
  owlMenu.on('initialized.owl.carousel', function (event) {
    owlMenuWrapper.find('span.length-offer').html(event.item.count);
  });
  owlMenu.owlCarousel({
    items: 1,
    margin: 25,
    smartSpeed: 500,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    loop: true,
    dots: false
  });
  owlMenu.on('changed.owl.carousel', function (event) {
    if (event.item.index === 0) {
      owlMenuWrapper.find('span.current-offer').html(1);
    } else if (event.item.index === 3) {
      owlMenuWrapper.find('span.current-offer').html(event.item.count);
    } else {
      owlMenuWrapper.find('span.current-offer').html(event.item.index - 3);
    }
  });
  owlMenuWrapper.find('.btn-next').click(function () {
    owlMenu.trigger('next.owl.carousel', [700]);
  });
  owlMenuWrapper.find('.btn-prev').click(function () {
    owlMenu.trigger('prev.owl.carousel', [700]);
  });
});
/* END owl-menu */

/* owl-menu */

$(document).ready(function () {
  var owlMenu = $('.owl-carousel.owl-menu.owl-menu-coffee');
  var owlMenuWrapper = owlMenu.parent('.owl-carousel-wrapper');
  owlMenu.on('initialized.owl.carousel', function (event) {
    owlMenuWrapper.find('span.length-offer').html(event.item.count);
  });
  owlMenu.owlCarousel({
    items: 1,
    margin: 25,
    smartSpeed: 500,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut'
  });
  owlMenu.on('changed.owl.carousel', function (event) {
    if (event.item.index === 2) {
      owlMenuWrapper.find('span.current-offer').html(event.item.count);
    } else {
      owlMenuWrapper.find('span.current-offer').html(event.item.index - 2);
    }
  });
  owlMenuWrapper.find('.btn-next').click(function () {
    owlMenu.trigger('next.owl.carousel', [700]);
  });
  owlMenuWrapper.find('.btn-prev').click(function () {
    owlMenu.trigger('prev.owl.carousel', [700]);
  });
});
/* END owl-menu */

/* owl-about */

$(document).ready(function () {
  var owlAbout = $('.owl-carousel.owl-about');
  owlAbout.owlCarousel({
    items: 1,
    margin: 25,
    smartSpeed: 500,
    dots: false,
    nav: true,
    navText: ['<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAD7SURBVGiB7dk9DgFRGIXhG5XEClTWQEnHCuwFhURQYzVqe7EBCZKpX4W/ZMwtvpnEucP3dFOQ8yaSuWZCcM45ZwB0gDHQUm8pDRgAF+726j2lPCKuvGXqTWYFEQBz9S4TYAhkuYiJepdJJGKq3mXyKxGjgoiZepeJR6QiErFU7zKJRKzUu0w8IhWRiLV6l4lHpALo83mK3ap3mQHHXMROtaVR8fPkrs8Vv08j8tNaqHeVAvSAUy5mo95Visek6h9i6ndvCeH3YroekyKPSVUkRnbIrMRjUkXxa4V6PQd+Koip53+ZEF4x50fIQb2nEqDN/ZVDU73FOee+5wawKRICw7estAAAAABJRU5ErkJggg==">', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADFwAAAxcBwpsE1QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAADbSURBVGiB7dk7CsJAFIXhwUpwAzYuwlLLlK7HR+er9bEcS5fiDgIhYv1bKIhjZSLcueP5umnC+SHFwIQgIvI3gB4wAQbWW1oBTjxUwNh6T2NAyUvtNgaY8s51zCyKuQGF9a5GcouZKyZFucWscopZKyZFucVsFJOi3GK2OcUcopgaGFnvagQ4RjGXNt/r/GpYA1V0xmRFG8DS/a8F7KKIEhha7/oKsFdEChSRCkWkgs8riCJMKCIVuUTE13GXEYsowuezAnB1HxFCCMD5GeH+6a0LFEDfeouIiC93OHQR8Jz8JwgAAAAASUVORK5CYII=">'],
    responsive: {
      768: {
        items: 3
      }
    },
    loop: true
  });
});
/* END owl-about */

/* owl-menu-mobile */

$(document).ready(function () {
  var $owlMenuMob = $('.owl-menu-mobile');

  function startOwlMenuMobile() {
    $owlMenuMob.addClass('owl-carousel');
    $owlMenuMob.owlCarousel({
      items: 1,
      margin: 25,
      smartSpeed: 500,
      nav: true,
      dots: false,
      loop: true,
      navText: ['<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB3SURBVEhL7Y3BDUBAEEVXOFMA3VCUGlwcXFSgEppQhnDmzcZBAzsb2XnJy+TP5TnjrxTvVaXFAwe/lJDohTf28tDgGx0xw+BYNCgWDUqUaIUnSnRGlaiQ44oS3rFBNUrc0OLpxmtUw+LR44s8NJH4hJ1fRuI49wBaqTmbN42i3gAAAABJRU5ErkJggg==">', '<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAB2SURBVEhL7c9BCkBQFIXhp6RMDEztjbICy7AHy5E9yJhNSPhvMTdxGZy/vl7dyekF9bfi63UtxYIemR28SjDiwADX8QITNK5xlzT+2fgMG+/s4FWFDTtqO3hU4h5t7OCRRl9No6/2yWiOFa6jVoQW9mulHhbCCeZvOaH0XJ0bAAAAAElFTkSuQmCC">']
    });
  }

  if ($(window).width() <= '767') {
    startOwlMenuMobile();
  }
});
/* END owl-menu-mobile */

/** END owl-carousel **/

$(document).ready(function () {
  $('.menu-item').hover(function () {
    $(this).toggleClass('show');
  });
});
/* modal */

$('button[data-modal], a[data-modal]').on('click touchstart', function (event) {
  console.log('2');
  var nameModal = $(event.target).closest('[data-modal]').attr('data-modal');

  if (nameModal === 'all-address' && $(window).width() < 768) {
    nameModal = 'all-address-mobile';
  }

  $("#".concat(nameModal)).modal({
    fadeDuration: 130
  });
  return false;
});
/* END modal */

/* Плавный скролл по якорям */

$(document).ready(function () {
  $('ul.nav a, .footer__nav a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href');
    var top = $(id).offset().top + 30;
    $('body,html').animate({
      scrollTop: top
    }, 350);
  });
});
/* END Плавный скролл по якорям */

/* Кнопка "Подробнее" */

$(document).ready(function () {
  $('.read-more').click(function (event) {
    var btnReadMore = $(event.target);

    if (btnReadMore.hasClass('isOpen')) {
      btnReadMore.prev().slideUp();
      btnReadMore.insertBefore(btnReadMore.prev());
      btnReadMore.removeClass('isOpen');
    } else {
      btnReadMore.next().slideDown();
      btnReadMore.insertAfter(btnReadMore.next());
      btnReadMore.addClass('isOpen');
    }
  });
});
/* END Кнопка "Подробнее" */

/* Кнопка меню навигации */

$('.menu-toggle').on('click touchstart', function () {
  $(this).toggleClass('on');
  $('.menu-section').toggleClass('on');
  $('nav ul').toggleClass('hidden');
});
/* END Кнопка меню навигации */

/* Скачать меню */

$('button[data-file], a[data-file]').on('click', function (event) {
  window.open('/menu.pdf');
});
/* END Скачать меню */
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/js/vendor.js":
/*!**************************!*\
  !*** ./src/js/vendor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ "./node_modules/@babel/polyfill/lib/index.js");
/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var svg4everybody__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(svg4everybody__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _vendor_checkWebp_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/checkWebp.min */ "./src/js/vendor/checkWebp.min.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
/* harmony import */ var owl_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var jquery_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery-modal */ "./node_modules/jquery-modal/jquery.modal.js");
/* harmony import */ var jquery_modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery_modal__WEBPACK_IMPORTED_MODULE_4__);





svg4everybody__WEBPACK_IMPORTED_MODULE_1___default()();

__webpack_require__(/*! ninelines-ua-parser */ "./node_modules/ninelines-ua-parser/dist/ninelines-ua-parser.js");

/***/ }),

/***/ "./src/js/vendor/checkWebp.min.js":
/*!****************************************!*\
  !*** ./src/js/vendor/checkWebp.min.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


/*! modernizr 3.6.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-webp-setclasses !*/
!function (e, n, A) {
  function o(e, n) {
    return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e) === n;
  }

  function t() {
    var e, n, A, t, a, i, l;

    for (var f in r) {
      if (r.hasOwnProperty(f)) {
        if (e = [], n = r[f], n.name && (e.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length)) for (A = 0; A < n.options.aliases.length; A++) {
          e.push(n.options.aliases[A].toLowerCase());
        }

        for (t = o(n.fn, "function") ? n.fn() : n.fn, a = 0; a < e.length; a++) {
          i = e[a], l = i.split("."), 1 === l.length ? Modernizr[l[0]] = t : (!Modernizr[l[0]] || Modernizr[l[0]] instanceof Boolean || (Modernizr[l[0]] = new Boolean(Modernizr[l[0]])), Modernizr[l[0]][l[1]] = t), s.push((t ? "" : "no-") + l.join("-"));
        }
      }
    }
  }

  function a(e) {
    var n = u.className,
        A = Modernizr._config.classPrefix || "";

    if (c && (n = n.baseVal), Modernizr._config.enableJSClass) {
      var o = new RegExp("(^|\\s)" + A + "no-js(\\s|$)");
      n = n.replace(o, "$1" + A + "js$2");
    }

    Modernizr._config.enableClasses && (n += " " + A + e.join(" " + A), c ? u.className.baseVal = n : u.className = n);
  }

  function i(e, n) {
    if ("object" == _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(e)) for (var A in e) {
      f(e, A) && i(A, e[A]);
    } else {
      e = e.toLowerCase();
      var o = e.split("."),
          t = Modernizr[o[0]];
      if (2 == o.length && (t = t[o[1]]), "undefined" != typeof t) return Modernizr;
      n = "function" == typeof n ? n() : n, 1 == o.length ? Modernizr[o[0]] = n : (!Modernizr[o[0]] || Modernizr[o[0]] instanceof Boolean || (Modernizr[o[0]] = new Boolean(Modernizr[o[0]])), Modernizr[o[0]][o[1]] = n), a([(n && 0 != n ? "" : "no-") + o.join("-")]), Modernizr._trigger(e, n);
    }
    return Modernizr;
  }

  var s = [],
      r = [],
      l = {
    _version: "3.6.0",
    _config: {
      classPrefix: "",
      enableClasses: !0,
      enableJSClass: !0,
      usePrefixes: !0
    },
    _q: [],
    on: function on(e, n) {
      var A = this;
      setTimeout(function () {
        n(A[e]);
      }, 0);
    },
    addTest: function addTest(e, n, A) {
      r.push({
        name: e,
        fn: n,
        options: A
      });
    },
    addAsyncTest: function addAsyncTest(e) {
      r.push({
        name: null,
        fn: e
      });
    }
  },
      Modernizr = function Modernizr() {};

  Modernizr.prototype = l, Modernizr = new Modernizr();
  var f,
      u = n.documentElement,
      c = "svg" === u.nodeName.toLowerCase();
  !function () {
    var e = {}.hasOwnProperty;
    f = o(e, "undefined") || o(e.call, "undefined") ? function (e, n) {
      return n in e && o(e.constructor.prototype[n], "undefined");
    } : function (n, A) {
      return e.call(n, A);
    };
  }(), l._l = {}, l.on = function (e, n) {
    this._l[e] || (this._l[e] = []), this._l[e].push(n), Modernizr.hasOwnProperty(e) && setTimeout(function () {
      Modernizr._trigger(e, Modernizr[e]);
    }, 0);
  }, l._trigger = function (e, n) {
    if (this._l[e]) {
      var A = this._l[e];
      setTimeout(function () {
        var e, o;

        for (e = 0; e < A.length; e++) {
          (o = A[e])(n);
        }
      }, 0), delete this._l[e];
    }
  }, Modernizr._q.push(function () {
    l.addTest = i;
  }), Modernizr.addAsyncTest(function () {
    function e(e, n, A) {
      function o(n) {
        var o = n && "load" === n.type ? 1 == t.width : !1,
            a = "webp" === e;
        i(e, a && o ? new Boolean(o) : o), A && A(n);
      }

      var t = new Image();
      t.onerror = o, t.onload = o, t.src = n;
    }

    var n = [{
      uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
      name: "webp"
    }, {
      uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
      name: "webp.alpha"
    }, {
      uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
      name: "webp.animation"
    }, {
      uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
      name: "webp.lossless"
    }],
        A = n.shift();
    e(A.name, A.uri, function (A) {
      if (A && "load" === A.type) for (var o = 0; o < n.length; o++) {
        e(n[o].name, n[o].uri);
      }
    });
  }), t(), a(s), delete l.addTest, delete l.addAsyncTest;

  for (var p = 0; p < Modernizr._q.length; p++) {
    Modernizr._q[p]();
  }

  e.Modernizr = Modernizr;
}(window, document);

/***/ })

/******/ });
//# sourceMappingURL=main.js.map