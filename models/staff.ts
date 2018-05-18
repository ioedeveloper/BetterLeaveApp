// importing libraries and dependencies
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Organization } from "./organization";
import { Role } from "./Role";
import { Leave } from "./leave";

// staff Entity
@Entity()
export class Staff {
    @PrimaryGeneratedColumn()
    staffId: number = 0;

    @ManyToOne(type => Organization, organization => organization.staff)
    organization: Organization = new Organization;

    @Index(["firstname","lastname"])
    @Column({ type: "varchar", length: 50 })
    firstname: string = "";

    @Column({type: "varchar", length: 50 })
    lastname: string = "";

    @Column({type: "varchar", length: 50 })
    middlename: string = "";

    @Column({type: "date" })
    birthdate: Date = new Date;

    @OneToOne(type => Role)
    @JoinColumn()
    role: Role = new Role;

    @OneToMany(type => Leave, leave => leave.staff)
    leave: Array<Leave> = new Array<Leave>();

    @Index(["staffIdNumber"])
    @Column({type: "varchar", length: 15 })
    staffIdNumber: string = "";


}
