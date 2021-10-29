import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { MessageEntity } from 'src/messages/message.entity';
import { Exclude } from 'class-transformer';
@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  email: string;
  @Column({ nullable: true })
  photo_url: string;
  @Exclude()
  @Column('json', { nullable: true })
  messages?: MessageEntity[];
}
