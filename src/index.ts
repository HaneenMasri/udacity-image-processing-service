import express, { Request, Response } from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;

app.use('/api', routes);

app.get('/', (req: Request, res: Response): void => {
  res.send('Visit http://localhost:3000/api to see the magic!');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

export default app;
