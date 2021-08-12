import axios from 'axios';

const axiosConfig = axios.create();

axiosConfig.defaults.baseURL = 'http://35.198.56.190';

export default axiosConfig;
