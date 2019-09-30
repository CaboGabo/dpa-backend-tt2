import { Test, TestingModule } from '@nestjs/testing';
import { KeyPhrasesService } from './key-phrases.service';

describe('KeyPhrasesService', () => {
  let service: KeyPhrasesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KeyPhrasesService],
    }).compile();

    service = module.get<KeyPhrasesService>(KeyPhrasesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
