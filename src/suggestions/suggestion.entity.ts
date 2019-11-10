import { PsychologistEntity } from '../psychologists/psychologist.entity';
import { ActivityEntity } from '../activities/activity.entity';
import { ClassificationCriteriaEntity } from '../classification-criteria/classification-criteria.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity('suggestions')
export class SuggestionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  title: string;

  @Column('text')
  content: string;

  @Column({
    type: 'char',
    length: 1,
  })
  gender: string;

  @Column()
  rangeAge: string;

  @Column({
    nullable: true,
  })
  image: string;

  @Column()
  depressionType: string;

  @ManyToOne(
    type => PsychologistEntity,
    psychologist => psychologist.suggestions,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE' }
  )
  savedBy: PsychologistEntity;

  @OneToMany(type => ActivityEntity, activity => activity.suggestion)
  activities: ActivityEntity[];

  @ManyToOne(
    type => ClassificationCriteriaEntity,
    classificationCriteria => classificationCriteria.suggestions,
  )
  classificationCriteria: ClassificationCriteriaEntity;
}
