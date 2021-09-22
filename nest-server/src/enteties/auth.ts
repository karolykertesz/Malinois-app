import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
import { MessagesMessageDTO } from "src/dtos/messages.message.dto.ts";
@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id:number
  @Column()
  name: string;
  @Column()
  email:string
  @Column()
  photo_url?:string;
  @Column()
  messages: MessagesMessageDTO[]
}
