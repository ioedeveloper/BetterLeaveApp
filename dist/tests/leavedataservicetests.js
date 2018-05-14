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
var leaveService_1 = require("../services/leaveService");
var chai_1 = require("chai");
require("mocha");
var leave_1 = require("../models/leave");
var typeorm_1 = require("typeorm");
describe("getAllLeaves function", function () {
    // create app db connection.
    it("should return an array of leaves", function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            typeorm_1.createConnection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                var lds, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            lds = new leaveDataService_1.LeaveDataService();
                            return [4 /*yield*/, lds.getAllLeaves()];
                        case 1:
                            result = _a.sent();
                            // assert or Expect
                            chai_1.expect(result).to.be.an.instanceof(Array());
                            return [2 /*return*/];
                    }
                });
            }); }).catch(function (error) { return console.log("Data Access Error : ", error); });
            return [2 /*return*/];
        });
    }); });
});
describe("getLeave function", function () {
    // create app db connection.
    it("should return a leave", function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            typeorm_1.createConnection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                var lds, leave, result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            lds = new leaveDataService_1.LeaveDataService();
                            leave = new leave_1.Leave();
                            return [4 /*yield*/, lds.getLeave(leave)];
                        case 1:
                            result = _a.sent();
                            chai_1.expect(result).to.be.an.instanceof(leave_1.Leave);
                            return [2 /*return*/];
                    }
                });
            }); }).catch(function (error) { return console.log("Data Access Error : ", error); });
            return [2 /*return*/];
        });
    }); });
});
describe("getnumberofleavedays", function () {
    it("should return number of days approved for leave for staff", function () { return __awaiter(_this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            typeorm_1.createConnection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
                var ls;
                return __generator(this, function (_a) {
                    ls = new leaveService_1.LeaveService();
                    ls.setLeaveDayAmount(3);
                    chai_1.expect(ls).to.be.does("nothing");
                    return [2 /*return*/];
                });
            }); }).catch(function (error) { return console.log("Data Access Error : ", error); });
            return [2 /*return*/];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmVkYXRhc2VydmljZXRlc3RzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vdGVzdHMvbGVhdmVkYXRhc2VydmljZXRlc3RzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQTJDRzs7QUEzQ0gsaUVBQWdFO0FBQ2hFLHlEQUF3RDtBQUN4RCw2QkFBOEI7QUFDOUIsaUJBQWU7QUFDZix5Q0FBd0M7QUFDeEMsbUNBQXlDO0FBR3pDLFFBQVEsQ0FBQyx1QkFBdUIsRUFBRTtJQUNsQyw0QkFBNEI7SUFDeEIsRUFBRSxDQUFDLGtDQUFrQyxFQUFFOzs7WUFDbkMsMEJBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBTSxVQUFVOzs7Ozs0QkFDbEMsR0FBRyxHQUFxQixJQUFJLG1DQUFnQixFQUFFLENBQUM7NEJBRXhCLHFCQUFNLEdBQUcsQ0FBQyxZQUFZLEVBQUUsRUFBQTs7NEJBQS9DLE1BQU0sR0FBaUIsU0FBd0I7NEJBRXJELG1CQUFtQjs0QkFDbkIsYUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQVMsQ0FBQyxDQUFDOzs7O2lCQUN0RCxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDOzs7U0FDN0QsQ0FBQyxDQUFDO0FBRVAsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFDMUIsNEJBQTRCO0lBQzVCLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRTs7O1lBQ3hCLDBCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQU0sVUFBVTs7Ozs7NEJBQ2xDLEdBQUcsR0FBcUIsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDOzRCQUMvQyxLQUFLLEdBQVUsSUFBSSxhQUFLLEVBQUUsQ0FBQzs0QkFDWCxxQkFBTSxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxFQUFBOzs0QkFBekMsTUFBTSxHQUFVLFNBQXlCOzRCQUMvQyxhQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLGFBQUssQ0FBQyxDQUFDOzs7O2lCQUM3QyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDOzs7U0FDN0QsQ0FBQyxDQUFDO0FBQ1AsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsc0JBQXNCLEVBQUU7SUFDN0IsRUFBRSxDQUFDLDJEQUEyRCxFQUFFOzs7WUFDaEUsMEJBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBTSxVQUFVOzs7b0JBQzlCLEVBQUUsR0FBaUIsSUFBSSwyQkFBWSxFQUFFLENBQUM7b0JBQzVDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDeEIsYUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDOzs7aUJBQ3BDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixFQUFFLEtBQUssQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQUM7OztTQUM3RCxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExlYXZlRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbGVhdmVEYXRhU2VydmljZVwiO1xyXG5pbXBvcnQgeyBMZWF2ZVNlcnZpY2UgfSBmcm9tIFwiLi4vc2VydmljZXMvbGVhdmVTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IGV4cGVjdCB9IGZyb20gXCJjaGFpXCI7XHJcbmltcG9ydCBcIm1vY2hhXCI7XHJcbmltcG9ydCB7IExlYXZlIH0gZnJvbSBcIi4uL21vZGVscy9sZWF2ZVwiO1xyXG5pbXBvcnQge2NyZWF0ZUNvbm5lY3Rpb259IGZyb20gXCJ0eXBlb3JtXCI7XHJcblxyXG5cclxuZGVzY3JpYmUoXCJnZXRBbGxMZWF2ZXMgZnVuY3Rpb25cIiwgKCkgPT4ge1xyXG4vLyBjcmVhdGUgYXBwIGRiIGNvbm5lY3Rpb24uXHJcbiAgICBpdChcInNob3VsZCByZXR1cm4gYW4gYXJyYXkgb2YgbGVhdmVzXCIsIGFzeW5jICgpID0+IHtcclxuICAgICAgICBjcmVhdGVDb25uZWN0aW9uKCkudGhlbihhc3luYyBjb25uZWN0aW9uID0+IHtcclxuICAgICAgICBjb25zdCBsZHM6IExlYXZlRGF0YVNlcnZpY2UgPSBuZXcgTGVhdmVEYXRhU2VydmljZSgpO1xyXG4gICAgICAgIC8vIGFjdFxyXG4gICAgICAgIGNvbnN0IHJlc3VsdDogQXJyYXk8TGVhdmU+ID0gYXdhaXQgbGRzLmdldEFsbExlYXZlcygpO1xyXG5cclxuICAgICAgICAvLyBhc3NlcnQgb3IgRXhwZWN0XHJcbiAgICAgICAgZXhwZWN0KHJlc3VsdCkudG8uYmUuYW4uaW5zdGFuY2VvZihBcnJheTxMZWF2ZT4oKSk7XHJcbiAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkRhdGEgQWNjZXNzIEVycm9yIDogXCIsIGVycm9yKSk7XHJcbiAgICB9KTtcclxuXHJcbn0pO1xyXG5cclxuZGVzY3JpYmUoXCJnZXRMZWF2ZSBmdW5jdGlvblwiLCAoKSA9PiB7XHJcbiAgICAvLyBjcmVhdGUgYXBwIGRiIGNvbm5lY3Rpb24uXHJcbiAgICBpdChcInNob3VsZCByZXR1cm4gYSBsZWF2ZVwiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY3JlYXRlQ29ubmVjdGlvbigpLnRoZW4oYXN5bmMgY29ubmVjdGlvbiA9PiB7XHJcbiAgICAgICAgY29uc3QgbGRzOiBMZWF2ZURhdGFTZXJ2aWNlID0gbmV3IExlYXZlRGF0YVNlcnZpY2UoKTtcclxuICAgICAgICBjb25zdCBsZWF2ZTogTGVhdmUgPSBuZXcgTGVhdmUoKTtcclxuICAgICAgICBjb25zdCByZXN1bHQ6IExlYXZlID0gYXdhaXQgbGRzLmdldExlYXZlKGxlYXZlKTtcclxuICAgICAgICBleHBlY3QocmVzdWx0KS50by5iZS5hbi5pbnN0YW5jZW9mKExlYXZlKTtcclxuICAgIH0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRGF0YSBBY2Nlc3MgRXJyb3IgOiBcIiwgZXJyb3IpKTtcclxuICAgIH0pO1xyXG59KTtcclxuXHJcbmRlc2NyaWJlKFwiZ2V0bnVtYmVyb2ZsZWF2ZWRheXNcIiwgKCkgPT4ge1xyXG4gICAgaXQoXCJzaG91bGQgcmV0dXJuIG51bWJlciBvZiBkYXlzIGFwcHJvdmVkIGZvciBsZWF2ZSBmb3Igc3RhZmZcIiwgYXN5bmMgKCkgPT4ge1xyXG4gICAgY3JlYXRlQ29ubmVjdGlvbigpLnRoZW4oYXN5bmMgY29ubmVjdGlvbiA9PiB7XHJcbiAgICAgICAgY29uc3QgbHM6IExlYXZlU2VydmljZSA9IG5ldyBMZWF2ZVNlcnZpY2UoKTtcclxuICAgICAgICBscy5zZXRMZWF2ZURheUFtb3VudCgzKTtcclxuICAgICAgICBleHBlY3QobHMpLnRvLmJlLmRvZXMoXCJub3RoaW5nXCIpO1xyXG4gICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coXCJEYXRhIEFjY2VzcyBFcnJvciA6IFwiLCBlcnJvcikpO1xyXG4gICAgfSk7XHJcbn0pOyJdfQ==