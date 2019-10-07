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
import { DiagnosticDetailEntity } from '../diagnostic-details/diagnostic-detail.entity';

@Entity('diagnostics')
export class DiagnosticEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column()
  result: string;

  @Column()
  depressionType: string;

  @ManyToOne(type => StudentEntity, student => student.diagnostics)
  student: StudentEntity;

  /*@OneToMany(type => ActivityEntity, activity => activity.diagnostic)
  activities: ActivityEntity[];*/

  @OneToMany(
    type => DiagnosticDetailEntity,
    diagnosticDetail => diagnosticDetail.diagnostic,
  )
  details: DiagnosticDetailEntity[];
}
