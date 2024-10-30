import moment from 'moment';
import { Article, Location } from 'types/data';

export const getFileDateLocationTitle = (article: Article) => {
    return (
        getFileDateTitle(article.date_start, article.date_end) +
        '_' +
        getLocationsWith_(article.locations)
    );
};

export const getFileDateTitle = (date_start: Date | undefined, date_end: Date | undefined) => {
    if (moment(date_start).format('YYYY.MM.DD') === moment(date_end).format('YYYY.MM.DD'))
        return moment(date_start).format('YYYY.MM.DD');
    else if (moment(date_start).format('YYYY.MM') === moment(date_end).format('YYYY.MM'))
        return moment(date_start).format('YYYY.MM.DD') + '-' + moment(date_end).format('DD');
    else if (moment(date_start).format('YYYY') === moment(date_end).format('YYYY'))
        return moment(date_start).format('YYYY.MM.DD') + '-' + moment(date_end).format('MM.DD');
    else
        return (
            moment(date_start).format('YYYY.MM.DD') + '-' + moment(date_end).format('YYYY.MM.DD')
        );
};

export const getLocationsWith_ = (locations: Location[]) => {
    return locations
        .map((loc) => `${loc.name ? loc.name.replace(/\s+/g, '_') : 'NO_LOCATION'}`)
        .join('_');
};
