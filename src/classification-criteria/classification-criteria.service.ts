import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassificationCriteriaEntity } from './classification-criteria.entity';
import { Repository } from 'typeorm';
import { ClassificationCriteriaRO } from './classification-criteria.dto';

@Injectable()
export class ClassificationCriteriaService {
  constructor(
    @InjectRepository(ClassificationCriteriaEntity)
    private classificationCriteriaRepository: Repository<
      ClassificationCriteriaEntity
    >,
  ) {}

  private classificationCriteriaToResponseObject(
    classificationCriteria: ClassificationCriteriaEntity,
  ): ClassificationCriteriaRO {
    const responseObject: any = {
      ...classificationCriteria,
      keyphrases: classificationCriteria.keyphrases || null,
      suggestions: classificationCriteria.suggestions || null,
    };
    return responseObject;
  }

  async showAll(): Promise<ClassificationCriteriaRO[]> {
    const classificationCriteria = await this.classificationCriteriaRepository.find(
      {
        relations: ['keyphrases', 'suggestions'],
      },
    );

    return classificationCriteria.map(criteria =>
      this.classificationCriteriaToResponseObject(criteria),
    );
  }

  async read(keyname: string): Promise<ClassificationCriteriaRO> {
    const classificationCriteria = await this.classificationCriteriaRepository.findOne(
      { where: { keyname }, relations: ['keyphrases', 'suggestions'] },
    );

    return this.classificationCriteriaToResponseObject(classificationCriteria);
  }
}
