import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityEntity } from './activity.entity';
import { Repository } from 'typeorm';
import { DiagnosticEntity } from '../diagnostics/diagnostic.entity';
import { SuggestionsService } from '../suggestions/suggestions.service';

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
}
