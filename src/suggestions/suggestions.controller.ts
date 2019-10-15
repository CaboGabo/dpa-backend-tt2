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
import { ValidationPipe } from '../shared/validation.pipe';
import { User } from '../users/user.decorator';
import { SuggestionDTO } from './suggestion.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class SuggestionsController {
  private logger = new Logger('SuggestionsController');
  constructor(private suggestionsService: SuggestionsService) {}

  private logData(options: any) {
    options.user && this.logger.log('USER ' + JSON.stringify(options.user));
    options.body && this.logger.log('BODY ' + JSON.stringify(options.body));
    options.id && this.logger.log('SUGGESTION ' + JSON.stringify(options.id));
  }

  @Get('api/suggestions')
  showAllSuggestions() {
    return this.suggestionsService.showAll();
  }

  /* @Get('activation/:activationScore')
  showSuggestionsByActivationScore(
    @Param('activationScore') activationScore: number,
  ) {
    return this.suggestionsService.showByActivationScore(activationScore);
  } */

  @Post('api/classification-criteria/:keyname/suggestions')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  createSuggestion(
    @User('id') user,
    @Param('keyname') criteria: string,
    @Body() body: SuggestionDTO,
  ) {
    this.logData({ user, body });
    return this.suggestionsService.create(user, criteria, body);
  }

  @Put('api/suggestions/:id')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  updateSuggestion(
    @Param('id') id: string,
    @User('id') user,
    @Body() body: Partial<SuggestionDTO>,
  ) {
    this.logData({ id, user, body });
    return this.suggestionsService.update(id, user, body);
  }

  @Delete('api/suggestions/:id')
  @UseGuards(AuthGuard('jwt'))
  destroySuggestion(@Param('id') id: string, @User('id') user) {
    this.logData({ id, user });
    return this.suggestionsService.destroy(id, user);
  }
}
