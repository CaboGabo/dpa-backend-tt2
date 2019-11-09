import { IsString } from 'class-validator';
import { StudentRO } from '../students/student.dto';

export class CamirTestDTO {
  result: any;
}

export class CamirTestRO {
  id: string;
  created: Date;
  result: string;
  student?: StudentRO;
}
