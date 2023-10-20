import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { TransformDocumentId } from "src/shared/constants/objects/document-transform.object";



@Schema({
    toJSON: TransformDocumentId, collection: 'courses'
})
export class Courses extends Document {
    @Prop({ required: true })
    subjects: Array<string>
}

export const CoursesSchema = SchemaFactory.createForClass(Courses);