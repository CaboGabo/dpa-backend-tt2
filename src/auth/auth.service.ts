import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../users/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

/*export enum Provider {
  GOOGLE = 'google',
}*/

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

    if (user.google) {
      return user.toResponseObject();
    }

    if (!user.isValidated) {
      throw new HttpException('Email is not validated', HttpStatus.BAD_REQUEST);
    }

    if (user && (await user.comparePassword(pass))) {
      return user.toResponseObject();
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.id };

    return {
      ...user,
      access_token: this.jwtService.sign(payload),
    };
  }

  /*async validateOAuthLogin(profile: any, provider: Provider) {
    let user = await this.userRepository.findOne({
      where: { username: profile.id },
    });

    if (!user) {
      user = await this.userRepository.create({
        username: profile.id,
        email: profile.getEmail(),
      });

      await this.userRepository.save(user);
    }

    const payload: any = {
      username: user.username,
      sub: user.id,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }*/
}
