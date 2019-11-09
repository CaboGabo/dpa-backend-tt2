import {
  Controller,
  Get,
  UseGuards,
  UsePipes,
  Post,
  Body,
  Param,
  Delete,
} from '@nestjs/common';
import { CamirTestsService } from './camir-tests.service';
import { ValidationPipe } from '../shared/validation.pipe';
import { User } from 'src/users/user.decorator';
import { AuthGuard } from '@nestjs/passport';
import { CamirTestDTO } from './camir-test.dto';

@Controller('api/camir-tests')
export class CamirTestsController {
  constructor(private camirTestsService: CamirTestsService) {}

  @Get('/student')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  showTestStudent(@User('id') user) {
    return this.camirTestsService.read(user);
  }

  @Get('psychologist')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  showTestsPsychologist(@User('id') user) {
    return this.camirTestsService.showAll(user);
  }

  @Get('psychologist/:id')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  showTestPsychologist(@User('id') user, @Param('id') id: string) {
    return this.camirTestsService.showOne(user, id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  createTest(@User('id') user, @Body() body: CamirTestDTO) {
    return this.camirTestsService.create(user, body);
  }

  /*@Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  deleteTest(@Param('id') id: string, @User('id') user) {
    return this.camirTestsService.destroy(id, user);
  }*/
}
