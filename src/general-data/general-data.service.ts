import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PsychologistEntity } from '../psychologists/psychologist.entity';
import { Repository } from 'typeorm';
import { GeneralDataEntity } from './general-data.entity';
import { GeneralDataRO, GeneralDataDTO } from './general-data.dto';

@Injectable()
export class GeneralDataService {
  constructor(
    @InjectRepository(PsychologistEntity)
    private psychologistRepository: Repository<PsychologistEntity>,
    @InjectRepository(GeneralDataEntity)
    private generalDataRepository: Repository<GeneralDataEntity>,
  ) {}

  private generalDataToResponseObject(
    generalData: GeneralDataEntity,
  ): GeneralDataRO {
    const responseObject: any = {
      ...generalData,
      savedBy: generalData.savedBy || null,
    };

    return responseObject;
  }

  private ensureOwnership(
    generalData: GeneralDataEntity,
    psychologistId: string,
  ) {
    if (generalData.savedBy.id !== psychologistId) {
      throw new HttpException(
        'Incorrect psychologist',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async showAll(page: number = 1): Promise<GeneralDataRO[]> {
    const generalData = await this.generalDataRepository.find({
      relations: ['savedBy'],
      take: 25,
      skip: 25 * (page - 1),
    });

    return generalData.map(data => this.generalDataToResponseObject(data));
  }

  async read(id: string): Promise<GeneralDataRO> {
    const generalData = await this.generalDataRepository.findOne({
      where: { id },
      relations: ['savedBy'],
    });

    if (!generalData) {
      throw new HttpException('General data not found', HttpStatus.NOT_FOUND);
    }

    return this.generalDataToResponseObject(generalData);
  }

  async create(userId: string, data: GeneralDataDTO): Promise<GeneralDataRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });
    if (!psychologist) {
      throw new HttpException('Psychologist not found', HttpStatus.NOT_FOUND);
    }

    const generalData = await this.generalDataRepository.create({
      ...data,
      savedBy: psychologist,
    });

    await this.generalDataRepository.save(generalData);
    return this.generalDataToResponseObject(generalData);
  }

  async update(
    id: string,
    userId: string,
    data: Partial<GeneralDataDTO>,
  ): Promise<GeneralDataRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!psychologist) {
      throw new HttpException('Psychologist not found', HttpStatus.NOT_FOUND);
    }

    let generalData = await this.generalDataRepository.findOne({
      where: { savedBy: { id: psychologist.id }, id },
      relations: ['savedBy'],
    });

    if (!generalData) {
      throw new HttpException('General data not found', HttpStatus.NOT_FOUND);
    }

    this.ensureOwnership(generalData, psychologist.id);

    await this.generalDataRepository.update({ id }, data);
    generalData = await this.generalDataRepository.findOne({
      where: { savedBy: { id: psychologist.id }, id },
      relations: ['savedBy'],
    });

    return this.generalDataToResponseObject(generalData);
  }

  async destroy(id: string, userId: string): Promise<GeneralDataRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!psychologist) {
      throw new HttpException('Psychologist not found', HttpStatus.NOT_FOUND);
    }

    let generalData = await this.generalDataRepository.findOne({
      where: { savedBy: { id: psychologist.id }, id },
      relations: ['savedBy'],
    });

    if (!generalData) {
      throw new HttpException('General data not found', HttpStatus.NOT_FOUND);
    }

    this.ensureOwnership(generalData, psychologist.id);

    await this.generalDataRepository.remove(generalData);
    return this.generalDataToResponseObject(generalData);
  }
}
