import { Test, TestingModule } from '@nestjs/testing';
import { GeneralDataService } from './general-data.service';

describe('GeneralDataService', () => {
  let service: GeneralDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GeneralDataService],
    }).compile();

    service = module.get<GeneralDataService>(GeneralDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
