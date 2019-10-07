import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosticDetailsController } from './diagnostic-details.controller';

describe('DiagnosticDetails Controller', () => {
  let controller: DiagnosticDetailsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DiagnosticDetailsController],
    }).compile();

    controller = module.get<DiagnosticDetailsController>(DiagnosticDetailsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
