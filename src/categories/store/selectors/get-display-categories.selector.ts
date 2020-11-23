export default function getDisplayCategoriesSelector(state: MainState) {
  return state.categories.displayIds.map(id => state.categories.byId[id]);
}
