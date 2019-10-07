import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityEntity } from './activity.entity';
import { Repository } from 'typeorm';
import { DiagnosticEntity } from '../diagnostics/diagnostic.entity';
import { SuggestionsService } from '../suggestions/suggestions.service';
import { ActivityDTO, ActivityRO } from './activity.dto';
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

  /*async saveActivitiesDiagnostic(
    idDiagnostic: string,
    page: number,
    student: StudentEntity,
  ): Promise<any> {
    const diagnostic = await this.diagnosticRepository.findOne({
      where: { id: idDiagnostic },
      relations: ['student', 'activities'],
    });

    const suggestions = await this.suggestionsService.showAll(page);

    const filteredSuggestions = suggestions.filter(
      suggestion =>
        suggestion.depressionType === diagnostic.depressionType ||
        suggestion.gender === student.gender ||
        (parseInt(suggestion.rangeAge.split('-')[0]) <= student.age &&
          student.age <= parseInt(suggestion.rangeAge.split('-')[1])),
    );

    let saved = 0;
    for (const suggestion of filteredSuggestions) {
      let exists = await this.activityRepository.findOne({
        where: { diagnostic, suggestion },
        relations: ['diagnostic', 'suggestion'],
      });

      if (!exists) {
        const activity = await this.activityRepository.create({
          diagnostic,
          suggestion,
        });

        await this.activityRepository.save(activity);
        saved++;
      }
    }
    return { saved };
  }

  async activityDone(id: string): Promise<boolean> {
    let activity = await this.activityRepository.findOne({
      where: { id },
      relations: ['diagnostic', 'suggestion'],
    });

    if (!activity) {
      throw new HttpException('Activity not found', HttpStatus.NOT_FOUND);
    }

    await this.activityRepository.update(
      { id },
      {
        done: true,
      },
    );

    activity = await this.activityRepository.findOne({
      where: { id },
      relations: ['diagnostic', 'suggestion'],
    });

    return true;
  }

  async activityNotDone(id: string): Promise<boolean> {
    let activity = await this.activityRepository.findOne({
      where: { id },
      relations: ['diagnostic', 'suggestion'],
    });

    if (!activity) {
      throw new HttpException('Activity not found', HttpStatus.NOT_FOUND);
    }

    await this.activityRepository.update(
      { id },
      {
        done: false,
      },
    );

    activity = await this.activityRepository.findOne({
      where: { id },
      relations: ['diagnostic', 'suggestion'],
    });

    return true;
  }*/
}
