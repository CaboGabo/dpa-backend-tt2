import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { DiagnosticEntity } from '../diagnostics/diagnostic.entity';
import { SuggestionEntity } from '../suggestions/suggestion.entity';

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

  @ManyToOne(type => DiagnosticEntity, diagnostic => diagnostic.activities)
  diagnostic: DiagnosticEntity;

  @ManyToOne(type => SuggestionEntity, suggestion => suggestion.activities)
  suggestion: SuggestionEntity;
}
