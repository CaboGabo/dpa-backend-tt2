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
import { ClassificationCriteriaService } from './classification-criteria/classification-criteria.service';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService, private ccs: ClassificationCriteriaService) {
    this.ccs.populate();
  }

  @Post('auth/login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    console.log(req);
    return this.authService.login(req.user);
  }
}
