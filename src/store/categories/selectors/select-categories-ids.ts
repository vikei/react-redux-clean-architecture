import {categoriesAdapter} from "../categories-slice";

export default function selectCategoriesIds(state: MainState) {
  return categoriesAdapter.getSelectors().selectIds(state.categories);
}
