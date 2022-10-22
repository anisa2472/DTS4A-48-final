import axios from 'axios';

const nytInstance = axios.create({
    baseURL: 'https://api.nytimes.com/svc/books/v3/',
    params: {
        'api-key': process.env.REACT_APP_NYT_API_KEY,
    },
});

export default nytInstance;
