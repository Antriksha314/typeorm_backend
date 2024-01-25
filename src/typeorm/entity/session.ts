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
  systemAddress: { name: string };

  @Column({ type: 'json', nullable: true })
  metaJson: {
    ip: string;
  };

  @Column({ nullable: true })
  browser: string;

  @Column({ default: false })
  status: boolean;
}
