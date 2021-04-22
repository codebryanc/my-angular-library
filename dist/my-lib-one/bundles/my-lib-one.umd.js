(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-lib-one', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['my-lib-one'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var MyLibOneService = /** @class */ (function () {
        function MyLibOneService() {
        }
        MyLibOneService.ɵfac = function MyLibOneService_Factory(t) { return new (t || MyLibOneService)(); };
        MyLibOneService.ɵprov = core.ɵɵdefineInjectable({ token: MyLibOneService, factory: MyLibOneService.ɵfac, providedIn: 'root' });
        return MyLibOneService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MyLibOneService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var MyLibOneComponent = /** @class */ (function () {
        function MyLibOneComponent() {
        }
        MyLibOneComponent.prototype.ngOnInit = function () {
        };
        MyLibOneComponent.ɵfac = function MyLibOneComponent_Factory(t) { return new (t || MyLibOneComponent)(); };
        MyLibOneComponent.ɵcmp = core.ɵɵdefineComponent({ type: MyLibOneComponent, selectors: [["lib-my-lib-one"]], decls: 2, vars: 0, template: function MyLibOneComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " my-lib-one works! ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return MyLibOneComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MyLibOneComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-my-lib-one',
                    template: "\n    <p>\n      my-lib-one works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var MyLibOneModule = /** @class */ (function () {
        function MyLibOneModule() {
        }
        MyLibOneModule.ɵmod = core.ɵɵdefineNgModule({ type: MyLibOneModule });
        MyLibOneModule.ɵinj = core.ɵɵdefineInjector({ factory: function MyLibOneModule_Factory(t) { return new (t || MyLibOneModule)(); }, imports: [[]] });
        return MyLibOneModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(MyLibOneModule, { declarations: [MyLibOneComponent], exports: [MyLibOneComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MyLibOneModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [MyLibOneComponent],
                    imports: [],
                    exports: [MyLibOneComponent]
                }]
        }], null, null); })();

    exports.MyLibOneComponent = MyLibOneComponent;
    exports.MyLibOneModule = MyLibOneModule;
    exports.MyLibOneService = MyLibOneService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-lib-one.umd.js.map
