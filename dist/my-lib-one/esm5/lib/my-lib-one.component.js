import { Component } from '@angular/core';
import * as i0 from "@angular/core";
var MyLibOneComponent = /** @class */ (function () {
    function MyLibOneComponent() {
        this.myVariable = 'Hello this is a library';
    }
    MyLibOneComponent.prototype.ngOnInit = function () {
    };
    MyLibOneComponent.ɵfac = function MyLibOneComponent_Factory(t) { return new (t || MyLibOneComponent)(); };
    MyLibOneComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MyLibOneComponent, selectors: [["lib-my-lib-one"]], decls: 2, vars: 1, template: function MyLibOneComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "p");
            i0.ɵɵtext(1);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" my-lib-one works! ", ctx.myVariable, " ");
        } }, encapsulation: 2 });
    return MyLibOneComponent;
}());
export { MyLibOneComponent };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MyLibOneComponent, [{
        type: Component,
        args: [{
                selector: 'lib-my-lib-one',
                template: "\n    <p>\n      my-lib-one works! \n\n      {{myVariable}}\n    </p>\n  ",
                styles: []
            }]
    }], function () { return []; }, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGliLW9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9teS1saWItb25lLyIsInNvdXJjZXMiOlsibGliL215LWxpYi1vbmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7O0FBRWxEO0lBZ0JFO1FBRk8sZUFBVSxHQUFXLHlCQUF5QixDQUFDO0lBRXRDLENBQUM7SUFFakIsb0NBQVEsR0FBUjtJQUNBLENBQUM7c0ZBUFUsaUJBQWlCOzBEQUFqQixpQkFBaUI7WUFUMUIseUJBQ0U7WUFBQSxZQUdGO1lBQUEsaUJBQUk7O1lBSEYsZUFHRjtZQUhFLGlFQUdGOzs0QkFUSjtDQXVCQyxBQXJCRCxJQXFCQztTQVRZLGlCQUFpQjtrREFBakIsaUJBQWlCO2NBWjdCLFNBQVM7ZUFBQztnQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO2dCQUMxQixRQUFRLEVBQUUsMkVBTVQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQ1A7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1teS1saWItb25lJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIG15LWxpYi1vbmUgd29ya3MhIFxuXG4gICAgICB7e215VmFyaWFibGV9fVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgTXlMaWJPbmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHB1YmxpYyBteVZhcmlhYmxlOiBTdHJpbmcgPSAnSGVsbG8gdGhpcyBpcyBhIGxpYnJhcnknO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gIH1cblxufVxuIl19