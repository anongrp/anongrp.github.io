(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/answer-view/answer-view.component.css":
/*!*******************************************************!*\
  !*** ./src/app/answer-view/answer-view.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".answerInput {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n.submitAnsBtn {\r\n  display: inline-block;\r\n  padding: 10px;\r\n  background: #0097d6;\r\n  color: #fff;\r\n  font-size: 1.5rem;\r\n  text-decoration: none;\r\n  border-radius: 10px;\r\n  position: relative;\r\n  right: -82%;\r\n  margin-top: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/answer-view/answer-view.component.html":
/*!********************************************************!*\
  !*** ./src/app/answer-view/answer-view.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"section__main__listView\" id=\"listView\">\r\n\r\n  <li>\r\n    <div class=\"addQueProfileView\"><img src=\"assets/img/test.png\" alt=\"Profile Pic\">\r\n      <h3>UserName</h3></div>\r\n    <h1 class=\"queTitle\">{{ data.title }}</h1>\r\n  </li>\r\n\r\n  <li *ngFor=\"let i of data.answers\">\r\n    <div class=\"addQueProfileView\"><img src=\"assets/img/test.png\" alt=\"Profile Pic\">\r\n      <div><h3 class=\"quePostedUsrName\">{{ i.writerName }}</h3>\r\n        <p>{{ i.time }}</p></div>\r\n    </div>\r\n    <p>{{ i.ans }}</p>\r\n    <div class=\"bottomControll\"><i class=\"fa fa-heart\"></i><i class=\"fa fa-share\"></i><span>{{ i.likes }}</span></div>\r\n  </li>\r\n\r\n  <li>\r\n    <textarea class=\"answerInput\">\r\n\r\n    </textarea>\r\n    <a class=\"submitAnsBtn\"> Submit Answer </a>\r\n  </li>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/answer-view/answer-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/answer-view/answer-view.component.ts ***!
  \******************************************************/
/*! exports provided: AnswerViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerViewComponent", function() { return AnswerViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AnswerViewComponent = /** @class */ (function () {
    function AnswerViewComponent(route) {
        this.route = route;
        this.data = {
            title: 'Who wrote the google search algorithm?',
            likes: 100,
            time: 'Asked 1 hr ago',
            usrName: 'UserName',
            answers: [
                {
                    writerName: 'WriterName',
                    ans: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur assumenda consequuntur, itaque laudantium magnam maxime natus nemo omnis, quod repellat sit voluptate! Ex ipsum, neque perspiciatis quis vero vitae?',
                    likes: 100,
                    time: '01/01/0000'
                },
                {
                    writerName: 'WriterName',
                    ans: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum esse fugit id magni nesciunt nisi perspiciatis provident recusandae? Asperiores consectetur et explicabo facere officiis optio quos unde. Exercitationem, itaque quae?',
                    likes: 200,
                    time: '01/01/0000'
                }
            ]
        };
    }
    AnswerViewComponent.prototype.ngOnInit = function () {
        this.route.params.subscribe(function (param) {
            console.log(param['id']);
        });
    };
    AnswerViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer-view',
            template: __webpack_require__(/*! ./answer-view.component.html */ "./src/app/answer-view/answer-view.component.html"),
            styles: [__webpack_require__(/*! ./answer-view.component.css */ "./src/app/answer-view/answer-view.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], AnswerViewComponent);
    return AnswerViewComponent;
}());



/***/ }),

/***/ "./src/app/answers/answer/answer.component.html":
/*!******************************************************!*\
  !*** ./src/app/answers/answer/answer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\n  <div class=\"addQueProfileView\">\n    <div style=\"float: left;\"><p>Question added - </p></div>\n    <div><p>Machine Learning</p></div>\n    <div style=\"width: 44%\"></div>\n    <a href=\"#\">\n      <div style=\"float: right;\">\n        <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n             xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <g id=\"small_close\" class=\"icon_svg-stroke\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\"\n             stroke=\"#666666\" stroke-width=\"1.5\">\n            <path d=\"M12,6 L12,18\"\n                  transform=\"translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) \"></path>\n            <path d=\"M18,12 L6,12\"\n                  transform=\"translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) \"></path>\n          </g>\n        </svg>\n      </div>\n    </a></div>\n  <h1 class=\"queTitle2\">How do neural networks have overwhelming accuracy and still generalize well on test sets?</h1>\n  <div class=\"addQueProfileView\">\n    <div style=\"float: left;\"><p>No answer yet - </p></div>\n    <div><p>Last followed 7m ago</p></div>\n  </div>\n  <div class=\"bottomControll\">\n    <div class=\"ans-btn\" style=\"float: left;\">\n      <div style=\"float: left;\"><a href=\"#\">\n        <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n             xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <g id=\"answer\" transform=\"translate(2.500000, 3.500000)\" stroke=\"none\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"pen\"\n               transform=\"translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)\">\n              <path\n                d=\"M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z\"\n                id=\"pen_body\" class=\"icon_svg-stroke\" stroke=\"#666\" stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"></path>\n              <polygon id=\"pen_tip\" class=\"icon_svg-fill_as_stroke\" fill=\"#666\"\n                       transform=\"translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) \"\n                       points=\"2 17.5 3.25 20 0.75 20\"></polygon>\n            </g>\n            <path d=\"M12,16 L17,16 L17,11 M7,1 L2,1 L2,6\" id=\"bg\" class=\"icon_svg-stroke\" stroke=\"#666\"\n                  stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n          </g>\n        </svg>\n      </a></div>\n      <span>Answer</span></div>\n    <p style=\"float: right;visibility: hidden;\">Answer</p>\n    <div class=\"ans-btn\">\n      <div style=\"float: left;\"><a href=\"#\">\n        <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n             xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <g id=\"pass\" stroke=\"none\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"pen\"\n               transform=\"translate(11.485281, 12.485281) rotate(-315.000000) translate(-11.485281, -12.485281) translate(9.485281, 2.485281)\">\n              <path\n                d=\"M0,7.51471863 L2.22044605e-16,1.99994543 C8.67738547e-17,0.895375929 0.8954305,-5.45711382e-05 2,-5.45711382e-05 C3.1045695,-5.45711382e-05 4,0.895375929 4,1.99994543 L4,7.51471863 M4,12.5147186 L4,16 L2.00256278,20 L0,16 L0,12.5147186\"\n                id=\"Rectangle-5\" class=\"icon_svg-stroke\" stroke=\"#666\" stroke-width=\"1.5\" stroke-linecap=\"square\"\n                stroke-linejoin=\"round\"></path>\n              <polygon id=\"pen_tip\" class=\"icon_svg-fill_as_stroke\" fill=\"#666\"\n                       transform=\"translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) \"\n                       points=\"2 17.5 3.25 20 0.75 20\"></polygon>\n            </g>\n            <path d=\"M4.63603897,5.63603897 L18.5,19.5\" id=\"Line\" class=\"icon_svg-stroke\" stroke=\"#666\"\n                  stroke-width=\"1.5\" stroke-linecap=\"round\"></path>\n          </g>\n        </svg>\n      </a></div>\n      <span>Pass</span></div> <!-- --> </div>\n</li>\n"

/***/ }),

/***/ "./src/app/answers/answer/answer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/answers/answer/answer.component.ts ***!
  \****************************************************/
/*! exports provided: AnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerComponent", function() { return AnswerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AnswerComponent = /** @class */ (function () {
    function AnswerComponent() {
    }
    AnswerComponent.prototype.ngOnInit = function () {
    };
    AnswerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answer',
            template: __webpack_require__(/*! ./answer.component.html */ "./src/app/answers/answer/answer.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], AnswerComponent);
    return AnswerComponent;
}());



/***/ }),

/***/ "./src/app/answers/answers.component.html":
/*!************************************************!*\
  !*** ./src/app/answers/answers.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"section__main__listView2\" id=\"listView\">\r\n  <li>\r\n    <div>\r\n      <div style=\"width: 32px;float: left;\"><img src=\"assets/img/star1.png\" alt=\"star\"></div>\r\n      <div><a href=\"#\"><h2>Questions for you</h2></a></div>\r\n    </div>\r\n  </li>\r\n\r\n\r\n  <app-answer> </app-answer>\r\n</ul>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/answers/answers.component.ts":
/*!**********************************************!*\
  !*** ./src/app/answers/answers.component.ts ***!
  \**********************************************/
/*! exports provided: AnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswersComponent", function() { return AnswersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AnswersComponent = /** @class */ (function () {
    function AnswersComponent() {
    }
    AnswersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-answers',
            template: __webpack_require__(/*! ./answers.component.html */ "./src/app/answers/answers.component.html")
        })
    ], AnswersComponent);
    return AnswersComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-view {\r\n    box-shadow: 0px 0px 10px rgba(0, 0, 0, .2);\r\n    background-color: #fff;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n\n<div class=\"container\">\n\n  <app-header></app-header>\n\n  <app-model></app-model>\n\n  <section class=\"section\">\n    <main class=\"section__main\">\n\n      <router-outlet></router-outlet>\n\n    </main>\n  </section>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Quora-Clone';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routes_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes.module */ "./src/app/app.routes.module.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _answers_answers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./answers/answers.component */ "./src/app/answers/answers.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _feed_feed_item_feed_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./feed/feed-item/feed-item.component */ "./src/app/feed/feed-item/feed-item.component.ts");
/* harmony import */ var _answers_answer_answer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./answers/answer/answer.component */ "./src/app/answers/answer/answer.component.ts");
/* harmony import */ var _questions_question_question_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./questions/question/question.component */ "./src/app/questions/question/question.component.ts");
/* harmony import */ var _model_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./model/model.component */ "./src/app/model/model.component.ts");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./model.service */ "./src/app/model.service.ts");
/* harmony import */ var _answer_view_answer_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./answer-view/answer-view.component */ "./src/app/answer-view/answer-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_6__["FeedComponent"],
                _answers_answers_component__WEBPACK_IMPORTED_MODULE_7__["AnswersComponent"],
                _answers_answer_answer_component__WEBPACK_IMPORTED_MODULE_10__["AnswerComponent"],
                _questions_questions_component__WEBPACK_IMPORTED_MODULE_8__["QuestionsComponent"],
                _questions_question_question_component__WEBPACK_IMPORTED_MODULE_11__["QuestionComponent"],
                _feed_feed_item_feed_item_component__WEBPACK_IMPORTED_MODULE_9__["FeedItemComponent"],
                _model_model_component__WEBPACK_IMPORTED_MODULE_12__["ModelComponent"],
                _answer_view_answer_view_component__WEBPACK_IMPORTED_MODULE_14__["AnswerViewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routes_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutesModule"]
            ],
            providers: [_model_service__WEBPACK_IMPORTED_MODULE_13__["ModelService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.module.ts":
/*!**************************************!*\
  !*** ./src/app/app.routes.module.ts ***!
  \**************************************/
/*! exports provided: AppRoutesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutesModule", function() { return AppRoutesModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/questions/questions.component.ts");
/* harmony import */ var _answers_answers_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./answers/answers.component */ "./src/app/answers/answers.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _answer_view_answer_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./answer-view/answer-view.component */ "./src/app/answer-view/answer-view.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    { path: '', redirectTo: '/feed', pathMatch: 'full' },
    { path: 'feed', component: _feed_feed_component__WEBPACK_IMPORTED_MODULE_4__["FeedComponent"] },
    { path: 'question', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_2__["QuestionsComponent"] },
    { path: 'answer', component: _answers_answers_component__WEBPACK_IMPORTED_MODULE_3__["AnswersComponent"] },
    { path: 'feed/answers/:id', component: _answer_view_answer_view_component__WEBPACK_IMPORTED_MODULE_5__["AnswerViewComponent"] }
];
var AppRoutesModule = /** @class */ (function () {
    function AppRoutesModule() {
    }
    AppRoutesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        })
    ], AppRoutesModule);
    return AppRoutesModule;
}());



/***/ }),

/***/ "./src/app/feed/feed-item/feed-item.component.html":
/*!*********************************************************!*\
  !*** ./src/app/feed/feed-item/feed-item.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\n  <div class=\"addQueProfileView\"><img src=\"assets/img/test.png\" alt=\"Profile Pic\">\n    <div><h3 class=\"quePostedUsrName\">{{ data.usrName }}</h3>\n      <p>{{ data.time }}</p></div>\n  </div>\n  <h1 class=\"queTitle\" (click)=\"openAnswerView()\">{{ data.title }}</h1>\n  <p>{{ data.desc }}</p>\n  <div class=\"bottomControll\"><i class=\"fa fa-heart\"></i><i class=\"fa fa-share\"></i><span>{{ data.likes }}</span></div>\n</li>\n"

/***/ }),

/***/ "./src/app/feed/feed-item/feed-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/feed/feed-item/feed-item.component.ts ***!
  \*******************************************************/
/*! exports provided: FeedItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedItemComponent", function() { return FeedItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedItemComponent = /** @class */ (function () {
    function FeedItemComponent(route) {
        this.route = route;
        this.data = {
            title: 'Who wrote the google search algorithm?',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quis hic expedita voluptate earumodit voluptas\n' +
                '    eveniet in est aperiam, natus architecto illo ad vitae, aliquam nostrum? Minima,eius quae. Lorem ipsum, dolor sit\n' +
                '    amet consectetur adipisicing elit. Possimus quis hic expedita voluptate earum odit voluptas eveniet in est aperiam,\n' +
                '    natus architecto illo ad vitae, aliquamnostrum? Minima, eius quae.',
            likes: 100,
            time: 'Asked 1 hr ago',
            usrName: 'UserName'
        };
    }
    FeedItemComponent.prototype.ngOnInit = function () {
    };
    FeedItemComponent.prototype.openAnswerView = function () {
        this.route.navigate(['feed', 'answers', '347878377474784374378']);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FeedItemComponent.prototype, "data", void 0);
    FeedItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed-item',
            template: __webpack_require__(/*! ./feed-item.component.html */ "./src/app/feed/feed-item/feed-item.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FeedItemComponent);
    return FeedItemComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"section__main__listView\" id=\"listView\">\r\n\r\n  <li (click)=\"openModel()\">\r\n    <div class=\"addQueProfileView\"><img src=\"assets/img/test.png\" alt=\"Profile Pic\">\r\n      <h3>UserName</h3></div>\r\n    <h1>What is your question?</h1>\r\n  </li>\r\n\r\n  <app-feed-item *ngFor=\"let temp of [1,2,3,4,5,6,7,8,9,0,1,3,4,5]\"\r\n                 [data]=\"data\"> </app-feed-item>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedComponent = /** @class */ (function () {
    function FeedComponent(model) {
        this.model = model;
        this.data = {
            title: 'Who wrote the google search algorithm?',
            desc: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus quis hic expedita voluptate earumodit voluptas\n' +
                '    eveniet in est aperiam, natus architecto illo ad vitae, aliquam nostrum? Minima,eius quae. Lorem ipsum, dolor sit\n' +
                '    amet consectetur adipisicing elit. Possimus quis hic expedita voluptate earum odit voluptas eveniet in est aperiam,\n' +
                '    natus architecto illo ad vitae, aliquamnostrum? Minima, eius quae.',
            likes: 100,
            time: 'Asked 1 hr ago',
            usrName: 'UserName'
        };
    }
    FeedComponent.prototype.ngOnInit = function () {
    };
    FeedComponent.prototype.openModel = function () {
        this.model.show();
    };
    FeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html")
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header_container\">\n  <header class=\"header container\">\n    <div class=\"header__logo\">\n      <a href=\"index.html\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 113.225 31.338\">\n          <defs>\n            <style>\n              .cls-1 {\n                fill: #0097d6;\n                fill-rule: evenodd;\n              }\n            </style>\n          </defs>\n          <g id=\"Group_1\" data-name=\"Group 1\" transform=\"translate(-43 -21)\">\n            <path id=\"Fill-1\" class=\"cls-1\"\n                  d=\"M16.631,24.9c-1.086-2.137-2.36-4.3-4.844-4.3a3.319,3.319,0,0,0-1.385.277l-.844-1.689a7.4,7.4,0,0,1,4.827-1.582,7.034,7.034,0,0,1,6.384,3.645,17.09,17.09,0,0,0,1.186-7.022c0-7.293-2.281-11.038-7.609-11.038-5.25,0-7.519,3.745-7.519,11.038,0,7.255,2.268,10.961,7.519,10.961a8.113,8.113,0,0,0,2.285-.294Zm1.3,2.545a13.957,13.957,0,0,1-3.586.479A13.817,13.817,0,0,1,.51,14.228a13.862,13.862,0,0,1,27.724,0,13.329,13.329,0,0,1-5.241,10.7c1,1.5,2.036,2.5,3.474,2.5a2.273,2.273,0,0,0,2.308-2.164h2.044c.119,1.266-.514,6.53-6.226,6.53-3.46,0-5.289-2.005-6.66-4.357Z\"\n                  transform=\"translate(42.49 20.541)\"></path>\n            <path id=\"Fill-2\" class=\"cls-1\"\n                  d=\"M55.176,25.546V16.168c0-1.068-.395-1.543-1.621-1.543H52.249V12.133h8.533V25.428c0,2.241,1.213,3.23,3.06,3.23a4.226,4.226,0,0,0,3.851-2.2V16.168c0-1.068-.4-1.543-1.622-1.543H64.687V12.133H73.3V26.059c0,1.387.514,2.019,2.1,2.019h.277V30.65l-7.7,1.226V29.226h-.159a8.082,8.082,0,0,1-6.581,3.046c-3.363,0-6.055-1.7-6.055-6.726\"\n                  transform=\"translate(20.042 15.476)\"></path>\n            <path id=\"Fill-3\" class=\"cls-1\"\n                  d=\"M105.419,29.385c3.034,0,4.186-2.639,4.247-7.953.059-5.2-1.213-7.715-4.247-7.715-2.651,0-4.313,2.518-4.313,7.715,0,5.315,1.635,7.953,4.313,7.953Zm0,2.492A10.306,10.306,0,0,1,94.985,21.432a10.109,10.109,0,0,1,10.434-10.209c5.843,0,10.525,4.154,10.525,10.209a10.173,10.173,0,0,1-10.525,10.446Z\"\n                  transform=\"translate(1.5 15.871)\"></path>\n            <path id=\"Fill-4\" class=\"cls-1\"\n                  d=\"M132.319,31.572V29.08h.831c2.058,0,2.255-.593,2.255-2.374V15.864c0-1.068-.554-1.543-1.82-1.543h-1.108V11.829h7.82l.4,4.076h.159a5.83,5.83,0,0,1,5.393-4.472,2.942,2.942,0,0,1,3.218,3.114c0,1.45-.7,2.994-2.65,2.994-1.755,0-2.1-1.188-3.548-1.188-1.292,0-2.3,1.227-2.3,3.033v7.321c0,1.78.436,2.374,2.454,2.374h1.147v2.493H132.319\"\n                  transform=\"translate(-14.699 15.78)\"></path>\n            <path id=\"Fill-5\" class=\"cls-1\"\n                  d=\"M172.1,28.58c2.493,0,3.521-2.361,3.521-4.733V20.68c-1.82,1.885-6.054,1.951-6.054,5.315A2.352,2.352,0,0,0,172.1,28.58Zm3.641-.014a6.5,6.5,0,0,1-6.094,3.311c-3.429,0-5.645-1.821-5.645-5.025,0-6.448,8.982-4.734,11.619-9.007v-.463c0-3.284-1.292-3.8-2.717-3.8-4,0-2.177,4.3-5.857,4.3a2.164,2.164,0,0,1-2.453-2.267c0-2.427,2.9-4.393,8.35-4.393,5.156,0,8.322,1.425,8.322,6.556v8.19c0,1.266.462,1.953,1.57,1.953a2.024,2.024,0,0,0,1.173-.343l.66,1.608a5.432,5.432,0,0,1-4.71,2.3c-2.373,0-3.864-1.108-4.062-2.915Z\"\n                  transform=\"translate(-28.446 15.871)\"></path>\n          </g>\n        </svg>\n      </a>\n    </div>\n    <nav class=\"header__nav\">\n      <ul class=\"header__nav__list\">\n        <li>\n          <a routerLinkActive=\"active\" class=\"ripple\" id=\"Home\" routerLink=\"/feed\">Home</a>\n        </li>\n        <li>\n          <a routerLinkActive=\"active\" class=\"ripple\" id=\"Question\" routerLink=\"/question\">Question</a>\n        </li>\n        <li>\n          <a routerLinkActive=\"active\" class=\"ripple\" id=\"Answer\" routerLink=\"/answer\">Answer</a>\n        </li>\n      </ul>\n    </nav>\n    <div class=\"header__search_box\">\n      <i class=\"fa fa-search\"></i>\n      <input type=\"text\" placeholder=\"Search Quora\">\n    </div>\n    <div class=\"header__profileView\">\n      <a>\n        <img src=\"assets/img/test.png\" alt=\"Profile Pic\"> </a>\n    </div>\n    <div class=\"header__que_btn\">\n      <a role=\"button\" class=\"ripple\" (click)=\"openModel()\">Add Question</a>\n    </div>\n  </header>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(model) {
        this.model = model;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openModel = function () {
        this.model.show();
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/model.service.ts":
/*!**********************************!*\
  !*** ./src/app/model.service.ts ***!
  \**********************************/
/*! exports provided: ModelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelService", function() { return ModelService; });
var ModelService = /** @class */ (function () {
    function ModelService() {
        this.isShow = false;
    }
    ModelService.prototype.init = function (backdrop, model) {
        this.model_container = model;
        this.backdrop = backdrop;
    };
    ModelService.prototype.show = function () {
        var _this = this;
        this.model_container.nativeElement.style.display = 'block';
        this.model_container.nativeElement.style.opacity = 1;
        this.model_container.nativeElement.classList.add('fadeIn');
        document.querySelector('body').style.overflow = 'hidden';
        setTimeout(function () {
            _this.backdrop.nativeElement.style.display = 'block';
            _this.backdrop.nativeElement.classList.add('fadeIn');
        }, 300);
    };
    ModelService.prototype.hide = function () {
        this.model_container.nativeElement.style.display = 'none';
        this.model_container.nativeElement.style.opacity = 0;
        this.backdrop.nativeElement.style.display = 'none';
        document.querySelector('body').style.overflow = 'auto';
    };
    return ModelService;
}());



/***/ }),

/***/ "./src/app/model/model.component.html":
/*!********************************************!*\
  !*** ./src/app/model/model.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"backdrop\" #backdrop (click)=\"hide()\"> </div>\n<div class=\"model_container\" #model_container>\n  <div class=\"model\">\n    <div class=\"model__exit\">\n      <span (click)=\"hide()\" >X</span>\n    </div>\n    <div class=\"model__inputbox\">\n      <form method=\"GET\">\n        <input type=\"text\" placeholder=\"Start your question with &quot;What&quot;, &quot;How&quot;, &quot;Why&quot;, etc.\">\n      </form>\n    </div>\n    <div class=\"model__bottom\">\n      <a class=\"model__bottom__cancel\" (click)=\"hide()\">Cancel</a>\n      <a class=\"model__bottom__add\">Add Question</a>\n    </div>\n  </div>\n</div>\n\n\n<!--var model = $('.model_container');-->\n<!--var backdrop = $('.backdrop');-->\n<!--var body = $('body');-->\n<!--function openModel(e) {-->\n<!--model.fadeIn(200);-->\n<!--backdrop.show();-->\n<!--body.css('overflow','hidden');-->\n<!--}-->\n<!--function closeModel(e) {-->\n<!--model.hide();-->\n<!--backdrop.fadeOut(500);-->\n<!--body.css('overflow','scroll');-->\n<!--}-->\n"

/***/ }),

/***/ "./src/app/model/model.component.ts":
/*!******************************************!*\
  !*** ./src/app/model/model.component.ts ***!
  \******************************************/
/*! exports provided: ModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelComponent", function() { return ModelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _model_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../model.service */ "./src/app/model.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModelComponent = /** @class */ (function () {
    function ModelComponent(modelServ) {
        this.modelServ = modelServ;
    }
    ModelComponent.prototype.ngOnInit = function () {
        this.modelServ.init(this.backdrop, this.model_container);
    };
    ModelComponent.prototype.hide = function () {
        this.modelServ.hide();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('backdrop'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModelComponent.prototype, "backdrop", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('model_container'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ModelComponent.prototype, "model_container", void 0);
    ModelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-model',
            template: __webpack_require__(/*! ./model.component.html */ "./src/app/model/model.component.html"),
        }),
        __metadata("design:paramtypes", [_model_service__WEBPACK_IMPORTED_MODULE_1__["ModelService"]])
    ], ModelComponent);
    return ModelComponent;
}());



/***/ }),

/***/ "./src/app/questions/question/question.component.html":
/*!************************************************************!*\
  !*** ./src/app/questions/question/question.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<li>\n  <div class=\"addQueProfileView\">\n    <div style=\"float: left;\"><p>Question added - </p></div>\n    <div><p>Machine Learning</p></div>\n    <div style=\"width: 44%\"></div>\n    <a href=\"#\">\n      <div style=\"float: right;\">\n        <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n             xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <g id=\"small_close\" class=\"icon_svg-stroke\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\"\n             stroke=\"#666666\" stroke-width=\"1.5\">\n            <path d=\"M12,6 L12,18\"\n                  transform=\"translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) \"></path>\n            <path d=\"M18,12 L6,12\"\n                  transform=\"translate(12.000000, 12.000000) rotate(45.000000) translate(-12.000000, -12.000000) \"></path>\n          </g>\n        </svg>\n      </div>\n    </a></div>\n  <h1 class=\"queTitle2\">How do neural networks have overwhelming accuracy and still generalize well on test sets?</h1>\n  <div class=\"addQueProfileView\">\n    <div style=\"float: left;\"><p>No answer yet - </p></div>\n    <div><p>Last followed 7m ago</p></div>\n  </div>\n  <div class=\"bottomControll\">\n    <div class=\"ans-btn\" style=\"float: left;\">\n      <div style=\"float: left;\"><a href=\"#\">\n        <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n             xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <g id=\"answer\" transform=\"translate(2.500000, 3.500000)\" stroke=\"none\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"pen\"\n               transform=\"translate(9.000000, 9.000000) rotate(-315.000000) translate(-9.000000, -9.000000) translate(7.000000, -1.000000)\">\n              <path\n                d=\"M2,8.8817842e-16 L2,8.8817842e-16 L2,8.8817842e-16 C3.1045695,6.85269983e-16 4,0.8954305 4,2 L4,16 L2.00256278,20 L0,16 L0,2 L0,2 C-1.35267774e-16,0.8954305 0.8954305,1.09108686e-15 2,8.8817842e-16 Z\"\n                id=\"pen_body\" class=\"icon_svg-stroke\" stroke=\"#666\" stroke-linecap=\"round\"\n                stroke-linejoin=\"round\"></path>\n              <polygon id=\"pen_tip\" class=\"icon_svg-fill_as_stroke\" fill=\"#666\"\n                       transform=\"translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) \"\n                       points=\"2 17.5 3.25 20 0.75 20\"></polygon>\n            </g>\n            <path d=\"M12,16 L17,16 L17,11 M7,1 L2,1 L2,6\" id=\"bg\" class=\"icon_svg-stroke\" stroke=\"#666\"\n                  stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n          </g>\n        </svg>\n      </a></div>\n      <span>Answer</span></div>\n    <p style=\"float: right;visibility: hidden;\">Answer</p>\n    <div class=\"ans-btn\">\n      <div style=\"float: left;\"><a href=\"#\">\n        <svg width=\"24px\" height=\"24px\" viewBox=\"0 0 24 24\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\"\n             xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <g id=\"pass\" stroke=\"none\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"pen\"\n               transform=\"translate(11.485281, 12.485281) rotate(-315.000000) translate(-11.485281, -12.485281) translate(9.485281, 2.485281)\">\n              <path\n                d=\"M0,7.51471863 L2.22044605e-16,1.99994543 C8.67738547e-17,0.895375929 0.8954305,-5.45711382e-05 2,-5.45711382e-05 C3.1045695,-5.45711382e-05 4,0.895375929 4,1.99994543 L4,7.51471863 M4,12.5147186 L4,16 L2.00256278,20 L0,16 L0,12.5147186\"\n                id=\"Rectangle-5\" class=\"icon_svg-stroke\" stroke=\"#666\" stroke-width=\"1.5\" stroke-linecap=\"square\"\n                stroke-linejoin=\"round\"></path>\n              <polygon id=\"pen_tip\" class=\"icon_svg-fill_as_stroke\" fill=\"#666\"\n                       transform=\"translate(2.000000, 18.750000) scale(1, -1) translate(-2.000000, -18.750000) \"\n                       points=\"2 17.5 3.25 20 0.75 20\"></polygon>\n            </g>\n            <path d=\"M4.63603897,5.63603897 L18.5,19.5\" id=\"Line\" class=\"icon_svg-stroke\" stroke=\"#666\"\n                  stroke-width=\"1.5\" stroke-linecap=\"round\"></path>\n          </g>\n        </svg>\n      </a></div>\n      <span>Pass</span></div> <!-- --> </div>\n</li>\n"

/***/ }),

/***/ "./src/app/questions/question/question.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/questions/question/question.component.ts ***!
  \**********************************************************/
/*! exports provided: QuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionComponent", function() { return QuestionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuestionComponent = /** @class */ (function () {
    function QuestionComponent() {
    }
    QuestionComponent.prototype.ngOnInit = function () {
    };
    QuestionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.component.html */ "./src/app/questions/question/question.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "./src/app/questions/questions.component.html":
/*!****************************************************!*\
  !*** ./src/app/questions/questions.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"section__main__listView2\" id=\"listView\">\r\n  <li>\r\n    <div>\r\n      <div style=\"width: 32px;float: left;\"><img src=\"assets/img/star1.png\" alt=\"star\"></div>\r\n      <div><a href=\"#\"><h2>Questions of you</h2></a></div>\r\n    </div>\r\n  </li>\r\n\r\n  <app-question></app-question>\r\n</ul>\r\n"

/***/ }),

/***/ "./src/app/questions/questions.component.ts":
/*!**************************************************!*\
  !*** ./src/app/questions/questions.component.ts ***!
  \**************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent() {
    }
    QuestionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/questions/questions.component.html")
        })
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! P:\Web\Angular\Quora-Clone\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map