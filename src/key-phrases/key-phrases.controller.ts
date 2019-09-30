import { Controller, Logger, Get } from '@nestjs/common';
import { KeyPhrasesService } from './key-phrases.service';

@Controller('api/key-phrases')
export class KeyPhrasesController {
  private logger = new Logger('KeyPhrasesController');

  constructor(private keyPhrasesService: KeyPhrasesService) {}
}
