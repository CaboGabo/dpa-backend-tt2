import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { ClassificationCriteriaEntity } from '../classification-criteria/classification-criteria.entity';

@Entity('key_phrases')
export class KeyPhraseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  content: string;

  @ManyToOne(
    type => ClassificationCriteriaEntity,
    criteria => criteria.keyphrases,
  )
  criteria: ClassificationCriteriaEntity;
}
