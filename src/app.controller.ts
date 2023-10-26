import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AppJwtService } from './app-jwt/app-jwt.service';
import { Roles } from './guards/roles.decorator';
import { RoleGuard } from './guards/roles.guard';
import { Role } from './guards/roles.enum';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private appJwtService: AppJwtService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  test(): string {
    return 'Working';
  }

  @Get('secure-test')
  @UseGuards(RoleGuard)
  @Roles(Role.STUDENT)
  public secureTest(): string {
    return 'secure test working';
  }

  @Get('jwt-test')
  getJwtTOken() {
    return this.appJwtService.login();
  }
}
