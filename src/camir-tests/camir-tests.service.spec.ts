import { Test, TestingModule } from '@nestjs/testing';
import { CamirTestsService } from './camir-tests.service';

describe('CamirTestsService', () => {
  let service: CamirTestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CamirTestsService],
    }).compile();

    service = module.get<CamirTestsService>(CamirTestsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
