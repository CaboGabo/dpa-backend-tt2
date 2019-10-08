import { Module } from '@nestjs/common';
import { PsychologistsController } from './psychologists.controller';
import { PsychologistsService } from './psychologists.service';
import { PsychologistEntity } from './psychologist.entity';
import { UserEntity } from '../users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PsychologistEntity, UserEntity])],
  controllers: [PsychologistsController],
  providers: [PsychologistsService],
})
export class PsychologistsModule {}
