import { Module } from '@nestjs/common';
import { DiagnosticsService } from './diagnostics.service';
import { DiagnosticsController } from './diagnostics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from '../students/student.entity';
import { GoogleCloudService } from '../external-api/google-cloud/google-cloud.service';
import { RedditService } from '../external-api/reddit/reddit.service';
import { TwitterService } from 'src/external-api/twitter/twitter.service';
import { DiagnosticEntity } from './diagnostic.entity';
import { PostsService } from '../posts/posts.service';
import { SuggestionEntity } from '../suggestions/suggestion.entity';
import { PostEntity } from '../posts/post.entity';
import { SuggestionsService } from '../suggestions/suggestions.service';
import { PsychologistEntity } from '../psychologists/psychologist.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DiagnosticEntity,
      StudentEntity,
      SuggestionEntity,
      PostEntity,
      PsychologistEntity,
    ]),
  ],
  providers: [
    DiagnosticsService,
    GoogleCloudService,
    RedditService,
    TwitterService,
    PostsService,
    SuggestionsService,
  ],
  controllers: [DiagnosticsController],
})
export class DiagnosticsModule {}
