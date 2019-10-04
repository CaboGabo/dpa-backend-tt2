import { IsString, IsInt } from 'class-validator';
import { PsychologistRO } from '../psychologists/psychologist.dto';

export class SuggestionDTO {
  @IsString()
  content: string;
}

export class SuggestionRO {
  id: string;
  created: Date;
  content: string;
  savedBy: PsychologistRO;
}
