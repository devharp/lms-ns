import { Injectable } from '@nestjs/common';
import { UserAuthRegisterDTO } from './typedefs/register-payload.dto';
import { InjectModel } from '@nestjs/mongoose';
import { UserStudent, UserStudentType } from './typedefs/user-student.schema';
import { Model } from 'mongoose';

@Injectable()
export class UserAuthService {

    constructor(@InjectModel(UserStudent.name) private userStudentModel: Model<UserStudent>){}    

    public registerUser(userStudentPayload: UserAuthRegisterDTO): void {
        this.userStudentModel.create(userStudentPayload as unknown as UserStudentType);
    }
}
