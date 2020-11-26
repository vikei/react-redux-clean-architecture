import {useCallback} from "react";
import getAllIdsCategoriesSelector from "../../../store/categories/selectors/get-all-ids-categories.selector";
import getDisplayCategoriesSelector from "../../../store/categories/selectors/get-display-categories.selector";
import useMainSelector from "../../library/hooks/use-main-selector";
import useCategories from "../hooks/use-categories";

export default function useSearchCategories() {
  const allIds = useMainSelector(getAllIdsCategoriesSelector);
  const {fetch, loading} = useCategories({skip: Boolean(allIds.length)});
  const data = useMainSelector(getDisplayCategoriesSelector);

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
