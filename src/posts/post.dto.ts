import { IsString, IsNumber, IsDate } from 'class-validator';
import { StudentRO } from '../students/student.dto';

export class PostDTO {
  @IsString()
  content: string;

  @IsString()
  type: string;

  @IsDate()
  postdate: Date;
}

export class PostRO {
  id: string;
  created: Date;
  content: string;
  sentiment: number;
  magnitude: number;
  tag: string;
  type: string;
  postdate: Date;
  author: StudentRO;
}
