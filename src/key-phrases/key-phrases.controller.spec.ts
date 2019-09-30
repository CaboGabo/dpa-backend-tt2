import { Test, TestingModule } from '@nestjs/testing';
import { KeyPhrasesController } from './key-phrases.controller';

describe('KeyPhrases Controller', () => {
  let controller: KeyPhrasesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KeyPhrasesController],
    }).compile();

    controller = module.get<KeyPhrasesController>(KeyPhrasesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
