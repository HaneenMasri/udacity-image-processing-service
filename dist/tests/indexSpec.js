"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const request = (0, supertest_1.default)(index_1.default);
describe('Test endpoint responses', () => {
    it('gets the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(200);
    });
    it('gets the images endpoint with valid parameters', async () => {
        const response = await request.get('/api/images?filename=view&width=200&height=200');
        expect(response.status).toBe(200);
    });
    it('returns 400 if parameters are missing', async () => {
        const response = await request.get('/api/images?filename=view');
        expect(response.status).toBe(400);
    });
});
