import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  OneToMany,
  BeforeInsert,
  AfterLoad,
} from 'typeorm';
import { StudentEntity } from '../students/student.entity';
import { DiagnosticDetailEntity } from '../diagnostic-details/diagnostic-detail.entity';
import * as CryptoJS from 'crypto-js';

@Entity('diagnostics')
export class DiagnosticEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column()
  result: string;

  @Column()
  depressionType: string;

  @Column('text')
  topWords: string;

  @BeforeInsert()
  encryptResult() {
    this.result = CryptoJS.AES.encrypt(
      this.result,
      process.env.SECRET,
    ).toString();
  }

  @AfterLoad()
  decryptResult() {
    this.result = CryptoJS.AES.decrypt(
      this.result,
      process.env.SECRET,
    ).toString(CryptoJS.enc.Utf8);
  }

  @ManyToOne(type => StudentEntity, student => student.diagnostics, {
    onDelete: 'CASCADE',
  })
  student: StudentEntity;

  @OneToMany(
    type => DiagnosticDetailEntity,
    diagnosticDetail => diagnosticDetail.diagnostic,
    { onDelete: 'CASCADE', onUpdate: 'CASCADE', cascade: true },
  )
  details: DiagnosticDetailEntity[];
}
