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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhdmVUeXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbW9kZWxzL2xlYXZlVHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHVDQUF1QztBQUN2QyxtQ0FBaUU7QUFFakUsZUFBZTtBQUVmO0lBREE7UUFHSSxPQUFFLEdBQVcsQ0FBQyxDQUFDO1FBR2YsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUdsQixnQkFBVyxHQUFXLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBUEc7UUFEQyxnQ0FBc0IsRUFBRTs7eUNBQ1Y7SUFHZjtRQURDLGdCQUFNLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7MkNBQ3RCO0lBR2xCO1FBREMsZ0JBQU0sQ0FBQyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDOztrREFDaEI7SUFSaEIsU0FBUztRQURyQixnQkFBTSxFQUFFO09BQ0ksU0FBUyxDQVNyQjtJQUFELGdCQUFDO0NBQUEsQUFURCxJQVNDO0FBVFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbGlicmFyaWVzIGFuZCBkZXBlbmRlbmNpZXNcclxuaW1wb3J0IHsgRW50aXR5LCBDb2x1bW4sIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5cclxuLy8gbGVhdmUgRW50aXR5XHJcbkBFbnRpdHkoKVxyXG5leHBvcnQgY2xhc3MgTGVhdmVUeXBlIHtcclxuICAgIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcclxuICAgIGlkOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIEBDb2x1bW4oeyB0eXBlOiBcInZhcmNoYXJcIiwgbGVuZ3RoOiA1MCB9KVxyXG4gICAgbmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBAQ29sdW1uKHsgdHlwZTogXCJ2YXJjaGFyXCIsIGxlbmd0aDogMTUwIH0pXHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nID0gXCJcIjtcclxufVxyXG4iXX0=