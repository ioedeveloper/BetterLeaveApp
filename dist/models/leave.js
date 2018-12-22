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
//# sourceMappingURL=leave.js.map