"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const imageProcessor_1 = __importDefault(require("../utilities/imageProcessor"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
describe('Test image processing utility', () => {
    it('should resolve and create a resized image file', async () => {
        const filename = 'view';
        const width = 100;
        const height = 100;
        const outputPath = path_1.default.resolve(`./assets/thumbs/${filename}_${width}x${height}.jpg`);
        // إذا كانت الصورة موجودة مسبقاً، نحذفها لنضمن أن الاختبار سيعيد معالجتها فعلياً
        if (fs_1.default.existsSync(outputPath)) {
            fs_1.default.unlinkSync(outputPath);
        }
        const result = await (0, imageProcessor_1.default)(filename, width, height);
        expect(result).toEqual(outputPath);
        expect(fs_1.default.existsSync(result)).toBeTrue();
    });
    it('should throw an error if image does not exist', async () => {
        await expectAsync((0, imageProcessor_1.default)('nonexistent', 100, 100)).toBeRejected();
    });
});
