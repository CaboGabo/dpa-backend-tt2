import { Test, TestingModule } from '@nestjs/testing';
import { ClassificationCriteriaService } from './classification-criteria.service';

describe('ClassificationCriteriaService', () => {
  let service: ClassificationCriteriaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClassificationCriteriaService],
    }).compile();

    service = module.get<ClassificationCriteriaService>(ClassificationCriteriaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
