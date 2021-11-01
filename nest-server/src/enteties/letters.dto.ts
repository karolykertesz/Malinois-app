import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Auth } from './auth';

@Entity()
export class Letters {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  from: string;
  @Column()
  text: string;
  @JoinColumn()
  @ManyToOne(() => Auth, (user) => user.letters)
  user: Auth;
}
