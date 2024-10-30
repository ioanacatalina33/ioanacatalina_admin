import { getArticles } from 'api/api';
import { defer, LoaderFunctionArgs } from 'react-router-dom';
import { AlbumType, Article } from 'types/data';

export type ArticlesData = {
    articles: Article[];
};

export const articlesLoader = async ({ params }: LoaderFunctionArgs) => {
    const articleType = params.articleType;
    const articles = await getArticles(articleType as AlbumType);
    return defer({ articles });
};
