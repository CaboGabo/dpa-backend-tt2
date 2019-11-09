import { IsString } from 'class-validator';
import { StudentRO } from '../students/student.dto';

export class CamirTestDTO {
  @IsString()
  result: string;
}

export class CamirTestRO {
  id: string;
  created: Date;
  result: string;
  student?: StudentRO;
}
