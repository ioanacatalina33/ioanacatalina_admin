import { Document } from 'mongoose';
import { IArticle } from './article.model';
import { model, Schema } from 'mongoose';

export interface ILocation extends Document {
    _id: string;
    name: string;
    coord_lat: string;
    coord_long: string;
    articles: IArticle[];
}

const locationSchema: Schema = new Schema({
    name: { type: String, required: true, unique: true },
    coord_lat: { type: String, required: true },
    coord_long: { type: String, required: true },
    articles: [{ type: Schema.Types.ObjectId, ref: 'Article' }]
});

const Location = model<ILocation>('Location', locationSchema);
export default Location;
