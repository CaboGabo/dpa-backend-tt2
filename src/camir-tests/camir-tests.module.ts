import { Module } from '@nestjs/common';
import { CamirTestsController } from './camir-tests.controller';
import { CamirTestsService } from './camir-tests.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CamirTestEntity } from './camir-test.entity';
import { PsychologistEntity } from '../psychologists/psychologist.entity';
import { StudentEntity } from '../students/student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CamirTestEntity,
      PsychologistEntity,
      StudentEntity,
    ]),
  ],
  controllers: [CamirTestsController],
  providers: [CamirTestsService],
})
export class CamirTestsModule {}
