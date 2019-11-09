import { Test, TestingModule } from '@nestjs/testing';
import { CamirTestsController } from './camir-tests.controller';

describe('CamirTests Controller', () => {
  let controller: CamirTestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CamirTestsController],
    }).compile();

    controller = module.get<CamirTestsController>(CamirTestsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
