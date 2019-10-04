import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { StudentEntity } from '../students/student.entity';
import { SuggestionEntity } from '../suggestions/suggestion.entity';
import { ActivityEntity } from '../activities/activity.entity';

@Entity('diagnostics')
export class DiagnosticEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column()
  result: string;

  @ManyToOne(type => StudentEntity, student => student.diagnostics)
  student: StudentEntity;

  @OneToMany(type => ActivityEntity, activity => activity.diagnostic)
  activities: ActivityEntity[];
}
