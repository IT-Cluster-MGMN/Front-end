import axios from "axios";

const requestWithCredentials = axios.create({
    baseURL: API_ENDPOINT,
    headers: {'RequestOrigin': 'http://localhost:8000'},
    withCredentials:true
});

const requestWithoutCredentials = axios.create({
    baseURL: API_ENDPOINT,
    headers: {'RequestOrigin': 'http://localhost:8000'},
}); 
