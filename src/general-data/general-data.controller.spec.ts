import { Test, TestingModule } from '@nestjs/testing';
import { GeneralDataController } from './general-data.controller';

describe('GeneralData Controller', () => {
  let controller: GeneralDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GeneralDataController],
    }).compile();

    controller = module.get<GeneralDataController>(GeneralDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
