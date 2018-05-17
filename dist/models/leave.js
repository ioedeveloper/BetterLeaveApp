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
var typeorm_1 = require("typeorm");
var staff_1 = require("../models/staff");
var leaveType_1 = require("../models/leaveType");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvbGVhdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBNkY7QUFDN0YseUNBQXdDO0FBQ3hDLGlEQUFnRDtBQUdoRDtJQURBO1FBR0ksT0FBRSxHQUFXLENBQUMsQ0FBQztRQUdmLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFHdEIsb0JBQWUsR0FBVyxDQUFDLENBQUU7UUFHN0IsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUcxQixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBR3hCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFHeEIsVUFBSyxHQUFVLElBQUksYUFBSyxFQUFFLENBQUM7UUFHM0IsY0FBUyxHQUFjLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUF0Qkc7UUFEQyxnQ0FBc0IsRUFBRTs7cUNBQ1Y7SUFHZjtRQURDLGdCQUFNLEVBQUU7OzRDQUNhO0lBR3RCO1FBREMsZ0JBQU0sRUFBRTs7a0RBQ29CO0lBRzdCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUMsQ0FBQzs7MkNBQ0Q7SUFHMUI7UUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7OzZDQUNoQjtJQUd4QjtRQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7NkNBQ2hCO0lBR3hCO1FBREMsbUJBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLGFBQUssRUFBTCxDQUFLLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxFQUFYLENBQVcsQ0FBQztrQ0FDeEMsYUFBSzt3Q0FBZTtJQUczQjtRQURDLGtCQUFRLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxxQkFBUyxFQUFULENBQVMsQ0FBQztrQ0FDakIscUJBQVM7NENBQW1CO0lBdkI5QixLQUFLO1FBRGpCLGdCQUFNLEVBQUU7T0FDSSxLQUFLLENBd0JqQjtJQUFELFlBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxzQkFBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudGl0eSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiwgSW5kZXgsIE1hbnlUb09uZSwgQ29sdW1uLCBPbmVUb09uZSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCB7IFN0YWZmIH0gZnJvbSBcIi4uL21vZGVscy9zdGFmZlwiO1xyXG5pbXBvcnQgeyBMZWF2ZVR5cGUgfSBmcm9tIFwiLi4vbW9kZWxzL2xlYXZlVHlwZVwiO1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBMZWF2ZSB7XHJcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXHJcbiAgICBpZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAQ29sdW1uKClcclxuICAgIGxlYXZlRGF5czogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAQ29sdW1uKClcclxuICAgIGNhc3VhbExlYXZlRGF5czogbnVtYmVyID0gMCA7XHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6IFwiYm9vbGVhblwifSlcclxuICAgIGFwcHJvdmFsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6IFwidmFyY2hhclwiLCBsZW5ndGg6IDUwIH0pXHJcbiAgICBlbmRvcnNlZEJ5OiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBDb2x1bW4oeyB0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiA1MCB9KVxyXG4gICAgYXBwcm92ZWRCeTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBATWFueVRvT25lKHR5cGUgPT4gU3RhZmYsIHN0YWZmID0+IHN0YWZmLmxlYXZlKVxyXG4gICAgc3RhZmY6IFN0YWZmID0gbmV3IFN0YWZmKCk7XHJcblxyXG4gICAgQE9uZVRvT25lKHR5cGUgPT4gTGVhdmVUeXBlKVxyXG4gICAgbGVhdmVUeXBlOiBMZWF2ZVR5cGUgPSBuZXcgTGVhdmVUeXBlKCk7XHJcbn1cclxuIl19