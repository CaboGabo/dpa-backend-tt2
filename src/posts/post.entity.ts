import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { StudentEntity } from 'src/students/student.entity';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  content: string;

  @Column('text')
  type: string;

  @Column('date')
  postdate: Date;

  @ManyToOne(type => StudentEntity, author => author.posts)
  author: StudentEntity;
}
