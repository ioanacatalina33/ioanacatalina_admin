import { Response, Request, Express } from 'express';
import { deleteArticle, getArticles, saveArticle } from '../controllers/article.controller';

export default function articleRoutes(app: Express) {
    app.post('/article/get', function (req: Request, res: Response) {
        getArticles(req, res);
    });
    app.post('/article/save', function (req: Request, res: Response) {
        saveArticle(req, res);
    });
    app.post('/article/delete', function (req: Request, res: Response) {
        deleteArticle(req, res);
    });
}
