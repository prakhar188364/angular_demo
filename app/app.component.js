System.register(['angular2/core', './country.service_dynamic'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, country_service_dynamic_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (country_service_dynamic_1_1) {
                country_service_dynamic_1 = country_service_dynamic_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_countryService) {
                    this._countryService = _countryService;
                    this._countryService = _countryService;
                }
                AppComponent.prototype.getCountriesByRegion = function () {
                    var _this = this;
                    this.error = "";
                    this.countries = [];
                    this._countryService.getCountriesByRegion1(this.region)
                        .subscribe(function (data) { return _this.countries = data; }, function (error) { return _this.error = "Region " + _this.region + " is invalid."; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-component',
                        templateUrl: 'app/app.component.tpl.html',
                        providers: [country_service_dynamic_1.CountryService]
                    }), 
                    __metadata('design:paramtypes', [country_service_dynamic_1.CountryService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map