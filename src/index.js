import express from 'express';
import morgan from 'morgan';
import { engine } from 'express-handlebars';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './routes/index.js';
import db from './config/db/index.js';

const app = express();
const port = 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

db.connect();

app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'public')))

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './resources/views'));

app.use(router);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});