"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_component_1 = require("./app.component");
describe('AppComponent', function () {
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                app_component_1.AppComponent
            ],
        }).compileComponents();
    }));
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it("should have as title 'app'", testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app.title).toEqual('app');
    }));
    it('should render title in a h1 tag', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        fixture.detectChanges();
        var compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('h1').textContent).toContain('Welcome to client!');
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vY2xpZW50L3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaURBQXVEO0FBQ3ZELGlEQUErQztBQUMvQyxRQUFRLENBQUMsY0FBYyxFQUFFO0lBQ3ZCLFVBQVUsQ0FBQyxlQUFLLENBQUM7UUFDZixpQkFBTyxDQUFDLHNCQUFzQixDQUFDO1lBQzdCLFlBQVksRUFBRTtnQkFDWiw0QkFBWTthQUNiO1NBQ0YsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNKLEVBQUUsQ0FBQyx1QkFBdUIsRUFBRSxlQUFLLENBQUM7UUFDaEMsSUFBTSxPQUFPLEdBQUcsaUJBQU8sQ0FBQyxlQUFlLENBQUMsNEJBQVksQ0FBQyxDQUFDO1FBQ3RELElBQU0sR0FBRyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUM7UUFDbkQsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDSixFQUFFLENBQUMsNEJBQTRCLEVBQUUsZUFBSyxDQUFDO1FBQ3JDLElBQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLDRCQUFZLENBQUMsQ0FBQztRQUN0RCxJQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsWUFBWSxDQUFDLGlCQUFpQixDQUFDO1FBQ25ELE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDSixFQUFFLENBQUMsaUNBQWlDLEVBQUUsZUFBSyxDQUFDO1FBQzFDLElBQU0sT0FBTyxHQUFHLGlCQUFPLENBQUMsZUFBZSxDQUFDLDRCQUFZLENBQUMsQ0FBQztRQUN0RCxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDeEIsSUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFDcEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDbkYsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNOLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGVzdEJlZCwgYXN5bmMgfSBmcm9tICdAYW5ndWxhci9jb3JlL3Rlc3RpbmcnO1xyXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tICcuL2FwcC5jb21wb25lbnQnO1xyXG5kZXNjcmliZSgnQXBwQ29tcG9uZW50JywgKCkgPT4ge1xyXG4gIGJlZm9yZUVhY2goYXN5bmMoKCkgPT4ge1xyXG4gICAgVGVzdEJlZC5jb25maWd1cmVUZXN0aW5nTW9kdWxlKHtcclxuICAgICAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICAgICAgQXBwQ29tcG9uZW50XHJcbiAgICAgIF0sXHJcbiAgICB9KS5jb21waWxlQ29tcG9uZW50cygpO1xyXG4gIH0pKTtcclxuICBpdCgnc2hvdWxkIGNyZWF0ZSB0aGUgYXBwJywgYXN5bmMoKCkgPT4ge1xyXG4gICAgY29uc3QgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KEFwcENvbXBvbmVudCk7XHJcbiAgICBjb25zdCBhcHAgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5jb21wb25lbnRJbnN0YW5jZTtcclxuICAgIGV4cGVjdChhcHApLnRvQmVUcnV0aHkoKTtcclxuICB9KSk7XHJcbiAgaXQoYHNob3VsZCBoYXZlIGFzIHRpdGxlICdhcHAnYCwgYXN5bmMoKCkgPT4ge1xyXG4gICAgY29uc3QgZml4dHVyZSA9IFRlc3RCZWQuY3JlYXRlQ29tcG9uZW50KEFwcENvbXBvbmVudCk7XHJcbiAgICBjb25zdCBhcHAgPSBmaXh0dXJlLmRlYnVnRWxlbWVudC5jb21wb25lbnRJbnN0YW5jZTtcclxuICAgIGV4cGVjdChhcHAudGl0bGUpLnRvRXF1YWwoJ2FwcCcpO1xyXG4gIH0pKTtcclxuICBpdCgnc2hvdWxkIHJlbmRlciB0aXRsZSBpbiBhIGgxIHRhZycsIGFzeW5jKCgpID0+IHtcclxuICAgIGNvbnN0IGZpeHR1cmUgPSBUZXN0QmVkLmNyZWF0ZUNvbXBvbmVudChBcHBDb21wb25lbnQpO1xyXG4gICAgZml4dHVyZS5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICBjb25zdCBjb21waWxlZCA9IGZpeHR1cmUuZGVidWdFbGVtZW50Lm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICBleHBlY3QoY29tcGlsZWQucXVlcnlTZWxlY3RvcignaDEnKS50ZXh0Q29udGVudCkudG9Db250YWluKCdXZWxjb21lIHRvIGNsaWVudCEnKTtcclxuICB9KSk7XHJcbn0pO1xyXG4iXX0=