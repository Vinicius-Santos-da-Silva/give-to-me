import mongoose , { Schema , Document } from 'mongoose';
import mongooseDelete from 'mongoose-delete'
export interface ITask extends Document {
    title: String,

}

export interface ITaskObj extends Document {
    _id: String,
    title: String
}

const TaskSchema: Schema = new Schema({
    title: String,
})

TaskSchema.plugin(mongooseDelete)

export default mongoose.model<ITask>('Task' , TaskSchema);