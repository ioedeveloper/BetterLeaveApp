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
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries and dependencies
var staff_1 = require("../models/staff");
var typeorm_1 = require("typeorm");
/**
 * Handles a staff data access operations
 */
var StaffDataService = /** @class */ (function () {
    function StaffDataService() {
        this._db = typeorm_1.getConnection().getRepository(staff_1.Staff);
    }
    /**
     * saveNewStaff
     */
    StaffDataService.prototype.saveNewStaff = function (staff) {
        return __awaiter(this, void 0, void 0, function () {
            var newstaff;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._db.create(staff)];
                    case 1:
                        newstaff = _a.sent();
                        return [2 /*return*/, newstaff];
                }
            });
        });
    };
    return StaffDataService;
}());
exports.StaffDataService = StaffDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmZEYXRhU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZpY2VzL3N0YWZmRGF0YVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2Qyx5Q0FBc0M7QUFDdEMsbUNBQStFO0FBRy9FOztHQUVHO0FBQ0g7SUFHSTtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsdUJBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFLLENBQUMsQ0FBQztJQUVwRCxDQUFDO0lBRUQ7O09BRUc7SUFDVSx1Q0FBWSxHQUF6QixVQUEwQixLQUFXOzs7Ozs0QkFFVCxxQkFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsRUFBQTs7d0JBQTlDLFFBQVEsR0FBVSxTQUE0Qjt3QkFFcEQsc0JBQU8sUUFBUSxFQUFDOzs7O0tBQ25CO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBakJELElBaUJDO0FBakJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBsaWJyYXJpZXMgYW5kIGRlcGVuZGVuY2llc1xyXG5pbXBvcnQge1N0YWZmfSBmcm9tIFwiLi4vbW9kZWxzL3N0YWZmXCI7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnksIGdldFJlcG9zaXRvcnksIENvbm5lY3Rpb24sIGdldENvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgeyBSb2xlIH0gZnJvbSBcIi4uL21vZGVscy9Sb2xlXCI7XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBhIHN0YWZmIGRhdGEgYWNjZXNzIG9wZXJhdGlvbnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdGFmZkRhdGFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2RiOiBSZXBvc2l0b3J5PFN0YWZmPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9kYiA9IGdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KFN0YWZmKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzYXZlTmV3U3RhZmZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIHNhdmVOZXdTdGFmZihzdGFmZjpTdGFmZik6IFByb21pc2U8U3RhZmY+IHtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3c3RhZmY6IFN0YWZmID0gYXdhaXQgdGhpcy5fZGIuY3JlYXRlKHN0YWZmKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ld3N0YWZmO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==