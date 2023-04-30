import axios from 'axios'

//* Backend server setup start
// For development
// const baseURL = 'http://localhost:3001'; // Change this to your Node.js server URL in development mode

// For production
const baseURL = 'https://newswire-server.onrender.com'; // Change this to your Node.js server URL in production mode

const api = axios.create({
    baseURL: baseURL
});
//! End

const getNewsItemHelper = async () => {
    try {
        // const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const response = await api.get('/api/news');

        return {
            news: response.data
        }
    } catch (error) {
        throw error
    }
}

const getNewsItemByIdHelper = async (id) => {
    try {
        // const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        const response = await api.get(`/api/news/${id}`);
        // const response = await axios.get(`/api/news/${id}`);

        return {
            newsItem: response.data
        }
    } catch (error) {
        throw error
    }
}

export const getNewsItem = () => {
    return {
        type: 'get_news',
        payload: getNewsItemHelper()
    }
}

export const getNewsItemById = (id) => {
    return {
        type: 'get_news_by_id',
        payload: getNewsItemByIdHelper(id)
    }
}

// payload is used to get data from API & send data to reducer