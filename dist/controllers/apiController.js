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
    res.send({
        title: "BETTER LEAVE APP API",
    });
    return;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpQ29udHJvbGxlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL2NvbnRyb2xsZXJzL2FwaUNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBYixpQkFxQ0E7O0FBbkNBLGlFQUFnRTtBQUNoRSx1RUFBc0U7QUFHdEU7OztHQUdHO0FBQ1EsUUFBQSxNQUFNLEdBQU8sVUFBQyxHQUFZLEVBQUUsR0FBYTtJQUNsRCxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ1AsS0FBSyxFQUFFLHNCQUFzQjtLQUM5QixDQUFDLENBQUM7SUFDSCxPQUFPO0FBQ1QsQ0FBQyxDQUFDO0FBR0Y7Ozs7R0FJRztBQUNRLFFBQUEsWUFBWSxHQUFPLFVBQU8sR0FBWSxFQUFFLEdBQWE7Ozs7O2dCQUN0RCxXQUFXLEdBQXFCLElBQUksbUNBQWdCLEVBQUUsQ0FBQztnQkFDbkMscUJBQU0sV0FBVyxDQUFDLFlBQVksRUFBRSxFQUFBOztnQkFBdEQsTUFBTSxHQUFnQixTQUFnQztnQkFDdEQsVUFBVSxHQUE2QixJQUFJLEtBQUssRUFBc0IsQ0FBQztnQkFFM0UsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFBLEtBQUs7b0JBQ2hCLElBQUksT0FBTyxHQUNYLElBQUksdUNBQWtCLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLFNBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUMzRyxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQUMsQ0FBQztnQkFHSCxzQkFBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBQzs7O0tBQzNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcclxuaW1wb3J0IHsgTmV4dEZ1bmN0aW9uLCBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCB7IExlYXZlRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbGVhdmVEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgeyBMZWF2ZUluZGV4QXBpTW9kZWwgfSBmcm9tIFwiLi4vYXBpX21vZGVscy9sZWF2ZUluZGV4QXBpTW9kZWxcIjtcclxuaW1wb3J0IHsgTGVhdmUgfSBmcm9tIFwiLi4vbW9kZWxzL2xlYXZlXCI7XHJcblxyXG4vKipcclxuICogR0VUIC9hcGlcclxuICogTGlzdCBvZiBBUEkgZXhhbXBsZXMuXHJcbiAqL1xyXG5leHBvcnQgbGV0IGdldEFwaTphbnkgPSAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgcmVzLnNlbmQoe1xyXG4gICAgdGl0bGU6IFwiQkVUVEVSIExFQVZFIEFQUCBBUElcIixcclxuICB9KTtcclxuICByZXR1cm47XHJcbn07XHJcblxyXG5cclxuLyoqXHJcbiAqIEdldCBBbGwgTGVhdmVzXHJcbiAqIEBwYXJhbSByZXFcclxuICogQHBhcmFtIHJlc1xyXG4gKi9cclxuZXhwb3J0IGxldCBnZXRBbGxMZWF2ZXM6YW55ID0gYXN5bmMgKHJlcTogUmVxdWVzdCwgcmVzOiBSZXNwb25zZSkgPT4ge1xyXG4gICAgY29uc3QgZGF0YVNlcnZpY2U6IExlYXZlRGF0YVNlcnZpY2UgPSBuZXcgTGVhdmVEYXRhU2VydmljZSgpO1xyXG4gICAgbGV0IHJlc3VsdDpBcnJheTxMZWF2ZT4gPSBhd2FpdCBkYXRhU2VydmljZS5nZXRBbGxMZWF2ZXMoKTtcclxuICAgIGxldCB2aWV3cmVzdWx0OkFycmF5PExlYXZlSW5kZXhBcGlNb2RlbD4gPSBuZXcgQXJyYXk8TGVhdmVJbmRleEFwaU1vZGVsPigpO1xyXG5cclxuICAgIHJlc3VsdC5mb3JFYWNoKGxlYXZlID0+IHtcclxuICAgICAgICBsZXQgYXBtb2RlbDpMZWF2ZUluZGV4QXBpTW9kZWwgPVxyXG4gICAgICAgIG5ldyBMZWF2ZUluZGV4QXBpTW9kZWwobGVhdmUubGVhdmVUeXBlLm5hbWUsIGAke2xlYXZlLnN0YWZmLmZpcnN0bmFtZX0gJHtsZWF2ZS5zdGFmZi5sYXN0bmFtZX1gLCBsZWF2ZS5pZCk7XHJcbiAgICAgICAgdmlld3Jlc3VsdC5wdXNoKGFwbW9kZWwpO1xyXG4gICAgfSk7XHJcblxyXG5cclxuICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuc2VuZCh2aWV3cmVzdWx0KTtcclxufTtcclxuIl19