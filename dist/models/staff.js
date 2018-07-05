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
var organization_1 = require("./organization");
var Role_1 = require("./Role");
var leave_1 = require("./leave");
// staff Entity
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhZmYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9tb2RlbHMvc3RhZmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFDdkMsbUNBQW9IO0FBQ3BILCtDQUE4QztBQUM5QywrQkFBOEI7QUFDOUIsaUNBQWdDO0FBRWhDLGVBQWU7QUFFZjtJQURBO1FBR0ksWUFBTyxHQUFXLENBQUMsQ0FBQztRQUdwQixpQkFBWSxHQUFpQixJQUFJLDJCQUFZLENBQUM7UUFJOUMsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUd2QixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBR3RCLGVBQVUsR0FBVyxFQUFFLENBQUM7UUFHeEIsY0FBUyxHQUFTLElBQUksSUFBSSxDQUFDO1FBSTNCLFNBQUksR0FBUyxJQUFJLFdBQUksQ0FBQztRQUd0QixVQUFLLEdBQWlCLElBQUksS0FBSyxFQUFTLENBQUM7UUFJekMsa0JBQWEsR0FBVyxFQUFFLENBQUM7SUFHL0IsQ0FBQztJQTlCRztRQURDLGdDQUFzQixFQUFFOzswQ0FDTDtJQUdwQjtRQURDLG1CQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSwyQkFBWSxFQUFaLENBQVksRUFBRSxVQUFBLFlBQVksSUFBSSxPQUFBLFlBQVksQ0FBQyxLQUFLLEVBQWxCLENBQWtCLENBQUM7a0NBQ3RELDJCQUFZOytDQUFvQjtJQUk5QztRQUZDLGVBQUssQ0FBQyxDQUFDLFdBQVcsRUFBQyxVQUFVLENBQUMsQ0FBQztRQUMvQixnQkFBTSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLENBQUM7OzRDQUNqQjtJQUd2QjtRQURDLGdCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsQ0FBQzs7MkNBQ2pCO0lBR3RCO1FBREMsZ0JBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOzs2Q0FDZjtJQUd4QjtRQURDLGdCQUFNLENBQUMsRUFBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLENBQUM7a0NBQ2IsSUFBSTs0Q0FBWTtJQUkzQjtRQUZDLGtCQUFRLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxXQUFJLEVBQUosQ0FBSSxDQUFDO1FBQ3RCLG9CQUFVLEVBQUU7a0NBQ1AsV0FBSTt1Q0FBWTtJQUd0QjtRQURDLG1CQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxhQUFLLEVBQUwsQ0FBSyxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxDQUFDLEtBQUssRUFBWCxDQUFXLENBQUM7a0NBQ3hDLEtBQUs7d0NBQTZCO0lBSXpDO1FBRkMsZUFBSyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDeEIsZ0JBQU0sQ0FBQyxFQUFDLElBQUksRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxDQUFDOztnREFDWjtJQTdCbEIsS0FBSztRQURqQixnQkFBTSxFQUFFO09BQ0ksS0FBSyxDQWdDakI7SUFBRCxZQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7QUFoQ1ksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnRpbmcgbGlicmFyaWVzIGFuZCBkZXBlbmRlbmNpZXNcclxuaW1wb3J0IHsgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLCBDb2x1bW4sIE1hbnlUb09uZSwgSW5kZXgsIE9uZVRvT25lLCBKb2luQ29sdW1uLCBPbmVUb01hbnkgfSBmcm9tIFwidHlwZW9ybVwiO1xyXG5pbXBvcnQgeyBPcmdhbml6YXRpb24gfSBmcm9tIFwiLi9vcmdhbml6YXRpb25cIjtcclxuaW1wb3J0IHsgUm9sZSB9IGZyb20gXCIuL1JvbGVcIjtcclxuaW1wb3J0IHsgTGVhdmUgfSBmcm9tIFwiLi9sZWF2ZVwiO1xyXG5cclxuLy8gc3RhZmYgRW50aXR5XHJcbkBFbnRpdHkoKVxyXG5leHBvcnQgY2xhc3MgU3RhZmYge1xyXG4gICAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxyXG4gICAgc3RhZmZJZDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBATWFueVRvT25lKHR5cGUgPT4gT3JnYW5pemF0aW9uLCBvcmdhbml6YXRpb24gPT4gb3JnYW5pemF0aW9uLnN0YWZmKVxyXG4gICAgb3JnYW5pemF0aW9uOiBPcmdhbml6YXRpb24gPSBuZXcgT3JnYW5pemF0aW9uO1xyXG5cclxuICAgIEBJbmRleChbXCJmaXJzdG5hbWVcIixcImxhc3RuYW1lXCJdKVxyXG4gICAgQENvbHVtbih7IHR5cGU6IFwidmFyY2hhclwiLCBsZW5ndGg6IDUwIH0pXHJcbiAgICBmaXJzdG5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgQENvbHVtbih7dHlwZTogXCJ2YXJjaGFyXCIsIGxlbmd0aDogNTAgfSlcclxuICAgIGxhc3RuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBDb2x1bW4oe3R5cGU6IFwidmFyY2hhclwiLCBsZW5ndGg6IDUwIH0pXHJcbiAgICBtaWRkbGVuYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIEBDb2x1bW4oe3R5cGU6IFwiZGF0ZVwiIH0pXHJcbiAgICBiaXJ0aGRhdGU6IERhdGUgPSBuZXcgRGF0ZTtcclxuXHJcbiAgICBAT25lVG9PbmUodHlwZSA9PiBSb2xlKVxyXG4gICAgQEpvaW5Db2x1bW4oKVxyXG4gICAgcm9sZTogUm9sZSA9IG5ldyBSb2xlO1xyXG5cclxuICAgIEBPbmVUb01hbnkodHlwZSA9PiBMZWF2ZSwgbGVhdmUgPT4gbGVhdmUuc3RhZmYpXHJcbiAgICBsZWF2ZTogQXJyYXk8TGVhdmU+ID0gbmV3IEFycmF5PExlYXZlPigpO1xyXG5cclxuICAgIEBJbmRleChbXCJzdGFmZklkTnVtYmVyXCJdKVxyXG4gICAgQENvbHVtbih7dHlwZTogXCJ2YXJjaGFyXCIsIGxlbmd0aDogMTUgfSlcclxuICAgIHN0YWZmSWROdW1iZXI6IHN0cmluZyA9IFwiXCI7XHJcblxyXG5cclxufVxyXG4iXX0=