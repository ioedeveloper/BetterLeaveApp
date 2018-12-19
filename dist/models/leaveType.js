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
// leave Entity
var LeaveType = /** @class */ (function () {
    function LeaveType() {
        this.id = 0;
        this.name = "";
        this.description = "";
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], LeaveType.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 }),
        __metadata("design:type", String)
    ], LeaveType.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 150 }),
        __metadata("design:type", String)
    ], LeaveType.prototype, "description", void 0);
    LeaveType = __decorate([
        typeorm_1.Entity()
    ], LeaveType);
    return LeaveType;
}());
exports.LeaveType = LeaveType;
//# sourceMappingURL=leaveType.js.map