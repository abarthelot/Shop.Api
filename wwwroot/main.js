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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/users/register/register.component */ "./src/app/components/users/register/register.component.ts");
/* harmony import */ var _services_before_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/before-login.service */ "./src/app/services/before-login.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_items_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/items/favourites/favourites.component */ "./src/app/components/items/favourites/favourites.component.ts");
/* harmony import */ var _services_after_login_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/after-login.service */ "./src/app/services/after-login.service.ts");
/* harmony import */ var _components_users_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/users/user-details/user-details.component */ "./src/app/components/users/user-details/user-details.component.ts");
/* harmony import */ var _components_items_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/items/item-details/item-details.component */ "./src/app/components/items/item-details/item-details.component.ts");
/* harmony import */ var _components_users_perchase_history_perchase_history_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/users/perchase-history/perchase-history.component */ "./src/app/components/users/perchase-history/perchase-history.component.ts");
/* harmony import */ var _components_Items_item_edit_component_item_edit_component_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/Items/item-edit-component/item-edit-component.component */ "./src/app/components/Items/item-edit-component/item-edit-component.component.ts");
/* harmony import */ var _services_only_owner_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/only-owner-service.service */ "./src/app/services/only-owner-service.service.ts");
/* harmony import */ var _components_users_messages_messages_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/users/messages/messages.component */ "./src/app/components/users/messages/messages.component.ts");
/* harmony import */ var _components_users_messages_thread_messages_thread_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/users/messages-thread/messages-thread.component */ "./src/app/components/users/messages-thread/messages-thread.component.ts");
/* harmony import */ var _components_cart_shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/cart/shoping-cart/shoping-cart.component */ "./src/app/components/cart/shoping-cart/shoping-cart.component.ts");
/* harmony import */ var _components_Items_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/Items/add-item/add-item.component */ "./src/app/components/Items/add-item/add-item.component.ts");
/* harmony import */ var _components_Items_item_image_item_image_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Items/item-image/item-image.component */ "./src/app/components/Items/item-image/item-image.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var appRoutes = [
    {
        path: "register",
        component: _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"],
        canActivate: [_services_before_login_service__WEBPACK_IMPORTED_MODULE_4__["BeforeLoginService"]]
    },
    {
        path: "home",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        canActivate: []
    },
    {
        path: "",
        redirectTo: '/home',
        pathMatch: 'full',
        canActivate: []
    },
    {
        path: "favourites",
        component: _components_items_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_6__["FavouritesComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_7__["AfterLoginService"]]
    },
    {
        path: "user-details",
        component: _components_users_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_8__["UserDetailsComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_7__["AfterLoginService"]]
    },
    {
        path: "item-details/:id",
        component: _components_items_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_9__["ItemDetailsComponent"],
        canActivate: []
    },
    {
        path: "item-edit/:id",
        component: _components_Items_item_edit_component_item_edit_component_component__WEBPACK_IMPORTED_MODULE_11__["ItemEditComponentComponent"],
        canActivate: [_services_only_owner_service_service__WEBPACK_IMPORTED_MODULE_12__["OnlyOwnerServiceService"]]
    },
    {
        path: "perchase-history",
        component: _components_users_perchase_history_perchase_history_component__WEBPACK_IMPORTED_MODULE_10__["PerchaseHistoryComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_7__["AfterLoginService"]]
    },
    {
        path: "messages",
        component: _components_users_messages_messages_component__WEBPACK_IMPORTED_MODULE_13__["MessagesComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_7__["AfterLoginService"]]
    },
    {
        path: "msg_thread/:rId/:iId",
        component: _components_users_messages_thread_messages_thread_component__WEBPACK_IMPORTED_MODULE_14__["MessagesThreadComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_7__["AfterLoginService"]]
    },
    {
        path: "add-item",
        component: _components_Items_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_16__["AddItemComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_7__["AfterLoginService"]]
    },
    {
        path: "cart",
        component: _components_cart_shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_15__["ShopingCartComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_7__["AfterLoginService"]]
    },
    {
        path: "item-image-add/:id",
        component: _components_Items_item_image_item_image_component__WEBPACK_IMPORTED_MODULE_17__["ItemImageComponent"],
        canActivate: [_services_only_owner_service_service__WEBPACK_IMPORTED_MODULE_12__["OnlyOwnerServiceService"]]
    },
    {
        path: "check-out",
        component: _components_cart_shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_15__["ShopingCartComponent"],
        canActivate: [_services_after_login_service__WEBPACK_IMPORTED_MODULE_7__["AfterLoginService"]]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            declarations: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<header>\n  <app-nav></app-nav>\n</header>\n<ng-snotify></ng-snotify>\n  <div class=\"container marg-10\" style=\"height: 100%; background-color: white; padding-top: 30px;\">\n    <router-outlet></router-outlet>\n  </div>\n\n\n\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(_auth, cart) {
        this._auth = _auth;
        this.cart = cart;
        this.title = 'app';
        this.isCollapsed = false;
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
    }
    AppComponent.prototype.ngOnInit = function () {
        var token = localStorage.getItem('token');
        var user = JSON.parse(localStorage.getItem('user'));
        if (token) {
            this._auth.decodedToken = this.jwtHelper.decodeToken(token);
            this._auth.user = user;
            this.cart.getCartCount();
        }
        if (user) {
            this._auth.user = user;
            this._auth.changeUserImage(user.photoUrl);
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
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
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/nav/nav.component */ "./src/app/components/nav/nav.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_base_info_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/base-info.service */ "./src/app/services/base-info.service.ts");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/users/register/register.component */ "./src/app/components/users/register/register.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _services_alertify_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/alertify.service */ "./src/app/services/alertify.service.ts");
/* harmony import */ var _components_users_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/users/user-details/user-details.component */ "./src/app/components/users/user-details/user-details.component.ts");
/* harmony import */ var _components_users_perchase_history_perchase_history_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/users/perchase-history/perchase-history.component */ "./src/app/components/users/perchase-history/perchase-history.component.ts");
/* harmony import */ var _components_items_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/items/favourites/favourites.component */ "./src/app/components/items/favourites/favourites.component.ts");
/* harmony import */ var _components_users_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/users/password/request-reset/request-reset.component */ "./src/app/components/users/password/request-reset/request-reset.component.ts");
/* harmony import */ var _components_users_password_request_response_request_response_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/users/password/request-response/request-response.component */ "./src/app/components/users/password/request-response/request-response.component.ts");
/* harmony import */ var _components_users_user_list_component_user_list_component_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/users/user-list-component/user-list-component.component */ "./src/app/components/users/user-list-component/user-list-component.component.ts");
/* harmony import */ var _components_items_item_card_component_item_card_component_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/items/item-card-component/item-card-component.component */ "./src/app/components/items/item-card-component/item-card-component.component.ts");
/* harmony import */ var _components_items_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/items/item-details/item-details.component */ "./src/app/components/items/item-details/item-details.component.ts");
/* harmony import */ var ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ngx-bootstrap/tabs */ "./node_modules/ngx-bootstrap/tabs/index.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _components_Items_item_edit_component_item_edit_component_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/Items/item-edit-component/item-edit-component.component */ "./src/app/components/Items/item-edit-component/item-edit-component.component.ts");
/* harmony import */ var _components_Items_item_image_editor_component_item_image_editor_component_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/Items/item-image-editor-component/item-image-editor-component.component */ "./src/app/components/Items/item-image-editor-component/item-image-editor-component.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var time_ago_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! time-ago-pipe */ "./node_modules/time-ago-pipe/esm5/time-ago-pipe.js");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/index.js");
/* harmony import */ var _components_users_messages_messages_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/users/messages/messages.component */ "./src/app/components/users/messages/messages.component.ts");
/* harmony import */ var _components_users_messages_thread_messages_thread_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/users/messages-thread/messages-thread.component */ "./src/app/components/users/messages-thread/messages-thread.component.ts");
/* harmony import */ var _components_cart_shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/cart/shoping-cart/shoping-cart.component */ "./src/app/components/cart/shoping-cart/shoping-cart.component.ts");
/* harmony import */ var _components_Items_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/Items/add-item/add-item.component */ "./src/app/components/Items/add-item/add-item.component.ts");
/* harmony import */ var _components_cart_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/cart/check-out/check-out.component */ "./src/app/components/cart/check-out/check-out.component.ts");
/* harmony import */ var _components_Items_item_image_item_image_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/Items/item-image/item-image.component */ "./src/app/components/Items/item-image/item-image.component.ts");
/* harmony import */ var _components_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/cart/cart-item/cart-item.component */ "./src/app/components/cart/cart-item/cart-item.component.ts");
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
                _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_12__["HomeComponent"],
                _components_users_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"],
                _components_users_user_details_user_details_component__WEBPACK_IMPORTED_MODULE_17__["UserDetailsComponent"],
                _components_users_perchase_history_perchase_history_component__WEBPACK_IMPORTED_MODULE_18__["PerchaseHistoryComponent"],
                _components_items_favourites_favourites_component__WEBPACK_IMPORTED_MODULE_19__["FavouritesComponent"],
                _components_items_item_details_item_details_component__WEBPACK_IMPORTED_MODULE_24__["ItemDetailsComponent"],
                _components_users_password_request_reset_request_reset_component__WEBPACK_IMPORTED_MODULE_20__["RequestResetComponent"],
                _components_users_password_request_response_request_response_component__WEBPACK_IMPORTED_MODULE_21__["RequestResponseComponent"],
                _components_users_user_list_component_user_list_component_component__WEBPACK_IMPORTED_MODULE_22__["UserListComponentComponent"],
                _components_items_item_card_component_item_card_component_component__WEBPACK_IMPORTED_MODULE_23__["ItemCardComponentComponent"],
                _components_Items_item_edit_component_item_edit_component_component__WEBPACK_IMPORTED_MODULE_27__["ItemEditComponentComponent"],
                _components_Items_item_image_editor_component_item_image_editor_component_component__WEBPACK_IMPORTED_MODULE_28__["ItemImageEditorComponentComponent"],
                time_ago_pipe__WEBPACK_IMPORTED_MODULE_30__["TimeAgoPipe"],
                _components_users_messages_messages_component__WEBPACK_IMPORTED_MODULE_33__["MessagesComponent"],
                _components_users_messages_thread_messages_thread_component__WEBPACK_IMPORTED_MODULE_34__["MessagesThreadComponent"],
                _components_cart_shoping_cart_shoping_cart_component__WEBPACK_IMPORTED_MODULE_35__["ShopingCartComponent"],
                _components_Items_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_36__["AddItemComponent"],
                _components_cart_check_out_check_out_component__WEBPACK_IMPORTED_MODULE_37__["CheckOutComponent"],
                _components_Items_item_image_item_image_component__WEBPACK_IMPORTED_MODULE_38__["ItemImageComponent"],
                _components_cart_cart_item_cart_item_component__WEBPACK_IMPORTED_MODULE_39__["CartItemComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ng_snotify__WEBPACK_IMPORTED_MODULE_15__["SnotifyModule"],
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_2__["BsDropdownModule"].forRoot(),
                ngx_bootstrap_tabs__WEBPACK_IMPORTED_MODULE_25__["TabsModule"].forRoot(),
                ngx_gallery__WEBPACK_IMPORTED_MODULE_26__["NgxGalleryModule"],
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_29__["FileUploadModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_31__["PaginationModule"].forRoot(),
                ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_32__["CollapseModule"].forRoot()
            ],
            providers: [
                _services_base_info_service__WEBPACK_IMPORTED_MODULE_9__["BaseInfoService"],
                _services_server_calls_service__WEBPACK_IMPORTED_MODULE_10__["ServerCallsService"],
                { provide: 'SnotifyToastConfig', useValue: ng_snotify__WEBPACK_IMPORTED_MODULE_15__["ToastDefaults"] },
                ng_snotify__WEBPACK_IMPORTED_MODULE_15__["SnotifyService"],
                _services_alertify_service__WEBPACK_IMPORTED_MODULE_16__["AlertifyService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/Items/add-item/add-item.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/Items/add-item/add-item.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/Items/add-item/add-item.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/Items/add-item/add-item.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h1>Add new item for sale</h1>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\" style=\"width: 50%;\"></th>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Title</td>\n          <td>\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Enter Address Here\" [(ngModel)]=\"item.title\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>Description</td>\n          <td>\n            <mat-form-field class=\"full-width\">\n              <textarea matInput maxlength=\"256\" placeholder=\"Enter Description Here\" [(ngModel)]=\"item.description\"></textarea>\n              <mat-hint align=\"end\">{{item?.description?.length}} / 256</mat-hint>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>Country</td>\n          <td>\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Sri Lanka\" type=\"text\" [(ngModel)]=\"item.shipingCountry\" readonly value=\"Sri Lanka\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>Postal Code</td>\n          <td>\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Postal Code\" type=\"text\" [(ngModel)]=\"item.postalCode\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>Unit Price</td>\n          <td>\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Unit Price\" type=\"number\" [(ngModel)]=\"item.unitPrice\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>Quantity</td>\n          <td>\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Quantity\" type=\"number\" [(ngModel)]=\"item.quantity\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>Other url</td>\n          <td>\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Other url\" type=\"text\" [(ngModel)]=\"item.otherUrl\">\n            </mat-form-field>\n          </td>\n        </tr>\n      </tbody>\n    </table>\n    <a class=\"btn btn-primary pull-right\" (click)=\"onUpload()\">Next</a>\n  </div>\n  <div class=\"\">\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/Items/add-item/add-item.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/Items/add-item/add-item.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_base_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/base-info.service */ "./src/app/services/base-info.service.ts");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(baseInfo, serverCall, snoty, _auth) {
        this.baseInfo = baseInfo;
        this.serverCall = serverCall;
        this.snoty = snoty;
        this._auth = _auth;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({});
        this.baseUrl = this.baseInfo.serverUrl();
        this.item = {
            title: null,
            description: null,
            shipingCountry: null,
            postalCode: null,
            unitPrice: null,
            quantity: null,
            otherUrl: null,
            file: File = null,
            fileName: null,
        };
    }
    AddItemComponent.prototype.ngOnInit = function () {
    };
    AddItemComponent.prototype.onFileSelected = function (event) {
        console.log(event);
        this.item.file = event.target.files[0];
        this.item.fileName = this.item.file.name;
    };
    AddItemComponent.prototype.onUpload = function () {
        var _this = this;
        console.log(this.item);
        this.item.quantity = parseInt(this.item.quantity);
        this.item.file = JSON.stringify(this.item.file);
        this.serverCall.addItem(this.item).subscribe(function (data) { return _this.afterSave(data); });
    };
    AddItemComponent.prototype.afterSave = function (data) {
        console.log(data);
        document.location.href = this.baseInfo.baseUrl() + "item-image-add/" + data.id;
    };
    AddItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/components/Items/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.css */ "./src/app/components/Items/add-item/add-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_base_info_service__WEBPACK_IMPORTED_MODULE_1__["BaseInfoService"], _services_server_calls_service__WEBPACK_IMPORTED_MODULE_2__["ServerCallsService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/components/Items/item-edit-component/item-edit-component.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/Items/item-edit-component/item-edit-component.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-panel {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n  }\r\n\r\n  .left-panel{\r\n      padding: 10px;\r\n  }\r\n\r\n  .nav-tabs > li.open, .member-tabset > .nav-tabs > li:hover {\r\n    border-bottom: 4px solid #fbcdcf;\r\n  }\r\n\r\n  .member-tabset > .nav-tabs > li.open > a, .member-tabset > .nav-tabs > li:hover > a {\r\n    border: 0;\r\n    background: none !important;\r\n    color: #333333;\r\n  }\r\n\r\n  .member-tabset > .nav-tabs > li.open > a > i, .member-tabset > .nav-tabs > li:hover > a > i {\r\n    color: #a6a6a6;\r\n  }\r\n\r\n  .member-tabset > .nav-tabs > li.open .dropdown-menu, .member-tabset > .nav-tabs > li:hover .dropdown-menu {\r\n    margin-top: 0px;\r\n  }\r\n\r\n  .member-tabset > .nav-tabs > li.active {\r\n    border-bottom: 4px solid #E95420;\r\n    position: relative;\r\n  }\r\n\r\n  .member-tabset > .nav-tabs > li.active > a {\r\n    border: 0 !important;\r\n    color: #333333;\r\n  }\r\n\r\n  .member-tabset > .nav-tabs > li.active > a > i {\r\n    color: #404040;\r\n  }\r\n\r\n  .member-tabset > .tab-content {\r\n    margin-top: -3px;\r\n    background-color: #fff;\r\n    border: 0;\r\n    border-top: 1px solid #eee;\r\n    padding: 15px 0;\r\n  }\r\n\r\n  .item-main-image {\r\n      max-width: 100%;\r\n  }\r\n\r\n  tab{\r\n    padding: 10px;\r\n  }\r\n\r\n  .tab-panel[_ngcontent-c2] {\r\n    /* border: 1px solid #ddd; */\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n    min-height: 100%;\r\n}\r\n\r\n  .full-width {\r\n    width: 100%;\r\n    height: 50% !important;\r\n    max-height: 50% !important;\r\n  }"

/***/ }),

/***/ "./src/app/components/Items/item-edit-component/item-edit-component.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/Items/item-edit-component/item-edit-component.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    \n</div>\n<div class=\"row\">\n\n    <div class=\"col-sm-4\">\n      <div class=\"panel panel-default left-panel\">\n        <div class=\"panel-header\">\n          <mat-form-field class=\"full-width\">\n              <h2><input matInput placeholder=\"\" [(ngModel)]=\"item.title\" maxlength=\"50\"></h2>\n          </mat-form-field>\n        </div>\n        <img class=\"item-main-image thumbnail\" src=\"{{item?.imageUrl}}\" alt=\"{{item?.title}}\">\n        <div class=\"panel-body\">\n          <div>\n            <strong>Price:</strong>\n            <p>\n              <mat-form-field class=\"full-width\">\n                <input matInput placeholder=\"USD$\" [(ngModel)]=\"item.unitPrice\" type=\"number\" min=\"0\">\n              </mat-form-field>\n            </p>\n          </div>\n          <div>\n            <strong>Shiping Address:</strong>\n              <p>\n                <mat-form-field class=\"full-width\">\n                  <textarea matInput placeholder=\"\" [(ngModel)]=\"item.shipingAddress\"></textarea>\n                </mat-form-field>\n              </p>\n              <p>\n                  <mat-form-field class=\"full-width\">\n                    <input matInput placeholder=\"\" [(ngModel)]=\"item.shipingCountry\">\n                  </mat-form-field>\n                </p>  \n          </div>\n          <div class=\"row\">\n            <div class=\"col-lg-6\">\n                  <div>\n                    <strong>On Sale Since:</strong>\n                    <p>{{item?.createdDate | date }}</p>\n                  </div>\n            </div>\n            <div class=\"col-lg-6\">\n                <div>\n                    <div class=\"row\">\n                        <strong>Type:</strong>\n                    </div>\n                    <div class=\"row\">\n                        <input style=\"margin: 3px;\" class=\"w3-radio\" type=\"radio\" name=\"food\" [(ngModel)]=\"item.isService\" [value]=true><label (click)=\"item.isService = true\" for=\"r1\">Service</label>\n                        <input style=\"margin: 3px;\" class=\"w3-radio\" type=\"radio\" name=\"food\" [(ngModel)]=\"item.isService\" [value]=false><label (click)=\"item.isService = false\" for=\"r1\">Tangible </label>\n                    </div>\n                </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\">\n          <tab heading=\"Edit Description\">\n            <h4>Description</h4>\n            <mat-form-field class=\"full-width\">\n              <textarea matInput maxlength=\"256\" placeholder=\"\" [(ngModel)]=\"item.description\"></textarea>\n              <mat-hint align=\"end\">{{item?.description.length}} / 256</mat-hint>\n            </mat-form-field>\n          </tab>\n          <tab heading=\"Edit images\">\n            <app-item-image-editor-component [images]=\"item?.photo\" [itemId]=\"item?.id\" (getItemImageChange)=\"updateMainimage($event)\"></app-item-image-editor-component>         \n          </tab>\n        </tabset>\n        <div class=\"panel-footer\">\n            <button class=\"btn btn-primary\" style=\"margin-left: 10px !important;\" (click)=\"save()\"><i class=\"fas fa-save\"></i> Save</button>\n        </div>\n      </div>\n\n    </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/components/Items/item-edit-component/item-edit-component.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/Items/item-edit-component/item-edit-component.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ItemEditComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemEditComponentComponent", function() { return ItemEditComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemEditComponentComponent = /** @class */ (function () {
    function ItemEditComponentComponent(_auth, serverCalls, snoty, route) {
        this._auth = _auth;
        this.serverCalls = serverCalls;
        this.snoty = snoty;
        this.route = route;
        this.postItem = {
            id: null,
            title: null,
            isService: null,
            description: null,
            shipingAddress: null,
            shipingCountry: null,
            createdDate: null,
            quantity: null,
            unitPrice: null,
            imageUrl: null,
            otherUrl: null,
            userId: null,
            photo: null
        };
    }
    ItemEditComponentComponent.prototype.ngOnInit = function () {
        console.log(this._auth.getId());
        this.loadItemDetails();
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxGalleryAnimation"].Slide,
                preview: true
            }
        ];
    };
    ItemEditComponentComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var i = 0; i < this.item.photo.length; i++) {
            imageUrls.push({
                small: this.item.photo[i].url,
                medium: this.item.photo[i].url,
                big: this.item.photo[i].url,
            });
        }
        return imageUrls;
    };
    ItemEditComponentComponent.prototype.loadItemDetails = function () {
        var _this = this;
        this.serverCalls.getItemDetails(+this.route.snapshot.params['id']).subscribe(function (data) { return _this.SuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
    };
    ItemEditComponentComponent.prototype.SuccessHandel = function (data) {
        console.clear();
        console.log(data);
        this.item = data;
        this.galleryImages = this.getImages();
    };
    ItemEditComponentComponent.prototype.handleErrors = function (error) {
        console.log(error);
        this.snoty.error("Failed to load, Please try again later.", "Error");
    };
    ItemEditComponentComponent.prototype.save = function () {
        var _this = this;
        var fd = new FormData();
        this.postItem.id = this.item['id'],
            this.postItem.title = this.item['title'],
            this.postItem.isService = this.item['isService'],
            this.postItem.description = this.item['description'],
            this.postItem.shipingAddress = this.item['shipingAddress'],
            this.postItem.shipingCountry = this.item['shipingCountry'],
            this.postItem.createdDate = this.item['createdDate'],
            this.postItem.quantity = this.item['quantity'],
            this.postItem.unitPrice = this.item['unitPrice'],
            this.postItem.imageUrl = this.item['imageUrl'],
            this.postItem.otherUrl = this.item['otherUrl'],
            this.postItem.userId = this.item['userId'],
            this.postItem.photo = this.item['photo'];
        this.serverCalls.updateItem(this.postItem, this.item.id).subscribe(function (data) { return _this.saveSuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
    };
    ItemEditComponentComponent.prototype.updateMainimage = function (url) {
        this.item.imageUrl = url;
    };
    ItemEditComponentComponent.prototype.saveSuccessHandel = function (data) {
        this.snoty.success("Save successfully.", "Success");
    };
    ItemEditComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-edit-component',
            template: __webpack_require__(/*! ./item-edit-component.component.html */ "./src/app/components/Items/item-edit-component/item-edit-component.component.html"),
            styles: [__webpack_require__(/*! ./item-edit-component.component.css */ "./src/app/components/Items/item-edit-component/item-edit-component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_server_calls_service__WEBPACK_IMPORTED_MODULE_2__["ServerCallsService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ItemEditComponentComponent);
    return ItemEditComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/Items/item-image-editor-component/item-image-editor-component.component.css":
/*!********************************************************************************************************!*\
  !*** ./src/app/components/Items/item-image-editor-component/item-image-editor-component.component.css ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "img.thumbnail {\r\n    height: 100px;\r\n    width: 100%;\r\n    margin-bottom: 2px;\r\n}\r\n\r\n.image{\r\n    padding: 0px;\r\n    margin-left: 10px;\r\n}\r\n\r\n.my-drop-zone { \r\n    border: dotted 3px lightgray; \r\n    margin-bottom: 2rem !important;\r\n    padding-top: 2rem !important;\r\n    padding-bottom: 2rem !important;\r\n    padding-left: 0rem !important;\r\n    padding-right: 0rem !important;\r\n}\r\n\r\n.nv-file-over { border: dotted 3px red; }\r\n\r\n/* Default class applied to drop zones on over */\r\n\r\n.another-file-over-class { border: dotted 3px green; }\r\n\r\ninput[type=file] {\r\n    color: transparent;\r\n}"

/***/ }),

/***/ "./src/app/components/Items/item-image-editor-component/item-image-editor-component.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/components/Items/item-image-editor-component/item-image-editor-component.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-2 image text-center\" *ngFor=\"let image of images\">\n    <img class=\"thumbnail\" src=\"{{image.url}}\" alt=\"\">\n    <div class=\"btn-group btn-group-sm\">\n      <button type=\"button\" class=\"btn btn-xs\" [disabled]=\"image.isProfilePic\" (click)=\"setMainImage(image)\">Main</button>\n      <button type=\"button\" class=\"btn btn-xs btn-danger\"[disabled]=\"image.isProfilePic\" (click)=\"deleteImage(image)\"><i class=\"fa fa-trash-o\"></i></button>\n    </div>\n  </div>\n</div>\n\n<hr>\n\n<div class=\"row\">\n\n  <div class=\"col-md-3\">\n\n    <h3>Add Images of item</h3>\n\n    <div ng2FileDrop [ngClass]=\"{'nv-file-over': hasBaseDropZoneOver}\" (fileOver)=\"fileOverBase($event)\" [uploader]=\"uploader\"\n      class=\"jumbotron my-drop-zone\">\n      Drop Images here\n    </div>\n\n    <input type=\"file\" ng2FileSelect [uploader]=\"uploader\" multiple />\n\n  </div>\n\n  <div class=\"col-md-9\" style=\"margin-bottom: 40px\" *ngIf=\"uploader?.queue?.length\">\n\n    <h3>Upload queue</h3>\n    <p>Queue length: {{ uploader?.queue?.length }}</p>\n\n    <table class=\"table\">\n      <thead>\n        <tr>\n          <th width=\"50%\">Name</th>\n          <th>Size</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of uploader.queue\">\n          <td>\n            <strong>{{ item?.file?.name }}</strong>\n          </td>\n          <td *ngIf=\"uploader.options.isHTML5\" nowrap>{{ item?.file?.size/1024/1024 | number:'.2' }} MB</td>\n        </tr>\n      </tbody>\n    </table>\n\n    <div>\n      <div>\n        Queue progress:\n        <div class=\"progress\">\n          <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n        </div>\n      </div>\n      <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n        <span class=\"glyphicon glyphicon-upload\"></span> Upload\n      </button>\n      <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n        <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n      </button>\n      <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n        <span class=\"glyphicon glyphicon-trash\"></span> Remove\n      </button>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/components/Items/item-image-editor-component/item-image-editor-component.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/components/Items/item-image-editor-component/item-image-editor-component.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ItemImageEditorComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemImageEditorComponentComponent", function() { return ItemImageEditorComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_base_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/base-info.service */ "./src/app/services/base-info.service.ts");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemImageEditorComponentComponent = /** @class */ (function () {
    function ItemImageEditorComponentComponent(baseInfo, serverCall, snoty) {
        this.baseInfo = baseInfo;
        this.serverCall = serverCall;
        this.snoty = snoty;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({});
        this.hasBaseDropZoneOver = false;
        this.baseUrl = this.baseInfo.serverUrl();
        this.getItemImageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ItemImageEditorComponentComponent.prototype.ngOnInit = function () {
        this.initializeUploader();
    };
    ItemImageEditorComponentComponent.prototype.fileOverBase = function (e) {
        this.hasBaseDropZoneOver = e;
    };
    ItemImageEditorComponentComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_1__["FileUploader"]({
            url: this.baseUrl + 'items/' + this.itemId + '/images',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            autoUpload: false,
            removeAfterUpload: true,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                var photo = {
                    id: res.id,
                    url: res.url,
                    dateAdded: res.dateAdded,
                    isProfilePic: res.isProfilePic
                };
                _this.images.push(photo);
            }
        };
    };
    ItemImageEditorComponentComponent.prototype.setMainImage = function (image) {
        var _this = this;
        this.serverCall.setItemMainImage(this.itemId, image.id).subscribe(function () {
            _this.currentMainPic = underscore__WEBPACK_IMPORTED_MODULE_5__["findWhere"](_this.images, { isProfilePic: true });
            _this.currentMainPic.isProfilePic = false;
            image.isProfilePic = true;
            _this.snoty.success("Image set as main image", "Success");
            _this.getItemImageChange.emit(image.url);
        }, function (error) {
            _this.snoty.error("Something went wrong.", "Error");
        });
    };
    ItemImageEditorComponentComponent.prototype.deleteImage = function (image) {
        var _this = this;
        this.snoty.confirm('Are you sure you want to delete image', 'Confirm', {
            timeout: 5000,
            showProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            buttons: [
                { text: 'Yes', action: function (toast) { _this.doDelete(image); _this.snoty.remove(toast.id); }, bold: true },
                { text: 'No', action: function (toast) { console.log('Clicked: No'); _this.snoty.remove(toast.id); }, bold: true },
            ]
        });
    };
    ItemImageEditorComponentComponent.prototype.doDelete = function (image) {
        var _this = this;
        this.serverCall.deleteItemImage(this.itemId, image.id).subscribe(function () {
            _this.currentMainPic = underscore__WEBPACK_IMPORTED_MODULE_5__["findWhere"](_this.images, { isProfilePic: true });
            _this.images.splice(underscore__WEBPACK_IMPORTED_MODULE_5__["findIndex"](_this.images, { id: image.id }, 1));
            _this.snoty.success("Image has been deleted.", "Success");
        }, function (error) {
            _this.snoty.error("Something went wrong.", "Error");
        });
    };
    ItemImageEditorComponentComponent.prototype.SuccessHandel = function (data) {
        this.snoty.success("Image set as main image", "Success");
    };
    ItemImageEditorComponentComponent.prototype.handleErrors = function () {
        console.log("error");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ItemImageEditorComponentComponent.prototype, "images", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemImageEditorComponentComponent.prototype, "itemId", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ItemImageEditorComponentComponent.prototype, "getItemImageChange", void 0);
    ItemImageEditorComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-image-editor-component',
            template: __webpack_require__(/*! ./item-image-editor-component.component.html */ "./src/app/components/Items/item-image-editor-component/item-image-editor-component.component.html"),
            styles: [__webpack_require__(/*! ./item-image-editor-component.component.css */ "./src/app/components/Items/item-image-editor-component/item-image-editor-component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_base_info_service__WEBPACK_IMPORTED_MODULE_2__["BaseInfoService"], _services_server_calls_service__WEBPACK_IMPORTED_MODULE_3__["ServerCallsService"], ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"]])
    ], ItemImageEditorComponentComponent);
    return ItemImageEditorComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/Items/item-image/item-image.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/Items/item-image/item-image.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item-main-image {\r\n  max-width: 100%;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n  height: 50% !important;\r\n  max-height: 50% !important;\r\n}\r\n\r\n.main {\r\n  padding-top: 50px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/Items/item-image/item-image.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/Items/item-image/item-image.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n  <app-item-image-editor-component [images]=\"item?.photo\" [itemId]=\"itemid\" (getItemImageChange)=\"updateMainimage($event)\"></app-item-image-editor-component>\n</div>\n"

/***/ }),

/***/ "./src/app/components/Items/item-image/item-image.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/Items/item-image/item-image.component.ts ***!
  \*********************************************************************/
/*! exports provided: ItemImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemImageComponent", function() { return ItemImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_5__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemImageComponent = /** @class */ (function () {
    function ItemImageComponent(_auth, serverCalls, snoty, route) {
        this._auth = _auth;
        this.serverCalls = serverCalls;
        this.snoty = snoty;
        this.route = route;
        this.postItem = {
            id: null,
            title: null,
            isService: null,
            description: null,
            shipingAddress: null,
            shipingCountry: null,
            createdDate: null,
            quantity: null,
            unitPrice: null,
            imageUrl: null,
            otherUrl: null,
            userId: null,
            photo: null
        };
    }
    ItemImageComponent.prototype.ngOnInit = function () {
        console.log(+this.route.snapshot.params['id']);
        this.itemid = +this.route.snapshot.params['id'];
        this.loadItemDetails();
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_5__["NgxGalleryAnimation"].Slide,
                preview: true
            }
        ];
    };
    ItemImageComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var i = 0; i < this.item.photo.length; i++) {
            imageUrls.push({
                small: this.item.photo[i].url,
                medium: this.item.photo[i].url,
                big: this.item.photo[i].url,
            });
        }
        return imageUrls;
    };
    ItemImageComponent.prototype.loadItemDetails = function () {
        var _this = this;
        this.serverCalls.getItemDetails(+this.route.snapshot.params['id']).subscribe(function (data) { return _this.SuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
    };
    ItemImageComponent.prototype.SuccessHandel = function (data) {
        console.clear();
        console.log(data);
        this.item = data;
        this.galleryImages = this.getImages();
    };
    ItemImageComponent.prototype.handleErrors = function (error) {
        console.log(error);
        this.snoty.error("Failed to load, Please try again later.", "Error");
    };
    ItemImageComponent.prototype.save = function () {
        var _this = this;
        var fd = new FormData();
        this.postItem.id = this.item['id'],
            this.postItem.title = this.item['title'],
            this.postItem.isService = this.item['isService'],
            this.postItem.description = this.item['description'],
            this.postItem.shipingAddress = this.item['shipingAddress'],
            this.postItem.shipingCountry = this.item['shipingCountry'],
            this.postItem.createdDate = this.item['createdDate'],
            this.postItem.quantity = this.item['quantity'],
            this.postItem.unitPrice = this.item['unitPrice'],
            this.postItem.imageUrl = this.item['imageUrl'],
            this.postItem.otherUrl = this.item['otherUrl'],
            this.postItem.userId = this.item['userId'],
            this.postItem.photo = this.item['photo'];
        this.serverCalls.updateItem(this.postItem, this.item.id).subscribe(function (data) { return _this.saveSuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
    };
    ItemImageComponent.prototype.updateMainimage = function (url) {
        this.item.imageUrl = url;
    };
    ItemImageComponent.prototype.saveSuccessHandel = function (data) {
        this.snoty.success("Save successfully.", "Success");
    };
    ItemImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-image',
            template: __webpack_require__(/*! ./item-image.component.html */ "./src/app/components/Items/item-image/item-image.component.html"),
            styles: [__webpack_require__(/*! ./item-image.component.css */ "./src/app/components/Items/item-image/item-image.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _services_server_calls_service__WEBPACK_IMPORTED_MODULE_2__["ServerCallsService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], ItemImageComponent);
    return ItemImageComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/cart-item/cart-item.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/cart/cart-item/cart-item.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quantity {\r\n  float: left;\r\n  margin-right: 15px;\r\n  background-color: #eee;\r\n  position: relative;\r\n  width: 80px;\r\n  overflow: hidden\r\n}\r\n\r\n.quantity input {\r\n  margin: 0;\r\n  text-align: center;\r\n  width: 15px;\r\n  height: 15px;\r\n  padding: 0;\r\n  float: right;\r\n  color: #000;\r\n  font-size: 20px;\r\n  border: 0;\r\n  outline: 0;\r\n  background-color: #F6F6F6\r\n}\r\n\r\n.quantity input.qty {\r\n  position: relative;\r\n  border: 0;\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 10px 25px 10px 10px;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  border-radius: 0;\r\n  background-clip: padding-box\r\n}\r\n\r\n.quantity .minus, .quantity .plus {\r\n  line-height: 0;\r\n  background-clip: padding-box;\r\n  border-radius: 0;\r\n  -webkit-background-size: 6px 30px;\r\n  -moz-background-size: 6px 30px;\r\n  color: #bbb;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  height: 50%;\r\n  border: 0;\r\n  right: 0;\r\n  padding: 0;\r\n  width: 25px;\r\n  z-index: 3\r\n}\r\n\r\n.quantity .minus:hover, .quantity .plus:hover {\r\n  background-color: #dad8da\r\n}\r\n\r\n.quantity .minus {\r\n  bottom: 0\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/cart/cart-item/cart-item.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/cart/cart-item/cart-item.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- PRODUCT -->\n<div class=\"row\" *ngIf=\"displayThis\">\n    <div class=\"col-12 col-sm-12 col-md-2 text-center\">\n            <img class=\"img-responsive\" src=\"{{ item.imageUrl }}\" alt=\"{{ item.title }} picture\" width=\"120\" height=\"80\">\n    </div>\n    <div class=\"col-12 text-sm-center col-sm-12 text-md-left col-md-6\">\n        <h4 class=\"product-name\"><strong>{{ item.title }}</strong></h4>\n        <h4>\n            <small>{{ item.description }}</small>\n        </h4>\n    </div>\n    <div class=\"col-12 col-sm-12 text-sm-center col-md-4 text-md-right row\">\n        <div class=\"col-3 col-sm-3 col-md-6 text-md-right\" style=\"padding-top: 5px\">\n            <h6><strong>{{item?.unitPrice | currency:\"USD$\"}} <span class=\"text-muted\">x</span></strong></h6>\n        </div>\n        <div class=\"col-4 col-sm-4 col-md-4\">\n            <div class=\"quantity\">\n                <input type=\"button\" value=\"+\" class=\"plus\" (click)=\"increaseQuantity()\">\n                <input type=\"number\" [(ngModel)]=\"orderQuantity\" step=\"1\" max=\"99\" min=\"1\" value=\"1\" title=\"Qty\" class=\"qty\"\n                       size=\"4\">\n                <input type=\"button\" value=\"-\" class=\"minus\" (click)=\"decreaseQuantity()\">\n            </div>\n        </div>\n        <div class=\"col-2 col-sm-2 col-md-2 text-right\">\n            <button type=\"button\" class=\"btn btn-outline-danger btn-xs\" (click)=\"deleteItem()\">\n                <i class=\"fa fa-trash\" aria-hidden=\"true\"></i>\n            </button>\n        </div>\n    </div>\n</div>\n<hr *ngIf=\"displayThis\">\n<!-- END PRODUCT -->\n"

/***/ }),

/***/ "./src/app/components/cart/cart-item/cart-item.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/cart/cart-item/cart-item.component.ts ***!
  \******************************************************************/
/*! exports provided: CartItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartItemComponent", function() { return CartItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_base_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/base-info.service */ "./src/app/services/base-info.service.ts");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var _node_modules_ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CartItemComponent = /** @class */ (function () {
    function CartItemComponent(baseInfo, serverCall, snoty, _auth) {
        this.baseInfo = baseInfo;
        this.serverCall = serverCall;
        this.snoty = snoty;
        this._auth = _auth;
        this.displayThis = true;
        this.getSum = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    CartItemComponent.prototype.ngOnInit = function () {
        this.updateTotal();
    };
    CartItemComponent.prototype.increaseQuantity = function () {
        this.orderQuantity = this.orderQuantity + 1;
        this.updateQuantity();
    };
    CartItemComponent.prototype.decreaseQuantity = function () {
        if (this.orderQuantity != 1) {
            this.orderQuantity = this.orderQuantity - 1;
            this.updateQuantity();
        }
        else {
            this.deleteItem();
        }
    };
    CartItemComponent.prototype.updateQuantity = function () {
        var _this = this;
        this.serverCall.updateCartItem(this._auth.getId(), this.item.id, this.orderQuantity).subscribe(function (data) { return _this.SuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
    };
    CartItemComponent.prototype.deleteItem = function () {
        var _this = this;
        this.snoty.confirm('Do you want to remove this item from your cart?', 'Remove item', {
            timeout: 5000,
            showProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            buttons: [
                { text: 'Yes (Delete)', action: function (toast) { _this.confirmDelete(); _this.snoty.remove(toast.id); } },
                { text: 'No', action: function (toast) { console.log('Clicked: No'); _this.snoty.remove(toast.id); }, bold: true },
            ]
        });
    };
    CartItemComponent.prototype.confirmDelete = function () {
        var _this = this;
        this.serverCall.deleteCartItem(this._auth.getId(), this.item.id).subscribe(function (data) { return _this.successDel(data); }, function (error) { return _this.handleErrors(error); });
    };
    CartItemComponent.prototype.SuccessHandel = function (data) {
        this.updateTotal();
        this.snoty.success('Cart updated.', 'Success');
    };
    CartItemComponent.prototype.handleErrors = function (error) {
        console.log(error);
        this.snoty.error(error.error, "Error");
    };
    CartItemComponent.prototype.successDel = function (data) {
        this.updateTotal();
        this.snoty.success('Cart updated.', 'Success');
        this.displayThis = false;
    };
    CartItemComponent.prototype.updateTotal = function () {
        var _this = this;
        this.serverCall.getCartSum(this._auth.getId()).subscribe(function (data) {
            _this.updateSum(data);
            console.log(data);
        }, function (error) { return _this.handleErrors(error); });
    };
    CartItemComponent.prototype.updateSum = function (data) {
        this.getSum.emit(data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CartItemComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], CartItemComponent.prototype, "orderQuantity", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], CartItemComponent.prototype, "getSum", void 0);
    CartItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cart-item',
            template: __webpack_require__(/*! ./cart-item.component.html */ "./src/app/components/cart/cart-item/cart-item.component.html"),
            styles: [__webpack_require__(/*! ./cart-item.component.css */ "./src/app/components/cart/cart-item/cart-item.component.css")]
        }),
        __metadata("design:paramtypes", [_services_base_info_service__WEBPACK_IMPORTED_MODULE_1__["BaseInfoService"], _services_server_calls_service__WEBPACK_IMPORTED_MODULE_2__["ServerCallsService"], _node_modules_ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], CartItemComponent);
    return CartItemComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/check-out/check-out.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/components/cart/check-out/check-out.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/cart/check-out/check-out.component.html":
/*!********************************************************************!*\
  !*** ./src/app/components/cart/check-out/check-out.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  check-out works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/cart/check-out/check-out.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/cart/check-out/check-out.component.ts ***!
  \******************************************************************/
/*! exports provided: CheckOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckOutComponent", function() { return CheckOutComponent; });
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

var CheckOutComponent = /** @class */ (function () {
    function CheckOutComponent() {
    }
    CheckOutComponent.prototype.ngOnInit = function () {
    };
    CheckOutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-check-out',
            template: __webpack_require__(/*! ./check-out.component.html */ "./src/app/components/cart/check-out/check-out.component.html"),
            styles: [__webpack_require__(/*! ./check-out.component.css */ "./src/app/components/cart/check-out/check-out.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckOutComponent);
    return CheckOutComponent;
}());



/***/ }),

/***/ "./src/app/components/cart/shoping-cart/shoping-cart.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/cart/shoping-cart/shoping-cart.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".quantity {\r\n  float: left;\r\n  margin-right: 15px;\r\n  background-color: #eee;\r\n  position: relative;\r\n  width: 80px;\r\n  overflow: hidden\r\n}\r\n\r\n.quantity input {\r\n  margin: 0;\r\n  text-align: center;\r\n  width: 15px;\r\n  height: 15px;\r\n  padding: 0;\r\n  float: right;\r\n  color: #000;\r\n  font-size: 20px;\r\n  border: 0;\r\n  outline: 0;\r\n  background-color: #F6F6F6\r\n}\r\n\r\n.quantity input.qty {\r\n  position: relative;\r\n  border: 0;\r\n  width: 100%;\r\n  height: 40px;\r\n  padding: 10px 25px 10px 10px;\r\n  text-align: center;\r\n  font-weight: 400;\r\n  font-size: 15px;\r\n  border-radius: 0;\r\n  background-clip: padding-box\r\n}\r\n\r\n.quantity .minus, .quantity .plus {\r\n  line-height: 0;\r\n  background-clip: padding-box;\r\n  border-radius: 0;\r\n  -webkit-background-size: 6px 30px;\r\n  -moz-background-size: 6px 30px;\r\n  color: #bbb;\r\n  font-size: 20px;\r\n  position: absolute;\r\n  height: 50%;\r\n  border: 0;\r\n  right: 0;\r\n  padding: 0;\r\n  width: 25px;\r\n  z-index: 3\r\n}\r\n\r\n.quantity .minus:hover, .quantity .plus:hover {\r\n  background-color: #dad8da\r\n}\r\n\r\n.quantity .minus {\r\n  bottom: 0\r\n}\r\n\r\n.shopping-cart {\r\n  margin-top: 40px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/cart/shoping-cart/shoping-cart.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/components/cart/shoping-cart/shoping-cart.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card shopping-cart\">\n  <div class=\"card-header bg-dark text-light\">\n      <i class=\"fa fa-shopping-cart\" aria-hidden=\"true\"></i>\n      Shipping cart\n      <a href=\"\" class=\"btn btn-outline-info btn-sm pull-right\" [routerLink]=\"['/home']\">Continue shopping</a>\n      <div class=\"clearfix\"></div>\n  </div>\n  <div class=\"card-body\">\n\n      <div *ngFor=\"let item of items\">\n        <app-cart-item [item]=\"item.item\" [orderQuantity]=\"item.quantity\" (getSum)=\"changeTotal($event)\"></app-cart-item>\n      </div>\n\n      <div class=\"pull-right\">\n          <a (click)=\"getItems()\" class=\"btn btn-outline-secondary pull-right active\">\n              Update shopping cart\n          </a>\n      </div>\n  </div>\n  <div class=\"card-footer\">\n      <div class=\"coupon col-md-5 col-sm-5 no-padding-left pull-left\">\n          <div class=\"row\">\n              <div class=\"col-6\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"cupone code\">\n              </div>\n              <div class=\"col-6\">\n                  <input type=\"submit\" class=\"btn btn-default\" value=\"Use cupone\">\n              </div>\n          </div>\n      </div>\n      <div class=\"pull-right\" style=\"margin: 10px\">\n          <div id=\"paypal-checkout-btn\" (onPaymentCompleted)=\"finishPayments($event)\" class=\"btn btn-success pull-right\"></div>\n          <div class=\"pull-right\" style=\"margin: 5px\">\n              Total price: <b>{{ cartTotal | currency:\"USD$\"}}</b>\n          </div>\n      </div>\n  </div>\n</div>\n<div class=\"cart-form\">\n  <form #cartFormPost method=\"POST\" action=\"https://www.sandbox.paypal.com/cgi-bin/webscr\">\n  </form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/cart/shoping-cart/shoping-cart.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/cart/shoping-cart/shoping-cart.component.ts ***!
  \************************************************************************/
/*! exports provided: ShopingCartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShopingCartComponent", function() { return ShopingCartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_base_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/base-info.service */ "./src/app/services/base-info.service.ts");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var _node_modules_ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var ShopingCartComponent = /** @class */ (function () {
    function ShopingCartComponent(baseInfo, renderer, serverCall, snoty, _auth, router, cart) {
        var _this = this;
        this.baseInfo = baseInfo;
        this.renderer = renderer;
        this.serverCall = serverCall;
        this.snoty = snoty;
        this._auth = _auth;
        this.router = router;
        this.cart = cart;
        this.cartTotal = 0;
        this.this = this;
        this.AddScript = false;
        this.PaypalLoad = false;
        this.transactionInfo = {
            intent: null,
            orderID: null,
            payerID: null,
            paymentID: null,
            paymentToken: null
        };
        this.paymenTReturn = {
            userId: null,
            amount: null,
            info: null
        };
        this.payPalConfig = {
            env: 'sandbox',
            client: {
                sandbox: 'ASUUALbeklNlC0mVNbWhFIDWqWGdMqZgPi1t6w01YMqOu1DG-wwMn-HhxxB0kbWf8oMwVCjgXh2iBA1c',
                production: ''
            },
            commit: true,
            payment: function (data, actions) {
                return actions.payment.create({
                    transactions: [{
                            amount: {
                                total: _this.cartTotal,
                                currency: 'USD',
                                details: {
                                    subtotal: _this.cartTotal,
                                    tax: '0.00',
                                    shipping: '0.00',
                                    handling_fee: '0.00',
                                    shipping_discount: '0.00',
                                    insurance: '0.00'
                                }
                            },
                            description: 'The payment transaction description.',
                            custom: '90048630024435',
                            //invoice_number: '12345', Insert a unique invoice number
                            payment_options: {
                                allowed_payment_method: 'INSTANT_FUNDING_SOURCE'
                            },
                            soft_descriptor: 'ECHI5786786',
                            item_list: {
                                items: _this.paypalItems
                            }
                        }],
                    note_to_payer: 'Contact us for any questions on your order.'
                });
            },
            onAuthorize: function (data, actions) {
                return actions.payment.execute().then(function (payment) {
                    // Payment success
                    document.querySelector('#paypal-checkout-btn').dispatchEvent(new CustomEvent('onPaymentCompleted', { detail: { paymentInfo: data } }));
                    console.log(data);
                    //console.log(self._auth.getId());
                });
            }, onCancel: function (data) {
                this.snoty.error('The payment was cancelled!', 'Error');
                console.log('The payment was cancelled!');
            }
        };
    }
    ShopingCartComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this.AddScript) {
            this.addPayPalScript().then(function () {
                _this.PaypalLoad = true;
            });
        }
    };
    ShopingCartComponent.prototype.addPayPalScript = function () {
        this.AddScript = true;
        return new Promise(function (resolve, reject) {
            var scriptTagElement = document.createElement('script');
            scriptTagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
            scriptTagElement.onload = resolve;
            document.body.appendChild(scriptTagElement);
        });
    };
    ShopingCartComponent.prototype.ngOnInit = function () {
        paypal.Button.render(this.payPalConfig, '#paypal-checkout-btn');
        this.getItems();
    };
    ShopingCartComponent.prototype.getItems = function () {
        var _this = this;
        this.serverCall.getCartItems(this._auth.getId()).subscribe(function (data) { return _this.SuccessLoad(data); }, function (error) { return _this.handleErrors(error); });
    };
    ShopingCartComponent.prototype.SuccessLoad = function (data) {
        var _this = this;
        this.items = data;
        this.serverCall.getPayPalItems(this._auth.getId()).subscribe(function (data) { return _this.SuccessPayPalLoad(data); }, function (error) { return _this.handleErrors(error); });
        console.log(this.paypalItems);
    };
    ShopingCartComponent.prototype.SuccessHandel = function (data) {
        this.snoty.success('Item added to favourites', 'Success');
    };
    ShopingCartComponent.prototype.handleErrors = function (error) {
        console.log(error);
        this.snoty.error(error.error, "Error");
    };
    ShopingCartComponent.prototype.changeTotal = function (total) {
        this.cartTotal = total;
    };
    ShopingCartComponent.prototype.SuccessPayPalLoad = function (data) {
        this.paypalItems = data;
        console.log(this.paypalItems);
    };
    ShopingCartComponent.prototype.finishPayments = function (event) {
        var _this = this;
        console.log(event.detail.paymentInfo);
        this.transactionInfo.intent = event.detail.paymentInfo.intent;
        this.transactionInfo.orderID = event.detail.paymentInfo.orderID;
        this.transactionInfo.payerID = event.detail.paymentInfo.payerID;
        this.transactionInfo.paymentID = event.detail.paymentInfo.paymentID;
        this.transactionInfo.paymentToken = event.detail.paymentInfo.paymentToken;
        this.paymenTReturn.info = this.transactionInfo;
        this.paymenTReturn.amount = this.cartTotal;
        this.paymenTReturn.userId = this._auth.getId();
        this.serverCall.CompletePayments(this.paymenTReturn).subscribe(function (error) { return _this.handleErrors(error); });
        this.router.navigateByUrl('/home');
        this.cart.cartCount = 0;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cartFormPost'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ShopingCartComponent.prototype, "cartFormPost", void 0);
    ShopingCartComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-shoping-cart',
            template: __webpack_require__(/*! ./shoping-cart.component.html */ "./src/app/components/cart/shoping-cart/shoping-cart.component.html"),
            styles: [__webpack_require__(/*! ./shoping-cart.component.css */ "./src/app/components/cart/shoping-cart/shoping-cart.component.css")]
        }),
        __metadata("design:paramtypes", [_services_base_info_service__WEBPACK_IMPORTED_MODULE_1__["BaseInfoService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _services_server_calls_service__WEBPACK_IMPORTED_MODULE_2__["ServerCallsService"], _node_modules_ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services_cart_service__WEBPACK_IMPORTED_MODULE_7__["CartService"]])
    ], ShopingCartComponent);
    return ShopingCartComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-item-card-component{\r\n    margin-right: 0rem !important;\r\n    display: inline-block !important;\r\n    padding: 0px !important;\r\n}\r\n\r\n.card{\r\n    overflow: hidden;\r\n    margin-bottom: 10px; /* Added */\r\n}\r\n\r\n.pagination{\r\n    margin: 0 auto; /* Added */\r\n    float: none; /* Added */\r\n    margin-bottom: 10px; /* Added */\r\n}\r\n\r\n.filters{\r\n    overflow: hidden;\r\n    float: none; /* Added */\r\n}\r\n\r\nmat-accordion[_ngcontent-c2] {\r\n    width: 100%;\r\n    padding: 20px;\r\n    \r\n}\r\n\r\n.main{\r\n    margin: 25px !important;\r\n}\r\n\r\n.inline{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n}\r\n\r\n.left-radius {\r\n    border-top-left-radius: 5px !important;\r\n    border-bottom-left-radius: 5px !important;\r\n}\r\n\r\n.right-radius {\r\n    border-bottom-right-radius: 5px !important;\r\n    border-top-right-radius: 5px !important;\r\n}\r\n\r\n.full-width {\r\n    width: 100vw;\r\n    position: relative;\r\n    left: 50%;\r\n    right: 50%;\r\n    margin-left: -50vw;\r\n    margin-right: -50vw;\r\n    overflow-x: hidden;\r\n    padding-left: 0px;\r\n    padding-right: 0px;\r\n}\r\n\r\n.bg-grey{\r\n    background-color: #dae0e5;\r\n}\r\n\r\nbtn-outline-primary:hover {\r\n    color: #fff;\r\n    background-color: #007bff !important;\r\n    border-color: #007bff !important;\r\n}"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <div class=\"row full-width bg-grey \" *ngIf=\"isCollapsed\">\n        <div class=\"col-md-4\"></div>\n        <div class=\"col-md-4\">\n                <div class=\"input-group mb-2\" style=\"line-height: 35px; margin-top: 0.5rem;\">\n                    <input type=\"text\" class=\"form-control\" (keyup.enter)=\"loadItems()\" [(ngModel)]=\"searchTerm\" placeholder=\"Search\" aria-label=\"Search Terms\" aria-describedby=\"basic-addon2\">\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-outline-primary\" (click)=\"loadItems()\" type=\"button\"><i class=\"fas fa-search\"></i></button>\n                    </div>\n                </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"input-group mb-3\">\n                <mat-form-field>\n                    <mat-select class=\"\" [(value)]=\"selectedOrder\">\n                        <mat-option value=\"created-dsc\">Oldest</mat-option>\n                        <mat-option value=\"created-asc\">Newest</mat-option>\n                        <mat-option value=\"price-asc\">Lowest Price</mat-option>\n                        <mat-option value=\"price-dsc\">Highest Price</mat-option>\n                    </mat-select>\n                </mat-form-field>\n            </div>\n        </div>\n    </div>\n    <div class=\"row filters\">\n            <div class=\"col-md-3 mb-3\">\n                <button type=\"button\" *ngIf=\"isCollapsed\" class=\"btn btn-primary marg-10\" (click)=\"isCollapsed = !isCollapsed\"\n                    [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseEvent\">Advance Search\n                </button>\n                <button type=\"button\" *ngIf=\"!isCollapsed\" class=\"btn btn-primary marg-10\" (click)=\"basicSearch()\"\n                    [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseEvent\">Basic Search\n                </button>\n            </div>\n            <div class=\"col-md-9 mb-3 marg-10\">\n                <div id=\"collapseEvent\" class=\"card\" [collapse]=\"isCollapsed\">\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">Advance Search</h5>\n                            <div class=\"row mb-3\">\n                                <div class=\"col-md-12\">\n                                        <input type=\"text\" (keyup.enter)=\"loadItems()\" class=\"form-control\" [(ngModel)]=\"searchTerm\" placeholder=\"Search Terms\" aria-label=\"Search Terms\" aria-describedby=\"basic-addon2\">\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-2\" style=\"line-height: 35px;\">Price :</div>\n                                <div class=\"col-md-10\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-5\">\n                                                <div class=\"input-group\">\n                                                    <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\" id=\"basic-addon1\">Rs</span>\n                                                </div>\n                                                <input type=\"number\" min=\"0\" value=\"0\" step=\".10\" [(ngModel)]=\"minPrice\" class=\"form-control\" placeholder=\"Min\" aria-label=\"Min\" aria-describedby=\"basic-addon1\">\n                                            </div>\n                                        </div>\n                                        <div class=\"col-md-1\" style=\"line-height: 35px;\">To</div>\n                                        <div class=\"col-md-6\">\n                                                <div class=\"input-group\">\n                                                    <div class=\"input-group-prepend\">\n                                                <span class=\"input-group-text\" id=\"basic-addon1\">Rs</span>\n                                                </div>\n                                                <input type=\"number\" min=\"0\" value=\"0\" step=\".10\" [(ngModel)]=\"maxPrice\" class=\"form-control\" placeholder=\"Max\" aria-label=\"Max\" aria-describedby=\"basic-addon1\">\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4\" style=\"line-height: 60px;\">\n                                            Type :\n                                        </div>\n                                        <div class=\"col-md-8\">\n                                            <mat-form-field>\n                                                <mat-select [(value)]=\"selectedType\">\n                                                  <mat-option value=\"all\">All</mat-option>\n                                                  <mat-option value=\"tangible\">Tangible</mat-option>\n                                                  <mat-option value=\"service\">Service</mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4\" style=\"line-height: 60px;\">\n                                            Location :\n                                        </div>\n                                        <div class=\"col-md-8\">\n                                            <mat-form-field>\n                                                <mat-select [(value)]=\"selectedType\">\n                                                  <mat-option value=\"all\">All</mat-option>\n                                                  <mat-option value=\"tangible\">Tangible</mat-option>\n                                                  <mat-option value=\"service\">Service</mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"row\">\n                                <div class=\"col-md-6\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-4\" style=\"line-height: 55px;\">\n                                            Order By :\n                                        </div>\n                                        <div class=\"col-md-8\">\n                                            <mat-form-field>\n                                                <mat-select [(value)]=\"selectedOrder\">\n                                                    <mat-option value=\"created-dsc\">Oldest</mat-option>\n                                                    <mat-option value=\"created-asc\">Newest</mat-option>\n                                                    <mat-option value=\"price-asc\">Lowest Price</mat-option>\n                                                    <mat-option value=\"price-dsc\">Highest Price</mat-option>\n                                                </mat-select>\n                                            </mat-form-field>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"col-md-6\"></div>\n                            </div>\n                            <hr>\n                            <button mat-button color=\"warn\" (click)=\"resetFilters()\">Clear</button>\n                            <button mat-button color=\"primary\" (click)=\"loadItems()\">Search</button>\n                        </div>\n                </div>\n            </div>\n    </div>\n    <br>\n    <div class=\"row d-flex justify-content-between\">\n        <div *ngFor=\"let item of items\" class=\"card\">\n            <app-item-card-component [item]=\"item\" [isHome]=\"home\" class=\"p-3\"></app-item-card-component>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <div class=\"col\">\n        </div>\n        <div class=\"col align-items-center\">\n            <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\"\n                    [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"\n                    previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n            </pagination>\n        </div>\n        <div class=\"col\">\n        </div>\n    </div>\n\n\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(serverCalls, snoty) {
        this.serverCalls = serverCalls;
        this.snoty = snoty;
        this.currentPage = 1;
        this.itemsPerPage = 6;
        this.isCollapsed = true;
        this.selectedType = 'all';
        this.selectedLocation = 'all';
        this.minPrice = 0;
        this.maxPrice = 0;
        this.searchTerm = '';
        this.selectedOrder = 'created-dsc';
        this.home = true;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadItems();
    };
    HomeComponent.prototype.loadItems = function () {
        var _this = this;
        this.serverCalls.getItems(this.currentPage, this.itemsPerPage, this.minPrice, this.maxPrice, this.selectedType, this.searchTerm, this.selectedOrder).subscribe(function (res) {
            _this.resBody = res.body;
            _this.SuccessHandel(_this.resBody);
            console.log(res.headers.get('Pagination'));
            if (res.headers.get('Pagination') != null) {
                var paginHeaders = res.headers.get('Pagination');
                _this.pagination = JSON.parse(paginHeaders);
                console.log(_this.pagination);
            }
        }, function (err) {
            _this.handleErrors(err);
        });
    };
    HomeComponent.prototype.SuccessHandel = function (data) {
        this.items = data;
        console.clear();
    };
    HomeComponent.prototype.handleErrors = function (error) {
        console.log(error);
        this.snoty.error("Failed to load, Please try again later.", "Error");
    };
    HomeComponent.prototype.pageChanged = function (event) {
        this.currentPage = event.page;
        console.log(event);
        this.items = [];
        this.loadItems();
    };
    HomeComponent.prototype.resetFilters = function () {
        this.selectedType = 'all';
        this.selectedLocation = 'all';
        this.minPrice = 0;
        this.maxPrice = 0;
        this.searchTerm = '';
    };
    HomeComponent.prototype.basicSearch = function () {
        this.resetFilters();
        this.isCollapsed = !this.isCollapsed;
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__["ServerCallsService"], ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/items/favourites/favourites.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/items/favourites/favourites.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-item-card-component{\r\n    margin-right: 0rem !important;\r\n    display: inline-block !important;\r\n    padding: 0px !important;\r\n}\r\n\r\n.card{\r\n    overflow: hidden;\r\n    margin-bottom: 10px; /* Added */\r\n}\r\n\r\n.pagination{\r\n    margin: 0 auto; /* Added */\r\n    float: none; /* Added */\r\n    margin-bottom: 10px; /* Added */\r\n}\r\n\r\n.filters{\r\n    overflow: hidden;\r\n    float: none; /* Added */\r\n}\r\n\r\nmat-accordion[_ngcontent-c2] {\r\n    width: 100%;\r\n    padding: 20px;\r\n    \r\n}\r\n\r\n.main{\r\n    margin: 25px !important;\r\n}\r\n\r\n.inline{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    align-items: center;\r\n}\r\n\r\n.left-radius {\r\n    border-top-left-radius: 5px !important;\r\n    border-bottom-left-radius: 5px !important;\r\n}\r\n\r\n.right-radius {\r\n    border-bottom-right-radius: 5px !important;\r\n    border-top-right-radius: 5px !important;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/items/favourites/favourites.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/items/favourites/favourites.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\n    <h2>Favourites</h2>\n    <hr>\n  <div class=\"row\" *ngIf=\"isCollapsed\">\n      <div class=\"col-md-4\"></div>\n      <div class=\"col-md-4\">\n              <div class=\"input-group mb-2\" style=\"line-height: 35px; margin-top: 0.5rem;\">\n                  <input type=\"text\" class=\"form-control\" (keyup.enter)=\"loadItems()\" [(ngModel)]=\"searchTerm\" placeholder=\"Search\" aria-label=\"Search Terms\" aria-describedby=\"basic-addon2\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-outline-primary\" (click)=\"loadItems()\" type=\"button\"><i class=\"fas fa-search\"></i></button>\n                  </div>\n              </div>\n      </div>\n      <div class=\"col-md-4\">\n          <div class=\"input-group mb-3\">\n              <mat-form-field>\n                  <mat-select class=\"\" [(value)]=\"selectedOrder\">\n                      <mat-option value=\"created-dsc\">Oldest</mat-option>\n                      <mat-option value=\"created-asc\">Newest</mat-option>\n                      <mat-option value=\"price-asc\">Lowest Price</mat-option>\n                      <mat-option value=\"price-dsc\">Highest Price</mat-option>\n                  </mat-select>\n              </mat-form-field>\n          </div>\n      </div>\n  </div>\n  <div class=\"row filters\">\n          <div class=\"col-md-3 mb-3\">\n              <button type=\"button\" *ngIf=\"isCollapsed\" class=\"btn btn-primary\" (click)=\"isCollapsed = !isCollapsed\"\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseEvent\">Advance Search\n              </button>\n              <button type=\"button\" *ngIf=\"!isCollapsed\" class=\"btn btn-primary\" (click)=\"basicSearch()\"\n                  [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseEvent\">Basic Search\n              </button>\n          </div>\n          <div class=\"col-md-9 mb-3\">\n              <div id=\"collapseEvent\" class=\"card\" [collapse]=\"isCollapsed\">\n                      <div class=\"card-body\">\n                          <h5 class=\"card-title\">Advance Search</h5>\n                          <div class=\"row mb-3\">\n                              <div class=\"col-md-12\">\n                                      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"searchTerm\" placeholder=\"Search Terms\" aria-label=\"Search Terms\" aria-describedby=\"basic-addon2\">\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-2\" style=\"line-height: 35px;\">Price :</div>\n                              <div class=\"col-md-10\">\n                                  <div class=\"row\">\n                                      <div class=\"col-md-5\">\n                                              <div class=\"input-group\">\n                                                  <div class=\"input-group-prepend\">\n                                              <span class=\"input-group-text\" id=\"basic-addon1\">Rs</span>\n                                              </div>\n                                              <input type=\"number\" min=\"0\" value=\"0\" step=\".10\" [(ngModel)]=\"minPrice\" class=\"form-control\" placeholder=\"Min\" aria-label=\"Min\" aria-describedby=\"basic-addon1\">\n                                          </div>\n                                      </div>\n                                      <div class=\"col-md-1\" style=\"line-height: 35px;\">To</div>\n                                      <div class=\"col-md-6\">\n                                              <div class=\"input-group\">\n                                                  <div class=\"input-group-prepend\">\n                                              <span class=\"input-group-text\" id=\"basic-addon1\">Rs</span>\n                                              </div>\n                                              <input type=\"number\" min=\"0\" value=\"0\" step=\".10\" [(ngModel)]=\"maxPrice\" class=\"form-control\" placeholder=\"Max\" aria-label=\"Max\" aria-describedby=\"basic-addon1\">\n                                          </div>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                  <div class=\"row\">\n                                      <div class=\"col-md-4\" style=\"line-height: 60px;\">\n                                          Type :\n                                      </div>\n                                      <div class=\"col-md-8\">\n                                          <mat-form-field>\n                                              <mat-select [(value)]=\"selectedType\">\n                                                <mat-option value=\"all\">All</mat-option>\n                                                <mat-option value=\"tangible\">Tangible</mat-option>\n                                                <mat-option value=\"service\">Service</mat-option>\n                                              </mat-select>\n                                          </mat-form-field>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"col-md-6\">\n                                  <div class=\"row\">\n                                      <div class=\"col-md-4\" style=\"line-height: 60px;\">\n                                          Location :\n                                      </div>\n                                      <div class=\"col-md-8\">\n                                          <mat-form-field>\n                                              <mat-select [(value)]=\"selectedType\">\n                                                <mat-option value=\"all\">All</mat-option>\n                                                <mat-option value=\"tangible\">Tangible</mat-option>\n                                                <mat-option value=\"service\">Service</mat-option>\n                                              </mat-select>\n                                          </mat-form-field>\n                                      </div>\n                                  </div>\n                              </div>\n                          </div>\n                          <div class=\"row\">\n                              <div class=\"col-md-6\">\n                                  <div class=\"row\">\n                                      <div class=\"col-md-4\" style=\"line-height: 55px;\">\n                                          Order By :\n                                      </div>\n                                      <div class=\"col-md-8\">\n                                          <mat-form-field>\n                                              <mat-select [(value)]=\"selectedOrder\">\n                                                  <mat-option value=\"created-dsc\">Oldest</mat-option>\n                                                  <mat-option value=\"created-asc\">Newest</mat-option>\n                                                  <mat-option value=\"price-asc\">Lowest Price</mat-option>\n                                                  <mat-option value=\"price-dsc\">Highest Price</mat-option>\n                                              </mat-select>\n                                          </mat-form-field>\n                                      </div>\n                                  </div>\n                              </div>\n                              <div class=\"col-md-6\"></div>\n                          </div>\n                          <hr>\n                          <button mat-button color=\"warn\" (click)=\"resetFilters()\">Clear</button>\n                          <button mat-button color=\"primary\" (click)=\"loadItems()\">Search</button>\n                      </div>\n              </div>\n          </div>\n  </div>\n  <br>\n  <div class=\"row d-flex justify-content-between\">\n      <div *ngFor=\"let item of items\" class=\"card\">\n          <app-item-card-component [item]=\"item\" class=\"p-3\"></app-item-card-component> \n      </div>\n  </div>\n  <div class=\"row\">\n    \n  </div>\n\n  <div class=\"row\">\n      <div class=\"col\">\n      </div>\n      <div class=\"col align-items-center\">\n          <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\"\n                  [itemsPerPage]=\"pagination.itemsPerPage\" [(ngModel)]=\"currentPage\" (pageChanged)=\"pageChanged($event)\"\n                  previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\" lastText=\"&raquo;\">\n          </pagination>\n      </div>\n      <div class=\"col\">\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/items/favourites/favourites.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/items/favourites/favourites.component.ts ***!
  \*********************************************************************/
/*! exports provided: FavouritesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavouritesComponent", function() { return FavouritesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FavouritesComponent = /** @class */ (function () {
    function FavouritesComponent(serverCalls, snoty, _auth) {
        this.serverCalls = serverCalls;
        this.snoty = snoty;
        this._auth = _auth;
        this.currentPage = 1;
        this.itemsPerPage = 6;
        this.isCollapsed = true;
        this.selectedType = 'all';
        this.selectedLocation = 'all';
        this.minPrice = 0;
        this.maxPrice = 0;
        this.searchTerm = '';
        this.selectedOrder = 'created-dsc';
    }
    FavouritesComponent.prototype.ngOnInit = function () {
        this.loadItems();
    };
    FavouritesComponent.prototype.loadItems = function () {
        var _this = this;
        this.serverCalls.getFavorites(this._auth.getId(), this.currentPage, this.itemsPerPage, this.minPrice, this.maxPrice, this.selectedType, this.searchTerm, this.selectedOrder).subscribe(function (res) {
            _this.resBody = res.body;
            _this.SuccessHandel(_this.resBody);
            console.log(res.headers.get('Pagination'));
            if (res.headers.get('Pagination') != null) {
                var paginHeaders = res.headers.get('Pagination');
                _this.pagination = JSON.parse(paginHeaders);
                console.log(_this.pagination);
            }
        }, function (err) {
            _this.handleErrors(err);
        });
    };
    FavouritesComponent.prototype.SuccessHandel = function (data) {
        this.items = data;
        console.clear();
    };
    FavouritesComponent.prototype.handleErrors = function (error) {
        console.log(error);
        this.snoty.error("Failed to load, Please try again later.", "Error");
    };
    FavouritesComponent.prototype.pageChanged = function (event) {
        this.currentPage = event.page;
        this.loadItems();
    };
    FavouritesComponent.prototype.resetFilters = function () {
        this.selectedType = 'all';
        this.selectedLocation = 'all';
        this.minPrice = 0;
        this.maxPrice = 0;
        this.searchTerm = '';
    };
    FavouritesComponent.prototype.basicSearch = function () {
        this.resetFilters();
        this.isCollapsed = !this.isCollapsed;
    };
    FavouritesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-favourites',
            template: __webpack_require__(/*! ./favourites.component.html */ "./src/app/components/items/favourites/favourites.component.html"),
            styles: [__webpack_require__(/*! ./favourites.component.css */ "./src/app/components/items/favourites/favourites.component.css")]
        }),
        __metadata("design:paramtypes", [_services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__["ServerCallsService"], ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], FavouritesComponent);
    return FavouritesComponent;
}());



/***/ }),

/***/ "./src/app/components/items/item-card-component/item-card-component.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/items/item-card-component/item-card-component.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-top {\r\n    -webkit-transform: scale(1,1);\r\n            transform: scale(1,1);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.card-img-top:hover{\r\n    -webkit-transform: scale(1.2,1.2);\r\n            transform: scale(1.2,1.2);\r\n    transition-duration: 500ms;\r\n    transition-timing-function: ease-out;\r\n    opacity: 0.7;\r\n    overflow: hidden;\r\n}\r\n\r\n.card-img-top{\r\n    height: 250px;\r\n    width: 300px;\r\n}\r\n\r\n.w100{\r\n  width: 100%;\r\n  margin-bottom: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/items/item-card-component/item-card-component.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/items/item-card-component/item-card-component.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <img *ngIf=\"item.imageUrl\" class=\"card-img-top img-fluid\" src=\"{{ item.imageUrl }}\" alt=\"{{ item.title }} pic\">\n  <img *ngIf=\"!item.imageUrl\" class=\"card-img-top img-fluid\" src=\"http://res.cloudinary.com/abart/image/upload/v1531508096/no-image.jpg\" alt=\"no image\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">{{ item.title }}</h5>\n    <p class=\"card-text\">Shiping Address: {{ item.ShipingAddress }}\n      {{ item.shipingCountry }}\n    </p>\n    <div class=\"btn-toolbar\" role=\"toolbar\" aria-label=\"Toolbar with button groups\">\n        <button type=\"button\" class=\"btn btn-primary w100\" [routerLink]=\"['/item-details/', item.id]\" routerLinkActive=\"router-link-active\" >View Details</button>\n        <button *ngIf=\"!isFav()\" class=\"btn btn-outline-danger w100\" type=\"button\">Remove</button>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/items/item-card-component/item-card-component.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/items/item-card-component/item-card-component.component.ts ***!
  \***************************************************************************************/
/*! exports provided: ItemCardComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemCardComponentComponent", function() { return ItemCardComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemCardComponentComponent = /** @class */ (function () {
    function ItemCardComponentComponent(_auth, snoty, serverCalls) {
        this._auth = _auth;
        this.snoty = snoty;
        this.serverCalls = serverCalls;
    }
    ItemCardComponentComponent.prototype.ngOnInit = function () {
    };
    ItemCardComponentComponent.prototype.addFavorite = function (id) {
        var _this = this;
        if (this._auth.isLoggedin() == true) {
            this.serverCalls.addFavorite(this._auth.getId(), id).subscribe(function (data) { return _this.SuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
        }
        else {
            this.snoty.info('Please login to add items to favorites.', 'Please login');
        }
    };
    ItemCardComponentComponent.prototype.SuccessHandel = function (data) {
        this.snoty.success('Item added to favourites', 'Success');
    };
    ItemCardComponentComponent.prototype.handleErrors = function (error) {
        console.log(error);
        this.snoty.error(error.error, "Error");
    };
    ItemCardComponentComponent.prototype.isFav = function () {
        return this.isHome;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ItemCardComponentComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ItemCardComponentComponent.prototype, "isHome", void 0);
    ItemCardComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-card-component',
            template: __webpack_require__(/*! ./item-card-component.component.html */ "./src/app/components/items/item-card-component/item-card-component.component.html"),
            styles: [__webpack_require__(/*! ./item-card-component.component.css */ "./src/app/components/items/item-card-component/item-card-component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"], _services_server_calls_service__WEBPACK_IMPORTED_MODULE_3__["ServerCallsService"]])
    ], ItemCardComponentComponent);
    return ItemCardComponentComponent;
}());



/***/ }),

/***/ "./src/app/components/items/item-details/item-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/items/item-details/item-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .tab-panel {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n  }\r\n\r\n  .left-panel{\r\n      padding: 10px;\r\n      padding-bottom: 0px;\r\n  }\r\n\r\n  .nav-tabs > li.open, .member-tabset > .nav-tabs > li:hover {\r\n    border-bottom: 4px solid #fbcdcf;\r\n  }\r\n\r\n  .member-tabset > .nav-tabs > li.open > a, .member-tabset > .nav-tabs > li:hover > a {\r\n    border: 0;\r\n    background: none !important;\r\n    color: #333333;\r\n  }\r\n\r\n  .member-tabset > .nav-tabs > li.open > a > i, .member-tabset > .nav-tabs > li:hover > a > i {\r\n    color: #a6a6a6;\r\n  }\r\n\r\n  .member-tabset > .nav-tabs > li.open .dropdown-menu, .member-tabset > .nav-tabs > li:hover .dropdown-menu {\r\n    margin-top: 0px;\r\n  }\r\n\r\n  .member-tabset > .nav-tabs > li.active {\r\n    border-bottom: 4px solid #E95420;\r\n    position: relative;\r\n  }\r\n\r\n  .member-tabset > .nav-tabs > li.active > a {\r\n    border: 0 !important;\r\n    color: #333333;\r\n  }\r\n\r\n  .member-tabset > .nav-tabs > li.active > a > i {\r\n    color: #404040;\r\n  }\r\n\r\n  .member-tabset > .tab-content {\r\n    margin-top: -3px;\r\n    background-color: #fff;\r\n    border: 0;\r\n    border-top: 1px solid #eee;\r\n    padding: 15px 0;\r\n  }\r\n\r\n  .item-main-image {\r\n      max-width: 100%;\r\n  }\r\n\r\n  tab{\r\n    padding: 10px;\r\n  }\r\n\r\n  .tab-panel[_ngcontent-c2] {\r\n    /* border: 1px solid #ddd; */\r\n    padding: 10px;\r\n    border-radius: 4px;\r\n    min-height: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/items/item-details/item-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/items/item-details/item-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"row\">\n\n  </div>\n  <div class=\"row\" style=\"padding-top: 35px;\">\n    <div class=\"col-sm-4\">\n      <div class=\"panel panel-default left-panel\">\n        <div class=\"panel-header\"><h1>{{ item?.title }}</h1></div>\n        <img class=\"item-main-image thumbnail\" src=\"{{item?.imageUrl}}\" alt=\"{{item?.title}}\">\n        <div class=\"panel-body\">\n          <div>\n            <strong>Price:</strong>\n            <p>{{item?.unitPrice | currency:\"USD$\"}}</p>\n          </div>\n          <div>\n            <strong>Shiping Address:</strong>\n            <p>{{item?.shipingAddress}}, {{item?.shipingCountry}}</p>\n          </div>\n          <div>\n            <strong>On Sale Since:</strong>\n            <p>{{item?.createdDate | date }}</p>\n          </div>\n          <div>\n            <strong>Type:</strong>\n            <p *ngIf=\"item?.isService\">Service</p>\n            <p *ngIf=\"!item?.isService\">Tangible</p>\n          </div>\n          <div style=\"padding-bottom: 10px;\">\n            <button *ngIf=\"displayEdit\" class=\"btn btn-primary\" [routerLink]=\"['/item-edit/', item?.id ]\"><i class=\"fas fa-edit\"></i> Edit</button>\n            <button *ngIf=\"!displayEdit\" class=\"btn btn-primary\" (click)=\"cart()\"><i class=\"fas fa-shopping-cart\"></i> Add to cart</button>\n            <br>\n          </div>\n        </div>\n        <div class=\"panel-footer\">\n          <div class=\"btn-group-justified\">\n            <div class=\"btn-group\">\n              <button class=\"btn btn-primary\"><i class=\"fas fa-heart\" (click)=\"addFavorite()\"></i></button>\n            </div>\n            <div class=\"btn-group\">\n              <button class=\"btn btn-success\"><i class=\"fas fa-envelope\"></i></button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-8\">\n\n      <div class=\"tab-panel\">\n        <tabset class=\"member-tabset\">\n          <tab heading=\"About {{item?.title}}\">\n            <h4>Description</h4>\n            <p>{{item?.description}}</p>\n          </tab>\n          <tab heading=\"Images\">\n            <ngx-gallery [options]=\"galleryOptions\" [images]=\"galleryImages\"></ngx-gallery>\n          </tab>\n          <tab heading=\"Reviews\">\n            <p>Reviews will go here</p>\n          </tab>\n        </tabset>\n      </div>\n\n\n    </div>\n        <!-- Button trigger modal -->\n  <button #cartTrig type=\"button\" class=\"btn btn-primary\" style=\"display: none;\" data-toggle=\"modal\" data-target=\"#exampleModal\">\n    Launch demo modal\n  </button>\n\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Quantity</h5>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n        </div>\n        <div class=\"modal-body\">\n            <p>Please select the quantity.<span style=\"color: red\">({{ avilableQuantity }} available)</span></p>\n            <div class=\"input-group mb-3\">\n              <input type=\"number\" value=\"1\" [(ngModel)]=\"quantity\" min=\"1\" max=\"{{ avilableQuantity }}\" class=\"form-control\" placeholder=\"Quantity\" aria-label=\"Quantity\">\n            </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" #closeTrig class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"addToCart()\">Add to cart</button>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/components/items/item-details/item-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/items/item-details/item-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: ItemDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsComponent", function() { return ItemDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-gallery */ "./node_modules/ngx-gallery/bundles/ngx-gallery.umd.js");
/* harmony import */ var ngx_gallery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_gallery__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ItemDetailsComponent = /** @class */ (function () {
    function ItemDetailsComponent(serverCalls, snoty, route, _auth) {
        this.serverCalls = serverCalls;
        this.snoty = snoty;
        this.route = route;
        this._auth = _auth;
        this.displayEdit = false;
        this.userId = 0;
        this.quantity = 1;
    }
    ItemDetailsComponent.prototype.ngOnInit = function () {
        this.loadItemDetails();
        this.galleryOptions = [
            {
                width: '500px',
                height: '500px',
                thumbnailsColumns: 4,
                imageAnimation: ngx_gallery__WEBPACK_IMPORTED_MODULE_4__["NgxGalleryAnimation"].Slide,
                preview: true
            }
        ];
    };
    ItemDetailsComponent.prototype.getImages = function () {
        var imageUrls = [];
        for (var i = 0; i < this.item.photo.length; i++) {
            imageUrls.push({
                small: this.item.photo[i].url,
                medium: this.item.photo[i].url,
                big: this.item.photo[i].url,
            });
        }
        return imageUrls;
    };
    ItemDetailsComponent.prototype.loadItemDetails = function () {
        var _this = this;
        this.serverCalls.getItemDetails(+this.route.snapshot.params['id']).subscribe(function (data) { return _this.SuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
    };
    ItemDetailsComponent.prototype.SuccessHandel = function (data) {
        console.clear();
        this.item = data;
        this.galleryImages = this.getImages();
        this.userId = this._auth.getId();
        if (this.userId == data.userId && this._auth.isLoggedin) {
            this.displayEdit = true;
        }
    };
    ItemDetailsComponent.prototype.handleErrors = function (error) {
        console.log(error);
        this.snoty.error("Failed to load, Please try again later.", "Error");
    };
    ItemDetailsComponent.prototype.cart = function () {
        var _this = this;
        this.serverCalls.getItemQuantity(+this.route.snapshot.params['id']).subscribe(function (data) { return _this.showCart(data); }, function (error) { return _this.handleErrors(error); });
    };
    ItemDetailsComponent.prototype.showCart = function (data) {
        console.log(data);
        this.avilableQuantity = +data;
        var el = this.cartTrig.nativeElement;
        el.click();
    };
    ItemDetailsComponent.prototype.closePopup = function () {
        var el = this.closeTrig.nativeElement;
        el.click();
    };
    ItemDetailsComponent.prototype.addToCart = function () {
        var _this = this;
        this.closePopup();
        this.serverCalls.AddCartItem(this._auth.getId(), +this.route.snapshot.params['id'], +this.quantity).subscribe(function (data) { return _this.addCartSuccess(data); }, function (error) { return _this.handleErrors(error); });
    };
    ItemDetailsComponent.prototype.addCartSuccess = function (data) {
        this.snoty.success("Item added to your cart.", "Success");
    };
    ItemDetailsComponent.prototype.addFavorite = function () {
        var _this = this;
        if (this._auth.isLoggedin() == true) {
            this.serverCalls.addFavorite(this._auth.getId(), this.item.id).subscribe(function (data) { return _this.AddFavSuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
        }
        else {
            this.snoty.info('Please login to add items to favorites.', 'Please login');
        }
    };
    ItemDetailsComponent.prototype.AddFavSuccessHandel = function (data) {
        this.snoty.success('item added to favorites.', 'Success');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('cartTrig'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemDetailsComponent.prototype, "cartTrig", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('closeTrig'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ItemDetailsComponent.prototype, "closeTrig", void 0);
    ItemDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-item-details',
            template: __webpack_require__(/*! ./item-details.component.html */ "./src/app/components/items/item-details/item-details.component.html"),
            styles: [__webpack_require__(/*! ./item-details.component.css */ "./src/app/components/items/item-details/item-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__["ServerCallsService"], ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], ItemDetailsComponent);
    return ItemDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/nav/nav.component.css":
/*!**************************************************!*\
  !*** ./src/app/components/nav/nav.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-dark .dropdown-menu {\r\n    background-color: #007bff !important;\r\n}\r\n\r\n.bg-dark .dropdown-menu .dropdown-item, .bg-dark .dropdown-menu .dropdown-item:focus {\r\n    color: #ffffff !important;\r\n    font-weight: 800 !important;\r\n}\r\n\r\n.bg-dark {\r\n    background-color: #007bff !important;\r\n    font-weight: 800 !important;\r\n}\r\n\r\n.cust-btn{\r\n    border: solid #ffffff !important;\r\n    color: #ffffff !important;\r\n    background-color: #007bff !important;\r\n    border-radius: 5px;\r\n}\r\n\r\n.profile-pic{\r\n    max-height: 50px;\r\n    border: 2px solid white;\r\n    display: inline;\r\n}\r\n\r\n.top-drop{\r\n    cursor: pointer;\r\n    padding-bottom: 0px;\r\n    height: 100%;\r\n}\r\n\r\n.bg-dark[_ngcontent-c1] {\r\n    z-index: 200 !important;\r\n}\r\n\r\n.cart-badge{\r\n    padding-left: 6px;\r\n    padding-right: 6px;\r\n    margin-right: 6px;\r\n    border-radius: 5px;\r\n    padding-top: 4px;\r\n}\r\n\r\n.bg-dark[_ngcontent-c1] {\r\n  background-color: #007bff !important;\r\n  font-weight: 800 !important;\r\n  min-height: 65px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.html":
/*!***************************************************!*\
  !*** ./src/app/components/nav/nav.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <nav class=\"navbar navbar-expand-md navbar-dark fixed-top bg-dark navbar-fixed-top\">\n        <a class=\"navbar-brand\" href=\"#\">Shop</a>\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\" aria-controls=\"navbarCollapse\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"toggleMenu()\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\" [ngbCollapse]=\"isCollapsed\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" routerLinkActive=\"active\" >\n              <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"isLoggedin()\">\n              <a class=\"nav-link\" [routerLink]=\"['/perchase-history']\">Purchase History</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"isLoggedin()\">\n              <a class=\"nav-link\"  [routerLink]=\"['/favourites']\">Favourites</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"isLoggedin()\">\n              <a class=\"nav-link\"  [routerLink]=\"['/messages']\">Messages</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\" *ngIf=\"!isLoggedin()\">\n              <a class=\"nav-link\"  [routerLink]=\"['/register']\">Register</a>\n            </li>\n          </ul>\n          <div class=\"btn-group\" *ngIf=\"isLoggedin()\">\n            <button (click)=\"goToCart()\" type=\"button\" class=\"btn btn-primary\">\n                <i class=\"fa fa-shopping-cart\" style=\"font-size: large; margin-right: 4px;\"> </i> <span class=\"cart-badge badge badge-light\" *ngIf=\"cart.cartCount && isLoggedin()\">{{ cart.cartCount }}</span>\n            </button>\n          </div>\n          <ul class=\"navbar-nav\" *ngIf=\"isLoggedin()\">\n            <li>\n              <img *ngIf=\"imageUrl\" class=\"profile-pic\" src=\"{{ imageUrl }}\">\n              <img *ngIf=\"!imageUrl\" class=\"profile-pic\" src=\"http://res.cloudinary.com/abart/image/upload/v1529393623/user.png\">\n            </li>\n            <li dropdown class=\"nav-item dropdown\">\n                <a (click)=\"false\" class=\"nav-link dropdown-toggle active top-drop\" dropdownToggle id=\"dropdown04\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"  style=\"cursor: pointer;\">Welcome {{ getUser() | titlecase }}</a>\n                <div class=\"dropdown-menu show\" *dropdownMenu aria-labelledby=\"dropdown04\">\n                  <a class=\"dropdown-item\" [routerLink]=\"['/user-details']\" routerLinkActive=\"router-link-active\" >User Details</a>\n                  <a class=\"dropdown-item\" [routerLink]=\"['/add-item']\" routerLinkActive=\"router-link-active\" >Add Product</a>\n                  <a class=\"dropdown-item\" style=\"cursor: pointer;\" (click)=\"logout()\">Logout</a>\n                </div>\n            </li>\n          </ul>\n          <form #loginForm=\"ngForm\" class=\"form-inline mt-2 mt-md-0\" (submit)=\"login()\" *ngIf=\"!isLoggedin()\">\n            <input class=\"form-control mr-sm-2\" name=\"username\" type=\"text\" placeholder=\"Username\" required aria-label=\"Username\" [(ngModel)]=\"formData.username\">\n            <input class=\"form-control mr-sm-2\" name=\"password\" type=\"password\" placeholder=\"Password\" required aria-label=\"Password\" [(ngModel)]=\"formData.password\">\n            <button class=\"btn btn-outline cust-btn my-2 my-sm-0\" type=\"submit\" [disabled]=\"!loginForm.valid\">Login</button>\n          </form>\n        </div>\n      </nav>\n\n"

/***/ }),

/***/ "./src/app/components/nav/nav.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/nav/nav.component.ts ***!
  \*************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavComponent = /** @class */ (function () {
    function NavComponent(_servercalls, auth, router, _auth, snoty, cart) {
        this._servercalls = _servercalls;
        this.auth = auth;
        this.router = router;
        this._auth = _auth;
        this.snoty = snoty;
        this.cart = cart;
        this.formData = {
            username: null,
            password: null
        };
        this.isCollapsed = true;
        this.isMenuCollapsed = false;
    }
    NavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._auth.currentImageUrl.subscribe(function (photoUrl) { return _this.imageUrl = photoUrl; });
        console.log(this.imageUrl);
    };
    NavComponent.prototype.toggleMenu = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    NavComponent.prototype.toggleSelect = function () {
        this.isMenuCollapsed = !this.isMenuCollapsed;
    };
    NavComponent.prototype.login = function () {
        var _this = this;
        console.log(this.formData);
        this._servercalls.login(this.formData).subscribe(function (data) { return _this.setToken(data); }, function (error) { return _this.handleErrors(error); });
    };
    NavComponent.prototype.handleErrors = function (error) {
        if (error.error == "Bad Credentials") {
            this.snoty.error('Username or Password incorrect!', 'Bad Credentials');
        }
        else {
            this.snoty.error('Something went wrong!', 'Oops');
            console.log(error.error);
        }
    };
    NavComponent.prototype.logout = function () {
        this.auth.remove();
        this.auth.user = null;
        localStorage.removeItem('user');
        console.log("Logged out.");
        this.router.navigateByUrl('/home');
    };
    NavComponent.prototype.isLoggedin = function () {
        return this.auth.isLoggedin();
    };
    NavComponent.prototype.setToken = function (data) {
        console.log(data);
        this._auth.set(data);
        this.cart.getCartCount();
        this.router.navigateByUrl('/home');
    };
    NavComponent.prototype.goToCart = function () {
        this.router.navigateByUrl('/cart');
    };
    NavComponent.prototype.getUser = function () {
        return this._auth.getUsername();
    };
    NavComponent.prototype.getPic = function () {
        return this._auth.user.photoUrl;
    };
    NavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-nav',
            template: __webpack_require__(/*! ./nav.component.html */ "./src/app/components/nav/nav.component.html"),
            styles: [__webpack_require__(/*! ./nav.component.css */ "./src/app/components/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [_services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__["ServerCallsService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"], _services_cart_service__WEBPACK_IMPORTED_MODULE_5__["CartService"]])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/components/users/messages-thread/messages-thread.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/users/messages-thread/messages-thread.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-h{\r\n    margin-top: 15px;\r\n}\r\n\r\n.w100{\r\n    width: 100% !important;\r\n}\r\n\r\n.chat {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.chat li {\r\n    margin-bottom: 10px;\r\n    padding-bottom: 10px;\r\n    border-bottom: 1px dotted #b3a9a9;\r\n}\r\n\r\n.img-circle {\r\n    height: 50px;\r\n    width: 50px;\r\n}\r\n\r\n.left-marg{\r\n    margin-left: 15px !important;\r\n}\r\n\r\n.right-marg{\r\n    margin-right: 15px !important;\r\n}\r\n\r\n.card-body {\r\n    overflow-y: scroll;\r\n    height: 500px;\r\n}"

/***/ }),

/***/ "./src/app/components/users/messages-thread/messages-thread.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/users/messages-thread/messages-thread.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"main-h\">Message about Item: {{ itemTitle }}</h3>\n<hr>\n<div class=\"card\">\n    <div class=\"card-body\">\n      <div *ngIf=\"messages?.length == 0\">\n          <p>No messages yet.</p>\n      </div>\n\n      <ul class=\"chat\">\n          <li *ngFor=\"let message of messages\">\n                <div *ngIf=\"message.senderId == userId\">\n                    <span class=\"chat-img float-left\">\n                        <img *ngIf=\"message.senderPhotoUrl\" src=\"{{message.senderPhotoUrl}}\" class=\"img-circle right-marg\">\n                        <img *ngIf=\"!message.senderPhotoUrl\" src=\"http://res.cloudinary.com/abart/image/upload/v1529393623/user.png\" class=\"img-circle right-marg\">\n                    </span>\n                    <div class=\"chat-body\">\n                        <div class=\"header\">\n                            <strong class=\"primary-font float-left\">{{message.senderUsername}}</strong>\n                            <small class=\"text-muted float-right\">\n                                <span class=\"fa fa-clock-o\">&nbsp;{{message.messageSent | date:'medium'}}</span>\n                            </small><br>\n                        </div>\n                        <p>{{message.content}}</p>\n                    </div>\n                </div>\n\n                <div *ngIf=\"message.senderId != userId\" style=\"padding-bottom: 20px !important;\">\n                    <span class=\"chat-img float-right\">\n                        <img *ngIf=\"message.senderPhotoUrl\" src=\"{{message.senderPhotoUrl}}\" class=\"img-circle left-marg\">\n                        <img *ngIf=\"!message.senderPhotoUrl\" src=\"http://res.cloudinary.com/abart/image/upload/v1529393623/user.png\" class=\"img-circle left-marg\">\n                    </span>\n                    <div class=\"chat-body\">\n                        <div class=\"header\">\n                            <small class=\"text-muted\">\n                                <span class=\"fa fa-clock-o\">{{message.messageSent | date:'medium'}}</span>\n                                <span *ngIf=\"!message.isRead\" class=\"text-muted text-danger\">(Unread)</span>\n                                <span *ngIf=\"message.isRead\" class=\"text-muted text-success\">(Read {{message.dateRead | date:'medium'}})</span>\n                            </small>\n                            <strong class=\"primary-font float-right\">&nbsp;{{message.senderUsername}}</strong><br>\n                        </div>\n                        <div class=\"pull-right\" style=\"padding-bottom: 15px;\">\n                            <p>{{message.content}}</p>\n                        </div>\n                        <br>\n                    </div>\n                </div>\n\n          </li>\n      </ul>\n    </div>\n    <div class=\"card-footer bg-transparent border-primary\">\n        <form #messageForm=\"ngForm\" (submit)=\"messageForm.valid && sendMessage()\">\n            <div class=\"table-cell fill-width\">\n                <div class=\"input-group mb-3\">\n                    <input type=\"text\" class=\"form-control input-sm\" name=\"content\" [(ngModel)]=\"newMessage.content\"\n                     required placeholder=\"Enter message here\" aria-label=\"Message here\" autocomplete=\"off\" aria-describedby=\"basic-addon2\">\n                    <div class=\"input-group-append\">\n                      <button class=\"btn btn-primary btn-sm\" [disabled]=\"!messageForm.valid\">Send</button>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/components/users/messages-thread/messages-thread.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/users/messages-thread/messages-thread.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MessagesThreadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesThreadComponent", function() { return MessagesThreadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MessagesThreadComponent = /** @class */ (function () {
    function MessagesThreadComponent(serverCalls, snoty, route, _auth) {
        this.serverCalls = serverCalls;
        this.snoty = snoty;
        this.route = route;
        this._auth = _auth;
        this.newMessage = {};
    }
    MessagesThreadComponent.prototype.ngOnInit = function () {
        this.userId = this._auth.getId();
        this.otherUser = +this.route.snapshot.params['rId'];
        this.aboutItem = +this.route.snapshot.params['iId'];
        this.loadMessageThread();
    };
    MessagesThreadComponent.prototype.loadMessageThread = function () {
        var _this = this;
        this.serverCalls.getThread(this._auth.getId(), +this.route.snapshot.params['rId'], +this.route.snapshot.params['iId'])
            .do(function (data) {
            underscore__WEBPACK_IMPORTED_MODULE_5__["each"](data, function (message) {
                if (message.isRead == false && message.recipientId == _this.userId) {
                    _this.serverCalls.markMessageAsRead(_this.userId, message.id);
                }
            });
        })
            .subscribe(function (data) { return _this.SuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
    };
    MessagesThreadComponent.prototype.SuccessHandel = function (data) {
        console.clear();
        this.messages = data;
        console.log(data);
        this.itemTitle = data[0].aboutItem.title;
    };
    MessagesThreadComponent.prototype.handleErrors = function (error) {
        console.log(error);
        this.snoty.error("Failed to load, Please try again later.", "Error");
    };
    MessagesThreadComponent.prototype.sendMessage = function () {
        var _this = this;
        this.newMessage.senderId = this.userId;
        this.newMessage.recipientId = this.otherUser;
        this.newMessage.aboutItemId = this.aboutItem;
        this.serverCalls.sendMessage(this.userId, this.newMessage).subscribe(function (data) { return _this.sendSuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
    };
    MessagesThreadComponent.prototype.sendSuccessHandel = function (data) {
        this.messages.unshift(data);
        console.log(data);
        this.newMessage.content = '';
    };
    MessagesThreadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages-thread',
            template: __webpack_require__(/*! ./messages-thread.component.html */ "./src/app/components/users/messages-thread/messages-thread.component.html"),
            styles: [__webpack_require__(/*! ./messages-thread.component.css */ "./src/app/components/users/messages-thread/messages-thread.component.css")]
        }),
        __metadata("design:paramtypes", [_services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__["ServerCallsService"], ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], MessagesThreadComponent);
    return MessagesThreadComponent;
}());



/***/ }),

/***/ "./src/app/components/users/messages/messages.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/users/messages/messages.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-button-toggle-group{\r\n    margin-top: 15px !important;\r\n    margin-left: 5px !important;\r\n}\r\n\r\n.mat-button-toggle-checked {\r\n    background-color: #007bff;\r\n    color: rgb(255, 255, 255);\r\n}\r\n\r\n.no-messages{\r\n    margin: 30px;\r\n}\r\n\r\ntable {\r\n    margin-top: 15px;\r\n}\r\n\r\n.img-circle {\r\n    max-height: 50px;\r\n    max-width: 50px;\r\n    border-radius: 150px;\r\n    margin-right: 5px;\r\n}\r\n\r\n.table > tbody > tr > td {\r\n    vertical-align: middle;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/users/messages/messages.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/messages/messages.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<div class=\"row marg-10\">\n  <mat-button-toggle-group [(ngModel)]=\"messageContainer\" #group=\"matButtonToggleGroup\">\n    <mat-button-toggle value=\"unread\" (change)=\"loadItems()\">\n      Unread\n    </mat-button-toggle>\n    <mat-button-toggle value=\"inbox\" (change)=\"loadItems()\">\n      Inbox\n    </mat-button-toggle>\n    <mat-button-toggle value=\"outbox\" (change)=\"loadItems()\">\n      Outbox\n    </mat-button-toggle>\n  </mat-button-toggle-group>\n</div>\n<div class=\"row no-messages\" *ngIf=\"messages?.length == 0\">\n  <h3>No Messages</h3>\n</div>\n\n<div class=\"row\" *ngIf=\"messages?.length > 0\">\n  <table class=\"table table-hover\" style=\"cursor: pointer\">\n    <tr>\n      <th style=\"width: 40%\">Message</th>\n      <th style=\"width: 20%\">From / To</th>\n      <th style=\"width: 20%\">Sent / Received</th>\n      <th style=\"width: 20%\"></th>\n    </tr>\n    <tr *ngFor=\"let message of messages\" [routerLink]=\"['/msg_thread', messageContainer == 'outbox' ? message.recipientId : message.senderId, message.aboutItem.id]\">\n      <td>{{message?.content}}</td>\n      <td>\n        <div *ngIf=\"messageContainer != 'outbox'\">\n          <img *ngIf=\"message.senderPhotoUrl\" src=\"{{message?.senderPhotoUrl}}\" class=\"img-circle\">\n          <img *ngIf=\"!message.senderPhotoUrl\" src=\"http://res.cloudinary.com/abart/image/upload/v1529393623/user.png\" class=\"img-circle\">\n          <strong>{{message?.senderUsername}}</strong>\n        </div>\n        <div *ngIf=\"messageContainer == 'outbox'\">\n          <img *ngIf=\"message.recipientPhotoUrl\" src=\"{{message?.recipientPhotoUrl}}\" class=\"img-circle\">\n          <img *ngIf=\"!message.recipientPhotoUrl\" src=\"http://res.cloudinary.com/abart/image/upload/v1529393623/user.png\" class=\"img-circle\">\n          <strong>{{message?.recipientUsername}}</strong>\n        </div>\n      </td>\n      <td>{{message?.messageSent | date:'medium'}}</td>\n      <td>\n        <button class=\"btn btn-danger\" (click)=\"$event.stopPropagation()\" (click)=\"deleteMessage(message.id)\">Delete</button>\n      </td>\n    </tr>\n  </table>\n\n  <div class=\"text-center\">\n      <pagination [boundaryLinks]=\"true\" [totalItems]=\"pagination.totalItems\" [itemsPerPage]=\"pagination.itemsPerPage\" (pageChanged)=\"pageChanged($event)\"\n        [(ngModel)]=\"pagination.currentPage\" class=\"pagination-sm\" previousText=\"&lsaquo;\" nextText=\"&rsaquo;\" firstText=\"&laquo;\"\n        lastText=\"&raquo;\"></pagination>\n    </div>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/users/messages/messages.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/messages/messages.component.ts ***!
  \*****************************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! underscore */ "./node_modules/underscore/underscore.js");
/* harmony import */ var underscore__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(underscore__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(serverCalls, snoty, _auth) {
        this.serverCalls = serverCalls;
        this.snoty = snoty;
        this._auth = _auth;
        this.currentPage = 1;
        this.itemsPerPage = 6;
        this.messageContainer = 'unread';
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.messageContainer = 'unread';
        this.loadItems();
    };
    MessagesComponent.prototype.loadItems = function () {
        var _this = this;
        this.serverCalls.getMessages(this._auth.getId(), this.currentPage, this.itemsPerPage, this.messageContainer).subscribe(function (res) {
            _this.resBody = res.body;
            _this.SuccessHandel(_this.resBody);
            console.log(res.headers.get('Pagination'));
            if (res.headers.get('Pagination') != null) {
                var paginHeaders = res.headers.get('Pagination');
                _this.pagination = JSON.parse(paginHeaders);
                console.log(_this.pagination);
            }
        }, function (err) {
            _this.handleErrors(err);
        });
    };
    MessagesComponent.prototype.SuccessHandel = function (data) {
        this.messages = [];
        this.messages = data;
        console.clear();
        console.log(data[0].aboutItem.user.id);
    };
    MessagesComponent.prototype.handleErrors = function (error) {
        console.log(error);
        this.snoty.error("Something went wrong, Please try again later.", "Error");
    };
    MessagesComponent.prototype.pageChanged = function (event) {
        this.currentPage = event.page;
        this.loadItems();
    };
    MessagesComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.serverCalls.delMessage(this._auth.getId(), +id).subscribe(function (data) {
            _this.messages.splice(underscore__WEBPACK_IMPORTED_MODULE_4__["findIndex"](_this.messages, { id: id }), 1);
            _this.snoty.success("Message deleted.", "Success");
            _this.loadItems();
        }, function (error) { return _this.handleErrors(error); });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages-component',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/components/users/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/components/users/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__["ServerCallsService"], ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/components/users/password/request-reset/request-reset.component.css":
/*!*************************************************************************************!*\
  !*** ./src/app/components/users/password/request-reset/request-reset.component.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/password/request-reset/request-reset.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/users/password/request-reset/request-reset.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  request-reset works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/users/password/request-reset/request-reset.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/users/password/request-reset/request-reset.component.ts ***!
  \************************************************************************************/
/*! exports provided: RequestResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResetComponent", function() { return RequestResetComponent; });
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

var RequestResetComponent = /** @class */ (function () {
    function RequestResetComponent() {
    }
    RequestResetComponent.prototype.ngOnInit = function () {
    };
    RequestResetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-reset',
            template: __webpack_require__(/*! ./request-reset.component.html */ "./src/app/components/users/password/request-reset/request-reset.component.html"),
            styles: [__webpack_require__(/*! ./request-reset.component.css */ "./src/app/components/users/password/request-reset/request-reset.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestResetComponent);
    return RequestResetComponent;
}());



/***/ }),

/***/ "./src/app/components/users/password/request-response/request-response.component.css":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/users/password/request-response/request-response.component.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/password/request-response/request-response.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/components/users/password/request-response/request-response.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  request-response works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/users/password/request-response/request-response.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/components/users/password/request-response/request-response.component.ts ***!
  \******************************************************************************************/
/*! exports provided: RequestResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestResponseComponent", function() { return RequestResponseComponent; });
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

var RequestResponseComponent = /** @class */ (function () {
    function RequestResponseComponent() {
    }
    RequestResponseComponent.prototype.ngOnInit = function () {
    };
    RequestResponseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-request-response',
            template: __webpack_require__(/*! ./request-response.component.html */ "./src/app/components/users/password/request-response/request-response.component.html"),
            styles: [__webpack_require__(/*! ./request-response.component.css */ "./src/app/components/users/password/request-response/request-response.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RequestResponseComponent);
    return RequestResponseComponent;
}());



/***/ }),

/***/ "./src/app/components/users/perchase-history/perchase-history.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/components/users/perchase-history/perchase-history.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/perchase-history/perchase-history.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/users/perchase-history/perchase-history.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  perchase-history works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/users/perchase-history/perchase-history.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/users/perchase-history/perchase-history.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PerchaseHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerchaseHistoryComponent", function() { return PerchaseHistoryComponent; });
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

var PerchaseHistoryComponent = /** @class */ (function () {
    function PerchaseHistoryComponent() {
    }
    PerchaseHistoryComponent.prototype.ngOnInit = function () {
    };
    PerchaseHistoryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-perchase-history',
            template: __webpack_require__(/*! ./perchase-history.component.html */ "./src/app/components/users/perchase-history/perchase-history.component.html"),
            styles: [__webpack_require__(/*! ./perchase-history.component.css */ "./src/app/components/users/perchase-history/perchase-history.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PerchaseHistoryComponent);
    return PerchaseHistoryComponent;
}());



/***/ }),

/***/ "./src/app/components/users/register/register.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/users/register/register.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\r\n    width: 300px;\r\n}\r\n\r\n.main-div{\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.navbar{\r\n    display: none;\r\n}\r\n\r\n.as{\r\n    font-size: 14px;\r\n    font-weight: 300;\r\n    line-height: 22px;\r\n    color: #999;\r\n    width: 100%;\r\n    text-align: center;\r\n    padding-bottom: 5px;\r\n}"

/***/ }),

/***/ "./src/app/components/users/register/register.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/users/register/register.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<div class=\"main-div\">\n    \n    <mat-card class=\"z-depth center\">\n        <mat-card-title>Signup</mat-card-title>\n        <mat-card-content>\n                <form #signupForm=ngForm (ngSubmit)=\"onSubmit()\" fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\">\n                    <mat-form-field>\n                        <input matInput placeholder=\"Username\" type=\"text\" name=\"username\" [(ngModel)]=\"form.username\" required (blur)=\"validateUsenameFire()\">\n                    </mat-form-field>\n                    <mat-error [hidden]=\"!usernameError\">\n                        <small>{{ usernameError }}</small>\n                    </mat-error>\n                    <mat-form-field>\n                        <input matInput placeholder=\"Email\" type=\"email\" name=\"email\" [(ngModel)]=\"form.email\" required (blur)=\"validateEmailFire()\">\n                    </mat-form-field>\n                    <mat-error [hidden]=\"!invalidEmail\">\n                        <small>Please enter a valid email address</small>\n                      </mat-error>\n                      <mat-error [hidden]=\"!emailError\">\n                        <small>{{ emailError }}</small>\n                      </mat-error>\n                    <mat-form-field>\n                         <input matInput placeholder=\"Password\" type=\"password\" name=\"password\" [(ngModel)]=\"form.password\" required>\n                    </mat-form-field>\n                    <mat-form-field>\n                            <input matInput placeholder=\"Retype Password\" type=\"password\" name=\"password_confirmation\" [(ngModel)]=\"password_confirmation\" required>\n                    </mat-form-field>\n                    <mat-checkbox>Agree to our <a class=\"\" routerLink=\"/signin\">Terms & Condition</a></mat-checkbox>\n                    <div class=\"alert alert-danger\" [hidden]=\"!error\">{{ error }}</div>\n                    <span><button mat-raised-button type=\"submit\" [disabled]=\"!signupForm.valid\">Signup</button></span>\n                </form>\n        </mat-card-content>\t\n        <mat-card-footer>\n            <div class=\"as\">Forgot password? Reset <a class=\"badge badge-secondary\" routerLink=\"/signin\">here</a></div>\n        </mat-card-footer>\n    </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/components/users/register/register.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/users/register/register.component.ts ***!
  \*****************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(servercalls, snoty) {
        this.servercalls = servercalls;
        this.snoty = snoty;
        this.password_confirmation = null;
        this.form = {
            username: '',
            email: '',
            password: ''
        };
        this.error = null;
        this.emailError = null;
        this.invalidEmail = null;
        this.usernameError = null;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        if (this.password_confirmation == this.form.password) {
            this.servercalls.register(this.form).subscribe(function (data) { return _this.signupSuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
        }
        else {
            this.snoty.error("Password & Password Confirmation doesn't match.", "Error");
        }
    };
    RegisterComponent.prototype.validateUsenameFire = function () {
        if (this.usernameError) {
            this.usernameError = null;
        }
    };
    RegisterComponent.prototype.validateEmailFire = function () {
        console.log(this.validateEmail(this.form.email));
        if (this.validateEmail(this.form.email) == false) {
            console.log("inside if");
            this.invalidEmail = true;
        }
        else {
            this.invalidEmail = false;
        }
        if (this.emailError) {
            this.emailError = null;
        }
    };
    RegisterComponent.prototype.validateEmail = function (email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    RegisterComponent.prototype.handleErrors = function (error) {
        console.log(error.error.hasOwnProperty("Email"));
        if (error.error.hasOwnProperty("Email")) {
            this.emailError = error.error['Email'][0];
        }
        else {
            this.emailError = null;
        }
        if (error.error.hasOwnProperty("Username")) {
            this.usernameError = error.error["Username"][0];
        }
        else {
            this.usernameError = null;
        }
        console.log(error.error['Email'][0]);
        this.snoty.error("Registration failed.", "Error");
    };
    RegisterComponent.prototype.signupSuccessHandel = function (data) {
        //this.token.handel(data.access_token);
        //this.router.navigateByUrl('/userhome');
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/users/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/users/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_services_server_calls_service__WEBPACK_IMPORTED_MODULE_1__["ServerCallsService"], ng_snotify__WEBPACK_IMPORTED_MODULE_2__["SnotifyService"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/users/user-details/user-details.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/users/user-details/user-details.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\r\n    width: 100%;\r\n  }"

/***/ }),

/***/ "./src/app/components/users/user-details/user-details.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/users/user-details/user-details.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<h1>User details</h1>\n<div class=\"card\">\n  <div class=\"card-body\">\n    <table class=\"table table-striped\">\n      <thead>\n        <tr>\n          <th scope=\"col\" style=\"width: 50%;\"></th>\n          <th scope=\"col\"></th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>Email</td>\n          <td>\n            {{ user?.email }}\n          </td>\n        </tr>\n        <tr>\n          <td>Username</td>\n          <td>{{ user?.username }}</td>\n        </tr>\n        <tr>\n          <td>Password</td>\n          <td>\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Change password type here\" type=\"password\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>Retype-Password</td>\n          <td>\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Retype-password\" type=\"password\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>Address</td>\n          <td>\n            <mat-form-field class=\"full-width\">\n              <textarea matInput placeholder=\"Address\" [(ngModel)]=\"user.address\"></textarea>\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>Country</td>\n          <td>\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Country\" type=\"text\" [(ngModel)]=\"user.country\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>Postal Code</td>\n          <td>\n            <mat-form-field class=\"full-width\">\n              <input matInput placeholder=\"Postal Code\" type=\"text\" [(ngModel)]=\"user.postalCode\">\n            </mat-form-field>\n          </td>\n        </tr>\n        <tr>\n          <td>Profile Pic</td>\n          <td><input type=\"file\" ng2FileSelect [uploader]=\"uploader\" /></td>\n        </tr>\n        <tr *ngIf=\"uploader?.queue?.length\">\n          <td>-</td>\n          <td>\n            <div>\n              <div>\n                Queue progress:\n                <div class=\"progress\" style=\"\">\n                  <div class=\"progress-bar\" role=\"progressbar\" [ngStyle]=\"{ 'width': uploader.progress + '%' }\"></div>\n                </div>\n              </div>\n              <button type=\"button\" class=\"btn btn-success btn-s\" (click)=\"uploader.uploadAll()\" [disabled]=\"!uploader.getNotUploadedItems().length\">\n                <span class=\"glyphicon glyphicon-upload\"></span> Upload\n              </button>\n              <button type=\"button\" class=\"btn btn-warning btn-s\" (click)=\"uploader.cancelAll()\" [disabled]=\"!uploader.isUploading\">\n                <span class=\"glyphicon glyphicon-ban-circle\"></span> Cancel\n              </button>\n              <button type=\"button\" class=\"btn btn-danger btn-s\" (click)=\"uploader.clearQueue()\" [disabled]=\"!uploader.queue.length\">\n                <span class=\"glyphicon glyphicon-trash\"></span> Remove\n              </button>\n            </div>\n          </td>\n        </tr>\n        <tr>\n          <td>Joined</td>\n          <td>{{ user.joined | date }}</td>\n        </tr>\n      </tbody>\n    </table>\n    <a class=\"btn btn-primary pull-right\">Save</a>\n  </div>\n  <div class=\"\">\n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/users/user-details/user-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/users/user-details/user-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: UserDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailsComponent", function() { return UserDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_base_info_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/base-info.service */ "./src/app/services/base-info.service.ts");
/* harmony import */ var _services_server_calls_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserDetailsComponent = /** @class */ (function () {
    function UserDetailsComponent(baseInfo, serverCall, snoty, _auth) {
        this.baseInfo = baseInfo;
        this.serverCall = serverCall;
        this.snoty = snoty;
        this._auth = _auth;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({});
        this.baseUrl = this.baseInfo.serverUrl();
        this.getItemImageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    UserDetailsComponent.prototype.ngOnInit = function () {
        this.getUserDetails();
    };
    UserDetailsComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.serverCall.getUserDetails().subscribe(function (data) { return _this.SuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
    };
    UserDetailsComponent.prototype.handleErrors = function (error) {
        this.snoty.error("Registration failed.", "Error");
    };
    UserDetailsComponent.prototype.SuccessHandel = function (data) {
        console.log(data);
        console.clear();
        this.user = data;
        this.initializeUploader();
    };
    UserDetailsComponent.prototype.initializeUploader = function () {
        var _this = this;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_4__["FileUploader"]({
            url: this.baseUrl + 'users/' + this.user.id + '/images',
            authToken: 'Bearer ' + localStorage.getItem('token'),
            isHTML5: true,
            allowedFileType: ['image'],
            autoUpload: false,
            removeAfterUpload: true,
            maxFileSize: 10 * 1024 * 1024
        });
        this.uploader.onSuccessItem = function (item, response, status, headers) {
            if (response) {
                var res = JSON.parse(response);
                _this._auth.changeUserImage(res.url);
                _this._auth.user.photoUrl = res.url;
                localStorage.setItem('user', JSON.stringify(_this._auth.user));
            }
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], UserDetailsComponent.prototype, "getItemImageChange", void 0);
    UserDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-details',
            template: __webpack_require__(/*! ./user-details.component.html */ "./src/app/components/users/user-details/user-details.component.html"),
            styles: [__webpack_require__(/*! ./user-details.component.css */ "./src/app/components/users/user-details/user-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_base_info_service__WEBPACK_IMPORTED_MODULE_1__["BaseInfoService"], _services_server_calls_service__WEBPACK_IMPORTED_MODULE_2__["ServerCallsService"], ng_snotify__WEBPACK_IMPORTED_MODULE_3__["SnotifyService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], UserDetailsComponent);
    return UserDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/users/user-list-component/user-list-component.component.css":
/*!****************************************************************************************!*\
  !*** ./src/app/components/users/user-list-component/user-list-component.component.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/users/user-list-component/user-list-component.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/components/users/user-list-component/user-list-component.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  user-list-component works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/users/user-list-component/user-list-component.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/components/users/user-list-component/user-list-component.component.ts ***!
  \***************************************************************************************/
/*! exports provided: UserListComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponentComponent", function() { return UserListComponentComponent; });
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

var UserListComponentComponent = /** @class */ (function () {
    function UserListComponentComponent() {
    }
    UserListComponentComponent.prototype.ngOnInit = function () {
    };
    UserListComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list-component',
            template: __webpack_require__(/*! ./user-list-component.component.html */ "./src/app/components/users/user-list-component/user-list-component.component.html"),
            styles: [__webpack_require__(/*! ./user-list-component.component.css */ "./src/app/components/users/user-list-component/user-list-component.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserListComponentComponent);
    return UserListComponentComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm5/divider.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/esm5/radio.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_1__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_12__["MatTooltipModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_14__["MatRadioModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_17__["MatDialogModule"]]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/services/after-login.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/after-login.service.ts ***!
  \*************************************************/
/*! exports provided: AfterLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterLoginService", function() { return AfterLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart.service */ "./src/app/services/cart.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AfterLoginService = /** @class */ (function () {
    function AfterLoginService(_auth, router, cart) {
        this._auth = _auth;
        this.router = router;
        this.cart = cart;
    }
    AfterLoginService.prototype.canActivate = function (route, state) {
        var isUserLoggedIn = this._auth.isLoggedin();
        this.cart.getCartCount();
        if (!isUserLoggedIn) {
            this.router.navigate(['/home']);
        }
        return isUserLoggedIn;
    };
    AfterLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]])
    ], AfterLoginService);
    return AfterLoginService;
}());



/***/ }),

/***/ "./src/app/services/alertify.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/alertify.service.ts ***!
  \**********************************************/
/*! exports provided: AlertifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlertifyService", function() { return AlertifyService; });
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

var AlertifyService = /** @class */ (function () {
    function AlertifyService() {
    }
    AlertifyService.prototype.confirm = function (message, okCallback) {
        alertify.confirm(message, function (e) {
            if (e) {
                okCallback();
            }
            else {
            }
        });
    };
    AlertifyService.prototype.success = function (message) {
        alertify.success(message);
    };
    AlertifyService.prototype.warning = function (message) {
        alertify.warning(message);
    };
    AlertifyService.prototype.error = function (message) {
        alertify.error(message);
    };
    AlertifyService.prototype.message = function (message) {
        alertify.message(message);
    };
    AlertifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AlertifyService);
    return AlertifyService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/BehaviorSubject */ "./node_modules/rxjs-compat/_esm5/BehaviorSubject.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = /** @class */ (function () {
    function AuthService() {
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_1__["JwtHelper"]();
        this.imageUrl = new rxjs_BehaviorSubject__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('../../assets/user.png');
        this.currentImageUrl = this.imageUrl.asObservable();
    }
    AuthService.prototype.changeUserImage = function (url) {
        this.imageUrl.next(url);
    };
    AuthService.prototype.set = function (token) {
        this.token = token.tokenString;
        localStorage.setItem('token', token.tokenString);
        this.user = token.user;
        localStorage.setItem('user', JSON.stringify(token.user));
        this.decodedToken = this.jwtHelper.decodeToken(token.tokenString);
        this.changeUserImage(this.user.photoUrl);
    };
    AuthService.prototype.get = function () {
        return localStorage.getItem('token');
    };
    AuthService.prototype.remove = function () {
        this.token = null;
        localStorage.removeItem("token");
    };
    AuthService.prototype.isLoggedin = function () {
        return Object(angular2_jwt__WEBPACK_IMPORTED_MODULE_1__["tokenNotExpired"])('token');
    };
    AuthService.prototype.getUsername = function () {
        return this.decodedToken.unique_name;
    };
    AuthService.prototype.getId = function () {
        return this.decodedToken.nameid;
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/base-info.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/base-info.service.ts ***!
  \***********************************************/
/*! exports provided: BaseInfoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseInfoService", function() { return BaseInfoService; });
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

var BaseInfoService = /** @class */ (function () {
    function BaseInfoService() {
    }
    BaseInfoService.prototype.baseUrl = function () {
        return "http://localhost:4200/";
    };
    BaseInfoService.prototype.serverUrl = function () {
        return "http://localhost:49523/api/";
    };
    BaseInfoService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], BaseInfoService);
    return BaseInfoService;
}());



/***/ }),

/***/ "./src/app/services/before-login.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/before-login.service.ts ***!
  \**************************************************/
/*! exports provided: BeforeLoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeforeLoginService", function() { return BeforeLoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeforeLoginService = /** @class */ (function () {
    function BeforeLoginService(_auth, router) {
        this._auth = _auth;
        this.router = router;
    }
    BeforeLoginService.prototype.canActivate = function (route, state) {
        var isUserLoggedIn = this._auth.isLoggedin();
        if (isUserLoggedIn) {
            this.router.navigate(['/home']);
        }
        return !isUserLoggedIn;
    };
    BeforeLoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], BeforeLoginService);
    return BeforeLoginService;
}());



/***/ }),

/***/ "./src/app/services/cart.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _server_calls_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CartService = /** @class */ (function () {
    function CartService(servercalls, _auth) {
        this.servercalls = servercalls;
        this._auth = _auth;
        this.cartCount = 0;
    }
    CartService.prototype.getCartCount = function () {
        var _this = this;
        this.servercalls.getCartCount(+this._auth.getId()).subscribe(function (data) { return _this.SuccessHandel(data); }, function (error) { return _this.handleErrors(error); });
    };
    CartService.prototype.SuccessHandel = function (data) {
        console.log(data);
        this.cartCount = +data;
    };
    CartService.prototype.handleErrors = function (error) {
        console.log(error);
    };
    CartService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_server_calls_service__WEBPACK_IMPORTED_MODULE_1__["ServerCallsService"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], CartService);
    return CartService;
}());



/***/ }),

/***/ "./src/app/services/only-owner-service.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/only-owner-service.service.ts ***!
  \********************************************************/
/*! exports provided: OnlyOwnerServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlyOwnerServiceService", function() { return OnlyOwnerServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _server_calls_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./server-calls.service */ "./src/app/services/server-calls.service.ts");
/* harmony import */ var ng_snotify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-snotify */ "./node_modules/ng-snotify/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnlyOwnerServiceService = /** @class */ (function () {
    function OnlyOwnerServiceService(_auth, snoty, router, _serverCalls) {
        this._auth = _auth;
        this.snoty = snoty;
        this.router = router;
        this._serverCalls = _serverCalls;
    }
    OnlyOwnerServiceService.prototype.canActivate = function (route, state) {
        var _this = this;
        var isUserLoggedIn = this._auth.isLoggedin();
        var userId = this._auth.getId();
        var itemId = route.params['id'];
        var itemOwner = null;
        this._serverCalls.getItemOwner(+itemId).subscribe(function (data) { return _this.handle(data, isUserLoggedIn, userId, itemId); }, function (error) { return _this.error(itemId); });
        return isUserLoggedIn;
    };
    OnlyOwnerServiceService.prototype.handle = function (data, isUserLoggedIn, userId, itemId) {
        var itemOwner = data;
        if (!isUserLoggedIn) {
            this.router.navigate(['/item-details/' + itemId]);
        }
        else if (itemOwner != userId) {
            this.snoty.error("You are not the owner of this item.", "Error");
            this.router.navigate(['/item-details/' + itemId]);
        }
    };
    OnlyOwnerServiceService.prototype.error = function (itemId) {
        this.snoty.error("Failed to load, Please try again later.", "Error");
        this.router.navigate(['/item-details/' + itemId]);
    };
    OnlyOwnerServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], ng_snotify__WEBPACK_IMPORTED_MODULE_4__["SnotifyService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _server_calls_service__WEBPACK_IMPORTED_MODULE_3__["ServerCallsService"]])
    ], OnlyOwnerServiceService);
    return OnlyOwnerServiceService;
}());



/***/ }),

/***/ "./src/app/services/server-calls.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/server-calls.service.ts ***!
  \**************************************************/
/*! exports provided: ServerCallsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerCallsService", function() { return ServerCallsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _base_info_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-info.service */ "./src/app/services/base-info.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ServerCallsService = /** @class */ (function () {
    function ServerCallsService(_http, _baseInfo, _auth) {
        this._http = _http;
        this._baseInfo = _baseInfo;
        this._auth = _auth;
    }
    ServerCallsService.prototype.login = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this._baseInfo.serverUrl() + "auth/login", data, { headers: headers });
    };
    ServerCallsService.prototype.register = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        return this._http.post(this._baseInfo.serverUrl() + "auth/register", data);
    };
    ServerCallsService.prototype.getUsers = function (data) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "users", data, { headers: headers });
    };
    ServerCallsService.prototype.getUserDetails = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        var userId = +this._auth.getId();
        return this._http.get(this._baseInfo.serverUrl() + "users/" + userId, { headers: headers });
    };
    ServerCallsService.prototype.getItems = function (page, itemsPerPage, minPrice, maxPrice, type, searchTerm, orderBy) {
        var queryString = '?';
        if (page != null && itemsPerPage != null) {
            queryString += 'pageNumber=' + page + '&pageSize=' + itemsPerPage;
        }
        if (minPrice != null && maxPrice != null) {
            queryString += '&minPrice=' + minPrice + '&maxPrice=' + maxPrice;
        }
        if (type != null) {
            queryString += '&isService=' + type;
        }
        if (searchTerm != null) {
            queryString += '&searchTerm=' + searchTerm.trim();
        }
        if (orderBy != null) {
            queryString += '&orderBy=' + orderBy.trim();
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        //var jwtToken = this.jwt();
        //headers = headers.set('Authorization', jwtToken);
        return this._http.get(this._baseInfo.serverUrl() + "items" + queryString, { headers: headers, observe: 'response' });
    };
    ServerCallsService.prototype.getItemOwner = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.get(this._baseInfo.serverUrl() + "items/Owner/" + id, { headers: headers });
    };
    ServerCallsService.prototype.getItemDetails = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        //var jwtToken = this.jwt();
        //headers = headers.set('Authorization', jwtToken);
        return this._http.get(this._baseInfo.serverUrl() + "items/" + id, { headers: headers });
    };
    ServerCallsService.prototype.setItemMainImage = function (itemId, picId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "items/" + itemId + '/images/' + picId + '/setProfile', {}, { headers: headers });
    };
    ServerCallsService.prototype.deleteItemImage = function (itemId, picId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.delete(this._baseInfo.serverUrl() + "items/" + itemId + '/images/' + picId, { headers: headers });
    };
    ServerCallsService.prototype.getFavorites = function (id, page, itemsPerPage, minPrice, maxPrice, type, searchTerm, orderBy) {
        var queryString = '?';
        if (page != null && itemsPerPage != null) {
            queryString += 'pageNumber=' + page + '&pageSize=' + itemsPerPage;
        }
        if (minPrice != null && maxPrice != null) {
            queryString += '&minPrice=' + minPrice + '&maxPrice=' + maxPrice;
        }
        if (type != null) {
            queryString += '&isService=' + type;
        }
        if (searchTerm != null) {
            queryString += '&searchTerm=' + searchTerm.trim();
        }
        if (orderBy != null) {
            queryString += '&orderBy=' + orderBy.trim();
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.get(this._baseInfo.serverUrl() + "favorites/" + id + '/' + queryString, { headers: headers, observe: 'response' });
    };
    ServerCallsService.prototype.updateItem = function (data, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.put(this._baseInfo.serverUrl() + "items", data, { headers: headers });
    };
    ServerCallsService.prototype.addFavorite = function (id, itemId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "users/" + id + '/favorite/' + itemId, {}, { headers: headers });
    };
    ServerCallsService.prototype.getMessages = function (id, page, itemsPerPage, messageContainer) {
        var queryString = '?';
        if (messageContainer != null) {
            queryString += 'MessageContainer=' + messageContainer;
        }
        if (page != null && itemsPerPage != null) {
            queryString += '&pageNumber=' + page + '&pageSize=' + itemsPerPage;
        }
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.get(this._baseInfo.serverUrl() + "usr_msg/" + id + '/message' + queryString, { headers: headers, observe: 'response' });
    };
    ServerCallsService.prototype.getThread = function (id, recepientId, itemId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.get(this._baseInfo.serverUrl() + "usr_msg/" + id + '/message/thread/' + recepientId + '/item/' + itemId, { headers: headers });
    };
    ServerCallsService.prototype.sendMessage = function (id, message) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "usr_msg/" + id + '/message', message, { headers: headers });
    };
    ServerCallsService.prototype.delMessage = function (userId, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "usr_msg/" + userId + '/message/' + id, {}, { headers: headers });
    };
    ServerCallsService.prototype.markMessageAsRead = function (userId, id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "usr_msg/" + userId + '/message/' + id + '/read', {}, { headers: headers }).subscribe();
    };
    ServerCallsService.prototype.addItem = function (item) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "items", item, { headers: headers });
    };
    ServerCallsService.prototype.getItemQuantity = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.get(this._baseInfo.serverUrl() + "items/Quantity/" + id, { headers: headers });
    };
    ServerCallsService.prototype.AddCartItem = function (userId, itemId, quantity) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "cart/" + userId + '/add/' + itemId + '/' + quantity, {}, { headers: headers });
    };
    ServerCallsService.prototype.getCartItems = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.get(this._baseInfo.serverUrl() + "cart/" + id, { headers: headers });
    };
    ServerCallsService.prototype.deleteCartItem = function (userId, itemId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "cart/" + userId + '/delete/' + itemId, {}, { headers: headers });
    };
    ServerCallsService.prototype.updateCartItem = function (userId, itemId, quantity) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "cart/" + userId + '/update/' + itemId + '/' + quantity, {}, { headers: headers });
    };
    ServerCallsService.prototype.getCartCount = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.get(this._baseInfo.serverUrl() + "cart/count/" + id, { headers: headers });
    };
    ServerCallsService.prototype.getCartSum = function (userId) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "cart/total/" + userId, {}, { headers: headers });
    };
    ServerCallsService.prototype.getPaypalInfo = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "cart/paypal/info", {}, { headers: headers });
    };
    ServerCallsService.prototype.getPayPalItems = function (id) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.get(this._baseInfo.serverUrl() + "cart/paypal/cart/" + id, { headers: headers });
    };
    ServerCallsService.prototype.CompletePayments = function (paymentInfo) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');
        var jwtToken = this.jwt();
        headers = headers.set('Authorization', jwtToken);
        return this._http.post(this._baseInfo.serverUrl() + "cart/paypal/cart/complete", paymentInfo, { headers: headers });
    };
    ServerCallsService.prototype.jwt = function () {
        var token = localStorage.getItem('token');
        var bearerToken = 'Bearer ' + token;
        if (token) {
            return bearerToken;
        }
    };
    ServerCallsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _base_info_service__WEBPACK_IMPORTED_MODULE_2__["BaseInfoService"], _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], ServerCallsService);
    return ServerCallsService;
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

module.exports = __webpack_require__(/*! C:\Users\Steve Barthelot\Desktop\project\demm\ShopAppSPA\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map