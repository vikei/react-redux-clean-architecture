export default function getCategoriesSelector(state: MainState) {
  return state.categories.allIds.map(id => state.categories.byId[id]);
}
