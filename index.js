import express from 'express';
import cors from 'cors';
import { setupRoutes } from './routes/routes.js';

const app = express();
const port = 5000;

app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

setupRoutes(app)
app.listen(port, () => console.log('server ok for port' + port ));