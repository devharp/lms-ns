import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './modules/api/api.module';
import { APP_GUARD, RouterModule } from '@nestjs/core';
import { UserAuthModule } from './modules/api/user-auth/user-auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { LmsDatabaseModule } from './modules/lms-database/lms-database.module';
import { AppJwtModule } from './app-jwt/app-jwt.module';
import { JwtStrategy } from './strategy/jwt.strategy';

@Module({
  imports: [
    ApiModule,
    UserAuthModule,
    LmsDatabaseModule,
    RouterModule.register([
      {
        path: 'api', module: ApiModule,
        children: [
          { path: 'user-auth', module: UserAuthModule },
          { path: 'get-data', module: LmsDatabaseModule },
        ]
      }
    ]),
    MongooseModule.forRoot('mongodb://localhost/lms'),
    AppJwtModule

  ],
  controllers: [AppController],
  providers: [JwtStrategy, AppService],
})
export class AppModule { }
