import {
  Controller,
  Get,
  UseGuards,
  Post,
  Request,
  Req,
  HttpException,
  HttpStatus,
  Res,
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
  googleLoginCallback(@Req() req, @Res() res) {
    const jwt: string = req.access_token;
    if (jwt) {
      res.redirect(`http://localhost:4200/login/success/${jwt}`);
    } else {
      res.redirect(`http://localhost:4200/login/failure`);
    }
  }
}
