webpackJsonp([1,4],{

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentService = (function () {
    function DocumentService(http) {
        this.http = http;
        this.documentsUrl = 'https://ironicfreelancedocs.herokuapp.com/freelance_documents.json';
    }
    DocumentService.prototype.getDocuments = function () {
        return this.http.get(this.documentsUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DocumentService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return DocumentService;
}());
DocumentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], DocumentService);

var _a;
//# sourceMappingURL=document.service.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__document_service__ = __webpack_require__(155);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DocumentsComponent = (function () {
    function DocumentsComponent(documentService) {
        this.documentService = documentService;
        this.pageTitle = "Document Dashboard";
        this.mode = "Observable";
    }
    DocumentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].timer(0, 5000);
        timer.subscribe(function () { return _this.getDocuments(); });
    };
    DocumentsComponent.prototype.getDocuments = function () {
        var _this = this;
        this.documentService.getDocuments()
            .subscribe(function (documents) { return _this.documents = documents; }, function (error) { return _this.errorMessage = error; });
    };
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'documents',
        template: __webpack_require__(287),
        styles: [__webpack_require__(281)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__document_service__["a" /* DocumentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__document_service__["a" /* DocumentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__document_service__["a" /* DocumentService */]) === "function" && _a || Object])
], DocumentsComponent);

var _a;
//# sourceMappingURL=documents.component.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomepageComponent = (function () {
    function HomepageComponent() {
    }
    return HomepageComponent;
}());
HomepageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'homepage',
        template: __webpack_require__(288)
    })
], HomepageComponent);

//# sourceMappingURL=homepage.component.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proposal_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProposalListComponent = (function () {
    function ProposalListComponent(proposalService, router) {
        this.proposalService = proposalService;
        this.router = router;
        this.mode = "Observable";
    }
    ProposalListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var timer = __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].timer(0, 5000);
        timer.subscribe(function () { return _this.getProposals(); });
    };
    ProposalListComponent.prototype.getProposals = function () {
        var _this = this;
        this.proposalService.getProposals()
            .subscribe(function (proposals) { return _this.proposals = proposals; }, function (error) { return _this.errorMessage = error; });
    };
    ProposalListComponent.prototype.goToShow = function (proposal) {
        var link = ['/proposal', proposal.id];
        this.router.navigate(link);
    };
    return ProposalListComponent;
}());
ProposalListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'proposal-list',
        template: __webpack_require__(289),
        styles: [__webpack_require__(282)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__proposal_service__["a" /* ProposalService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__proposal_service__["a" /* ProposalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__proposal_service__["a" /* ProposalService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], ProposalListComponent);

var _a, _b;
//# sourceMappingURL=proposal-list.component.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__proposal__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proposal_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalNewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProposalNewComponent = (function () {
    function ProposalNewComponent(proposalService) {
        this.proposalService = proposalService;
        this.proposal = new __WEBPACK_IMPORTED_MODULE_2__proposal__["a" /* Proposal */];
        this.submitted = false;
    }
    ProposalNewComponent.prototype.createProposal = function (proposal) {
        this.submitted = true;
        this.proposalService.createProposal(proposal)
            .subscribe(function (data) { return true; }, function (error) {
            console.log("Error saving proposal");
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["Observable"].throw(error);
        });
    };
    return ProposalNewComponent;
}());
ProposalNewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'proposal-new',
        template: __webpack_require__(290),
        styles: [__webpack_require__(283)],
        providers: [__WEBPACK_IMPORTED_MODULE_3__proposal_service__["a" /* ProposalService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__proposal_service__["a" /* ProposalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__proposal_service__["a" /* ProposalService */]) === "function" && _a || Object])
], ProposalNewComponent);

var _a;
//# sourceMappingURL=proposal-new.component.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__proposal__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__proposal_service__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalShowComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProposalShowComponent = (function () {
    function ProposalShowComponent(http, proposalService, route) {
        this.http = http;
        this.proposalService = proposalService;
        this.route = route;
    }
    ProposalShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        var proposalRequest = this.route.params
            .flatMap(function (params) {
            return _this.proposalService.getProposal(+params['id']);
        });
        proposalRequest.subscribe(function (response) { return _this.proposal = response.json(); });
    };
    return ProposalShowComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__proposal__["a" /* Proposal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__proposal__["a" /* Proposal */]) === "function" && _a || Object)
], ProposalShowComponent.prototype, "proposal", void 0);
ProposalShowComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'proposal-show',
        template: __webpack_require__(291),
        styles: [__webpack_require__(284)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__proposal_service__["a" /* ProposalService */]]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["e" /* Http */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__proposal_service__["a" /* ProposalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__proposal_service__["a" /* ProposalService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object])
], ProposalShowComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=proposal-show.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Proposal; });
var Proposal = (function () {
    function Proposal(id, customer, portfolio_url, tools, estimated_hours, hourly_rate, weeks_to_complete, client_email) {
        if (portfolio_url === void 0) { portfolio_url = 'http://'; }
        this.id = id;
        this.customer = customer;
        this.portfolio_url = portfolio_url;
        this.tools = tools;
        this.estimated_hours = estimated_hours;
        this.hourly_rate = hourly_rate;
        this.weeks_to_complete = weeks_to_complete;
        this.client_email = client_email;
    }
    return Proposal;
}());

// 'ABC Company', '' 
//# sourceMappingURL=proposal.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 213;


/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(226);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__documents_documents_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__proposal_proposal_list_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__proposal_proposal_new_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__proposal_proposal_show_component__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'documents', component: __WEBPACK_IMPORTED_MODULE_3__documents_documents_component__["a" /* DocumentsComponent */] },
    { path: 'proposals', component: __WEBPACK_IMPORTED_MODULE_4__proposal_proposal_list_component__["a" /* ProposalListComponent */] },
    { path: 'proposals/new', component: __WEBPACK_IMPORTED_MODULE_5__proposal_proposal_new_component__["a" /* ProposalNewComponent */] },
    { path: 'proposal/:id', component: __WEBPACK_IMPORTED_MODULE_6__proposal_proposal_show_component__["a" /* ProposalShowComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app',
        template: __webpack_require__(286),
        styles: [__webpack_require__(280)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__documents_documents_component__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__documents_document_service__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__proposal_proposal_list_component__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__proposal_proposal_new_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__proposal_proposal_show_component__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__proposal_proposal_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_routing_module__ = __webpack_require__(223);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_13__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__homepage_homepage_component__["a" /* HomepageComponent */],
            __WEBPACK_IMPORTED_MODULE_7__documents_documents_component__["a" /* DocumentsComponent */],
            __WEBPACK_IMPORTED_MODULE_9__proposal_proposal_list_component__["a" /* ProposalListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__proposal_proposal_new_component__["a" /* ProposalNewComponent */],
            __WEBPACK_IMPORTED_MODULE_11__proposal_proposal_show_component__["a" /* ProposalShowComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__documents_document_service__["a" /* DocumentService */],
            __WEBPACK_IMPORTED_MODULE_12__proposal_proposal_service__["a" /* ProposalService */]
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 226:
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

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".proposal-link:hover {\n  text-decoration: none;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".form-container {\n  padding: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 284:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(31)();
// imports


// module
exports.push([module.i, ".proposal-card{\n  padding: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 286:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-toggleable-md navbar-light bg-faded nav-styles\">\n\t<div class='container'>\t\n\t\t<ul class=\"nav navbar-nav\">\n\t\t\t<li class='nav-item'>\n\t\t\t\t<a class='nav-link' routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\n\t\t\t</li>\n\t\t\t<li class='nav-item'>\n\t\t\t\t<a class='nav-link' routerLink=\"/documents\" routerLinkActive=\"active\">Docs</a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<div ngbDropdown class=\"d-inline-block dropdown-links dropdown\">\n\t\t\t\t\t<button class=\"btn btn-outline-primary\" id=\"proposalDropdown\" ngbDropdownToggle>\n\t\t\t\t\t\tProposals\n\t\t\t\t\t</button>\n\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"proposalDropdown\">\n\t\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/proposals\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\">Proposals</a>\n\t\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"/proposals/new\" routerLinkActive=\"active\">New Proposal</a>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>\n\n<div class=\"app-body\">\n\t<router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ 287:
/***/ (function(module, exports) {

module.exports = "<div class='container'>\n\t<h1 class=\"headline\">{{ pageTitle }}</h1>\n\n\t<div class=\"card\" *ngFor=\"let doc of documents\">\n\t\t<img class=\"card-img-top\" src=\"{{ doc.image_url }}\" alt=\"Card image cap\" width=\"100%\">\n\n\t\t<div class=\"card-block\">\n\t\t\t<h4 class=\"card-title\">{{ doc.title }}</h4>\n\n\t\t\t<p class=\"card-text\">{{ doc.description }}</p>\n\n\t\t\t<div>\n\t\t\t\t<a class=\"btn btn-lg btn-primary\" href=\"{{ doc.file_url }}\">Download File</a>\n\t\t\t</div>\n\n\t\t\t<p class=\"card-text\"><small class=\"text-muted\">{{ doc.updated_at | date }}</small></p>\n\n\t\t</div>\n\n\t</div>\n\n</div>"

/***/ }),

/***/ 288:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"jumbotron\">\n    <h1>Freelancer Dashboard</h1>\n    <p class=\"lead\">Everything you need to manage your freelance business.</p>\n  </div>\n</div>"

/***/ }),

/***/ 289:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div class=\"list-group\">\n\t\t<a class=\"list-group-item list-group-item-action active\">\n\t\t\t<h1 class=\"headline\">Proposal List</h1>\n\t\t</a>\n\t\t<span *ngFor=\"let proposal of proposals\" class=\"list-group-item list-group-item-action\">\n\t\t\t<a (click)=\"goToShow(proposal)\" class=\"list-group-item-action proposal-link\">\n\t\t\t\t<h5 class=\"list-group-item-heading\">{{proposal.customer}}</h5>\n\t\t\t\t<p class=\"list-group-item-text\">\n\t\t\t\t\t{{ proposal.hourly_rate * proposal.estimated_hours | currency:'USD':true:'.0' }}\n\t\t\t\t</p>\n\t\t\t</a>\n\t\t</span>\n\t</div>\n</div>"

/***/ }),

/***/ 290:
/***/ (function(module, exports) {

module.exports = "<div class=\"card container form-container\">\n\t<div class='row'>\n\n\t\t<div class=\"col-md-6\">\n\t\t\t<h1>Create a Proposal</h1>\n\n\t\t\t<div>\n\t\t\t\t<form (ngSubmit)=\"createProposal(proposal)\" #proposalForm=\"ngForm\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"customer\">Customer Name</label>\n\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\tid=\"customer\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"ABC Company\"\n\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\tname=\"customer\"\n\t\t\t\t\t\t\t\t\t\t#customer='ngModel'\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"proposal.customer\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div [hidden]=\"customer.valid || customer.pristine\"\n\t\t\t\t\t\t\t\t\tclass='alert alert-danger'\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tCustomer name is required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"portfolio_url\">Portfolio URL</label>\n\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\tid=\"portfolio_url\"\n\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\tname=\"portfolio_url\"\n\t\t\t\t\t\t\t\t\t\t#portfolio_url='ngModel'\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"proposal.portfolio_url\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div [hidden]=\"portfolio_url.valid || portfolio_url.pristine\"\n\t\t\t\t\t\t\t\t\tclass='alert alert-danger'\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tA Portfolio URL is required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"tools\">Tools that you'll use on the project</label>\n\t\t\t\t\t\t<input type=\"text\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\tid=\"tools\"\n\t\t\t\t\t\t\t\t\t\tplaceholder=\"Ruby on Rails, Angular, etc\"\n\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\tname=\"tools\"\n\t\t\t\t\t\t\t\t\t\t#tools='ngModel'\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"proposal.tools\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div [hidden]=\"tools.valid || tools.pristine\"\n\t\t\t\t\t\t\t\t\tclass='alert alert-danger'\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tA list of tools is required\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"estimated_hours\">Estimated hours</label>\n\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\tid=\"estimated_hours\"\n\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\tname=\"estimated_hours\"\n\t\t\t\t\t\t\t\t\t\t#estimated_hours='ngModel'\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"proposal.estimated_hours\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div [hidden]=\"estimated_hours.valid || estimated_hours.pristine\"\n\t\t\t\t\t\t\t\t\tclass='alert alert-danger'\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tYou need to enter your estimated hours for the project\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"hourly_rate\">Hourly rate</label>\n\t\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t\t<span class=\"input-group-addon\">$</span>\n\t\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\t\tid=\"hourly_rate\"\n\t\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\t\tname=\"hourly_rate\"\n\t\t\t\t\t\t\t\t\t\t\t#hourly_rate='ngModel'\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"proposal.hourly_rate\"\n\t\t\t\t\t\t\t>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t<div [hidden]=\"hourly_rate.valid || hourly_rate.pristine\"\n\t\t\t\t\t\t\t\t\tclass='alert alert-danger'\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tYou need to enter your hourly rate for the project\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"weeks_to_complete\">Weeks to Complete</label>\n\t\t\t\t\t\t<input type=\"number\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\tid=\"weeks_to_complete\"\n\t\t\t\t\t\t\t\t\t\trequired\n\t\t\t\t\t\t\t\t\t\tname=\"weeks_to_complete\"\n\t\t\t\t\t\t\t\t\t\t#weeks_to_complete='ngModel'\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"proposal.weeks_to_complete\"\n\t\t\t\t\t\t>\n\t\t\t\t\t\t<div [hidden]=\"weeks_to_complete.valid || weeks_to_complete.pristine\"\n\t\t\t\t\t\t\t\t\tclass='alert alert-danger'\n\t\t\t\t\t\t>\n\t\t\t\t\t\t\tYou need to enter the weeks you estimate to complete the project\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"client_email\">Client Email <em>(Optional)</em></label>\n\t\t\t\t\t\t<input type=\"email\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\"\n\t\t\t\t\t\t\t\t\t\tid=\"client_email\"\n\t\t\t\t\t\t\t\t\t\tname=\"client_email\"\n\t\t\t\t\t\t\t\t\t\t#client_email='ngModel'\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"proposal.client_email\"\n\t\t\t\t\t\t>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<button type=\"submit\"\n\t\t\t\t\t\tclass='btn btn-outline-primary btn-lg'\n\t\t\t\t\t\t[disabled]=\"!proposalForm.form.valid\"\n\t\t\t\t\t\t[hidden]=\"submitted\"\n\t\t\t\t\t>\n\t\t\t\t\t\tGenerate Proposal\n\t\t\t\t\t</button>\n\t\t\t\t\t\n\t\t\t\t\t<div\n\t\t\t\t\t\t[hidden]=\"!submitted\"\n\t\t\t\t\t\tclass=\"alert alert-success\"\n\t\t\t\t\t\trole=\"alert\"\n\t\t\t\t\t  >\n\t\t\t\t\t\tYour proposal has been generated <a class=\"alert-link\"\n\t\t\t\t\t\trouterLink=\"/proposals\">View all proposals</a>\n\t\t\t\t\t</div>\n\n\t\t\t\t</form>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"col-md-6\">\n\t\t\t<div>\n\t\t\t\t<p>Hi {{ proposal.customer }},</p>\n\n\n\t\t\t\t<p>It was a pleasure getting to meet with you and review your project requirements, I believe it is a great fit for the types of applications that I build out. Please feel free to check out some of my past projects <a href=\"{{ proposal.portfolio_url }}\">here</a>.</p>\n\n\n\t\t\t\t<p>To successfully build out the application I will be utilizing {{ proposal.tools }}, and a number of other tools to ensure that the project follows industry wide best practices.</p>\n\n\n\t\t\t\t<p>Ensuring that you are fully informed is one of my top priorities, so in addition to incorporating everything that we discussed, I will also be creating a project management dashboard and sending you a project update message daily so that you can have a transparent view of the development as it takes place.</p>\n\n\n\t\t\t\t<p>To accomplish the project and meet the requirements that we discussed, I am estimating that it will take {{ proposal.estimated_hours }} hours in development time to complete. The project should take {{ proposal.weeks_to_complete }} weeks to complete and with my hourly rate of {{ proposal.hourly_rate }}/hour, the estimated total will be {{ proposal.hourly_rate * proposal.estimated_hours | currency:'USD':true:'.0' }}.</p>\n\n\n\t\t\t\t<p>The next step from here is to set up a meeting to finalize the project and sign contracts.</p>\n\n\n\t\t\t\t<p>I am excited to working with you and build out this project.</p>\n\t\t\t</div>\n\t\t</div>\n\t\t\n\t</div>\n</div>"

/***/ }),

/***/ 291:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<div *ngIf=\"proposal\" class=\"card proposal-card\">\n\t\t<h1>{{ proposal.customer }}</h1>\n\n\t\t<div>\n\t\t\t<p>Hi {{ proposal.customer }},</p>\n\n\n\t\t\t<p>It was a pleasure getting to meet with you and review your project requirements, I believe it is a great fit for the types of applications that I build out. Please feel free to check out some of my past projects <a href=\"{{ proposal.portfolio_url }}\">here</a>.</p>\n\n\n\t\t\t<p>To successfully build out the application I will be utilizing {{ proposal.tools }}, and a number of other tools to ensure that the project follows industry wide best practices.</p>\n\n\n\t\t\t<p>Ensuring that you are fully informed is one of my top priorities, so in addition to incorporating everything that we discussed, I will also be creating a project management dashboard and sending you a project update message daily so that you can have a transparent view of the development as it takes place.</p>\n\n\n\t\t\t<p>To accomplish the project and meet the requirements that we discussed, I am estimating that it will take {{ proposal.estimated_hours }} hours in development time to complete. The project should take {{ proposal.weeks_to_complete }} weeks to complete and with my hourly rate of {{ proposal.hourly_rate }}/hour, the estimated total will be {{ proposal.hourly_rate * proposal.estimated_hours | currency:'USD':true:'.0' }}.</p>\n\n\n\t\t\t<p>The next step from here is to set up a meeting to finalize the project and sign contracts.</p>\n\n\n\t\t\t<p>I am excited to working with you and build out this project.</p>\n\t\t</div>\n\t\n\t</div>\n</div>"

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProposalService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProposalService = (function () {
    function ProposalService(http) {
        this.http = http;
        this.proposalsUrl = 'https://ironicfreelanceprops.herokuapp.com/proposals';
    }
    ProposalService.prototype.getProposals = function () {
        return this.http.get(this.proposalsUrl)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ProposalService.prototype.getProposal = function (id) {
        return this.http.get(this.proposalsUrl + "/" + id + '.json');
    };
    ProposalService.prototype.createProposal = function (proposal) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.proposalsUrl, JSON.stringify(proposal), { headers: headers }).map(function (res) { return res.json(); });
    };
    ProposalService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["Observable"].throw(errMsg);
    };
    return ProposalService;
}());
ProposalService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object])
], ProposalService);

var _a;
//# sourceMappingURL=proposal.service.js.map

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(214);


/***/ })

},[553]);
//# sourceMappingURL=main.bundle.js.map