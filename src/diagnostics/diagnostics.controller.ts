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
import { ValidationPipe } from '../shared/validation.pipe';
import { User } from '../users/user.decorator';
import { RedditAuthDTO } from '../external-api/reddit/reddit-auth.dto';
import { AuthGuard } from '@nestjs/passport';

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
  @UseGuards(AuthGuard('jwt'))
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
  @UseGuards(AuthGuard('jwt'))
  redditAuthorization() {
    return this.diagnosticsService.redditAuth();
  }

  @Post('reddit')
  @UseGuards(AuthGuard('jwt'))
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
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  async getAnalyzedPosts(@User('id') user) {
    return this.diagnosticsService.getAllPosts(user);
  }

  @Post('diagnosticate')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  async makeDiagnostic(@User('id') user) {
    return this.diagnosticsService.diagnostic(user);
  }

  /*@Put('diagnostics/:idDiagnostic/activities')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  async updateSuggestionsDiagnostics(
    @User('id') user,
    @Param('idDiagnostic') id: string,
    @Query('page') page: number,
  ) {
    return this.diagnosticsService.addActivities(user, id, page);
  }

  @Put('diagnostics/:idDiagnostic/activities/:idActivity/done')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  async activityDone(
    @User('id') user,
    @Param('idDiagnostic') idDiagnostic: string,
    @Param('idActivity') idActivity: string,
  ) {
    return this.diagnosticsService.activityDone(user, idDiagnostic, idActivity);
  }

  @Put('diagnostics/:idDiagnostic/activities/:idActivity/notdone')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  async activityNotDone(
    @User('id') user,
    @Param('idDiagnostic') idDiagnostic: string,
    @Param('idActivity') idActivity: string,
  ) {
    return this.diagnosticsService.activityNotDone(
      user,
      idDiagnostic,
      idActivity,
    );
  }*/

  @Get('api/diagnostics/student')
  @UseGuards(AuthGuard('jwt'))
  async getAllDiagnosticsByStudent(@User('id') user) {
    return this.diagnosticsService.getAllByStudent(user);
  }

  @Get('api/diagnostics/student/:id')
  @UseGuards(AuthGuard('jwt'))
  async getDiagnosticByStudent(@User('id') user, @Param('id') id) {
    return this.diagnosticsService.readByStudent(user, id);
  }

  @Get('api/diagnostics/psychologist')
  @UseGuards(AuthGuard('jwt'))
  async getAllDiagnosticsByPsychologist(@User('id') user) {
    return this.diagnosticsService.getAllByPsychologist(user);
  }

  @Get('api/diagnostics/psychologist/:id')
  @UseGuards(AuthGuard('jwt'))
  async getDiagnosticByPsychologist(@User('id') user, @Param('id') id) {
    return this.diagnosticsService.readByPsychologist(user, id);
  }
}
