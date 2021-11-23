
import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/users/',
    headers: {
        Authorization: 'token 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'
    }
});

export default api;