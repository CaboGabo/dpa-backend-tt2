import { Module } from '@nestjs/common';
import { KeyPhrasesService } from './key-phrases.service';
import { KeyPhrasesController } from './key-phrases.controller';
import { KeyPhraseEntity } from './key-phrase.entity';
import { ClassificationCriteriaEntity } from '../classification-criteria/classification-criteria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([KeyPhraseEntity, ClassificationCriteriaEntity]),
  ],
  providers: [KeyPhrasesService],
  controllers: [KeyPhrasesController],
})
export class KeyPhrasesModule {}
