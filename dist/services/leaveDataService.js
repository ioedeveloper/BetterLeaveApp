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
var leave_1 = require("../models/leave");
var typeorm_1 = require("typeorm");
/**
 * Handles a leave data access operations
 */
var LeaveDataService = /** @class */ (function () {
    function LeaveDataService() {
        this._db = typeorm_1.getConnection().getRepository(leave_1.Leave);
    }
    /**
     * applyForLeave
     */
    LeaveDataService.prototype.applyForLeave = function (leave) {
        if (leave !== null) {
            var entity = this._db.create(leave);
            this._db.save(entity);
        }
    };
    /**
     * getAllLeaves
     */
    LeaveDataService.prototype.getAllLeaves = function () {
        return __awaiter(this, void 0, void 0, function () {
            var leaves;
            return __generator(this, function (_a) {
                leaves = this._db.find({
                    select: ["leaveDays", "casualLeaveDays", "id", "staff", "leaveType", "endorsedBy", "approvedBy"],
                    relations: ["staff", "leaveType"],
                    skip: 5,
                    take: 15
                });
                return [2 /*return*/, leaves];
            });
        });
    };
    /**
     * get single leave by leave id
     * @param leave
     */
    LeaveDataService.prototype.getLeave = function (leave) {
        return __awaiter(this, void 0, void 0, function () {
            var fetchedLeave;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this._db.findOneById(leave.id)];
                    case 1:
                        fetchedLeave = _a.sent();
                        if (typeof fetchedLeave === "undefined") {
                            throw new Error("Record not found.");
                        }
                        else {
                            return [2 /*return*/, fetchedLeave];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * get all leaves of a staff
     * @param staff
     */
    LeaveDataService.prototype.getOneStaffLeaves = function (staff) {
        return __awaiter(this, void 0, void 0, function () {
            var leaves;
            return __generator(this, function (_a) {
                leaves = this._db.find({
                    select: ["leaveDays", "casualLeaveDays", "id", "staff", "leaveType", "endorsedBy", "approvedBy"],
                    relations: ["staff", "leaveType"],
                    where: {
                        staff: staff
                    }
                });
                return [2 /*return*/, leaves];
            });
        });
    };
    return LeaveDataService;
}());
exports.LeaveDataService = LeaveDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmVEYXRhU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZpY2VzL2xlYXZlRGF0YVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2Qyx5Q0FBd0M7QUFFeEMsbUNBQStFO0FBRS9FOztHQUVHO0FBQ0g7SUFHSTtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsdUJBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSx3Q0FBYSxHQUFwQixVQUFxQixLQUFZO1FBQzdCLElBQUcsS0FBSyxLQUFLLElBQUksRUFBRTtZQUNmLElBQUksTUFBTSxHQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ1UsdUNBQVksR0FBekI7Ozs7Z0JBQ1EsTUFBTSxHQUEwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDOUMsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFDLGlCQUFpQixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxZQUFZLENBQUM7b0JBQzFGLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7b0JBQ2pDLElBQUksRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxFQUFFO2lCQUNYLENBQUMsQ0FBQztnQkFFSCxzQkFBTyxNQUFNLEVBQUM7OztLQUNqQjtJQUNEOzs7T0FHRztJQUNVLG1DQUFRLEdBQXJCLFVBQXNCLEtBQVk7Ozs7OzRCQUNRLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBQTs7d0JBQXRFLFlBQVksR0FBc0IsU0FBb0M7d0JBQzFFLElBQUcsT0FBTyxZQUFZLEtBQUssV0FBVyxFQUFFOzRCQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7eUJBQ3hDOzZCQUFNOzRCQUNILHNCQUFPLFlBQVksRUFBQzt5QkFDdkI7Ozs7O0tBQ0o7SUFFRDs7O09BR0c7SUFDVSw0Q0FBaUIsR0FBOUIsVUFBK0IsS0FBWTs7OztnQkFDbkMsTUFBTSxHQUEwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDOUMsTUFBTSxFQUFDLENBQUMsV0FBVyxFQUFDLGlCQUFpQixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxZQUFZLENBQUM7b0JBQ3pGLFNBQVMsRUFBQyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7b0JBQ2hDLEtBQUssRUFBQzt3QkFDRixLQUFLLEVBQUMsS0FBSztxQkFDZDtpQkFDSixDQUFDLENBQUM7Z0JBQ0gsc0JBQU8sTUFBTSxFQUFDOzs7S0FDakI7SUFDTCx1QkFBQztBQUFELENBQUMsQUF6REQsSUF5REM7QUF6RFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0aW5nIGxpYnJhcmllcyBhbmQgZGVwZW5kZW5jaWVzXHJcbmltcG9ydCB7IExlYXZlIH0gZnJvbSBcIi4uL21vZGVscy9sZWF2ZVwiO1xyXG5pbXBvcnQge1N0YWZmfSBmcm9tIFwiLi4vbW9kZWxzL3N0YWZmXCI7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnksIGdldFJlcG9zaXRvcnksIENvbm5lY3Rpb24sIGdldENvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgYSBsZWF2ZSBkYXRhIGFjY2VzcyBvcGVyYXRpb25zXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgTGVhdmVEYXRhU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9kYjogUmVwb3NpdG9yeTxMZWF2ZT47XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZGIgPSBnZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShMZWF2ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhcHBseUZvckxlYXZlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhcHBseUZvckxlYXZlKGxlYXZlOiBMZWF2ZSk6IHZvaWQge1xyXG4gICAgICAgIGlmKGxlYXZlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGxldCBlbnRpdHk6TGVhdmUgPSB0aGlzLl9kYi5jcmVhdGUobGVhdmUpO1xyXG4gICAgICAgICAgICB0aGlzLl9kYi5zYXZlKGVudGl0eSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0QWxsTGVhdmVzXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRBbGxMZWF2ZXMoKTogUHJvbWlzZTxBcnJheTxMZWF2ZT4+IHtcclxuICAgICAgICBsZXQgbGVhdmVzOiBQcm9taXNlPEFycmF5PExlYXZlPj4gPSB0aGlzLl9kYi5maW5kKHtcclxuICAgICAgICAgICAgc2VsZWN0OiBbXCJsZWF2ZURheXNcIixcImNhc3VhbExlYXZlRGF5c1wiLFwiaWRcIixcInN0YWZmXCIsXCJsZWF2ZVR5cGVcIixcImVuZG9yc2VkQnlcIixcImFwcHJvdmVkQnlcIl0sXHJcbiAgICAgICAgICAgIHJlbGF0aW9uczogW1wic3RhZmZcIiwgXCJsZWF2ZVR5cGVcIl0sXHJcbiAgICAgICAgICAgIHNraXA6IDUsXHJcbiAgICAgICAgICAgIHRha2U6IDE1XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBsZWF2ZXM7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGdldCBzaW5nbGUgbGVhdmUgYnkgbGVhdmUgaWRcclxuICAgICAqIEBwYXJhbSBsZWF2ZVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0TGVhdmUobGVhdmU6IExlYXZlKTogUHJvbWlzZTxMZWF2ZT4ge1xyXG4gICAgICAgIGxldCBmZXRjaGVkTGVhdmU6IExlYXZlIHwgdW5kZWZpbmVkID0gYXdhaXQgdGhpcy5fZGIuZmluZE9uZUJ5SWQobGVhdmUuaWQpO1xyXG4gICAgICAgIGlmKHR5cGVvZiBmZXRjaGVkTGVhdmUgPT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUmVjb3JkIG5vdCBmb3VuZC5cIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZldGNoZWRMZWF2ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXQgYWxsIGxlYXZlcyBvZiBhIHN0YWZmXHJcbiAgICAgKiBAcGFyYW0gc3RhZmZcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldE9uZVN0YWZmTGVhdmVzKHN0YWZmOiBTdGFmZik6IFByb21pc2U8QXJyYXk8TGVhdmU+PiB7XHJcbiAgICAgICAgbGV0IGxlYXZlczogUHJvbWlzZTxBcnJheTxMZWF2ZT4+ID0gdGhpcy5fZGIuZmluZCh7XHJcbiAgICAgICAgICAgIHNlbGVjdDpbXCJsZWF2ZURheXNcIixcImNhc3VhbExlYXZlRGF5c1wiLFwiaWRcIixcInN0YWZmXCIsXCJsZWF2ZVR5cGVcIixcImVuZG9yc2VkQnlcIixcImFwcHJvdmVkQnlcIl0sXHJcbiAgICAgICAgICAgIHJlbGF0aW9uczpbXCJzdGFmZlwiLCBcImxlYXZlVHlwZVwiXSxcclxuICAgICAgICAgICAgd2hlcmU6e1xyXG4gICAgICAgICAgICAgICAgc3RhZmY6c3RhZmZcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsZWF2ZXM7XHJcbiAgICB9XHJcbn1cclxuIl19