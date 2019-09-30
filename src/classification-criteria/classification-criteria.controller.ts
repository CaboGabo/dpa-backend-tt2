import { Controller, Logger, Get, Param } from '@nestjs/common';
import { ClassificationCriteriaService } from './classification-criteria.service';

@Controller('api/classification-criteria')
export class ClassificationCriteriaController {
  private logger = new Logger('ClassificationCriteriaController');

  constructor(
    private classificationCriteriaService: ClassificationCriteriaService,
  ) {}

  private logData(options: any) {
    options.user && this.logger.log('USER ' + JSON.stringify(options.user));
    options.body && this.logger.log('BODY ' + JSON.stringify(options.body));
    options.keyname &&
      this.logger.log(
        'CLASSIFICATION-CRITERIA ' + JSON.stringify(options.keyname),
      );
  }

  @Get()
  showAllClassificationCriteria() {
    return this.classificationCriteriaService.showAll();
  }

  @Get(':keyname')
  readClassificationCriteria(@Param('keyname') keyname: string) {
    this.logData({ keyname });
    return this.classificationCriteriaService.read(keyname);
  }
}
