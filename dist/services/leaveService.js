"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries and dependencies
var leaveDataService_1 = require("./leaveDataService");
var leave_1 = require("../models/leave");
/**
 * Handles all leave operations
 */
var LeaveService = /** @class */ (function () {
    function LeaveService() {
        this._data = new leaveDataService_1.LeaveDataService();
    }
    LeaveService.prototype.setLeaveDayAmount = function (amountofdays) {
        var newleave = new leave_1.Leave();
        this._data.applyForLeave(newleave);
    };
    return LeaveService;
}());
exports.LeaveService = LeaveService;
//# sourceMappingURL=leaveService.js.map