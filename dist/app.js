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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries and dependencies
var express = require("express");
var bodyParser = require("body-parser");
var apiRoutes = __importStar(require("./routes/api"));
var typeorm_1 = require("typeorm");
// create app db connection.
typeorm_1.createConnection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
    var app, port;
    return __generator(this, function (_a) {
        console.log("Database Connection Established...");
        app = express();
        port = process.env.PORT || 8001;
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use("/api/leave", apiRoutes.leaveApiRoutes.router);
        app.use("/api/user", apiRoutes.userApiRoutes.router);
        // serve the application at the given port
        app.listen(port, function () {
            // success callback
            console.log("Listening at http://localhost:" + port + "/");
        });
        return [2 /*return*/];
    });
}); }).catch(function (error) { return console.log("Data Access Error : ", error); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpQkEyQjhEOztBQTVCOUQsdUNBQXVDO0FBQ3ZDLGlDQUFvQztBQUNwQyx3Q0FBMkM7QUFFM0Msc0RBQTBDO0FBQzFDLG1DQUFxRDtBQUVyRCw0QkFBNEI7QUFDNUIsMEJBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBTSxVQUFVOzs7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO1FBRzlDLEdBQUcsR0FBd0IsT0FBTyxFQUFFLENBQUM7UUFHckMsSUFBSSxHQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztRQUUxQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDcEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2RCxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXJELDBDQUEwQztRQUMxQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNiLG1CQUFtQjtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFpQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDOzs7S0FFRixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0aW5nIGxpYnJhcmllcyBhbmQgZGVwZW5kZW5jaWVzXHJcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcbmltcG9ydCBib2R5UGFyc2VyID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xyXG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5pbXBvcnQgKiBhcyBhcGlSb3V0ZXMgZnJvbSBcIi4vcm91dGVzL2FwaVwiO1xyXG5pbXBvcnQge2NyZWF0ZUNvbm5lY3Rpb24sIENvbm5lY3Rpb259IGZyb20gXCJ0eXBlb3JtXCI7XHJcblxyXG4vLyBjcmVhdGUgYXBwIGRiIGNvbm5lY3Rpb24uXHJcbmNyZWF0ZUNvbm5lY3Rpb24oKS50aGVuKGFzeW5jIGNvbm5lY3Rpb24gPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgQ29ubmVjdGlvbiBFc3RhYmxpc2hlZC4uLlwiKTtcclxuXHJcbiAgLy8gY3JlYXRlIGEgbmV3IGV4cHJlc3MgYXBwbGljYXRpb24gaW5zdGFuY2VcclxuY29uc3QgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xyXG5cclxuLy8gdGhlIHBvcnQgdGhlIGV4cHJlc3MgYXBwIHdpbGwgbGlzdGVuIG9uXHJcbmNvbnN0IHBvcnQ6YW55ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDAxO1xyXG5cclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuYXBwLnVzZShcIi9hcGkvbGVhdmVcIiwgYXBpUm91dGVzLmxlYXZlQXBpUm91dGVzLnJvdXRlcik7XHJcbmFwcC51c2UoXCIvYXBpL3VzZXJcIiwgYXBpUm91dGVzLnVzZXJBcGlSb3V0ZXMucm91dGVyKTtcclxuXHJcbi8vIHNlcnZlIHRoZSBhcHBsaWNhdGlvbiBhdCB0aGUgZ2l2ZW4gcG9ydFxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICAgIC8vIHN1Y2Nlc3MgY2FsbGJhY2tcclxuICAgIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2ApO1xyXG59KTtcclxuXHJcbn0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRGF0YSBBY2Nlc3MgRXJyb3IgOiBcIiwgZXJyb3IpKTsiXX0=