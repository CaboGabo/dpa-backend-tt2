import { IsString } from 'class-validator';
import { UserRO } from '../users/user.dto';
import { SpecialistRO } from '../specialists/specialist.dto';
import { GeneralDataRO } from '../general-data/general-data.dto';
import { SuggestionRO } from '../suggestions/suggestion.dto';

export class PsychologistDTO {
  @IsString()
  rfc: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;
}

export class PsychologistRO {
  id: string;
  created: Date;
  rfc: string;
  firstName: string;
  lastName: string;
  user: UserRO;
  recommendations?: SpecialistRO[];
  generalData?: GeneralDataRO[];
  suggestions?: SuggestionRO[];
}
