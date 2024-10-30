export interface Article {
    _id?: string;
    name_url: string;
    name: string;
    locations: Location[];
    name_location?: string;
    country?: string;
    continent?: string;
    date_start?: Date;
    date_end?: Date;
    type: AlbumType;
    subtype?: string;
    url?: string;
    identifier: string;
    description: string;
    keywords: string;
    metadata: string;
}

export interface Location {
    _id: string;
    name: string;
    coord_lat: string;
    coord_long: string;
    articles: Article[];
}

export enum AlbumType {
    Travel = 'Travel',
    Dance = 'Dance',
    Highlights = 'Highlights'
}
