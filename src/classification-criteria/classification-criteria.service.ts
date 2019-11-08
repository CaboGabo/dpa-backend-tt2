import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ClassificationCriteriaEntity } from './classification-criteria.entity';
import { Repository } from 'typeorm';
import {
  ClassificationCriteriaRO,
  ClassificationCriteriaDTO,
} from './classification-criteria.dto';
import { criteria } from './classification-criteria.data';

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

  async create(
    data: ClassificationCriteriaDTO,
  ): Promise<ClassificationCriteriaRO> {
    const classificationCriteria = await this.classificationCriteriaRepository.create(
      {
        ...data,
      },
    );

    await this.classificationCriteriaRepository.save(classificationCriteria);

    return this.classificationCriteriaToResponseObject(classificationCriteria);
  }

  async update(
    keyname: string,
    data: Partial<ClassificationCriteriaDTO>,
  ): Promise<ClassificationCriteriaRO> {
    let classificationCriteria = await this.classificationCriteriaRepository.findOne(
      {
        where: { keyname },
      },
    );

    if (!classificationCriteria) {
      throw new HttpException('Criteria not found', HttpStatus.NOT_FOUND);
    }

    await this.classificationCriteriaRepository.update(
      { id: classificationCriteria.id },
      data,
    );

    classificationCriteria = await this.classificationCriteriaRepository.findOne(
      {
        where: { keyname },
        relations: ['keyphrases', 'suggestions'],
      },
    );

    return this.classificationCriteriaToResponseObject(classificationCriteria);
  }

  async destroy(keyname: string): Promise<ClassificationCriteriaRO> {
    const classificationCriteria = await this.classificationCriteriaRepository.findOne(
      {
        where: { keyname },
      },
    );

    if (!classificationCriteria) {
      throw new HttpException('Criteria not found', HttpStatus.NOT_FOUND);
    }

    await this.classificationCriteriaRepository.remove(classificationCriteria);

    return this.classificationCriteriaToResponseObject(classificationCriteria);
  }

  async populate() {
    /*for (const c of criteria) {
      const dbc = await this.classificationCriteriaRepository.findOne({
        name: c.name,
      });
      if (!dbc) {
        await this.create(c);
      }
    }*/
  }
}
