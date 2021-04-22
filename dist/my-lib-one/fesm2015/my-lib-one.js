import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

class MyLibOneService {
    constructor() { }
}
MyLibOneService.ɵfac = function MyLibOneService_Factory(t) { return new (t || MyLibOneService)(); };
MyLibOneService.ɵprov = ɵɵdefineInjectable({ token: MyLibOneService, factory: MyLibOneService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyLibOneService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

class MyLibOneComponent {
    constructor() { }
    ngOnInit() {
    }
}
MyLibOneComponent.ɵfac = function MyLibOneComponent_Factory(t) { return new (t || MyLibOneComponent)(); };
MyLibOneComponent.ɵcmp = ɵɵdefineComponent({ type: MyLibOneComponent, selectors: [["lib-my-lib-one"]], decls: 2, vars: 0, template: function MyLibOneComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "p");
        ɵɵtext(1, " my-lib-one works! ");
        ɵɵelementEnd();
    } }, encapsulation: 2 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyLibOneComponent, [{
        type: Component,
        args: [{
                selector: 'lib-my-lib-one',
                template: `
    <p>
      my-lib-one works!
    </p>
  `,
                styles: []
            }]
    }], function () { return []; }, null); })();

class MyLibOneModule {
}
MyLibOneModule.ɵmod = ɵɵdefineNgModule({ type: MyLibOneModule });
MyLibOneModule.ɵinj = ɵɵdefineInjector({ factory: function MyLibOneModule_Factory(t) { return new (t || MyLibOneModule)(); }, imports: [[]] });
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
