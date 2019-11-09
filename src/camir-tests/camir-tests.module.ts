import { Module } from '@nestjs/common';
import { CamirTestsController } from './camir-tests.controller';
import { CamirTestsService } from './camir-tests.service';

@Module({
  controllers: [CamirTestsController],
  providers: [CamirTestsService]
})
export class CamirTestsModule {}
