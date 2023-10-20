import { Test, TestingModule } from '@nestjs/testing';
import { LmsDatabaseController } from './lms-database.controller';

describe('LmsDatabaseController', () => {
  let controller: LmsDatabaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LmsDatabaseController],
    }).compile();

    controller = module.get<LmsDatabaseController>(LmsDatabaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
