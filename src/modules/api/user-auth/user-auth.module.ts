import { Module } from '@nestjs/common';
import { UserAuthController } from './user-auth.controller';
import { UserAuthService } from './user-auth.service';
import { RouterModule, Routes } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './typedefs/user.schema';
import { UserStudent, UserStudentSchema } from './typedefs/user-student.schema';

@Module({
    controllers: [UserAuthController],
    providers: [UserAuthService],
    imports: [
        MongooseModule.forFeature([
            { name: User.name, schema: UserSchema },
            { name: UserStudent.name, schema: UserStudentSchema },
        ])
    ]
})
export class UserAuthModule { }