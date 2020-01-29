import request from 'superagent';
import { config } from '../config.js';
const { key, host } = config.get('darkskies');
// const weatherAPI = `https://${host}/forecast/${key}/`;
const weatherAPI = 'https://api.darksky.net/forecast/bdc49c149699474b183318c850b6be17/';

export const fetchWeather = async (lat, long) => {
  const response = await request(weatherAPI + lat + ',' + long);
  return response;
  // return `Not implemented yet, but your input params are ${lat} and ${long}`;
};
