import {
  Controller,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Param,
} from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { AuthGuard } from '@nestjs/passport';
import { User } from '../users/user.decorator';

@Controller()
export class ActivitiesController {
  constructor(private activityService: ActivitiesService) {}

  @Put('api/activities/:idActivity/done')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  async activityDone(
    @User('id') user,
    @Param('idActivity') idActivity: string,
  ) {
    return this.activityService.activityDone(user, idActivity);
  }

  @Put('api/activities/:idActivity/notdone')
  @UseGuards(AuthGuard('jwt'))
  @UsePipes(new ValidationPipe())
  async activityNotDone(
    @User('id') user,
    @Param('idActivity') idActivity: string,
  ) {
    return this.activityService.activityNotDone(user, idActivity);
  }
}
