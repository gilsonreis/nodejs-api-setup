"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const typeorm_1 = require("typeorm");
const Routes_1 = __importDefault(require("@config/Routes"));
class App {
    constructor() {
        this.express = express_1.default();
        this.middlewares();
        this.database();
        this.routes();
    }
    routes() {
        for (const route of Routes_1.default) {
            this.express.use(route);
        }
    }
    middlewares() {
        this.express.use(express_1.default.json());
        this.express.use(cors_1.default());
    }
    database() {
        typeorm_1.createConnection().then(() => 'Database was Connected successful');
    }
}
exports.default = new App().express;
