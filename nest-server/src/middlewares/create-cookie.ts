import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import * as cookie from 'cookie';
import { ConfigService } from '@nestjs/config';
export class CreateCookie {
  public async create(res: Response, userId: number, secret) {
    const token = await jwt.sign({ data: userId }, secret, {
      expiresIn: '2h',
    });
    res.setHeader(
      'Set-Cookie',
      cookie.serialize('auth', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        sameSite: 'strict',
        path: '/',
        maxAge: 720,
      }),
    );
  }
}
