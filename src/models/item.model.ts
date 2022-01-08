import mongoose , { Schema , Document } from 'mongoose';
import mongooseDelete from 'mongoose-delete'

export interface IItem extends Document {
    status: Boolean,
    friend: String,
    name: String,
    quantity: Number,
    link: String
}

const ItemSchema: Schema = new Schema({
    status: Boolean,
    friend: String,
    name: String,
    quantity: Number,
    link: String
});

export default mongoose.model('Item', ItemSchema);