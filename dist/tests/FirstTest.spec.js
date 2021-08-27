"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("@models/User"));
test('it should be ok', () => {
    const user = new User_1.default();
    user.name = 'Gilson';
    expect(user.name).toEqual('Gilson');
});
