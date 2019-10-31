import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
} from 'typeorm';
import { PsychologistEntity } from '../psychologists/psychologist.entity';

@Entity('specialists')
export class SpecialistEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  firstName: string;

  @Column('text')
  lastName: string;

  @Column('text')
  street: string;

  @Column('text')
  number: string;

  @Column('text')
  suburb: string;

  @Column()
  postalCode: string;

  @Column('text')
  state: string;

  @Column({
    nullable: true,
  })
  fullAddress: string;

  @Column({
    unique: true,
  })
  phone: string;

  @Column('text')
  profession: string;

  @ManyToOne(
    type => PsychologistEntity,
    psychologist => psychologist.recommendations,
  )
  savedBy: PsychologistEntity;
}
