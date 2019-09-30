import {
  Controller,
  Logger,
  Query,
  Get,
  Param,
  Post,
  UseGuards,
  UsePipes,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { GeneralDataService } from './general-data.service';
import { AuthGuard } from '../shared/auth.guard';
import { ValidationPipe } from '../shared/validation.pipe';
import { User } from '../users/user.decorator';
import { GeneralDataDTO } from './general-data.dto';

@Controller('api/general-data')
export class GeneralDataController {
  private logger = new Logger('GeneralDataController');

  constructor(private generalDataService: GeneralDataService) {}

  private logData(options: any) {
    options.user && this.logger.log('USER ' + JSON.stringify(options.user));
    options.body && this.logger.log('BODY ' + JSON.stringify(options.body));
    options.id && this.logger.log('GENERALDATA ' + JSON.stringify(options.id));
  }

  @Get()
  showAllGeneralData(@Query('page') page: number) {
    return this.generalDataService.showAll(page);
  }

  @Get(':id')
  readOneGeneralData(@Param('id') id: string) {
    this.logData({ id });
    return this.generalDataService.read(id);
  }

  @Post()
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  createGeneralData(@User('id') user, @Body() body: GeneralDataDTO) {
    this.logData({ user, body });
    return this.generalDataService.create(user, body);
  }

  @Put(':id')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  updateGeneralData(
    @Param('id') id: string,
    @User('id') user,
    @Body() body: Partial<GeneralDataDTO>,
  ) {
    this.logData({ id, user, body });
    return this.generalDataService.update(id, user, body);
  }

  @Delete(':id')
  @UseGuards(new AuthGuard())
  destroyGeneralData(@Param('id') id: string, @User('id') user) {
    this.logData({ id, user });
    return this.generalDataService.destroy(id, user);
  }
}
