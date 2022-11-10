"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routerItems = express_1.default.Router();
routerItems.post('/items', (req, res) => {
    res.send('Create');
});
routerItems.get('/items', (req, res) => {
    res.send('Read all');
});
routerItems.get('/items/:id', (req, res) => {
    const id = +req.params.id;
    res.send(`Read specific ${id}`);
});
routerItems.put('/items/:id', (req, res) => {
    const id = +req.params.id;
    res.send(`Update ${id}`);
});
routerItems.delete('/items/:id', (req, res) => {
    const id = +req.params.id;
    res.send(`Delete ${id}`);
});
exports.default = routerItems;
//# sourceMappingURL=router.js.map