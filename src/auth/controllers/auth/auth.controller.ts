import { Controller, Get, Post, Req, Session, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AuthenticatedGuard, LocalAuthGuard } from 'src/auth/utils/LocalGuard';

@Controller('auth')
export class AuthController {
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login() {
    return;
  }

  @Get('')
  getAuthSession(@Session() session: Record<string, any>) {
    session.authenticated = true;

    return session;
  }

  @UseGuards(AuthenticatedGuard)
  @Get('status')
  getStatus(@Req() req: Request) {
    return req.user;
  }
}
