"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("@controllers/UserController"));
const InserValidator_1 = __importDefault(require("@validators/Users/InserValidator"));
const UserRouter = new express_1.Router();
UserRouter.get('/users', UserController_1.default.index);
UserRouter.post('/users', InserValidator_1.default, UserController_1.default.store);
exports.default = UserRouter;
