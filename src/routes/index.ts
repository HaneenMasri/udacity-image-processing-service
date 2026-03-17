import express, { Request, Response, Router } from 'express';
import images from './images';

const routes: Router = express.Router();

routes.get('/', (req: Request, res: Response): void => {
  res.send('This is the main api route!');
});
routes.use('/images', images);

export default routes;
