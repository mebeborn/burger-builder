import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-be25c.firebaseio.com/'
});

export default instance;