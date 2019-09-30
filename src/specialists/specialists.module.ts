import { Module } from '@nestjs/common';
import { SpecialistsService } from './specialists.service';
import { SpecialistsController } from './specialists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpecialistEntity } from './specialist.entity';
import { PsychologistEntity } from '../psychologists/psychologist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpecialistEntity, PsychologistEntity])],
  providers: [SpecialistsService],
  controllers: [SpecialistsController],
})
export class SpecialistsModule {}
