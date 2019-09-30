import { Module } from '@nestjs/common';
import { GeneralDataService } from './general-data.service';
import { GeneralDataController } from './general-data.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneralDataEntity } from './general-data.entity';
import { PsychologistEntity } from '../psychologists/psychologist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GeneralDataEntity, PsychologistEntity])],
  providers: [GeneralDataService],
  controllers: [GeneralDataController],
})
export class GeneralDataModule {}
