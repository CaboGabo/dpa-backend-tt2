import {
  Controller,
  Logger,
  Post,
  Body,
  Query,
  UseGuards,
  UsePipes,
  Get,
  Put,
  Param,
} from '@nestjs/common';
import { DiagnosticsService } from './diagnostics.service';
import { TwitterAuthDTO } from '../external-api/twitter/twitter-auth.dto';
import { AuthGuard } from '../shared/auth.guard';
import { ValidationPipe } from '../shared/validation.pipe';
import { User } from '../users/user.decorator';
import { RedditAuthDTO } from '../external-api/reddit/reddit-auth.dto';

@Controller()
export class DiagnosticsController {
  private logger = new Logger('DiagnosticsController');

  constructor(private diagnosticsService: DiagnosticsService) {}

  private logData(options: any) {
    options.user && this.logger.log('USER ' + JSON.stringify(options.user));
    options.body && this.logger.log('BODY ' + JSON.stringify(options.body));
    options.id && this.logger.log('DIAGNOSTIC ' + JSON.stringify(options.id));
  }

  @Post('twitter')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  async fetchTwitterPosts(
    @User('id') user,
    @Body() twitterAuth: Partial<TwitterAuthDTO>,
    @Query() params,
  ) {
    return this.diagnosticsService.fetchAllTwitter(
      user,
      twitterAuth,
      params.limit || 100,
    );
  }

  @Post('reddit/auth')
  @UseGuards(new AuthGuard())
  redditAuthorization() {
    return this.diagnosticsService.redditAuth();
  }

  @Post('reddit')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  async fetchRedditPosts(
    @User('id') user,
    @Body() redditAuth: RedditAuthDTO,
    @Query() params,
  ) {
    return this.diagnosticsService.fetchAllReddit(
      user,
      redditAuth,
      params.limit || 100,
    );
  }

  @Get('api/posts')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  async getAnalyzedPosts(@User('id') user) {
    return this.diagnosticsService.getAllPosts(user);
  }

  @Post('diagnosticate')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  async makeDiagnostic(@User('id') user) {
    return this.diagnosticsService.diagnostic(user);
  }

  @Put('diagnostics/suggestions')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  async updateSuggestionsDiagnostics(@User('id') user) {
    return this.diagnosticsService.updateSuggestions(user);
  }

  @Get('api/diagnostics')
  @UseGuards(new AuthGuard())
  async getAllDiagnostics(@User('id') user) {
    return this.diagnosticsService.getAll(user);
  }

  @Get('api/diagnostics/:id')
  @UseGuards(new AuthGuard())
  async getDiagnostic(@User('id') user, @Param('id') id) {
    return this.diagnosticsService.read(user, id);
  }
}
