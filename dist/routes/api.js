"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apiController = __importStar(require("../controllers/apiController"));
var Api = /** @class */ (function () {
    function Api() {
        this.router = express_1.Router();
        this.init();
    }
    Api.prototype.init = function () {
        this.router.get("/", apiController.getApi);
    };
    return Api;
}());
var apiRoutes = new Api();
exports.apiRoutes = apiRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxtQ0FBa0U7QUFFbEUsMEVBQThEO0FBRTlEO0lBRUU7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ08sa0JBQUksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUNILFVBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQUVELElBQU0sU0FBUyxHQUFPLElBQUksR0FBRyxFQUFFLENBQUM7QUFDeEIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlcXVlc3QsIFJlc3BvbnNlLCBSb3V0ZXIgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5cclxuaW1wb3J0ICogYXMgYXBpQ29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlcnMvYXBpQ29udHJvbGxlclwiO1xyXG5cclxuY2xhc3MgQXBpIHtcclxuICBwdWJsaWMgcm91dGVyOiBSb3V0ZXI7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIgPSBSb3V0ZXIoKTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuICBwcml2YXRlIGluaXQoKTp2b2lkIHtcclxuICAgIHRoaXMucm91dGVyLmdldChcIi9cIiwgYXBpQ29udHJvbGxlci5nZXRBcGkpO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgYXBpUm91dGVzOkFwaSA9IG5ldyBBcGkoKTtcclxuZXhwb3J0IHthcGlSb3V0ZXN9O1xyXG4iXX0=