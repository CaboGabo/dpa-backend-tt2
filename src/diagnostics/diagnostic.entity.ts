import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { StudentEntity } from '../students/student.entity';
import { SuggestionEntity } from '../suggestions/suggestion.entity';

@Entity('diagnostics')
export class DiagnosticEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('boolean')
  result: boolean;

  @Column()
  score: number;

  @ManyToOne(type => StudentEntity, student => student.diagnostics)
  student: StudentEntity;

  @ManyToMany(type => SuggestionEntity, { cascade: true })
  @JoinTable()
  suggestions: SuggestionEntity[];
}
