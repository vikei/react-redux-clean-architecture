import categoriesApi from "../categories/api";

export type API = typeof api;

const api = {
  categories: categoriesApi,
};

export default api;
