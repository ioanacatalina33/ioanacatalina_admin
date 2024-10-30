import { Response, Request, Express } from 'express';
import { deleteLocation, getLocations, updateLocation } from '../controllers/location.controller';

export default function albumRoutes(app: Express) {
    app.get('/location/get', function (req: Request, res: Response) {
        getLocations(req, res);
    });
    app.post('/location/update', function (req: Request, res: Response) {
        updateLocation(req, res);
    });
    app.post('/location/delete', function (req: Request, res: Response) {
        deleteLocation(req, res);
    });
}
