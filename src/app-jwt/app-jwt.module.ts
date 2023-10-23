import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AppJwtService } from './app-jwt.service';
import { PassportModule } from '@nestjs/passport';

@Module({
    imports: [
        JwtModule.register({
            secret: 'lms', signOptions: { expiresIn: '1d' }
        }),
        PassportModule
    ],
    providers: [AppJwtService],
    exports: [AppJwtService]
})
export class AppJwtModule {}
