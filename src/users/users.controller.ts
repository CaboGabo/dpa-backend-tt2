import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  UsePipes,
  Body,
  UseGuards,
  Put,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDTO } from './user.dto';
import { User } from './user.decorator';
import { ValidationPipe } from 'src/shared/validation.pipe';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('api/users')
  showAllUsers(@Query('page') page: number) {
    return this.usersService.showAll(page);
  }

  @Get('api/users/:username')
  showOneUser(@Param('username') username: string) {
    return this.usersService.read(username);
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('auth/whoami')
  showMe(@User('username') username: string) {
    return this.usersService.read(username);
  }

  @Post('auth/register')
  @UsePipes(new ValidationPipe())
  register(@Body() data: UserDTO) {
    return this.usersService.register(data);
  }

  @Put('auth/user')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  editUser(@User('username') username: string, @Body() data: Partial<UserDTO>) {
    console.log('DATA:', data);
    return this.usersService.edit(username, data);
  }

  @Delete('auth/user')
  @UseGuards(AuthGuard('jwt'))
  deleteUser(@User('username') username: string) {
    return this.usersService.destroy(username);
  }

  @Post('auth/forgotPassword')
  @UsePipes(new ValidationPipe())
  forgotPassword(@Body() data: Partial<UserDTO>) {
    return this.usersService.forgotPassword(data);
  }

  @Post('auth/updatePassword/:id')
  @UsePipes(new ValidationPipe())
  updatePassword(@Param('id') id: string, @Body() data: Partial<UserDTO>) {
    return this.usersService.updatePassword(id, data);
  }

  @Get('auth/validateEmail')
  @UsePipes(new ValidationPipe())
  validateEmail(@Param('id') id: string) {
    return this.usersService.validateUser(id);
  }
}
