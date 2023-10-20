import { Test, TestingModule } from '@nestjs/testing';
import { LmsDatabaseService } from './lms-database.service';

describe('LmsDatabaseService', () => {
  let service: LmsDatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LmsDatabaseService],
    }).compile();

    service = module.get<LmsDatabaseService>(LmsDatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
