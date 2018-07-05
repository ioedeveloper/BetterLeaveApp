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
var staffViewModel_1 = require("../view_models/staffViewModel");
/**
 * SignUp Staff
 * @param req
 * @param res
 */
exports.staffSignUp = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var newStaff;
    return __generator(this, function (_a) {
        newStaff = new staffViewModel_1.StaffViewModel(req.body.fname, req.body.lname, req.body.mname, req.body.role, req.body.staffId);
        return [2 /*return*/];
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmZBcGlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvc3RhZmZBcGlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlCQWNBOztBQVpBLGdFQUErRDtBQUcvRDs7OztHQUlHO0FBQ1MsUUFBQSxXQUFXLEdBQU8sVUFBTyxHQUFZLEVBQUUsR0FBYTs7O1FBQ3pELFFBQVEsR0FBa0IsSUFBSSwrQkFBYyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7OztLQUVwSSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0aW5nIGxpYnJhcmllcyBhbmQgZGVwZW5kZW5jaWVzXHJcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBTdGFmZkRhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL3N0YWZmRGF0YVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgU3RhZmZWaWV3TW9kZWwgfSBmcm9tIFwiLi4vdmlld19tb2RlbHMvc3RhZmZWaWV3TW9kZWxcIjtcclxuaW1wb3J0IHsgU3RhZmYgfSBmcm9tIFwiLi4vbW9kZWxzL3N0YWZmXCI7XHJcblxyXG4vKipcclxuICogU2lnblVwIFN0YWZmXHJcbiAqIEBwYXJhbSByZXFcclxuICogQHBhcmFtIHJlc1xyXG4gKi9cclxuIGV4cG9ydCBsZXQgc3RhZmZTaWduVXA6YW55ID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICBsZXQgbmV3U3RhZmY6U3RhZmZWaWV3TW9kZWwgPSBuZXcgU3RhZmZWaWV3TW9kZWwocmVxLmJvZHkuZm5hbWUsIHJlcS5ib2R5LmxuYW1lLCByZXEuYm9keS5tbmFtZSwgcmVxLmJvZHkucm9sZSwgcmVxLmJvZHkuc3RhZmZJZCk7XHJcblxyXG59O1xyXG4iXX0=