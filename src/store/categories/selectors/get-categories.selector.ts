import {categoriesAdapter} from "../categories.slice";

export default function getCategoriesSelector(state: MainState) {
  return categoriesAdapter.getSelectors().selectAll(state.categories);
}
