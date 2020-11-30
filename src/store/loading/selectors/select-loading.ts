import {LoadingKeys} from "../loading-slice";

export default function selectLoading(name: LoadingKeys) {
  return (state: MainState) => state.loading[name];
}
