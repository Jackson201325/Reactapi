import axios from 'axios'

export default axios.create({
    baseURL: "https://localhost:300/api/v11q",
    responseType: "json"
});
