import { StudentEntity } from '../students/student.entity';
import { PsychologistEntity } from '../psychologists/psychologist.entity';

export class UserDTO {
  username: string;
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
