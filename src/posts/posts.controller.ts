import { Controller, Logger, Get, UseGuards } from '@nestjs/common';
import { PostsService } from './posts.service';
import { User } from 'src/users/user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class PostsController {
  private logger = new Logger('PostsController');

  constructor(private postsService: PostsService) {}

  private logData(options: any) {
    options.user && this.logger.log('USER ' + JSON.stringify(options.user));
    options.body && this.logger.log('BODY ' + JSON.stringify(options.body));
    options.id && this.logger.log('POST ' + JSON.stringify(options.id));
  }

  /*@Get('api/posts')
  @UseGuards(AuthGuard('jwt'))
  showPostsByUser(@User('id') user) {
    this.logData({ user });
    return this.postsService.showByUser(user);
  }*/
}
