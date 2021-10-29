(self["webpackChunkhappyflowers_app"] = self["webpackChunkhappyflowers_app"] || []).push([["src_app_pages_config_config_module_ts"],{

/***/ 84675:
/*!*******************************************************!*\
  !*** ./src/app/pages/config/config-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPageRoutingModule": () => (/* binding */ ConfigPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.page */ 85174);




const routes = [
    {
        path: '',
        component: _config_page__WEBPACK_IMPORTED_MODULE_0__.ConfigPage
    }
];
let ConfigPageRoutingModule = class ConfigPageRoutingModule {
};
ConfigPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfigPageRoutingModule);



/***/ }),

/***/ 87564:
/*!***********************************************!*\
  !*** ./src/app/pages/config/config.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPageModule": () => (/* binding */ ConfigPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _config_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-routing.module */ 84675);
/* harmony import */ var _config_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.page */ 85174);







let ConfigPageModule = class ConfigPageModule {
};
ConfigPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _config_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfigPageRoutingModule
        ],
        declarations: [_config_page__WEBPACK_IMPORTED_MODULE_1__.ConfigPage]
    })
], ConfigPageModule);



/***/ }),

/***/ 85174:
/*!*********************************************!*\
  !*** ./src/app/pages/config/config.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigPage": () => (/* binding */ ConfigPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_config_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./config.page.html */ 37887);
/* harmony import */ var _config_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config.page.scss */ 40890);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);






let ConfigPage = class ConfigPage {
    constructor(http, router) {
        this.http = http;
        this.router = router;
    }
    ngOnInit() {
        this.http.get("https://happyflowers-api.herokuapp.com/find/infos").subscribe(data => {
            this.cultura = data['nome_popular'];
            this.nomeSensor = data['nome_sensor'];
        });
    }
    insert_config() {
        this.http.get("https://happyflowers-api.herokuapp.com/insert/config/" + this.nomeSensor + "/" + this.cultura).subscribe(data => {
            console.log(data);
        }, (err) => {
            this.router.navigate(['/connection-error']);
        });
    }
};
ConfigPage.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ConfigPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-config',
        template: _raw_loader_config_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_config_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ConfigPage);



/***/ }),

/***/ 40890:
/*!***********************************************!*\
  !*** ./src/app/pages/config/config.page.scss ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-input#formularioNome {\n  background-color: #FFFFFF;\n}\n\nion-select#selecionarCultura {\n  background-color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0kseUJBQUE7QUFDSiIsImZpbGUiOiJjb25maWcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWlucHV0I2Zvcm11bGFyaW9Ob21le1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG59XG5cbmlvbi1zZWxlY3Qjc2VsZWNpb25hckN1bHR1cmF7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbn0iXX0= */");

/***/ }),

/***/ 37887:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/config/config.page.html ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-header>  \n  <ion-toolbar>\n    <ion-title>Configuração</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- CAMPO DE TEXTO DO NOME DO SENSOR -->\n  <p>\n    Digite o nome do sensor:\n  </p>\n  <ion-input id='formularioNome' [(ngModel)]='nomeSensor'></ion-input>\n\n  <!-- BOTÃO DE SELEÇÃO DA CULTURA -->\n  <p>\n    Selecione a cultura que está cultivando:\n  </p>\n  <ion-select id=\"selecionarCultura\" placeholder=\"Selecione uma cultura\"[(ngModel)]= \"cultura\">\n    <ion-select-option value=\"Abacaxi-ornamental\">Abacaxi-ornamental</ion-select-option>\n    <ion-select-option value=\"Bastão-do-imperador\">Bastão-do-imperador</ion-select-option>\n    <ion-select-option value=\"Estrelítzia\">Estrelítzia</ion-select-option>\n    <ion-select-option value=\"Musa\">Musa</ion-select-option>\n    <ion-select-option value=\"Papiro\">Papiro</ion-select-option>\n    <ion-select-option value=\"Angélica\">Angélica</ion-select-option>\n    <ion-select-option value=\"Sempre-vivas\">Sempre-vivas</ion-select-option>\n    <ion-select-option value=\"Tango\">Tango</ion-select-option>\n  </ion-select>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar>\n    <ion-button href=\"/main\" slot=\"start\" (click)=\"insert_config()\">Confirmar</ion-button>\n    <ion-button href=\"/main\" slot=\"end\">Voltar</ion-button>\n  </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_pages_config_config_module_ts.js.map