"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
const processImage = async (filename, width, height) => {
    try {
        const inputPath = path_1.default.resolve(`./assets/full/${filename}.jpg`);
        const outputPath = path_1.default.resolve(`./assets/thumbs/${filename}_${width}x${height}.jpg`);
        await (0, sharp_1.default)(inputPath).resize(width, height).toFile(outputPath);
        return outputPath;
    }
    catch (error) {
        throw new Error('Could not process the image. Make sure the filename is correct.', 
        // @ts-expect-error: cause is supported in ES2022 but might trigger TS error in older targets
        { cause: error });
    }
};
exports.default = processImage;
