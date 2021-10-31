import { Product } from 'src/enteties/product.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  mess_id: string;
  @Column()
  sender_id: string;
  @Column()
  reciver_id: string;
  @Column()
  added_at: Date;
  @Column()
  text: string;
  @JoinColumn()
  @ManyToOne(() => Product, (product) => product.messages)
  product: Product;
}
