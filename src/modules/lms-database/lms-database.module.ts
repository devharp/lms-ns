import { Module } from '@nestjs/common';
import { LmsDatabaseController } from './lms-database.controller';
import { LmsDatabaseService } from './lms-database.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../api/user-auth/typedefs/user.schema';
import { UserStudent, UserStudentSchema } from '../api/user-auth/typedefs/user-student.schema';

@Module({
  controllers: [LmsDatabaseController],
  providers: [LmsDatabaseService],
  imports: [
    MongooseModule.forFeature([
        { name: User.name, schema: UserSchema },
        { name: UserStudent.name, schema: UserStudentSchema },
    ])
]
})
export class LmsDatabaseModule {}
