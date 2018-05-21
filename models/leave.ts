// importing libraries and dependencies
import { Entity, PrimaryGeneratedColumn, Index, ManyToOne, Column, OneToOne } from "typeorm";
import { Staff } from "../models/staff";
import { LeaveType } from "../models/leaveType";

/**
 * Leave Entity
 */
@Entity()
export class Leave {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    leaveDays: number = 0;

    @Column()
    casualLeaveDays: number = 0 ;

    @Column({ type: "boolean"})
    approval: boolean = false;

    @Column({ type: "varchar", length: 50 })
    endorsedBy: string = "";

    @Column({ type: "varchar", length: 50 })
    approvedBy: string = "";

    @ManyToOne(type => Staff, staff => staff.leave)
    staff: Staff = new Staff();

    @OneToOne(type => LeaveType)
    leaveType: LeaveType = new LeaveType();
}
