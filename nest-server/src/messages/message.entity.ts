import { Column, Entity,PrimaryGeneratedColumn, } from "typeorm";

Entity()
export class MessageEntity {
@PrimaryGeneratedColumn()
id:number
@Column()
sender_id: string;
@Column()
reciver_id: string
@Column()
added_at:Date 
@Column()
text: string
@Column()
photo_id:string
}

