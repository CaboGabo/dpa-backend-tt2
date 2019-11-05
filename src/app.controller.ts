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
    try {
      if (process.env.NODE_ENV === 'production') {
        console.log('writing file');
        const fs = require('fs');
        console.log(process.env.GOOGLE_APPLICATION_CREDENTIALS);
        console.log(process.env.GOOGLE_CREDENTIALS);
        fs.writeFile(process.env.GOOGLE_APPLICATION_CREDENTIALS, `/app/${process.env.GOOGLE_CREDENTIALS}`, (error) => console.log('error', error));
      }
    } catch (e) {
      console.log('No GCP credentials');
    }
  }

  @Post('auth/login')
  @UseGuards(AuthGuard('local'))
  async login(@Request() req) {
    console.log(req);
    return this.authService.login(req.user);
  }
}
