import createCategory from "./requests/create-category";
import deleteCategoryById from "./requests/delete-category-by-id";
import fetchCategories from "./requests/fetch-categories";
import fetchCategoryById from "./requests/fetch-category-by-id";
import updateCategoryById from "./requests/update-category-by-id";

const categoriesApi = {
  createCategory,
  updateCategoryById,
  deleteCategoryById,
  fetchCategoryById,
  fetchCategories,
};

export default categoriesApi;
