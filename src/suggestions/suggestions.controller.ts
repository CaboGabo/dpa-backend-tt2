import {
  Controller,
  Logger,
  Get,
  Param,
  Query,
  Post,
  UseGuards,
  UsePipes,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { SuggestionsService } from './suggestions.service';
import { AuthGuard } from '../shared/auth.guard';
import { ValidationPipe } from '../shared/validation.pipe';
import { User } from 'src/users/user.decorator';
import { SuggestionDTO } from './suggestion.dto';

@Controller('api/suggestions')
export class SuggestionsController {
  private logger = new Logger('SuggestionsController');
  constructor(private suggestionsService: SuggestionsService) {}

  private logData(options: any) {
    options.user && this.logger.log('USER ' + JSON.stringify(options.user));
    options.body && this.logger.log('BODY ' + JSON.stringify(options.body));
    options.id && this.logger.log('SUGGESTION ' + JSON.stringify(options.id));
  }

  @Get()
  showAllSuggestions(@Query('page') page: number) {
    return this.suggestionsService.showAll(page);
  }

  /* @Get('activation/:activationScore')
  showSuggestionsByActivationScore(
    @Param('activationScore') activationScore: number,
  ) {
    return this.suggestionsService.showByActivationScore(activationScore);
  } */

  @Post()
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  createSuggestion(@User('id') user, @Body() body: SuggestionDTO) {
    this.logData({ user, body });
    return this.suggestionsService.create(user, body);
  }

  @Put(':id')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  updateSuggestion(
    @Param('id') id: string,
    @User('id') user,
    @Body() body: Partial<SuggestionDTO>,
  ) {
    this.logData({ id, user, body });
    return this.suggestionsService.update(id, user, body);
  }

  @Delete(':id')
  @UseGuards(new AuthGuard())
  destroySuggestion(@Param('id') id: string, @User('id') user) {
    this.logData({ id, user });
    return this.suggestionsService.destroy(id, user);
  }
}
