import {categoriesAdapter} from "../categories.slice";

export default function getCategoriesIdsSelector(state: MainState) {
  return categoriesAdapter.getSelectors().selectIds(state.categories);
}
