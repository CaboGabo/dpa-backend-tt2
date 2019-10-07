import { Module } from '@nestjs/common';
import { DiagnosticsService } from './diagnostics.service';
import { DiagnosticsController } from './diagnostics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from '../students/student.entity';
import { GoogleCloudService } from '../external-api/google-cloud/google-cloud.service';
import { RedditService } from '../external-api/reddit/reddit.service';
import { TwitterService } from '../external-api/twitter/twitter.service';
import { DiagnosticEntity } from './diagnostic.entity';
import { PostsService } from '../posts/posts.service';
import { SuggestionEntity } from '../suggestions/suggestion.entity';
import { PostEntity } from '../posts/post.entity';
import { SuggestionsService } from '../suggestions/suggestions.service';
import { PsychologistEntity } from '../psychologists/psychologist.entity';
import { ClassifierService } from '../classifier/classifier.service';
import { ActivitiesService } from '../activities/activities.service';
import { ActivityEntity } from '../activities/activity.entity';
import { DiagnosticDetailEntity } from '../diagnostic-details/diagnostic-detail.entity';
import { ClassificationCriteriaEntity } from '../classification-criteria/classification-criteria.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DiagnosticEntity,
      StudentEntity,
      SuggestionEntity,
      PostEntity,
      PsychologistEntity,
      ActivityEntity,
      DiagnosticDetailEntity,
      ClassificationCriteriaEntity,
    ]),
  ],
  providers: [
    DiagnosticsService,
    GoogleCloudService,
    RedditService,
    TwitterService,
    PostsService,
    SuggestionsService,
    ClassifierService,
    ActivitiesService,
  ],
  controllers: [DiagnosticsController],
})
export class DiagnosticsModule {}
