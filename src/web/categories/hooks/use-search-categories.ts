import {useCallback} from "react";
import getCategoriesIdsSelector from "../../../store/categories/selectors/get-categories-ids.selector";
import getCategoriesSelector from "../../../store/categories/selectors/get-categories.selector";
import useMainSelector from "../../library/hooks/use-main-selector";
import useCategories from "../hooks/use-categories";

export default function useSearchCategories() {
  const allIds = useMainSelector(getCategoriesIdsSelector);
  const {fetch, loading} = useCategories({skip: Boolean(allIds.length)});

  const data = useMainSelector(getCategoriesSelector);

  const search = useCallback(
    async (query: string) => {
      await fetch({query});
    },
    [fetch],
  );

  return {
    data,
    loading,
    search,
  };
}
