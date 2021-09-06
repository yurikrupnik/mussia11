import express from 'express';
import bodyParser from 'body-parser';
import swaggerUI from '@mussia11/fullstack/swagger';
import dbConnect from '@mussia11/fullstack/db-connect';
import app from './app';

const port = process.env.port || 3333;

app.use(
  express.json(),
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(
  swaggerUI(
    process.env.HOST || `http://localhost:${port}`,
    process.env.NODE_ENV !== 'production' ? 'dist' : ''
  )
);
function handleDatabaseUrl() {
  const url = process.env.DB_URL;
  if (!url) {
    return 'mongodb://localhost/mussia11';
  }

  return url.includes('cluster')
    ? `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}${url}`
    : url;
}

const databaseUrl = handleDatabaseUrl();

app.use(dbConnect(databaseUrl));

app.get('/api', (req, res) => {
  res.send({ message: 'Welcome to s!' });
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
