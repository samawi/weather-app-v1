import axios from 'axios';

const API_BASE_URL = '/get-weather-image';

export const fetchWeatherImage = async () => {
  try {
    const response = await axios.get(API_BASE_URL);
    return response.data.image;
  } catch (error) {
    console.error('Error details:', error);
    throw new Error('Failed to fetch weather image');
  }
};