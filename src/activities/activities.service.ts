import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityEntity } from './activity.entity';
import { Repository } from 'typeorm';
import { DiagnosticEntity } from '../diagnostics/diagnostic.entity';
import { SuggestionsService } from '../suggestions/suggestions.service';
import { StudentEntity } from '../students/student.entity';
import { DiagnosticDetailEntity } from '../diagnostic-details/diagnostic-detail.entity';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(ActivityEntity)
    private activityRepository: Repository<ActivityEntity>,
    @InjectRepository(DiagnosticEntity)
    private diagnosticRepository: Repository<DiagnosticEntity>,
    @InjectRepository(DiagnosticDetailEntity)
    private diagnosticDetailRepository: Repository<DiagnosticDetailEntity>,
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

    let i = 0;
    for (const detail of diagnostic.details) {
      diagnostic.details[i] = await this.diagnosticDetailRepository.findOne({
        where: { id: detail.id },
        relations: ['activities', 'classificationCriteria'],
      });
      i++;
    }

    const suggestions = await this.suggestionsService.showAll();

    let saved = 0;
    for (let i = 0; i < diagnostic.details.length; i++) {
      if (diagnostic.details[i].result) {
        const filteredSuggestions = suggestions
          .filter(
            suggestion =>
              suggestion.classificationCriteria.id ===
              diagnostic.details[i].classificationCriteria.id,
          )
          .filter(
            suggestion =>
              suggestion.depressionType === diagnostic.depressionType,
          )
          .filter(suggestion => suggestion.gender === student.gender)
          .filter(
            suggestion =>
              parseInt(suggestion.rangeAge.split('-')[0]) <= student.age &&
              student.age <= parseInt(suggestion.rangeAge.split('-')[1]),
          );

        console.log('filtered', filteredSuggestions);

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
    }

    return { saved };
  }

  async activityDone(userId: string, id: string): Promise<boolean> {
    let activity = await this.activityRepository.findOne({
      where: { id },
      relations: ['diagnosticDetail', 'suggestion'],
    });

    if (!activity) {
      throw new HttpException('Actividad no encontrada', HttpStatus.NOT_FOUND);
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
      throw new HttpException('Actividad no encontrada', HttpStatus.NOT_FOUND);
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
