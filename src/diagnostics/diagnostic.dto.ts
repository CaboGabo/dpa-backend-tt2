import { IsBoolean, IsInt, IsString } from 'class-validator';
import { StudentRO } from '../students/student.dto';
import { DiagnosticDetailEntity } from '../diagnostic-details/diagnostic-detail.entity';

export class DiagnosticDTO {
  @IsBoolean()
  result: boolean;

  @IsString()
  depressionType: string;
}

export class DiagnosticRO {
  id: string;
  created: Date;
  result: boolean;
  depressionType: string;
  student: StudentRO;
  topWords: string;
  details?: DiagnosticDetailEntity[];
}
