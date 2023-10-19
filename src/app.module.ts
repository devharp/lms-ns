import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './modules/api/api.module';
import { RouterModule } from '@nestjs/core';
import { UserAuthModule } from './modules/api/user-auth/user-auth.module';
import { hasSubscribers } from 'diagnostics_channel';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ApiModule,
    UserAuthModule,
    RouterModule.register([
      {
        path: 'api', module: ApiModule,
        children: [
          { path: 'user-auth', module: UserAuthModule }
        ]
      }
    ]),
    MongooseModule.forRoot('mongodb://localhost/lms')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
