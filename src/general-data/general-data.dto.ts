import { IsString } from 'class-validator';
import { PsychologistRO } from '../psychologists/psychologist.dto';

export class GeneralDataDTO {
  @IsString()
  url: string;

  @IsString()
  content: string;

  @IsString()
  image: string;
}

export class GeneralDataRO {
  id: string;
  created: Date;
  url: string;
  content: string;
  image: string;
  savedBy: PsychologistRO;
}
