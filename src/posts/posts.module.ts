import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostEntity } from './post.entity';
import { StudentEntity } from '../students/student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostEntity, StudentEntity])],
  providers: [PostsService],
  controllers: [PostsController],
})
export class PostsModule {}
