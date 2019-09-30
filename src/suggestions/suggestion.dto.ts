import { IsString, IsInt } from 'class-validator';
import { PsychologistRO } from '../psychologists/psychologist.dto';

export class SuggestionDTO {
  @IsString()
  content: string;

  @IsInt()
  activationScore: number;
}

export class SuggestionRO {
  id: string;
  created: Date;
  content: string;
  activationScore: number;
  savedBy: PsychologistRO;
}
