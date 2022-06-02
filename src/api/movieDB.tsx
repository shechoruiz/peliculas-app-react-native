import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'http://api.themoviedb.org/3/movie',
  params: {
    api_key: '5764038f3ff1afae5a10670694319924',
    language: 'es-ES',
  },
  // headers: {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json; charset=utf-8',
  // },
});

export default movieDB;
