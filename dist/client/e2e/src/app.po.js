"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var AppPage = /** @class */ (function () {
    function AppPage() {
    }
    AppPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    AppPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return AppPage;
}());
exports.AppPage = AppPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnBvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY2xpZW50L2UyZS9zcmMvYXBwLnBvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEseUNBQWtEO0FBRWxEO0lBQUE7SUFRQSxDQUFDO0lBUEMsNEJBQVUsR0FBVjtRQUNFLE9BQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGtDQUFnQixHQUFoQjtRQUNFLE9BQU8sb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLDBCQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYnJvd3NlciwgYnksIGVsZW1lbnQgfSBmcm9tICdwcm90cmFjdG9yJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBQYWdlIHtcclxuICBuYXZpZ2F0ZVRvKCkge1xyXG4gICAgcmV0dXJuIGJyb3dzZXIuZ2V0KCcvJyk7XHJcbiAgfVxyXG5cclxuICBnZXRQYXJhZ3JhcGhUZXh0KCkge1xyXG4gICAgcmV0dXJuIGVsZW1lbnQoYnkuY3NzKCdhcHAtcm9vdCBoMScpKS5nZXRUZXh0KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==