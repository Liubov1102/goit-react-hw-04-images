import axios from 'axios';
const URL = 'https://pixabay.com/api/';
const API_KEY = '27515523-9dca8758fab0b717270f23e63';

export const params = {
    q: '',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: 1,
    per_page: 12,
    key: API_KEY,
};
const customAxios = axios.create({
    baseURL: URL,
});
export const getImages = async params => {
    try {
        const response = await customAxios.get('', { params: { ...params, key: API_KEY } })
        return response.data.hits;
    } catch {
        console.log('error');
    }
};

