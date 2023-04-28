import axios from 'axios'

const getNewsItemHelper = async () => {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return {
            news: response.data
        }
    } catch (error) {
        throw error
    }
}

const getNewsItemByIdHelper = async (id) => {
    try {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
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