import { AxiosRequestConfig } from "axios";
import { http } from "./httpClient";

export class ApiImplementation {
  static get = (url: string, config?: AxiosRequestConfig) =>
    http().get(url, config);

  static post = (url: string, data?: any, config?: AxiosRequestConfig) =>
    http().post(url, data, config);

  static patch = (url: string, data?: any, config?: AxiosRequestConfig) =>
    http().patch(url, data, config);

  static put = (url: string, data?: any, config?: AxiosRequestConfig) =>
    http().put(url, data, config);

  static del = (url: string, data?: any) => http().delete(url, data);
}
