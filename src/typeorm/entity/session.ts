import { Column, Entity } from 'typeorm';
import { Base } from './base';

@Entity()
export class Session extends Base {
  @Column()
  accessToken: string;

  @Column()
  refreshToken: string;

  @Column({ nullable: true })
  ip: string;

  @Column({ type: 'json', nullable: true })
  systemAddress: {};

  @Column({ type: 'json', nullable: true })
  metaJson: {};

  @Column({ nullable: true })
  browser: string;

  @Column({ default: false })
  status: boolean;
}
