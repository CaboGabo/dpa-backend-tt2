import { UserEntity } from '../users/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { PostEntity } from '../posts/post.entity';
import { DiagnosticEntity } from '../diagnostics/diagnostic.entity';
import { CamirTestEntity } from '../camir-tests/camir-test.entity';

@Entity('students')
export class StudentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    unique: true,
    length: 10,
  })
  enrollment: string;

  @Column('int')
  semester: number;

  @Column('text')
  firstName: string;

  @Column('text')
  lastName: string;

  @Column()
  age: number;

  @Column({
    type: 'char',
    length: '1',
  })
  gender: string;

  @OneToOne(type => UserEntity, user => user.student, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: UserEntity;

  @OneToMany(type => PostEntity, post => post.author, { cascade: true, onDelete: 'CASCADE', onUpdate: 'CASCADE' })
  posts: PostEntity[];

  @OneToMany(type => DiagnosticEntity, diagnostic => diagnostic.student, {
    cascade: true,
    onDelete: 'CASCADE'
  })
  diagnostics: DiagnosticEntity[];

  @OneToOne(type => CamirTestEntity, camirTest => camirTest.student)
  camirTest: CamirTestEntity;
}
