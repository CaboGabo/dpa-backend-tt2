import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserDTO } from '../users/user.dto';

export enum Provider {
  GOOGLE = 'google',
}

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);

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
      access_token: this.jwtService.sign(payload),
    };
  }

  async validateOAuthLogin(user: UserDTO) {
    const users = await this.usersService.showAll();
    const existsEmail = users.filter(usr => user.email === usr.email);

    let payload: any;
    if (!existsEmail.length) {
      const newUser = await this.usersService.register(user);
      payload = { username: newUser.username, sub: newUser.id };
    } else {
      payload = { username: existsEmail[0].username, sub: existsEmail[0].id };
    }

    return payload;
  }
}
