import processImage from '../utilities/imageProcessor';
import path from 'path';
import fs from 'fs';

describe('Test image processing utility', () => {
  it('should resolve and create a resized image file', async () => {
    const filename = 'view';
    const width = 100;
    const height = 100;
    const outputPath = path.resolve(
      `./assets/thumbs/${filename}_${width}x${height}.jpg`,
    );

    if (fs.existsSync(outputPath)) {
      fs.unlinkSync(outputPath);
    }

    const result = await processImage(filename, width, height);
    expect(result).toEqual(outputPath);
    expect(fs.existsSync(result)).toBeTrue();
  });

  it('should throw an error if image does not exist', async () => {
    await expectAsync(processImage('nonexistent', 100, 100)).toBeRejected();
  });
});
