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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmVTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvbGVhdmVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXVDO0FBQ3ZDLHVEQUFzRDtBQUN0RCx5Q0FBc0M7QUFFdEM7O0dBRUc7QUFDSDtJQUdJO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLG1DQUFnQixFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVNLHdDQUFpQixHQUF4QixVQUF5QixZQUFvQjtRQUN6QyxJQUFJLFFBQVEsR0FBVSxJQUFJLGFBQUssRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDTCxtQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbGlicmFyaWVzIGFuZCBkZXBlbmRlbmNpZXNcclxuaW1wb3J0IHsgTGVhdmVEYXRhU2VydmljZSB9IGZyb20gXCIuL2xlYXZlRGF0YVNlcnZpY2VcIjtcclxuaW1wb3J0IHtMZWF2ZX0gZnJvbSBcIi4uL21vZGVscy9sZWF2ZVwiO1xyXG5cclxuLyoqXHJcbiAqIEhhbmRsZXMgYWxsIGxlYXZlIG9wZXJhdGlvbnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBMZWF2ZVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfZGF0YTogTGVhdmVEYXRhU2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9kYXRhID0gbmV3IExlYXZlRGF0YVNlcnZpY2UoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0TGVhdmVEYXlBbW91bnQoYW1vdW50b2ZkYXlzOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbmV3bGVhdmU6IExlYXZlID0gbmV3IExlYXZlKCk7XHJcbiAgICAgICAgdGhpcy5fZGF0YS5hcHBseUZvckxlYXZlKG5ld2xlYXZlKTtcclxuICAgIH1cclxufVxyXG4iXX0=