import {categoriesAdapter} from "../categories.slice";

export default function getCategoryByIdSelector(id: number) {
  return (state: MainState) => categoriesAdapter.getSelectors().selectById(state.categories, id);
}
