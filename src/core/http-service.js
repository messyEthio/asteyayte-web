import axios from 'axios';
import { constants } from './constants/constants';

const AxiosService = () => {
    const defaultOptions = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    //create instance
    const instance = axios.create(defaultOptions);

    //set Okta token for any request
    instance.interceptors.request.use(async (config) => {
        const storageAccess = localStorage.getItem('jwt-token');
        const accessToken = JSON.parse(storageAccess)?.accessToken?.accessToken;
        if (publicUrls.some((urlStr) => config?.url?.includes(urlStr))) {
            return config;
        }

        if (accessToken) {
            config.headers.Authorization = accessToken ? `Bearer ${accessToken}` : '';
        }

        return config;
    });
    // instance.interceptors.response.use(
    //   (response) => {
    //     // Any status code that lie within the range of 2xx cause this function to trigger
    //     // Do something with response data
    //     return response;
    //   },
    //   (error) => {
    //     logger.error(error);
    //     if (error.response) {
    //       // The request was made and the server responded with a status code
    //       // that falls out of the range of 2xx
    //       logger.error(error.request);

    //       if (error.response.status === 401) {
    //         //alert.error('Unauthorized access please login first') or remove the token from storage
    //       }
    //       return Promise.reject(error.response);
    //     } else if (error.request) {
    //       // The request was made but no response was received
    //       logger.error(error.request);
    //     } else {
    //       // Something happened in setting up the request that triggered an Error
    //       logger.error('Error', error.message);
    //     }
    //     // Any status codes that falls outside the range of 2xx cause this function to trigger
    //     // Do something with response error
    //   }
    // );
    return instance;
};
export const httpService = AxiosService();

// URLs that don't need authorization header
const publicUrls = [constants.publicUrls.ACCOUNT_API];
