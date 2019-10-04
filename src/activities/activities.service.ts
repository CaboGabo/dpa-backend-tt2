import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityEntity } from './activity.entity';
import { Repository } from 'typeorm';
import { DiagnosticEntity } from '../diagnostics/diagnostic.entity';
import { SuggestionsService } from '../suggestions/suggestions.service';
import { ActivityDTO, ActivityRO } from './activity.dto';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(ActivityEntity)
    private activityRepository: Repository<ActivityEntity>,
    @InjectRepository(DiagnosticEntity)
    private diagnosticRepository: Repository<DiagnosticEntity>,
    private suggestionsService: SuggestionsService,
  ) {}

  async saveActivitiesDiagnostic(
    idDiagnostic: string,
    page: number,
  ): Promise<any> {
    const diagnostic = await this.diagnosticRepository.findOne({
      where: { id: idDiagnostic },
      relations: ['student', 'activities'],
    });

    const suggestions = await this.suggestionsService.showAll(page);

    let saved = 0;
    for (const suggestion of suggestions) {
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
  }
}
