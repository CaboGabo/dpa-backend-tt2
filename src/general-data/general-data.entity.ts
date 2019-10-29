import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { PsychologistEntity } from '../psychologists/psychologist.entity';

@Entity('general_data')
export class GeneralDataEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  url: string;

  @Column('text')
  content: string;

  @Column('text')
  image: string;

  @Column('text')
  title: string;

  @ManyToOne(
    type => PsychologistEntity,
    psychologist => psychologist.generalData,
  )
  savedBy: PsychologistEntity;
}
