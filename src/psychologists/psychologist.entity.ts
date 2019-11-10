import { UserEntity } from '../users/user.entity';
import { SpecialistEntity } from '../specialists/specialist.entity';
import { GeneralDataEntity } from '../general-data/general-data.entity';
import { SuggestionEntity } from '../suggestions/suggestion.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  Column,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';

@Entity('psychologists')
export class PsychologistEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  created: Date;

  @Column({
    unique: true,
    length: 13,
  })
  rfc: string;

  @Column('text')
  firstName: string;

  @Column('text')
  lastName: string;

  @Column({
    type: 'boolean',
    default: false,
  })
  isValidated: boolean;

  @OneToOne(type => UserEntity, user => user.psychologist, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: UserEntity;

  @OneToMany(type => SpecialistEntity, specialist => specialist.savedBy)
  recommendations: SpecialistEntity[];

  @OneToMany(type => GeneralDataEntity, generalData => generalData.savedBy)
  generalData: GeneralDataEntity[];

  @OneToMany(type => SuggestionEntity, suggestion => suggestion.savedBy)
  suggestions: SuggestionEntity[];
}
