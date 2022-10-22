import axios from 'axios';

const gbookInstance = axios.create({
    baseURL: 'https://www.googleapis.com/books/v1/volumes/',
});

export default gbookInstance;