// importing libraries and dependencies
import { Entity, PrimaryGeneratedColumn, Index, Column } from "typeorm";

// role Entity
@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    roleId: number = 0;

    @Column({type: "varchar", length: 50, unique: true })
    roleName: string = "";

    @Column({type: "varchar", length: "100"})
    description: string = "";
}
