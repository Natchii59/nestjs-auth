import { ISession } from 'connect-typeorm';
import { Column, Entity, Index, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sessions' })
export class SessionEntity implements ISession {
  @Index()
  @Column({ type: 'bigint' })
  expiredAt = Date.now();

  @PrimaryColumn({
    type: 'varchar',
    length: 255,
  })
  id = '';

  @Column({
    type: 'text',
  })
  json = '';
}
