import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StudentEntity } from '../students/student.entity';
import { PostEntity } from './post.entity';
import { Repository } from 'typeorm';
import { PostRO, PostDTO } from './post.dto';

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(StudentEntity)
    private studentRepository: Repository<StudentEntity>,
    @InjectRepository(PostEntity)
    private postRepository: Repository<PostEntity>,
  ) {}

  private postToResponseObject(post: PostEntity): PostRO {
    const responseObject: any = {
      ...post,
      author: post.author || null,
    };

    return responseObject;
  }

  async showByUser(userId: string): Promise<PostRO[]> {
    const student = await this.studentRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!student) {
      throw new HttpException('Incorrect user', HttpStatus.UNAUTHORIZED);
    }

    const posts = await this.postRepository.find({
      where: { student: { id: student.id } },
      relations: ['author'],
    });

    return posts.map(post => this.postToResponseObject(post));
  }

  async createMany(userId: string, posts: PostDTO[]): Promise<PostRO[]> {
    const student = await this.studentRepository.findOne({
      where: { student: { user: { id: userId } } },
      relations: ['user'],
    });

    if (!student) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }
    let postsResponse = [];
    for (let i = 0; i < posts.length; i++) {
      const post = await this.postRepository.create({
        ...posts[i],
        author: student,
      });
      await this.postRepository.save(post);
      postsResponse.push(this.postToResponseObject(post));
    }

    return postsResponse;
  }
}
