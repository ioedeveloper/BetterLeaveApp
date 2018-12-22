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
var staff_1 = require("./staff");
/**
 * Organisation Entity
 */
var Organization = /** @class */ (function () {
    function Organization() {
        this.id = 0;
        this.name = "";
        this.address = "";
        this.description = "";
        this.staff = new Array();
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Organization.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Organization.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Organization.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Organization.prototype, "description", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return staff_1.Staff; }, function (staff) { return staff.organization; }),
        __metadata("design:type", Array)
    ], Organization.prototype, "staff", void 0);
    Organization = __decorate([
        typeorm_1.Entity()
    ], Organization);
    return Organization;
}());
exports.Organization = Organization;
//# sourceMappingURL=organization.js.map