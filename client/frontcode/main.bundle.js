webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/contest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContestService = (function () {
    function ContestService(http) {
        this.http = http;
        this.apiparth = 'http://ec2-54-164-100-220.compute-1.amazonaws.com:8081/api/';
    }
    ContestService.prototype.getContests = function () {
        return this.http.get(this.apiparth + 'contests')
            .map(function (res) { return res.json(); });
    };
    ContestService.prototype.getContestsById = function (id) {
        return this.http.get(this.apiparth + 'contest/' + id)
            .map(function (res) { return res.json(); });
    };
    ContestService.prototype.addContest = function (newContest) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.apiparth + 'addcontest', JSON.stringify(newContest), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    ContestService.prototype.removeContest = function (id) {
        return this.http.delete(this.apiparth + 'removecontest/' + id)
            .map(function (res) { return res.json(); });
    };
    ContestService.prototype.updateContest = function (contest) {
        var id = contest._id;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        delete contest._id;
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.apiparth + 'updatecontest/' + id, JSON.stringify(contest), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    return ContestService;
}());
ContestService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ContestService);

var _a;
//# sourceMappingURL=contest.service.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<router-outlet ></router-outlet>\n<app-footer *ngIf=\"removeFooter()\"></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var AppComponent = (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
        });
        this.renderer.listenGlobal('window', 'scroll', function (event) {
            var number = window.scrollY;
            if (number > 150 || window.pageYOffset > 150) {
                // add logic
                navbar.classList.remove('navbar-transparent');
            }
            else {
                // remove logic
                navbar.classList.add('navbar-transparent');
            }
        });
        var ua = window.navigator.userAgent;
        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
            // IE 11 => return version number
            var rv = ua.indexOf('rv:');
            var version = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }
        if (version) {
            var body = document.getElementsByTagName('body')[0];
            body.classList.add('ie-background');
        }
    };
    AppComponent.prototype.removeFooter = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        titlee = titlee.slice(1);
        if (titlee === 'signup' || titlee === 'nucleoicons') {
            return false;
        }
        else {
            return true;
        }
    };
    return AppComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__shared_navbar_navbar_component__["a" /* NavbarComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "navbar", void 0);
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["b" /* DOCUMENT */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common__["Location"]) === "function" && _e || Object])
], AppComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export provideConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__terms_and_conditions_terms_and_condition__ = __webpack_require__("../../../../../src/app/terms-and-conditions/terms-and-condition.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__home_home_module__ = __webpack_require__("../../../../../src/app/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__how_it_works_work_module__ = __webpack_require__("../../../../../src/app/how-it-works/work.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__post_contests_post_contest_module__ = __webpack_require__("../../../../../src/app/post-contests/post-contest.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__browse_contests_container_browse_contests_browse_contest_component__ = __webpack_require__("../../../../../src/app/browse-contests/container/browse-contests/browse-contest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__browse_contests_container_view_contests_view_contest_component__ = __webpack_require__("../../../../../src/app/browse-contests/container/view-contests/view-contest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__browse_contests_components_browse_categories_browse_categories_component__ = __webpack_require__("../../../../../src/app/browse-contests/components/browse-categories/browse-categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_25_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_contest_service__ = __webpack_require__("../../../../../src/app/_services/contest.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























//for browse categories




//services

var config = new __WEBPACK_IMPORTED_MODULE_6_angularx_social_login__["b" /* AuthServiceConfig */]([
    {
        id: __WEBPACK_IMPORTED_MODULE_6_angularx_social_login__["d" /* GoogleLoginProvider */].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_6_angularx_social_login__["d" /* GoogleLoginProvider */]('316931438630-7ualds2mvg3bohrct8ovpopnk84f4q4i.apps.googleusercontent.com')
    },
    {
        id: __WEBPACK_IMPORTED_MODULE_6_angularx_social_login__["c" /* FacebookLoginProvider */].PROVIDER_ID,
        provider: new __WEBPACK_IMPORTED_MODULE_6_angularx_social_login__["c" /* FacebookLoginProvider */]('200878077331434')
    }
]);
function provideConfig() {
    return config;
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */],
            __WEBPACK_IMPORTED_MODULE_13__landing_landing_component__["a" /* LandingComponent */],
            __WEBPACK_IMPORTED_MODULE_14__profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_15__shared_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__shared_footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_22__browse_contests_container_browse_contests_browse_contest_component__["a" /* BrowseContestComponent */],
            __WEBPACK_IMPORTED_MODULE_24__browse_contests_components_browse_categories_browse_categories_component__["a" /* BrowseCategoriesComponent */],
            __WEBPACK_IMPORTED_MODULE_17__contact_us_contact_us_component__["a" /* ContactUsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__terms_and_conditions_terms_and_condition__["a" /* TermsConditionComponent */],
            __WEBPACK_IMPORTED_MODULE_23__browse_contests_container_view_contests_view_contest_component__["a" /* ViewContestComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_19__home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_6_angularx_social_login__["e" /* SocialLoginModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_7__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_20__how_it_works_work_module__["a" /* HowItWorkModule */],
            __WEBPACK_IMPORTED_MODULE_21__post_contests_post_contest_module__["a" /* PostContestModule */],
            __WEBPACK_IMPORTED_MODULE_10_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_25_ng2_ckeditor__["CKEditorModule"]
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_9__angular_common__["HashLocationStrategy"] },
            {
                provide: __WEBPACK_IMPORTED_MODULE_6_angularx_social_login__["b" /* AuthServiceConfig */],
                useFactory: provideConfig
            },
            __WEBPACK_IMPORTED_MODULE_26__services_contest_service__["a" /* ContestService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__browse_contests_container_browse_contests_browse_contest_component__ = __webpack_require__("../../../../../src/app/browse-contests/container/browse-contests/browse-contest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__how_it_works_containers_how_it_works_how_it_work_component__ = __webpack_require__("../../../../../src/app/how-it-works/containers/how-it-works/how-it-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__post_contests_containers_post_contest_post_contest_component__ = __webpack_require__("../../../../../src/app/post-contests/containers/post-contest/post-contest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__contact_us_contact_us_component__ = __webpack_require__("../../../../../src/app/contact-us/contact-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__terms_and_conditions_terms_and_condition__ = __webpack_require__("../../../../../src/app/terms-and-conditions/terms-and-condition.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__browse_contests_container_view_contests_view_contest_component__ = __webpack_require__("../../../../../src/app/browse-contests/container/view-contests/view-contest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__ = __webpack_require__("../../../../../src/app/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__ = __webpack_require__("../../../../../src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_nucleoicons_nucleoicons_component__ = __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
    { path: 'user-profile', component: __WEBPACK_IMPORTED_MODULE_11__profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_12__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'browse-contest', component: __WEBPACK_IMPORTED_MODULE_5__browse_contests_container_browse_contests_browse_contest_component__["a" /* BrowseContestComponent */] },
    { path: 'browse-contest/:id', component: __WEBPACK_IMPORTED_MODULE_10__browse_contests_container_view_contests_view_contest_component__["a" /* ViewContestComponent */] },
    { path: 'how-works', component: __WEBPACK_IMPORTED_MODULE_6__how_it_works_containers_how_it_works_how_it_work_component__["a" /* HowItWorksComponent */] },
    { path: 'post-contest', component: __WEBPACK_IMPORTED_MODULE_7__post_contests_containers_post_contest_post_contest_component__["a" /* PostContestComponent */] },
    { path: 'contact-us', component: __WEBPACK_IMPORTED_MODULE_8__contact_us_contact_us_component__["a" /* ContactUsComponent */] },
    { path: 'terms', component: __WEBPACK_IMPORTED_MODULE_9__terms_and_conditions_terms_and_condition__["a" /* TermsConditionComponent */] },
    { path: 'landing', component: __WEBPACK_IMPORTED_MODULE_13__landing_landing_component__["a" /* LandingComponent */] },
    { path: 'nucleoicons', component: __WEBPACK_IMPORTED_MODULE_14__components_nucleoicons_nucleoicons_component__["a" /* NucleoiconsComponent */] },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */].forRoot(routes)
        ],
        exports: [],
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/browse-contests/components/browse-categories/browse-categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron\">\r\n        <p class='category-item' (click)='filterContests(\"All Categories\")'>All Categories ({{contests.length}})</p>\r\n        <p class='category-item' *ngFor='let chategorie of chategories'>\r\n                <span (click)='filterContests(chategorie.name)'>\r\n                        {{chategorie.name}} ({{chategorie.count}})\r\n                </span>\r\n        </p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/browse-contests/components/browse-categories/browse-categories.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".jumbotron {\n  text-align: left; }\n\n.category-item {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse-contests/components/browse-categories/browse-categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseCategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_contest_service__ = __webpack_require__("../../../../../src/app/_services/contest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__container_browse_contests_browse_contest_component__ = __webpack_require__("../../../../../src/app/browse-contests/container/browse-contests/browse-contest.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BrowseCategoriesComponent = (function () {
    function BrowseCategoriesComponent(http, contestservice, browseContestComponent) {
        this.http = http;
        this.contestservice = contestservice;
        this.browseContestComponent = browseContestComponent;
        this.chategories = [];
        this.contests = [];
    }
    BrowseCategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("./assets/categories.json")
            .subscribe(function (data) {
            //console.log(data.json())
            _this.arrageContests(data.json());
            //this.chategories = data.json()
        });
    };
    BrowseCategoriesComponent.prototype.arrageContests = function (chategories) {
        var _this = this;
        this.contestservice.getContests().subscribe(function (res) {
            console.log(res);
            _this.contests = res;
            for (var a = 0; a < chategories.length; a++) {
                chategories[a].count = (__WEBPACK_IMPORTED_MODULE_3_lodash___default.a.filter(res, { 'category': chategories[a].name })).length;
            }
            console.log(chategories, 'post');
            _this.chategories = chategories;
        });
    };
    BrowseCategoriesComponent.prototype.filterContests = function (name) {
        console.log(name);
        this.browseContestComponent.changeContestMenu(name);
    };
    return BrowseCategoriesComponent;
}());
BrowseCategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'browse-categories',
        template: __webpack_require__("../../../../../src/app/browse-contests/components/browse-categories/browse-categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/browse-contests/components/browse-categories/browse-categories.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_contest_service__["a" /* ContestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_contest_service__["a" /* ContestService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__container_browse_contests_browse_contest_component__["a" /* BrowseContestComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__container_browse_contests_browse_contest_component__["a" /* BrowseContestComponent */]) === "function" && _c || Object])
], BrowseCategoriesComponent);

var _a, _b, _c;
//# sourceMappingURL=browse-categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/browse-contests/container/browse-contests/browse-contest.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('../assets/img/daniel-olahh.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"motto text-center\">\r\n            <h1>Browse The Contest</h1>\r\n            <h3>What do you want to launch?</h3>\r\n            <br />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main\">\r\n    <div class=\"section text-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <h2 class=\"title\">Let's Browse it</h2>\r\n                    <h5 class=\"description\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\r\n                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled\r\n                        it to make a type specimen book. It has survived not only five centuries, but also the leap into\r\n                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the\r\n                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\r\n                        software like Aldus PageMaker including versions of Lorem Ipsum.</h5>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <br/>\r\n            <div class=\"container-fluid\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-sm-8\">\r\n                        <ngb-tabset>\r\n                            <ngb-tab>\r\n                                <ng-template ngbTabTitle>\r\n                                    <b>Open</b>\r\n                                </ng-template>\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row\" style='text-align:center' *ngIf='loading'>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"lds-roller\">\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                            <div class=\"col-sm-12\" style='text-align:center' *ngIf='openContests.length<1'>\r\n                                                <p>Sorry! There haven't Open Contest at this moment</p>\r\n                                            </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"card\" *ngFor='let contest of openContests| paginate: { itemsPerPage: 5, currentPage: p }' (click)='checkLogin(contest._id)'>\r\n                                        <div class=\"card-body\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                    <img class='contest-logo' [src]='contest.image'>\r\n                                                </div>\r\n                                                <div class=\"col-sm-4\">\r\n                                                    <h3>{{contest.name}}</h3>\r\n                                                    <p>{{contest.user.name}}</p>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\" style='padding-top:4%'>\r\n                                                    <h6>Ends On</h6>\r\n                                                    <h6>{{contest.enddate}}</h6>\r\n                                                </div>\r\n                                                <div class=\"col-sm-2\" style='padding-top:4%'>\r\n                                                    <span class=\"badge badge-success\" *ngIf=\"contest.status=='Open'\">Open</span>\r\n                                                    <span class=\"badge badge-warning\" *ngIf=\"contest.status=='Inprocess'\">Inprocess</span>\r\n                                                    <span class=\"badge badge-danger\" *ngIf=\"contest.status=='Cloased'\">Closed</span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <br/>\r\n                                    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab>\r\n                                <ng-template ngbTabTitle>\r\n                                    <b>Inprocess</b>\r\n                                </ng-template>\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row\" style='text-align:center' *ngIf='loading'>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"lds-roller\">\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                            <div class=\"col-sm-12\" style='text-align:center' *ngIf='inprocessContests.length<1'>\r\n                                                <p>Sorry! There haven't Inprocess Contest at this moment</p>\r\n                                            </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"card\" *ngFor='let contest of inprocessContests| paginate: { itemsPerPage: 5, currentPage: p }' (click)='checkLogin(contest._id)'>\r\n                                        <div class=\"card-body\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                    <img class='contest-logo' [src]='contest.image'>\r\n                                                </div>\r\n                                                <div class=\"col-sm-4\">\r\n                                                    <h3>{{contest.name}}</h3>\r\n                                                    <p>{{contest.user.name}}</p>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\" style='padding-top:4%'>\r\n                                                    <h6>Ends On</h6>\r\n                                                    <h6>{{contest.enddate}}</h6>\r\n                                                </div>\r\n                                                <div class=\"col-sm-2\" style='padding-top:4%'>\r\n                                                    <span class=\"badge badge-success\" *ngIf=\"contest.status=='Open'\">Open</span>\r\n                                                    <span class=\"badge badge-warning\" *ngIf=\"contest.status=='Inprocess'\">Inprocess</span>\r\n                                                    <span class=\"badge badge-danger\" *ngIf=\"contest.status=='Cloased'\">Closed</span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <br/>\r\n                                    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab>\r\n                                <ng-template ngbTabTitle>\r\n                                    <b>Cloased</b>\r\n                                </ng-template>\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row\" style='text-align:center' *ngIf='loading'>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"lds-roller\">\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                            <div class=\"col-sm-12\" style='text-align:center' *ngIf='cloasedContests.length<1'>\r\n                                                <p>Sorry! There haven't Cloased Contest at this moment</p>\r\n                                            </div>\r\n                                    </div>\r\n                                    <div class=\"card\" *ngFor='let contest of cloasedContests| paginate: { itemsPerPage: 5, currentPage: p }' (click)='checkLogin(contest._id)'>\r\n                                        <div class=\"card-body\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                    <img class='contest-logo' [src]='contest.image'>\r\n                                                </div>\r\n                                                <div class=\"col-sm-4\">\r\n                                                    <h3>{{contest.name}}</h3>\r\n                                                    <p>{{contest.user.name}}</p>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\" style='padding-top:4%'>\r\n                                                    <h6>Ends On</h6>\r\n                                                    <h6>{{contest.enddate}}</h6>\r\n                                                </div>\r\n                                                <div class=\"col-sm-2\" style='padding-top:4%'>\r\n                                                    <span class=\"badge badge-success\" *ngIf=\"contest.status=='Open'\">Open</span>\r\n                                                    <span class=\"badge badge-warning\" *ngIf=\"contest.status=='Inprocess'\">Inprocess</span>\r\n                                                    <span class=\"badge badge-danger\" *ngIf=\"contest.status=='Cloased'\">Closed</span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <br/>\r\n                                    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab>\r\n                                <ng-template ngbTabTitle>\r\n                                    <b>All</b>\r\n                                </ng-template>\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row\" style='text-align:center' *ngIf='loading'>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <div class=\"lds-roller\">\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                                <div></div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                            <div class=\"col-sm-12\" style='text-align:center' *ngIf='contests.length<1'>\r\n                                                <p>Sorry! There haven't any Contest at this moment</p>\r\n                                            </div>\r\n                                    </div>\r\n                                    <div class=\"card\" *ngFor='let contest of contests| paginate: { itemsPerPage: 5, currentPage: p }' (click)='checkLogin(contest._id)'>\r\n                                        <div class=\"card-body\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-3\">\r\n                                                    <img class='contest-logo' [src]='contest.image'>\r\n                                                </div>\r\n                                                <div class=\"col-sm-4\">\r\n                                                    <h3>{{contest.name}}</h3>\r\n                                                    <p>{{contest.user.name}}</p>\r\n                                                </div>\r\n                                                <div class=\"col-sm-3\" style='padding-top:4%'>\r\n                                                    <h6>Ends On</h6>\r\n                                                    <h6>{{contest.enddate}}</h6>\r\n                                                </div>\r\n                                                <div class=\"col-sm-2\" style='padding-top:4%'>\r\n                                                    <span class=\"badge badge-success\" *ngIf=\"contest.status=='Open'\">Open</span>\r\n                                                    <span class=\"badge badge-warning\" *ngIf=\"contest.status=='Inprocess'\">Inprocess</span>\r\n                                                    <span class=\"badge badge-danger\" *ngIf=\"contest.status=='Cloased'\">Closed</span>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <br/>\r\n                                    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                        </ngb-tabset>\r\n                    </div>\r\n                    <div class=\"col-sm-4\">\r\n                        <browse-categories></browse-categories>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/browse-contests/container/browse-contests/browse-contest.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  background-color: #e0dcdc52;\n  cursor: pointer; }\n\n.contest-logo {\n  width: 100%;\n  height: 100%; }\n\n.lds-roller {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px; }\n\n.lds-roller div {\n  animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n  transform-origin: 32px 32px; }\n\n.lds-roller div:after {\n  content: \" \";\n  display: block;\n  position: absolute;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: #dc3545;\n  margin: -3px 0 0 -3px; }\n\n.lds-roller div:nth-child(1) {\n  animation-delay: -0.036s; }\n\n.lds-roller div:nth-child(1):after {\n  top: 50px;\n  left: 50px; }\n\n.lds-roller div:nth-child(2) {\n  animation-delay: -0.072s; }\n\n.lds-roller div:nth-child(2):after {\n  top: 54px;\n  left: 45px; }\n\n.lds-roller div:nth-child(3) {\n  animation-delay: -0.108s; }\n\n.lds-roller div:nth-child(3):after {\n  top: 57px;\n  left: 39px; }\n\n.lds-roller div:nth-child(4) {\n  animation-delay: -0.144s; }\n\n.lds-roller div:nth-child(4):after {\n  top: 58px;\n  left: 32px; }\n\n.lds-roller div:nth-child(5) {\n  animation-delay: -0.18s; }\n\n.lds-roller div:nth-child(5):after {\n  top: 57px;\n  left: 25px; }\n\n.lds-roller div:nth-child(6) {\n  animation-delay: -0.216s; }\n\n.lds-roller div:nth-child(6):after {\n  top: 54px;\n  left: 19px; }\n\n.lds-roller div:nth-child(7) {\n  animation-delay: -0.252s; }\n\n.lds-roller div:nth-child(7):after {\n  top: 50px;\n  left: 14px; }\n\n.lds-roller div:nth-child(8) {\n  animation-delay: -0.288s; }\n\n.lds-roller div:nth-child(8):after {\n  top: 45px;\n  left: 10px; }\n\n@keyframes lds-roller {\n  0% {\n    transform: rotate(0deg); }\n  100% {\n    transform: rotate(360deg); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse-contests/container/browse-contests/browse-contest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrowseContestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_contest_service__ = __webpack_require__("../../../../../src/app/_services/contest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var BrowseContestComponent = (function () {
    function BrowseContestComponent(authService, router, http, contestservice) {
        this.authService = authService;
        this.router = router;
        this.http = http;
        this.contestservice = contestservice;
        this.p = 1;
        this.loading = true;
        //contestTypes;
        this.openContests = [];
        this.inprocessContests = [];
        this.cloasedContests = [];
    }
    BrowseContestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contestservice.getContests().subscribe(function (res) {
            _this.loading = false;
            if (!res) {
            }
            else {
                _this.contests = res;
                _this.allContests = res;
                console.log(_this.contests);
                _this.chategorizeContests(res);
            }
        });
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
        });
    };
    BrowseContestComponent.prototype.checkLogin = function (id) {
        if (!this.user) {
            this.router.navigate(['/signup']);
        }
        else {
            this.router.navigate(['/browse-contest/' + id]);
        }
    };
    BrowseContestComponent.prototype.chategorizeContests = function (contests) {
        this.openContests = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.filter(contests, { 'status': 'Open' });
        this.inprocessContests = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.filter(contests, { 'status': 'Inprocess' });
        this.cloasedContests = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.filter(contests, { 'status': 'Cloased' });
    };
    BrowseContestComponent.prototype.changeContestMenu = function (type) {
        if (type == 'All Categories') {
            this.contests = this.allContests;
        }
        else {
            this.contests = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.filter(this.allContests, { 'category': type });
        }
        this.openContests = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.filter(this.contests, { 'status': 'Open' });
        this.inprocessContests = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.filter(this.contests, { 'status': 'Inprocess' });
        this.cloasedContests = __WEBPACK_IMPORTED_MODULE_5_lodash___default.a.filter(this.contests, { 'status': 'Cloased' });
    };
    return BrowseContestComponent;
}());
BrowseContestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'browse-contest',
        template: __webpack_require__("../../../../../src/app/browse-contests/container/browse-contests/browse-contest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/browse-contests/container/browse-contests/browse-contest.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_contest_service__["a" /* ContestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_contest_service__["a" /* ContestService */]) === "function" && _d || Object])
], BrowseContestComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=browse-contest.component.js.map

/***/ }),

/***/ "../../../../../src/app/browse-contests/container/view-contests/view-contest.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf='user && selectedContest'>\r\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('../assets/img/fabio-mangione.jpg');\">\r\n        <div class=\"filter\"></div>\r\n    </div>\r\n    <div class=\"section profile-content\">\r\n        <div class=\"container\">\r\n            <div class=\"owner\">\r\n                <div class=\"avatar\">\r\n                    <img src=\"{{ selectedContest.image }}\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\r\n                </div>\r\n                <div class=\"name\">\r\n\r\n                    <h3 class=\"title\">\r\n                        <span *ngIf='!titleEditable'>{{ selectedContest.name }}</span>&nbsp;\r\n                        <i *ngIf='user.id==selectedContest.user.id' class=\"edit-icon nc-icon nc-ruler-pencil\" (click)='editTitle()'></i>\r\n                        <div class=\"row\" style='padding-left:15%;padding-right: 15%;' *ngIf='titleEditable'>\r\n                            <div class=\"col-sm-12\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"usr\" style='width:100%;text-align:center' [(ngModel)]='selectedContest.name'>\r\n                                <br/>\r\n                                <button type=\"button\" class=\"btn btn-outline-primary\" (click)='updateTitle(selectedContest.name)'>Save</button>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </h3>\r\n                    <p *ngIf='!(user.id==selectedContest.user.id)'>Created By: {{selectedContest.user.name}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\" *ngIf='selectedContest.winner'>\r\n                <div class=\"col-sm-12\" style='text-align:center'>\r\n                    <h5>Congratulations {{selectedContest.winner}} won this Contest</h5>\r\n                </div>\r\n            </div>\r\n            <br/>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\" style='text-align:center'>\r\n                    <span class=\"badge badge-success\" *ngIf=\"selectedContest.status=='Open'\">Open</span>\r\n                    <span class=\"badge badge-warning\" *ngIf=\"selectedContest.status=='Inprocess'\">Inprocess</span>\r\n                    <span class=\"badge badge-danger\" *ngIf=\"selectedContest.status=='Cloased'\">Closed</span>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"main\" *ngIf='!(user.id==selectedContest.user.id)'>\r\n                <div class=\"section text-center\" style='padding-top:5px;padding-bottom:5px;'>\r\n                    <div class=\"container\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\" style='text-align:right'>\r\n                                <button type=\"button\" class=\"btn btn-primary\" *ngIf='!isFollow' (click)='followContest()'>Follow Contest</button>\r\n                                <button type=\"button\" class=\"btn btn-primary\" *ngIf='isFollow' (click)='unFollowContest()'>Unfollow Contest</button>\r\n                            </div>\r\n                            <div class=\"col-md-6\" style='text-align:left'>\r\n                                <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"reportContest(report)\">Report Contest</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"main\" *ngIf='user.id==selectedContest.user.id'>\r\n                <div class=\"section text-center\" style='padding-top:5px;padding-bottom:5px;'>\r\n                    <div class=\"container\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12\" style='text-align:center'>\r\n                                <button type=\"button\" class=\"btn btn-outline-dark\" style='color:#403D39' (click)='manageContest(manage)'>Manage Contest</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"main\" style='text-align:center !important'>\r\n                <div class=\"section text-center\">\r\n                    <div class=\"container\">\r\n                        <div class=\"row\" style='text-align:center !important'>\r\n                            <div class=\"col-md-3\" style='text-align:center !important'>\r\n                                <div class=\"info\">\r\n                                    <div class=\"icon icon-danger\">\r\n                                        <i class=\"nc-icon nc-money-coins\"></i>\r\n                                    </div>\r\n                                    <div class=\"description\">\r\n                                        <h4 class=\"info-title\">Awards</h4>\r\n                                        <h5 class=\"description\">{{selectedContest.awards.length}}</h5>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\" style='text-align:center !important'>\r\n                                <div class=\"info\">\r\n                                    <div class=\"icon icon-danger\">\r\n                                        <i class=\"nc-icon nc-paper\"></i>\r\n                                    </div>\r\n                                    <div class=\"description\">\r\n                                        <h4 class=\"info-title\">Contest Posted</h4>\r\n                                        <h5 class=\"description\">0</h5>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\" style='text-align:center !important'>\r\n                                <div class=\"info\">\r\n                                    <div class=\"icon icon-danger\">\r\n                                        <i class=\"nc-icon nc-spaceship\"></i>\r\n                                    </div>\r\n                                    <div class=\"description\">\r\n                                        <h4 class=\"info-title\">Start Date</h4>\r\n                                        <h5 class=\"description\">{{selectedContest.startdate}}</h5>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-3\" style='text-align:center !important'>\r\n                                <div class=\"info\">\r\n                                    <div class=\"icon icon-danger\">\r\n                                        <i class=\"nc-icon nc-user-run\"></i>\r\n                                    </div>\r\n                                    <div class=\"description\">\r\n                                        <h4 class=\"info-title\">End Date</h4>\r\n                                        <h5 class=\"description\">{{selectedContest.enddate}}</h5>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"nav-tabs-navigation\">\r\n                    <div class=\"nav-tabs-wrapper\">\r\n                        <ngb-tabset [justify]=\"'center'\">\r\n                            <ngb-tab title=\"Dashboard\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"container\">\r\n                                        <div class=\"row\">\r\n                                            <div class=\"col-sm-6\">\r\n                                                <p *ngIf='!selectedContest.timeline'>Timeline not avalable this moment</p>\r\n                                                <div class=\"item\" *ngFor='let timeline of selectedContest.timeline'>\r\n                                                    <span class=\"glyphicon glyphicon-ok\"></span>\r\n                                                    <div>{{timeline.date}}</div>\r\n                                                    <p>\r\n                                                        {{timeline.description}}\r\n                                                    </p>\r\n                                                </div>\r\n\r\n                                            </div>\r\n                                            <div class=\"col-sm-6\" style='text-align:left !important'>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-12\">\r\n                                                        <h3>Description &nbsp;\r\n                                                            <i *ngIf='user.id==selectedContest.user.id' class=\"edit-icon nc-icon nc-ruler-pencil\" (click)='changeDescriptionEditable()'></i>\r\n                                                        </h3>\r\n                                                    </div>\r\n                                                    <br/>\r\n                                                    <div class=\"col-sm-12\">\r\n                                                        <div *ngIf='discriptionEditable'>\r\n                                                            <ckeditor [(ngModel)]=\"selectedContest.description\" debounce=\"500\">\r\n                                                                <p>Hello\r\n                                                                    <strong>world</strong>\r\n                                                                </p>\r\n                                                            </ckeditor>\r\n                                                            <br/>\r\n                                                            <button type=\"button\" class=\"btn btn-outline-primary\" (click)='updateDiscription(selectedContest.description)'>Save</button>\r\n                                                        </div>\r\n                                                        <div *ngIf='!discriptionEditable'>\r\n                                                            <div [innerHTML]=\"selectedContest.description\"> </div>\r\n                                                        </div>\r\n\r\n                                                    </div>\r\n                                                </div>\r\n                                                <br/>\r\n                                                <div class=\"row\">\r\n                                                    <div class=\"col-sm-12\">\r\n                                                        <h3>Awards &nbsp;\r\n                                                            <i *ngIf='user.id==selectedContest.user.id' class=\"edit-icon nc-icon nc-ruler-pencil\" (click)='editAwards()'></i>\r\n                                                        </h3>\r\n                                                    </div>\r\n                                                    <br/>\r\n                                                    <div class=\"col-sm-12\">\r\n                                                        <div class=\"row\" *ngFor='let award of selectedContest.awards'>\r\n                                                            <div class=\"col-sm-4\">\r\n                                                                <p>Award {{award.id}}</p>\r\n                                                            </div>\r\n                                                            <div class=\"col-sm-8\">\r\n                                                                <p *ngIf='!awardsEditable'>{{award.name}}</p>\r\n                                                                <span *ngIf='awardsEditable'>\r\n                                                                    <input type=\"text\" class=\"form-control\" [(ngModel)]='award.name'>\r\n                                                                </span>\r\n\r\n                                                            </div>\r\n                                                        </div>\r\n                                                        <button *ngIf='awardsEditable' type=\"button\" class=\"btn btn-outline-primary\" (click)='updateAwards(selectedContest.awards)'>Save</button>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Forum\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div *ngIf='selectedContest'>\r\n                                        <div class=\"row\" *ngIf='!(selectedContest.comment)'>\r\n                                            <div class=\"col-md-12 mr-auto ml-auto\">\r\n                                                <p>There haven't previous messages</p>\r\n                                                <br/>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"containerc\" *ngFor='let comment of selectedContest.comment'>\r\n                                        <img src=\"{{comment.image}}\" alt=\"Avatar\" style=\"width:100%;\">\r\n                                        <p>{{comment.msg}}</p>\r\n                                        <span class=\"time-right\">{{comment.time}}</span>\r\n                                    </div>\r\n\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-10 mr-auto ml-auto\">\r\n                                            <div class=\"form-group\">\r\n                                                <textarea class=\"form-control\" rows=\"5\" id=\"comment\" [(ngModel)]='comment'></textarea>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"col-md-2 mr-auto ml-auto\">\r\n                                            <button type=\"button\" class=\"btn btn-dark\" (click)='addComment()'>Send</button>\r\n                                        </div>\r\n                                    </div>\r\n\r\n\r\n\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Participations\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row\" *ngIf='!(selectedContest.followers)'>\r\n                                        <div class=\"col-md-12 mr-auto ml-auto\">\r\n                                            <h3 class=\"text-muted\">Not following anyone yet :(</h3>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 mr-auto ml-auto\" *ngFor='let follower of selectedContest.followers'>\r\n                                            <div class=\"card\">\r\n                                                <div class=\"card-body\">\r\n                                                    <div class=\"row\">\r\n                                                        <div class=\"col-md-4 mr-auto ml-auto\">\r\n                                                            <img class=\"card-img-top\" src=\"{{follower.image}}\" alt=\"Card image\" style=\"width:100%\">\r\n                                                        </div>\r\n                                                        <div class=\"col-md-8 mr-auto ml-auto\">\r\n                                                            <h4 class=\"card-title\">{{follower.name}}</h4>\r\n                                                            <p class=\"card-text\">{{follower.email}}</p>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Tasks Posting\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                            Upload the File\r\n                                        </div>\r\n                                        <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                            <input type=\"file\" (change)=\"upload($event)\" [(ngModel)]='myfile' />\r\n                                        </div>\r\n                                    </div>\r\n                                    <br/>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-6 mr-auto ml-auto\"></div>\r\n                                        <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                            <button type=\"button\" class=\"btn btn-danger\" (click)='uploadPost()'>Upload File</button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br/>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-md-12 mr-auto ml-auto\" *ngIf='visibleAlerts'>\r\n                                            <ngb-alert [type]=\"alertType\" [dismissible]=\"false\">\r\n                                                <div class=\"container\">\r\n                                                    {{ alertMessage }}\r\n                                                </div>\r\n                                            </ngb-alert>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br/>\r\n                                    <div class=\"row\" *ngIf='user.id==selectedContest.user.id'>\r\n                                        <div class=\"col-md-12 mr-auto ml-auto\">\r\n                                            <table class=\"table table-striped\">\r\n                                                <thead>\r\n                                                    <tr style='text-align:center'>\r\n                                                        <th>Uploader Name</th>\r\n                                                        <th>Date</th>\r\n                                                        <th>Download it</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngIf='!selectedContest.uploads'>\r\n                                                        <td colspan=\"3\">No download links Avalable</td>\r\n                                                    </tr>\r\n                                                    <tr *ngFor='let file of selectedContest.uploads'>\r\n                                                        <td>{{file.user.name}}</td>\r\n                                                        <td>{{file.date}}</td>\r\n                                                        <td>\r\n                                                            <a [href]='file.path' target=\"_blank\">\r\n                                                                <i class=\"nc-icon nc-cloud-download-93\"></i>\r\n                                                            </a>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Brief\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row\">\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-12\">\r\n                                                    <h3>Rules &nbsp;\r\n                                                        <i *ngIf='user.id==selectedContest.user.id' class=\"edit-icon nc-icon nc-ruler-pencil\" (click)='changeRulesEditable()'></i>\r\n                                                    </h3>\r\n                                                </div>\r\n                                                <br/>\r\n                                                <div class=\"col-sm-12\">\r\n                                                    <div *ngIf='rulesEditable'>\r\n                                                        <ckeditor [(ngModel)]=\"selectedContest.rules\" debounce=\"500\">\r\n                                                            <p>Hello\r\n                                                                <strong>world</strong>\r\n                                                            </p>\r\n                                                        </ckeditor>\r\n                                                        <br/>\r\n                                                        <button type=\"button\" class=\"btn btn-outline-primary\" (click)='updateRules(selectedContest.rules)'>Save</button>\r\n                                                    </div>\r\n                                                    <div *ngIf='!rulesEditable'>\r\n                                                        <div [innerHTML]=\"selectedContest.rules\"> </div>\r\n                                                    </div>\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                        <br/>\r\n                                        <div class=\"col-sm-6\">\r\n                                            <div class=\"row\">\r\n                                                <div class=\"col-sm-12\">\r\n                                                    <h3>Help Guide &nbsp;\r\n                                                        <i *ngIf='user.id==selectedContest.user.id' class=\"edit-icon nc-icon nc-ruler-pencil\" (click)='changeHelpGuideEditable()'></i>\r\n                                                    </h3>\r\n                                                </div>\r\n                                                <br/>\r\n                                                <div class=\"col-sm-12\">\r\n                                                    <div *ngIf='helpGuideEditble'>\r\n                                                        <ckeditor [(ngModel)]=\"selectedContest.guide\" debounce=\"500\">\r\n                                                            <p>Hello\r\n                                                                <strong>world</strong>\r\n                                                            </p>\r\n                                                        </ckeditor>\r\n                                                        <br/>\r\n                                                        <button type=\"button\" class=\"btn btn-outline-primary\" (click)='updateHelpGuide(selectedContest.guide)'>Save</button>\r\n                                                    </div>\r\n                                                    <div *ngIf='!helpGuideEditble'>\r\n                                                        <div [innerHTML]=\"selectedContest.guide\"> </div>\r\n                                                    </div>\r\n\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                        </ngb-tabset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<ng-template #report let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <p>\r\n            <b>Report This Contest</b>\r\n        </p>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n                <label>Title</label>\r\n            </div>\r\n            <div class=\"col-sm-7\">\r\n                <input type=\"text\" class=\"form-control\">\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n                <label>Description</label>\r\n            </div>\r\n            <div class=\"col-sm-7\">\r\n                <textarea class=\"form-control\" rows=\"3\" id=\"comment\"></textarea>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\" style='padding:10px;'>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Report</button>\r\n\r\n    </div>\r\n</ng-template>\r\n\r\n\r\n<ng-template #manage let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <p>Manage Contest</p>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n                <label>Status Of Contest</label>\r\n            </div>\r\n            <div class=\"col-sm-7\">\r\n                <select class=\"form-control\" [(ngModel)]='contestStatus'>\r\n                    <option>Open</option>\r\n                    <option>Inprocess</option>\r\n                    <option>Cloased</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n        <br/>\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-5\">\r\n                <label>Select a Winner</label>\r\n            </div>\r\n            <div class=\"col-sm-7\">\r\n                <select class=\"form-control\" [(ngModel)]='winner' (ngModelChange)='changeWinner()'>\r\n                    <option disabled>Select One</option>\r\n                    <option *ngFor='let follower of selectedContest.followers'>{{follower.name}}</option>\r\n                </select>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"modal-footer\" style='padding:10px'>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"saveManageData()\">Save</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/browse-contests/container/view-contests/view-contest.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".title {\n  text-transform: uppercase; }\n\n.timeline {\n  position: relative;\n  max-width: 1200px;\n  margin: 0 auto; }\n\n/* The actual timeline (the vertical ruler) */\n.timeline::after {\n  content: '';\n  position: absolute;\n  width: 6px;\n  background-color: gray;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  margin-left: -3px; }\n\n/* Container around content */\n.containers {\n  padding: 10px 40px;\n  position: relative;\n  background-color: inherit;\n  width: 50%; }\n\n/* The circles on the timeline */\n.containers::after {\n  content: '';\n  position: absolute;\n  width: 25px;\n  height: 25px;\n  right: -17px;\n  background-color: white;\n  border: 4px solid #FF9F55;\n  top: 15px;\n  border-radius: 50%;\n  z-index: 1; }\n\n/* Place the container to the left */\n.left {\n  left: 0; }\n\n/* Place the container to the right */\n.right {\n  left: 50%; }\n\n/* Add arrows to the left container (pointing right) */\n.left::before {\n  content: \" \";\n  height: 0;\n  position: absolute;\n  top: 22px;\n  width: 0;\n  z-index: 1;\n  right: 30px;\n  border: medium solid white;\n  border-width: 10px 0 10px 10px;\n  border-color: transparent transparent transparent white; }\n\n/* Add arrows to the right container (pointing left) */\n.right::before {\n  content: \" \";\n  height: 0;\n  position: absolute;\n  top: 22px;\n  width: 0;\n  z-index: 1;\n  left: 30px;\n  border: medium solid white;\n  border-width: 10px 10px 10px 0;\n  border-color: transparent white transparent transparent; }\n\n/* Fix the circle for containers on the right side */\n.right::after {\n  left: -16px; }\n\n/* The actual content */\n.content {\n  padding: 20px 30px;\n  background-color: white;\n  position: relative;\n  border-radius: 6px; }\n\n/* Media queries - Responsive timeline on screens less than 600px wide */\n@media all and (max-width: 600px) {\n  /* Place the timelime to the left */\n  .timeline::after {\n    left: 31px; }\n  /* Full-width containers */\n  .containers {\n    width: 100%;\n    padding-left: 70px;\n    padding-right: 25px; }\n  /* Make sure that all arrows are pointing leftwards */\n  .containers::before {\n    left: 60px;\n    border: medium solid white;\n    border-width: 10px 10px 10px 0;\n    border-color: transparent white transparent transparent; }\n  /* Make sure all circles are at the same spot */\n  .left::after, .right::after {\n    left: 15px; }\n  /* Make all right containers behave like the left ones */\n  .right {\n    left: 0%; } }\n\n.containerc {\n  border: 2px solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  padding: 10px;\n  margin: 10px 0; }\n\n.darker {\n  border-color: #ccc;\n  background-color: #ddd; }\n\n.containerc::after {\n  content: \"\";\n  clear: both;\n  display: table; }\n\n.containerc img {\n  float: left;\n  max-width: 60px;\n  width: 100%;\n  margin-right: 20px;\n  border-radius: 50%; }\n\n.containerc img.right {\n  float: right;\n  margin-left: 20px;\n  margin-right: 0; }\n\n.time-right {\n  float: right;\n  color: #aaa; }\n\n.time-left {\n  float: left;\n  color: #999; }\n\n.img-circle {\n  max-width: 150% !important;\n  width: 180px !important;\n  height: 180px !important; }\n\n.item {\n  position: relative;\n  margin: 15px;\n  border-left: 3px dashed antiquewhite;\n  padding: 10px 40px; }\n\n.item > span {\n  position: absolute;\n  width: 40px;\n  height: 40px;\n  font-size: 20px;\n  text-align: center;\n  line-height: 40px;\n  border-radius: 100%;\n  left: -20px;\n  top: 0;\n  background: antiquewhite; }\n\n.item div {\n  font-size: 18px;\n  font-weight: bold; }\n\n.item p {\n  margin-top: 15px; }\n\n.title {\n  margin-bottom: 5px; }\n\n.edit-icon {\n  color: #dc3545;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/browse-contests/container/view-contests/view-contest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewContestComponent; });
/* unused harmony export S3Config */
/* unused harmony export S3Uploader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_contest_service__ = __webpack_require__("../../../../../src/app/_services/contest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var CryptoJS = __webpack_require__("../../../../crypto-js/index.js");
var ViewContestComponent = (function () {
    function ViewContestComponent(authService, modalService, router, http, route, contestservice) {
        this.authService = authService;
        this.modalService = modalService;
        this.router = router;
        this.http = http;
        this.route = route;
        this.contestservice = contestservice;
        this.isFollow = false;
        this.visibleAlerts = false;
        this.winner = 'Select One';
        this.config = new S3Config();
        //edit data
        this.discriptionEditable = false;
        this.rulesEditable = false;
        this.helpGuideEditble = false;
        this.titleEditable = false;
        this.awardsEditable = false;
        this.config.bucket = 'contest-site-uploaded-images';
        this.config.accessKey = 'AKIAIUU3RAMZLXYAXNKA';
        this.config.secretAccessKey = 'k0/d3dqMPesfXUZU17epadE8RuODgLVkYiv9blcU';
        this.config.region = 'us-east-1';
        this.uploader = new S3Uploader();
        // Input your S3 Config
        this.uploader.init(http, this.config);
    }
    ViewContestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
        });
        this.id = this.route.snapshot.params['id'];
        var self = this;
        this.contestservice.getContestsById(this.id).subscribe(function (res) {
            console.log(res);
            _this.previousData = res;
            _this.selectedContest = res;
            _this.contestStatus = res.status;
            var followers = res.followers;
            if (!followers) {
                followers = [];
            }
            // if(!res.uploads){
            //     this.selectedContest.uploads=[]=[];
            // }
            console.log(followers);
            _this.contestId = res._id;
            var parser = new DOMParser();
            _this.description = parser.parseFromString(_this.selectedContest.description, "text/html");
            console.log(_this.description);
            if (JSON.parse(localStorage.getItem('info'))) {
                var userid = (JSON.parse(localStorage.getItem('info'))).id;
                for (var a = 0; a < followers.length; a++) {
                    if (userid == followers[a].id) {
                        _this.isFollow = true;
                        break;
                    }
                }
                console.log(_this.isFollow);
            }
        });
    };
    ViewContestComponent.prototype.addComment = function () {
        if (!this.selectedContest.comment) {
            this.selectedContest.comment = [];
        }
        if (!this.previousData.comment) {
            this.previousData.comment = [];
        }
        if (this.comment) {
            var newComment = {
                msg: this.comment,
                image: this.user.photoUrl,
                name: this.user.name,
                time: __WEBPACK_IMPORTED_MODULE_5_moment__().format('MMM Do YY, h:mm a')
            };
            this.previousData.comment.push(newComment);
            console.log(this.previousData);
            this.contestservice.updateContest(this.previousData).subscribe(function (res) {
                console.log(res);
                //this.selectedContest.comment.push(newComment)
            });
        }
    };
    ViewContestComponent.prototype.followContest = function () {
        var _this = this;
        //update time line
        if (!this.selectedContest.timeline) {
            this.selectedContest.timeline = [];
        }
        if (!this.previousData.timeline) {
            this.previousData.timeline = [];
        }
        var timelinedata = {
            date: __WEBPACK_IMPORTED_MODULE_5_moment__().format('MMMM Do YYYY, h:mm:ss a'),
            description: this.user.name + ' ' + 'Join With Contest'
        };
        this.previousData.timeline.push(timelinedata);
        //update participate
        if (!this.selectedContest.followers) {
            this.selectedContest.followers = [];
        }
        if (!this.previousData.followers) {
            this.previousData.followers = [];
        }
        this.previousData._id = this.contestId;
        var follow = {
            name: this.user.name,
            id: this.user.id,
            email: this.user.email,
            image: this.user.photoUrl
        };
        this.previousData.followers.push(follow);
        this.contestservice.updateContest(this.previousData).subscribe(function (res) {
            console.log(res);
            if (res) {
                _this.isFollow = true;
            }
        });
    };
    ViewContestComponent.prototype.unFollowContest = function () {
        var _this = this;
        //update time line
        if (!this.selectedContest.timeline) {
            this.selectedContest.timeline = [];
        }
        if (!this.previousData.timeline) {
            this.previousData.timeline = [];
        }
        var timelinedata = {
            date: __WEBPACK_IMPORTED_MODULE_5_moment__().format('MMMM Do YYYY, h:mm:ss a'),
            description: this.user.name + ' ' + 'Left From Contest'
        };
        this.previousData.timeline.push(timelinedata);
        //update participate
        this.previousData._id = this.contestId;
        console.log(this.contestId);
        var self = this;
        __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.remove(this.previousData.followers, function (n) {
            return n.id == self.user.id;
        });
        __WEBPACK_IMPORTED_MODULE_6_lodash___default.a.remove(this.selectedContest.followers, function (n) {
            return n.id == self.user.id;
        });
        console.log('xxxxxxxxxxxxxxx', this.previousData);
        this.contestservice.updateContest(this.previousData).subscribe(function (res) {
            if (res) {
                _this.isFollow = false;
            }
        });
    };
    ViewContestComponent.prototype.reportContest = function (report) {
        var _this = this;
        this.modalService.open(report).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ViewContestComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ViewContestComponent.prototype.manageContest = function (model) {
        var _this = this;
        this.manageModel = this.modalService.open(model, { windowClass: 'dark-modal' });
        this.manageModel.result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            //this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        });
    };
    ViewContestComponent.prototype.saveManageData = function () {
        var _this = this;
        if (this.winner == 'Select One') {
            //not set winner
            if (!this.selectedContest.timeline) {
                this.selectedContest.timeline = [];
            }
            if (!this.previousData.timeline) {
                this.previousData.timeline = [];
            }
            var timelinedata = {
                date: __WEBPACK_IMPORTED_MODULE_5_moment__().format('MMMM Do YYYY, h:mm:ss a'),
                description: this.user.name + ' ' + 'changed contest status as ' + this.contestStatus
            };
            this.previousData.timeline.push(timelinedata);
            this.previousData.status = this.contestStatus;
            this.previousData._id = this.contestId;
            this.contestservice.updateContest(this.previousData).subscribe(function (res) {
                console.log(res);
                if (res.ok == 1) {
                    _this.manageModel.close();
                    _this.selectedContest.status = _this.contestStatus;
                }
            });
        }
        else {
            //set winner
            if (!this.selectedContest.timeline) {
                this.selectedContest.timeline = [];
            }
            if (!this.previousData.timeline) {
                this.previousData.timeline = [];
            }
            var timelinedata = {
                date: __WEBPACK_IMPORTED_MODULE_5_moment__().format('MMMM Do YYYY, h:mm:ss a'),
                description: this.user.name + ' ' + 'set winner as ' + this.winner
            };
            this.previousData.timeline.push(timelinedata);
            this.previousData.status = this.contestStatus;
            this.previousData.winner = this.winner;
            this.previousData._id = this.contestId;
            this.contestservice.updateContest(this.previousData).subscribe(function (res) {
                console.log(res);
                if (res.ok == 1) {
                    _this.manageModel.close();
                    _this.selectedContest.status = _this.contestStatus;
                }
            });
        }
    };
    ViewContestComponent.prototype.changeWinner = function () {
        if (!(this.winner == 'Select One')) {
            this.contestStatus = 'Cloased';
        }
    };
    ViewContestComponent.prototype.upload = function (event) {
        this.uploadedFile = event;
    };
    ViewContestComponent.prototype.uploadPost = function () {
        var _this = this;
        var event = this.uploadedFile;
        var self = this;
        var file = event.srcElement.files[0];
        console.log(file.name);
        this.uploader.upload(file).then(function (x) {
            console.log(x);
            _this.imagePath = x;
        });
        setTimeout(function () {
            self.imagePath = 'https://contest-site-uploaded-images.s3.amazonaws.com/' + file.name;
            console.log(self.imagePath);
            self.saveUploadedFile(self.imagePath);
        }, 5000);
    };
    ViewContestComponent.prototype.saveUploadedFile = function (filepath) {
        var _this = this;
        //save upload file path
        if (!this.selectedContest.uploads) {
            this.selectedContest.uploads = [];
        }
        if (!this.previousData.uploads) {
            this.previousData.uploads = [];
        }
        var user = {
            name: this.user.name,
            id: this.user.id,
        };
        var uploaddata = {
            path: filepath,
            date: __WEBPACK_IMPORTED_MODULE_5_moment__().format('MMMM Do YYYY, h:mm:ss a'),
            user: user
        };
        this.previousData.uploads.push(uploaddata);
        //update timeline
        if (!this.selectedContest.timeline) {
            this.selectedContest.timeline = [];
        }
        if (!this.previousData.timeline) {
            this.previousData.timeline = [];
        }
        var timelinedata = {
            date: __WEBPACK_IMPORTED_MODULE_5_moment__().format('MMMM Do YYYY, h:mm:ss a'),
            description: this.user.name + ' ' + 'post on contest'
        };
        this.previousData.timeline.push(timelinedata);
        this.previousData._id = this.contestId;
        this.contestservice.updateContest(this.previousData).subscribe(function (res) {
            console.log(res);
            if (res.ok == 1) {
                _this.uploadedFile = '';
                _this.myfile = '';
                _this.alertType = 'success';
                _this.visibleAlerts = true;
                var self_1 = _this;
                _this.alertMessage = 'Uploaded File Suessfully';
                setTimeout(function () {
                    self_1.visibleAlerts = false;
                }, 3000);
                //console.log('kdshjshdkjghdskjhgjdskhgjkdsh')
            }
        });
    };
    ViewContestComponent.prototype.changeDescriptionEditable = function () {
        this.discriptionEditable = !this.discriptionEditable;
    };
    ViewContestComponent.prototype.updateDiscription = function (value) {
        var _this = this;
        this.previousData.description = value;
        this.previousData._id = this.contestId;
        this.contestservice.updateContest(this.previousData).subscribe(function (res) {
            console.log(res);
            if (res.ok == 1) {
                _this.selectedContest.description = value;
                _this.discriptionEditable = false;
            }
        });
    };
    ViewContestComponent.prototype.changeRulesEditable = function () {
        this.rulesEditable = !this.rulesEditable;
    };
    ViewContestComponent.prototype.updateRules = function (value) {
        var _this = this;
        this.previousData.rules = value;
        this.previousData._id = this.contestId;
        this.contestservice.updateContest(this.previousData).subscribe(function (res) {
            console.log(res);
            if (res.ok == 1) {
                _this.selectedContest.rules = value;
                _this.rulesEditable = false;
            }
        });
    };
    ViewContestComponent.prototype.changeHelpGuideEditable = function () {
        this.helpGuideEditble = !this.helpGuideEditble;
    };
    ViewContestComponent.prototype.updateHelpGuide = function (value) {
        var _this = this;
        this.previousData.guide = value;
        this.previousData._id = this.contestId;
        this.contestservice.updateContest(this.previousData).subscribe(function (res) {
            console.log(res);
            if (res.ok == 1) {
                _this.selectedContest.guide = value;
                _this.helpGuideEditble = false;
            }
        });
    };
    ViewContestComponent.prototype.editTitle = function () {
        this.titleEditable = !this.titleEditable;
    };
    ViewContestComponent.prototype.updateTitle = function (value) {
        var _this = this;
        this.previousData.name = value;
        this.previousData._id = this.contestId;
        this.contestservice.updateContest(this.previousData).subscribe(function (res) {
            console.log(res);
            if (res.ok == 1) {
                _this.selectedContest.name = value;
                _this.titleEditable = false;
            }
        });
    };
    ViewContestComponent.prototype.editAwards = function () {
        this.awardsEditable = !this.awardsEditable;
    };
    ViewContestComponent.prototype.updateAwards = function (value) {
        var _this = this;
        this.previousData.awards = value;
        this.previousData._id = this.contestId;
        this.contestservice.updateContest(this.previousData).subscribe(function (res) {
            console.log(res);
            if (res.ok == 1) {
                _this.selectedContest.awards = value;
                _this.awardsEditable = false;
            }
        });
    };
    return ViewContestComponent;
}());
ViewContestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'view-contest',
        template: __webpack_require__("../../../../../src/app/browse-contests/container/view-contests/view-contest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/browse-contests/container/view-contests/view-contest.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_contest_service__["a" /* ContestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_contest_service__["a" /* ContestService */]) === "function" && _f || Object])
], ViewContestComponent);

var S3Config = (function () {
    function S3Config() {
    }
    return S3Config;
}());

var S3Uploader = (function () {
    function S3Uploader() {
    }
    S3Uploader.prototype.init = function (http, config) {
        this.http = http;
        this.config = config;
    };
    S3Uploader.prototype.upload = function (file) {
        var _this = this;
        var date = this.generateTimestamp();
        var datetime = date + 'T000000Z';
        var credential = this.config.accessKey + "/" + date + "/" + this.config.region + "/s3/aws4_request";
        var policy = JSON.stringify({
            "expiration": (new Date(Date.now() + 100000)).toISOString(),
            "conditions": [
                { "bucket": this.config.bucket },
                ["starts-with", "$key", ""],
                { "acl": "public-read" },
                ["starts-with", "$Content-Type", ""],
                { "x-amz-credential": credential },
                { "x-amz-algorithm": "AWS4-HMAC-SHA256" },
                { "x-amz-date": datetime }
            ]
        });
        var policyBase64 = window.btoa(policy);
        var signatureKey = this.generateSignatureKey(this.config.secretAccessKey, date, this.config.region, "s3");
        var signature = CryptoJS.HmacSHA256(policyBase64, signatureKey).toString(CryptoJS.enc.Hex);
        var formData = new FormData();
        formData.append('acl', "public-read");
        formData.append('Content-Type', file.type);
        formData.append('X-Amz-Date', datetime);
        formData.append('X-Amz-Algorithm', "AWS4-HMAC-SHA256");
        formData.append('X-Amz-Credential', credential);
        formData.append('X-Amz-Signature', signature);
        formData.append('Policy', policyBase64);
        formData.append('key', file.name);
        formData.append('file', file);
        return new Promise(function (resolve, reject) {
            _this.http.post("https://" + _this.config.bucket + ".s3.amazonaws.com/", formData).subscribe(function (x) {
                console.log(x);
                resolve(x.headers.get("Location"));
            }, function (x) {
                console.error(x);
                reject();
            });
        });
    };
    S3Uploader.prototype.generateSignatureKey = function (key, dateStamp, regionName, serviceName) {
        var kDate = CryptoJS.HmacSHA256(dateStamp, "AWS4" + key);
        var kRegion = CryptoJS.HmacSHA256(regionName, kDate);
        var kService = CryptoJS.HmacSHA256(serviceName, kRegion);
        var kSigning = CryptoJS.HmacSHA256("aws4_request", kService);
        return kSigning;
    };
    S3Uploader.prototype.generateTimestamp = function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);
        return year + month + day;
    };
    return S3Uploader;
}());

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=view-contest.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-buttons\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Basic Components</h2>\n        </div>\n        <div id=\"buttons\">\n            <div class=\"tim-title\">\n                <h3>Buttons\n                    <br/>\n                    <small>Pick your style</small>\n                </h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-danger\">Default</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Round</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\"><i class=\"fa fa-heart\"></i> With Icon</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-just-icon\"><i class=\"fa fa-heart\"></i></button>\n                    <button type=\"button\" class=\"btn btn-danger btn-link\">Simple</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your size</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-sm\">Small</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger\">Regular</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-lg\">Large</button>\n                </div>\n            </div>\n            <div class=\"tim-title\">\n                <h3><small>Pick your color</small></h3>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-outline-default btn-round\">Default</button>\n                    <button type=\"button\" class=\"btn btn-outline-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-outline-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-outline-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-outline-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-outline-danger btn-round\">Danger</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"row\">\n                <div class=\"col-md-8\">\n                    <button type=\"button\" class=\"btn btn-default btn-round\">Default</button>\n                    <button type=\"button\" class=\"btn btn-primary btn-round\">Primary</button>\n                    <button type=\"button\" class=\"btn btn-info btn-round\">Info</button>\n                    <button type=\"button\" class=\"btn btn-success btn-round\">Success</button>\n                    <button type=\"button\" class=\"btn btn-warning btn-round\">Warning</button>\n                    <button type=\"button\" class=\"btn btn-danger btn-round\">Danger</button>\n                </div>\n            </div>\n        </div>\n            <br/>\n        <div class=\"tim-title\">\n            <h3>Links</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8\">\n                <a href=\"#0\" class=\"btn btn-link btn-default\">Default</a>\n                <a href=\"#0\" class=\"btn btn-link btn-primary\">Primary</a>\n                <a href=\"#0\" class=\"btn btn-link btn-success\">Success</a>\n                <a href=\"#0\" class=\"btn btn-link btn-info\">Info</a>\n                <a href=\"#0\" class=\"btn btn-link btn-warning\">Warning</a>\n                <a href=\"#0\" class=\"btn btn-link btn-danger\">Danger</a>\n                <a href=\"#0\" class=\"btn btn-link btn-neutral\">Neutral</a>\n            </div>\n        </div>\n        <br/>\n        <div class=\"tim-title\">\n            <h3>Inputs</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-sm-3\">\n                <div class=\"form-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Default\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-success\">\n                    <input type=\"text\" class=\"form-control form-control-success\" id=\"inputSuccess1\" value=\"Success\">\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"form-group has-danger\">\n                    <input type=\"text\" class=\"form-control form-control-danger\" id=\"inputDanger1\" value=\"Error\">\n                    <div class=\"form-control-feedback\">Sorry, that username's taken. Try another?</div>\n                </div>\n            </div>\n            <div class=\"col-sm-3\">\n                <div class=\"input-group\">\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Username\" aria-describedby=\"basic-addon1\">\n                    <span class=\"input-group-addon\" id=\"basic-addon1\"><i class=\"fa fa-group\" aria-hidden=\"true\"></i></span>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Checkboxes</h3>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\">\n                    Unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">\n                    Checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" disabled=\"\">\n                    Disabled unchecked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\" disabled=\"\">\n                    Disabled checked\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Radio Buttons</h3>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\" >\n                    Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios2\" value=\"option2\" checked=\"\">\n                    Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios3\" value=\"option3\" disabled=\"\">\n                    Disabled Radio is off\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n                <div class=\"form-check-radio disabled\">\n                  <label class=\"form-check-label\">\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios4\" value=\"option3\" checked disabled=\"\">\n                    Disabled Radio is on\n                    <span class=\"form-check-sign\"></span>\n                  </label>\n                </div>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Toggle Buttons</h3>\n                </div>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\">\n                </bSwitch>\n                <bSwitch\n                    [switch-on-color]=\"'primary'\"\n                    [(ngModel)]=\"state_default\"> Toggle is off\n                </bSwitch>\n            </div>\n            <div class=\"col-sm-6 col-lg-3\">\n                <div class=\"tim-title\">\n                    <h3>Sliders</h3>\n                </div>\n                <nouislider [connect]=\"false\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"false\" class=\"slider\"></nouislider>\n                <br>\n                <nouislider class=\"slider slider-info\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"false\"></nouislider>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/basicelements/basicelements.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicelementsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BasicelementsComponent = (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state_default = true;
    }
    BasicelementsComponent.prototype.ngOnInit = function () { };
    return BasicelementsComponent;
}());
BasicelementsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-basicelements',
        template: __webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], BasicelementsComponent);

//# sourceMappingURL=basicelements.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.component.html":
/***/ (function(module, exports) {

module.exports = "<app-basicelements></app-basicelements>\n<app-navigation></app-navigation>\n<div class=\"section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Progress Bar</h3>\n                    <br/>\n                </div>\n                <ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar><br>\n                <ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar><br>\n                <ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar><br>\n                <ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar>\n\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Pagination</h3>\n                    <br/>\n                </div>\n                <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" aria-label=\"Default pagination\"></ngb-pagination>\n                <br/>\n                <ngb-pagination [collectionSize]=\"100\" [(page)]=\"page1\" [maxSize]=\"5\" [rotate]=\"true\"></ngb-pagination>\n            </div>\n        </div>\n        <br/>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Navigation Tabs</h3>\n                </div>\n\n                <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                        <ngb-tabset [justify]=\"'center'\">\n                            <ngb-tab title=\"Home\">\n                                <ng-template ngbTabContent>\n                                    <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient. With a smooth metal surface that seamlessly meets the new Retina HD display.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Profile\">\n                                <ng-template ngbTabContent>\n                                    <p>Here is your profile.</p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Messages\">\n                                <ng-template ngbTabContent>\n                                    <p>Here are your messages.</p>\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                    </div>\n                </div>\n\n            </div>\n\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Labels</h3>\n                </div>\n                <span class=\"label label-default\">Default</span>\n                <span class=\"label label-primary\">Primary</span>\n                <span class=\"label label-info\">Info</span>\n                <span class=\"label label-success\">Success</span>\n                <span class=\"label label-warning\">Warning</span>\n                <span class=\"label label-danger\">Danger</span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"section section-notifications\" id=\"notifications\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h3>Notification</h3>\n        </div>\n    </div>\n    <app-notification></app-notification>\n</div>\n<app-typography></app-typography>\n<div class=\"section javascript-components\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h2>Angular Native Components</h2>\n        </div>\n        <div class=\"row\" id=\"modals\">\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Modal</h3>\n                </div>\n                <app-modal-component></app-modal-component>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Popovers</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\">\n                    on right\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\n                    on top\n                </button>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\n                    on left\n                </button>\n                \n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\"\n                    ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\n                    on bottom\n                </button>\n\n            </div>\n            <br/>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Datepicker</h3>\n                </div>\n                <div class=\"row\">\n                    <div class='col-sm-6'>\n                        <form class=\"form-inline\">\n                            <div class=\"form-group\">\n                                <div class=\"input-group date\">\n                                    <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\">\n                                    <span class=\"input-group-addon\">\n                                        <span class=\"glyphicon glyphicon-calendar\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i></span>\n                                    </span>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"tim-title\">\n                    <h3>Tooltips</h3>\n                </div>\n\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\n                   on right\n               </button>\n               <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\n                  on left\n               </button>\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\n                   on top\n                </button>\n                <button type=\"button\" class=\"btn btn-outline-danger btn-round\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\n                   on bottom\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"section\" id=\"carousel\">\n    <div class=\"container\">\n        <div class=\"tim-title\">\n            <h3>Carousel</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <div class=\"card page-carousel\">\n                    <ngb-carousel>\n                        <ng-template ngbSlide>\n                            <img src=\"../assets/img/soroush-karimi.jpg\" alt=\"Random first slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Somewhere</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"../assets/img/federico-beccari.jpg\" alt=\"Random second slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Somewhere else</p>\n                            </div>\n                        </ng-template>\n                        <ng-template ngbSlide>\n                            <img src=\"../assets/img/joshua-stannard.jpg\" alt=\"Random third slide\">\n                            <div class=\"carousel-caption\">\n                                <p>Here it is</p>\n                            </div>\n                        </ng-template>\n                    </ngb-carousel>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/components.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ComponentsComponent = (function () {
    function ComponentsComponent(renderer) {
        this.renderer = renderer;
        this.page = 4;
        this.page1 = 5;
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var input_group_focus = document.getElementsByClassName('form-control');
        var input_group = document.getElementsByClassName('input-group');
        var _loop_1 = function (i) {
            input_group[i].children[0].addEventListener('focus', function () {
                input_group[i].classList.add('input-group-focus');
            });
            input_group[i].children[0].addEventListener('blur', function () {
                input_group[i].classList.remove('input-group-focus');
            });
        };
        for (var i = 0; i < input_group.length; i++) {
            _loop_1(i);
        }
    };
    return ComponentsComponent;
}());
ComponentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-components',
        template: __webpack_require__("../../../../../src/app/components/components.component.html"),
        styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _a || Object])
], ComponentsComponent);

var _a;
//# sourceMappingURL=components.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__ = __webpack_require__("../../../../ng2-nouislider/src/nouislider.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__ = __webpack_require__("../../../../jw-bootstrap-switch-ng2/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__basicelements_basicelements_component__ = __webpack_require__("../../../../../src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__typography_typography_component__ = __webpack_require__("../../../../../src/app/components/typography/typography.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nucleoicons_nucleoicons_component__ = __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_component__ = __webpack_require__("../../../../../src/app/components/components.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__notification_notification_component__ = __webpack_require__("../../../../../src/app/components/notification/notification.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modal_modal_component__ = __webpack_require__("../../../../../src/app/components/modal/modal.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_4_ng2_nouislider__["NouisliderModule"],
            __WEBPACK_IMPORTED_MODULE_5_jw_bootstrap_switch_ng2__["JWBootstrapSwitchModule"]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__components_component__["a" /* ComponentsComponent */],
            __WEBPACK_IMPORTED_MODULE_6__basicelements_basicelements_component__["a" /* BasicelementsComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_8__typography_typography_component__["a" /* TypographyComponent */],
            __WEBPACK_IMPORTED_MODULE_9__nucleoicons_nucleoicons_component__["a" /* NucleoiconsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__notification_notification_component__["a" /* NotificationComponent */],
            __WEBPACK_IMPORTED_MODULE_12__modal_modal_component__["a" /* NgbdModalComponent */],
            __WEBPACK_IMPORTED_MODULE_12__modal_modal_component__["b" /* NgbdModalContent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_12__modal_modal_component__["b" /* NgbdModalContent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_10__components_component__["a" /* ComponentsComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<p>You can pass an existing component as content of the modal window. In this case remember to add content component\nas an <code>entryComponents</code> section of your <code>NgModule</code>.</p>\n\n<button class=\"btn btn-outline-danger btn-round\" (click)=\"open()\">Launch demo modal</button>\n"

/***/ }),

/***/ "../../../../../src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NgbdModalContent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgbdModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NgbdModalContent = (function () {
    function NgbdModalContent(activeModal) {
        this.activeModal = activeModal;
    }
    return NgbdModalContent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NgbdModalContent.prototype, "name", void 0);
NgbdModalContent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-content',
        template: "\n    <div class=\"modal-header\">\n        <h5 class=\"modal-title text-center\">Modal title</h5>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\"> Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.\n    </div>\n    <div class=\"modal-footer\">\n        <div class=\"left-side\">\n            <button type=\"button\" class=\"btn btn-default btn-link\" (click)=\"activeModal.close('Close click')\">Never mind</button>\n        </div>\n        <div class=\"divider\"></div>\n        <div class=\"right-side\">\n            <button type=\"button\" class=\"btn btn-danger btn-link\" (click)=\"activeModal.close('Close click')\">DELETE</button>\n        </div>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["b" /* NgbActiveModal */]) === "function" && _a || Object])
], NgbdModalContent);

var NgbdModalComponent = (function () {
    function NgbdModalComponent(modalService) {
        this.modalService = modalService;
    }
    NgbdModalComponent.prototype.open = function () {
        var modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    };
    return NgbdModalComponent;
}());
NgbdModalComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-component',
        template: __webpack_require__("../../../../../src/app/components/modal/modal.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _b || Object])
], NgbdModalComponent);

var _a, _b;
//# sourceMappingURL=modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section section-navbars\">\n    <div class=\"container\" id=\"menu-dropdown\">\n        <div class=\"tim-title\">\n            <h3>Menu</h3>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse\" id=\"navbar-menu\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\">Link</a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <div ngbDropdown class=\"d-inline-block dropdown\">\n                                        <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle>Dropdown</a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n            <div class=\"col-md-6\">\n                <nav class=\"navbar navbar-expand-lg bg-danger\">\n                    <div class=\"container\">\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\n                        <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-menu-icon\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                            <span class=\"navbar-toggler-icon\"></span>\n                        </button>\n                        <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbar-menu-icon\">\n                            <ul class=\"navbar-nav\">\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-email-85\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item\">\n                                    <a class=\"nav-link\" href=\"#pk\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i></a>\n                                </li>\n                                <li class=\"nav-item \">\n                                    <div ngbDropdown class=\"dropdown\">\n                                    <a class=\"nav-link\" id=\"dropdownBasic1\" ngbDropdownToggle><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                                        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-danger dropdown-menu-right\">\n                                            <a class=\"dropdown-item\">Action - 1</a>\n                                            <a class=\"dropdown-item\">Another Action</a>\n                                            <a class=\"dropdown-item\">Something else is here</a>\n                                            <div class=\"dropdown-divider\"></div>\n                                            <a class=\"dropdown-item\">Separated link</a>\n                                        </div>\n                                    </div>\n                                </li>\n                            </ul>\n                        </div>\n                    </div>\n                </nav>\n            </div>\n        </div>\n    </div>\n    <div id=\"navbar\">\n        <div class=\"container\">\n            <div class=\"tim-title\">\n                <h3>Navigation</h3>\n                <br/>\n            </div>\n        </div>\n        <div class=\"navigation-example\">\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Primary Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right burger-menu\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-primary\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-primary\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i>&nbsp;Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i>&nbsp;Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i>&nbsp;Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-info\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Info Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-info\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-info\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Discover</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Profile</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\">Settings</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-success\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Success Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-success\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-success\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-compass-05\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-single-02\" aria-hidden=\"true\"></i> </a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"nc-icon nc-settings-gear-65\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Warning Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-warning\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-warning\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-google-plus\" aria-hidden=\"true\"></i></a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Danger Color</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-danger\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-danger\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Share</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Tweet</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-pinterest\" aria-hidden=\"true\"></i> Pin</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\n                <div class=\"container\">\n                    <a class=\"navbar-brand\" href=\"#\">Transparent</a>\n                    <button class=\"navbar-toggler navbar-toggler-right\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-transparent\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                        <span class=\"navbar-toggler-bar\"></span>\n                    </button>\n                    <div class=\"collapse navbar-collapse\" id=\"navbar-transparent\">\n                        <ul class=\"navbar-nav ml-auto\">\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-facebook-official\" aria-hidden=\"true\"></i> Facebook</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i> Twitter</a>\n                            </li>\n                            <li class=\"nav-item\">\n                                <a class=\"nav-link\" href=\"#\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i> Instagram</a>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </nav>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/components/navigation/navigation.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/navigation/navigation.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.html":
/***/ (function(module, exports) {

module.exports = "<p *ngFor=\"let alert of alerts\">\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\">\n        <div class=\"container\">\n            <ng-container *ngIf=\"alert.icon\">\n                <i class=\"nc-icon {{alert.icon}}\"></i>\n            </ng-container>\n\n            {{ alert.message }}\n            <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\n                <i class=\"nc-icon nc-simple-remove\"></i>\n            </button>\n        </div>\n    </ngb-alert>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/notification/notification.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotificationComponent = (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
            icon: 'nc-bell-55'
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
            icon: 'nc-bell-55'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    return NotificationComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], NotificationComponent.prototype, "alerts", void 0);
NotificationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-notification',
        template: __webpack_require__("../../../../../src/app/components/notification/notification.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/notification/notification.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], NotificationComponent);

//# sourceMappingURL=notification.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n    <h1>Paper Kit 2 Icons</h1>\n    <p>Built with <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a></p>\n</header>\n\n<div id=\"icons-wrapper\">\n    <section>\n        <ul>\n            <li>\n                <i class=\"nc-icon nc-air-baloon\"></i>\n                <p>nc-air-baloon</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-album-2\"></i>\n                <p>nc-album-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-alert-circle-i\"></i>\n                <p>nc-alert-circle-i</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-center\"></i>\n                <p>nc-align-center</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-align-left-2\"></i>\n                <p>nc-align-left-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ambulance\"></i>\n                <p>nc-ambulance</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-app\"></i>\n                <p>nc-app</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-atom\"></i>\n                <p>nc-atom</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-badge\"></i>\n                <p>nc-badge</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bag-16\"></i>\n                <p>nc-bag-16</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bank\"></i>\n                <p>nc-bank</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-basket\"></i>\n                <p>nc-basket</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bell-55\"></i>\n                <p>nc-bell-55</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bold\"></i>\n                <p>nc-bold</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-book-bookmark\"></i>\n                <p>nc-book-bookmark</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bookmark-2\"></i>\n                <p>nc-bookmark-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box-2\"></i>\n                <p>nc-box-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-box\"></i>\n                <p>nc-box</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-briefcase-24\"></i>\n                <p>nc-briefcase-24</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bulb-63\"></i>\n                <p>nc-bulb-63</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bullet-list-67\"></i>\n                <p>nc-bullet-list-67</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-bus-front-12\"></i>\n                <p>nc-bus-front-12</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-pause\"></i>\n                <p>nc-button-pause</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-play\"></i>\n                <p>nc-button-play</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-button-power\"></i>\n                <p>nc-button-power</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-calendar-60\"></i>\n                <p>nc-calendar-60</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-camera-compact\"></i>\n                <p>nc-camera-compact</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-caps-small\"></i>\n                <p>nc-caps-small</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cart-simple\"></i>\n                <p>nc-cart-simple</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-bar-32\"></i>\n                <p>nc-chart-bar-32</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chart-pie-36\"></i>\n                <p>nc-chart-pie-36</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-chat-33\"></i>\n                <p>nc-chat-33</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-check-2\"></i>\n                <p>nc-check-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-circle-10\"></i>\n                <p>nc-circle-10</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-download-93\"></i>\n                <p>nc-cloud-download-93</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-cloud-upload-94\"></i>\n                <p>nc-cloud-upload-94</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-compass-05\"></i>\n                <p>nc-compass-05</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-controller-modern\"></i>\n                <p>nc-controller-modern</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-credit-card\"></i>\n                <p>nc-credit-card</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-delivery-fast\"></i>\n                <p>nc-delivery-fast</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-diamond\"></i>\n                <p>nc-diamond</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-email-85\"></i>\n                <p>nc-email-85</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-favourite-28\"></i>\n                <p>nc-favourite-28</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-glasses-2\"></i>\n                <p>nc-glasses-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe-2\"></i>\n                <p>nc-globe-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-globe\"></i>\n                <p>nc-globe</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-hat-3\"></i>\n                <p>nc-hat-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-headphones\"></i>\n                <p>nc-headphones</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-html5\"></i>\n                <p>nc-html5</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-image\"></i>\n                <p>nc-image</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-istanbul\"></i>\n                <p>nc-istanbul</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-key-25\"></i>\n                <p>nc-key-25</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-laptop\"></i>\n                <p>nc-laptop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-layout-11\"></i>\n                <p>nc-layout-11</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-lock-circle-open\"></i>\n                <p>nc-lock-circle-open</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-map-big\"></i>\n                <p>nc-map-big</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-down\"></i>\n                <p>nc-minimal-down</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-left\"></i>\n                <p>nc-minimal-left</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-right\"></i>\n                <p>nc-minimal-right</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-minimal-up\"></i>\n                <p>nc-minimal-up</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-mobile\"></i>\n                <p>nc-mobile</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-money-coins\"></i>\n                <p>nc-money-coins</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-note-03\"></i>\n                <p>nc-note-03</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-palette\"></i>\n                <p>nc-palette</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-paper\"></i>\n                <p>nc-paper</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-pin-3\"></i>\n                <p>nc-pin-3</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-planet\"></i>\n                <p>nc-planet</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-refresh-69\"></i>\n                <p>nc-refresh-69</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-ruler-pencil\"></i>\n                <p>nc-ruler-pencil</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-satisfied\"></i>\n                <p>nc-satisfied</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-scissors\"></i>\n                <p>nc-scissors</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-send\"></i>\n                <p>nc-send</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings-gear-65\"></i>\n                <p>nc-settings-gear-65</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-settings\"></i>\n                <p>nc-settings</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-share-66\"></i>\n                <p>nc-share-66</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-shop\"></i>\n                <p>nc-shop</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-add\"></i>\n                <p>nc-simple-add</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-delete\"></i>\n                <p>nc-simple-delete</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-simple-remove\"></i>\n                <p>nc-simple-remove</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-02\"></i>\n                <p>nc-single-02</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-single-copy-04\"></i>\n                <p>nc-single-copy-04</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sound-wave\"></i>\n                <p>nc-sound-wave</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-spaceship\"></i>\n                <p>nc-spaceship</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-sun-fog-29\"></i>\n                <p>nc-sun-fog-29</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-support-17\"></i>\n                <p>nc-support-17</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tablet-2\"></i>\n                <p>nc-tablet-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tag-content\"></i>\n                <p>nc-tag-content</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tap-01\"></i>\n                <p>nc-tap-01</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tie-bow\"></i>\n                <p>nc-tie-bow</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tile-56\"></i>\n                <p>nc-tile-56</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-time-alarm\"></i>\n                <p>nc-time-alarm</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-touch-id\"></i>\n                <p>nc-touch-id</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-trophy\"></i>\n                <p>nc-trophy</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-tv-2\"></i>\n                <p>nc-tv-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-umbrella-13\"></i>\n                <p>nc-umbrella-13</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-user-run\"></i>\n                <p>nc-user-run</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-vector\"></i>\n                <p>nc-vector</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-watch-time\"></i>\n                <p>nc-watch-time</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-world-2\"></i>\n                <p>nc-world-2</p>\n            </li>\n\n            <li>\n                <i class=\"nc-icon nc-zoom-split\"></i>\n                <p>nc-zoom-split</p>\n            </li>\n            <!-- list of icons here with the proper class-->\n        </ul>\n    </section>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nucleoicons/nucleoicons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NucleoiconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NucleoiconsComponent = (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('app-nucleoicons')[0];
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.add('navbar-hidden');
        body.classList.add('demo-icons');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-hidden');
    };
    return NucleoiconsComponent;
}());
NucleoiconsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nucleoicons',
        template: __webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nucleoicons/nucleoicons.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], NucleoiconsComponent);

var _a;
//# sourceMappingURL=nucleoicons.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section\">\n    <div class=\"container tim-container\">\n        <div class=\"tim-title\">\n            <h3>Typography</h3>\n            <br/>\n        </div>\n        <div id=\"typography\">\n            <div class=\"row\">\n                <div class=\"typography-line\">\n                    <h1>\n                        <span class=\"note\">Header 1</span> Thinking in textures\n                    </h1>\n                </div>\n                <div class=\"typography-line\">\n                    <h2>\n                        <span class=\"note\">Header 2</span> Thinking in textures\n                    </h2>\n                </div>\n                <div class=\"typography-line\">\n                    <h3>\n                        <span class=\"note\">Header 3</span> Thinking in textures\n                    </h3>\n                </div>\n                <div class=\"typography-line\">\n                    <h4>\n                        <span class=\"note\">Header 4</span> Thinking in textures\n                    </h4>\n                </div>\n                <div class=\"typography-line\">\n                    <h5>\n                        <span class=\"note\">Header 5</span> Thinking in textures\n                    </h5>\n                </div>\n                <div class=\"typography-line\">\n                    <h6>\n                        <span class=\"note\">Header 6</span> Thinking in textures\n                    </h6>\n                </div>\n                <div class=\"typography-line\">\n                    <p>\n                        <span class=\"note\">Paragraph</span> Thinking in textures\n                    </p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Quote</span>\n                    <blockquote class=\"blockquote\">\n                        <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>\n                        <footer class=\"blockquote-footer\">Someone famous in <cite title=\"source Title\">Source Title</cite></footer>\n                    </blockquote>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Muted text</span>\n                    <p class=\"text-muted\">Fusce dapibus, tellus ac cursus commodo, tortor mauris nibh.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Primary text</span>\n                    <p class=\"text-primary\">Nullam id dolor id nibh ultricies vehicula ut id elit.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Success text</span>\n                    <p class=\"text-success\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Info text</span>\n                    <p class=\"text-info\">Maecenas sed diam eget risus varius blandit sit amet non magna.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Warning text</span>\n                    <p class=\"text-warning\">Etiam porta sem malesuada magna mollis euismod.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <span class=\"note\">Danger text</span>\n                    <p class=\"text-danger\">Donec ullamcorper nulla non metus auctor fringilla.</p>\n                </div>\n                <div class=\"typography-line\">\n                    <h2><span class=\"note\">Small tag</span>Header with small subtitle\n                        <br/>\n                        <small>\".small\" is a tag for the headers</small>\n                    </h2>\n                </div>\n            </div>\n        </div>\n        <br/>\n        <div id=\"images\">\n            <div class=\"container\">\n                <div class=\"tim-title\">\n                    <h3>Images</h3>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-xs-8 col-sm-6 col-md-3\">\n                        <h4 class=\"images-title\">Rounded Image</h4>\n                        <img src=\"assets/img/uriel-soberanes.jpg\" class=\"img-rounded img-responsive\" alt=\"Rounded Image\">\n                        <div class=\"img-details\">\n                            <div class=\"author\">\n                                <img src=\"assets/img/faces/clem-onojeghuo-2.jpg\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                            </div>\n                            <p>Chet Faker</p>\n                        </div>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Circle Image</h4>\n                        <img src=\"assets/img/faces/joe-gardner-2.jpg\" class=\"img-circle img-no-padding img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Joe Gardner</p>\n                    </div>\n                    <div class=\"col-xs-6  col-sm-3 col-md-2 offset-md-1\">\n                        <h4 class=\"images-title\">Thumbnail</h4>\n                        <img src=\"assets/img/faces/clem-onojeghuo-3.jpg\" class=\"img-thumbnail img-responsive\" alt=\"Rounded Image\">\n                        <p class=\"text-center\">Erik Faker</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/typography/typography.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypographyComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TypographyComponent = (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    return TypographyComponent;
}());
TypographyComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-typography',
        template: __webpack_require__("../../../../../src/app/components/typography/typography.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/typography/typography.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], TypographyComponent);

//# sourceMappingURL=typography.component.js.map

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('../assets/img/daniel-olahh.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"motto text-center\">\r\n            <h1>Contact Us</h1>\r\n            <h3>We help to solve your problems</h3>\r\n            <br />\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"section landing-section\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <h2 class=\"text-center\">Keep in touch?</h2>\r\n                    <form class=\"contact-form\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6\">\r\n                                <label>Name</label>\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                        <i class=\"nc-icon nc-single-02\"></i>\r\n                                    </span>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6\">\r\n                                <label>Email</label>\r\n                                <div class=\"input-group\">\r\n                                    <span class=\"input-group-addon\">\r\n                                        <i class=\"nc-icon nc-email-85\"></i>\r\n                                    </span>\r\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <label>Message</label>\r\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-4 mr-auto ml-auto\">\r\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\r\n                            </div>\r\n                        </div>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-us/contact-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactUsComponent = (function () {
    function ContactUsComponent() {
    }
    ContactUsComponent.prototype.ngOnInit = function () { };
    return ContactUsComponent;
}());
ContactUsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'contact-us',
        template: __webpack_require__("../../../../../src/app/contact-us/contact-us.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-us/contact-us.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ContactUsComponent);

//# sourceMappingURL=contact-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header section-dark\" style=\"background-image: url('assets/img/ilya-yakover.jpg')\">\n        <div class=\"filter\"></div>\n        <div class=\"content-center\">\n            <div class=\"container\">\n                <div class=\"title-brand\">\n                    <h1>Best contest marketplace software from Agriya Labs</h1>\n                    <div class=\"fog-low\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                    <div class=\"fog-low right\">\n                        <img src=\"assets/img/fog-low.png\" alt=\"\">\n                    </div>\n                </div>\n\n                <h2 class=\"presentation-subtitle text-center\">your image & video contests site. Crowdsource instantly.</h2>\n            </div>\n        </div>\n        <div class=\"moving-clouds\" style=\"background-image: url('assets/img/clouds.png'); \"></div>\n        <h6 class=\" category-absolute ml-auto mr-auto\">© 2018 360contest.com. All rights reserved.</h6>\n    </div>\n    <div class=\"main\">\n        <div class=\"section\">\n            <div class=\"container text-center\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Agriya® Solutions</h2>\n                        <p class=\"description\">Incase if you don't know... for years, Agriya® doesn't just sell products, but offers multiple solutions\n                            and services.</p>\n                    </div>\n                </div>\n\n\n\n                <div class=\"row\">\n                    <div class=\"col-md-4 download-area ml-auto mr-auto\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <h3>Micro Entrepreneur Solutions</h3>\n                                <p>Expert consultation</p>\n                                <p>Ideation</p>\n                                <p>Pivoting consultation</p>\n                                <p>MVP</p>\n                                <p>Marketing strategy</p>\n                                <p>Hosting consultation</p>\n                                <p>Server management</p>\n                                <p>Leads to likeminded startupers</p>\n                                <p>PR (Public Relation)</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 download-area ml-auto mr-auto\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <h3>SME Solutions</h3>\n                                <p>Search Engine Optimization (SEO)</p>\n                                <p>Social media marketing</p>\n                                <p>Server management</p>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-4 download-area ml-auto mr-auto\">\n                        <div class=\"card\">\n                            <div class=\"card-body\">\n                                <h3>Enterprise Solutions</h3>\n                                <p>Big data</p>\n                                <p>Machine Learning (ML)</p>\n                                <p>Artificial Intelligence (AI)</p>\n                                <p>Recommendation Engine</p>\n                                <p>Data Analytics</p>\n                                <p>Hadoop, Mahout</p>\n                                <p>Business Process Outsourcing (BPO)</p>\n                                <p>Payment processing</p>\n                                <p>Financial solutions</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"section section-dark\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-8 ml-auto mr-auto text-center\">\n                        <h2 class=\"title\">Agriya® 360 Contest Advantages</h2>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-4 ml-auto mr-auto text-center\">\n                        <p>Made in ISO 9001-2008 certified and NASSCOM® listed company</p>\n                        <p>First and complete contest software</p>\n                        <p>Available Resources: Image, Video, Audio & text</p>\n                        <p>Has many revenue options</p>\n                    </div>\n                    <div class=\"col-md-4 ml-auto mr-auto text-center\">\n                        <p>Multilingual support</p>\n                        <p>With MVC and plugin based architecture</p>\n                        <p>Growth hacking plugin for improving user growth</p>\n                        <p> High performance and cloud ready</p>\n                    </div>\n                    <div class=\"col-md-4 ml-auto mr-auto text-center\">\n                        <p>Mobile friendly</p>\n                        <p>Streamlined workflow and hence no maintenance headaches</p>\n                    </div>\n                </div>\n                <br/>\n                <div class=\"row\">\n                    <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                        <img src='http://360contest.demo.agriya.com/img/certified-logo.png' alt='image'>\n                    </div>\n                    <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                        <img src='http://360contest.demo.agriya.com/img/nasscom.png' alt='image'>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n\n        <div class=\"section\">\n            <div class=\"container text-center\">\n                <div class=\"row justify-content-md-center sharing-area text-center\">\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <h3>Follow us on!</h3>\n                    </div>\n                    <div class=\"text-center col-md-12 col-lg-8\">\n                        <a href=\"#pablo\" class=\"btn btn-twitter-bg twitter-sharrre btn-round\" rel=\"tooltip\" title=\"Tweet!\">\n                            <i class=\"fa fa-twitter\"></i> Twitter\n                        </a>\n                        <a href=\"#pablo\" class=\"btn btn-google-bg linkedin-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\n                            <i class=\"fa fa-google-plus\"></i> Google\n                        </a>\n                        <a href=\"#pablo\" class=\"btn btn-facebook-bg facebook-sharrre btn-round\" rel=\"tooltip\" title=\"Share!\">\n                            <i class=\"fa fa-facebook-square\"></i> Facebook\n                        </a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  background-color: #e0dcdc52; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
        this.model = {
            left: true,
            middle: false,
            right: false
        };
    }
    HomeComponent.prototype.ngOnInit = function () { };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__("../../../../../src/app/components/components.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__home_component__["a" /* HomeComponent */]],
        providers: []
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/how-it-works/components/works-page/works-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"section landing-section\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 mr-auto ml-auto\">\r\n                <h2 class=\"text-center\">Contest Holder</h2>\r\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <h2 class=\"text-center\">Participant</h2>\r\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n                </div>\r\n            </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/how-it-works/components/works-page/works-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/how-it-works/components/works-page/works-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WorkPageComponent = (function () {
    function WorkPageComponent() {
    }
    WorkPageComponent.prototype.ngOnInit = function () { };
    return WorkPageComponent;
}());
WorkPageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'how-works',
        template: __webpack_require__("../../../../../src/app/how-it-works/components/works-page/works-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/how-it-works/components/works-page/works-page.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], WorkPageComponent);

//# sourceMappingURL=works-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/how-it-works/containers/how-it-works/how-it-work.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('../assets/img/daniel-olahh.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"motto text-center\">\r\n            <h1>How Works</h1>\r\n            <h3>Start designing your landing page here.</h3>\r\n            <br />\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<how-works></how-works>\r\n"

/***/ }),

/***/ "../../../../../src/app/how-it-works/containers/how-it-works/how-it-work.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/how-it-works/containers/how-it-works/how-it-work.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowItWorksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HowItWorksComponent = (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () { };
    return HowItWorksComponent;
}());
HowItWorksComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/how-it-works/containers/how-it-works/how-it-work.component.html"),
        styles: [__webpack_require__("../../../../../src/app/how-it-works/containers/how-it-works/how-it-work.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HowItWorksComponent);

//# sourceMappingURL=how-it-work.component.js.map

/***/ }),

/***/ "../../../../../src/app/how-it-works/work.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HowItWorkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__containers_how_it_works_how_it_work_component__ = __webpack_require__("../../../../../src/app/how-it-works/containers/how-it-works/how-it-work.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_works_page_works_page_component__ = __webpack_require__("../../../../../src/app/how-it-works/components/works-page/works-page.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var HowItWorkModule = (function () {
    function HowItWorkModule() {
    }
    return HowItWorkModule;
}());
HowItWorkModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__containers_how_it_works_how_it_work_component__["a" /* HowItWorksComponent */], __WEBPACK_IMPORTED_MODULE_6__components_works_page_works_page_component__["a" /* WorkPageComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__containers_how_it_works_how_it_work_component__["a" /* HowItWorksComponent */]],
        providers: []
    })
], HowItWorkModule);

//# sourceMappingURL=work.module.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('../assets/img/daniel-olahh.jpg');\">\n    <div class=\"filter\"></div>\n    <div class=\"container\">\n        <div class=\"motto text-center\">\n            <h1>Example page</h1>\n            <h3>Start designing your landing page here.</h3>\n            <br />\n            <a href=\"https://www.youtube.com/watch?v=dQw4w9WgXcQ\" class=\"btn btn-outline-neutral btn-round\"><i class=\"fa fa-play\"></i>Watch video</a>\n            <button type=\"button\" class=\"btn btn-outline-neutral btn-round\">Download</button>\n        </div>\n    </div>\n</div>\n<div class=\"main\">\n    <div class=\"section text-center\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-8 mr-auto ml-auto\">\n                <h2 class=\"title\">Let's talk product</h2>\n                <h5 class=\"description\">This is the paragraph where you can write more details about your product. Keep you user engaged by providing meaningful information. Remember that by this time, the user is curious, otherwise he wouldn't scroll to get here. Add a button if you want the user to see more.</h5>\n                <br>\n                <a href=\"#paper-kit\" class=\"btn btn-danger btn-round\">See Details</a>\n            </div>\n        </div>\n        <br/><br/>\n        <div class=\"row\">\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-album-2\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Beautiful Gallery</h4>\n                        <p class=\"description\">Spend your time generating new ideas. You don't have to think of implementing.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-bulb-63\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">New Ideas</h4>\n                        <p>Larger, yet dramatically thinner. More powerful, but remarkably power efficient.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-chart-bar-32\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Statistics</h4>\n                        <p>Choose from a veriety of many colors resembling sugar paper pastels.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"info\">\n                    <div class=\"icon icon-danger\">\n                        <i class=\"nc-icon nc-sun-fog-29\"></i>\n                    </div>\n                    <div class=\"description\">\n                        <h4 class=\"info-title\">Delightful design</h4>\n                        <p>Find unique and handmade delightful designs related items directly from our sellers.</p>\n                        <a href=\"#pkp\" class=\"btn btn-link btn-danger\">See more</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>\n\n<div class=\"section section-dark text-center\">\n    <div class=\"container\">\n        <h2 class=\"title\">Let's talk about us</h2>\n        <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"../assets/img/faces/clem-onojeghuo-3.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Henry Ford</h4>\n                                <h6 class=\"card-category\">Product Manager</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        Teamwork is so important that it is virtually impossible for you to reach the heights of your capabilities or make the money that you want without becoming very good at it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"../assets/img/faces/joe-gardner-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Sophie West</h4>\n                                <h6 class=\"card-category\">Designer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        A group becomes a team when each member is sure enough of himself and his contribution to praise the skill of the others. No one can whistle a symphony. It takes an orchestra to play it.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-md-4\">\n                <div class=\"card card-profile card-plain\">\n                    <div class=\"card-avatar\">\n                        <a href=\"#avatar\"><img src=\"../assets/img/faces/erik-lucatero-2.jpg\" alt=\"...\"></a>\n                    </div>\n                    <div class=\"card-block\">\n                        <a href=\"#paper-kit\">\n                            <div class=\"author\">\n                                <h4 class=\"card-title\">Robert Orben</h4>\n                                <h6 class=\"card-category\">Developer</h6>\n                            </div>\n                        </a>\n                        <p class=\"card-description text-center\">\n                        The strength of the team is each individual member. The strength of each member is the team. If you can laugh together, you can work together, silence isn’t golden, it’s deadly.\n                        </p>\n                    </div>\n                    <div class=\"card-footer text-center\">\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-twitter\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-google-plus\"></i></a>\n                        <a href=\"#pablo\" class=\"btn btn-link btn-just-icon btn-neutral\"><i class=\"fa fa-linkedin\"></i></a>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n    <div class=\"section landing-section\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-8 mr-auto ml-auto\">\n                    <h2 class=\"text-center\">Keep in touch?</h2>\n                    <form class=\"contact-form\">\n                        <div class=\"row\">\n                            <div class=\"col-md-6\">\n                                <label>Name</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-single-02\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Name\">\n                                </div>\n                            </div>\n                            <div class=\"col-md-6\">\n                                <label>Email</label>\n                                <div class=\"input-group\">\n                                    <span class=\"input-group-addon\">\n                                        <i class=\"nc-icon nc-email-85\"></i>\n                                    </span>\n                                    <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n                                </div>\n                            </div>\n                        </div>\n                        <label>Message</label>\n                        <textarea class=\"form-control\" rows=\"4\" placeholder=\"Tell us your thoughts and feelings...\"></textarea>\n                        <div class=\"row\">\n                            <div class=\"col-md-4 mr-auto ml-auto\">\n                                <button class=\"btn btn-danger btn-lg btn-fill\">Send Message</button>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingComponent = (function () {
    function LandingComponent() {
    }
    LandingComponent.prototype.ngOnInit = function () { };
    return LandingComponent;
}());
LandingComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing',
        template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing/landing.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LandingComponent);

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/post-contests/components/first-step/first-step.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <div class=\"row\" *ngFor='let post of posts'>\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <div class=\"card\"  (click)='checkLogin(post.title)'>\r\n                <div class=\"card-header\">\r\n                    <h5>{{post.title}}</h5>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>{{post.post}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/post-contests/components/first-step/first-step.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card {\n  background-color: #e0dcdc52; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-contests/components/first-step/first-step.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstStepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__containers_post_contest_post_contest_component__ = __webpack_require__("../../../../../src/app/post-contests/containers/post-contest/post-contest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_service__ = __webpack_require__("../../../../../src/app/post-contests/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FirstStepComponent = (function () {
    function FirstStepComponent(authService, router, postcomponent, sharedservice) {
        this.authService = authService;
        this.router = router;
        this.postcomponent = postcomponent;
        this.sharedservice = sharedservice;
        this.posts = [
            { "title": "Background Music", "post": "Background music refers to various styles of music or soundscapes primarily intended to be passively listened to. It is not meant to be the main focus of an audience, but rather to supplement that which is meant to be focused upon. Music that is played at a low volume and is not the main focus of an audience is also referred to as background music. Traditional examples of background music include music played at various social gatherings and music played in certain retail venues. It is also common to employ background music in various electronic media including film, television, and Internet videos such as video blogs.", "price": "70.00" },
            { "title": "Banner Ad Design", "post": "Banner ads are the most ubiquitous form of marketing on the Internet. Since the days of Geocities and MySpace, banner ads have peppered the World Wide Web, advertising everything from free iPads to flash sales.", "price": "20.00" },
            { "title": "Brochure Design", "post": "Brochures are often printed using four-color process on thick, glossy paper to give an initial impression of quality. Businesses may print small quantities of brochures on a computer printer or on a digital printer, but offset printing turns out higher quantities for less cost.", "price": "30.00" },
            { "title": "Business card design", "post": "Business cards are cards bearing business information about a company or individual. They are shared during formal introductions as a convenience and a memory aid. A business card typically includes the giver's name, company or business affiliation (usually with a logo) and contact information such as street addresses, telephone number(s), fax number, e-mail addresses and website. Before the advent of electronic communication business cards might also include telex details. Now they may include social media addresses such as Facebook, LinkedIn and Twitter. Traditionally many cards were simple black text on white stock; today a professional business card will sometimes include one or more aspects of striking visual design", "price": "40.00" },
            { "title": "Document Writing", "post": "Technical documentation. I doubt it's something any of us would list as our favorite genre, either to write or to read. But it's one of those necessities we often curse then begrudgingly accept when we have to wade our way through it in order to solve a problem or when we have to write it in order to explain a technical product.", "price": "50.00" },
            { "title": "Logo design", "post": "In the days of hot metal typesetting, a logotype was a uniquely set and arranged typeface or colophon. At the level of mass communication and in common usage a company's logo is today often synonymous with its trademark or brand", "price": "" },
            { "title": "Logo Design", "post": "A logo (abbreviation of logotype, from Greek: λόγος logos 'word' and τύπος typos 'imprint') is a graphic mark, emblem, or symbol commonly used by commercial enterprises, organizations and even individuals to aid and promote instant public recognition. Logos are either purely graphic (symbols/icons) or are composed of the name of the organization (a logotype or wordmark).", "price": "" },
            { "title": "Mobile App Design", "post": "A mobile app is a computer program designed to run on smartphones, tablet computers and other mobile devices. Apps are usually available through application distribution platforms, which began appearing in 2008 and are typically operated by the owner of the mobile operating system, such as the Apple App Store, Google Play, Windows Phone Store, and BlackBerry App World. Some apps are free, while others must be bought. Usually, they are downloaded from the platform to a target device, such as an iPhone, BlackBerry, Android phone or Windows Phone, but sometimes they can be downloaded to laptops or desktop computers. For apps with a price, generally a percentage, 20-30%, goes to the distribution provider (such as iTunes), and the rest goes to the producer of the app. The same app can therefore cost the average Smartphone user a different price depending on whether they use iPhone, Android, or BlackBerry 10 devices.", "price": "" },
            { "title": "Packaging Design", "post": "Lorem ipsum dolor inset amet Lorem ipsum dolor inset amet Lorem ipsum dolor inset amet Lorem ipsum dolor inset amet", "price": "" },
        ];
        localStorage.removeItem('postinfo');
    }
    FirstStepComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
        });
    };
    FirstStepComponent.prototype.checkLogin = function (title) {
        if (!this.user) {
            this.router.navigate(['/signup']);
        }
        else {
            this.selectedTitle = title;
            this.sharedservice.selectedTitle = title;
            console.log(title);
            localStorage.setItem('postinfo', '{"title": "' + title + '"}');
            this.postcomponent.step1visible = false;
            this.postcomponent.step3visible = false;
            this.postcomponent.step2visible = true;
            this.postcomponent.changeFont();
        }
    };
    return FirstStepComponent;
}());
FirstStepComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'first-step',
        template: __webpack_require__("../../../../../src/app/post-contests/components/first-step/first-step.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post-contests/components/first-step/first-step.component.scss")],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__containers_post_contest_post_contest_component__["a" /* PostContestComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__containers_post_contest_post_contest_component__["a" /* PostContestComponent */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_service__["a" /* SharedService */]) === "function" && _d || Object])
], FirstStepComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=first-step.component.js.map

/***/ }),

/***/ "../../../../../src/app/post-contests/components/second-step/second-step.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h4>\r\n        <b>Add New Contest Brief</b>\r\n    </h4>\r\n    <br/>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 mr-auto ml-auto\">Logo</div>\r\n        <div class=\"col-md-8 mr-auto ml-auto\">\r\n            <input type=\"file\" (change)=\"fileChangeEvent($event,content)\" *ngIf='!croppedImage' />\r\n            <div *ngIf='croppedImage'>\r\n                <div *ngIf='!imagePath'>\r\n                  <div class=\"lds-ellipsis\">\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                        <div></div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf='imagePath'>\r\n                    <img *ngIf='croppedImage' [src]=\"croppedImage\" />\r\n                    <span style='color:red ; cursor: pointer;' (click)='updateImage()'>\r\n                        <b>Update Logo</b>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 mr-auto ml-auto\" style='padding-left:0px'>Category</div>\r\n        <div class=\"col-md-7 mr-auto ml-auto\" style='padding-left:0px'>\r\n            <select class=\"form-control\" [(ngModel)]='newCategory'>\r\n                <option *ngFor='let categories of categories'>{{categories.name}}</option>\r\n            </select>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 mr-auto ml-auto\">Name</div>\r\n        <div class=\"col-md-8 mr-auto ml-auto\">\r\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='newName'>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <ngb-tabset>\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <b>Description</b>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 mr-auto ml-auto\">Enter Description</div>\r\n                            <div class=\"col-md-12 mr-auto ml-auto\">\r\n                                <ckeditor [(ngModel)]=\"description\" debounce=\"500\">\r\n                                    <p>Hello\r\n                                        <strong>world</strong>\r\n                                    </p>\r\n                                </ckeditor>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <b>Rules</b>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 mr-auto ml-auto\">Enter Rules</div>\r\n                            <div class=\"col-md-12 mr-auto ml-auto\">\r\n                                <ckeditor [(ngModel)]=\"rules\" debounce=\"500\">\r\n                                    <p>Hello\r\n                                        <strong>world</strong>\r\n                                    </p>\r\n                                </ckeditor>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <b>Help guide</b>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-12 mr-auto ml-auto\">Enter Help Guide Here</div>\r\n                            <div class=\"col-md-12 mr-auto ml-auto\">\r\n                                <ckeditor [(ngModel)]=\"guide\" debounce=\"500\">\r\n                                    <p>Hello\r\n                                        <strong>world</strong>\r\n                                    </p>\r\n                                </ckeditor>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <b>Awards</b>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-10 mr-auto ml-auto\">\r\n                                <input type=\"text\" class=\"form-control\" #item [(ngModel)]='awarddesc'>\r\n                            </div>\r\n                            <div class=\"col-md-2 mr-auto ml-auto\">\r\n                                <button type=\"button\" class=\"btn btn-outline-primary\" (click)='addItem(item.value)'>+</button>\r\n                            </div>\r\n                        </div>\r\n                        <br/>\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                <p>This Contest has {{awards.length}} awards.</p>\r\n                            </div>\r\n                        </div>\r\n                        <br/>\r\n\r\n                        <div class=\"row\" *ngFor='let award of awards'>\r\n                            <div class=\"col-md-5 mr-auto ml-auto\">\r\n                                <p>Award - {{award.id}}</p>\r\n                            </div>\r\n                            <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                <p>{{award.name}}</p>\r\n                            </div>\r\n                            <div class=\"col-md-1 mr-auto ml-auto\">\r\n                                <p style='color:red;cursor:pointer'>X</p>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"row\" *ngIf='(awards.length > 0)'>\r\n                            <div class=\"col-md-12 mr-auto ml-auto\">\r\n                                <button type=\"button\" class=\"btn btn-warning\" (click)='resetAwards()'>Set Awards Again</button>\r\n                            </div>\r\n                        </div>\r\n\r\n\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n            </ngb-tabset>\r\n        </div>\r\n    </div>\r\n\r\n    <br/>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 mr-auto ml-auto\">\r\n            <b>Time Line</b>\r\n        </div>\r\n        <div class=\"col-md-8 mr-auto ml-auto\">\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3 mr-auto ml-auto\"> Start Date</div>\r\n        <div class=\"col-md-3 mr-auto ml-auto\">\r\n            <div class=\"input-group date\">\r\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"startdate\" ngbDatepicker #dd=\"ngbDatepicker\"\r\n                    (click)=\"dd.toggle()\">\r\n                <span class=\"input-group-addon\">\r\n                    <span class=\"glyphicon glyphicon-calendar\">\r\n                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </span>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-3 mr-auto ml-auto\"> End Date</div>\r\n        <div class=\"col-md-3 mr-auto ml-auto\">\r\n            <div class=\"input-group date\">\r\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\" name=\"dp\" [(ngModel)]=\"enddate\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\">\r\n                <span class=\"input-group-addon\">\r\n                    <span class=\"glyphicon glyphicon-calendar\">\r\n                        <i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\r\n                    </span>\r\n                </span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <br/>\r\n    <br/>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-6 mr-auto ml-auto\"></div>\r\n        <div class=\"col-md-6 mr-auto ml-auto\">\r\n            <div class=\"form-group\">\r\n                <button (click)='saveContest()' [disabled]='!imagePath' style='color:#FFFFFF' class=\"btn btn-danger btn-round btn-area\">Add Contest</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class='row' *ngIf='visibleAlerts'>\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <ngb-alert [type]=\"alertType\" [dismissible]=\"false\">\r\n                <div class=\"container\">\r\n                    {{ alertMessage }}\r\n                    <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\r\n                        <i class=\"nc-icon nc-simple-remove\"></i>\r\n                    </button>\r\n                </div>\r\n            </ngb-alert>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<!-- <input type=\"text\" [(ngModel)]=\"config.bucket\" placeholder=\"The S3 Bucket\"/><br/>\r\n<input type=\"text\" [(ngModel)]=\"config.accessKey\" placeholder=\"Your Access Key\"/><br/>\r\n<input type=\"text\" [(ngModel)]=\"config.secretAccessKey\" placeholder=\"Your Secret Access Key\"/><br/>\r\n<input type=\"text\" [(ngModel)]=\"config.region\" placeholder=\"The Region of the Bucket\"/><br/> -->\r\n<!-- <input type=\"file\" (change)=\"upload($event)\"/><br/>\r\n<img *ngIf=\"imagePath\" [src]=\"imagePath\"> -->\r\n\r\n\r\n\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header\">\r\n        <p style='color:#FFFFFF'>\r\n            <b>Crop Your Logo</b>\r\n        </p>\r\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n        </button>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [maintainAspectRatio]=\"true\" [aspectRatio]=\"4 / 4\" [resizeToWidth]=\"128\"\r\n            format=\"png\" (imageCropped)=\"imageCropped($event)\" (loadImageFailed)=\"loadImageFailed()\"></image-cropper>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-outline-light\" (click)=\"c('Close click')\">Save</button>\r\n    </div>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/post-contests/components/second-step/second-step.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\n  text-align: left !important; }\n\n.btn-area {\n  width: 100% !important; }\n\n.uploaded-image {\n  width: 100% !important; }\n\n.dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white; }\n\n.dark-modal .close {\n  color: white; }\n\n.lds-ellipsis {\n  display: inline-block;\n  position: relative;\n  width: 64px;\n  height: 64px; }\n\n.lds-ellipsis div {\n  position: absolute;\n  top: 27px;\n  width: 11px;\n  height: 11px;\n  border-radius: 50%;\n  background: #f5593d;\n  animation-timing-function: cubic-bezier(0, 1, 1, 0); }\n\n.lds-ellipsis div:nth-child(1) {\n  left: 6px;\n  animation: lds-ellipsis1 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(2) {\n  left: 6px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(3) {\n  left: 26px;\n  animation: lds-ellipsis2 0.6s infinite; }\n\n.lds-ellipsis div:nth-child(4) {\n  left: 45px;\n  animation: lds-ellipsis3 0.6s infinite; }\n\n@keyframes lds-ellipsis1 {\n  0% {\n    transform: scale(0); }\n  100% {\n    transform: scale(1); } }\n\n@keyframes lds-ellipsis3 {\n  0% {\n    transform: scale(1); }\n  100% {\n    transform: scale(0); } }\n\n@keyframes lds-ellipsis2 {\n  0% {\n    transform: translate(0, 0); }\n  100% {\n    transform: translate(19px, 0); } }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-contests/components/second-step/second-step.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondStepComponent; });
/* unused harmony export S3Config */
/* unused harmony export S3Uploader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/post-contests/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_contest_service__ = __webpack_require__("../../../../../src/app/_services/contest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__containers_post_contest_post_contest_component__ = __webpack_require__("../../../../../src/app/post-contests/containers/post-contest/post-contest.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









//declare var CryptoJS: any;
var CryptoJS = __webpack_require__("../../../../crypto-js/index.js");
var SecondStepComponent = (function () {
    function SecondStepComponent(router, authService, modalService, postcomponent, sharedservice, http, contestservice) {
        this.router = router;
        this.authService = authService;
        this.modalService = modalService;
        this.postcomponent = postcomponent;
        this.sharedservice = sharedservice;
        this.http = http;
        this.contestservice = contestservice;
        this.awards = [];
        this.config = new S3Config();
        this.imageChangedEvent = '';
        this.croppedImage = '';
        this.visibleAlerts = false;
        this.title = this.sharedservice.selectedTitle;
        this.config.bucket = 'contest-site-uploaded-images';
        this.config.accessKey = 'AKIAIUU3RAMZLXYAXNKA';
        this.config.secretAccessKey = 'k0/d3dqMPesfXUZU17epadE8RuODgLVkYiv9blcU';
        this.config.region = 'us-east-1';
        this.uploader = new S3Uploader();
        // Input your S3 Config
        this.uploader.init(http, this.config);
    }
    SecondStepComponent.prototype.upload = function (event) {
        var _this = this;
        var self = this;
        var file = event.srcElement.files[0];
        console.log(file.name);
        this.uploader.upload(file).then(function (x) {
            console.log(x);
            _this.imagePath = x;
        });
        setTimeout(function () { self.imagePath = 'https://contest-site-uploaded-images.s3.amazonaws.com/' + file.name; }, 5000);
    };
    SecondStepComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.imagePath =
            this.title = this.sharedservice.selectedTitle;
        this.http.get("./assets/categories.json")
            .subscribe(function (data) {
            console.log(data.json());
            _this.categories = data.json();
        });
        this.http.get("./assets/contests.json")
            .subscribe(function (data) {
            _this.contests = data.json();
        });
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
        });
    };
    SecondStepComponent.prototype.loadStep3 = function () {
        localStorage.setItem('postinfo', '{"name": "' + this.name + '","desc":"' + this.content + '"}');
        this.postcomponent.step1visible = false;
        this.postcomponent.step2visible = false;
        this.postcomponent.step3visible = true;
        this.postcomponent.changeFont();
    };
    SecondStepComponent.prototype.addItem = function (item) {
        if (item == '') {
        }
        else {
            var data = {
                id: this.awards.length + 1,
                name: item
            };
            this.awards.push(data);
            this.awarddesc = '';
        }
    };
    SecondStepComponent.prototype.saveContest = function () {
        var _this = this;
        if (!this.imagePath || !this.startdate || !this.enddate || !this.newName) {
            this.alertType = 'warning';
            this.alertMessage = 'Please Fill Required Feilds';
            this.visibleAlerts = true;
            var self_1 = this;
            setTimeout(function () {
                self_1.visibleAlerts = false;
            }, 2000);
        }
        else {
            var user = {
                id: this.user.id,
                name: this.user.name
            };
            var timeline = [];
            var timelinedata = {
                date: __WEBPACK_IMPORTED_MODULE_7_moment__().format('MMMM Do YYYY, h:mm:ss a'),
                description: this.user.name + ' ' + 'Created Contest'
            };
            timeline.push(timelinedata);
            var newContest = {
                image: this.imagePath,
                name: this.newName,
                user: user,
                startdate: this.startdate.year + '-' + this.startdate.month + '-' + this.startdate.day,
                enddate: this.enddate.year + '-' + this.enddate.month + '-' + this.enddate.day,
                category: this.newCategory,
                description: this.description,
                rules: this.rules,
                guide: this.guide,
                awards: this.awards,
                status: 'Open',
                timeline: timeline
            };
            this.contestservice.addContest(newContest).subscribe(function (res) {
                if (res._id) {
                    _this.alertType = 'success';
                    _this.alertMessage = 'Contest Created Successed';
                    _this.visibleAlerts = true;
                    var self_2 = _this;
                    setTimeout(function () {
                        self_2.visibleAlerts = false;
                    }, 2000);
                    _this.resetForm();
                }
                else {
                    _this.alertType = 'danger';
                    _this.alertMessage = 'Cannot Create Contests at this Moment';
                    _this.visibleAlerts = true;
                    var self_3 = _this;
                    setTimeout(function () {
                        self_3.visibleAlerts = false;
                    }, 2000);
                    _this.resetForm();
                }
            });
            console.log('ere', newContest);
        }
        //this.router.navigate(['/browse-contest']);
    };
    SecondStepComponent.prototype.open = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    };
    SecondStepComponent.prototype.fileChangeEvent = function (event, content) {
        this.imageChangedEvent = event;
        this.open(content);
        this.upload(event);
    };
    SecondStepComponent.prototype.imageCropped = function (image) {
        this.croppedImage = image;
    };
    SecondStepComponent.prototype.updateImage = function () {
        this.croppedImage = '';
        this.imagePath = '';
    };
    SecondStepComponent.prototype.resetAwards = function () {
        this.awards = [];
        this.awarddesc = '';
    };
    SecondStepComponent.prototype.resetForm = function () {
        this.updateImage();
        this.startdate = '';
        this.enddate = '';
        this.newName = '';
        this.description = '';
        this.rules = '';
        this.guide = '';
        this.awards = [];
    };
    return SecondStepComponent;
}());
SecondStepComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'second-step',
        template: __webpack_require__("../../../../../src/app/post-contests/components/second-step/second-step.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post-contests/components/second-step/second-step.component.scss")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_angularx_social_login__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_angularx_social_login__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["c" /* NgbModal */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_8__containers_post_contest_post_contest_component__["a" /* PostContestComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__containers_post_contest_post_contest_component__["a" /* PostContestComponent */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_3__services_contest_service__["a" /* ContestService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_contest_service__["a" /* ContestService */]) === "function" && _g || Object])
], SecondStepComponent);

var S3Config = (function () {
    function S3Config() {
    }
    return S3Config;
}());

var S3Uploader = (function () {
    function S3Uploader() {
    }
    S3Uploader.prototype.init = function (http, config) {
        this.http = http;
        this.config = config;
    };
    S3Uploader.prototype.upload = function (file) {
        var _this = this;
        var date = this.generateTimestamp();
        var datetime = date + 'T000000Z';
        var credential = this.config.accessKey + "/" + date + "/" + this.config.region + "/s3/aws4_request";
        var policy = JSON.stringify({
            "expiration": (new Date(Date.now() + 100000)).toISOString(),
            "conditions": [
                { "bucket": this.config.bucket },
                ["starts-with", "$key", ""],
                { "acl": "public-read" },
                ["starts-with", "$Content-Type", ""],
                { "x-amz-credential": credential },
                { "x-amz-algorithm": "AWS4-HMAC-SHA256" },
                { "x-amz-date": datetime }
            ]
        });
        var policyBase64 = window.btoa(policy);
        var signatureKey = this.generateSignatureKey(this.config.secretAccessKey, date, this.config.region, "s3");
        var signature = CryptoJS.HmacSHA256(policyBase64, signatureKey).toString(CryptoJS.enc.Hex);
        var formData = new FormData();
        formData.append('acl', "public-read");
        formData.append('Content-Type', file.type);
        formData.append('X-Amz-Date', datetime);
        formData.append('X-Amz-Algorithm', "AWS4-HMAC-SHA256");
        formData.append('X-Amz-Credential', credential);
        formData.append('X-Amz-Signature', signature);
        formData.append('Policy', policyBase64);
        formData.append('key', file.name);
        formData.append('file', file);
        return new Promise(function (resolve, reject) {
            _this.http.post("https://" + _this.config.bucket + ".s3.amazonaws.com/", formData).subscribe(function (x) {
                console.log(x);
                resolve(x.headers.get("Location"));
            }, function (x) {
                console.error(x);
                reject();
            });
        });
    };
    S3Uploader.prototype.generateSignatureKey = function (key, dateStamp, regionName, serviceName) {
        var kDate = CryptoJS.HmacSHA256(dateStamp, "AWS4" + key);
        var kRegion = CryptoJS.HmacSHA256(regionName, kDate);
        var kService = CryptoJS.HmacSHA256(serviceName, kRegion);
        var kSigning = CryptoJS.HmacSHA256("aws4_request", kService);
        return kSigning;
    };
    S3Uploader.prototype.generateTimestamp = function () {
        var date = new Date();
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);
        return year + month + day;
    };
    return S3Uploader;
}());

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=second-step.component.js.map

/***/ }),

/***/ "../../../../../src/app/post-contests/components/third-step/third-step.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h3>\r\n        <b>Payments Information</b>\r\n    </h3>\r\n    <br/>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <h5>Create a contest that attracts the right Participants to your brief.</h5>\r\n        </div>\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <p>We've got the largest design community online so it's important to create a contest that attracts the kinds of\r\n                designers you want to work on your brief.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <h5>What contest package do you want?</h5>\r\n        </div>\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <p>All packages come with a 100% money-back guarantee and you own full copyright to the final work.</p>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-4 mr-auto ml-auto\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"optradio\">&nbsp;&nbsp; Silver - $140.00</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>Our Silver package includes a bigger prize, so you’ll have more designs to choose from. Creative design\r\n                        for less Expect ~15 designs Basic designer prize Skilled phone, email and chat support 100% money-back\r\n                        guarantee\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 mr-auto ml-auto\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"optradio\">&nbsp;&nbsp; Gold - $195.00</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>Attract great designers and get priority support Your project will be shown to designers before silver\r\n                        projects\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 mr-auto ml-auto\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"optradio\">&nbsp;&nbsp; Platinum - $295.00</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>Attract the best designers and receive one-on-one assistance Your project will be shown to designers\r\n                        before bronze and silver projects A dedicated account manager will guide you to the best result possible</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 mr-auto ml-auto\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"optradio\">&nbsp;&nbsp; Bronze - $10.00</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <p>browns package</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-4 mr-auto ml-auto\">\r\n            <div class=\"card\">\r\n                <div class=\"card-header\">\r\n                    <div class=\"radio\">\r\n                        <label>\r\n                            <input type=\"radio\" name=\"optradio\">&nbsp;&nbsp; Your Price $ </label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"usr\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <h5>How quickly do you need to complete your contest?</h5>\r\n        </div>\r\n        <div class=\"col-md-6 mr-auto ml-auto\">\r\n            <label>\r\n                <input type=\"radio\" name=\"optradio1\">&nbsp;&nbsp; In 30 days ($50)\r\n            </label>\r\n        </div>\r\n        <div class=\"col-md-6 mr-auto ml-auto\">\r\n            <label>\r\n                <input type=\"radio\" name=\"optradio1\">&nbsp;&nbsp; In 360 days ($50)\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class=\"row\" style='text-align:left !important'>\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <h5>How quickly do you need to complete your contest?</h5>\r\n        </div>\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">Highlight Contest ($70)\r\n                    <span class=\"form-check-sign\"></span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">Blind Contest ($80)\r\n                    <span class=\"form-check-sign\"></span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">Private Contest ($90)\r\n                    <span class=\"form-check-sign\"></span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" value=\"\" checked=\"\">Featured Contest ($100)\r\n                    <span class=\"form-check-sign\"></span>\r\n                </label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <h5>Total Cost : $ 450.00</h5>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n\r\n    <div class=\"row\">\r\n        <div class=\"col-md-12 mr-auto ml-auto\">\r\n            <ngb-tabset>\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <b>Credit & Debit Cards</b>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\">Payer Details</div>\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Email</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Address</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">City</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">State</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Country</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Zip Code</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Phone</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\">Card Details</div>\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Card Number</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Expire Date</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Name on Card</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">CSV</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <b>Electronic Gateways</b>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\">Payer Details</div>\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Email</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Address</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">City</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">State</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Country</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Zip Code</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Phone</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <b>Manual / Offline</b>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\">Payer Details</div>\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Email</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Address</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">City</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">State</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Country</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Zip Code</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Phone</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n                <ngb-tab>\r\n                    <ng-template ngbTabTitle>\r\n                        <b>Wallet</b>\r\n                    </ng-template>\r\n                    <ng-template ngbTabContent>\r\n                        <div class=\"card\">\r\n                            <div class=\"card-header\">Payer Details</div>\r\n                            <div class=\"card-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Email</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Address</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">City</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">State</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Country</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Zip Code</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                                <br/>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">Phone</div>\r\n                                    <div class=\"col-md-6 mr-auto ml-auto\">\r\n                                        <input type=\"text\" class=\"form-control\">\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </ng-template>\r\n                </ngb-tab>\r\n            </ngb-tabset>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    <div class=\"row\">\r\n            <div class=\"col-md-6 mr-auto ml-auto\"></div>\r\n            <div class=\"col-md-6 mr-auto ml-auto\">\r\n                    <a style='color:#FFFFFF' class=\"btn btn-danger btn-round btn-area\">Proceed Payment</a>\r\n            </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/post-contests/components/third-step/third-step.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-area {\n  width: 100% !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-contests/components/third-step/third-step.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThirdStepComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThirdStepComponent = (function () {
    function ThirdStepComponent() {
    }
    ThirdStepComponent.prototype.ngOnInit = function () { };
    return ThirdStepComponent;
}());
ThirdStepComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'third-step',
        template: __webpack_require__("../../../../../src/app/post-contests/components/third-step/third-step.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post-contests/components/third-step/third-step.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], ThirdStepComponent);

//# sourceMappingURL=third-step.component.js.map

/***/ }),

/***/ "../../../../../src/app/post-contests/containers/post-contest/post-contest.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('../assets/img/daniel-olahh.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"motto text-center\">\r\n            <h1>Post your contest</h1>\r\n            <h3>What do you want to launch?</h3>\r\n            <br />\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"main\">\r\n    <div class=\"section text-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <h2 class=\"title\">Let's Post Your Contest</h2>\r\n                    <h5 class=\"description\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\r\n                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled\r\n                        it to make a type specimen book. It has survived not only five centuries, but also the leap into\r\n                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the\r\n                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\r\n                        software like Aldus PageMaker including versions of Lorem Ipsum.</h5>\r\n                    <br>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <!-- <div class=\"section section-dark text-center\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card deactive-item\">\r\n                            <div class=\"card-block\">\r\n                                <h3 [style.font-size]='step1font'>Step 1</h3>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card deactive-item\">\r\n                            <div class=\"card-block\">\r\n                                <h3  [style.font-size]='step2font'>Step 2</h3>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"card deactive-item\">\r\n                            <div class=\"card-block\">\r\n                                <h3 [style.font-size]='step3font'>Step 3</h3>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n<br/><br/> -->\r\n\r\n        <div class=\"container\" *ngIf='!user'>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <button (click)='navigatetologin()'  style='color:#FFFFFF' class=\"btn btn-danger btn-round btn-area\">You are not Logging Please loggin before Post</button>\r\n                    <br/>\r\n                    <br/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n        <div class=\"container\" *ngIf='user'>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 mr-auto ml-auto\">\r\n                    <!-- <first-step *ngIf='step1visible'></first-step> -->\r\n                    <second-step></second-step>\r\n                    <!-- <third-step  *ngIf='step3visible'></third-step> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/post-contests/containers/post-contest/post-contest.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".deactive-item {\n  font-weight: bold !important;\n  color: #ffffff !important;\n  background-color: #0b1011; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/post-contests/containers/post-contest/post-contest.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostContestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostContestComponent = (function () {
    function PostContestComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.step1visible = true;
        this.step2visible = false;
        this.step3visible = false;
        this.step1font = "39px";
        this.step2font = "1.825em";
        this.step3font = "1.825em";
    }
    PostContestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
        });
        if (this.step1visible) {
            this.step1font = "39px";
        }
    };
    PostContestComponent.prototype.changeFont = function () {
        if (this.step1visible) {
            this.step1font = "39px";
            this.step2font = "1.825em";
            this.step3font = "1.825em";
        }
        else if (this.step2visible) {
            this.step1font = "1.825em";
            this.step2font = "39px";
            this.step3font = "1.825em";
        }
        else {
            this.step1font = "1.825em";
            this.step2font = "1.825em";
            this.step3font = "39px";
        }
    };
    PostContestComponent.prototype.navigatetologin = function () {
        this.router.navigate(['/signup']);
    };
    return PostContestComponent;
}());
PostContestComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/post-contests/containers/post-contest/post-contest.component.html"),
        styles: [__webpack_require__("../../../../../src/app/post-contests/containers/post-contest/post-contest.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], PostContestComponent);

var _a, _b;
//# sourceMappingURL=post-contest.component.js.map

/***/ }),

/***/ "../../../../../src/app/post-contests/post-contest.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostContestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_service__ = __webpack_require__("../../../../../src/app/post-contests/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__ = __webpack_require__("../../../../ngx-image-cropper/ngx-image-cropper.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__containers_post_contest_post_contest_component__ = __webpack_require__("../../../../../src/app/post-contests/containers/post-contest/post-contest.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_first_step_first_step_component__ = __webpack_require__("../../../../../src/app/post-contests/components/first-step/first-step.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_second_step_second_step_component__ = __webpack_require__("../../../../../src/app/post-contests/components/second-step/second-step.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_third_step_third_step_component__ = __webpack_require__("../../../../../src/app/post-contests/components/third-step/third-step.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var PostContestModule = (function () {
    function PostContestModule() {
    }
    return PostContestModule;
}());
PostContestModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["d" /* NgbModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_ckeditor__["CKEditorModule"],
            __WEBPACK_IMPORTED_MODULE_8_ngx_image_cropper__["a" /* ImageCropperModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_9__containers_post_contest_post_contest_component__["a" /* PostContestComponent */], __WEBPACK_IMPORTED_MODULE_10__components_first_step_first_step_component__["a" /* FirstStepComponent */], __WEBPACK_IMPORTED_MODULE_11__components_second_step_second_step_component__["a" /* SecondStepComponent */], __WEBPACK_IMPORTED_MODULE_12__components_third_step_third_step_component__["a" /* ThirdStepComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_9__containers_post_contest_post_contest_component__["a" /* PostContestComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_7__shared_service__["a" /* SharedService */]]
    })
], PostContestModule);

//# sourceMappingURL=post-contest.module.js.map

/***/ }),

/***/ "../../../../../src/app/post-contests/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SharedService = (function () {
    function SharedService() {
    }
    return SharedService;
}());
SharedService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [])
], SharedService);

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\" *ngIf='user'>\n    <div class=\"page-header page-header-xs\" data-parallax=\"true\" style=\"background-image: url('../assets/img/fabio-mangione.jpg');\">\n        <div class=\"filter\"></div>\n    </div>\n    <div class=\"section profile-content\">\n        <div class=\"container\">\n            <div class=\"owner\">\n                <div class=\"avatar\">\n                    <img src=\"{{ user.photoUrl }}\" alt=\"Circle Image\" class=\"img-circle img-no-padding img-responsive\">\n                </div>\n                <div class=\"name\">\n                    <h4 class=\"title\">{{ user.name }}\n                        <br />\n                    </h4>\n                    <h6 class=\"description\">{{ user.email }}</h6>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-md-6 ml-auto mr-auto text-center\">\n                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's\n                        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled\n                        it to make a type specimen book. It has survived not only five centuries, but also the leap into\n                        electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the\n                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing\n                        software like Aldus PageMaker including versions of Lorem Ipsum.</p>\n                    <br />\n                    <button class=\"btn btn-outline-default btn-round\">\n                        <i class=\"fa fa-cog\"></i> Settings</button>\n                </div>\n            </div>\n            <br/>\n            <div class=\"main\">\n                <div class=\"section text-center\">\n                    <div class=\"container\">\n                        <div class=\"row\">\n                            <div class=\"col-md-3\">\n                                <div class=\"info\">\n                                    <div class=\"icon icon-danger\">\n                                        <i class=\"nc-icon nc-money-coins\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h4 class=\"info-title\">Avaliable Balance</h4>\n                                        <h5 class=\"description\">$250</h5>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"info\">\n                                    <div class=\"icon icon-danger\">\n                                        <i class=\"nc-icon nc-paper\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h4 class=\"info-title\">Contest Posted</h4>\n                                        <h5 class=\"description\">0</h5>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"info\">\n                                    <div class=\"icon icon-danger\">\n                                        <i class=\"nc-icon nc-single-copy-04\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h4 class=\"info-title\">Entry Posted</h4>\n                                        <h5 class=\"description\">0</h5>\n                                    </div>\n                                </div>\n                            </div>\n                            <div class=\"col-md-3\">\n                                <div class=\"info\">\n                                    <div class=\"icon icon-danger\">\n                                        <i class=\"nc-icon nc-user-run\"></i>\n                                    </div>\n                                    <div class=\"description\">\n                                        <h4 class=\"info-title\">Following Contest</h4>\n                                        <h5 class=\"description\">0</h5>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n\n                    </div>\n                </div>\n                <br/>\n                <div class=\"nav-tabs-navigation\">\n                    <div class=\"nav-tabs-wrapper\">\n                        <ngb-tabset [justify]=\"'center'\">\n                            <ngb-tab title=\"Dashboard\">\n                                <ng-template ngbTabContent>\n                                    <p>\n                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled\n                                        it to make a type specimen book. It has survived not only five centuries, but also\n                                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised\n                                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n                                        and more recently with desktop publishing software like Aldus PageMaker including\n                                        versions of Lorem Ipsum.\n                                    </p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"My Contests\">\n                                <ng-template ngbTabContent>\n                                    <p>\n                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled\n                                        it to make a type specimen book. It has survived not only five centuries, but also\n                                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised\n                                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n                                        and more recently with desktop publishing software like Aldus PageMaker including\n                                        versions of Lorem Ipsum.\n                                    </p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"My Participations\">\n                                <ng-template ngbTabContent>\n                                    <p>\n                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled\n                                        it to make a type specimen book. It has survived not only five centuries, but also\n                                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised\n                                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n                                        and more recently with desktop publishing software like Aldus PageMaker including\n                                        versions of Lorem Ipsum.\n                                    </p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Transactions\">\n                                <ng-template ngbTabContent>\n                                    <p>\n                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy\n                                        text ever since the 1500s, when an unknown printer took a galley of type and scrambled\n                                        it to make a type specimen book. It has survived not only five centuries, but also\n                                        the leap into electronic typesetting, remaining essentially unchanged. It was popularised\n                                        in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,\n                                        and more recently with desktop publishing software like Aldus PageMaker including\n                                        versions of Lorem Ipsum.\n                                    </p>\n                                </ng-template>\n                            </ngb-tab>\n                            <ngb-tab title=\"Affiliates\">\n                                <ng-template ngbTabContent>\n                                    <h3 class=\"text-muted\">Not following anyone yet :(</h3>\n                                </ng-template>\n                            </ngb-tab>\n                        </ngb-tabset>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            if (!_this.user) {
                _this.router.navigate(['/home']);
            }
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/profile/profile.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <nav class=\"footer-nav\">\n                <ul>\n                    <li><a  [routerLink]=\"['/terms']\">Terms And Conditions</a></li>\n                    <li><a>FAQ</a></li>\n                </ul>\n            </nav>\n            <div class=\"credits ml-auto\">\n                <span class=\"copyright\">\n                    © {{test | date: 'yyyy'}}, 360contest.com. All rights reserved.\n                </span>\n            </div>\n        </div>\n    </div>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
        this.test = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg fixed-top navbar-transparent\" color-on-scroll=\"500\">\n    <div class=\"container\">\n        <div class=\"navbar-translate\">\n            <a class=\"navbar-brand\" [routerLink]=\"['/home']\">\n                <!-- <img src='./assets/img/logo.png'> -->\n                Hackothan Online\n            </a>\n            <button class=\"navbar-toggler navbar-burger\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\"\n                aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n                <span class=\"navbar-toggler-bar\"></span>\n            </button>\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" [routerLink]=\"['/post-contest']\">\n                        <i class=\"nc-icon nc-paper\"></i> Post Your Contest</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/browse-contest']\" class=\"nav-link\">\n                        <i class=\"nc-icon nc-zoom-split\"></i> Browse Contest</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/how-works']\" class=\"nav-link\">\n                        <i class=\"nc-icon nc-key-25\"></i> How it Works?</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/contact-us']\" class=\"nav-link\">\n                        <i class=\"nc-icon nc-book-bookmark\"></i> Contact Us</a>\n                </li>\n                <li class=\"nav-item\">\n                        <div *ngIf='user' style='margin:0px;padding:0px;' ngbDropdown class=\"d-inline-block dropdown\">\n                                <a class=\"nav-link\" style='margin:0px;padding:0px;' id=\"dropdownBasic1\" ngbDropdownToggle>\n                                        <img  src=\"{{ user.photoUrl }}\" alt=\"Rounded Image\" class=\"img-rounded img-responsive\" style=\"width: 58%;margin: 3px;\">\n                                </a>\n                                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\" class=\"dropdown-primary\">\n                                    <a class=\"dropdown-item\" [routerLink]=\"['/user-profile']\">Profile</a>\n                                    <a class=\"dropdown-item\" (click)='signOut()'>Log Out</a>\n                                </div>\n                            </div>\n                    \n                    <a *ngIf='!user' [routerLink]=\"['/signup']\" class=\"nav-link\">\n                        <i class=\"nc-icon nc-circle-10\"></i> Sign in</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavbarComponent = (function () {
    function NavbarComponent(location, element, authService, router) {
        this.location = location;
        this.element = element;
        this.authService = authService;
        this.router = router;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            //this.navigationcomponent.name=user.firstName;
            console.log(user);
            if (_this.user) {
                localStorage.setItem('info', '{"id": "' + _this.user.id + '"}');
            }
        });
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        // console.log(toggleButton, 'toggle');
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.signOut = function () {
        this.authService.signOut();
        this.router.navigate(['/home']);
        localStorage.removeItem('info');
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularx_social_login__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularx_social_login__["a" /* AuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */]) === "function" && _d || Object])
], NavbarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n    <div class=\"page-header\" style=\"background-image: url('../assets/img/login-image.jpg');\">\n        <div class=\"filter\"></div>\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-lg-4 col-sm-6 mr-auto ml-auto\">\n                        <div class=\"card card-register\">\n                            <h3 class=\"title\">Sign with</h3>\n                            <div class=\"social-line text-center\">\n                                <a (click)='signInWithFB()' class=\"btn btn-neutral btn-facebook btn-just-icon\">\n                                    <i class=\"fa fa-facebook-square\"></i>\n                                </a>\n                                <a (click)='signInWithGoogle()' class=\"btn btn-neutral btn-google btn-just-icon\">\n                                    <i class=\"fa fa-google-plus\"></i>\n                                </a>\n                            </div>\n                            <form class=\"register-form\">\n                                <label>Email</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"Email\">\n\n                                <label>Password</label>\n                                <input type=\"password\" class=\"form-control\" placeholder=\"Password\">\n                                <button class=\"btn btn-danger btn-block btn-round\">Register</button>\n                            </form>\n                            <div class=\"forgot\">\n                                <a href=\"#\" class=\"btn btn-link btn-danger\">Forgot password?</a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"footer register-footer text-center\">\n                    <h6>&copy;{{test | date: 'yyyy'}}, 360contest.com. All rights reserved. </h6>\n                </div>\n            </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-register {\n  background-color: #e0dcdc52 !important; }\n\n.title {\n  font-weight: bold !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__ = __webpack_require__("../../../../angularx-social-login/angularx-social-login.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignupComponent = (function () {
    function SignupComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.test = new Date();
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.authState.subscribe(function (user) {
            _this.user = user;
            if (_this.user) {
                _this.router.navigate(['/home']);
                localStorage.setItem('info', '{"id": "' + _this.user.id + '"}');
            }
        });
    };
    SignupComponent.prototype.signInWithGoogle = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["d" /* GoogleLoginProvider */].PROVIDER_ID);
    };
    SignupComponent.prototype.signInWithFB = function () {
        this.authService.signIn(__WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["c" /* FacebookLoginProvider */].PROVIDER_ID);
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/signup/signup.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularx_social_login__["a" /* AuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SignupComponent);

var _a, _b;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/terms-and-conditions/terms-and-condition.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header\" data-parallax=\"true\" style=\"background-image: url('../assets/img/daniel-olahh.jpg');\">\r\n    <div class=\"filter\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"motto text-center\">\r\n            <h1>Whats our Terms</h1>\r\n            <h3>We must protect our valuable Relationship.</h3>\r\n            <br />\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"section landing-section\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-10 mr-auto ml-auto\">\r\n                <div class=\"nav-tabs-navigation\">\r\n                    <div class=\"nav-tabs-wrapper\">\r\n                        <ngb-tabset [justify]=\"'center'\">\r\n                            <ngb-tab title=\"Terms And Conditions\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row float-left\">\r\n\r\n                                        <div class=\"col-sm-12\">\r\n                                            <h5>1. Terms</h5>\r\n                                            <P>By accessing this web site you are agreeing to be bound by these web site Terms\r\n                                                and Conditions of Use all applicable laws and regulations and agree that\r\n                                                you are responsible for compliance with any applicable local laws. If you\r\n                                                do not agree with any of these terms you are prohibited from using or accessing\r\n                                                this site. The materials contained in this web site are protected by applicable\r\n                                                copyright and trade mark law.</P>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12 \">\r\n                                            <h5>2. Use License</h5>\r\n                                            <P>1. Permission is granted to temporarily download one copy of the materials (information\r\n                                                or software) on Teachnlearn's web site for personal non-commercial transitory\r\n                                                viewing only. This is the grant of a license not a transfer of title and\r\n                                                under this license you may not:</P>\r\n                                            <p> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1.modify or copy the materials;</p>\r\n                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;2.use the materials for any commercial\r\n                                                purpose or for any public display (commercial or non-commercial);</p>\r\n                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;3.attempt to decompile or reverse engineer\r\n                                                any software contained on Teachnlearn's web site;</p>\r\n                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.remove any copyright or other proprietary\r\n                                                notations from the materials; or\r\n                                            </p>\r\n                                            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;5.transfer the materials to another\r\n                                                person or mirror the materials on any other server.</p>\r\n\r\n                                            <P>2. This license shall automatically terminate if you violate any of these restrictions\r\n                                                and may be terminated by Teachnlearn at any time. Upon terminating your viewing\r\n                                                of these materials or upon the termination of this license you must destroy\r\n                                                any downloaded materials in your possession whether in electronic or printed\r\n                                                format.\r\n                                            </P>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12\">\r\n                                            <h5>3. Disclaimer</h5>\r\n                                            <p>The materials on Teachnlearn's web site are provided as is. Teachnlearn makes\r\n                                                no warranties expressed or implied and hereby disclaims and negates all other\r\n                                                warranties including without limitation implied warranties or conditions\r\n                                                of merchantability fitness for a particular purpose or non-infringement of\r\n                                                intellectual property or other violation of rights. Further Teachnlearn does\r\n                                                not warrant or make any representations concerning the accuracy likely results\r\n                                                or reliability of the use of the materials on its Internet web site or otherwise\r\n                                                relating to such materials or on any sites linked to this site.</p>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12\">\r\n                                            <h5>4. Limitations</h5>\r\n                                            <P>In no event shall Teachnlearn or its suppliers be liable for any damages (including\r\n                                                without limitation damages for loss of data or profit or due to business\r\n                                                interruption) arising out of the use or inability to use the materials on\r\n                                                Teachnlearn's Internet site even if Teachnlearn or a Teachnlearn authorized\r\n                                                representative has been notified orally or in writing of the possibility\r\n                                                of such damage. Because some jurisdictions do not allow limitations on implied\r\n                                                warranties or limitations of liability for consequential or incidental damages\r\n                                                these limitations may not apply to you.</P>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12\">\r\n                                            <h5>5. Revisions and Errata</h5>\r\n                                            <p>The materials appearing on Teachnlearn's web site could include technical typographical\r\n                                                or photographic errors. Teachnlearn does not warrant that any of the materials\r\n                                                on its web site are accurate complete or current. Teachnlearn may make changes\r\n                                                to the materials contained on its web site at any time without notice. Teachnlearn\r\n                                                does not however make any commitment to update the materials.</p>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12\">\r\n                                            <h5>6. Links</h5>\r\n                                            <P>Teachnlearn has not reviewed all of the sites linked to its Internet web site\r\n                                                and is not responsible for the contents of any such linked site. The inclusion\r\n                                                of any link does not imply endorsement by Teachnlearn of the site. Use of\r\n                                                any such linked web site is at the user's own risk.</P>\r\n                                        </div>\r\n\r\n                                        <div class=\"col-sm-12\">\r\n                                            <h5>7. Site Terms of Use Modifications</h5>\r\n                                            <P>Teachnlearn may revise these terms of use for its web site at any time without\r\n                                                notice. By using this web site you are agreeing to be bound by the then current\r\n                                                version of these Terms and Conditions of Use.</P>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Privacy and Policy\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row float-left\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <p>For each visitor to our Web page our Web server automatically recognizes no information\r\n                                                regarding the domain or e-mail address.\r\n                                            </p>\r\n                                            <P>We collect the e-mail addresses of those who post messages to our bulletin board\r\n                                                the e-mail addresses of those who communicate with us via e-mail the e-mail\r\n                                                addresses of those who make postings to our chat areas user-specific information\r\n                                                on what pages consumers access or visit information volunteered by the consumer\r\n                                                such as survey information and/or site registrations name and address telephone\r\n                                                number.</P>\r\n                                            <p>The information we collect is disclosed when legally required to do so at the\r\n                                                request of governmental authorities conducting an investigation to verify\r\n                                                or enforce compliance with the policies governing our Website and applicable\r\n                                                laws or to protect against misuse or unauthorized use of our Website to a\r\n                                                successor entity in connection with a corporate merger consolidation sale\r\n                                                of assets or other corporate change respecting the Website.</p>\r\n                                            <p>With respect to cookies. We use cookies to record session information such as\r\n                                                items that consumers add to their shopping cart.\r\n                                            </p>\r\n                                            <p>If you do not want to receive e-mail from us in the future please let us know\r\n                                                by sending us e-mail at the above address.</p>\r\n                                            <P>Persons who supply us with their telephone numbers on-line will only receive\r\n                                                telephone contact from us with information regarding orders they have placed\r\n                                                on-line. Please provide us with your name and phone number. We will be sure\r\n                                                your name is removed from the list we share with other organizations.</P>\r\n                                            <P>With respect to Ad Servers. We do not partner with or have special relationships\r\n                                                with any ad server companies.</P>\r\n                                            <P>From time to time we may use customer information for new unanticipated uses\r\n                                                not previously disclosed in our privacy notice. If our information practices\r\n                                                change at some time in the future we will post the policy changes to our\r\n                                                Web site to notify you of these changes and we will use for these new purposes\r\n                                                only data collected from the time of the policy change forward. If you are\r\n                                                concerned about how your information is used you should check back at our\r\n                                                Web site periodically.\r\n                                            </P>\r\n                                            <p>Upon request we provide site visitors with access to transaction information\r\n                                                (e.g. dates on which customers made purchases amounts and types of purchases)\r\n                                                that we maintain about them.</p>\r\n                                            <p>Upon request we offer visitors the ability to have inaccuracies corrected in\r\n                                                contact information transaction information.</p>\r\n                                            <p>With respect to security. When we transfer and receive certain types of sensitive\r\n                                                information such as financial or health information we redirect visitors\r\n                                                to a secure server and will notify visitors through a pop-up screen on our\r\n                                                site.\r\n                                            </p>\r\n                                            <p>If you feel that this site is not following its stated information policy you\r\n                                                may contact us at the above addresses or phone number.</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n                            <ngb-tab title=\"Acceptable Use Policy\">\r\n                                <ng-template ngbTabContent>\r\n                                    <div class=\"row float-left\">\r\n                                        <div class=\"col-sm-12\">\r\n                                            <p>You are independently responsible for complying with all applicable laws in all\r\n                                                of your actions related to your use of PayPal’sservices, regardless of the\r\n                                                purpose of the use. In addition, you must adhere to the terms of this Acceptable\r\n                                                Use Policy.</p>\r\n                                            <P>\r\n                                                <b>Prohibited Activities</b>\r\n                                            </P>\r\n                                            <p>You may not use the PayPal service for activities that:</p>\r\n                                        </div>\r\n                                        <div class=\"col-sm-12\">\r\n                                            <P>1. violate any law, statute, ordinance or regulation</P>\r\n                                            <P>2. relate to sales of (a) narcotics, steroids, certain controlled substances\r\n                                                or other products that present a risk to consumer safety, (b) drug paraphernalia,\r\n                                                (c) items that encourage, promote, facilitate or instruct others to engage\r\n                                                in illegal activity, (d) items that promote hate, violence, racial intolerance,\r\n                                                or the financial exploitation of a crime, (e) items that are considered obscene,\r\n                                                (f) items that infringe or violate any copyright, trademark, right of publicity\r\n                                                or privacy or any other proprietary right under the laws of any jurisdiction,\r\n                                                (g) certain sexually oriented materials or services, (h) ammunition, firearms,\r\n                                                or certain firearm parts or accessories, or (i) certain weapons or knives\r\n                                                regulated under applicable law</P>\r\n                                            <P>3. relate to transactions that (a) show the personal information of third parties\r\n                                                in violation of applicable law, (b) support pyramid or ponzi schemes, matrix\r\n                                                programs, other “get rich quick” schemes or certain multi-level marketing\r\n                                                programs, (c) are associated with purchases of real property, annuities or\r\n                                                lottery contracts, lay-away systems, off-shore banking or transactions to\r\n                                                finance or refinance debts funded by a credit card, (d) are for the sale\r\n                                                of certain items before the seller has control or possession of the item,\r\n                                                (e) are by payment processors to collect payments on behalf of merchants,\r\n                                                (f) are associated with the following Money Service Business Activities:\r\n                                                the sale of traveler’s cheques or money orders, currency exchanges or cheque\r\n                                                cashing, or (g) provide certain credit repair or debt settlement services</P>\r\n                                            <P>4. involve the sales of products or services identified by government agencies\r\n                                                to have a high likelihood of being fraudulent</P>\r\n                                            <P>5. violate applicable laws or industry regulations regarding the sale of (a)\r\n                                                tobacco products, or (b) prescription drugs and devices</P>\r\n                                            <P>6. involve gambling, gaming and/or any other activity with an entry fee and a\r\n                                                prize, including, but not limited to casino games, sports betting, horse\r\n                                                or greyhound racing, lottery tickets, other ventures that facilitate gambling,\r\n                                                games of skill (whether or not it is legally defined as a lottery) and sweepstakes\r\n                                                unless the operator has obtained prior approval from PayPal and the operator\r\n                                                and customers are located exclusively in jurisdictions where such activities\r\n                                                are permitted by law.</P>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-template>\r\n                            </ngb-tab>\r\n\r\n                        </ngb-tabset>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/terms-and-conditions/terms-and-condition.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".float-left {\n  text-align: left !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/terms-and-conditions/terms-and-condition.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsConditionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TermsConditionComponent = (function () {
    function TermsConditionComponent() {
    }
    TermsConditionComponent.prototype.ngOnInit = function () { };
    return TermsConditionComponent;
}());
TermsConditionComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'terms-coditions',
        template: __webpack_require__("../../../../../src/app/terms-and-conditions/terms-and-condition.html"),
        styles: [__webpack_require__("../../../../../src/app/terms-and-conditions/terms-and-condition.scss")]
    }),
    __metadata("design:paramtypes", [])
], TermsConditionComponent);

//# sourceMappingURL=terms-and-condition.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bm": "../../../../moment/locale/bm.js",
	"./bm.js": "../../../../moment/locale/bm.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es-us": "../../../../moment/locale/es-us.js",
	"./es-us.js": "../../../../moment/locale/es-us.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./gu": "../../../../moment/locale/gu.js",
	"./gu.js": "../../../../moment/locale/gu.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./mt": "../../../../moment/locale/mt.js",
	"./mt.js": "../../../../moment/locale/mt.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
