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
var express = require("express");
var bodyParser = require("body-parser");
var api_1 = require("./routes/api");
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
        app.use("/api", api_1.apiRoutes.router);
        // serve the application at the given port
        app.listen(port, function () {
            // success callback
            console.log("Listening at http://localhost:" + port + "/");
        });
        return [2 /*return*/];
    });
}); }).catch(function (error) { return console.log("Data Access Error : ", error); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQTJCOEQ7O0FBM0I5RCxpQ0FBb0M7QUFDcEMsd0NBQTJDO0FBRzNDLG9DQUF5QztBQUN6QyxtQ0FBcUQ7QUFFckQsNEJBQTRCO0FBQzVCLDBCQUFnQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQU0sVUFBVTs7O1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLENBQUMsQ0FBQztRQUc5QyxHQUFHLEdBQXdCLE9BQU8sRUFBRSxDQUFDO1FBR3JDLElBQUksR0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUM7UUFFMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLGVBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVsQywwQ0FBMEM7UUFDMUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDYixtQkFBbUI7WUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQ0FBaUMsSUFBSSxNQUFHLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUMsQ0FBQzs7O0tBRUYsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsS0FBSyxDQUFDLEVBQTFDLENBQTBDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzID0gcmVxdWlyZShcImV4cHJlc3NcIik7XHJcbmltcG9ydCBib2R5UGFyc2VyID0gcmVxdWlyZShcImJvZHktcGFyc2VyXCIpO1xyXG5pbXBvcnQgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpO1xyXG5pbXBvcnQgKiBhcyBhcGlDdHJsIGZyb20gXCIuL2NvbnRyb2xsZXJzL2FwaUNvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgYXBpUm91dGVzIH0gZnJvbSBcIi4vcm91dGVzL2FwaVwiO1xyXG5pbXBvcnQge2NyZWF0ZUNvbm5lY3Rpb24sIENvbm5lY3Rpb259IGZyb20gXCJ0eXBlb3JtXCI7XHJcblxyXG4vLyBjcmVhdGUgYXBwIGRiIGNvbm5lY3Rpb24uXHJcbmNyZWF0ZUNvbm5lY3Rpb24oKS50aGVuKGFzeW5jIGNvbm5lY3Rpb24gPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgQ29ubmVjdGlvbiBFc3RhYmxpc2hlZC4uLlwiKTtcclxuXHJcbiAgLy8gY3JlYXRlIGEgbmV3IGV4cHJlc3MgYXBwbGljYXRpb24gaW5zdGFuY2VcclxuY29uc3QgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xyXG5cclxuLy8gdGhlIHBvcnQgdGhlIGV4cHJlc3MgYXBwIHdpbGwgbGlzdGVuIG9uXHJcbmNvbnN0IHBvcnQ6YW55ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDAxO1xyXG5cclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuYXBwLnVzZShcIi9hcGlcIiwgYXBpUm91dGVzLnJvdXRlcik7XHJcblxyXG4vLyBzZXJ2ZSB0aGUgYXBwbGljYXRpb24gYXQgdGhlIGdpdmVuIHBvcnRcclxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XHJcbiAgICAvLyBzdWNjZXNzIGNhbGxiYWNrXHJcbiAgICBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIGF0IGh0dHA6Ly9sb2NhbGhvc3Q6JHtwb3J0fS9gKTtcclxufSk7XHJcblxyXG59KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhcIkRhdGEgQWNjZXNzIEVycm9yIDogXCIsIGVycm9yKSk7Il19