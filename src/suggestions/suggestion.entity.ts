import { PsychologistEntity } from '../psychologists/psychologist.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';

@Entity('suggestions')
export class SuggestionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  content: string;

  @Column()
  activationScore: number;

  @ManyToOne(
    type => PsychologistEntity,
    psychologist => psychologist.suggestions,
  )
  savedBy: PsychologistEntity;
}
