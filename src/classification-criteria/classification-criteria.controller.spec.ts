import { Test, TestingModule } from '@nestjs/testing';
import { ClassificationCriteriaController } from './classification-criteria.controller';

describe('ClassificationCriteria Controller', () => {
  let controller: ClassificationCriteriaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClassificationCriteriaController],
    }).compile();

    controller = module.get<ClassificationCriteriaController>(ClassificationCriteriaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
