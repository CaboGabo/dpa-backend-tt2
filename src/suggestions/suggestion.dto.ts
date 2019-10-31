import { IsString } from 'class-validator';
import { PsychologistRO } from '../psychologists/psychologist.dto';
import { Column } from 'typeorm';
import { ClassificationCriteriaEntity } from '../classification-criteria/classification-criteria.entity';

export class SuggestionDTO {
  @IsString()
  content: string;

  @IsString()
  gender: string;

  @IsString()
  rangeAge: string;

  @Column()
  image: string;

  @Column()
  depressionType: string;
}

export class SuggestionRO {
  id: string;
  created: Date;
  content: string;
  gender: string;
  rangeAge: string;
  image?: string;
  savedBy: PsychologistRO;
  classificationCriteria: ClassificationCriteriaEntity;
}
