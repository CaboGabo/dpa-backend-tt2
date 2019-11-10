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
  result: boolean;

  @Column()
  depressionType: string;

  @Column('text')
  topWords: string;

  @ManyToOne(type => StudentEntity, student => student.diagnostics, { onDelete: 'CASCADE' })
  student: StudentEntity;

  /*@OneToMany(type => ActivityEntity, activity => activity.diagnostic)
  activities: ActivityEntity[];*/

  @OneToMany(
    type => DiagnosticDetailEntity,
    diagnosticDetail => diagnosticDetail.diagnostic,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE', cascade: true }
  )
  details: DiagnosticDetailEntity[];
}
