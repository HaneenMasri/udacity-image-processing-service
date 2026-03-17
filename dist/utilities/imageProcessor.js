"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sharp_1 = __importDefault(require("sharp"));
const path_1 = __importDefault(require("path"));
/**
 * وظيفة هذه الـ Utility هي استقبال اسم الصورة والأبعاد،
 * ثم استخدام مكتبة Sharp لإنتاج صورة مصغرة وحفظها.
 */
const processImage = async (filename, width, height) => {
    try {
        // تحديد مسار الصورة الأصلية
        const inputPath = path_1.default.resolve(`./assets/full/${filename}.jpg`);
        // تحديد مسار واسم الصورة المصغرة الناتجة (مثلاً: view_200x200.jpg)
        const outputPath = path_1.default.resolve(`./assets/thumbs/${filename}_${width}x${height}.jpg`);
        // تنفيذ عملية المعالجة باستخدام Sharp
        await (0, sharp_1.default)(inputPath)
            .resize(width, height)
            .toFile(outputPath);
        // إرجاع المسار الجديد لنتمكن من عرضه للمستخدم
        return outputPath;
    }
    catch (error) {
        throw new Error('Could not process the image. Make sure the filename is correct.');
    }
};
exports.default = processImage;
