import Article, { IArticle } from '../models/article.model';
import { Response, Request } from 'express';
import Location from '../models/location.model';

export async function getArticles(req: Request, res: Response) {
    try {
        const type = req.body.data.type;
        const articles = await Article.find({ type })
            .sort({ date_start: -1 })
            .populate('locations');
        //console.log('we got here 2! articles ', articles);
        res.status(200).json(articles);
    } catch (err: any) {
        console.log(err);
        res.status(500).json({ message: err.message });
        return;
    }
}

export async function saveArticle(req: Request, res: Response) {
    try {
        // throwErrorIfNotDev();
        console.log('Save article request');
        const reqArticle: IArticle = req.body.article;
        const reqLocations = reqArticle.locations;
        const isNew = req.body.isNew;
        const locationsModified = req.body.locationsModified;
        console.log('We have the name location : ' + reqArticle.name_location);
        const dbArticle = new Article(reqArticle);
        console.log('We have the dbArticle : ' + dbArticle.name_location);
        if (!isNew && !locationsModified) {
            await updateArticle(dbArticle);
            res.status(200).json(dbArticle);
            return;
        }

        // locations modified
        dbArticle.locations = [];
        var dbLocations = [];
        for (var i = 0; i < reqLocations.length; i++) {
            let dbLocation = new Location(reqLocations[i]);
            const count = await Location.countDocuments({ _id: dbLocation._id });
            if (count != 1) {
                //verify also if name exists in DB
                dbLocation = await dbLocation.save();
            }
            dbLocations.push(dbLocation);
            dbArticle.locations.push(dbLocation);
        }
        isNew ? await dbArticle.save() : await updateArticle(dbArticle);

        // set the articleId reference in the location table
        // for (var i = 0; i < dbLocations.length; i++) {
        //     let dbLocation = dbLocations[i];
        //     if (dbLocation.articles.indexOf(dbArticle._id) === -1) {
        //         dbLocation.articles.push(dbArticle._id);
        //         await helper.updateLocation(dbLocation);
        //     }
        // }
        res.status(200).json('true');
        return;
    } catch (err: any) {
        console.error(err);
        res.status(500).json({ message: err.message });
        return;
    }
}

export async function deleteArticle(req: Request, res: Response) {
    try {
    } catch (err: any) {
        console.log(err);
        // TODO
        res.status(500).json({ message: err.message });
        return;
    }
}

async function updateArticle(article: IArticle) {
    await Article.findOneAndUpdate(
        { _id: article._id },
        {
            name: article.name,
            name_location: article.name_location,
            name_url: article.name_url,
            description: article.description,
            locations: article.locations,
            country: article.country,
            continent: article.continent,
            date_start: article.date_start,
            date_end: article.date_end,
            type: article.type,
            subtype: article.subtype,
            keywords: article.keywords,
            metadata: article.metadata,
            url: article.url,
            identifier: article.identifier
        },
        { new: true }
    );
}
