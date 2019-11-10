import { Controller, Logger, Get, UseGuards, Delete } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../users/user.decorator';

@Controller()
export class PostsController {
  private logger = new Logger('PostsController');

  constructor(private postsService: PostsService) {}

  private logData(options: any) {
    options.user && this.logger.log('USER ' + JSON.stringify(options.user));
    options.body && this.logger.log('BODY ' + JSON.stringify(options.body));
    options.id && this.logger.log('POST ' + JSON.stringify(options.id));
  }

  @Delete('api/posts')
  @UseGuards(AuthGuard('jwt'))
  showPostsByUser(@User('id') user) {
    this.logData({ user });
    return this.postsService.destroyByUser(user);
  }
}
