export default function getCategoryByIdSelector(id: number) {
  return (state: MainState) => state.categories.byId[id];
}
