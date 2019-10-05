import { IsString, IsInt } from 'class-validator';
import { PsychologistRO } from '../psychologists/psychologist.dto';
import { Column } from 'typeorm';

export class SuggestionDTO {
  @IsString()
  content: string;

  @IsString()
  gender: string;

  @IsString()
  rangeAge: string;

  @Column()
  depressionType: string;
}

export class SuggestionRO {
  id: string;
  created: Date;
  content: string;
  gender: string;
  rangeAge: string;
  savedBy: PsychologistRO;
}
