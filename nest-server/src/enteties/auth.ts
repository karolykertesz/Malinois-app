import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Message } from 'src/messages/message.entity';
import { Exclude } from 'class-transformer';
import { Letters } from './letters.dto';
@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  surname: string;
  @Column()
  email: string;
  @Column()
  city: string;
  @Column()
  street: string;
  @Column()
  appartment: string;
  @Column()
  phone: string;
  @Column()
  display_name: string;
  @Column()
  country: string;
  @Column({ nullable: true })
  photo_url: string;
  @Exclude()
  @JoinColumn()
  @OneToMany(() => Letters, (letters) => letters.user)
  @Column('json', { nullable: true })
  letters?: Letters[];
}
