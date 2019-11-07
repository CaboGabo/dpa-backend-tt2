import { IsString } from 'class-validator';
import { DiagnosticRO } from '../diagnostics/diagnostic.dto';
import { ActivityRO } from '../activities/activity.dto';
import { ClassificationCriteriaRO } from '../classification-criteria/classification-criteria.dto';
import { PostRO } from '../posts/post.dto';

export class DiagnosticDetailDTO {
  @IsString()
  result: string;
}

export class DiagnosticDetailRO {
  id: string;
  created: Date;
  result: string;
  diagnostic: DiagnosticRO;
  activities: ActivityRO[];
  classificationCriteria: ClassificationCriteriaRO;
  posts?: PostRO[];
}
