import { Column, Entity, PrimaryGeneratedColumn} from "typeorm";
@Entity()
export class Auth {
  @PrimaryGeneratedColumn()
  id:string
  @Column()
  name: string;
  @Column()
  email:string
}
