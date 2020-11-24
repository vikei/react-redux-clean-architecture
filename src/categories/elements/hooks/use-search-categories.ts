import {useCallback} from "react";
import useMainSelector from "../../../main/store/hooks/use-main-selector";
import getAllIdsCategoriesSelector from "../../store/selectors/get-all-ids-categories.selector";
import getDisplayCategoriesSelector from "../../store/selectors/get-display-categories.selector";
import useCategories from "../../store/hooks/use-categories";

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
