"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var apiRoutes = __importStar(require("./routes/api"));
var typeorm_1 = require("typeorm");
// create app db connection.
typeorm_1.createConnection().then(function () {
    console.log("Database Connection Established...");
    // create a new express application instance
    var app = express();
    // the port the express app will listen on
    var port = process.env.PORT || 8001;
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use("/api/leave", apiRoutes.leaveApiRoutes.router);
    app.use("/api/user", apiRoutes.userApiRoutes.router);
    app.get("/", function (req, res) {
        return res.status(200).send("Welcome to better leave app");
    });
    // serve the application at the given port
    app.listen(port, function () {
        // success callback
        console.log("Listening at http://localhost:" + port + "/");
    });
}).catch(function (error) { return console.log("Error: " + error); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUVBLGlDQUFvQztBQUNwQyx3Q0FBMkM7QUFFM0Msc0RBQTBDO0FBQzFDLG1DQUF5QztBQUV6Qyw0QkFBNEI7QUFDNUIsMEJBQWdCLEVBQUUsQ0FBQyxJQUFJLENBQUM7SUFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQ0FBb0MsQ0FBQyxDQUFDO0lBRWxELDRDQUE0QztJQUM5QyxJQUFNLEdBQUcsR0FBd0IsT0FBTyxFQUFFLENBQUM7SUFFM0MsMENBQTBDO0lBQzFDLElBQU0sSUFBSSxHQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQztJQUUxQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzNCLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDcEQsR0FBRyxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsU0FBUyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RCxHQUFHLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxTQUFTLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBRXJELEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFVBQUMsR0FBVyxFQUFFLEdBQVk7UUFDckMsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO0lBQzdELENBQUMsQ0FBQyxDQUFDO0lBRUgsMENBQTBDO0lBQzFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1FBQ2IsbUJBQW1CO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQWlDLElBQUksTUFBRyxDQUFDLENBQUM7SUFDMUQsQ0FBQyxDQUFDLENBQUM7QUFFSCxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsR0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0aW5nIGxpYnJhcmllcyBhbmQgZGVwZW5kZW5jaWVzXHJcbmltcG9ydCB7IFJlcXVlc3QsIFJlc3BvbnNlIH0gZnJvbSBcImV4cHJlc3NcIjtcclxuaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcclxuaW1wb3J0IGJvZHlQYXJzZXIgPSByZXF1aXJlKFwiYm9keS1wYXJzZXJcIik7XHJcbmltcG9ydCBwYXRoID0gcmVxdWlyZShcInBhdGhcIik7XHJcbmltcG9ydCAqIGFzIGFwaVJvdXRlcyBmcm9tIFwiLi9yb3V0ZXMvYXBpXCI7XHJcbmltcG9ydCB7Y3JlYXRlQ29ubmVjdGlvbn0gZnJvbSBcInR5cGVvcm1cIjtcclxuXHJcbi8vIGNyZWF0ZSBhcHAgZGIgY29ubmVjdGlvbi5cclxuY3JlYXRlQ29ubmVjdGlvbigpLnRoZW4oKCkgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwiRGF0YWJhc2UgQ29ubmVjdGlvbiBFc3RhYmxpc2hlZC4uLlwiKTtcclxuXHJcbiAgLy8gY3JlYXRlIGEgbmV3IGV4cHJlc3MgYXBwbGljYXRpb24gaW5zdGFuY2VcclxuY29uc3QgYXBwOiBleHByZXNzLkFwcGxpY2F0aW9uID0gZXhwcmVzcygpO1xyXG5cclxuLy8gdGhlIHBvcnQgdGhlIGV4cHJlc3MgYXBwIHdpbGwgbGlzdGVuIG9uXHJcbmNvbnN0IHBvcnQ6YW55ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDAxO1xyXG5cclxuYXBwLnVzZShib2R5UGFyc2VyLmpzb24oKSk7XHJcbmFwcC51c2UoYm9keVBhcnNlci51cmxlbmNvZGVkKHsgZXh0ZW5kZWQ6IGZhbHNlIH0pKTtcclxuYXBwLnVzZShcIi9hcGkvbGVhdmVcIiwgYXBpUm91dGVzLmxlYXZlQXBpUm91dGVzLnJvdXRlcik7XHJcbmFwcC51c2UoXCIvYXBpL3VzZXJcIiwgYXBpUm91dGVzLnVzZXJBcGlSb3V0ZXMucm91dGVyKTtcclxuXHJcbmFwcC5nZXQoXCIvXCIsIChyZXE6UmVxdWVzdCwgcmVzOlJlc3BvbnNlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5zZW5kKFwiV2VsY29tZSB0byBiZXR0ZXIgbGVhdmUgYXBwXCIpO1xyXG59KTtcclxuXHJcbi8vIHNlcnZlIHRoZSBhcHBsaWNhdGlvbiBhdCB0aGUgZ2l2ZW4gcG9ydFxyXG5hcHAubGlzdGVuKHBvcnQsICgpID0+IHtcclxuICAgIC8vIHN1Y2Nlc3MgY2FsbGJhY2tcclxuICAgIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgYXQgaHR0cDovL2xvY2FsaG9zdDoke3BvcnR9L2ApO1xyXG59KTtcclxuXHJcbn0pLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKFwiRXJyb3I6IFwiK2Vycm9yKSk7Il19