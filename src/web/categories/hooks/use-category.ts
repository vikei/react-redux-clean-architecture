import {useEffect} from "react";
import selectCategoryById from "../../../store/categories/selectors/select-category-by-id";
import fetchCategoryByIdThunk from "../../../store/categories/thunks/fetch-category-by-id.thunk";
import useMainDispatch from "../../library/hooks/use-main-dispatch";
import useMainSelector from "../../library/hooks/use-main-selector";

interface UseCategory {
  id: number;
}

export default function useCategory({id}: UseCategory) {
  const dispatch = useMainDispatch();

  useEffect(() => {
    dispatch(fetchCategoryByIdThunk(id));
  }, [dispatch, id]);

  const data = useMainSelector(selectCategoryById(id));

  return {data};
}
