import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-myburger-daed6.firebaseio.com/'
});

export default instance;