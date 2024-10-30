import { Response, Request } from 'express';
import Location from '../models/location.model';

export async function getLocations(req: Request, res: Response) {
    try {
        const locations = await Location.find().sort('name');
        res.status(200).json(locations);
    } catch (err: any) {
        console.log('error', err);
        res.status(500).json({ message: err.message });
        return;
    }
}

export async function deleteLocation(req: Request, res: Response) {
    try {
        //throwErrorIfNotDev();
        console.log('Delete location request');
        var locationId = req.body.locationId;
        await Location.deleteOne({ _id: locationId });
        res.status(200).json('true');
    } catch (err: any) {
        console.log('error', err);
        res.status(500).json({ message: err.message });
        return;
    }
}

export async function updateLocation(req: Request, res: Response) {
    try {
        //throwErrorIfNotDev();
        console.log('Update location request');
        const location = req.body.location;
        await Location.findOneAndUpdate(
            { _id: location._id },
            {
                name: location.name,
                coord_lat: location.coord_lat,
                coord_long: location.coord_long,
                articles: location.articles
            },
            { new: true }
        );
        res.status(200).json('true');
    } catch (err: any) {
        console.log(err);
        res.status(500).json({ message: err.message });
        return;
    }
}
