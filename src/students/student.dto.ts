import { IsString, IsNumber } from 'class-validator';
import { UserRO } from '../users/user.dto';
import { PostRO } from '../posts/post.dto';
import { DiagnosticRO } from '../diagnostics/diagnostic.dto';

export class StudentDTO {
  @IsString()
  enrollment: string;

  @IsNumber()
  semester: number;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  gender: string;

  @IsNumber()
  age: number;
}

export class StudentRO {
  id: string;
  created: Date;
  enrollment: string;
  semester: number;
  firstName: string;
  lastName: string;
  gender: string;
  age: number;
  user: UserRO;
  posts?: PostRO[];
  diagnostics?: DiagnosticRO[];
}
