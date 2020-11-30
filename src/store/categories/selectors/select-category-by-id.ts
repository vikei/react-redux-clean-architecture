import {categoriesAdapter} from "../categories-slice";

export default function selectCategoryById(id: number) {
  return (state: MainState) => categoriesAdapter.getSelectors().selectById(state.categories, id);
}
