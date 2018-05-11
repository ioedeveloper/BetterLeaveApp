import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class LeaveType {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column({ type: "varchar", length: 50 })
    name: string = "";

    @Column({ type: "varchar", length: 150 })
    description: string = "";
}
