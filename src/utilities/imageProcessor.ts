import sharp from 'sharp';
import path from 'path';

const processImage = async (
  filename: string,
  width: number,
  height: number,
): Promise<string> => {
  try {
    const inputPath = path.resolve(`./assets/full/${filename}.jpg`);

    const outputPath = path.resolve(
      `./assets/thumbs/${filename}_${width}x${height}.jpg`,
    );

    await sharp(inputPath).resize(width, height).toFile(outputPath);

    return outputPath;
  } catch (error) {
    throw new Error(
      'Could not process the image. Make sure the filename is correct.',
      // @ts-expect-error: cause is supported in ES2022 but might trigger TS error in older targets
      { cause: error },
    );
  }
};

export default processImage;
