import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://unsplash.com/',
  headers: {
    Authorization: `Client-ID` + process.env.UNSPLASH_API_KEY,
  }
});

export default unsplash;