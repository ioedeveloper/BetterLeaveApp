// importing libraries and dependencies
// tslint:disable-next-line:max-line-length
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, Index, OneToOne, JoinColumn, OneToMany, ObjectID, ObjectIdColumn, BaseEntity } from "typeorm";
import { Organization } from "./organization";
import { Role } from "./Role";
import { Leave } from "./leave";

// staff Entity
@Entity()
export class Staff extends BaseEntity {
    @ObjectIdColumn()
    _id:ObjectID;

    @ManyToOne(type => Organization, organization => organization.staff)
    organization: Organization = new Organization;

    @Column({ type: "varchar", length: 50 })
    firstname: string = "";

    @Column({type: "varchar", length: 50 })
    lastname: string = "";

    @Column({type: "varchar", length: 50 })
    email: string = "";

    @Column({type: "varchar", length: 50 })
    password: string = "";

    @OneToOne(type => Role)
    @JoinColumn()
    role: Role = new Role;

    @OneToMany(type => Leave, leave => leave.staff)
    leave: Array<Leave> = new Array<Leave>();

    @Index({ unique: true })
    @Column({type: "varchar", length: 15 })
    staffIdNumber: string = "";


}
