import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { SuggestionEntity } from '../suggestions/suggestion.entity';
import { DiagnosticDetailEntity } from '../diagnostic-details/diagnostic-detail.entity';

@Entity('activities')
export class ActivityEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    type: 'boolean',
    default: false,
  })
  done: boolean;

  @ManyToOne(
    type => DiagnosticDetailEntity,
    diagnosticDetail => diagnosticDetail.activities,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  diagnosticDetail: DiagnosticDetailEntity;

  @ManyToOne(type => SuggestionEntity, suggestion => suggestion.activities)
  suggestion: SuggestionEntity;
}
