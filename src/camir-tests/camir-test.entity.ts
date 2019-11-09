import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  OneToOne,
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

  @OneToOne(type => StudentEntity, student => student.camirTest)
  student: StudentEntity;
}
