import { IsBoolean, IsInt } from 'class-validator';
import { StudentRO } from '../students/student.dto';
import { ActivityRO } from '../activities/activity.dto';

export class DiagnosticDTO {
  @IsBoolean()
  result: boolean;
}

export class DiagnosticRO {
  id: string;
  created: Date;
  result: boolean;
  student: StudentRO;
  activities?: ActivityRO[];
}
