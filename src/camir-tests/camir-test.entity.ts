import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  OneToOne,
  ManyToOne,
} from 'typeorm';
import { StudentEntity } from '../students/student.entity';

@Entity('camir_tests')
export class CamirTestEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column('text')
  result: string;

  @ManyToOne(type => StudentEntity, student => student.camirTests)
  student: StudentEntity;
}
