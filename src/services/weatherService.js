import { fetchWeather } from '../gateways/weatherGateway.js';

export const getWeather = async params => {
  try {
    let weatherData = await fetchWeather(params.lat, params.long);
    const parseWeather = JSON.parse(weatherData.text);
    const city = '';
    const temperature = parseWeather.currently.temperature;
    const prepareForRain = parseWeather.currently.precipProbability > 50;
    const weatherPayload = {
      city,
      temperature,
      prepareForRain
    };
    return { weatherPayload };
  } catch (err) {
    console.log('erreur in service:', err);
    return err;
  }
};
// nothing here yet!
