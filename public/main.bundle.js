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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__employees_employees_component__ = __webpack_require__("./src/app/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__positions_positions_component__ = __webpack_require__("./src/app/positions/positions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__employee_employee_component__ = __webpack_require__("./src/app/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__position_position_component__ = __webpack_require__("./src/app/position/position.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'employees', component: __WEBPACK_IMPORTED_MODULE_3__employees_employees_component__["a" /* EmployeesComponent */] },
    { path: 'positions', component: __WEBPACK_IMPORTED_MODULE_4__positions_positions_component__["a" /* PositionsComponent */] },
    { path: 'employee/:_id', component: __WEBPACK_IMPORTED_MODULE_6__employee_employee_component__["a" /* EmployeeComponent */] },
    { path: 'position/:_id', component: __WEBPACK_IMPORTED_MODULE_7__position_position_component__["a" /* PositionComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_5__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-nav></app-nav>\n<app-content></app-content>\n<app-footer></app-footer>\n<!--/#footer-->"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/*********************************************************************************
 * * WEB422 – Assignment 05
 * * I declare that this assignment is my own work in accordance with Seneca Academic Policy.
 * No part of this assignment has been copied manually or electronically from any other source (including web sites) or
 * * distributed to other students. *
 *  * Name: Jatin Aroea Student ID: 136897162 Date: 28th March, 2018 *
 *  ********************************************************************************/
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__ = __webpack_require__("./src/app/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__content_content_component__ = __webpack_require__("./src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__employees_employees_component__ = __webpack_require__("./src/app/employees/employees.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__positions_positions_component__ = __webpack_require__("./src/app/positions/positions.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__ = __webpack_require__("./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__data_position_service__ = __webpack_require__("./src/app/data/position.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__data_employee_service__ = __webpack_require__("./src/app/data/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__employee_employee_component__ = __webpack_require__("./src/app/employee/employee.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__position_position_component__ = __webpack_require__("./src/app/position/position.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
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
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__nav_nav_component__["a" /* NavComponent */],
                __WEBPACK_IMPORTED_MODULE_4__content_content_component__["a" /* ContentComponent */],
                __WEBPACK_IMPORTED_MODULE_5__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_7__employees_employees_component__["a" /* EmployeesComponent */],
                __WEBPACK_IMPORTED_MODULE_8__positions_positions_component__["a" /* PositionsComponent */],
                __WEBPACK_IMPORTED_MODULE_9__page_not_found_page_not_found_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_14__employee_employee_component__["a" /* EmployeeComponent */],
                __WEBPACK_IMPORTED_MODULE_15__position_position_component__["a" /* PositionComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_10__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_13__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__data_position_service__["a" /* PositionService */], __WEBPACK_IMPORTED_MODULE_12__data_employee_service__["a" /* EmployeeService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/content/content.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "\n    <router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
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

var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-content',
            template: __webpack_require__("./src/app/content/content.component.html"),
            styles: [__webpack_require__("./src/app/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/data/employee.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = "https://web422-api.herokuapp.com";
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get("https://web422-api.herokuapp.com/employees");
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get("https://web422-api.herokuapp.com/employee/" + id);
    };
    EmployeeService.prototype.saveEmployee = function (employee) {
        return this.http.put("https://web422-api.herokuapp.com/employee/" + employee._id, employee);
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/data/position.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PositionService = /** @class */ (function () {
    function PositionService(http) {
        this.http = http;
        this.url = "https://web422-api.herokuapp.com";
    }
    PositionService.prototype.getPositions = function () {
        return this.http.get(this.url + "/positions");
    };
    PositionService.prototype.getPosition = function (id) {
        return this.http.get(this.url + "/position/" + id);
    };
    PositionService.prototype.savePosition = function (Position) {
        return this.http.put(this.url + '/position/' + Position._id, Position);
    };
    PositionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PositionService);
    return PositionService;
}());



/***/ }),

/***/ "./src/app/employee/employee.component.css":
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; }"

/***/ }),

/***/ "./src/app/employee/employee.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Employee: {{employee.FirstName}} {{employee.LastName}}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class=\"container\">\n  <div class=\"row\" id=\"formBody\">\n    <div class=\"col-md-12\">\n      <form #f='ngForm' (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': FirstName.errors}\">\n              <label class=\"control-label\" for=\"FirstName\" [ngClass]=\"{'has-error':  FirstName.errors}\">First Name:</label>\n              <input class=\"form-control\" id=\"FirstName\" type=\"text\" name=\"FirstName\" [(ngModel)]=\"employee.FirstName\" #FirstName=\"ngModel\" required/>\n             \n              <span class=\"help-block\" *ngIf=\"FirstName.errors && FirstName.errors.required\">First Name required.</span>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': LastName.errors}\">\n              <label class=\"control-label\" for=\"LastName\" [ngClass]=\"{'has-error':  LastName.errors}\">Last Name:</label>\n              <input class=\"form-control\" id=\"LastName\" type=\"text\" name=\"LastName\" [(ngModel)]=\"employee.LastName\" #LastName=\"ngModel\"\n                required/>\n              <span class=\"help-block\" *ngIf=\"LastName.errors && LastName.errors.required\">Last Name required.</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"Position\">Position:</label>\n              <select required [(ngModel)]=\"employee.Position._id\" class=\"form-control\" id=\"Position\" name=\"Position\">\n                <option *ngFor=\"let position of positions\" \n                [value]=\"position._id\">\n                {{position.PositionName}}</option>\n              </select>\n            </div>\n                     \n\n          </div>\n\n\n          <div class=\"col-md-6\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': SalaryBonus.errors}\">\n              <label class=\"control-label\" for=\"SalaryBonus\" [ngClass]=\"{'has-error':  SalaryBonus.errors}\">Salary Bonus</label>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\">$</span>\n                <input class=\"form-control\" id=\"SalaryBonus\" type=\"number\" name=\"SalaryBonus\" [(ngModel)]=\"employee.SalaryBonus\" #SalaryBonus=\"ngModel\"\n                  required/>\n               \n              </div>\n              <span class=\"help-block\" *ngIf=\"SalaryBonus.errors && SalaryBonus.errors.required\">Numeric Salary Bonus is required.</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n        \n          <div class=\"col-md-3\">\n            <div class=\"form-group\" [ngClass]=\"{'has-error': AddressStreet.errors}\">\n              <label for=\"AddressStreet\" class=\"control-label\" [ngClass]=\"{'has-error':  AddressStreet.errors}\">Address (Street):</label>\n              <input class=\"form-control\" id=\"AddressStreet\" type=\"text\" name=\"AddressStreet\" [(ngModel)]=\"employee.AddressStreet\" required\n                #AddressStreet=\"ngModel\" />\n              <span class=\"help-block\" *ngIf=\"AddressStreet.errors && AddressStreet.errors.required\">Street Name required.</span>\n            </div></div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error': AddressCity.errors}\">\n                <label for=\"AddressCity\" class=\"control-label\" [ngClass]=\"{'has-error':  AddressCity.errors}\">Address (City):</label>\n                <input class=\"form-control\" id=\"AddressCity\" type=\"text\" name=\"AddressCity\" [(ngModel)]=\"employee.AddressCity\" required #AddressCity=\"ngModel\"\n                />\n                <span class=\"help-block\" *ngIf=\"AddressCity.errors && AddressCity.errors.required\">City Name required.</span>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n                <div class=\"form-group\" [ngClass]=\"{'has-error': AddressState.errors}\">\n                  <label for=\"AddressState\" class=\"control-label\" [ngClass]=\"{'has-error':  AddressState.errors}\">Address (State):</label>\n                  <input class=\"form-control\" id=\"AddressState\" type=\"text\" name=\"AddressState\" [(ngModel)]=\"employee.AddressState\" required\n                    #AddressState=\"ngModel\" />\n                  <span class=\"help-block\" *ngIf=\"AddressState.errors && AddressState.errors.required\">Street Name required.</span>\n                </div></div>\n           \n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error': AddressZip.errors}\">\n                <label for=\"AddressZip\" class=\"control-label\" [ngClass]=\"{'has-error':  AddressZip.errors}\">Address (Zip Code):</label>\n                <input class=\"form-control\" id=\"AddressZip\" type=\"text\" name=\"AddressZip\" [(ngModel)]=\"employee.AddressZip\" required #AddressZip=\"ngModel\"/>\n                <span class=\"help-block\" *ngIf=\"AddressZip.errors && AddressZip.errors.required\">ZIP Code required.</span>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error': PhoneNum.errors}\">\n                <label for=\"PhoneNum\" class=\"control-label\" [ngClass]=\"{'has-error':  PhoneNum.errors}\">Phone Number:</label>\n                <input class=\"form-control\" id=\"PhoneNum\" type=\"text\" name=\"PhoneNum\" [(ngModel)]=\"employee.PhoneNum\" pattern=\"\\+?[ ]*[1-9]?[ ]*\\-?[ ]*\\(?[ ]*[1-9][ ]*(\\d[ ]*){2}\\)?[ ]*\\-?[ ]*(\\d[ ]*){3}-[ ]*(\\d[ ]*){4}\" required #PhoneNum=\"ngModel\"/>\n                <span class=\"help-block\" *ngIf=\"PhoneNum.errors && PhoneNum.errors.required\">Phone Number required.</span>\n              </div>\n            </div>\n            <div class=\"col-md-3\">\n              <div class=\"form-group\" [ngClass]=\"{'has-error': Extension.errors}\">\n                <label for=\"Extension\" class=\"control-label\" [ngClass]=\"{'has-error':  Extension.errors}\">Extension:</label>\n                <input class=\"form-control\" id=\"Extension\" type=\"number\" name=\"Extension\" [(ngModel)]=\"employee.Extension\" required #Extension=\"ngModel\"/>\n                <span class=\"help-block\" *ngIf=\"Extension.errors && Extension.errors.required\">Phone Number required.</span>\n              </div>\n            </div>\n            <div class=\"col-md-6\">\n              <div class=\"form-group\">\n                <label for=\"HireDate\">Hire Date:</label>\n                <input class=\"form-control\" id=\"HireDate\" name=\"HireDate\" type=\"text\" value=\"{{employee.HireDate | date:'MMMM dd, yyyy' }}\"\n                  readonly />\n              </div>\n              <hr />\n              <a class=\"btn btn-warning pull-left\" routerLink=\"/employees\">Return to Employee List</a>\n          <input [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Employee\" />\n            </div>\n            \n          </div>\n      \n          <br />\n          <br />\n      </form>\n      </div>\n    </div>\n    <br />\n    <div class=\"alert alert-success\" *ngIf=\"successMessage\">\n      <strong>Success!</strong> {{employee.FirstName}} {{employee.LastName}}'s information was successfully saved.\n    </div>\n\n    <div class=\"alert alert-danger\" *ngIf=\"failMessage\">\n      <strong>Error!</strong>{{employee.FirstName}} {{employee.LastName}}'s information could not be saved.\n    </div>\n  </div>\n  <br />\n  <br />"

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_employee_service__ = __webpack_require__("./src/app/data/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data_position_service__ = __webpack_require__("./src/app/data/position.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(route, employeeService, positionService) {
        this.route = route;
        this.employeeService = employeeService;
        this.positionService = positionService;
        this.successMessage = false;
        this.failMessage = false;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubScription = this.route.params.subscribe(function (params) {
            _this.employeeSubscription = _this.employeeService.getEmployee(params['_id']).subscribe(function (emp) {
                _this.employee = emp[0];
                console.log("****************************************");
                console.log(emp[0]);
                _this.getPositionsSubscription = _this.positionService.getPositions().subscribe(function (data) {
                    _this.positions = data;
                });
            });
        });
    };
    EmployeeComponent.prototype.onSubmit = function () {
        var _this = this;
        this.saveEmployeeSubscription = this.employeeService.saveEmployee(this.employee).subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function (error) {
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    EmployeeComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubScription) {
            this.paramSubScription.unsubscribe();
        }
        if (this.employeeSubscription) {
            this.employeeSubscription.unsubscribe();
        }
        if (this.getPositionsSubscription) {
            this.getPositionsSubscription.unsubscribe();
        }
        if (this.saveEmployeeSubscription) {
            this.saveEmployeeSubscription.unsubscribe();
        }
    };
    EmployeeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employee',
            template: __webpack_require__("./src/app/employee/employee.component.html"),
            styles: [__webpack_require__("./src/app/employee/employee.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__data_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_3__data_position_service__["a" /* PositionService */]])
    ], EmployeeComponent);
    return EmployeeComponent;
}());



/***/ }),

/***/ "./src/app/employees/employees.component.css":
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; } .table-responsive{margin-bottom:60px;}"

/***/ }),

/***/ "./src/app/employees/employees.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n        <h2>Employees</h2>\n        <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n        </div>\n<div class=\"container\">\n    <input class=\"form-control\" id=\"EmployeeSearch\" name=\"EmployeeSearch\" type=\"text\" placeholder=\"Search Employees by Full Name or Position\"\n        (keyup)=\"onEmployeeSearchKeyUP($event)\" />\n    <br />\n        <div class=\"table-responsive\" id=\"empTable\">\n                <table class=\"table table-condensed table-hover\">\n                 \n                        <thead>\n                            <tr id=\"titles\">\n                                <th>\n                                    Full Name\n                                </th>\n                                <th>\n                                    Address\n                                </th>\n                                <th>\n                                    Phone Number\n                                </th>\n                                <th>\n                                    Hire Date\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                                <tr *ngFor=\"let employee of filteredEmployees\"  (click)=\"routeEmployee(employee._id)\">\n                                        <td>\n                                                {{employee.FirstName}}\n                                                {{employee.LastName}}\n                                        </td>\n                                        <td>\n                                            {{employee.AddressStreet}},\n                                           {{employee.AddressCity}},\n                                           {{employee.AddressState}}\n                                          &nbsp;{{employee.AddressZip}}\n                                        </td>\n                                        <td>\n                                            {{employee.PhoneNum}}\n                                            Ext: {{employee.Extension}} \n                                        </td>\n                                        <td>\n                                                {{employee.HireDate | date:\"MMMM dd, yyyy\"}}\n                                            </td>\n                                        </tr>\n                        </tbody>\n                    </table>\n            </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/employees/employees.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_employee_service__ = __webpack_require__("./src/app/data/employee.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeesComponent = /** @class */ (function () {
    function EmployeesComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
    }
    EmployeesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmployeesSub = this.employeeService.getEmployees().subscribe(function (data) {
            _this.employees = data;
            _this.filteredEmployees = data;
        }, function () {
            _this.loadingError = true;
        });
    };
    EmployeesComponent.prototype.ngOnDestroy = function () {
        if (this.getEmployeesSub) {
            this.getEmployeesSub.unsubscribe();
        }
    };
    EmployeesComponent.prototype.routeEmployee = function (id) {
        this.router.navigate(['/employee', id]);
    };
    EmployeesComponent.prototype.onEmployeeSearchKeyUP = function (event) {
        var val = event.target.value.toLowerCase();
        this.filteredEmployees = this.employees.filter(function (employee) {
            if (employee.FirstName.toLowerCase().includes(val) ||
                employee.LastName.toLowerCase().includes(val) ||
                employee.Position.PositionName.toLowerCase().includes(val) ||
                employee.PhoneNum.toLowerCase().includes(val)) {
                return true;
            }
        });
    };
    EmployeesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-employees',
            template: __webpack_require__("./src/app/employees/employees.component.html"),
            styles: [__webpack_require__("./src/app/employees/employees.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_employee_service__["a" /* EmployeeService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], EmployeesComponent);
    return EmployeesComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6\">Copyright &copy; 2018 Jatin Arora (WEB422). Design by\n        <a href=\"http://www.templategarden.com\" rel=\"nofollow\">TemplateGarden</a>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"follow-us\">\n          <a class=\"fa fa-facebook social-icon\" href=\"#\"></a>\n          <a class=\"fa fa-twitter social-icon\" href=\"#\"></a>\n          <a class=\"fa fa-linkedin social-icon\" href=\"#\"></a>\n          <a class=\"fa fa-google-plus social-icon\" href=\"#\"></a>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
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
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = "section {\r\n    padding: 70px 0;\r\n    }\r\n    .no-margin {\r\n    margin: 0;\r\n    padding: 0;\r\n    }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"color-border\">\n  \n</div>\n<section id=\"main-slider\" class=\"no-margin\">\n  <div class=\"carousel slide\">\n    <ol class=\"carousel-indicators\">\n      <li data-target=\"#main-slider\" data-slide-to=\"0\" class=\"active\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"1\"></li>\n      <li data-target=\"#main-slider\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\">\n      <div class=\"item active\" id=\"item1\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Welcome to <span class=\"logo\"><i class=\"fa fa-cogs\"></i>&nbsp; API Demo</span></h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                 </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n      \n      <div class=\"item\" id=\"item2\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Typi non habent claritatem insitam</h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                 </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item-->\n      \n      <div class=\"item\" id=\"item3\">\n        <div class=\"container\">\n          <div class=\"row slide-margin\">\n            <div class=\"col-sm-12\">\n              <div class=\"carousel-content\">\n                <h1>Mirum est notare quam littera gothica</h1>\n                <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit sed diam nonummy nibh euismod tincidunt laoreet</h2>\n                <a class=\"btn-slide\" href=\"about-us.html\">Read More</a> </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!--/.item--> \n    </div>\n    <!--/.carousel-inner--> \n  </div>\n  <!--/.carousel--> \n  <a class=\"prev hidden-xs\" href=\"#main-slider\" data-slide=\"prev\"> <i class=\"fa fa-chevron-left\"></i> </a> <a class=\"next hidden-xs\" href=\"#main-slider\" data-slide=\"next\"> <i class=\"fa fa-chevron-right\"></i> </a> </section>\n<!--/#main-slider-->\n<div class=\"color-border\"> </div>\n<section id=\"feature\" >\n  <div class=\"container\">\n    <div class=\"center\">\n      <h2 id=\"pane\">Featured Services</h2>\n      <p class=\"lead\" id=\"pane\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum. Nunc quis semper sem.<br>\n        Morbi libero elit elementum quis faucibus ac, condimentum quis nibh.</p>\n    </div>\n    <div class=\"row\">\n      <div class=\"features\">\n        <div class=\"col-md-4\">\n          <div class=\"feature-wrap\"> <i class=\"fa fa-users\"></i>\n            <h2 id=\"pane\">Employees</h2>\n            <h3 id=\"paneSM\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div>\n        <!--/.col-md-4-->\n       \n        <div class=\"col-md-4\">\n          <div class=\"feature-wrap\"> <i class=\"fa fa-list\"></i>\n            <h2 id=\"pane\">Positions</h2>\n            <h3 id=\"pane\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique.</h3>\n          </div>\n        </div>\n        <!--/.col-md-4-->\n        \n        \n      </div>\n      <!--/.services--> \n    </div>\n    <!--/.row--> \n  </div>\n  <!--/.container--> \n</section>\n<!--/#feature-->\n\n<div class=\"color-border\">\n \n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
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
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<header id=\"header\">\r\n    \r\n  <nav class=\"navbar navbar-inverse\" role=\"banner\">\r\n    <div class=\"container\">\r\n      <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n          <span class=\"sr-only\">Toggle navigation</span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n          <span class=\"icon-bar\"></span>\r\n        </button>\r\n        <a  class='navbar-brand' routerLink=\"/home\">\r\n          <i class=\"fa fa-code\"></i>&nbsp; Jatin Arora (API Demo)</a>\r\n      </div>\r\n      <div class=\"collapse navbar-collapse navbar-right\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li routerLinkActive=\"active\">\r\n              <a routerLink=\"/home\">Home</a>\r\n          </li>\r\n          <li routerLinkActive=\"active\">\r\n              <a routerLink=\"/employees\">Employees</a>\r\n          </li>\r\n          <li routerLinkActive=\"active\">\r\n              <a routerLink=\"/positions\">Positions</a>\r\n          </li>\r\n        \r\n          </ul>\r\n      </div>\r\n    </div>\r\n    <!--/.container-->\r\n  </nav>\r\n \r\n\r\n  <!--/nav-->\r\n\r\n</header>"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
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

var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\" id=\"upperBox\">\n    <div class=\"col-md-12\" id=\"notFound\">\n       <h1> <i class=\"fa fa-times\"></i>&nbsp; 404 </h1>\n       <h2 \tid=\"pane\">Not Found</h2>\n    \n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageNotFoundComponent; });
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

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-page-not-found',
            template: __webpack_require__("./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__("./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/position/position.component.css":
/***/ (function(module, exports) {

module.exports = ".center{\r\n    margin-top:40px;\r\n}"

/***/ }),

/***/ "./src/app/position/position.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n  <h2>Position: {{position.PositionName}}</h2>\n  <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class=\"container\" id=\"positionInfo\">\n  <div class=\"row\" id=\"postC\">\n    <div class=\"col-md-12\">\n      <form #f=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [class.has-error]=\"positionname.errors\">\n              <label for=\"PositionName\">Position Name:</label>\n              <input required [(ngModel)]=\"position.PositionName\" #positionname=\"ngModel\" placeholder=\"Position Name\" class=\"form-control\" id=\"PositionName\" type=\"text\" name=\"PositionName\" />\n              <div *ngIf=\"positionname.errors && positionname.errors.required\">\n                  <span class=\"help-block\">Position Name is Required</span> \n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-12\">\n            <div class=\"form-group\" [class.has-error]=\"description.errors\">\n              <label for=\"PositionDescription\">Description:</label>\n              <textarea required [(ngModel)]=\"position.PositionDescription\" #description=\"ngModel\" placeholder=\"Description\" class=\"form-control\" id=\"PositionDescription\" rows=\"5\" name=\"PositionDescription\"></textarea>\n              <div *ngIf=\"description.errors && description.errors.required\">\n                  <span class=\"help-block\">Description is Required</span> \n              </div>\n            </div>\n            <hr />\n            <a routerLink=\"/positions\" class=\"btn btn-warning pull-left\">Return to Position List</a>\n            <input [disabled]=\"!f.valid\" type=\"submit\" class=\"btn btn-primary pull-right\" value=\"Update Position\" />\n          </div>\n        </div>\n       \n        <br />\n        <br />\n      </form>\n    </div>\n  </div>\n  <br />\n  <div *ngIf=successMessage class=\"alert alert-success\">\n    <strong>Success!</strong> Position: \"{{position.PositionName}}\" was successfully saved.\n  </div>\n  <div *ngIf=failMessage class=\"alert alert-danger\">\n    <strong>Error!</strong> Position: {{position.PositionName}} could not be saved.\n  </div>\n</div>\n<br />\n<br />"

/***/ }),

/***/ "./src/app/position/position.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__data_position_service__ = __webpack_require__("./src/app/data/position.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionComponent = /** @class */ (function () {
    function PositionComponent(positionService, activatedRoute) {
        this.positionService = positionService;
        this.activatedRoute = activatedRoute;
        this.successMessage = false;
        this.failMessage = false;
    }
    PositionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.paramSubScription = this.activatedRoute.params.subscribe(function (params) {
            _this._id = params['_id'];
        });
        this.positionSubscription = this.positionService.getPosition(this._id).subscribe(function (position) {
            _this.position = position[0];
        });
    };
    PositionComponent.prototype.onSubmit = function () {
        var _this = this;
        this.savePositionSubscription = this.positionService.savePosition(this.position).subscribe(function () {
            _this.successMessage = true;
            setTimeout(function () {
                _this.successMessage = false;
            }, 2500);
        }, function (error) {
            _this.failMessage = true;
            setTimeout(function () {
                _this.failMessage = false;
            }, 2500);
        });
    };
    PositionComponent.prototype.ngOnDestroy = function () {
        if (this.paramSubScription != undefined) {
            this.paramSubScription.unsubscribe();
        }
        if (this.positionSubscription != undefined) {
            this.positionSubscription.unsubscribe();
        }
    };
    PositionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-position',
            template: __webpack_require__("./src/app/position/position.component.html"),
            styles: [__webpack_require__("./src/app/position/position.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__data_position_service__["a" /* PositionService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PositionComponent);
    return PositionComponent;
}());



/***/ }),

/***/ "./src/app/positions/positions.component.css":
/***/ (function(module, exports) {

module.exports = ".center{ margin-top:40px; } .table-responsive{margin-bottom:60px;}"

/***/ }),

/***/ "./src/app/positions/positions.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"center\">\n    <h2>Positions</h2>\n    <p class=\"lead\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non odio sed eros tristique bibendum.</p>\n</div>\n<div class=\"container\">\n    <div class=\"table-responsive\">\n        <table class=\"table table-condensed table-hover\">\n\n            <thead>\n                <tr>\n                    <th>\n                        Title\n                    </th>\n                    <th>\n                        Position Description\n                    </th>\n                    <th>\n                        Salary\n                    </th>\n\n                </tr>\n            </thead>\n            <tbody>\n                <tr *ngFor=\"let position of positions\" (click)=\"routePosition(position._id)\">\n                    <td>\n                        {{position.PositionName}}\n                    </td>\n                    <td>\n                        {{position.PositionDescription}}\n                    </td>\n                    <td>\n                       ${{position.PositionBaseSalary | number:'.2'}}\n                    </td>\n\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/positions/positions.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositionsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_position_service__ = __webpack_require__("./src/app/data/position.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PositionsComponent = /** @class */ (function () {
    function PositionsComponent(positionService, router) {
        this.positionService = positionService;
        this.router = router;
        this.loadingError = false;
    }
    PositionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getPositionsSub = this.positionService.getPositions().subscribe(function (data) {
            _this.positions = data;
        }, function () {
            _this.loadingError = true;
        });
    };
    PositionsComponent.prototype.routePosition = function (id) {
        this.router.navigate(['/position', id]);
    };
    PositionsComponent.prototype.ngOnDestroy = function () {
        if (this.getPositionsSub) {
            this.getPositionsSub.unsubscribe();
        }
    };
    PositionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-positions',
            template: __webpack_require__("./src/app/positions/positions.component.html"),
            styles: [__webpack_require__("./src/app/positions/positions.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_position_service__["a" /* PositionService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], PositionsComponent);
    return PositionsComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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