import { Module } from '@nestjs/common';
import { SuggestionsService } from './suggestions.service';
import { SuggestionsController } from './suggestions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuggestionEntity } from './suggestion.entity';
import { PsychologistEntity } from '../psychologists/psychologist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SuggestionEntity, PsychologistEntity])],
  providers: [SuggestionsService],
  controllers: [SuggestionsController],
})
export class SuggestionsModule {}
