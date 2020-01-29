// Uncomment this stuff when you implement!

import request from 'superagent';
import { config } from '../config.js';
const { key, host } = config.get('darkskies');
// const weatherAPI = `https://${host}/forecast/${key}/`;
const weatherAPI = 'https://api.darksky.net/forecst/bdc49c149699474b183318c850b6be17/';

export const fetchWeather = async (lat, long) => {
  // implement this
  let response = 'default response';
  try {
    response = await request(weatherAPI + lat + ',' + long);
    return response;
  } catch (err) {
    console.log('erreur in gateway', err);
    return err;
  }
};
