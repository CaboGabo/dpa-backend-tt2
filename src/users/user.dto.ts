import { StudentEntity } from '../students/student.entity';
import { PsychologistEntity } from '../psychologists/psychologist.entity';
import { IsOptional } from 'class-validator';

export class UserDTO {
  username: string;
  @IsOptional()
  password: string;
  email: string;
}

export class UserRO {
  id: string;
  username: string;
  created: Date;
  email: string;
  token?: string;
  student?: StudentEntity;
  psychologist?: PsychologistEntity;
}
