import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument, Document } from "mongoose";
import { UserRoles } from "src/shared/constants/enums/user-roles.enum";

export type UserStudentType = HydratedDocument<UserStudent>

@Schema({
    toJSON: {
        virtuals: true,
        transform: (doc, ret) => {
            const { _id, __v, ...ret$ } = ret;
            return { ...ret$, id: ret._id };
        }
    },
    collection: 'user-students'
})
export class UserStudent extends Document {
    @Prop({ required: true })
    fullName: string;

    @Prop({ unique: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ required: true })
    role: UserRoles

}

export const UserStudentSchema = SchemaFactory.createForClass(UserStudent);