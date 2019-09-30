import { KeyPhraseEntity } from '../key-phrases/key-phrase.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  OneToMany,
} from 'typeorm';

@Entity('classification_criteria')
export class ClassificationCriteriaEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  name: string;

  @Column('text')
  description: string;

  @Column({
    unique: true,
  })
  keyname: string;

  @OneToMany(type => KeyPhraseEntity, keyphrase => keyphrase.criteria, {
    cascade: true,
  })
  keyphrases: KeyPhraseEntity[];
}
