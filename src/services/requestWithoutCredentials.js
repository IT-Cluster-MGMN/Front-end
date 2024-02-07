import axios from "axios";

const requestWithoutCredentials = axios.create({
    headers: {'RequestOrigin': 'http://localhost:8000'},
}); 

export default requestWithoutCredentials;
