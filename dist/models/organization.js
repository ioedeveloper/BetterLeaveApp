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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL29yZ2FuaXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2QyxtQ0FBNEU7QUFDNUUsaUNBQWdDO0FBRWhDOztHQUVHO0FBRUg7SUFEQTtRQUdJLE9BQUUsR0FBVyxDQUFDLENBQUM7UUFHZixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBR2xCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFHckIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFHekIsVUFBSyxHQUFZLElBQUksS0FBSyxFQUFTLENBQUM7SUFDeEMsQ0FBQztJQWJHO1FBREMsZ0NBQXNCLEVBQUU7OzRDQUNWO0lBR2Y7UUFEQyxnQkFBTSxFQUFFOzs4Q0FDUztJQUdsQjtRQURDLGdCQUFNLEVBQUU7O2lEQUNZO0lBR3JCO1FBREMsZ0JBQU0sRUFBRTs7cURBQ2dCO0lBR3pCO1FBREMsbUJBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLGFBQUssRUFBTCxDQUFLLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsWUFBWSxFQUFsQixDQUFrQixDQUFDOzsrQ0FDbEI7SUFkM0IsWUFBWTtRQUR4QixnQkFBTSxFQUFFO09BQ0ksWUFBWSxDQWV4QjtJQUFELG1CQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbGlicmFyaWVzIGFuZCBkZXBlbmRlbmNpZXNcclxuaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIE9uZVRvTWFueSB9IGZyb20gXCJ0eXBlb3JtXCI7XHJcbmltcG9ydCB7IFN0YWZmIH0gZnJvbSBcIi4vc3RhZmZcIjtcclxuXHJcbi8qKlxyXG4gKiBPcmdhbmlzYXRpb24gRW50aXR5XHJcbiAqL1xyXG5ARW50aXR5KClcclxuZXhwb3J0IGNsYXNzIE9yZ2FuaXphdGlvbiB7XHJcbiAgICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXHJcbiAgICBpZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBAQ29sdW1uKClcclxuICAgIG5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgQENvbHVtbigpXHJcbiAgICBhZGRyZXNzOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBDb2x1bW4oKVxyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgQE9uZVRvTWFueSh0eXBlID0+IFN0YWZmLCBzdGFmZiA9PiBzdGFmZi5vcmdhbml6YXRpb24pXHJcbiAgICBzdGFmZjogU3RhZmZbXSA9IG5ldyBBcnJheTxTdGFmZj4oKTtcclxufVxyXG4iXX0=