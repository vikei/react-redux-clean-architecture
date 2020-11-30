import {useCallback, useEffect} from "react";
import selectCategories from "../../../store/categories/selectors/select-categories";
import fetchCategoriesThunk from "../../../store/categories/thunks/fetch-categories-thunk";
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
      await dispatch(fetchCategoriesThunk({query}));
    },
    [dispatch],
  );

  useEffect(() => {
    if (skip) {
      return;
    }

    fetch({query});
  }, [dispatch, fetch, query, skip]);

  const data = useMainSelector(selectCategories);

  const [loading] = useLoading("categories");

  return {data, loading, fetch};
}
