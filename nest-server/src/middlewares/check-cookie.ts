import { HttpCode, Injectable, NestMiddleware } from '@nestjs/common';
import { isJWT } from 'class-validator';
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
@Injectable()
export class CheckCookie implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const cookie = req.cookies;
    if (!cookie) {
      return HttpCode(403);
    }
    try {
      const decoded = jwt.verify(cookie.auth, 'secret');
    } catch (err) {
      return HttpCode(403);
    }
    next();
  }
}
