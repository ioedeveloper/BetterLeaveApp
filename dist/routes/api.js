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
var staffApiController = __importStar(require("../controllers/staffApiController"));
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
        this.router.post("/signup", staffApiController.signup);
    };
    return UserApi;
}());
var leaveApiRoutes = new LeaveApi();
exports.leaveApiRoutes = leaveApiRoutes;
var userApiRoutes = new UserApi();
exports.userApiRoutes = userApiRoutes;
//# sourceMappingURL=api.js.map