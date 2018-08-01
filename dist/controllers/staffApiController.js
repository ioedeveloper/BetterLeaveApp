"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var staffService_1 = require("../services/staffService");
var staffViewModel_1 = require("../view_models/staffViewModel");
/**
 * SignUp Staff
 * @param req
 * @param res
 */
exports.staffSignUp = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var newStaff, staffService;
    return __generator(this, function (_a) {
        console.log("New User");
        newStaff = new staffViewModel_1.StaffViewModel(req.body.fname, req.body.lname, req.body.mname, req.body.role, req.body.staffId);
        staffService = new staffService_1.StaffService();
        staffService.addNewStaff(newStaff);
        return [2 /*return*/];
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmZBcGlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvc3RhZmZBcGlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlCQWVBOztBQWRBLHlEQUF3RDtBQUN4RCxnRUFBK0Q7QUFFL0Q7Ozs7R0FJRztBQUNTLFFBQUEsV0FBVyxHQUFPLFVBQU8sR0FBWSxFQUFFLEdBQWE7OztRQUM3RCxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BCLFFBQVEsR0FBa0IsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUgsWUFBWSxHQUFnQixJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUNuRCxZQUFZLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDOzs7S0FDckMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBsaWJyYXJpZXMgYW5kIGRlcGVuZGVuY2llc1xyXG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IFN0YWZmU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlcy9zdGFmZlNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RhZmZWaWV3TW9kZWwgfSBmcm9tIFwiLi4vdmlld19tb2RlbHMvc3RhZmZWaWV3TW9kZWxcIjtcclxuXHJcbi8qKlxyXG4gKiBTaWduVXAgU3RhZmZcclxuICogQHBhcmFtIHJlcVxyXG4gKiBAcGFyYW0gcmVzXHJcbiAqL1xyXG4gZXhwb3J0IGxldCBzdGFmZlNpZ25VcDphbnkgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgIGNvbnNvbGUubG9nKFwiTmV3IFVzZXJcIik7XHJcbiAgIGxldCBuZXdTdGFmZjpTdGFmZlZpZXdNb2RlbCA9IG5ldyBTdGFmZlZpZXdNb2RlbChyZXEuYm9keS5mbmFtZSwgcmVxLmJvZHkubG5hbWUsIHJlcS5ib2R5Lm1uYW1lLCByZXEuYm9keS5yb2xlLCByZXEuYm9keS5zdGFmZklkKTtcclxuICAgbGV0IHN0YWZmU2VydmljZTpTdGFmZlNlcnZpY2UgPSBuZXcgU3RhZmZTZXJ2aWNlKCk7XHJcbiAgIHN0YWZmU2VydmljZS5hZGROZXdTdGFmZihuZXdTdGFmZik7XHJcbn07XHJcbiJdfQ==