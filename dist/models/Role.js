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
// role Entity
var Role = /** @class */ (function () {
    function Role() {
        this.roleId = 0;
        this.roleName = "";
        this.description = "";
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Role.prototype, "roleId", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: 50, unique: true }),
        __metadata("design:type", String)
    ], Role.prototype, "roleName", void 0);
    __decorate([
        typeorm_1.Column({ type: "varchar", length: "100" }),
        __metadata("design:type", String)
    ], Role.prototype, "description", void 0);
    Role = __decorate([
        typeorm_1.Entity()
    ], Role);
    return Role;
}());
exports.Role = Role;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9Sb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXVDO0FBQ3ZDLG1DQUF3RTtBQUV4RSxjQUFjO0FBRWQ7SUFEQTtRQUdJLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFHbkIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUd0QixnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBUEc7UUFEQyxnQ0FBc0IsRUFBRTs7d0NBQ047SUFHbkI7UUFEQyxnQkFBTSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQzs7MENBQy9CO0lBR3RCO1FBREMsZ0JBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBQyxDQUFDOzs2Q0FDaEI7SUFSaEIsSUFBSTtRQURoQixnQkFBTSxFQUFFO09BQ0ksSUFBSSxDQVNoQjtJQUFELFdBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydGluZyBsaWJyYXJpZXMgYW5kIGRlcGVuZGVuY2llc1xyXG5pbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIEluZGV4LCBDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuLy8gcm9sZSBFbnRpdHlcclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBSb2xlIHtcclxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcclxuICAgIHJvbGVJZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAQ29sdW1uKHt0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiA1MCwgdW5pcXVlOiB0cnVlIH0pXHJcbiAgICByb2xlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBAQ29sdW1uKHt0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiBcIjEwMFwifSlcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBcIlwiO1xyXG59XHJcbiJdfQ==