"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries and dependencies
var staffDataService_1 = require("./staffDataService");
var staff_1 = require("../models/staff");
var Role_1 = require("../models/Role");
/**
 * Handles all leave operations
 */
var StaffService = /** @class */ (function () {
    function StaffService() {
        this._data = new staffDataService_1.StaffDataService();
    }
    StaffService.prototype.addNewStaff = function (staffData) {
        var staff = new staff_1.Staff();
        staff.firstname = staffData.firstname;
        staff.lastname = staffData.lastname;
        staff.middlename = staffData.middlename;
        staff.birthdate = staffData.birthdate;
        var role = new Role_1.Role();
        role.roleName = "HR";
        staff.role = role;
        var newstaff = this._data.saveNewStaff(staff);
        return newstaff;
    };
    return StaffService;
}());
exports.StaffService = StaffService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmZTZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc2VydmljZXMvc3RhZmZTZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsdUNBQXVDO0FBQ3ZDLHVEQUFzRDtBQUV0RCx5Q0FBc0M7QUFDdEMsdUNBQW9DO0FBRXBDOztHQUVHO0FBQ0g7SUFHSTtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxtQ0FBZ0IsRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFTSxrQ0FBVyxHQUFsQixVQUFtQixTQUF3QjtRQUN2QyxJQUFJLEtBQUssR0FBVSxJQUFJLGFBQUssRUFBRSxDQUFDO1FBRS9CLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUN0QyxLQUFLLENBQUMsUUFBUSxHQUFHLFNBQVMsQ0FBQyxRQUFRLENBQUM7UUFDcEMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsVUFBVSxDQUFDO1FBQ3hDLEtBQUssQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztRQUN0QyxJQUFJLElBQUksR0FBUyxJQUFJLFdBQUksRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ3JCLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLElBQUksUUFBUSxHQUFrQixJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM3RCxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLEFBcEJELElBb0JDO0FBcEJZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0aW5nIGxpYnJhcmllcyBhbmQgZGVwZW5kZW5jaWVzXHJcbmltcG9ydCB7IFN0YWZmRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi9zdGFmZkRhdGFTZXJ2aWNlXCI7XHJcbmltcG9ydCB7U3RhZmZWaWV3TW9kZWx9IGZyb20gXCIuLi92aWV3X21vZGVscy9zdGFmZlZpZXdNb2RlbFwiO1xyXG5pbXBvcnQge1N0YWZmfSBmcm9tIFwiLi4vbW9kZWxzL3N0YWZmXCI7XHJcbmltcG9ydCB7Um9sZX0gZnJvbSBcIi4uL21vZGVscy9Sb2xlXCI7XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBhbGwgbGVhdmUgb3BlcmF0aW9uc1xyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFN0YWZmU2VydmljZSB7XHJcbiAgICBwcml2YXRlIF9kYXRhOiBTdGFmZkRhdGFTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuX2RhdGEgPSBuZXcgU3RhZmZEYXRhU2VydmljZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGROZXdTdGFmZihzdGFmZkRhdGE6U3RhZmZWaWV3TW9kZWwpOiBQcm9taXNlPFN0YWZmPiB7XHJcbiAgICAgICAgbGV0IHN0YWZmOiBTdGFmZiA9IG5ldyBTdGFmZigpO1xyXG5cclxuICAgICAgICBzdGFmZi5maXJzdG5hbWUgPSBzdGFmZkRhdGEuZmlyc3RuYW1lO1xyXG4gICAgICAgIHN0YWZmLmxhc3RuYW1lID0gc3RhZmZEYXRhLmxhc3RuYW1lO1xyXG4gICAgICAgIHN0YWZmLm1pZGRsZW5hbWUgPSBzdGFmZkRhdGEubWlkZGxlbmFtZTtcclxuICAgICAgICBzdGFmZi5iaXJ0aGRhdGUgPSBzdGFmZkRhdGEuYmlydGhkYXRlO1xyXG4gICAgICAgIGxldCByb2xlOiBSb2xlID0gbmV3IFJvbGUoKTtcclxuICAgICAgICByb2xlLnJvbGVOYW1lID0gXCJIUlwiO1xyXG4gICAgICAgIHN0YWZmLnJvbGUgPSByb2xlO1xyXG4gICAgICAgIGxldCBuZXdzdGFmZjpQcm9taXNlPFN0YWZmPiA9IHRoaXMuX2RhdGEuc2F2ZU5ld1N0YWZmKHN0YWZmKTtcclxuICAgICAgICByZXR1cm4gbmV3c3RhZmY7XHJcbiAgICB9XHJcbn1cclxuIl19