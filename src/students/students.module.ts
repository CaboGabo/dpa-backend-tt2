import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';
import { StudentEntity } from './student.entity';
import { UserEntity } from '../users/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity, UserEntity])],
  controllers: [StudentsController],
  providers: [StudentsService],
})
export class StudentsModule {}
