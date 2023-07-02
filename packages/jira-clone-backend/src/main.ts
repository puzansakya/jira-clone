/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import * as dotenv from 'dotenv'

import cors from 'cors';
import express from 'express';

// UTILITIES
import * as fromUtils from './utilities';

// DATABASE
import * as fromDatabase from "./db";
import { Routes } from './routes';
// import { Routes } from './routes';

dotenv.config()

const app = express();
const port = process.env.PORT || 3333;

const corsConfig = {
  origin: '*',
  // optionsSuccessStatus: 200
}

app.use(cors(corsConfig));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

fromDatabase.initialize_database_connection()

Object.keys(Routes).forEach((route: any) => {
  app.use(Routes[route].path, Routes[route].controller);
})

if (process.env.ENABLE_ROUTE_LOGGING === "true") {
  const mappedRouteLogging = Object.keys(Routes).map((route) => {
    return { Name: route, Route: Routes[route].path }
  })

  console.table(mappedRouteLogging)
}

app.use(fromUtils.global_system_error_handler);
app.use(fromUtils.not_found);

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});

server.on('error', console.error);
