import { IsBoolean } from 'class-validator';
import { SuggestionRO } from '../suggestions/suggestion.dto';
import { DiagnosticDetailRO } from '../diagnostic-details/diagnostic-detail.dto';

export class ActivityDTO {
  @IsBoolean()
  done: boolean;
}

export class ActivityRO {
  id: string;
  created: Date;
  diagnosticDetail: DiagnosticDetailRO;
  suggestion: SuggestionRO;
  done: boolean;
}
