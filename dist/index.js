"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
// Server port
const PORT = process.env.PORT || 4000;
// Server host
const HOSTNAME = process.env.HOSTNAME || 'http://localhost';
// App Express
const app = express_1.default();
// Endpoint
app.get('/', (req, res) => {
    res.send('Welcome!');
});
// Cors
app.use(cors_1.default({
    origin: ['http://localhost:3000']
}));
// Request
app.use((req, res) => {
    res.status(404);
});
//Routes
app.use('/api', router_1.default);
// Start server
app.listen(PORT, () => {
    console.log(`Running Server ${HOSTNAME}:${PORT}`);
});
app.all('*', function (req, res) {
    res.sendFile(__dirname + '/index.html'); /* <= Where my ng-view is located */
});
//# sourceMappingURL=index.js.map