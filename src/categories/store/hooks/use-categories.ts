import {useCallback, useEffect} from "react";
import useLoading from "../../../library/store/loading/hooks/use-loading";
import useMainDispatch from "../../../main/store/hooks/use-main-dispatch";
import useMainSelector from "../../../main/store/hooks/use-main-selector";
import getCategoriesSelector from "../selectors/get-categories.selector";
import getCategoriesThunk from "../thunks/get-categories.thunk";

interface UseCategories {
  query?: string;
  skip?: boolean;
}

export default function useCategories({query, skip}: UseCategories = {}) {
  const dispatch = useMainDispatch();

  const fetch = useCallback(
    async ({query}: {query?: string} = {}) => {
      await dispatch(getCategoriesThunk({query}));
    },
    [dispatch],
  );

  useEffect(() => {
    if (skip) {
      return;
    }

    fetch({query});
  }, [dispatch, fetch, query, skip]);

  const data = useMainSelector(getCategoriesSelector);

  const [loading] = useLoading("categories");

  return {data, loading, fetch};
}
