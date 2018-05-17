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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmVUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL2xlYXZlVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG1DQUFpRTtBQUdqRTtJQURBO1FBR0ksT0FBRSxHQUFXLENBQUMsQ0FBQztRQUdmLFNBQUksR0FBVyxFQUFFLENBQUM7UUFHbEIsZ0JBQVcsR0FBVyxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQVBHO1FBREMsZ0NBQXNCLEVBQUU7O3lDQUNWO0lBR2Y7UUFEQyxnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7OzJDQUN0QjtJQUdsQjtRQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQzs7a0RBQ2hCO0lBUmhCLFNBQVM7UUFEckIsZ0JBQU0sRUFBRTtPQUNJLFNBQVMsQ0FTckI7SUFBRCxnQkFBQztDQUFBLEFBVEQsSUFTQztBQVRZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW50aXR5LCBDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuQEVudGl0eSgpXHJcbmV4cG9ydCBjbGFzcyBMZWF2ZVR5cGUge1xyXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gICAgaWQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgQENvbHVtbih7IHR5cGU6IFwidmFyY2hhclwiLCBsZW5ndGg6IDUwIH0pXHJcbiAgICBuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBDb2x1bW4oeyB0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiAxNTAgfSlcclxuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmcgPSBcIlwiO1xyXG59XHJcbiJdfQ==