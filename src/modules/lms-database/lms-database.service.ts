import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserStudent } from '../api/user-auth/typedefs/user-student.schema';
import { User } from '../api/user-auth/typedefs/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class LmsDatabaseService {
    constructor(
        @InjectModel(User.name) private userModel: Model<User>,
        @InjectModel(UserStudent.name) private userStudentModel: Model<UserStudent>
    ) { }

    async findAllUserStudents(skip: number, limit: number) {
        return this.userStudentModel
        .find()
        .skip(skip)
        .limit(limit)
        .populate('user')
        .exec()
    }

}
