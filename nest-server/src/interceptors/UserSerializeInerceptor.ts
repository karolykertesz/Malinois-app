import {
  CallHandler,
  ExecutionContext,
  NestInterceptor,
  UseInterceptors,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Observable, map } from 'rxjs';

export const Serialize = (dto: {}) => {
  return UseInterceptors(new UserSerialize(dto));
};

export class UserSerialize implements NestInterceptor {
  constructor(private dto: any) {}
  intercept(ctx: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data: any) =>
        plainToClass(this.dto, data, {
          excludeExtraneousValues: true,
        }),
      ),
    );
  }
}
