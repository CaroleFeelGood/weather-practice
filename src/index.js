import express from 'express';
import morgan from 'morgan';
import chalk from 'chalk';
import { config } from './config.js';

// import { getWeather } from "./controllers/weatherController.js";
import { getWeather } from './services/weatherService.js';
const app = express();
const port = config.get('app.port');

// set up logger
const accessLogger = morgan(function(tokens, req, res) {
  return [
    chalk.hex('#34ace0').bold(tokens.method(req, res)),
    chalk.hex('#ffb142').bold(tokens.status(req, res)),
    chalk.hex('#ff5252').bold(tokens.url(req, res)),
    chalk.hex('#2ed573').bold(tokens['response-time'](req, res) + ' ms'),
    chalk.hex('#f78fb3').bold('@ ' + tokens.date(req, res))
  ].join(' ');
});

app.use(accessLogger);
// app.use(function(err, req, res, next) {
//   // console.log('erreur in index', err);
//   console.error('erreur in index', err.stack);
//   res.status(500).send('Something broke!');
//   // res.send(err);
// });
app.get('/', (req, res) => res.send('Nothing here yet!'));

app.get('/weather', async (req, res) => {
  const { query } = req;
  console.log('in weather');
  try {
    const weather = await getWeather(query);
    res.json(weather);
  } catch (err) {
    console.log('in weather erreur', err);
    return next(err);
  }
});

app.listen(port, () => console.log(`🚀 Ready on port ${chalk.hex('#34ace0').bold(port)}!`));
