import { Column, Entity, OneToOne } from "typeorm";
import { Base } from "./base";
import { UserMeta } from "./meta";
import { Role } from "./role";

@Entity()
export class User extends Base {
    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column({ unique: true })
    email: string

    @Column()
    password: string

    @OneToOne(() => Role)
    role: Role

    @OneToOne(() => UserMeta)
    meta: UserMeta
}