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
var organization_1 = require("./organization");
var Role_1 = require("./Role");
var leave_1 = require("./leave");
var Staff = /** @class */ (function () {
    function Staff() {
        this.staffId = 0;
        this.organization = new organization_1.Organization;
        this.firstname = "";
        this.lastname = "";
        this.middlename = "";
        this.birthdate = new Date;
        this.role = new Role_1.Role;
        this.leave = new Array();
        this.staffIdNumber = "";
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Staff.prototype, "staffId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return organization_1.Organization; }, function (organization) { return organization.staff; }),
        __metadata("design:type", organization_1.Organization)
    ], Staff.prototype, "organization", void 0);
    __decorate([
        typeorm_1.Index(["firstname", "lastname"]),
        typeorm_1.Column({ type: "varchar", length: 50 }),
        __metadata("design:type", String)
    ], Staff.prototype, "firstname", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 }),
        __metadata("design:type", String)
    ], Staff.prototype, "lastname", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 }),
        __metadata("design:type", String)
    ], Staff.prototype, "middlename", void 0);
    __decorate([
        typeorm_1.Column({ type: "date" }),
        __metadata("design:type", Date)
    ], Staff.prototype, "birthdate", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Role_1.Role; }),
        typeorm_1.JoinColumn(),
        __metadata("design:type", Role_1.Role)
    ], Staff.prototype, "role", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return leave_1.Leave; }, function (leave) { return leave.staff; }),
        __metadata("design:type", Array)
    ], Staff.prototype, "leave", void 0);
    __decorate([
        typeorm_1.Index(["staffIdNumber"]),
        typeorm_1.Column({ type: "varchar", length: 15 }),
        __metadata("design:type", String)
    ], Staff.prototype, "staffIdNumber", void 0);
    Staff = __decorate([
        typeorm_1.Entity()
    ], Staff);
    return Staff;
}());
exports.Staff = Staff;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvc3RhZmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBb0g7QUFDcEgsK0NBQThDO0FBQzlDLCtCQUE4QjtBQUM5QixpQ0FBZ0M7QUFHaEM7SUFEQTtRQUdJLFlBQU8sR0FBVyxDQUFDLENBQUM7UUFHcEIsaUJBQVksR0FBaUIsSUFBSSwyQkFBWSxDQUFDO1FBSTlDLGNBQVMsR0FBVyxFQUFFLENBQUM7UUFHdkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBR3hCLGNBQVMsR0FBUyxJQUFJLElBQUksQ0FBQztRQUkzQixTQUFJLEdBQVMsSUFBSSxXQUFJLENBQUM7UUFHdEIsVUFBSyxHQUFpQixJQUFJLEtBQUssRUFBUyxDQUFDO1FBSXpDLGtCQUFhLEdBQVcsRUFBRSxDQUFDO0lBRy9CLENBQUM7SUE5Qkc7UUFEQyxnQ0FBc0IsRUFBRTs7MENBQ0w7SUFHcEI7UUFEQyxtQkFBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsMkJBQVksRUFBWixDQUFZLEVBQUUsVUFBQSxZQUFZLElBQUksT0FBQSxZQUFZLENBQUMsS0FBSyxFQUFsQixDQUFrQixDQUFDO2tDQUN0RCwyQkFBWTsrQ0FBb0I7SUFJOUM7UUFGQyxlQUFLLENBQUMsQ0FBQyxXQUFXLEVBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOzs0Q0FDakI7SUFHdkI7UUFEQyxnQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7OzJDQUNqQjtJQUd0QjtRQURDLGdCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7NkNBQ2Y7SUFHeEI7UUFEQyxnQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDO2tDQUNiLElBQUk7NENBQVk7SUFJM0I7UUFGQyxrQkFBUSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsV0FBSSxFQUFKLENBQUksQ0FBQztRQUN0QixvQkFBVSxFQUFFO2tDQUNQLFdBQUk7dUNBQVk7SUFHdEI7UUFEQyxtQkFBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsYUFBSyxFQUFMLENBQUssRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUssQ0FBQyxLQUFLLEVBQVgsQ0FBVyxDQUFDO2tDQUN4QyxLQUFLO3dDQUE2QjtJQUl6QztRQUZDLGVBQUssQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3hCLGdCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7Z0RBQ1o7SUE3QmxCLEtBQUs7UUFEakIsZ0JBQU0sRUFBRTtPQUNJLEtBQUssQ0FnQ2pCO0lBQUQsWUFBQztDQUFBLEFBaENELElBZ0NDO0FBaENZLHNCQUFLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIE1hbnlUb09uZSwgSW5kZXgsIE9uZVRvT25lLCBKb2luQ29sdW1uLCBPbmVUb01hbnkgfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgeyBPcmdhbml6YXRpb24gfSBmcm9tIFwiLi9vcmdhbml6YXRpb25cIjtcclxuaW1wb3J0IHsgUm9sZSB9IGZyb20gXCIuL1JvbGVcIjtcclxuaW1wb3J0IHsgTGVhdmUgfSBmcm9tIFwiLi9sZWF2ZVwiO1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBTdGFmZiB7XHJcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXHJcbiAgICBzdGFmZklkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBNYW55VG9PbmUodHlwZSA9PiBPcmdhbml6YXRpb24sIG9yZ2FuaXphdGlvbiA9PiBvcmdhbml6YXRpb24uc3RhZmYpXHJcbiAgICBvcmdhbml6YXRpb246IE9yZ2FuaXphdGlvbiA9IG5ldyBPcmdhbml6YXRpb247XHJcblxyXG4gICAgQEluZGV4KFtcImZpcnN0bmFtZVwiLFwibGFzdG5hbWVcIl0pXHJcbiAgICBAQ29sdW1uKHsgdHlwZTogXCJ2YXJjaGFyXCIsIGxlbmd0aDogNTAgfSlcclxuICAgIGZpcnN0bmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBAQ29sdW1uKHt0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiA1MCB9KVxyXG4gICAgbGFzdG5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgQENvbHVtbih7dHlwZTogXCJ2YXJjaGFyXCIsIGxlbmd0aDogNTAgfSlcclxuICAgIG1pZGRsZW5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgQENvbHVtbih7dHlwZTogXCJkYXRlXCIgfSlcclxuICAgIGJpcnRoZGF0ZTogRGF0ZSA9IG5ldyBEYXRlO1xyXG5cclxuICAgIEBPbmVUb09uZSh0eXBlID0+IFJvbGUpXHJcbiAgICBASm9pbkNvbHVtbigpXHJcbiAgICByb2xlOiBSb2xlID0gbmV3IFJvbGU7XHJcblxyXG4gICAgQE9uZVRvTWFueSh0eXBlID0+IExlYXZlLCBsZWF2ZSA9PiBsZWF2ZS5zdGFmZilcclxuICAgIGxlYXZlOiBBcnJheTxMZWF2ZT4gPSBuZXcgQXJyYXk8TGVhdmU+KCk7XHJcblxyXG4gICAgQEluZGV4KFtcInN0YWZmSWROdW1iZXJcIl0pXHJcbiAgICBAQ29sdW1uKHt0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiAxNSB9KVxyXG4gICAgc3RhZmZJZE51bWJlcjogc3RyaW5nID0gXCJcIjtcclxuXHJcblxyXG59XHJcbiJdfQ==