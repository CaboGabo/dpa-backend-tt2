import { IsString, IsNumber } from 'class-validator';
import { StudentRO } from '../students/student.dto';

export class PostDTO {
  @IsString()
  content: string;

  @IsString()
  type: string;

  @IsString()
  postdate: string;
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
