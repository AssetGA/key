"use client";

import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
// import configFile from "../../../config/default.json";

// Определяем базовый URL
const apiUrl = process.env.NEXT_PUBLIC_SITE_URL;

// Трансформация данных (для firebase или общей обертки)
// function transformData(data: any): any {
//   return data && !data._id
//     ? Object.keys(data).map((key) => ({
//         ...data[key],
//       }))
//     : data;
// }

// Функция создания axios-инстанса
export function createHttpWithLang(): AxiosInstance {
  return axios.create({
    baseURL: `${apiUrl}`,
    headers: {
      "Content-Type": "application/json",
    },
  });
}

// Создание axios инстанса
const http = createHttpWithLang();

// Интерсептор для обработки ответа
http.interceptors.response.use(
  (res: AxiosResponse): AxiosResponse => {
    // if (configFile.isFireBase) {
    //   res.data = { content: transformData(res.data) };
    // }
    res.data = { content: res.data };
    return res;
  },
  (error: AxiosError): Promise<never> => {
    const expectedErrors =
      error.response &&
      error.response.status >= 400 &&
      error.response.status < 500;

    if (!expectedErrors) {
      console.error("Something went wrong. Try again later.", error);
    }

    return Promise.reject(error);
  }
);

// Экспорт обертки
const httpService = {
  get: http.get,
  post: http.post,
  put: http.put,
  delete: http.delete,
  patch: http.patch,
};

export default httpService;
