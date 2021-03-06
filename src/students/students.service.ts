import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StudentEntity } from './student.entity';
import { UserEntity } from '../users/user.entity';
import { StudentRO, StudentDTO } from './student.dto';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  private studentToResponseObject(student: StudentEntity): StudentRO {
    const responseObject: any = {
      ...student,
      user: student.user ? student.user.toResponseObject() : null,
      posts: student.posts || null,
      diagnostics: student.diagnostics || null,
      camirTests: student.camirTests || null,
    };

    return responseObject;
  }

  private ensureOwnership(student: StudentEntity, userId: string) {
    if (student.user.id !== userId) {
      throw new HttpException(
        'No estás autorizado para realizar esta acción',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async showAll(page: number = 1): Promise<StudentRO[]> {
    const students = await this.studentRepository.find({
      relations: ['user', 'posts', 'diagnostics'],
      take: 25,
      skip: 25 * (page - 1),
    });

    return students.map(student => this.studentToResponseObject(student));
  }

  async read(id: string): Promise<StudentRO> {
    const student = await this.studentRepository.findOne({
      where: { id },
      relations: ['user', 'posts', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Estudiante no encontrado', HttpStatus.NOT_FOUND);
    }

    return this.studentToResponseObject(student);
  }

  async create(userId: string, data: StudentDTO): Promise<StudentRO> {
    const user = await this.userRepository.findOne({ where: { id: userId } });
    let student = await this.studentRepository.findOne({
      where: { user: user.id },
      relations: ['user', 'posts', 'diagnostics'],
    });
    if (student) {
      throw new HttpException(
        'El estudiante ya existe',
        HttpStatus.BAD_REQUEST,
      );
    }

    student = await this.studentRepository.findOne({
      where: { enrollment: data.enrollment },
      relations: ['user', 'posts', 'diagnostics'],
    });

    if (student) {
      throw new HttpException(
        'El número de boleta ya existe',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (data.enrollment.length != 10 || !/^\d+$/.test(data.enrollment)) {
      throw new HttpException(
        'El número de boleta debe ser de 10 dígitos',
        HttpStatus.BAD_REQUEST,
      );
    }

    student = await this.studentRepository.create({ ...data, user });
    await this.studentRepository.save(student);
    return this.studentToResponseObject(student);
  }

  async update(
    id: string,
    userId: string,
    data: Partial<StudentDTO>,
  ): Promise<StudentRO> {
    let student = await this.studentRepository.findOne({
      where: { id },
      relations: ['user', 'posts', 'diagnostics'],
    });

    if (!student) {
      throw new HttpException('Estudiante no encontrado', HttpStatus.NOT_FOUND);
    }

    if (data.enrollment) {
      const studentByEnrollment = await this.studentRepository.findOne({
        where: { enrollment: data.enrollment },
      });
      if (studentByEnrollment && student.id !== studentByEnrollment.id) {
        throw new HttpException(
          'El número de boleta ya existe',
          HttpStatus.BAD_REQUEST,
        );
      }

      if (data.enrollment.length !== 10 || /^\d+$/.test(data.enrollment)) {
        throw new HttpException(
          'El número de boleta debe ser de 10 dígitos',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    this.ensureOwnership(student, userId);

    await this.studentRepository.update({ id }, data);
    student = await this.studentRepository.findOne({
      where: { id },
      relations: ['user', 'posts', 'diagnostics'],
    });
    return this.studentToResponseObject(student);
  }

  async destroy(id: string, userId: string): Promise<StudentRO> {
    const student = await this.studentRepository.findOne({
      where: { id },
      relations: ['user', 'posts', 'diagnostics'],
    });
    this.ensureOwnership(student, userId);
    await this.studentRepository.remove(student);
    return this.studentToResponseObject(student);
  }
}
