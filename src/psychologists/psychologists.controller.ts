import {
  Controller,
  Logger,
  Get,
  Query,
  Post,
  UseGuards,
  UsePipes,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PsychologistsService } from './psychologists.service';
import { ValidationPipe } from '../shared/validation.pipe';
import { User } from '../users/user.decorator';
import { PsychologistDTO } from './psychologist.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/psychologists')
export class PsychologistsController {
  private logger = new Logger('PsychologistsController');

  constructor(private psychologistsService: PsychologistsService) {}

  private logData(options: any) {
    options.user && this.logger.log('USER ' + JSON.stringify(options.user));
    options.body && this.logger.log('BODY ' + JSON.stringify(options.body));
    options.id && this.logger.log('PSYCHOLOGIST ' + JSON.stringify(options.id));
  }

  @Get()
  showAllPsychologists(@Query('page') page: number) {
    return this.psychologistsService.showAll(page);
  }

  @Get('/notValidated')
  showAllNotValidated() {
    return this.psychologistsService.showAllNotValidated();
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  createPsychologist(@User('id') user, @Body() body: PsychologistDTO) {
    this.logData({ user, body });
    return this.psychologistsService.create(user, body);
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  readPsychologist(@Param('id') id: string) {
    this.logData({ id });
    return this.psychologistsService.read(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  updatePsychologist(
    @Param('id') id: string,
    @User('id') user,
    @Body() body: Partial<PsychologistDTO>,
  ) {
    this.logData({ id, user, body });
    return this.psychologistsService.update(id, user, body);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  destroyPsychologist(@Param('id') id: string, @User('id') user) {
    this.logData({ id, user });
    return this.psychologistsService.destroy(id, user);
  }
}
