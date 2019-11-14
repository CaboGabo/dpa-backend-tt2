import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  OneToMany,
  ManyToMany,
  JoinTable,
  BeforeInsert,
  AfterLoad,
} from 'typeorm';
import { DiagnosticEntity } from '../diagnostics/diagnostic.entity';
import { ActivityEntity } from '../activities/activity.entity';
import { ClassificationCriteriaEntity } from '../classification-criteria/classification-criteria.entity';
import { PostEntity } from '../posts/post.entity';
import * as CryptoJS from 'crypto-js';

@Entity('diagnosticdetails')
export class DiagnosticDetailEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column()
  result: string;

  @BeforeInsert()
  encryptResult() {
    console.log(this.result);
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

  @ManyToOne(type => DiagnosticEntity, diagnostic => diagnostic.details, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  diagnostic: DiagnosticEntity;

  @ManyToOne(
    type => ClassificationCriteriaEntity,
    classificationCriteria => classificationCriteria.diagnosticDetails,
  )
  classificationCriteria: ClassificationCriteriaEntity;

  @OneToMany(type => ActivityEntity, activity => activity.diagnosticDetail)
  activities: ActivityEntity[];

  @ManyToMany(type => PostEntity, {
    cascade: true,
  })
  @JoinTable()
  posts: PostEntity[];
}
