import api from '../../components/utils/serverSetup'

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