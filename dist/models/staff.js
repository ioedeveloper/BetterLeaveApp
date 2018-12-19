"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// tslint:disable-next-line:max-line-length
var typeorm_1 = require("typeorm");
var organization_1 = require("./organization");
var Role_1 = require("./Role");
var leave_1 = require("./leave");
// staff Entity
var Staff = /** @class */ (function (_super) {
    __extends(Staff, _super);
    function Staff() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.organization = new organization_1.Organization;
        _this.firstname = "";
        _this.lastname = "";
        _this.email = "";
        _this.password = "";
        _this.role = new Role_1.Role;
        _this.leave = new Array();
        _this.staffIdNumber = "";
        return _this;
    }
    __decorate([
        typeorm_1.ObjectIdColumn(),
        __metadata("design:type", typeorm_1.ObjectID)
    ], Staff.prototype, "_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return organization_1.Organization; }, function (organization) { return organization.staff; }),
        __metadata("design:type", organization_1.Organization)
    ], Staff.prototype, "organization", void 0);
    __decorate([
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
    ], Staff.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50 }),
        __metadata("design:type", String)
    ], Staff.prototype, "password", void 0);
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
        typeorm_1.Index({ unique: true }),
        typeorm_1.Column({ type: "varchar", length: 15 }),
        __metadata("design:type", String)
    ], Staff.prototype, "staffIdNumber", void 0);
    Staff = __decorate([
        typeorm_1.Entity()
    ], Staff);
    return Staff;
}(typeorm_1.BaseEntity));
exports.Staff = Staff;
//# sourceMappingURL=staff.js.map