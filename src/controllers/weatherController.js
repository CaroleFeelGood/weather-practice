import { fetchWeather } from '../gateways/weatherGateway.js';

export const getWeather = async (params) => {
    return fetchWeather(params.lat, params.long);
}
