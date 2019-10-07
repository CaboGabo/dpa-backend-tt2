import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityEntity } from './activity.entity';
import { Repository } from 'typeorm';
import { DiagnosticEntity } from '../diagnostics/diagnostic.entity';
import { SuggestionsService } from '../suggestions/suggestions.service';
import { StudentEntity } from '../students/student.entity';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(ActivityEntity)
    private activityRepository: Repository<ActivityEntity>,
    @InjectRepository(DiagnosticEntity)
    private diagnosticRepository: Repository<DiagnosticEntity>,
    private suggestionsService: SuggestionsService,
  ) {}

  async saveActivitiesDiagnosticDetail(
    idDiagnostic: string,
    student: StudentEntity,
  ): Promise<any> {
    const diagnostic = await this.diagnosticRepository.findOne({
      where: { id: idDiagnostic },
      relations: ['student', 'details'],
    });

    const suggestions = await this.suggestionsService.showAll();

    let saved = 0;
    for (let i = 0; i < diagnostic.details.length; i++) {
      const filteredSuggestions = suggestions.filter(
        suggestion =>
          (suggestion.depressionType === diagnostic.depressionType ||
            suggestion.gender === student.gender ||
            (parseInt(suggestion.rangeAge.split('-')[0]) <= student.age &&
              student.age <= parseInt(suggestion.rangeAge.split('-')[1]))) &&
          suggestion.classificationCriteria.id ===
            diagnostic.details[i].classificationCriteria.id,
      );

      for (const suggestion of filteredSuggestions) {
        let exists = await this.activityRepository.findOne({
          where: { diagnosticDetail: diagnostic.details[i], suggestion },
          relations: ['diagnosticDetail', 'suggestion'],
        });

        if (!exists) {
          const activity = await this.activityRepository.create({
            suggestion,
            diagnosticDetail: diagnostic.details[i],
          });

          await this.activityRepository.save(activity);
          saved++;
        }
      }
    }

    return { saved };
  }

  async activityDone(userId: string, id: string): Promise<boolean> {
    let activity = await this.activityRepository.findOne({
      where: { id },
      relations: ['diagnosticDetail', 'suggestion'],
    });

    if (!activity) {
      throw new HttpException('Activity not found', HttpStatus.NOT_FOUND);
    }

    if (activity.diagnosticDetail.diagnostic.student.user.id !== userId) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    await this.activityRepository.update(
      { id },
      {
        done: true,
      },
    );

    activity = await this.activityRepository.findOne({
      where: { id },
      relations: ['diagnosticDetail', 'suggestion'],
    });

    return true;
  }

  async activityNotDone(userId: string, id: string): Promise<boolean> {
    let activity = await this.activityRepository.findOne({
      where: { id },
      relations: ['diagnosticDetail', 'suggestion'],
    });

    if (!activity) {
      throw new HttpException('Activity not found', HttpStatus.NOT_FOUND);
    }

    if (activity.diagnosticDetail.diagnostic.student.user.id !== userId) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }

    await this.activityRepository.update(
      { id },
      {
        done: false,
      },
    );

    activity = await this.activityRepository.findOne({
      where: { id },
      relations: ['diagnosticDetail', 'suggestion'],
    });

    return true;
  }
}
