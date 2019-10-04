import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityEntity } from './activity.entity';
import { DiagnosticEntity } from '../diagnostics/diagnostic.entity';
import { SuggestionsService } from '../suggestions/suggestions.service';
import { PsychologistEntity } from '../psychologists/psychologist.entity';
import { SuggestionEntity } from '../suggestions/suggestion.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ActivityEntity,
      DiagnosticEntity,
      PsychologistEntity,
      SuggestionEntity,
    ]),
  ],
  providers: [ActivitiesService, SuggestionsService],
  controllers: [ActivitiesController],
})
export class ActivitiesModule {}
