"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries and dependencies
var staff_1 = require("../models/staff");
var typeorm_1 = require("typeorm");
var Role_1 = require("../models/Role");
/**
 * Handles a staff data access operations
 */
var StaffDataService = /** @class */ (function () {
    function StaffDataService() {
        this._db = typeorm_1.getConnection().getRepository(staff_1.Staff);
    }
    /**
     * addNewStaff
     */
    StaffDataService.prototype.addNewStaff = function (staffData) {
        var staff = new staff_1.Staff();
        staff.firstname = staffData.firstname;
        staff.lastname = staffData.lastname;
        staff.middlename = staffData.middlename;
        var role = new Role_1.Role();
        role.roleName = "HR";
        staff.role = role;
        var newstaff = this._db.create(staff);
        return newstaff;
    };
    return StaffDataService;
}());
exports.StaffDataService = StaffDataService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmZEYXRhU2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NlcnZpY2VzL3N0YWZmRGF0YVNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx1Q0FBdUM7QUFDdkMseUNBQXNDO0FBQ3RDLG1DQUErRTtBQUUvRSx1Q0FBc0M7QUFFdEM7O0dBRUc7QUFDSDtJQUdJO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyx1QkFBYSxFQUFFLENBQUMsYUFBYSxDQUFDLGFBQUssQ0FBQyxDQUFDO0lBRXBELENBQUM7SUFFRDs7T0FFRztJQUNJLHNDQUFXLEdBQWxCLFVBQW1CLFNBQXlCO1FBQ3hDLElBQUksS0FBSyxHQUFVLElBQUksYUFBSyxFQUFFLENBQUM7UUFFL0IsS0FBSyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLFFBQVEsQ0FBQztRQUNwQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxVQUFVLENBQUM7UUFDeEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxXQUFJLEVBQUUsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztRQUNyQixLQUFLLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUVsQixJQUFNLFFBQVEsR0FBVSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQyxPQUFPLFFBQVEsQ0FBQztJQUNwQixDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQUFDLEFBekJELElBeUJDO0FBekJZLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBsaWJyYXJpZXMgYW5kIGRlcGVuZGVuY2llc1xyXG5pbXBvcnQge1N0YWZmfSBmcm9tIFwiLi4vbW9kZWxzL3N0YWZmXCI7XHJcbmltcG9ydCB7IFJlcG9zaXRvcnksIGdldFJlcG9zaXRvcnksIENvbm5lY3Rpb24sIGdldENvbm5lY3Rpb24gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgeyBTdGFmZlZpZXdNb2RlbCB9IGZyb20gXCIuLi92aWV3X21vZGVscy9zdGFmZlZpZXdNb2RlbFwiO1xyXG5pbXBvcnQgeyBSb2xlIH0gZnJvbSBcIi4uL21vZGVscy9Sb2xlXCI7XHJcblxyXG4vKipcclxuICogSGFuZGxlcyBhIHN0YWZmIGRhdGEgYWNjZXNzIG9wZXJhdGlvbnNcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdGFmZkRhdGFTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX2RiOiBSZXBvc2l0b3J5PFN0YWZmPjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLl9kYiA9IGdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KFN0YWZmKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGROZXdTdGFmZlxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRkTmV3U3RhZmYoc3RhZmZEYXRhOiBTdGFmZlZpZXdNb2RlbCk6IFN0YWZmIHtcclxuICAgICAgICBsZXQgc3RhZmY6IFN0YWZmID0gbmV3IFN0YWZmKCk7XHJcblxyXG4gICAgICAgIHN0YWZmLmZpcnN0bmFtZSA9IHN0YWZmRGF0YS5maXJzdG5hbWU7XHJcbiAgICAgICAgc3RhZmYubGFzdG5hbWUgPSBzdGFmZkRhdGEubGFzdG5hbWU7XHJcbiAgICAgICAgc3RhZmYubWlkZGxlbmFtZSA9IHN0YWZmRGF0YS5taWRkbGVuYW1lO1xyXG4gICAgICAgIGxldCByb2xlOiBSb2xlID0gbmV3IFJvbGUoKTtcclxuICAgICAgICByb2xlLnJvbGVOYW1lID0gXCJIUlwiO1xyXG4gICAgICAgIHN0YWZmLnJvbGUgPSByb2xlO1xyXG5cclxuICAgICAgICBjb25zdCBuZXdzdGFmZjogU3RhZmYgPSB0aGlzLl9kYi5jcmVhdGUoc3RhZmYpO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3c3RhZmY7XHJcbiAgICB9XHJcbn1cclxuIl19