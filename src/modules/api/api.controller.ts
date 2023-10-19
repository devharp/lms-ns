import { Controller, Get } from '@nestjs/common';

@Controller('')
export class ApiController {
    @Get('')
    getApi(): string {
        return "sdfdfsdfsdfds"
    }
}
