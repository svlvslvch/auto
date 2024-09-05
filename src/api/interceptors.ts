import axios from 'axios';

import { getContentTypeHeader } from './api.helper';

// Для запросов без авторизации
export const axiosClassic = axios.create({
  headers: getContentTypeHeader(),
});
