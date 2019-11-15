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

  /*@Column({
    type: 'float',
    default: 0,
  })
  sentiment: number;

  @Column({
    type: 'float',
    default: 0,
  })
  magnitude: number;

  @Column({
    type: 'text',
    default: '-',
  })
  tag: string;*/

  @Column('text')
  type: string;

  @Column({
    type: 'datetime',
  })
  postdate: Date;

  @ManyToOne(type => StudentEntity, author => author.posts, {
    onDelete: 'CASCADE',
  })
  author: StudentEntity;
}
