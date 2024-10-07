import axios from 'axios';

const unsplash = axios.create({
  baseURL: 'https://unsplash.com/',
  headers: {
    Authorization: `Client-ID` + "ybfLEQahubjjWSesXKOJiCyjHYlQobBXfmTwrYT7IBc",
  }
});

export default unsplash;
