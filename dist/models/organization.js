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
var staff_1 = require("./staff");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JnYW5pemF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL29yZ2FuaXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUE0RTtBQUM1RSxpQ0FBZ0M7QUFHaEM7SUFEQTtRQUdJLE9BQUUsR0FBVyxDQUFDLENBQUM7UUFHZixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBR2xCLFlBQU8sR0FBVyxFQUFFLENBQUM7UUFHckIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7UUFHekIsVUFBSyxHQUFZLElBQUksS0FBSyxFQUFTLENBQUM7SUFDeEMsQ0FBQztJQWJHO1FBREMsZ0NBQXNCLEVBQUU7OzRDQUNWO0lBR2Y7UUFEQyxnQkFBTSxFQUFFOzs4Q0FDUztJQUdsQjtRQURDLGdCQUFNLEVBQUU7O2lEQUNZO0lBR3JCO1FBREMsZ0JBQU0sRUFBRTs7cURBQ2dCO0lBR3pCO1FBREMsbUJBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLGFBQUssRUFBTCxDQUFLLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsWUFBWSxFQUFsQixDQUFrQixDQUFDOzsrQ0FDbEI7SUFkM0IsWUFBWTtRQUR4QixnQkFBTSxFQUFFO09BQ0ksWUFBWSxDQWV4QjtJQUFELG1CQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sIENvbHVtbiwgT25lVG9NYW55IH0gZnJvbSBcInR5cGVvcm1cIjtcclxuaW1wb3J0IHsgU3RhZmYgfSBmcm9tIFwiLi9zdGFmZlwiO1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBPcmdhbml6YXRpb24ge1xyXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gICAgaWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQENvbHVtbigpXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBDb2x1bW4oKVxyXG4gICAgYWRkcmVzczogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBAQ29sdW1uKClcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBPbmVUb01hbnkodHlwZSA9PiBTdGFmZiwgc3RhZmYgPT4gc3RhZmYub3JnYW5pemF0aW9uKVxyXG4gICAgc3RhZmY6IFN0YWZmW10gPSBuZXcgQXJyYXk8U3RhZmY+KCk7XHJcbn1cclxuIl19