import {
  ForbiddenException,
  HttpCode,
  Injectable,
  NestMiddleware,
  NotAcceptableException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
@Injectable()
export class CheckCookie implements NestMiddleware {
  constructor(private readonly configservice: ConfigService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const secret = this.configservice.get<string>('JWT_TOKEN_SECRET');
    const cookie = req.cookies;
    if (!cookie) {
      throw new ForbiddenException({
        message: 'You need to log in',
      });
    }
    try {
      const decoded = jwt.verify(cookie.auth, secret);
    } catch (err) {
      return HttpCode(403);
    }
    next();
  }
}
