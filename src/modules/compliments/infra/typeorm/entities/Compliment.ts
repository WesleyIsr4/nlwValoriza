import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Tag from '@modules/tags/infra/typeorm/entities/Tag';
import User from '@modules/users/infra/typeorm/entities/User';

@Entity('compliments')
class Compliments {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  user_sender: string;

  @JoinColumn({ name: 'user_sender' })
  @ManyToOne(() => User)
  userSender: User;

  @Column()
  user_receiver: string;

  @JoinColumn({ name: 'user_receiver' })
  @ManyToOne(() => User)
  userReceiver: User;

  @Column()
  tag_id: string;

  @JoinColumn({ name: 'tag_id' })
  @ManyToOne(() => Tag)
  tag: Tag;

  @Column()
  message: string;

  @CreateDateColumn()
  created_at: Date;
}

export default Compliments;
