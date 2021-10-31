import { Expose } from 'class-transformer';
export class ClientExposed {
  @Expose()
  id: string;
  @Expose()
  email: string;
}
