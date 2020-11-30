import {categoriesAdapter} from "../categories-slice";

export default function selectCategories(state: MainState) {
  return categoriesAdapter.getSelectors().selectAll(state.categories);
}
