import {
  Controller,
  Logger,
  Get,
  Query,
  Post,
  UseGuards,
  UsePipes,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { StudentsService } from './students.service';
import { User } from 'src/users/user.decorator';
import { AuthGuard } from 'src/shared/auth.guard';
import { ValidationPipe } from '../shared/validation.pipe';
import { StudentDTO } from './student.dto';

@Controller('api/students')
export class StudentsController {
  private logger = new Logger('StudentsController');

  constructor(private studentsService: StudentsService) {}

  private logData(options: any) {
    options.user && this.logger.log('USER ' + JSON.stringify(options.user));
    options.body && this.logger.log('BODY ' + JSON.stringify(options.body));
    options.id && this.logger.log('STUDENT ' + JSON.stringify(options.id));
  }

  @Get()
  showAllStudents(@Query('page') page: number) {
    return this.studentsService.showAll(page);
  }

  @Post()
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  createStudent(@User('id') user, @Body() body: StudentDTO) {
    this.logData({ user, body });
    return this.studentsService.create(user, body);
  }

  @Get(':id')
  @UseGuards(new AuthGuard())
  readStudent(@Param('id') id: string) {
    this.logData({ id });
    return this.studentsService.read(id);
  }

  @Put(':id')
  @UseGuards(new AuthGuard())
  @UsePipes(new ValidationPipe())
  updateStudent(
    @Param('id') id: string,
    @User('id') user,
    @Body() body: Partial<StudentDTO>,
  ) {
    this.logData({ id, user, body });
    return this.studentsService.update(id, user, body);
  }

  @Delete(':id')
  @UseGuards(new AuthGuard())
  destroyStudent(@Param('id') id: string, @User('id') user) {
    this.logData({ id, user });
    return this.studentsService.destroy(id, user);
  }
}
