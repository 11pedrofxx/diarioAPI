import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connection from './repository/connection.js';
import './utils/global.js'

import { addRoutes } from './routes.js'

const api = express();
api.use(cors());
api.use(express.json());

addRoutes(api);

const PORT = process.env.PORT;
api.listen (PORT, () => console.log('API SUBIU NA PORTA ' + PORT));