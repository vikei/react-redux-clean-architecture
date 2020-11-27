import axios, {AxiosPromise, AxiosRequestConfig} from "axios";

const FAKE_BLOG_API_URL = "http://blog.com/";

export default function request<T extends unknown>({
  baseURL,
  ...config
}: AxiosRequestConfig): AxiosPromise<T> {
  return axios({
    baseURL: baseURL ?? FAKE_BLOG_API_URL,
    withCredentials: true,
    ...config,
  });
}
