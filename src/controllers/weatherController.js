import { fetchWeather } from '../gateways/weatherGateway.js';


export const getWeather = async (req, res, next) => {
    const newYorkCoordinates = [42.3601, -71.0589];

    await fetchWeather();
    return 'I\'m not implemented yet!';
}
