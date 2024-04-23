import axios from 'axios';

const URL = 'http://localhost:5500/api/v1';

export function CreateFood(reqBody) {
    return axios.post( `${URL}/createfood`, reqBody)
        .then(response => {
            return response.data; 
        })
        .catch(error => {
            throw error;
        });
}

export function UpdateFood(foodId, reqBody) {
    return axios.post(`${URL}/updatefood/${foodId}`, reqBody)
        .then(response => {
            return response.data
        })
        .catch(error => {
            throw error;
        });
}

export function ReadFoodAll() {
    return axios.get(`${URL}/readallfood`)
        .then(response => {
            return response.data; 
        })
        .catch(error => {
            throw error;
        });
}

export function DeleteFood(foodId) {
    return axios.get(`${URL}/deletefood/${foodId}`)
        .then(response => {
            return response.data; 
        })
        .catch(error => {
            throw error;
        });
}


export function ReadFood(foodId) {
    try {
        return axios.get(`${URL}/readfood/${foodId}`)
            .then(response => {
                return response.data;
            });
    } catch (error) {
        throw error;
    }
}


