import createCategory from "./create-category";
import deleteCategoryById from "./delete-category-by-id";
import fetchCategories from "./fetch-categories";
import fetchCategoryById from "./fetch-category-by-id";
import updateCategoryById from "./update-category-by-id";

const categoriesApi = {
  createCategory,
  updateCategoryById,
  deleteCategoryById,
  fetchCategoryById,
  fetchCategories,
};

export default categoriesApi;
