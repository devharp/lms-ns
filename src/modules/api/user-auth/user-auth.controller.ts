import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserAuthRegisterDTO } from './typedefs/register-payload.dto';
import { validationPipe } from 'src/pipes/validation.pipe';
import { UserAuthService } from './user-auth.service';

@Controller('')
export class UserAuthController {

    constructor(private userAuthService: UserAuthService) { }

    @Get('login')
    userLogin(): string {
        return "user login"
    }

    @Post('register')
    async userRegister(@Body(validationPipe) userRegisterPayload: UserAuthRegisterDTO): Promise<string> {
        await this.userAuthService.registerUser(userRegisterPayload);
        return "user register"
    }

}



