(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-configure/fesm5/ngx-configure.js":
/*!***************************************************!*\
  !*** ./dist/ngx-configure/fesm5/ngx-configure.js ***!
  \***************************************************/
/*! exports provided: NgxConfigureService, NgxConfigureOptions, init, NgxConfigureModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxConfigureService", function() { return NgxConfigureService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxConfigureOptions", function() { return NgxConfigureOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "init", function() { return init; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxConfigureModule", function() { return NgxConfigureModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var NgxConfigureOptions = /** @class */ (function () {
    function NgxConfigureOptions() {
        this.ConfigurationURL = 'assets/config.json';
        this.AppVersion = '';
        this.BustCache = false;
    }
    NgxConfigureOptions.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"] },
    ];
    return NgxConfigureOptions;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var NgxConfigureService = /** @class */ (function () {
    function NgxConfigureService(configOptions, handler) {
        this.configOptions = configOptions;
        this.handler = handler;
        // See: https://stackoverflow.com/a/49013534/13278 (bypass all interceptors)
        this.http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](handler);
    }
    /**
     * @return {?}
     */
    NgxConfigureService.prototype.load = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var promise = new Promise(function (resolve, reject) {
            _this.http.get(_this.buildUrl()).subscribe(function (data) {
                _this.config = data;
                resolve();
            }, function (error) {
                reject(error);
            });
        });
        return promise;
    };
    /**
     * @return {?}
     */
    NgxConfigureService.prototype.buildUrl = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var url = this.configOptions.ConfigurationURL;
        if (this.configOptions.AppVersion !== '') {
            url += '?v=' + this.configOptions.AppVersion;
        }
        if (this.configOptions.BustCache) {
            if (this.configOptions.AppVersion !== '') {
                url += '&';
            }
            else {
                url += '?';
            }
            url += 't=' + this.makeId();
        }
        return url;
    };
    /**
     * @return {?}
     */
    NgxConfigureService.prototype.makeId = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var text = '';
        /** @type {?} */
        var list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 5; i++) {
            text += list.charAt(Math.floor(Math.random() * list.length));
        }
        return text;
    };
    /**
     * @param {?} res
     * @return {?}
     */
    NgxConfigureService.prototype.extractData = /**
     * @param {?} res
     * @return {?}
     */
    function (res) {
        /** @type {?} */
        var body = res.json();
        return body || {};
    };
    NgxConfigureService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    NgxConfigureService.ctorParameters = function () { return [
        { type: NgxConfigureOptions },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"] }
    ]; };
    /** @nocollapse */ NgxConfigureService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function NgxConfigureService_Factory() { return new NgxConfigureService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(NgxConfigureOptions), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["inject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"])); }, token: NgxConfigureService, providedIn: "root" });
    return NgxConfigureService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
var NgxConfigureModule = /** @class */ (function () {
    function NgxConfigureModule() {
    }
    /**
     * @return {?}
     */
    NgxConfigureModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxConfigureModule,
            providers: [NgxConfigureService, NgxConfigureOptions]
        };
    };
    NgxConfigureModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    imports: [
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
                    ],
                    declarations: [],
                    exports: [],
                    providers: [
                        NgxConfigureService,
                        NgxConfigureOptions,
                        {
                            provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"],
                            useFactory: init,
                            multi: true,
                            deps: [NgxConfigureService, _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"]]
                        }
                    ]
                },] },
    ];
    return NgxConfigureModule;
}());
/**
 * @param {?} configService
 * @return {?}
 */
function init(configService) {
    return function () { return configService.load(); };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNvbmZpZ3VyZS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vbmd4LWNvbmZpZ3VyZS9saWIvbmd4LWNvbmZpZ3VyZS1vcHRpb25zLnRzIiwibmc6Ly9uZ3gtY29uZmlndXJlL2xpYi9uZ3gtY29uZmlndXJlLnNlcnZpY2UudHMiLCJuZzovL25neC1jb25maWd1cmUvbGliL25neC1jb25maWd1cmUubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5neENvbmZpZ3VyZU9wdGlvbnMge1xuICBDb25maWd1cmF0aW9uVVJMID0gJ2Fzc2V0cy9jb25maWcuanNvbic7XG4gIEFwcFZlcnNpb24gPSAgJyc7XG4gIEJ1c3RDYWNoZSAgPSBmYWxzZTtcbn1cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5neENvbmZpZ3VyZU9wdGlvbnMgfSBmcm9tICcuL25neC1jb25maWd1cmUtb3B0aW9ucyc7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwQmFja2VuZCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgTmd4Q29uZmlndXJlU2VydmljZSB7XG4gIHB1YmxpYyBjb25maWc6IGFueTtcblxuICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQ7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGNvbmZpZ09wdGlvbnM6IE5neENvbmZpZ3VyZU9wdGlvbnMsIHByaXZhdGUgaGFuZGxlcjogSHR0cEJhY2tlbmQpIHtcbiAgICAvLyBTZWU6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS80OTAxMzUzNC8xMzI3OCAoYnlwYXNzIGFsbCBpbnRlcmNlcHRvcnMpXG4gICAgdGhpcy5odHRwID0gbmV3IEh0dHBDbGllbnQoaGFuZGxlcik7XG4gIH1cblxuICBsb2FkKCk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMuaHR0cC5nZXQodGhpcy5idWlsZFVybCgpKS5zdWJzY3JpYmUoZGF0YSA9PiB7XG4gICAgICAgIHRoaXMuY29uZmlnID0gZGF0YTtcbiAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgfSwgZXJyb3IgPT4ge1xuICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHByb21pc2U7XG4gIH1cblxuICBwcml2YXRlIGJ1aWxkVXJsKCk6IHN0cmluZyB7XG4gICAgbGV0IHVybCA9IHRoaXMuY29uZmlnT3B0aW9ucy5Db25maWd1cmF0aW9uVVJMO1xuICAgIGlmICh0aGlzLmNvbmZpZ09wdGlvbnMuQXBwVmVyc2lvbiAhPT0gJycpIHtcbiAgICAgIHVybCArPSAnP3Y9JyArIHRoaXMuY29uZmlnT3B0aW9ucy5BcHBWZXJzaW9uO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb25maWdPcHRpb25zLkJ1c3RDYWNoZSkge1xuICAgICAgaWYgKHRoaXMuY29uZmlnT3B0aW9ucy5BcHBWZXJzaW9uICE9PSAnJykge1xuICAgICAgICB1cmwgKz0gJyYnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdXJsICs9ICc/JztcbiAgICAgIH1cbiAgICAgIHVybCArPSAndD0nICsgdGhpcy5tYWtlSWQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIHByaXZhdGUgbWFrZUlkKCkge1xuICAgIGxldCB0ZXh0ID0gJyc7XG4gICAgY29uc3QgbGlzdCA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIHRleHQgKz0gbGlzdC5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGlzdC5sZW5ndGgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBwcml2YXRlIGV4dHJhY3REYXRhKHJlczogUmVzcG9uc2UpIHtcbiAgICBjb25zdCBib2R5ID0gcmVzLmpzb24oKTtcbiAgICByZXR1cm4gYm9keSB8fCB7IH07XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBBUFBfSU5JVElBTElaRVIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEh0dHBCYWNrZW5kLCBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTmd4Q29uZmlndXJlU2VydmljZSB9IGZyb20gJy4vbmd4LWNvbmZpZ3VyZS5zZXJ2aWNlJztcbmltcG9ydCB7IE5neENvbmZpZ3VyZU9wdGlvbnMgfSBmcm9tICcuL25neC1jb25maWd1cmUtb3B0aW9ucyc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW10sXG4gIGV4cG9ydHM6IFtdLFxuICBwcm92aWRlcnM6IFtcbiAgICBOZ3hDb25maWd1cmVTZXJ2aWNlLFxuICAgIE5neENvbmZpZ3VyZU9wdGlvbnMsXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgICAgdXNlRmFjdG9yeTogaW5pdCxcbiAgICAgIG11bHRpOiB0cnVlLFxuICAgICAgZGVwczogW05neENvbmZpZ3VyZVNlcnZpY2UsIEh0dHBCYWNrZW5kXVxuICAgIH1cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDb25maWd1cmVNb2R1bGUge1xuICBwdWJsaWMgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBOZ3hDb25maWd1cmVNb2R1bGUsXG4gICAgICBwcm92aWRlcnM6IFtOZ3hDb25maWd1cmVTZXJ2aWNlLCBOZ3hDb25maWd1cmVPcHRpb25zXVxuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXQoIGNvbmZpZ1NlcnZpY2U6IE5neENvbmZpZ3VyZVNlcnZpY2UpIHtcbiAgcmV0dXJuICgpID0+IGNvbmZpZ1NlcnZpY2UubG9hZCgpO1xufVxuXG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0lBRUE7UUFFRSxxQkFBZ0IsR0FBRyxvQkFBb0IsQ0FBQztRQUN4QyxlQUFVLEdBQUksRUFBRSxDQUFDO1FBQ2pCLGNBQVMsR0FBSSxLQUFLLENBQUM7S0FDcEI7O2dCQUxBLFVBQVU7O0lBS1gsMEJBQUM7Q0FBQTs7Ozs7O0FDUEQ7SUFZRSw2QkFBbUIsYUFBa0MsRUFBVSxPQUFvQjtRQUFoRSxrQkFBYSxHQUFiLGFBQWEsQ0FBcUI7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFhOztRQUVqRixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0tBQ3JDOzs7O0lBRUQsa0NBQUk7OztJQUFKO1FBQUEsaUJBVUM7O1lBVE8sT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDMUMsS0FBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDM0MsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQ25CLE9BQU8sRUFBRSxDQUFDO2FBQ1gsRUFBRSxVQUFBLEtBQUs7Z0JBQ04sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2YsQ0FBQyxDQUFDO1NBQ0osQ0FBQztRQUNGLE9BQU8sT0FBTyxDQUFDO0tBQ2hCOzs7O0lBRU8sc0NBQVE7OztJQUFoQjs7WUFDTSxHQUFHLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0I7UUFDN0MsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUU7WUFDeEMsR0FBRyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztTQUM5QztRQUNELElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3hDLEdBQUcsSUFBSSxHQUFHLENBQUM7YUFDWjtpQkFBTTtnQkFDTCxHQUFHLElBQUksR0FBRyxDQUFDO2FBQ1o7WUFDRCxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztTQUM3QjtRQUNELE9BQU8sR0FBRyxDQUFDO0tBQ1o7Ozs7SUFFTyxvQ0FBTTs7O0lBQWQ7O1lBQ00sSUFBSSxHQUFHLEVBQUU7O1lBQ1AsSUFBSSxHQUFHLGdFQUFnRTtRQUM3RSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzFCLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1NBQzlEO1FBQ0QsT0FBTyxJQUFJLENBQUM7S0FDYjs7Ozs7SUFFTyx5Q0FBVzs7OztJQUFuQixVQUFvQixHQUFhOztZQUN6QixJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksRUFBRTtRQUN2QixPQUFPLElBQUksSUFBSSxFQUFHLENBQUM7S0FDcEI7O2dCQXJERixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQUxRLG1CQUFtQjtnQkFDUCxXQUFXOzs7OEJBRmhDO0NBMERDOzs7Ozs7QUMxREQ7SUFLQTtLQXdCQzs7OztJQU5lLDBCQUFPOzs7SUFBckI7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLGtCQUFrQjtZQUM1QixTQUFTLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxtQkFBbUIsQ0FBQztTQUN0RCxDQUFDO0tBQ0g7O2dCQXZCRixRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGdCQUFnQjtxQkFDakI7b0JBQ0QsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLFNBQVMsRUFBRTt3QkFDVCxtQkFBbUI7d0JBQ25CLG1CQUFtQjt3QkFDbkI7NEJBQ0UsT0FBTyxFQUFFLGVBQWU7NEJBQ3hCLFVBQVUsRUFBRSxJQUFJOzRCQUNoQixLQUFLLEVBQUUsSUFBSTs0QkFDWCxJQUFJLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxXQUFXLENBQUM7eUJBQ3pDO3FCQUNGO2lCQUNGOztJQVFELHlCQUFDO0NBQUEsSUFBQTs7Ozs7QUFFRCxTQUFnQixJQUFJLENBQUUsYUFBa0M7SUFDdEQsT0FBTyxjQUFNLE9BQUEsYUFBYSxDQUFDLElBQUksRUFBRSxHQUFBLENBQUM7Q0FDbkM7Ozs7Ozs7Ozs7Ozs7OyJ9

/***/ }),

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
/* harmony import */ var ngx_configure__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-configure */ "./dist/ngx-configure/fesm5/ngx-configure.js");
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
    function AppComponent(configService) {
        this.title = 'Raspberry_youtube_player';
        this.reframed = false;
        this.vidIndex = 0;
        this.config = configService.config;
    }
    AppComponent.prototype.init = function () {
        var tag = document.createElement('script');
        tag.src = 'https://www.youtube.com/iframe_api';
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.init();
        this.videos = this.config.videos;
        window['onYouTubeIframeAPIReady'] = function (e) {
            _this.YT = window['YT'];
            _this.reframed = false;
            _this.player = new window['YT'].Player('player', {
                videoId: _this.video,
                // height: '1080',
                //width: '1920',
                height: _this.config.screen_height,
                width: _this.config.screen_width,
                playerVars: { 'autoplay': 1, 'controls': 0, 'showinfo': 0, 'enablejsapi': 1, 'autohide': 1, 'cc_load_policy': 1, 'fs': 0, 'rel': 0, 'modestbranding': 1 },
                events: {
                    'onStateChange': _this.onPlayerStateChange.bind(_this),
                    'onError': _this.onPlayerError.bind(_this),
                    'onReady': _this.onPlayerReady.bind(_this),
                }
            });
        };
    };
    AppComponent.prototype.onPlayerReady = function (event) {
        console.log("onplayerready. index=" + this.vidIndex);
        //need this to play first video and spark the rest
        event.target.cueVideoById({
            videoId: this.videos[this.vidIndex].vid,
            startSeconds: this.videos[this.vidIndex].startSeconds,
            endSeconds: this.videos[this.vidIndex].endSeconds
        });
        event.target.playVideo();
    };
    AppComponent.prototype.onPlayerStateChange = function (event) {
        switch (event.data) {
            case window['YT'].PlayerState.PLAYING:
                console.log('playing video ' + this.videos[this.vidIndex].vid + ' from ' + this.videos[this.vidIndex].startSeconds + ' to ' + this.videos[this.vidIndex].endSeconds);
                break;
            case window['YT'].PlayerState.PAUSED:
                console.log('paused');
                break;
            case window['YT'].PlayerState.ENDED:
                if (this.player.getVideoLoadedFraction() > 0) {
                    if (this.vidIndex < this.videos.length - 1) {
                        this.vidIndex++;
                        event.target.loadVideoById({
                            videoId: this.videos[this.vidIndex].vid,
                            startSeconds: this.videos[this.vidIndex].startSeconds,
                            endSeconds: this.videos[this.vidIndex].endSeconds
                        });
                    }
                    else if (this.vidIndex >= this.videos.length - 1) {
                        //do this since loop parameter doesn't work for custom lists
                        this.vidIndex = 0;
                        event.target.loadVideoById({
                            videoId: this.videos[this.vidIndex].vid,
                            startSeconds: this.videos[this.vidIndex].startSeconds,
                            endSeconds: this.videos[this.vidIndex].endSeconds,
                            suggestedQuality: "default"
                        });
                    }
                }
                break;
        }
        ;
    };
    ;
    AppComponent.prototype.onPlayerError = function (event) {
        switch (event.data) {
            case 2:
                console.log('' + this.video);
                break;
            case 100:
                break;
            case 101 || 150:
                break;
        }
        ;
    };
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "<div class=\"embed-responsive embed-responsive-16by9\" id=\"player\">\n  </div>",
            //styleUrls: ['./app.component.css'],
            styles: [".max-width-1024 { max-width: 1024px; margin: 0 auto; }"],
        }),
        __metadata("design:paramtypes", [ngx_configure__WEBPACK_IMPORTED_MODULE_1__["NgxConfigureService"]])
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
/* harmony import */ var ngx_configure__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-configure */ "./dist/ngx-configure/fesm5/ngx-configure.js");
/* harmony import */ var _app_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.options */ "./src/app/app.options.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_configure__WEBPACK_IMPORTED_MODULE_2__["NgxConfigureModule"].forRoot()
            ],
            providers: [
                { provide: ngx_configure__WEBPACK_IMPORTED_MODULE_2__["NgxConfigureOptions"], useClass: _app_options__WEBPACK_IMPORTED_MODULE_3__["AppOptions"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.options.ts":
/*!********************************!*\
  !*** ./src/app/app.options.ts ***!
  \********************************/
/*! exports provided: AppOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppOptions", function() { return AppOptions; });
/* harmony import */ var ngx_configure__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-configure */ "./dist/ngx-configure/fesm5/ngx-configure.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var AppOptions = /** @class */ (function (_super) {
    __extends(AppOptions, _super);
    function AppOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ConfigurationURL = 'assets/urls.json';
        _this.AppVersion = '0.0.0';
        _this.BustCache = true;
        return _this;
    }
    return AppOptions;
}(ngx_configure__WEBPACK_IMPORTED_MODULE_0__["NgxConfigureOptions"]));



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

module.exports = __webpack_require__(/*! C:\karl\Personal\angular\raspberry_youtube_player\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map