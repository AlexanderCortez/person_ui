import { config } from '@constants/config';
import axios from 'axios';
import { stringify } from 'qs';

const instance = axios.create({
  baseURL: config.apiBaseUrl,
  paramsSerializer: (params) => stringify(params, { arrayFormat: 'brackets' }),
});

export default instance;
