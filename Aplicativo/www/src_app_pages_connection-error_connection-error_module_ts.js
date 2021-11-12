(self["webpackChunkHappyFlowers"] = self["webpackChunkHappyFlowers"] || []).push([["src_app_pages_connection-error_connection-error_module_ts"],{

/***/ 90686:
/*!***************************************************************************!*\
  !*** ./src/app/pages/connection-error/connection-error-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionErrorPageRoutingModule": () => (/* binding */ ConnectionErrorPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _connection_error_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-error.page */ 89421);




const routes = [
    {
        path: '',
        component: _connection_error_page__WEBPACK_IMPORTED_MODULE_0__.ConnectionErrorPage
    }
];
let ConnectionErrorPageRoutingModule = class ConnectionErrorPageRoutingModule {
};
ConnectionErrorPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConnectionErrorPageRoutingModule);



/***/ }),

/***/ 93664:
/*!*******************************************************************!*\
  !*** ./src/app/pages/connection-error/connection-error.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionErrorPageModule": () => (/* binding */ ConnectionErrorPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _connection_error_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-error-routing.module */ 90686);
/* harmony import */ var _connection_error_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection-error.page */ 89421);







let ConnectionErrorPageModule = class ConnectionErrorPageModule {
};
ConnectionErrorPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _connection_error_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConnectionErrorPageRoutingModule
        ],
        declarations: [_connection_error_page__WEBPACK_IMPORTED_MODULE_1__.ConnectionErrorPage]
    })
], ConnectionErrorPageModule);



/***/ }),

/***/ 89421:
/*!*****************************************************************!*\
  !*** ./src/app/pages/connection-error/connection-error.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionErrorPage": () => (/* binding */ ConnectionErrorPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_connection_error_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./connection-error.page.html */ 75024);
/* harmony import */ var _connection_error_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection-error.page.scss */ 98883);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ConnectionErrorPage = class ConnectionErrorPage {
    constructor() { }
    ngOnInit() {
    }
};
ConnectionErrorPage.ctorParameters = () => [];
ConnectionErrorPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-connection-error',
        template: _raw_loader_connection_error_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_connection_error_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConnectionErrorPage);



/***/ }),

/***/ 98883:
/*!*******************************************************************!*\
  !*** ./src/app/pages/connection-error/connection-error.page.scss ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("div.infoCenter {\n  text-align: center;\n}\n\nimg#imgErroConexao {\n  width: 10%;\n  height: 10%;\n}\n\nbutton#bTenteNovamente {\n  padding: 10px;\n  border-radius: 4px;\n}\n\nion-footer {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24tZXJyb3IucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0oiLCJmaWxlIjoiY29ubmVjdGlvbi1lcnJvci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYuaW5mb0NlbnRlcntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmltZyNpbWdFcnJvQ29uZXhhb3tcbiAgICB3aWR0aDogMTAlO1xuICAgIGhlaWdodDogMTAlO1xufVxuXG5idXR0b24jYlRlbnRlTm92YW1lbnRle1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG5pb24tZm9vdGVye1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ 75024:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/connection-error/connection-error.page.html ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Erro de conexão</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"infoCenter\">\n    <img id=\"imgErroConexao\" src=\"../../../assets/imgs/connection-error.png\">\n    <p>\n      Para usar nosso aplicativo você precisa de conexão com a internet!\n    </p>\n  </div>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n      <ion-button href=\"/main\">Tente novamente</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_connection-error_connection-error_module_ts.js.map