import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';
import { UserDTO } from './user.dto';
import * as sgMail from '@sendgrid/mail';
import * as fs from 'fs';
//import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>, // private authService: AuthService,
  ) {}

  async showAll(page: number = 1) {
    const users = await this.userRepository.find({
      relations: ['psychologist', 'student'],
      take: 25,
      skip: 25 * (page - 1),
    });
    return users.map(user => user.toResponseObject());
  }

  async read(username: string) {
    const user = await this.userRepository.findOne({
      where: { username },
      relations: ['psychologist', 'student'],
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user.toResponseObject();
  }

  async findOne(username: string): Promise<UserEntity | undefined> {
    const user = await this.userRepository.findOne({ where: { username } });
    return user;
  }

  async register(data: UserDTO) {
    const { username, email } = data;

    let user = await this.userRepository.findOne({ where: { username } });
    if (user) {
      throw new HttpException(
        'Username already exists',
        HttpStatus.BAD_REQUEST,
      );
    }
    user = await this.userRepository.findOne({ where: { email } });
    if (user) {
      throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
    }
    user = await this.userRepository.create(data);
    await this.userRepository.save(user);

    sgMail.setApiKey(process.env.API_KEY);

    const template = fs.readFileSync('src/email/confirmation-email.html');

    let html = template
      .toString()
      .replace(':username', user.username)
      .replace(':id', user.id);
    const msg = {
      to: user.email,
      from: 'gabo.alejandro.huitron@gmail.com',
      subject: 'DPa - Confirmación de email',
      html: html,
    };
    sgMail.send(msg);

    return user.toResponseObject();
  }

  async resendEmail(data: Partial<UserDTO>) {
    const user = await this.userRepository.findOne({
      where: { email: data.email },
    });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    const template = fs.readFileSync('src/email/confirmation-email.html');

    sgMail.setApiKey(process.env.API_KEY);
    let html = template
      .toString()
      .replace(':username', user.username)
      .replace(':id', user.id);
    const msg = {
      to: user.email,
      from: 'gabo.alejandro.huitron@gmail.com',
      subject: 'DPa - Confirmación de email',
      html: html,
    };
    sgMail.send(msg);

    return user.toResponseObject();
  }

  async edit(username: string, data: Partial<UserDTO>) {
    let user = await this.userRepository.findOne({ where: { username } });
    if (data.email) {
      const userByEmail = await this.userRepository.findOne({
        where: { email: data.email },
      });
      if (userByEmail && user.id !== userByEmail.id) {
        throw new HttpException('Email already exists', HttpStatus.BAD_REQUEST);
      }
    }

    if (data.username) {
      const userByUsername = await this.userRepository.findOne({
        where: { username: data.username },
      });
      if (userByUsername && user.id !== userByUsername.id) {
        throw new HttpException(
          'Username already exists',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

    await this.userRepository.update({ id: user.id }, data);
    user = await this.userRepository.findOne({
      where: { id: user.id },
      relations: ['student', 'psychologist'],
    });

    return user.toResponseObject();
  }

  async destroy(username: string) {
    const user = await this.userRepository.findOne({ where: { username } });
    await this.userRepository.remove(user);
    return user.toResponseObject();
  }

  async forgotPassword(data: Partial<UserDTO>) {
    const user = await this.userRepository.findOne({
      where: { email: data.email },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    sgMail.setApiKey(process.env.API_KEY);
    const body = fs.readFileSync('src/email/forgot-password.html');
    let html = body
      .toString()
      .replace(':username', user.username)
      .replace(':id', user.id);
    const msg = {
      to: user.email,
      from: 'gabo.alejandro.huitron@gmail.com',
      subject: 'DPa - Restablecer contraseña',
      html: html,
    };
    sgMail.send(msg);

    return user.toResponseObject();
  }

  async updatePassword(id: string, data: Partial<UserDTO>) {
    let user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    await this.userRepository.update({ id: user.id }, data);

    user = await this.userRepository.findOne({
      where: { id: user.id },
    });

    return user.toResponseObject();
  }

  async validateUser(id: string) {
    let user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    await this.userRepository.update(
      {
        id: user.id,
      },
      { isValidated: true },
    );

    user = await this.userRepository.findOne({ where: { id } });

    //const token = await this.authService.login(user);

    return user.toResponseObject();
    /*return {
      user: user.toResponseObject(),
      ...token,
    };*/
  }
}
