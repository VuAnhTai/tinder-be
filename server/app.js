/* eslint-disable no-console */
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import config from './config';
import routes from './routes';
import httpContext from 'express-http-context';

const port = config.server.port;
const app = express();
const server = http.createServer(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(httpContext.middleware);

server.listen(port, () => {
  console.log(`Server running on port ${port}/`);
  const connectionStr = `${config.database.db_uri}/${config.database.db_name}?retryWrites=true&w=majority`;
  console.log(connectionStr)
  mongoose
    .connect(connectionStr, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .catch(err => console.log(err.reason));

  const db = mongoose.connection;
  db.on('error', err => {
    console.error('> Error occurred from the database');
    console.error(err);
  });
  db.once('open', () => {
    console.log('> Connected to database successfully');
  });

  routes(app);

  // Error handlers
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    const status = err.status || 500;
    console.log(err);

    res.status(status).send({
      message: status === 500 ? 'Internal server error.' : err.message,
    });
  });
});
