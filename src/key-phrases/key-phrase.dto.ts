import { IsString } from 'class-validator';
import { ClassificationCriteriaRO } from '../classification-criteria/classification-criteria.dto';

export class KeyPhraseDTO {
  @IsString()
  content: string;
}

export class KeyPhraseRO {
  id: string;
  created: Date;
  content: string;
  criteria: ClassificationCriteriaRO;
}
