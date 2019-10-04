import { IsBoolean } from 'class-validator';
import { DiagnosticRO } from '../diagnostics/diagnostic.dto';
import { SuggestionRO } from '../suggestions/suggestion.dto';

export class ActivityDTO {
  @IsBoolean()
  done: boolean;
}

export class ActivityRO {
  id: string;
  created: Date;
  diagnostic: DiagnosticRO;
  suggestion: SuggestionRO;
  done: boolean;
}
