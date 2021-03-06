import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SpecialistEntity } from './specialist.entity';
import { Repository } from 'typeorm';
import { PsychologistEntity } from '../psychologists/psychologist.entity';
import { SpecialistRO, SpecialistDTO } from './specialist.dto';

@Injectable()
export class SpecialistsService {
  constructor(
    @InjectRepository(SpecialistEntity)
    private specialistRepository: Repository<SpecialistEntity>,
    @InjectRepository(PsychologistEntity)
    private psychologistRepository: Repository<PsychologistEntity>,
  ) {}

  private specialistToResponseObject(
    specialist: SpecialistEntity,
  ): SpecialistRO {
    const responseObject: any = {
      ...specialist,
      savedBy: specialist.savedBy || null,
    };

    return responseObject;
  }

  private ensureOwnership(
    specialist: SpecialistEntity,
    psychologistId: string,
  ) {
    if (specialist.savedBy.id !== psychologistId) {
      throw new HttpException(
        'No estás autorizado para realizar esta acción',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async showAll(page: number = 1): Promise<SpecialistRO[]> {
    const specialists = await this.specialistRepository.find({
      relations: ['savedBy'],
      take: 25,
      skip: 25 * (page - 1),
    });

    return specialists.map(specialist =>
      this.specialistToResponseObject(specialist),
    );
  }

  async read(id: string): Promise<SpecialistRO> {
    const specialist = await this.specialistRepository.findOne({
      where: { id },
      relations: ['savedBy'],
    });

    if (!specialist) {
      throw new HttpException(
        'Especialista no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.specialistToResponseObject(specialist);
  }

  async create(userId: string, data: SpecialistDTO): Promise<SpecialistRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });
    if (!psychologist) {
      throw new HttpException('Psicólogo no encontrado', HttpStatus.NOT_FOUND);
    }

    if (!psychologist.isValidated) {
      throw new HttpException('Psicólogo no validado', HttpStatus.NOT_FOUND);
    }

    if (!/^\d+$/.test(data.phone)) {
      throw new HttpException(
        'El número telefónico debe contener únicamente dígitos',
        HttpStatus.BAD_REQUEST,
      );
    }

    let specialist = await this.specialistRepository.create({
      ...data,
      savedBy: psychologist,
    });

    await this.specialistRepository.save(specialist);
    return this.specialistToResponseObject(specialist);
  }

  async update(
    id: string,
    userId: string,
    data: Partial<SpecialistDTO>,
  ): Promise<SpecialistRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!psychologist) {
      throw new HttpException('Psicólogo no encontrado', HttpStatus.NOT_FOUND);
    }

    if (!psychologist.isValidated) {
      throw new HttpException('Psicólogo no validado', HttpStatus.NOT_FOUND);
    }

    let specialist = await this.specialistRepository.findOne({
      where: { savedBy: { id: psychologist.id }, id },
      relations: ['savedBy'],
    });

    if (!specialist) {
      throw new HttpException(
        'Especialista no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    if (data.phone) {
      const specialistByPhone = await this.specialistRepository.findOne({
        where: { phone: data.phone },
      });
      if (specialistByPhone && specialist.id !== specialistByPhone.id) {
        throw new HttpException(
          'El número telefónico ya existe',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (!/^\d+$/.test(data.phone)) {
        throw new HttpException(
          'El número telefónico debe contener únicamente dígitos',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    this.ensureOwnership(specialist, psychologist.id);

    await this.specialistRepository.update({ id }, data);
    specialist = await this.specialistRepository.findOne({
      where: { savedBy: { id: psychologist.id }, id },
      relations: ['savedBy'],
    });

    return this.specialistToResponseObject(specialist);
  }

  async destroy(id: string, userId: string): Promise<SpecialistRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!psychologist) {
      throw new HttpException('Psicólogo no encontrado', HttpStatus.NOT_FOUND);
    }

    if (!psychologist.isValidated) {
      throw new HttpException('Psicólogo no validado', HttpStatus.NOT_FOUND);
    }

    let specialist = await this.specialistRepository.findOne({
      where: { savedBy: { id: psychologist.id }, id },
      relations: ['savedBy'],
    });

    if (!specialist) {
      throw new HttpException(
        'Especialista no encontrado',
        HttpStatus.NOT_FOUND,
      );
    }

    this.ensureOwnership(specialist, psychologist.id);

    await this.specialistRepository.remove(specialist);
    return this.specialistToResponseObject(specialist);
  }
}
