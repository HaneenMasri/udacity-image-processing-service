import express, { Request, Response, Router } from 'express';
import processImage from '../utilities/imageProcessor';
import path from 'path';
import fs from 'fs';

const images: Router = express.Router();

images.get('/', async (req: Request, res: Response): Promise<void> => {
  const filename = req.query.filename as string;
  const width = parseInt(req.query.width as string);
  const height = parseInt(req.query.height as string);

  if (!filename || isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
    res
      .status(400)
      .send(
        'Please provide a valid filename, width, and height (positive numbers).',
      );
    return;
  }

  const fullPath = path.resolve(`./assets/full/${filename}.jpg`);
  if (!fs.existsSync(fullPath)) {
    res.status(404).send('Image not found in assets/full folder.');
    return;
  }

  const outputPath = path.resolve(
    `./assets/thumbs/${filename}_${width}x${height}.jpg`,
  );

  try {
    if (fs.existsSync(outputPath)) {
      console.log('Serving from cache...');
      res.sendFile(outputPath);
      return;
    }

    console.log('Processing new image...');
    const processedImagePath = await processImage(filename, width, height);
    res.sendFile(processedImagePath);
  } catch (error) {
    res.status(500).send('Internal Server Error during image processing.');
  }
});

export default images;
