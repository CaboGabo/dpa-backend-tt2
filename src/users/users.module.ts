import { Module, Inject } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UserEntity } from './user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from '../auth/auth.service';
import { PsychologistEntity } from 'src/psychologists/psychologist.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity, PsychologistEntity])],
  controllers: [UsersController],
  providers: [UsersService /*AuthService*/],
  exports: [UsersModule, UsersService],
})
export class UsersModule {}
