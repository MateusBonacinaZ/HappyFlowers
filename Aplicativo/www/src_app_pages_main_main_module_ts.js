(self["webpackChunkHappyFlowers"] = self["webpackChunkHappyFlowers"] || []).push([["src_app_pages_main_main_module_ts"],{

/***/ 33907:
/*!***************************************************!*\
  !*** ./src/app/pages/main/main-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageRoutingModule": () => (/* binding */ MainPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.page */ 44746);




const routes = [
    {
        path: '',
        component: _main_page__WEBPACK_IMPORTED_MODULE_0__.MainPage
    }
];
let MainPageRoutingModule = class MainPageRoutingModule {
};
MainPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MainPageRoutingModule);



/***/ }),

/***/ 79582:
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPageModule": () => (/* binding */ MainPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _main_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-routing.module */ 33907);
/* harmony import */ var _main_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page */ 44746);







let MainPageModule = class MainPageModule {
};
MainPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _main_routing_module__WEBPACK_IMPORTED_MODULE_0__.MainPageRoutingModule
        ],
        declarations: [_main_page__WEBPACK_IMPORTED_MODULE_1__.MainPage]
    })
], MainPageModule);



/***/ }),

/***/ 44746:
/*!*****************************************!*\
  !*** ./src/app/pages/main/main.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MainPage": () => (/* binding */ MainPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./main.page.html */ 51375);
/* harmony import */ var _main_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.page.scss */ 18805);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let MainPage = class MainPage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
        this.http.get("https://happyflowers-api.herokuapp.com/find/infos").subscribe(data => {
            this.nomeSensor = data['nome_sensor'],
                this.nomeCientifico = data['nome_cientifico'],
                this.nomePopular = data['nome_popular'],
                this.tempoExposicao = data['tempo_exposicao'],
                this.valorCaptado = data['valor_captado'];
        }, (err) => {
            this.router.navigate(['/connection-error']);
        });
    }
};
MainPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
MainPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-main',
        template: _raw_loader_main_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_main_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], MainPage);



/***/ }),

/***/ 18805:
/*!*******************************************!*\
  !*** ./src/app/pages/main/main.page.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-item#itemLista {\n  --background: #FFFFFF;\n  --padding-start: 1px;\n  --padding-end: 1px;\n}\n\nion-label#slotEsquerda {\n  --padding-start: 1px;\n}\n\nion-label#slotDireita {\n  text-align: right;\n  --padding-end: 1px;\n}\n\na#nomeSensor {\n  text-decoration: none;\n  color: #000000;\n  font-weight: bold;\n}\n\np#creditos {\n  font-size: 10px;\n  color: #000000;\n}\n\nion-icon#iconeConfiguracao {\n  color: #000000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0kscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0FBQ0oiLCJmaWxlIjoibWFpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSNpdGVtTGlzdGF7XG4gICAgLS1iYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgIC0tcGFkZGluZy1zdGFydDogMXB4O1xuICAgIC0tcGFkZGluZy1lbmQ6IDFweDtcbn1cblxuaW9uLWxhYmVsI3Nsb3RFc3F1ZXJkYXtcbiAgICAtLXBhZGRpbmctc3RhcnQ6IDFweDtcbn1cblxuaW9uLWxhYmVsI3Nsb3REaXJlaXRhe1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIC0tcGFkZGluZy1lbmQ6IDFweDtcbn1cblxuYSNub21lU2Vuc29ye1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxucCNjcmVkaXRvc3tcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6ICMwMDAwMDA7XG59XG5cbmlvbi1pY29uI2ljb25lQ29uZmlndXJhY2Fve1xuICAgIGNvbG9yOiAjMDAwMDAwO1xufSJdfQ== */");

/***/ }),

/***/ 51375:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.page.html ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Página inicial</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content> \n  <ion-list>  \n    <ion-item id=\"itemLista\">\n      <ion-label id=slotEsquerda slot=\"start\">\n        <p><a id=\"nomeSensor\" href=\"/details\">{{nomeSensor}}</a></p>\n        <p>Cultura: {{nomePopular}} ({{nomeCientifico}})</p>\n        <p> {{tempoExposicao}} </p>\n      </ion-label>\n\n      <ion-label id=slotDireita slot=\"end\">\n        <p id=\"valorSensor\" style=\"color:#87FF4F\" *ngIf=\"(valorCaptado >= 14825) && (valorCaptado <= 20000)\">{{valorCaptado}}</p>\n        <p id=\"valorSensor\" style=\"color:#FF0000\" *ngIf=\"(valorCaptado < 14825) || (valorCaptado > 20000)\">{{valorCaptado}}</p>        \n        <ion-button href=\"/config\" fill=\"clear\"><ion-icon id=\"iconeConfiguracao\" name=\"cog-outline\"></ion-icon> </ion-button>\n      </ion-label>\n    </ion-item>\n\n  </ion-list>\n</ion-content>\n\n\n<ion-footer>\n  <ion-toolbar>\n    <p id=\"creditos\">\n      HappyFlowers App 1.0 por:<br>\n      Karin Angela Nogueira;<br>\n      Mateus Bonacina Zanguettin<br>\n      Rafael José Zanette;<br>\n      Ricardo Silva dos Santos.\n    </p>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_main_main_module_ts.js.map