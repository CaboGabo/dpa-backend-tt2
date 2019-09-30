import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PsychologistEntity } from './psychologist.entity';
import { Repository } from 'typeorm';
import { UserEntity } from 'src/users/user.entity';
import { PsychologistRO, PsychologistDTO } from './psychologist.dto';

@Injectable()
export class PsychologistsService {
  constructor(
    @InjectRepository(PsychologistEntity)
    private psychologistRepository: Repository<PsychologistEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  private psychologistToResponseObject(
    psychologist: PsychologistEntity,
  ): PsychologistRO {
    const responseObject: any = {
      ...psychologist,
      user: psychologist.user ? psychologist.user.toResponseObject() : null,
      recommendations: psychologist.recommendations || null,
      generalData: psychologist.generalData || null,
      suggestions: psychologist.suggestions || null,
    };

    return responseObject;
  }

  private ensureOwnership(psychologist: PsychologistEntity, userId: string) {
    if (psychologist.user.id !== userId) {
      throw new HttpException('Incorrect user', HttpStatus.UNAUTHORIZED);
    }
  }

  async showAll(page: number = 1): Promise<PsychologistRO[]> {
    const psychologists = await this.psychologistRepository.find({
      relations: ['user', 'recommendations', 'generalData', 'suggestions'],
      take: 25,
      skip: 25 * (page - 1),
    });

    return psychologists.map(psychologist =>
      this.psychologistToResponseObject(psychologist),
    );
  }

  async read(id: string): Promise<PsychologistRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { id },
      relations: ['user', 'recommendations', 'generalData', 'suggestions'],
    });

    if (!psychologist) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    return this.psychologistToResponseObject(psychologist);
  }

  async create(userId: string, data: PsychologistDTO): Promise<PsychologistRO> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    let psychologist = await this.psychologistRepository.findOne({
      where: { user: user.id },
      relations: ['user', 'recommendations', 'generalData', 'suggestions'],
    });

    if (psychologist) {
      throw new HttpException(
        'Psychologist already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    psychologist = await this.psychologistRepository.findOne({
      where: { rfc: data.rfc },
      relations: ['user', 'recommendations', 'generalData', 'suggestions'],
    });

    if (psychologist) {
      throw new HttpException('rfc already exists', HttpStatus.BAD_REQUEST);
    }

    psychologist = await this.psychologistRepository.create({
      ...data,
      user,
    });

    await this.psychologistRepository.save(psychologist);
    return this.psychologistToResponseObject(psychologist);
  }

  async update(
    id: string,
    userId: string,
    data: Partial<PsychologistDTO>,
  ): Promise<PsychologistRO> {
    let psychologist = await this.psychologistRepository.findOne({
      where: { id },
      relations: ['user', 'recommendations', 'generalData', 'suggestions'],
    });

    if (!psychologist) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    if (data.rfc) {
      const psychologistByRfc = await this.psychologistRepository.findOne({
        where: { rfc: psychologist.rfc },
      });
      if (psychologistByRfc && psychologist.id !== psychologistByRfc.id) {
        throw new HttpException('Rfc already exists', HttpStatus.BAD_REQUEST);
      }
    }

    this.ensureOwnership(psychologist, userId);

    await this.psychologistRepository.update({ id }, data);
    psychologist = await this.psychologistRepository.findOne({
      where: { id },
      relations: ['user', 'recommendations', 'generalData', 'suggestions'],
    });

    return this.psychologistToResponseObject(psychologist);
  }

  async destroy(id: string, userId: string): Promise<PsychologistRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { id },
      relations: ['user', 'recommendations', 'generalData', 'suggestions'],
    });
    this.ensureOwnership(psychologist, userId);
    await this.psychologistRepository.remove(psychologist);
    return this.psychologistToResponseObject(psychologist);
  }
}
