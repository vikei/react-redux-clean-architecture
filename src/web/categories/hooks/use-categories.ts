import {useCallback, useEffect} from "react";
import getCategoriesSelector from "../../../store/categories/selectors/get-categories.selector";
import getCategoriesThunk from "../../../store/categories/thunks/get-categories.thunk";
import useLoading from "../../library/hooks/use-loading";
import useMainDispatch from "../../library/hooks/use-main-dispatch";
import useMainSelector from "../../library/hooks/use-main-selector";

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
