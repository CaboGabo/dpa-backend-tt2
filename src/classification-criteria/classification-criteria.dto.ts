import { IsString } from 'class-validator';
import { KeyPhraseRO } from '../key-phrases/key-phrase.dto';
import { SuggestionRO } from '../suggestions/suggestion.dto';

export class ClassificationCriteriaDTO {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsString()
  keyname: string;
}

export class ClassificationCriteriaRO {
  id: string;
  created: Date;
  name: string;
  description: string;
  keyname: string;
  keyphrases?: KeyPhraseRO[];
  suggestions?: SuggestionRO[];
}
