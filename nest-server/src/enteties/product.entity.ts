import { Message } from 'src/messages/message.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ unique: true })
  added_by: string;
  @Column({ default: new Date() })
  auction_starts: Date;
  @Column()
  quantity: number;
  @Column()
  auction_ends: Date;
  @Column({ default: false })
  garantie: boolean;
  @Column()
  location: string;
  @Column()
  payment_type: string;
  @Column({ unique: true })
  user_email: string;
  @Column('json')
  image_urls: string[];
  @Column()
  description: string;
  @JoinColumn()
  @OneToMany(() => Message, (message) => message.product)
  messages: Message[];
}
