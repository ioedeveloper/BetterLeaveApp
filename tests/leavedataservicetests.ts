import { LeaveDataService } from "../services/leaveDataService";
import { LeaveService } from "../services/leaveService";
import { expect } from "chai";
import "mocha";
import { Leave } from "../models/leave";
import {createConnection} from "typeorm";


describe("getAllLeaves function", () => {
// create app db connection.
    it("should return an array of leaves", async () => {
        createConnection().then(async connection => {
        const lds: LeaveDataService = new LeaveDataService();
        // act
        const result: Array<Leave> = await lds.getAllLeaves();

        // assert or Expect
        expect(result).to.be.an.instanceof(Array<Leave>());
    }).catch(error => console.log("Data Access Error : ", error));
    });

});

describe("getLeave function", () => {
    // create app db connection.
    it("should return a leave", async () => {
        createConnection().then(async connection => {
        const lds: LeaveDataService = new LeaveDataService();
        const leave: Leave = new Leave();
        const result: Leave = await lds.getLeave(leave);
        expect(result).to.be.an.instanceof(Leave);
    }).catch(error => console.log("Data Access Error : ", error));
    });
});

describe("getnumberofleavedays", () => {
    it("should return number of days approved for leave for staff", async () => {
    createConnection().then(async connection => {
        const ls: LeaveService = new LeaveService();
        ls.setLeaveDayAmount(3);
        expect(ls).to.be.does("nothing");
    }).catch(error => console.log("Data Access Error : ", error));
    });
});