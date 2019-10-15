import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { DiagnosticEntity } from '../diagnostics/diagnostic.entity';
import { ActivityEntity } from '../activities/activity.entity';
import { ClassificationCriteriaEntity } from '../classification-criteria/classification-criteria.entity';

@Entity('diagnosticdetails')
export class DiagnosticDetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column()
  result: boolean;

  @ManyToOne(type => DiagnosticEntity, diagnostic => diagnostic.details)
  diagnostic: DiagnosticEntity;

  @ManyToOne(
    type => ClassificationCriteriaEntity,
    classificationCriteria => classificationCriteria.diagnosticDetails,
  )
  classificationCriteria: ClassificationCriteriaEntity;

  @OneToMany(type => ActivityEntity, activity => activity.diagnosticDetail)
  activities: ActivityEntity[];
}