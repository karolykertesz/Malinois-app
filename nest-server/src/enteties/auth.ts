import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MessageEntity } from 'src/messages/message.entity';
@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column()
  photo_url?: string;
  @Column('json')
  messages: MessageEntity[];
}
