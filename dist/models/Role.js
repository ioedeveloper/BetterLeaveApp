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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9sZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21vZGVscy9Sb2xlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsbUNBQXdFO0FBR3hFO0lBREE7UUFHSSxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBR25CLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFHdEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQVBHO1FBREMsZ0NBQXNCLEVBQUU7O3dDQUNOO0lBR25CO1FBREMsZ0JBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7OzBDQUMvQjtJQUd0QjtRQURDLGdCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUMsQ0FBQzs7NkNBQ2hCO0lBUmhCLElBQUk7UUFEaEIsZ0JBQU0sRUFBRTtPQUNJLElBQUksQ0FTaEI7SUFBRCxXQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksb0JBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIEluZGV4LCBDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBSb2xlIHtcclxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcclxuICAgIHJvbGVJZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAQ29sdW1uKHt0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiA1MCwgdW5pcXVlOiB0cnVlIH0pXHJcbiAgICByb2xlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBAQ29sdW1uKHt0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiBcIjEwMFwifSlcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBcIlwiO1xyXG59XHJcbiJdfQ==