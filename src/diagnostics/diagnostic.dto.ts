import { IsBoolean, IsInt } from 'class-validator';
import { StudentRO } from '../students/student.dto';
import { SuggestionRO } from '../suggestions/suggestion.dto';

export class DiagnosticDTO {
  @IsBoolean()
  result: boolean;

  @IsInt()
  score: number;
}

export class DiagnosticRO {
  id: string;
  created: Date;
  result: boolean;
  score: number;
  student: StudentRO;
  suggestions?: SuggestionRO[];
}
