import { Module } from '@nestjs/common';
import { SuggestionsService } from './suggestions.service';
import { SuggestionsController } from './suggestions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SuggestionEntity } from './suggestion.entity';
import { PsychologistEntity } from '../psychologists/psychologist.entity';
import { DiagnosticEntity } from '../diagnostics/diagnostic.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SuggestionEntity,
      PsychologistEntity,
      DiagnosticEntity,
    ]),
  ],
  providers: [SuggestionsService],
  controllers: [SuggestionsController],
})
export class SuggestionsModule {}
