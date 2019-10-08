import {
  Controller,
  Logger,
  Get,
  Query,
  Param,
  Post,
  UseGuards,
  UsePipes,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { SpecialistsService } from './specialists.service';
import { ValidationPipe } from '../shared/validation.pipe';
import { User } from '../users/user.decorator';
import { SpecialistDTO } from './specialist.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('api/specialists')
export class SpecialistsController {
  private logger = new Logger('SpecialistsController');

  constructor(private specialistsService: SpecialistsService) {}

  private logData(options: any) {
    options.user && this.logger.log('USER ' + JSON.stringify(options.user));
    options.body && this.logger.log('BODY ' + JSON.stringify(options.body));
    options.id && this.logger.log('SPECIALIST ' + JSON.stringify(options.id));
  }

  @Get()
  showAllSpecialists(@Query('page') page: number) {
    return this.specialistsService.showAll(page);
  }

  @Get(':id')
  readSpecialist(@Param('id') id: string) {
    this.logData({ id });
    return this.specialistsService.read(id);
  }

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  createSpecialist(@User('id') user, @Body() body: SpecialistDTO) {
    this.logData({ user, body });
    return this.specialistsService.create(user, body);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  updateSpecialist(
    @Param('id') id: string,
    @User('id') user,
    @Body() body: Partial<SpecialistDTO>,
  ) {
    this.logData({ id, user, body });
    return this.specialistsService.update(id, user, body);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  destroySpecialist(@Param('id') id: string, @User('id') user) {
    this.logData({ id, user });
    return this.specialistsService.destroy(id, user);
  }
}
