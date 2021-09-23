import axios, { AxiosInstance } from 'axios';
import { env } from '../config/env';

async function test() {
  try {
    const result = await axios.get(`https://api.polygon.io/v1/meta/crypto-exchanges?apiKey=${env.POLYGON_API_KEY}`);
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export {  
  test
};