import { Injectable } from '@nestjs/common';
import { UserAuthRegisterDTO } from './typedefs/register-payload.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserType } from './typedefs/user.schema';
import { Model } from 'mongoose';
import { UserRoles } from 'src/shared/constants/enums/user-roles.enum';
import { UserStudent } from './typedefs/user-student.schema';

@Injectable()
export class UserAuthService {

    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(UserStudent.name) private userStudentModel: Model<UserStudent>
    ) { }

    public async registerUser(userPayload: UserAuthRegisterDTO): Promise<void> {

        const user = new this.userModel(userPayload as unknown as UserType);
        await user.save();

        switch (userPayload.role) {
            case UserRoles.FACULTY:
                console.error('user-auth.service.ts: not handled yet for ROLE "FACULTY"!')
                break;
            case UserRoles.STUDENT:
                console.log(user);
                break;
            default:
                break;
        }


    }
}
