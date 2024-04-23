import axios from 'axios';

export function Create(reqBody){
    let URL = '/api/v1/createfood';
    axios.post(URL,reqBody).then().catch()
}