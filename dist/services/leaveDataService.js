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
    // what happens when a leave gets disapproved? it should be deleted.
    // it means leave gets updated either way to be approved or disapproved.
    /**
     * Disapprove leave of staff
     * @param leave
     */
    LeaveDataService.prototype.updateLeaveApproval = function (leave) {
        return __awaiter(this, void 0, void 0, function () {
            var leave;
            return __generator(this, function (_a) {
                leave = this._db.findOneById({
                    select: []
                });
                return [2 /*return*/];
            });
        });
    };
    return LeaveDataService;
}());
exports.LeaveDataService = LeaveDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmVEYXRhU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZpY2VzL2xlYXZlRGF0YVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2Qyx5Q0FBd0M7QUFFeEMsbUNBQStFO0FBRS9FOztHQUVHO0FBQ0g7SUFHSTtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsdUJBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxhQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBRUQ7O09BRUc7SUFDSSx3Q0FBYSxHQUFwQixVQUFxQixLQUFZO1FBQzdCLElBQUcsS0FBSyxLQUFLLElBQUksRUFBRTtZQUNmLElBQUksTUFBTSxHQUFTLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ1UsdUNBQVksR0FBekI7Ozs7Z0JBQ1EsTUFBTSxHQUEwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDOUMsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFDLGlCQUFpQixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxZQUFZLENBQUM7b0JBQzFGLFNBQVMsRUFBRSxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7b0JBQ2pDLElBQUksRUFBRSxDQUFDO29CQUNQLElBQUksRUFBRSxFQUFFO2lCQUNYLENBQUMsQ0FBQztnQkFFSCxzQkFBTyxNQUFNLEVBQUM7OztLQUNqQjtJQUNEOzs7T0FHRztJQUNVLG1DQUFRLEdBQXJCLFVBQXNCLEtBQVk7Ozs7OzRCQUNRLHFCQUFNLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBQTs7d0JBQXRFLFlBQVksR0FBc0IsU0FBb0M7d0JBQzFFLElBQUcsT0FBTyxZQUFZLEtBQUssV0FBVyxFQUFFOzRCQUNwQyxNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUM7eUJBQ3hDOzZCQUFNOzRCQUNILHNCQUFPLFlBQVksRUFBQzt5QkFDdkI7Ozs7O0tBQ0o7SUFFRDs7O09BR0c7SUFDVSw0Q0FBaUIsR0FBOUIsVUFBK0IsS0FBWTs7OztnQkFDbkMsTUFBTSxHQUEwQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQztvQkFDOUMsTUFBTSxFQUFDLENBQUMsV0FBVyxFQUFDLGlCQUFpQixFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsV0FBVyxFQUFDLFlBQVksRUFBQyxZQUFZLENBQUM7b0JBQ3pGLFNBQVMsRUFBQyxDQUFDLE9BQU8sRUFBRSxXQUFXLENBQUM7b0JBQ2hDLEtBQUssRUFBQzt3QkFDRixLQUFLLEVBQUMsS0FBSztxQkFDZDtpQkFDSixDQUFDLENBQUM7Z0JBQ0gsc0JBQU8sTUFBTSxFQUFDOzs7S0FDakI7SUFFRCxvRUFBb0U7SUFDcEUsd0VBQXdFO0lBQ3hFOzs7T0FHRztJQUNXLDhDQUFtQixHQUFoQyxVQUFpQyxLQUFZOzs7O2dCQUNyQyxLQUFLLEdBQW1CLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO29CQUM3QyxNQUFNLEVBQUMsRUFBRTtpQkFDWixDQUFDLENBQUM7Ozs7S0FDTjtJQUNOLHVCQUFDO0FBQUQsQ0FBQyxBQXJFRCxJQXFFQztBQXJFWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbGlicmFyaWVzIGFuZCBkZXBlbmRlbmNpZXNcclxuaW1wb3J0IHsgTGVhdmUgfSBmcm9tIFwiLi4vbW9kZWxzL2xlYXZlXCI7XHJcbmltcG9ydCB7U3RhZmZ9IGZyb20gXCIuLi9tb2RlbHMvc3RhZmZcIjtcclxuaW1wb3J0IHsgUmVwb3NpdG9yeSwgZ2V0UmVwb3NpdG9yeSwgQ29ubmVjdGlvbiwgZ2V0Q29ubmVjdGlvbiB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBhIGxlYXZlIGRhdGEgYWNjZXNzIG9wZXJhdGlvbnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBMZWF2ZURhdGFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2RiOiBSZXBvc2l0b3J5PExlYXZlPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9kYiA9IGdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KExlYXZlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFwcGx5Rm9yTGVhdmVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFwcGx5Rm9yTGVhdmUobGVhdmU6IExlYXZlKTogdm9pZCB7XHJcbiAgICAgICAgaWYobGVhdmUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IGVudGl0eTpMZWF2ZSA9IHRoaXMuX2RiLmNyZWF0ZShsZWF2ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RiLnNhdmUoZW50aXR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZXRBbGxMZWF2ZXNcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFzeW5jIGdldEFsbExlYXZlcygpOiBQcm9taXNlPEFycmF5PExlYXZlPj4ge1xyXG4gICAgICAgIGxldCBsZWF2ZXM6IFByb21pc2U8QXJyYXk8TGVhdmU+PiA9IHRoaXMuX2RiLmZpbmQoe1xyXG4gICAgICAgICAgICBzZWxlY3Q6IFtcImxlYXZlRGF5c1wiLFwiY2FzdWFsTGVhdmVEYXlzXCIsXCJpZFwiLFwic3RhZmZcIixcImxlYXZlVHlwZVwiLFwiZW5kb3JzZWRCeVwiLFwiYXBwcm92ZWRCeVwiXSxcclxuICAgICAgICAgICAgcmVsYXRpb25zOiBbXCJzdGFmZlwiLCBcImxlYXZlVHlwZVwiXSxcclxuICAgICAgICAgICAgc2tpcDogNSxcclxuICAgICAgICAgICAgdGFrZTogMTVcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGxlYXZlcztcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IHNpbmdsZSBsZWF2ZSBieSBsZWF2ZSBpZFxyXG4gICAgICogQHBhcmFtIGxlYXZlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRMZWF2ZShsZWF2ZTogTGVhdmUpOiBQcm9taXNlPExlYXZlPiB7XHJcbiAgICAgICAgbGV0IGZldGNoZWRMZWF2ZTogTGVhdmUgfCB1bmRlZmluZWQgPSBhd2FpdCB0aGlzLl9kYi5maW5kT25lQnlJZChsZWF2ZS5pZCk7XHJcbiAgICAgICAgaWYodHlwZW9mIGZldGNoZWRMZWF2ZSA9PT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSZWNvcmQgbm90IGZvdW5kLlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmV0Y2hlZExlYXZlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBhbGwgbGVhdmVzIG9mIGEgc3RhZmZcclxuICAgICAqIEBwYXJhbSBzdGFmZlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgZ2V0T25lU3RhZmZMZWF2ZXMoc3RhZmY6IFN0YWZmKTogUHJvbWlzZTxBcnJheTxMZWF2ZT4+IHtcclxuICAgICAgICBsZXQgbGVhdmVzOiBQcm9taXNlPEFycmF5PExlYXZlPj4gPSB0aGlzLl9kYi5maW5kKHtcclxuICAgICAgICAgICAgc2VsZWN0OltcImxlYXZlRGF5c1wiLFwiY2FzdWFsTGVhdmVEYXlzXCIsXCJpZFwiLFwic3RhZmZcIixcImxlYXZlVHlwZVwiLFwiZW5kb3JzZWRCeVwiLFwiYXBwcm92ZWRCeVwiXSxcclxuICAgICAgICAgICAgcmVsYXRpb25zOltcInN0YWZmXCIsIFwibGVhdmVUeXBlXCJdLFxyXG4gICAgICAgICAgICB3aGVyZTp7XHJcbiAgICAgICAgICAgICAgICBzdGFmZjpzdGFmZlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGxlYXZlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyB3aGF0IGhhcHBlbnMgd2hlbiBhIGxlYXZlIGdldHMgZGlzYXBwcm92ZWQ/IGl0IHNob3VsZCBiZSBkZWxldGVkLlxyXG4gICAgLy8gaXQgbWVhbnMgbGVhdmUgZ2V0cyB1cGRhdGVkIGVpdGhlciB3YXkgdG8gYmUgYXBwcm92ZWQgb3IgZGlzYXBwcm92ZWQuXHJcbiAgICAvKipcclxuICAgICAqIERpc2FwcHJvdmUgbGVhdmUgb2Ygc3RhZmZcclxuICAgICAqIEBwYXJhbSBsZWF2ZVxyXG4gICAgICovXHJcbiAgICAgcHVibGljIGFzeW5jIHVwZGF0ZUxlYXZlQXBwcm92YWwobGVhdmU6IExlYXZlKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgICAgICAgIGxldCBsZWF2ZTogUHJvbWlzZTxMZWF2ZT4gPSB0aGlzLl9kYi5maW5kT25lQnlJZCh7XHJcbiAgICAgICAgICAgICBzZWxlY3Q6W11cclxuICAgICAgICAgfSk7XHJcbiAgICAgfVxyXG59Il19