// importing libraries and dependencies
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Staff } from "./staff";

/**
 * Organisation Entity
 */
@Entity()
export class Organization {
    @PrimaryGeneratedColumn()
    id: number = 0;

    @Column()
    name: string = "";

    @Column()
    address: string = "";

    @Column()
    description: string = "";

    @OneToMany(type => Staff, staff => staff.organization)
    staff: Staff[] = new Array<Staff>();
}
