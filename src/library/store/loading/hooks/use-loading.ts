import {useMount} from "ahooks";
import {useCallback} from "react";
import useMainDispatch from "../../../../main/store/hooks/use-main-dispatch";
import useMainSelector from "../../../../main/store/hooks/use-main-selector";
import {LoadingKeys, LoadingStatus, setLoading as setLoadingAction} from "../loading.slice";
import getLoadingSelector from "../selectors/get-loading.selector";

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
