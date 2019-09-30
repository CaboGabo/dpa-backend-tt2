import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PsychologistEntity } from '../psychologists/psychologist.entity';
import { Repository } from 'typeorm';
import { SuggestionEntity } from './suggestion.entity';
import { SuggestionRO, SuggestionDTO } from './suggestion.dto';
import { DiagnosticEntity } from '../diagnostics/diagnostic.entity';

@Injectable()
export class SuggestionsService {
  constructor(
    @InjectRepository(PsychologistEntity)
    private psychologistRepository: Repository<PsychologistEntity>,
    @InjectRepository(SuggestionEntity)
    private suggestionRepository: Repository<SuggestionEntity>,
    @InjectRepository(DiagnosticEntity)
    private diagnosticRepository: Repository<DiagnosticEntity>,
  ) {}

  private suggestionToResponseObject(
    suggestion: SuggestionEntity,
  ): SuggestionRO {
    const responseObject: any = {
      ...suggestion,
      savedBy: suggestion.savedBy || null,
    };

    return responseObject;
  }

  private ensureOwnership(
    suggestion: SuggestionEntity,
    psychologistId: string,
  ) {
    if (suggestion.savedBy.id !== psychologistId) {
      throw new HttpException(
        'Incorrect psychologist',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async showAll(page: number = 1): Promise<SuggestionRO[]> {
    const suggestions = await this.suggestionRepository.find({
      relations: ['savedBy'],
      take: 25,
      skip: 25 * (page - 1),
    });

    return suggestions.map(suggestion =>
      this.suggestionToResponseObject(suggestion),
    );
  }

  async showByActivationScore(
    activationScore: number,
  ): Promise<SuggestionEntity[]> {
    const suggestions = await this.suggestionRepository.find({
      relations: ['savedBy'],
    });

    const filteredSuggestions = suggestions.filter(
      suggestion => suggestion.activationScore >= activationScore,
    );
    return filteredSuggestions;
  }

  async create(userId: string, data: SuggestionDTO): Promise<SuggestionRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });
    if (!psychologist) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    const suggestion = await this.suggestionRepository.create({
      ...data,
      savedBy: psychologist,
    });

    await this.suggestionRepository.save(suggestion);
    return this.suggestionToResponseObject(suggestion);
  }

  async update(
    id: string,
    userId: string,
    data: Partial<SuggestionDTO>,
  ): Promise<SuggestionRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!psychologist) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    let suggestion = await this.suggestionRepository.findOne({
      where: { savedBy: { id: psychologist.id } },
      relations: ['savedBy'],
    });

    if (!suggestion) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    this.ensureOwnership(suggestion, psychologist.id);

    await this.suggestionRepository.update({ id }, data);
    suggestion = await this.suggestionRepository.findOne({
      where: { savedBy: { id: psychologist.id } },
      relations: ['savedBy'],
    });

    return this.suggestionToResponseObject(suggestion);
  }

  async destroy(id: string, userId: string): Promise<SuggestionRO> {
    const psychologist = await this.psychologistRepository.findOne({
      where: { user: { id: userId } },
      relations: ['user'],
    });

    if (!psychologist) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    let suggestion = await this.suggestionRepository.findOne({
      where: { savedBy: { id: psychologist.id }, id },
      relations: ['savedBy'],
    });

    if (!suggestion) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    this.ensureOwnership(suggestion, psychologist.id);

    await this.suggestionRepository.remove(suggestion);
    return this.suggestionToResponseObject(suggestion);
  }

  async saveSuggestionsDiagnostic(diagnosticId: string) {
    const diagnostic = await this.diagnosticRepository.findOne({
      where: { id: diagnosticId },
      relations: ['student', 'suggestions'],
    });
    if (!diagnostic) {
      throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    }

    const suggestionsEntities = await this.showByActivationScore(
      diagnostic.score,
    );

    const suggestions = suggestionsEntities.map(suggestion =>
      this.suggestionToResponseObject(suggestion),
    );
    const diagnosticSuggestions = diagnostic.suggestions.map(suggestion =>
      this.suggestionToResponseObject(suggestion),
    );

    suggestions.forEach(async (suggestion, index) => {
      const isAlreadySaved = diagnosticSuggestions.filter(
        diagnosticSuggestion => {
          diagnosticSuggestion.id === suggestion.id;
        },
      ).length;
      if (!isAlreadySaved) {
        diagnostic.suggestions.push(suggestionsEntities[index]);
        await this.diagnosticRepository.save(diagnostic);
      }
    });
  }
}
