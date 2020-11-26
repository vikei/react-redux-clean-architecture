import {useMount} from "ahooks";
import {useCallback} from "react";
import {
  LoadingKeys,
  LoadingStatus,
  setLoading as setLoadingAction,
} from "../../../store/loading/loading.slice";
import getLoadingSelector from "../../../store/loading/selectors/get-loading.selector";
import useMainDispatch from "./use-main-dispatch";
import useMainSelector from "./use-main-selector";

export default function useLoading(name: LoadingKeys, initialStatus?: LoadingStatus) {
  const dispatch = useMainDispatch();
  const status = useMainSelector(getLoadingSelector(name));

  useMount(() => {
    if (initialStatus) {
      dispatch(setLoadingAction({key: name, status: initialStatus}));
    }
  });

  const setLoading = useCallback(
    (status: LoadingStatus) => {
      dispatch(setLoadingAction({key: name, status}));
    },
    [dispatch, name],
  );

  return [status, setLoading] as const;
}
