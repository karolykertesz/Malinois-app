import { IsDate, IsString,isDate } from "class-validator";
export class MessagesMessageDTO {
@IsString()
  private readonly id: string;
  @IsString()
  private readonly sender_id: string;
  @IsString()
  private readonly reciver_id: string
  @IsDate()
  private readonly added_at: Date
  @IsString()
  text: string
  @IsString()
  private readonly photo_id:string
}
