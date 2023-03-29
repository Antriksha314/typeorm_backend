import { Column, Entity } from "typeorm";
import { RoleType } from "utils/enums";
import { Base } from "./base";

@Entity()
export class Role extends Base {
    @Column()
    name: string

    @Column({ type: 'enum', enum: RoleType, default: RoleType.USER })
    type: string

    @Column({ type: "json", array: true })
    permissions: []
}