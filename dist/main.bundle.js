webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about.component.html":
/***/ (function(module, exports) {

module.exports = "  <!-- \n        ================================================== \n            Global Page Section Start\n        ================================================== -->\n        <section class=\"global-page-header\" id=\"aAbout\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"block\">\n                            <h2>About Company</h2>\n                            <ol class=\"breadcrumb\">\n                                <li>\n                                    <a href=\"index.html\">\n                                        <i class=\"ion-ios-home\"></i>\n                                        Home\n                                    </a>\n                                </li>\n                                <li class=\"active\">About</li>\n                            </ol>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n\n<!-- \n================================================== \n    Company Description Section Start\n================================================== -->\n<section class=\"company-description\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6 wow fadeInLeft\" data-wow-delay=\".3s\" >\n                <img src=\"assets/images/about/about-company.jpg\" alt=\"\" class=\"img-responsive\">\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"block\">\n                    <h3 class=\"subtitle wow fadeInUp\" data-wow-delay=\".3s\" data-wow-duration=\"500ms\">Why We are Different</h3>\n                    <p  class=\"wow fadeInUp\" data-wow-delay=\".5s\" data-wow-duration=\"500ms\">\n                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequun. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n                    </p>\n                    <p  class=\"wow fadeInUp\" data-wow-delay=\".7s\" data-wow-duration=\"500ms\">\n                        Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.\n                    </p>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n\n<!-- \n================================================== \n    Company Feature Section Start\n================================================== -->\n<section class=\"about-feature clearfix\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"block about-feature-1 wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".3s\">\n                <h2>\n                Why Choose Us\n                </h2>\n                <p>\n                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.\n                </p>\n            </div>\n            <div class=\"block about-feature-2 wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".5s\">\n                <h2 class=\"item_title\">\n                What You Get\n                </h2>\n                <p>\n                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.\n                </p>\n            </div>\n            <div class=\"block about-feature-3 wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".7s\">\n                <h2 class=\"item_title\">\n                Meet The Energy\n                </h2>\n                <p>\n                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas.\n                </p>\n            </div>\n        </div>\n    </div>\n</section>\n\n<br/><br/><br/><br/>\n\n\n"

/***/ }),

/***/ "./src/app/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/about.component.html"),
            styles: [__webpack_require__("./src/app/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-home></app-home>\n<app-about></app-about>\n<app-service></app-service>\n<app-blog></app-blog>\n<app-gallery></app-gallery>\n<app-not-found></app-not-found>\n<app-contact></app-contact>\n<app-footer></app-footer>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__navbar_component__ = __webpack_require__("./src/app/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_component__ = __webpack_require__("./src/app/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_component__ = __webpack_require__("./src/app/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_component__ = __webpack_require__("./src/app/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__service_component__ = __webpack_require__("./src/app/service.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__blog_component__ = __webpack_require__("./src/app/blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contact_component__ = __webpack_require__("./src/app/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gallery_component__ = __webpack_require__("./src/app/gallery.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__not_found_component__ = __webpack_require__("./src/app/not-found.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_8__service_component__["a" /* ServiceComponent */],
                __WEBPACK_IMPORTED_MODULE_9__blog_component__["a" /* BlogComponent */],
                __WEBPACK_IMPORTED_MODULE_10__contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__gallery_component__["a" /* GalleryComponent */],
                __WEBPACK_IMPORTED_MODULE_12__not_found_component__["a" /* NotFoundComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/blog.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \n        ================================================== \n            Global Page Section Start\n        ================================================== -->\n        <section class=\"global-page-header\" id=\"aBlog\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"block\">\n                            <h2>Full width blog</h2>\n                            <ol class=\"breadcrumb\">\n                                <li>\n                                    <a href=\"index.html\">\n                                        <i class=\"ion-ios-home\"></i>\n                                        Home\n                                    </a>\n                                </li>\n                                <li class=\"active\">Blog</li>\n                            </ol>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n\n<!--=====================================\n=            Full Width Blog            =\n======================================-->\n<section id=\"blog-full-width\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <article class=\"wow fadeInDown\" data-wow-delay=\".3s\" data-wow-duration=\"500ms\">\n                    <div class=\"blog-post-image\">\n                        <a href=\"post-fullwidth.html\"><img class=\"img-responsive\" src=\"assets/images/blog/post-1.jpg\" alt=\"\" /></a>\n                    </div>\n                    <div class=\"blog-content\">\n                        <h2 class=\"blogpost-title\">\n                        <a href=\"post-fullwidth.html\">Space shouldn’t be the final frontier</a>\n                        </h2>\n                        <div class=\"blog-meta\">\n                            <span>Dec 11, 2020</span>\n                            <span>by <a href=\"\">Admin</a></span>\n                            <span><a href=\"\">business</a>,<a href=\"\">people</a></span>\n                        </div>\n                        <p>Ultrices posuere cubilia curae curabitur sit amet tortor ut massa commodo. Vestibulum consectetur euismod malesuada tincidunt cum. Sed ullamcorper dignissim consectetur ut tincidunt eros sed sapien consectetur dictum. Pellentesques sed volutpat ante, cursus port. Praesent mi magna, penatibus et magniseget dis parturient montes sed quia consequuntur magni dolores eos qui ratione.\n                        </p>\n                        <a href=\"single-post.html\" class=\"btn btn-dafault btn-details\">Continue Reading</a>\n                    </div>\n                    \n                </article>\n                <article class=\"wow fadeInDown\" data-wow-delay=\".5s\" data-wow-duration=\"500ms\">\n                    <div class=\"blog-post-image\">\n                        <a href=\"post-fullwidth.html\"><img class=\"img-responsive\" src=\"assets/images/blog/post-2.jpg\" alt=\"\" /></a>\n                    </div>\n                    <div class=\"blog-content\">\n                        <h2 class=\"blogpost-title\">\n                        <a href=\"post-fullwidth.html\">Space shouldn’t be the final frontier</a>\n                        </h2>\n                        <div class=\"blog-meta\">\n                            <span>Dec 11, 2020</span>\n                            <span>by <a href=\"\">Admin</a></span>\n                            <span><a href=\"\">business</a>,<a href=\"\">people</a></span>\n                        </div>\n                        <p>Ultrices posuere cubilia curae curabitur sit amet tortor ut massa commodo. Vestibulum consectetur euismod malesuada tincidunt cum. Sed ullamcorper dignissim consectetur ut tincidunt eros sed sapien consectetur dictum. Pellentesques sed volutpat ante, cursus port. Praesent mi magna, penatibus et magniseget dis parturient montes sed quia consequuntur magni dolores eos qui ratione.\n                        </p>\n                        <a href=\"single-post.html\" class=\"btn btn-dafault btn-details\">Continue Reading</a>\n                    </div>\n                    \n                </article>\n                <article class=\"wow fadeInDown\" data-wow-delay=\".7s\" data-wow-duration=\"500ms\">\n                    <div class=\"blog-post-image\">\n                        <a href=\"post-fullwidth.html\"><img class=\"img-responsive\" src=\"assets/images/blog/post-3.jpg\" alt=\"\" /></a>\n                    </div>\n                    <div class=\"blog-content\">\n                        <h2 class=\"blogpost-title\">\n                        <a href=\"post-fullwidth.html\">Space shouldn’t be the final frontier</a>\n                        </h2>\n                        <div class=\"blog-meta\">\n                            <span>Dec 11, 2020</span>\n                            <span>by <a href=\"\">Admin</a></span>\n                            <span><a href=\"\">business</a>,<a href=\"\">people</a></span>\n                        </div>\n                        <p>Ultrices posuere cubilia curae curabitur sit amet tortor ut massa commodo. Vestibulum consectetur euismod malesuada tincidunt cum. Sed ullamcorper dignissim consectetur ut tincidunt eros sed sapien consectetur dictum. Pellentesques sed volutpat ante, cursus port. Praesent mi magna, penatibus et magniseget dis parturient montes sed quia consequuntur magni dolores eos qui ratione.\n                        </p>\n                        <a href=\"single-post.html\" class=\"btn btn-dafault btn-details\">Continue Reading</a>\n                    </div>\n                    \n                </article>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-blog',
            template: __webpack_require__("./src/app/blog.component.html"),
            styles: [__webpack_require__("./src/app/blog.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/contact.component.html":
/***/ (function(module, exports) {

module.exports = "        <!-- \n        ================================================== \n            Global Page Section Start\n        ================================================== -->\n        <section class=\"global-page-header\" id=\"aContact\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"block\">\n                            <h2>Contact</h2>\n                            <ol class=\"breadcrumb\">\n                                <li>\n                                    <a href=\"index.html\">\n                                        <i class=\"ion-ios-home\"></i>\n                                        Home\n                                    </a>\n                                </li>\n                                <li class=\"active\">Contact</li>\n                            </ol>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n<!-- \n================================================== \n    Contact Section Start\n================================================== -->\n<section id=\"contact-section\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"block\">\n                    <h2 class=\"subtitle wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".3s\">Contact With Me</h2>\n                    <p class=\"subtitle-des wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".5s\">\n                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, ea!\n                         consectetur adipisicing elit. Dolore, ea!\n                    </p>\n                    <div class=\"contact-form\">\n                        <form id=\"contact-form\" method=\"#\" action=\"#\" role=\"form\">\n                \n                            <div class=\"form-group wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".6s\">\n                                <input type=\"text\" placeholder=\"Your Name\" class=\"form-control\" name=\"name\" id=\"name\">\n                            </div>\n                            \n                            <div class=\"form-group wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".8s\">\n                                <input type=\"email\" placeholder=\"Your Email\" class=\"form-control\" name=\"email\" id=\"email\" >\n                            </div>\n                            \n                            <div class=\"form-group wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\"1s\">\n                                <input type=\"text\" placeholder=\"Subject\" class=\"form-control\" name=\"subject\" id=\"subject\">\n                            </div>\n                            \n                            <div class=\"form-group wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\"1.2s\">\n                                <textarea rows=\"6\" placeholder=\"Message\" class=\"form-control\" name=\"message\" id=\"message\"></textarea>    \n                            </div>\n                            \n                            <div id=\"success\" class=\"success\">\n                                Thank you. The Mailman is on His Way :)\n                            </div>\n                            \n                            <div id=\"error\" class=\"error\">\n                                Sorry, don't know what happened. Try later :(\n                            </div>\n                            \n                            <div id=\"submit\" class=\"wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\"1.4s\">\n                                <input type=\"submit\" id=\"contact-submit\" class=\"btn btn-default btn-send\" value=\"Send Message\">\n                            </div>                      \n                        </form>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                 <div class=\"map-area\">\n                    <h2 class=\"subtitle  wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".3s\">Find Us</h2>\n                    <p class=\"subtitle-des wow fadeInDown\" data-wow-duration=\"500ms\" data-wow-delay=\".5s\">\n                        Si aute quis eu proident o cupidatat ne anim nescius, et est praesentibus, o quorum vidisse expetendis, nostrud eram quibusdam ad nam nostrud ubi.\n                        \n                    </p>\n                    <div class=\"map\">\n                        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.277552998015!2d90.3678744!3d23.773128800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c0ae4adf3cb9%3A0x7f2cf443b764e4a4!2sShishu+Mela!5e0!3m2!1sen!2s!4v1435516022247\" width=\"100%\" height=\"400\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n                        \n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row address-details\">\n            <div class=\"col-md-3\">\n                <div class=\"address wow fadeInLeft\" data-wow-duration=\"500ms\" data-wow-delay=\".3s\">\n                    <i class=\"ion-ios-location-outline\"></i>\n                    <h5>125 , Kings Street,Melbourne <br>United Kingdom,600562</h5>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"address wow fadeInLeft\" data-wow-duration=\"500ms\" data-wow-delay=\".5s\">\n                    <i class=\"ion-ios-location-outline\"></i>\n                    <h5>125 , Kings Street,Melbourne <br>United Kingdom,600562</h5>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"email wow fadeInLeft\" data-wow-duration=\"500ms\" data-wow-delay=\".7s\">\n                    <i class=\"ion-ios-email-outline\"></i>\n                    <p>support@themefisher.com<br>support@themefisher.com</p>\n                </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"phone wow fadeInLeft\" data-wow-duration=\"500ms\" data-wow-delay=\".9s\">\n                    <i class=\"ion-ios-telephone-outline\"></i>\n                    <p>+07 052 245 022<br>+07 999 999 999</p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>  \n\n "

/***/ }),

/***/ "./src/app/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer.component.html":
/***/ (function(module, exports) {

module.exports = "\n<footer id=\"footer\">\n        Copyright - Design and Developed by Victor Kubrak. This is my own work, and i have practiced academic honesty\n    </footer>"

/***/ }),

/***/ "./src/app/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/gallery.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gallery.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \n        ================================================== \n            Global Page Section Start\n        ================================================== -->\n        <section class=\"global-page-header\" id=\"aGallery\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"block\">\n                            <h2>Gallery</h2>\n                            <ol class=\"breadcrumb\">\n                                <li>\n                                    <a href=\"index.html\">\n                                        <i class=\"ion-ios-home\"></i>\n                                        Home\n                                    </a>\n                                </li>\n                                <li class=\"active\">Gallery</li>\n                            </ol>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n\n<!--=============================\n=            Gallery            =\n==============================-->\n<section id=\"gallery\" class=\"gallery\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-4 col-xs-12\">\n                <figure class=\"wow fadeInLeft animated portfolio-item animated\" data-wow-duration=\"500ms\" data-wow-delay=\"0ms\" style=\"visibility: visible; animation-duration: 300ms; -webkit-animation-duration: 300ms; animation-delay: 0ms; -webkit-animation-delay: 0ms; animation-name: fadeInLeft; -webkit-animation-name: fadeInLeft;\">\n                    <div class=\"img-wrapper\">\n                        <img src=\"assets/images/portfolio/item-1.jpg\" class=\"img-responsive\" alt=\"this is a title\">\n                        <div class=\"overlay\">\n                            <div class=\"buttons\">\n                                <a rel=\"gallery\" class=\"fancybox\" href=\"assets/images/portfolio/item-1.jpg\">Demo</a>\n                            </div>\n                        </div>\n                    </div>\n                </figure>\n            </div>\n            <div class=\"col-sm-4 col-xs-12\">\n                <figure class=\"wow fadeInLeft animated animated\" data-wow-duration=\"500ms\" data-wow-delay=\"300ms\" style=\"visibility: visible; animation-duration: 300ms; -webkit-animation-duration: 300ms; animation-delay: 300ms; -webkit-animation-delay: 300ms; animation-name: fadeInLeft; -webkit-animation-name: fadeInLeft;\">\n                    <div class=\"img-wrapper\">\n                        <img src=\"assets/images/portfolio/item-2.jpg\" class=\"img-responsive\" alt=\"this is a title\">\n                        <div class=\"overlay\">\n                            <div class=\"buttons\">\n                                <a rel=\"gallery\" class=\"fancybox\" href=\"assets/images/portfolio/item-2.jpg\">Demo</a>\n                            </div>\n                        </div>\n                    </div>\n                </figure>\n            </div>\n            <div class=\"col-sm-4 col-xs-12\">\n                <figure class=\"wow fadeInLeft animated animated\" data-wow-duration=\"500ms\" data-wow-delay=\"500ms\" style=\"visibility: visible; animation-duration: 300ms; -webkit-animation-duration: 300ms; animation-delay: 300ms; -webkit-animation-delay: 300ms; animation-name: fadeInLeft; -webkit-animation-name: fadeInLeft;\">\n                    <div class=\"img-wrapper\">\n                        <img src=\"assets/images/portfolio/item-3.jpg\" class=\"img-responsive\" alt=\"\">\n                        <div class=\"overlay\">\n                            <div class=\"buttons\">\n                                <a rel=\"gallery\" class=\"fancybox\" href=\"assets/images/portfolio/item-3.jpg\">Demo</a>\n                            </div>\n                        </div>\n                    </div>\n                </figure>\n            </div>\n        </div>\n    </div>\n</section>   "

/***/ }),

/***/ "./src/app/gallery.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryComponent = /** @class */ (function () {
    function GalleryComponent() {
    }
    GalleryComponent.prototype.ngOnInit = function () {
    };
    GalleryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-gallery',
            template: __webpack_require__("./src/app/gallery.component.html"),
            styles: [__webpack_require__("./src/app/gallery.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/app/home.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home.component.html":
/***/ (function(module, exports) {

module.exports = "\n<!--\n==================================================\nSlider Section Start\n================================================== -->\n<section id=\"hero-area\" >\n<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12 text-center\">\n            <div class=\"block wow fadeInUp\" data-wow-delay=\".3s\">\n                <!-- Slider -->\n                <section class=\"cd-intro\">\n                    <h1 class=\"wow fadeInUp animated cd-headline slide\" data-wow-delay=\".4s\" >\n                    <span>HI, MY NAME IS VICTOR KUBRAK & I AM A</span><br>\n                    <span class=\"cd-words-wrapper\">\n                        <b class=\"is-visible\">STUDENT</b>\n                    </span>\n                    </h1>\n                    </section> <!-- cd-intro -->\n                    <!-- /.slider -->\n                    \n                    <a class=\"btn-lines dark light wow fadeInUp animated smooth-scroll btn btn-default btn-green\" data-wow-delay=\".9s\" href=\"#works\" data-section=\"#works\">View Works</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section><!--/#main-slider-->\n\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home.component.html"),
            styles: [__webpack_require__("./src/app/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\n        ==================================================\n        Header Section Start\n        ================================================== -->\n        <header id=\"top-bar\" class=\"navbar-fixed-top animated-header\">\n            <div class=\"container\">\n                <div class=\"navbar-header\">\n                    <!-- responsive nav button -->\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n                    <span class=\"sr-only\">Toggle navigation</span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    <span class=\"icon-bar\"></span>\n                    </button>\n                    <!-- /responsive nav button -->\n                    \n                    <!-- logo -->\n                    <div class=\"navbar-brand\">\n                        <a href=\"index.html\" >\n                           Victor Kubrak\n                        </a>\n                    </div>\n                    <!-- /logo -->\n                </div>\n                <!-- main menu -->\n                <nav class=\"collapse navbar-collapse navbar-right\" role=\"navigation\">\n                    <div class=\"main-menu\">\n                        <ul class=\"nav navbar-nav navbar-right\">\n                            <li>\n                                <a href=\"#hero-area\" >Home</a>\n                            </li>\n                            <li><a href=\"#aAbout\">About</a></li>\n                            <li><a href=\"#aService\">Service</a></li>\n                            <li class=\"dropdown\">\n                                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">Pages <span class=\"caret\"></span></a>\n                                <div class=\"dropdown-menu\">\n                                    <ul>\n                                        <li><a href=\"#a404\">404 Page</a></li>\n                                        <li><a href=\"#aGallery\">Gallery</a></li>\n                                    </ul>\n                                </div>\n                            </li>\n                            <li><a href=\"#aBlog\">Full Blog</a></li>\n                            <li><a href=\"#aContact\">Contact</a></li>\n                        </ul>\n                    </div>\n                </nav>\n                <!-- /main nav -->\n            </div>\n        </header>"

/***/ }),

/***/ "./src/app/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/navbar.component.html"),
            styles: [__webpack_require__("./src/app/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<!--=================================\n=            404 Section            =\n==================================-->\n<section class=\"moduler wrapper_404\" id=\"a404\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"text-center\">\n                    <h1 class=\"wow fadeInUp animated cd-headline slide\" data-wow-delay=\".4s\" >404</h1>\n                    <h2 class=\"wow fadeInUp animated\" data-wow-delay=\".6s\">Opps! You have some problems</h2>\n                    <p class=\"wow fadeInUp animated\" data-wow-delay=\".9s\">The page you are looking for was moved, removed, renamed or might never existed.</p>\n                    <a href=\"index.html\" class=\"btn btn-dafault btn-home wow fadeInUp animated\" data-wow-delay=\"1.1s\">Go Home</a>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-not-found',
            template: __webpack_require__("./src/app/not-found.component.html"),
            styles: [__webpack_require__("./src/app/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/service.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/service.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- \n        ================================================== \n            Global Page Section Start\n        ================================================== -->\n        <section class=\"global-page-header\" id= \"aService\">\n            <div class=\"container\">\n                <div class=\"row\">\n                    <div class=\"col-md-12\">\n                        <div class=\"block\">\n                            <h2>Service</h2>\n                            <ol class=\"breadcrumb\">\n                                <li>\n                                    <a href=\"index.html\">\n                                        <i class=\"ion-ios-home\"></i>\n                                        Home\n                                    </a>\n                                </li>\n                                <li class=\"active\">Service</li>\n                            </ol>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </section>\n\n\n<!-- \n================================================== \n    Service Page Section  Start\n================================================== -->\n<section id=\"service-page\" class=\"pages service-page\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-6\">\n                <div class=\"block\">\n                    <h2 class=\"subtitle wow fadeInUp animated\" data-wow-delay=\".3s\" data-wow-duration=\"500ms\">What We Love To Do</h2>\n                    <p class=\"subtitle-des wow fadeInUp animated\" data-wow-delay=\".5s\" data-wow-duration=\"500ms\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis porro recusandae non quibusdam iure adipisci.</p>\n                    <div class=\"row service-parts\">\n                        <div class=\"col-md-6\">\n                            <div class=\"block wow fadeInUp animated\" data-wow-duration=\"400ms\" data-wow-delay=\"600ms\">\n                                <i class=\"ion-ios-paper-outline\"></i>\n                                <h4>BRANDING</h4>\n                                <p>Veritatis eligendi, dignissimos. Porta fermentum mus aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum.</p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"block wow fadeInUp animated\" data-wow-duration=\"400ms\" data-wow-delay=\"800ms\">\n                                <i class=\"ion-ios-pint-outline\"></i>\n                                <h4>DESIGN</h4>\n                                <p>Veritatis eligendi, dignissimos. Porta fermentum mus aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum.</p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"block wow fadeInUp animated\" data-wow-duration=\"400ms\" data-wow-delay=\"1s\">\n                                <i class=\"ion-ios-paper-outline\"></i>\n                                <h4>DEVELOPMENT</h4>\n                                <p>Veritatis eligendi, dignissimos. Porta fermentum mus aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum.</p>\n                            </div>\n                        </div>\n                        <div class=\"col-md-6\">\n                            <div class=\"block wow fadeInUp animated\" data-wow-duration=\"400ms\" data-wow-delay=\"1.1s\">\n                                <i class=\"ion-ios-paper-outline\"></i>\n                                <h4>THEMEING</h4>\n                                <p>Veritatis eligendi, dignissimos. Porta fermentum mus aute pulvinar earum minus platea massa feugiat rutrum urna facilisi ipsameum.</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"block\">\n                    <img class=\"img-responsive\" src=\"assets/images/team.jpg\" alt=\"\">\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/service.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServiceComponent = /** @class */ (function () {
    function ServiceComponent() {
    }
    ServiceComponent.prototype.ngOnInit = function () {
    };
    ServiceComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-service',
            template: __webpack_require__("./src/app/service.component.html"),
            styles: [__webpack_require__("./src/app/service.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServiceComponent);
    return ServiceComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map