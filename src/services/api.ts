import axios, {AxiosError} from 'axios';

export const api = axios.create({
  baseURL: 'https://maps.googleapis.com',
});

api.interceptors.request.use(config => {
  // some logics
  return config;
});

api.interceptors.response.use(
  res => res,
  (error: AxiosError) => {
    const {data, status} = error.response!;
    switch (status) {
      case 400:
        console.error(data);
        break;
      case 401:
        console.error('unauthorised');
        break;
      case 404:
        console.error('/not-found');
        break;
      case 500:
        console.error('/server-error');
        break;
    }
    return Promise.reject(error);
  },
);
