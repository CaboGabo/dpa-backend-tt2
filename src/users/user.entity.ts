import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  BeforeInsert,
  OneToOne,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { StudentEntity } from '../students/student.entity';
import { PsychologistEntity } from '../psychologists/psychologist.entity';
import { UserRO } from './user.dto';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    unique: true,
  })
  email: string;

  @Column({
    unique: true,
  })
  username: string;

  @Column('text')
  password: string;

  @Column({
    default: false,
  })
  isValidated: boolean;

  @Column({
    default: false,
  })
  google: boolean;

  @Column({
    default: false,
  })
  facebook: boolean;

  @OneToOne(type => StudentEntity, student => student.user)
  student: StudentEntity;

  @OneToOne(type => PsychologistEntity, psychologist => psychologist.user)
  psychologist: PsychologistEntity;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  async comparePassword(attempt: string): Promise<boolean> {
    //console.log(await bcrypt.compare(attempt, this.password));
    return await bcrypt.compare(attempt, this.password);
  }

  toResponseObject(): UserRO {
    const { id, created, username, email } = this;
    const responseObject: UserRO = {
      id,
      created,
      username,
      email,
    };

    if (this.student) {
      responseObject.student = this.student;
    } else {
      responseObject.student = null;
    }

    if (this.psychologist) {
      responseObject.psychologist = this.psychologist;
    } else {
      responseObject.psychologist = null;
    }

    return responseObject;
  }
}
