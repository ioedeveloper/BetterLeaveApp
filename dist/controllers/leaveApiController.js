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
var leaveApiModel_1 = require("../api_models/leaveApiModel");
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
                    var apmodel = new leaveApiModel_1.LeaveApiModel(leave.leaveType.name, leave.staff.firstname + " " + leave.staff.lastname, leave.id);
                    viewresult.push(apmodel);
                });
                return [2 /*return*/, res.status(200).send(viewresult)];
        }
    });
}); };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmVBcGlDb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vY29udHJvbGxlcnMvbGVhdmVBcGlDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlCQXNCQTs7QUFyQkEsaUVBQWdFO0FBQ2hFLDZEQUE0RDtBQUc1RDs7OztHQUlHO0FBQ1EsUUFBQSxZQUFZLEdBQU8sVUFBTyxHQUFZLEVBQUUsR0FBYTs7Ozs7Z0JBQ3RELFdBQVcsR0FBcUIsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO2dCQUNuQyxxQkFBTSxXQUFXLENBQUMsWUFBWSxFQUFFLEVBQUE7O2dCQUF0RCxNQUFNLEdBQWdCLFNBQWdDO2dCQUN0RCxVQUFVLEdBQXdCLElBQUksS0FBSyxFQUFpQixDQUFDO2dCQUVqRSxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUEsS0FBSztvQkFDaEIsSUFBSSxPQUFPLEdBQ1gsSUFBSSw2QkFBYSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsU0FBUyxTQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsUUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDdEcsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsc0JBQU8sR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUM7OztLQUMzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0aW5nIGxpYnJhcmllcyBhbmQgZGVwZW5kZW5jaWVzXHJcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tIFwiZXhwcmVzc1wiO1xyXG5pbXBvcnQgeyBMZWF2ZURhdGFTZXJ2aWNlIH0gZnJvbSBcIi4uL3NlcnZpY2VzL2xlYXZlRGF0YVNlcnZpY2VcIjtcclxuaW1wb3J0IHsgTGVhdmVBcGlNb2RlbCB9IGZyb20gXCIuLi9hcGlfbW9kZWxzL2xlYXZlQXBpTW9kZWxcIjtcclxuaW1wb3J0IHsgTGVhdmUgfSBmcm9tIFwiLi4vbW9kZWxzL2xlYXZlXCI7XHJcblxyXG4vKipcclxuICogR2V0IEFsbCBMZWF2ZXNcclxuICogQHBhcmFtIHJlcVxyXG4gKiBAcGFyYW0gcmVzXHJcbiAqL1xyXG5leHBvcnQgbGV0IGdldEFsbExlYXZlczphbnkgPSBhc3luYyAocmVxOiBSZXF1ZXN0LCByZXM6IFJlc3BvbnNlKSA9PiB7XHJcbiAgICBjb25zdCBkYXRhU2VydmljZTogTGVhdmVEYXRhU2VydmljZSA9IG5ldyBMZWF2ZURhdGFTZXJ2aWNlKCk7XHJcbiAgICBsZXQgcmVzdWx0OkFycmF5PExlYXZlPiA9IGF3YWl0IGRhdGFTZXJ2aWNlLmdldEFsbExlYXZlcygpO1xyXG4gICAgbGV0IHZpZXdyZXN1bHQ6QXJyYXk8TGVhdmVBcGlNb2RlbD4gPSBuZXcgQXJyYXk8TGVhdmVBcGlNb2RlbD4oKTtcclxuXHJcbiAgICByZXN1bHQuZm9yRWFjaChsZWF2ZSA9PiB7XHJcbiAgICAgICAgbGV0IGFwbW9kZWw6TGVhdmVBcGlNb2RlbCA9XHJcbiAgICAgICAgbmV3IExlYXZlQXBpTW9kZWwobGVhdmUubGVhdmVUeXBlLm5hbWUsIGAke2xlYXZlLnN0YWZmLmZpcnN0bmFtZX0gJHtsZWF2ZS5zdGFmZi5sYXN0bmFtZX1gLCBsZWF2ZS5pZCk7XHJcbiAgICAgICAgdmlld3Jlc3VsdC5wdXNoKGFwbW9kZWwpO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLnNlbmQodmlld3Jlc3VsdCk7XHJcbn07XHJcbiJdfQ==