import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵadvance, ɵɵtextInterpolate1, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

var MyLibOneService = /** @class */ (function () {
    function MyLibOneService() {
    }
    MyLibOneService.ɵfac = function MyLibOneService_Factory(t) { return new (t || MyLibOneService)(); };
    MyLibOneService.ɵprov = ɵɵdefineInjectable({ token: MyLibOneService, factory: MyLibOneService.ɵfac, providedIn: 'root' });
    return MyLibOneService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyLibOneService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

var MyLibOneComponent = /** @class */ (function () {
    function MyLibOneComponent() {
        this.myVariable = 'Hello this is a library';
    }
    MyLibOneComponent.prototype.ngOnInit = function () {
    };
    MyLibOneComponent.ɵfac = function MyLibOneComponent_Factory(t) { return new (t || MyLibOneComponent)(); };
    MyLibOneComponent.ɵcmp = ɵɵdefineComponent({ type: MyLibOneComponent, selectors: [["lib-my-lib-one"]], decls: 2, vars: 1, template: function MyLibOneComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1);
            ɵɵelementEnd();
        } if (rf & 2) {
            ɵɵadvance(1);
            ɵɵtextInterpolate1(" my-lib-one works! ", ctx.myVariable, " ");
        } }, encapsulation: 2 });
    return MyLibOneComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyLibOneComponent, [{
        type: Component,
        args: [{
                selector: 'lib-my-lib-one',
                template: "\n    <p>\n      my-lib-one works! \n\n      {{myVariable}}\n    </p>\n  ",
                styles: []
            }]
    }], function () { return []; }, null); })();

var MyLibOneModule = /** @class */ (function () {
    function MyLibOneModule() {
    }
    MyLibOneModule.ɵmod = ɵɵdefineNgModule({ type: MyLibOneModule });
    MyLibOneModule.ɵinj = ɵɵdefineInjector({ factory: function MyLibOneModule_Factory(t) { return new (t || MyLibOneModule)(); }, imports: [[]] });
    return MyLibOneModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MyLibOneModule, { declarations: [MyLibOneComponent], exports: [MyLibOneComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyLibOneModule, [{
        type: NgModule,
        args: [{
                declarations: [MyLibOneComponent],
                imports: [],
                exports: [MyLibOneComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of my-lib-one
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibOneComponent, MyLibOneModule, MyLibOneService };
//# sourceMappingURL=my-lib-one.js.map
