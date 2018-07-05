"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
// importing libraries and dependencies
var typeorm_1 = require("typeorm");
var staff_1 = require("../models/staff");
var leaveType_1 = require("../models/leaveType");
/**
 * Leave Entity
 */
var Leave = /** @class */ (function () {
    function Leave() {
        this.id = 0;
        this.leaveDays = 0;
        this.casualLeaveDays = 0;
        this.approval = false;
        this.endorsedBy = "";
        this.approvedBy = "";
        this.staff = new staff_1.Staff();
        this.leaveType = new leaveType_1.LeaveType();
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Leave.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Leave.prototype, "leaveDays", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Leave.prototype, "casualLeaveDays", void 0);
    __decorate([
        typeorm_1.Column({ type: "boolean" }),
        __metadata("design:type", Boolean)
    ], Leave.prototype, "approval", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 }),
        __metadata("design:type", String)
    ], Leave.prototype, "endorsedBy", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 }),
        __metadata("design:type", String)
    ], Leave.prototype, "approvedBy", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return staff_1.Staff; }, function (staff) { return staff.leave; }),
        __metadata("design:type", staff_1.Staff)
    ], Leave.prototype, "staff", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return leaveType_1.LeaveType; }),
        __metadata("design:type", leaveType_1.LeaveType)
    ], Leave.prototype, "leaveType", void 0);
    Leave = __decorate([
        typeorm_1.Entity()
    ], Leave);
    return Leave;
}());
exports.Leave = Leave;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvbGVhdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFDdkMsbUNBQTZGO0FBQzdGLHlDQUF3QztBQUN4QyxpREFBZ0Q7QUFFaEQ7O0dBRUc7QUFFSDtJQURBO1FBR0ksT0FBRSxHQUFXLENBQUMsQ0FBQztRQUdmLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFHdEIsb0JBQWUsR0FBVyxDQUFDLENBQUU7UUFHN0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBR3hCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFHeEIsVUFBSyxHQUFVLElBQUksYUFBSyxFQUFFLENBQUM7UUFHM0IsY0FBUyxHQUFjLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUF0Qkc7UUFEQyxnQ0FBc0IsRUFBRTs7cUNBQ1Y7SUFHZjtRQURDLGdCQUFNLEVBQUU7OzRDQUNhO0lBR3RCO1FBREMsZ0JBQU0sRUFBRTs7a0RBQ29CO0lBRzdCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQzs7MkNBQ0Q7SUFHMUI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7OzZDQUNoQjtJQUd4QjtRQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7NkNBQ2hCO0lBR3hCO1FBREMsbUJBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLGFBQUssRUFBTCxDQUFLLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQztrQ0FDeEMsYUFBSzt3Q0FBZTtJQUczQjtRQURDLGtCQUFRLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxxQkFBUyxFQUFULENBQVMsQ0FBQztrQ0FDakIscUJBQVM7NENBQW1CO0lBdkI5QixLQUFLO1FBRGpCLGdCQUFNLEVBQUU7T0FDSSxLQUFLLENBd0JqQjtJQUFELFlBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBsaWJyYXJpZXMgYW5kIGRlcGVuZGVuY2llc1xyXG5pbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIEluZGV4LCBNYW55VG9PbmUsIENvbHVtbiwgT25lVG9PbmUgfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgeyBTdGFmZiB9IGZyb20gXCIuLi9tb2RlbHMvc3RhZmZcIjtcclxuaW1wb3J0IHsgTGVhdmVUeXBlIH0gZnJvbSBcIi4uL21vZGVscy9sZWF2ZVR5cGVcIjtcclxuXHJcbi8qKlxyXG4gKiBMZWF2ZSBFbnRpdHlcclxuICovXHJcbkBFbnRpdHkoKVxyXG5leHBvcnQgY2xhc3MgTGVhdmUge1xyXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gICAgaWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQENvbHVtbigpXHJcbiAgICBsZWF2ZURheXM6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQENvbHVtbigpXHJcbiAgICBjYXN1YWxMZWF2ZURheXM6IG51bWJlciA9IDAgO1xyXG5cclxuICAgIEBDb2x1bW4oeyB0eXBlOiBcImJvb2xlYW5cIn0pXHJcbiAgICBhcHByb3ZhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIEBDb2x1bW4oeyB0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiA1MCB9KVxyXG4gICAgZW5kb3JzZWRCeTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBAQ29sdW1uKHsgdHlwZTogXCJ2YXJjaGFyXCIsIGxlbmd0aDogNTAgfSlcclxuICAgIGFwcHJvdmVkQnk6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgQE1hbnlUb09uZSh0eXBlID0+IFN0YWZmLCBzdGFmZiA9PiBzdGFmZi5sZWF2ZSlcclxuICAgIHN0YWZmOiBTdGFmZiA9IG5ldyBTdGFmZigpO1xyXG5cclxuICAgIEBPbmVUb09uZSh0eXBlID0+IExlYXZlVHlwZSlcclxuICAgIGxlYXZlVHlwZTogTGVhdmVUeXBlID0gbmV3IExlYXZlVHlwZSgpO1xyXG59XHJcbiJdfQ==