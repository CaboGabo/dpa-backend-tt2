import { Module } from '@nestjs/common';
import { ClassificationCriteriaService } from './classification-criteria.service';
import { ClassificationCriteriaController } from './classification-criteria.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassificationCriteriaEntity } from './classification-criteria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ClassificationCriteriaEntity])],
  providers: [ClassificationCriteriaService],
  controllers: [ClassificationCriteriaController],
})
export class ClassificationCriteriaModule {}
