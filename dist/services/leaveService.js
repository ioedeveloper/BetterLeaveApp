"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var leaveDataService_1 = require("./leaveDataService");
var leave_1 = require("../models/leave");
// leave configuration
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmVTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvbGVhdmVTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdURBQXNEO0FBQ3RELHlDQUFzQztBQUV0QyxzQkFBc0I7QUFDdEI7SUFHSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTSx3Q0FBaUIsR0FBeEIsVUFBeUIsWUFBb0I7UUFDekMsSUFBSSxRQUFRLEdBQVUsSUFBSSxhQUFLLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGVhdmVEYXRhU2VydmljZSB9IGZyb20gXCIuL2xlYXZlRGF0YVNlcnZpY2VcIjtcclxuaW1wb3J0IHtMZWF2ZX0gZnJvbSBcIi4uL21vZGVscy9sZWF2ZVwiO1xyXG5cclxuLy8gbGVhdmUgY29uZmlndXJhdGlvblxyXG5leHBvcnQgY2xhc3MgTGVhdmVTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2RhdGE6IExlYXZlRGF0YVNlcnZpY2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fZGF0YSA9IG5ldyBMZWF2ZURhdGFTZXJ2aWNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldExlYXZlRGF5QW1vdW50KGFtb3VudG9mZGF5czogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IG5ld2xlYXZlOiBMZWF2ZSA9IG5ldyBMZWF2ZSgpO1xyXG4gICAgICAgIHRoaXMuX2RhdGEuYXBwbHlGb3JMZWF2ZShuZXdsZWF2ZSk7XHJcbiAgICB9XHJcbn1cclxuIl19