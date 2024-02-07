import axios from "axios";


const requestWithCredentials = axios.create({
    headers: {'RequestOrigin': 'http://localhost:8000'},
    withCredentials:true
});

export default requestWithCredentials;
