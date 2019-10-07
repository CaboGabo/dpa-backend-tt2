import { Test, TestingModule } from '@nestjs/testing';
import { DiagnosticDetailsService } from './diagnostic-details.service';

describe('DiagnosticDetailsService', () => {
  let service: DiagnosticDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DiagnosticDetailsService],
    }).compile();

    service = module.get<DiagnosticDetailsService>(DiagnosticDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
