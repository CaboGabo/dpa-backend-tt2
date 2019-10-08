import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { KeyPhraseEntity } from './key-phrase.entity';
import { Repository } from 'typeorm';
import { KeyPhraseRO, KeyPhraseDTO } from './key-phrase.dto';
import { ClassificationCriteriaEntity } from '../classification-criteria/classification-criteria.entity';

@Injectable()
export class KeyPhrasesService {
  constructor(
    @InjectRepository(KeyPhraseEntity)
    private keyPhraseRepository: Repository<KeyPhraseEntity>,
    @InjectRepository(ClassificationCriteriaEntity)
    private classificationCriteriaRepository: Repository<
      ClassificationCriteriaEntity
    >,
  ) {}

  private keyPhraseToResponseObject(
    keyPhraseEntity: KeyPhraseEntity,
  ): KeyPhraseRO {
    const responseObject: any = {
      ...keyPhraseEntity,
      criteria: keyPhraseEntity.criteria || null,
    };

    return responseObject;
  }

  async create(
    classificationCriteriaKey: string,
    data: KeyPhraseDTO,
  ): Promise<KeyPhraseRO> {
    const classificationCriteria = await this.classificationCriteriaRepository.findOne(
      { where: { keyname: classificationCriteriaKey } },
    );
    if (!classificationCriteria) {
      throw new HttpException(
        'Classification criteria not found',
        HttpStatus.NOT_FOUND,
      );
    }

    const keyPhrase = await this.keyPhraseRepository.create({
      ...data,
      criteria: classificationCriteria,
    });
    await this.keyPhraseRepository.save(keyPhrase);
    return this.keyPhraseToResponseObject(keyPhrase);
  }
}
