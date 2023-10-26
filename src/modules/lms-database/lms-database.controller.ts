import { Controller, Get, Query } from '@nestjs/common';
import { LmsDatabaseService } from './lms-database.service';

@Controller('')
export class LmsDatabaseController {
  constructor(private lmsDatabaseService: LmsDatabaseService) {}

  @Get('user-students')
  async getAllUserStudents(
    @Query('from') from: number = 1,
    @Query('limit') limit: number = 1,
  ) {
    if (limit < 1 || limit > 50)
      throw new Error('Invalid "limit" values. They must be between 1 and 50.');

    return this.lmsDatabaseService.findAllUserStudents(from, limit);
  }
}
