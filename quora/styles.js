(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/mobile.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/mobile.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media (max-width: 480px) {\n  .header {\n    display: flex;\n    height: 105px;\n    flex-direction: column;\n    align-items: flex-start;\n    margin: 0;\n    padding: 0;\n    padding-top: 10px;\n  }\n  .header__logo {\n    margin-top: 10px;\n  }\n  .header__nav {\n    width: 100%;\n    margin-top: 10px;\n  }\n  .header__nav__list {\n    display: flex;\n    list-style: none;\n  }\n  .header__nav__list li {\n    width: 100%;\n    margin: 0 auto;\n  }\n  .header__nav__list li a,\n  .header__nav__list li a:visited {\n    margin: 0 auto;\n    height: 53px;\n    width: 100%;\n  }\n  .header__search_box {\n    position: absolute;\n    right: 0px;\n    margin-right: 20px;\n    margin-top: 7px;\n    flex: 0;\n    width: 50%;\n  }\n  .header__que_btn {\n    display: none;\n  }\n  .header__profileView {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    height: 30px;\n    top: 17px;\n    left: 35%;\n  }\n  .header__profileView img {\n    border-radius: 50%;\n    width: 26px;\n    height: 26px;\n  }\n  .section {\n    margin-top: 100px;\n  }\n  .section__main {\n    padding: 10px 5px;\n  }\n  .section__main__listView {\n    padding-left: 1%;\n    padding-right: 1%;\n    padding-bottom: 5%;\n  }\n  .section__main__listView li .addQueProfileView h3 {\n    font-size: 1.5rem;\n  }\n  .section__main__listView li .addQueProfileView .quePostedUsrName {\n    font-size: 1.7rem;\n  }\n  .section__main__listView li h1 {\n    font-size: 1.8rem;\n  }\n  .section__main__listView li p {\n    font-size: 1.2rem;\n  }\n  .section__main__listView li .queTitle {\n    font-size: 2rem;\n  }\n  .section__main__listView li .bottomControll i {\n    font-size: 1.6rem;\n  }\n  .section__main__listView li .bottomControll span {\n    font-size: 1.2rem;\n    margin: 0 10px;\n  }\n  .section__main__listView2 {\n    padding-left: 1%;\n    padding-right: 1%;\n    padding-bottom: 5%;\n  }\n  .section__main__listView2 li .addQueProfileView h3 {\n    font-size: 1.2rem;\n  }\n  .section__main__listView2 li .addQueProfileView .quePostedUsrName {\n    font-size: 1.5rem;\n  }\n  .section__main__listView2 li h1 {\n    font-size: 2rem;\n  }\n  .section__main__listView2 li p {\n    font-size: 1.2rem;\n  }\n  .section__main__listView2 li .queTitle2 {\n    font-size: 1.7rem;\n  }\n  .section__main__listView2 li .bottomControll i {\n    font-size: 1.5rem;\n  }\n  .section__main__listView2 li .bottomControll span {\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=mobile.css.map */"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./node_modules/postcss-loader/lib??embedded!./src/styles.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*Color Theme*/\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n@font-face {\n  font-family: \"MyFont-l\";\n  src: url('HelveticaNeueLight.ttf') format(\"truetype\");\n}\n@font-face {\n  font-family: \"MyFont-b\";\n  src: url('HelveticaNeueBd.ttf') format(\"truetype\");\n}\nhtml {\n  font-size: 62.5%;\n}\nbody {\n  font-family: 'MyFont-l';\n  box-sizing: border-box;\n  background: #FAFBFE;\n  width: 100%;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.container {\n  width: 100%;\n  height: 100vh;\n  padding: 0 15%;\n}\n.header_container {\n  background: #ffffff;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  box-shadow: 0 3px 2px -2px rgba(0, 0, 0, 0.2);\n  z-index: 100;\n}\n.header {\n  display: flex;\n  width: 100%;\n  height: 53px;\n  align-items: center;\n  z-index: 100;\n}\n.header__logo {\n  width: 80px;\n  margin: 0px 20px;\n}\n.header__nav__list {\n  display: flex;\n  list-style: none;\n}\n.header__nav__list li a,\n.header__nav__list li a:visited {\n  color: #666666;\n  font-size: 1.7rem;\n  font-weight: bold;\n  text-decoration: none;\n  display: block;\n  width: 100px;\n  height: 53px;\n  line-height: 53px;\n  text-align: center;\n}\n.header__nav__list li a:hover {\n  background-color: #FAFBFE;\n}\n.header__nav__list li a.active {\n  color: #00BBE3;\n  border-bottom: 2px solid #00BBE3;\n}\n.header__search_box {\n  flex: 1;\n  height: 30px;\n  display: flex;\n  align-items: center;\n  border-radius: 5px;\n}\n.header__search_box i {\n  color: #666666;\n  opacity: .6;\n  margin-left: 10px;\n  margin-right: 5px;\n  font-size: 1.3rem;\n  position: absolute;\n}\n.header__search_box input {\n  border: none;\n  height: 100%;\n  flex: 1;\n  padding: 0 30px;\n  border: 1px solid rgba(102, 102, 102, 0.3);\n  border-radius: 5px;\n  outline: 0;\n}\n.header__que_btn a {\n  text-decoration: none;\n  color: #FAFBFE;\n  background-color: #0097D6;\n  width: 100px;\n  height: 30px;\n  display: block;\n  text-align: center;\n  line-height: 30px;\n  margin-left: 15px;\n  font-size: 1.2rem;\n  font-family: 'MyFont-b';\n  border-radius: 5px;\n  cursor: pointer;\n}\n.header__que_btn a:active {\n  -webkit-transform: skewX(-10deg);\n  transform: skewX(-10deg);\n}\n.header__profileView {\n  height: 100%;\n  display: flex;\n  align-items: center;\n  margin-left: 10px;\n}\n.header__profileView:hover {\n  background-color: #FAFBFE;\n}\n.header__profileView img {\n  border-radius: 50%;\n  width: 26px;\n  height: 26px;\n}\n.section {\n  margin-top: 80px;\n  width: 100%;\n}\n.section__main {\n  width: 100%;\n  padding: 10px 30px;\n}\n.section__main__listView {\n  overflow: auto;\n  width: 100%;\n  min-height: 300px;\n  padding-left: 15%;\n  padding-right: 15%;\n  padding-bottom: 5%;\n  list-style: none;\n}\n.section__main__listView li {\n  background-color: #ffffff;\n  margin-top: 10px;\n  width: 100%;\n  box-shadow: 0px 0px 10px -1px rgba(0, 0, 0, 0.15);\n  padding: 2% 4%;\n  border-radius: 10px;\n}\n.section__main__listView li .addQueProfileView {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.section__main__listView li .addQueProfileView img {\n  width: 40px;\n  height: 40px;\n}\n.section__main__listView li .addQueProfileView h3 {\n  font-size: 1.7rem;\n  font-weight: bold;\n  margin-left: 15px;\n  color: rgba(102, 102, 102, 0.5);\n}\n.section__main__listView li .addQueProfileView p {\n  margin-left: 15px;\n  color: rgba(102, 102, 102, 0.5);\n}\n.section__main__listView li .addQueProfileView .quePostedUsrName {\n  font-weight: bold;\n  font-size: 2rem;\n  color: #666666;\n}\n.section__main__listView li h1 {\n  color: rgba(102, 102, 102, 0.5);\n  font-family: 'MyFont-b';\n  padding: 10px 0px;\n  letter-spacing: 1.5px;\n  cursor: pointer;\n  font-size: 2.7rem;\n}\n.section__main__listView li p {\n  font-size: 1.5rem;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: #666666;\n}\n.section__main__listView li .queTitle {\n  font-family: 'MyFont-b';\n  padding: 10px 0px;\n  letter-spacing: 1.5px;\n  color: #666666;\n  cursor: pointer;\n  font-size: 2.7rem;\n}\n.section__main__listView li .bottomControll {\n  margin-top: 20px;\n  position: relative;\n  z-index: 50;\n}\n.section__main__listView li .bottomControll i {\n  font-size: 2rem;\n  color: #666666;\n}\n.section__main__listView li .bottomControll i:nth-child(2) {\n  position: absolute;\n  right: 0px;\n}\n.section__main__listView li .bottomControll span {\n  font-size: 1.7rem;\n  margin: 0 10px;\n}\n.backdrop {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  background-color: rgba(0, 0, 0, 0.1);\n  z-index: 200;\n  display: none;\n}\n.model_container {\n  display: none;\n}\n/*For Model*/\n.fadeIn {\n  -webkit-animation: fade-in .3s;\n          animation: fade-in .3s;\n}\n@-webkit-keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n@keyframes fade-in {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n.model {\n  width: 40%;\n  min-height: 35%;\n  position: absolute;\n  top: 40%;\n  left: 50%;\n  display: flex;\n  flex-direction: column;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #ffffff;\n  z-index: 300;\n  border-radius: 20px;\n  overflow: hidden;\n}\n.model__exit {\n  text-align: right;\n  padding: 10px;\n}\n.model__exit span {\n  font-size: 1.5rem;\n  font-family: 'Ubuntu';\n  font-weight: 700;\n  color: #666666;\n  margin-right: 10px;\n  padding: 5px;\n  cursor: pointer;\n}\n.model__inputbox {\n  width: 100%;\n  padding: 10px 20px;\n  flex: 1;\n}\n.model__inputbox input {\n  background-color: #ffffff;\n  width: 100%;\n  font-size: 2rem;\n  font-family: 'Ubuntu';\n  color: #666666;\n  font-weight: 500;\n  border: none;\n  border-bottom: 0.5px solid rgba(102, 102, 102, 0.3);\n  padding-bottom: 30px;\n  outline: none;\n}\n.model__bottom {\n  padding: 10px;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  background-color: rgba(102, 102, 102, 0.2);\n}\n.model__bottom__cancel {\n  display: inline-block;\n  width: 100px;\n  color: #666666;\n  font-size: 1.5rem;\n  margin-left: 20px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.model__bottom__cancel:hover {\n  text-decoration: underline;\n}\n.model__bottom__add {\n  display: inline-block;\n  width: 100px;\n  height: 30px;\n  color: #ffffff;\n  font-family: 'Ubuntu';\n  background-color: #0097D6;\n  text-align: center;\n  line-height: 30px;\n  font-size: 1.5rem;\n  text-decoration: none;\n  border-radius: 5px;\n  position: absolute;\n  right: 20px;\n  cursor: pointer;\n}\n.model__bottom__add:active {\n  -webkit-transform: skew(-15deg);\n  transform: skew(-15deg);\n}\n.ripple {\n  position: relative;\n  overflow: hidden;\n  -webkit-transform: translate3d(0, 0, 0);\n  transform: translate3d(0, 0, 0);\n}\n.ripple:after {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  pointer-events: none;\n  background-image: radial-gradient(circle, #00BBE3 10%, transparent 10.01%);\n  background-repeat: no-repeat;\n  background-position: 50%;\n  -webkit-transform: scale(10, 10);\n  transform: scale(10, 10);\n  opacity: 0;\n  transition: opacity 1s, -webkit-transform 0.5s;\n  transition: transform 0.5s, opacity 1s;\n  transition: transform 0.5s, opacity 1s, -webkit-transform 0.5s;\n}\n.ripple:active:after {\n  -webkit-transform: scale(0, 0);\n  transform: scale(0, 0);\n  opacity: 0.3;\n  transition: 0s;\n}\n.section__main__listView2 {\n  overflow: auto;\n  width: 100%;\n  min-height: 300px;\n  padding-left: 15%;\n  padding-right: 15%;\n  padding-bottom: 5%;\n  list-style: none;\n}\n.section__main__listView2 li {\n  border: 1px solid #E1E4E9;\n  background-color: #ffffff;\n  width: 100%;\n  padding: 2% 4%;\n}\n.section__main__listView2 li .addQueProfileView {\n  display: flex;\n  align-items: center;\n  margin-bottom: 10px;\n}\n.section__main__listView2 li .addQueProfileView img {\n  width: 40px;\n  height: 40px;\n}\n.section__main__listView2 li .addQueProfileView h3 {\n  font-size: 1.7rem;\n  font-weight: bold;\n  margin-left: 15px;\n  color: rgba(102, 102, 102, 0.5);\n}\n.section__main__listView2 li .addQueProfileView p {\n  margin-left: 15px;\n  color: rgba(102, 102, 102, 0.5);\n}\n.section__main__listView2 li .addQueProfileView .quePostedUsrName {\n  font-weight: bold;\n  font-size: 2rem;\n  color: #666666;\n}\n.section__main__listView2 li h1 {\n  color: rgba(102, 102, 102, 0.5);\n  font-family: 'MyFont-b';\n  padding: 10px 0px;\n  letter-spacing: 1.5px;\n  cursor: pointer;\n  font-size: 2.7rem;\n}\n.section__main__listView2 li p {\n  font-size: 1.5rem;\n  font-weight: bold;\n  letter-spacing: 1px;\n  color: #666666;\n}\n.section__main__listView2 li .queTitle2 {\n  font-family: 'MyFont-b';\n  padding: 10px 0px;\n  letter-spacing: 1.5px;\n  color: #666666;\n  cursor: pointer;\n  font-size: 2.3rem;\n}\n.section__main__listView2 li .bottomControll {\n  margin-top: 20px;\n  position: relative;\n  z-index: 50;\n}\n.section__main__listView2 li .bottomControll i {\n  font-size: 2rem;\n  color: #666666;\n}\n.section__main__listView2 li .bottomControll i:nth-child(2) {\n  position: absolute;\n  right: 0px;\n}\n.section__main__listView2 li .bottomControll span {\n  font-size: 1.7rem;\n  margin: 0 10px;\n}\na {\n  text-decoration: none;\n  color: #777D87;\n}\na:hover {\n  text-decoration: underline;\n}\n.ans-btn:hover {\n  cursor: pointer;\n  font-weight: bold;\n}\n::-webkit-scrollbar {\n  width: 10px;\n  position: relative;\n  margin-right: 10px;\n}\n::-webkit-scrollbar-track {\n  border-radius: 10px;\n}\n::-webkit-scrollbar-thumb {\n  background: rgba(102, 102, 102, 0.7);\n  border-radius: 10px;\n}\n@media (max-width: 1100px) {\n  .container {\n    padding: 0 10%;\n  }\n}\n@media (max-width: 960px) {\n  .container {\n    padding: 0 5%;\n  }\n}\n@media (max-width: 850px) {\n  .container {\n    padding: 0 10px;\n  }\n}\n/*# sourceMappingURL=style.css.map */\n/* Mobile Css*/\n@media (max-width: 480px) {\n  .header {\n    display: flex;\n    height: 105px;\n    flex-direction: column;\n    align-items: flex-start;\n    margin: 0;\n    padding: 0;\n    padding-top: 10px;\n  }\n  .header__logo {\n    margin-top: 10px;\n  }\n  .header__nav {\n    width: 100%;\n    margin-top: 10px;\n  }\n  .header__nav__list {\n    display: flex;\n    list-style: none;\n  }\n  .header__nav__list li {\n    width: 100%;\n    margin: 0 auto;\n  }\n  .header__nav__list li a,\n  .header__nav__list li a:visited {\n    margin: 0 auto;\n    height: 53px;\n    width: 100%;\n  }\n  .header__search_box {\n    position: absolute;\n    right: 0px;\n    margin-right: 20px;\n    margin-top: 7px;\n    flex: 0;\n    width: 50%;\n  }\n  .header__que_btn {\n    display: none;\n  }\n  .header__profileView {\n    display: flex;\n    align-items: center;\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    height: 30px;\n    top: 17px;\n    left: 35%;\n  }\n  .header__profileView img {\n    border-radius: 50%;\n    width: 26px;\n    height: 26px;\n  }\n  .section {\n    margin-top: 100px;\n  }\n  .section__main {\n    padding: 10px 5px;\n  }\n  .section__main__listView {\n    padding-left: 1%;\n    padding-right: 1%;\n    padding-bottom: 5%;\n  }\n  .section__main__listView li .addQueProfileView h3 {\n    font-size: 1.5rem;\n  }\n  .section__main__listView li .addQueProfileView .quePostedUsrName {\n    font-size: 1.7rem;\n  }\n  .section__main__listView li h1 {\n    font-size: 1.8rem;\n  }\n  .section__main__listView li p {\n    font-size: 1.2rem;\n  }\n  .section__main__listView li .queTitle {\n    font-size: 2rem;\n  }\n  .section__main__listView li .bottomControll i {\n    font-size: 1.6rem;\n  }\n  .section__main__listView li .bottomControll span {\n    font-size: 1.2rem;\n    margin: 0 10px;\n  }\n  .section__main__listView2 {\n    padding-left: 1%;\n    padding-right: 1%;\n    padding-bottom: 5%;\n  }\n  .section__main__listView2 li .addQueProfileView h3 {\n    font-size: 1.2rem;\n  }\n  .section__main__listView2 li .addQueProfileView .quePostedUsrName {\n    font-size: 1.5rem;\n  }\n  .section__main__listView2 li h1 {\n    font-size: 2rem;\n  }\n  .section__main__listView2 li p {\n    font-size: 1.2rem;\n  }\n  .section__main__listView2 li .queTitle2 {\n    font-size: 1.7rem;\n  }\n  .section__main__listView2 li .bottomControll i {\n    font-size: 1.5rem;\n  }\n  .section__main__listView2 li .bottomControll span {\n    font-size: 1.2rem;\n  }\n}\n/*# sourceMappingURL=mobile.css.map */\n"

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/mobile.css":
/*!************************!*\
  !*** ./src/mobile.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./mobile.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/mobile.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/raw-loader!../node_modules/postcss-loader/lib??embedded!./styles.css */ "./node_modules/raw-loader/index.js!./node_modules/postcss-loader/lib/index.js??embedded!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!***********************************************!*\
  !*** multi ./src/styles.css ./src/mobile.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! P:\Web\Angular\Quora-Clone\src\styles.css */"./src/styles.css");
module.exports = __webpack_require__(/*! P:\Web\Angular\Quora-Clone\src\mobile.css */"./src/mobile.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map