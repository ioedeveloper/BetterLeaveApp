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
var leaveDataService_1 = require("../services/leaveDataService");
var leaveIndexApiModel_1 = require("../api_models/leaveIndexApiModel");
/**
 * GET /api
 * List of API examples.
 */
exports.getApi = function (req, res) {
    res.render("api/index", {
        title: "BETTER LEAVE APP API",
    });
};
/**
 * Get All Leaves
 * @param req
 * @param res
 */
exports.getAllLeaves = function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var dataService, result, viewresult;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                dataService = new leaveDataService_1.LeaveDataService();
                return [4 /*yield*/, dataService.getAllLeaves()];
            case 1:
                result = _a.sent();
                viewresult = new Array();
                result.forEach(function (leave) {
                    var apmodel = new leaveIndexApiModel_1.LeaveIndexApiModel(leave.leaveType.name, leave.staff.firstname + " " + leave.staff.lastname, leave.id);
                    viewresult.push(apmodel);
                });
                return [2 /*return*/, res.status(200).send(viewresult)];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL2FwaUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYixpQkFvQ0E7O0FBbENBLGlFQUFnRTtBQUNoRSx1RUFBc0U7QUFHdEU7OztHQUdHO0FBQ1EsUUFBQSxNQUFNLEdBQU8sVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNsRCxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtRQUN0QixLQUFLLEVBQUUsc0JBQXNCO0tBQzlCLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQUdGOzs7O0dBSUc7QUFDUSxRQUFBLFlBQVksR0FBTyxVQUFPLEdBQVksRUFBRSxHQUFhOzs7OztnQkFDdEQsV0FBVyxHQUFxQixJQUFJLG1DQUFnQixFQUFFLENBQUM7Z0JBQ25DLHFCQUFNLFdBQVcsQ0FBQyxZQUFZLEVBQUUsRUFBQTs7Z0JBQXRELE1BQU0sR0FBZ0IsU0FBZ0M7Z0JBQ3RELFVBQVUsR0FBNkIsSUFBSSxLQUFLLEVBQXNCLENBQUM7Z0JBRTNFLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQSxLQUFLO29CQUNoQixJQUFJLE9BQU8sR0FDWCxJQUFJLHVDQUFrQixDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxTQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDM0csVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7Z0JBR0gsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUM7OztLQUMzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBMZWF2ZURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xlYXZlRGF0YVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTGVhdmVJbmRleEFwaU1vZGVsIH0gZnJvbSBcIi4uL2FwaV9tb2RlbHMvbGVhdmVJbmRleEFwaU1vZGVsXCI7XHJcbmltcG9ydCB7IExlYXZlIH0gZnJvbSBcIi4uL21vZGVscy9sZWF2ZVwiO1xyXG5cclxuLyoqXHJcbiAqIEdFVCAvYXBpXHJcbiAqIExpc3Qgb2YgQVBJIGV4YW1wbGVzLlxyXG4gKi9cclxuZXhwb3J0IGxldCBnZXRBcGk6YW55ID0gKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gIHJlcy5yZW5kZXIoXCJhcGkvaW5kZXhcIiwge1xyXG4gICAgdGl0bGU6IFwiQkVUVEVSIExFQVZFIEFQUCBBUElcIixcclxuICB9KTtcclxufTtcclxuXHJcblxyXG4vKipcclxuICogR2V0IEFsbCBMZWF2ZXNcclxuICogQHBhcmFtIHJlcVxyXG4gKiBAcGFyYW0gcmVzXHJcbiAqL1xyXG5leHBvcnQgbGV0IGdldEFsbExlYXZlczphbnkgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhU2VydmljZTogTGVhdmVEYXRhU2VydmljZSA9IG5ldyBMZWF2ZURhdGFTZXJ2aWNlKCk7XHJcbiAgICBsZXQgcmVzdWx0OkFycmF5PExlYXZlPiA9IGF3YWl0IGRhdGFTZXJ2aWNlLmdldEFsbExlYXZlcygpO1xyXG4gICAgbGV0IHZpZXdyZXN1bHQ6QXJyYXk8TGVhdmVJbmRleEFwaU1vZGVsPiA9IG5ldyBBcnJheTxMZWF2ZUluZGV4QXBpTW9kZWw+KCk7XHJcblxyXG4gICAgcmVzdWx0LmZvckVhY2gobGVhdmUgPT4ge1xyXG4gICAgICAgIGxldCBhcG1vZGVsOkxlYXZlSW5kZXhBcGlNb2RlbCA9XHJcbiAgICAgICAgbmV3IExlYXZlSW5kZXhBcGlNb2RlbChsZWF2ZS5sZWF2ZVR5cGUubmFtZSwgYCR7bGVhdmUuc3RhZmYuZmlyc3RuYW1lfSAke2xlYXZlLnN0YWZmLmxhc3RuYW1lfWAsIGxlYXZlLmlkKTtcclxuICAgICAgICB2aWV3cmVzdWx0LnB1c2goYXBtb2RlbCk7XHJcbiAgICB9KTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHZpZXdyZXN1bHQpO1xyXG59O1xyXG4iXX0=