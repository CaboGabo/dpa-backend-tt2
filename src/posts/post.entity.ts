import {
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { StudentEntity } from '../students/student.entity';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  content: string;

  @Column('float')
  sentiment: number;

  @Column('float')
  magnitude: number;

  @Column('text')
  tag: string;

  @Column('text')
  type: string;

  @Column('date')
  postdate: Date;

  @ManyToOne(type => StudentEntity, author => author.posts)
  author: StudentEntity;
}
