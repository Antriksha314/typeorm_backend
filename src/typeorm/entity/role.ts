import { RoleType } from '../../utils/enums';
import { Column, Entity } from 'typeorm';
import { Base } from './base';

@Entity()
export class Role extends Base {
  @Column()
  name: string;

  @Column({ type: 'enum', enum: RoleType, default: RoleType.USER })
  type: string;

  @Column({ type: 'json', array: true })
  permissions: [];
}
