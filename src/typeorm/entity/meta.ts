import { Column, Entity } from 'typeorm';
import { Base } from './base';

@Entity()
export class UserMeta extends Base {
  @Column()
  dob: string;

  @Column()
  address: string;
}
