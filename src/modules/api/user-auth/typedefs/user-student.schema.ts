import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument, Document } from 'mongoose';
import { TransformDocumentId } from 'src/shared/constants/objects/document-transform.object';
import { Courses } from './courses.schema';

export type UserStudentType = HydratedDocument<UserStudent>;

@Schema({
  toJSON: TransformDocumentId,
  collection: 'user-students',
})
export class UserStudent extends Document {
  @Prop({ required: true, type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: mongoose.Types.ObjectId;

  @Prop({ type: Array<mongoose.Schema.Types.ObjectId>, ref: 'courses' })
  enrolledCourses: Array<Courses>;
}

export const UserStudentSchema = SchemaFactory.createForClass(UserStudent);
