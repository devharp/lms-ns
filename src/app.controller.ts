import { Body, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { validationPipe } from './pipes/validation.pipe';
import { IsNotEmpty, IsString } from 'class-validator';


class UserData {
  @IsNotEmpty()
  @IsString()
  test: string
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('test')
  test(@Body(validationPipe) data: UserData): string {
    return "Working";
  }
}