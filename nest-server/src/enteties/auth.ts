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
  @Column({nullable: true})
  photo_url: string;
  @Column('json',{nullable: true})
  messages?: MessageEntity[];
}
