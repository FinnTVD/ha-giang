import axios from 'axios';
// config
import { isEmpty, omitBy } from 'lodash';

// ----------------------------------------------------------------------
const HOST_API = process.env.API

const axiosInstance = axios.create({
  baseURL: HOST_API,
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;

// ----------------------------------------------------------------------

export const fetcher = async (args) => {
  const [url, config] = Array.isArray(args) ? args : [args];

  const res = await axiosInstance.get(url, { ...config });

  return res.data;
};

// Remove properties with "empty" values
export const cleanedParams = (params) => omitBy(params, isEmpty);