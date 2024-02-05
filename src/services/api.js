import axios from "axios";

export const requestWithCredentials = axios.create({
    baseURL: API_ENDPOINT,
    headers: {'RequestOrigin': 'http://localhost:8000'},
    withCredentials:true
});

export const requestWithoutCredentials = axios.create({
    baseURL: API_ENDPOINT,
    headers: {'RequestOrigin': 'http://localhost:8000'},
}); 
