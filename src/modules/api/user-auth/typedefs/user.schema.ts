import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Document } from 'mongoose';
import { UserRoles } from 'src/shared/constants/enums/user-roles.enum';
import { TransformDocumentId } from 'src/shared/constants/objects/document-transform.object';

export type UserType = HydratedDocument<User>;

@Schema({
  toJSON: TransformDocumentId,
  collection: 'users',
})
export class User extends Document {
  @Prop({ required: true })
  fullName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  role: UserRoles;
}

export const UserSchema = SchemaFactory.createForClass(User);
