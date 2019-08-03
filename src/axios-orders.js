import axios from 'axios';

const instance = axios.create({
  baseURL:'https://myburger-ad958.firebaseio.com/',
});

export default instance;