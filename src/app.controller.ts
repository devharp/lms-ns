import { Body, Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { validationPipe } from './pipes/validation.pipe';
import { IsNotEmpty, IsString } from 'class-validator';
import { AuthGuard } from '@nestjs/passport';
import { AppJwtService } from './app-jwt/app-jwt.service';
import { Roles } from './guards/roles.decorator';
import { RoleGuard } from './guards/roles.guard';
import { Role } from './guards/roles.enum';


class UserData {
  @IsNotEmpty()
  @IsString()
  test: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private appJwtService: AppJwtService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  test(@Body(validationPipe) data: UserData): string {
    return "Working";
  }

  @Get('secure-test')
  @UseGuards(RoleGuard)
  @Roles(Role.STUDENT)
  public secureTest(): string {
    return "secure test working"
  }

  @Get('jwt-test')
  getJwtTOken() {
    return this.appJwtService.login();
  }
}