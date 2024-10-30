import axios from 'axios';
import { AlbumType } from 'types/data';

export const getArticles = async (type: AlbumType) => {
    try {
        const response = await axios.post('/article/get', {
            method: 'POST',
            data: { type },
            headers: { 'Content-Type': 'application/json' }
            // credentials: 'same-origin'
        });
        if (response.status !== 200) {
            throw Error(response.data.message);
        }
        return response.data;
    } catch (err: any) {
        console.log('error fetching articles ', err.message);
    }
};
