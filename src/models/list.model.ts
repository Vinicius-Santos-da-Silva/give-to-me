import mongoose , { Schema , Document } from 'mongoose';
import mongooseDelete from 'mongoose-delete'
import itemModel , { IItem } from './item.model';

export interface IList extends Document {
    _id: String,
    name: String,
    date: String,
    itens: Array<IItem>
}

export interface IListObj extends Document {
    _id: any,
    name: String,
    date: String,
    itens: Array<IItem>
}

const ListSchema: Schema = new Schema({
    name: String,
    date: String,
    itens: [itemModel.schema]
})

ListSchema.plugin(mongooseDelete)

export default mongoose.model<IList>('List' , ListSchema);