import { Injectable, HttpStatus, HttpException, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CamirTestEntity } from './camir-test.entity';
import { Repository } from 'typeorm';
import { StudentEntity } from '../students/student.entity';
import { CamirTestRO, CamirTestDTO } from './camir-test.dto';
import { PsychologistEntity } from '../psychologists/psychologist.entity';

@Injectable()
export class CamirTestsService {
  constructor(
    @InjectRepository(CamirTestEntity)
    private camirTestRepository: Repository<CamirTestEntity>,
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
    @InjectRepository(PsychologistEntity)
    private psychologistRepository: Repository<PsychologistEntity>,
  ) {}

  private camirTestToResponseObject(camirTest: CamirTestEntity): CamirTestRO {
    const responseObject: any = {
      ...camirTest,
      student: camirTest.student || null,
    };

    return responseObject;
  }

  async read(id: string): Promise<CamirTestRO> {
    const student = await this.studentRepository.findOne({
      where: { user: { id } },
      relations: ['user'],
    });

    if (!student) {
      throw new HttpException('Estudiante no encontrado', HttpStatus.NOT_FOUND);
    }

    const camirTest = await this.camirTestRepository.find({
      where: { student: { id: student.id } },
      relations: ['student'],
    });

    if (!camirTest) {
      throw new HttpException(
        'No hay tests asignados a este estudiante',
        HttpStatus.NOT_FOUND,
      );
    }

    return this.camirTestToResponseObject(camirTest[0]);
  }

  async showAll(id: string): Promise<CamirTestRO[]> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id } },
      relations: ['user'],
    });

    if (!psychologist) {
      throw new HttpException('Psicólogo no encontrado', HttpStatus.NOT_FOUND);
    }

    const camirTests = await this.camirTestRepository.find({
      relations: ['student'],
    });

    return camirTests.map(camirTest =>
      this.camirTestToResponseObject(camirTest),
    );
  }

  async showOne(idUser: string, id: string): Promise<CamirTestRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id } },
      relations: ['user'],
    });

    if (!psychologist) {
      throw new HttpException('Psicólogo no encontrado', HttpStatus.NOT_FOUND);
    }

    const camirTest = await this.camirTestRepository.findOne({
      where: { id },
      relations: ['student'],
    });

    if (!camirTest) {
      throw new HttpException('Camir Test no encontrado', HttpStatus.NOT_FOUND);
    }

    return this.camirTestToResponseObject(camirTest);
  }

  async create(userId: string, data: CamirTestDTO): Promise<CamirTestRO> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!student) {
      throw new HttpException('Estudiante no encontrado', HttpStatus.NOT_FOUND);
    }

    const camirTest = await this.camirTestRepository.create({
      ...data,
      student,
    });

    await this.camirTestRepository.save(camirTest);

    return this.camirTestToResponseObject(camirTest);
  }
}
