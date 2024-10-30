import { Document, model, Schema } from 'mongoose';
import { ILocation } from './location.model';

export interface IArticle extends Document {
    _id: string;
    name_url: string;
    name: string;
    locations: ILocation[];
    name_location?: string;
    country?: string;
    continent?: string;
    date_start?: Date;
    date_end?: Date;
    type: string;
    subtype?: string;
    url?: string;
    identifier: string;
    description: string;
    keywords: string;
    metadata: string;
}

const articleSchema = new Schema(
    {
        name: String,
        name_url: { type: String, required: true, unique: true },
        name_location: { type: String, default: '' },
        description: String,
        locations: [{ type: Schema.Types.ObjectId, ref: 'Location' }],
        country: { type: String, required: true },
        continent: { type: String, required: true },
        date_start: { type: Date, required: true },
        date_end: Date,
        type: { type: String, required: true },
        subtype: String,
        keywords: String,
        metadata: String,
        url: String,
        identifier: { type: String, required: true }
    },
    { timestamps: true }
);

const Article = model<IArticle>('Article', articleSchema);
export default Article;
