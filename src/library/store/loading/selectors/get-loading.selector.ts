import {LoadingKeys} from "../loading.slice";

export default function getLoadingSelector(name: LoadingKeys) {
  return (state: MainState) => state.loading[name];
}
