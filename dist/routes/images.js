"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageProcessor_1 = __importDefault(require("../utilities/imageProcessor"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const images = express_1.default.Router();
images.get('/', async (req, res) => {
    const filename = req.query.filename;
    const width = parseInt(req.query.width);
    const height = parseInt(req.query.height);
    if (!filename || isNaN(width) || isNaN(height) || width <= 0 || height <= 0) {
        res
            .status(400)
            .send('Please provide a valid filename, width, and height (positive numbers).');
        return;
    }
    const fullPath = path_1.default.resolve(`./assets/full/${filename}.jpg`);
    if (!fs_1.default.existsSync(fullPath)) {
        res.status(404).send('Image not found in assets/full folder.');
        return;
    }
    const outputPath = path_1.default.resolve(`./assets/thumbs/${filename}_${width}x${height}.jpg`);
    try {
        if (fs_1.default.existsSync(outputPath)) {
            console.log('Serving from cache...');
            res.sendFile(outputPath);
            return;
        }
        console.log('Processing new image...');
        const processedImagePath = await (0, imageProcessor_1.default)(filename, width, height);
        res.sendFile(processedImagePath);
    }
    catch (error) {
        res.status(500).send('Internal Server Error during image processing.');
    }
});
exports.default = images;
