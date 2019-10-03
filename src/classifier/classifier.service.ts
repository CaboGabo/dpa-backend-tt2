import { Injectable } from '@nestjs/common';
import { PostRO } from '../posts/post.dto';

@Injectable()
export class ClassifierService {
  public classify(posts: PostRO[]) {
    //Clasificador de Emiliano
    return [true, 85];
  }
}
