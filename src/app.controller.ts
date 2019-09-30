import {
  Controller,
  Get,
  UseGuards,
  Post,
  Request,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @Get('auth/login/google')
  @UseGuards(AuthGuard('google'))
  googleLogin() {}

  @Get('auth/login/google/callback')
  @UseGuards(AuthGuard('google'))
  googleLoginCallback(@Req() req) {
    const jwt: string = req.access_token;
    if (jwt) {
      return {
        access_token: jwt,
      };
    }

    throw new HttpException('Error login google', HttpStatus.BAD_REQUEST);
  }
}
