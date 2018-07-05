"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries and dependencies
var express_1 = require("express");
var leaveApiController = __importStar(require("../controllers/leaveApiController"));
/**
 * Handles routing of leave api request
 */
var LeaveApi = /** @class */ (function () {
    function LeaveApi() {
        this.router = express_1.Router();
        this.init();
    }
    LeaveApi.prototype.init = function () {
        this.router.get("/allLeaves", leaveApiController.getAllLeaves);
    };
    return LeaveApi;
}());
/**
 * Handles routing of staff api request
 */
var UserApi = /** @class */ (function () {
    function UserApi() {
        this.router = express_1.Router();
        this.init();
    }
    UserApi.prototype.init = function () {
        this.router.post("/staffSignUp");
    };
    return UserApi;
}());
var leaveApiRoutes = new LeaveApi();
exports.leaveApiRoutes = leaveApiRoutes;
var userApiRoutes = new UserApi();
exports.userApiRoutes = userApiRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcm91dGVzL2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFDdkMsbUNBQWtFO0FBQ2xFLG9GQUF3RTtBQUV4RTs7R0FFRztBQUNIO0lBRUU7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDZCxDQUFDO0lBQ08sdUJBQUksR0FBWjtRQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUMsQUFURCxJQVNDO0FBRUQ7O0dBRUc7QUFDSDtJQUVFO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBTSxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUNPLHNCQUFJLEdBQVo7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUcsQ0FBQztJQUNyQyxDQUFDO0lBQ0gsY0FBQztBQUFELENBQUMsQUFURCxJQVNDO0FBRUQsSUFBTSxjQUFjLEdBQVksSUFBSSxRQUFRLEVBQUUsQ0FBQztBQUV2Qyx3Q0FBYztBQUR0QixJQUFNLGFBQWEsR0FBVyxJQUFJLE9BQU8sRUFBRSxDQUFDO0FBQ3BCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0aW5nIGxpYnJhcmllcyBhbmQgZGVwZW5kZW5jaWVzXHJcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UsIFJvdXRlciB9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCAqIGFzIGxlYXZlQXBpQ29udHJvbGxlciBmcm9tIFwiLi4vY29udHJvbGxlcnMvbGVhdmVBcGlDb250cm9sbGVyXCI7XHJcblxyXG4vKipcclxuICogSGFuZGxlcyByb3V0aW5nIG9mIGxlYXZlIGFwaSByZXF1ZXN0XHJcbiAqL1xyXG5jbGFzcyBMZWF2ZUFwaSB7XHJcbiAgcHVibGljIHJvdXRlcjogUm91dGVyO1xyXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucm91dGVyID0gUm91dGVyKCk7XHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9XHJcbiAgcHJpdmF0ZSBpbml0KCk6dm9pZCB7XHJcbiAgICB0aGlzLnJvdXRlci5nZXQoXCIvYWxsTGVhdmVzXCIsIGxlYXZlQXBpQ29udHJvbGxlci5nZXRBbGxMZWF2ZXMpO1xyXG4gIH1cclxufVxyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgcm91dGluZyBvZiBzdGFmZiBhcGkgcmVxdWVzdFxyXG4gKi9cclxuY2xhc3MgVXNlckFwaSB7XHJcbiAgcHVibGljIHJvdXRlcjpSb3V0ZXI7XHJcbiAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5yb3V0ZXIgPSBSb3V0ZXIoKTtcclxuICAgIHRoaXMuaW5pdCgpO1xyXG4gIH1cclxuICBwcml2YXRlIGluaXQoKTp2b2lkIHtcclxuICAgIHRoaXMucm91dGVyLnBvc3QoXCIvc3RhZmZTaWduVXBcIiwgKTtcclxuICB9XHJcbn1cclxuXHJcbmNvbnN0IGxlYXZlQXBpUm91dGVzOkxlYXZlQXBpID0gbmV3IExlYXZlQXBpKCk7XHJcbmNvbnN0IHVzZXJBcGlSb3V0ZXM6VXNlckFwaSA9IG5ldyBVc2VyQXBpKCk7XHJcbmV4cG9ydCB7bGVhdmVBcGlSb3V0ZXMsIHVzZXJBcGlSb3V0ZXN9O1xyXG4iXX0=