import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import adminConfig from "config";
import { getToken } from "utils/cookie";

/**
 * 定义接口规范
 */
interface ResponseData<T> {
  code: number;
  data: T;
  msg: string;
}

// 指定 axios 请求类型
axios.defaults.headers = {
  "Content-Type": "application/json;charset=utf-8",
};

// 指定请求地址
axios.defaults.baseURL =
  process.env.NODE_ENV === "production" ? adminConfig.API_URL : "";

// 请求拦截器
axios.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers.token = token;
    }
    return config;
  },
  (error: AxiosError) => Promise.reject(error)
);

// 相应拦截器
axios.interceptors.response.use(
  (response: AxiosResponse<ResponseData<any>>) => {
    if (!response.data) {
      return Promise.resolve(response);
    }

    // 登录过期
    if (response.data.code === adminConfig.LOGIN_EXPIRE) {
      return Promise.reject(new Error(response.data.msg));
    }

    if (response.data.code === adminConfig.SUCCESS_CODE) {
      return response.data as any;
    }

    return Promise.reject(new Error(response.data.msg));
  },
  (error: AxiosError) => {
    // 这里要提示失败

    return Promise.reject(error);
  }
);

// 发请求的函数
export function request<T>(options: AxiosRequestConfig) {
  return axios.request<T>(options);
}
