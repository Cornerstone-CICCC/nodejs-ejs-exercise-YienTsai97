"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// This is your server file :)
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const page_routes_1 = __importDefault(require("./routes/page.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Create Server
const app = (0, express_1.default)();
//Set view engine to EJS
app.set('view engine', 'EJS');
app.set('views', path_1.default.join(__dirname, '../src/views'));
//Middleware
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.join(__dirname, "public"))); // css
app.use(express_1.default.urlencoded({ extended: true }));
//Routes
app.use('/', page_routes_1.default);
//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on Port:${PORT}`);
});
