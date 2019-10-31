import { IsString } from 'class-validator';
import { PsychologistRO } from '../psychologists/psychologist.dto';
import { Column } from 'typeorm';

export class SpecialistDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  street: string;

  @IsString()
  number: string;

  @IsString()
  suburb: string;

  @IsString()
  state: string;

  @IsString()
  phone: string;

  @IsString()
  profession: string;

  @Column()
  fullAddress: string;
}

export class SpecialistRO {
  id: string;
  created: Date;
  firstName: string;
  lastName: string;
  street: string;
  number: string;
  suburb: string;
  state: string;
  phone: string;
  postalCode: string;
  fullAddress?: string;
  profession: string;
  savedBy: PsychologistRO;
}
