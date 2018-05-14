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
var path = require("path");
var api_1 = require("./routes/api");
var typeorm_1 = require("typeorm");
// create app db connection.
typeorm_1.createConnection().then(function (connection) { return __awaiter(_this, void 0, void 0, function () {
    var app, port;
    return __generator(this, function (_a) {
        console.log("Database Connection Established...");
        app = express();
        port = process.env.PORT || 8001;
        // view engine setup
        app.set("views", path.join(__dirname, "public"));
        app.set("view engine", "pug");
        // uncomment after placing your favicon in /public
        // app.use(favicon(__dirname + '/public/favicon.ico'));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(express.static(path.join(__dirname, "public")));
        app.use("/api", api_1.apiRoutes.router);
        // serve the application at the given port
        app.listen(port, function () {
            // success callback
            console.log("Listening at http://localhost:" + port + "/");
        });
        return [2 /*return*/];
    });
}); }).catch(function (error) { return console.log("Data Access Error : ", error); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQWlDOEQ7O0FBakM5RCxpQ0FBb0M7QUFDcEMsd0NBQTJDO0FBQzNDLDJCQUE4QjtBQUU5QixvQ0FBeUM7QUFDekMsbUNBQXFEO0FBRXJELDRCQUE0QjtBQUM1QiwwQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFNLFVBQVU7OztRQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLG9DQUFvQyxDQUFDLENBQUM7UUFHOUMsR0FBRyxHQUF3QixPQUFPLEVBQUUsQ0FBQztRQUVyQyxJQUFJLEdBQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDO1FBQzFDLG9CQUFvQjtRQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO1FBQ2pELEdBQUcsQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBRTlCLGtEQUFrRDtRQUNsRCx1REFBdUQ7UUFFdkQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUMzQixHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BELEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsZUFBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWxDLDBDQUEwQztRQUMxQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtZQUNiLG1CQUFtQjtZQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLG1DQUFpQyxJQUFJLE1BQUcsQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFDOzs7S0FFRixDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsRUFBRSxLQUFLLENBQUMsRUFBMUMsQ0FBMEMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcclxuaW1wb3J0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XHJcbmltcG9ydCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmltcG9ydCAqIGFzIGFwaUN0cmwgZnJvbSBcIi4vY29udHJvbGxlcnMvYXBpQ29udHJvbGxlclwiO1xyXG5pbXBvcnQgeyBhcGlSb3V0ZXMgfSBmcm9tIFwiLi9yb3V0ZXMvYXBpXCI7XHJcbmltcG9ydCB7Y3JlYXRlQ29ubmVjdGlvbiwgQ29ubmVjdGlvbn0gZnJvbSBcInR5cGVvcm1cIjtcclxuXHJcbi8vIGNyZWF0ZSBhcHAgZGIgY29ubmVjdGlvbi5cclxuY3JlYXRlQ29ubmVjdGlvbigpLnRoZW4oYXN5bmMgY29ubmVjdGlvbiA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJEYXRhYmFzZSBDb25uZWN0aW9uIEVzdGFibGlzaGVkLi4uXCIpO1xyXG5cclxuICAvLyBjcmVhdGUgYSBuZXcgZXhwcmVzcyBhcHBsaWNhdGlvbiBpbnN0YW5jZVxyXG5jb25zdCBhcHA6IGV4cHJlc3MuQXBwbGljYXRpb24gPSBleHByZXNzKCk7XHJcbi8vIHRoZSBwb3J0IHRoZSBleHByZXNzIGFwcCB3aWxsIGxpc3RlbiBvblxyXG5jb25zdCBwb3J0OmFueSA9IHByb2Nlc3MuZW52LlBPUlQgfHwgODAwMTtcclxuLy8gdmlldyBlbmdpbmUgc2V0dXBcclxuYXBwLnNldChcInZpZXdzXCIsIHBhdGguam9pbihfX2Rpcm5hbWUsIFwicHVibGljXCIpKTtcclxuYXBwLnNldChcInZpZXcgZW5naW5lXCIsIFwicHVnXCIpO1xyXG5cclxuLy8gdW5jb21tZW50IGFmdGVyIHBsYWNpbmcgeW91ciBmYXZpY29uIGluIC9wdWJsaWNcclxuLy8gYXBwLnVzZShmYXZpY29uKF9fZGlybmFtZSArICcvcHVibGljL2Zhdmljb24uaWNvJykpO1xyXG5cclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuYXBwLnVzZShleHByZXNzLnN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCBcInB1YmxpY1wiKSkpO1xyXG5hcHAudXNlKFwiL2FwaVwiLCBhcGlSb3V0ZXMucm91dGVyKTtcclxuXHJcbi8vIHNlcnZlIHRoZSBhcHBsaWNhdGlvbiBhdCB0aGUgZ2l2ZW4gcG9ydFxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICAgIC8vIHN1Y2Nlc3MgY2FsbGJhY2tcclxuICAgIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2ApO1xyXG59KTtcclxuXHJcbn0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRGF0YSBBY2Nlc3MgRXJyb3IgOiBcIiwgZXJyb3IpKTsiXX0=