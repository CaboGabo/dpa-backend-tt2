import { IsString } from 'class-validator';
import { PsychologistRO } from '../psychologists/psychologist.dto';
import { Column } from 'typeorm';

export class GeneralDataDTO {
  @Column()
  url: string;

  @IsString()
  content: string;

  @IsString()
  title: string;

  @Column()
  image: string;
}

export class GeneralDataRO {
  id: string;
  created: Date;
  url?: string;
  content: string;
  image?: string;
  title: string;
  savedBy: PsychologistRO;
}
