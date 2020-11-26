import {useEffect} from "react";
import getCategoryByIdSelector from "../../../store/categories/selectors/get-category-by-id.selector";
import getCategoryByIdThunk from "../../../store/categories/thunks/get-category-by-id.thunk";
import useMainDispatch from "../../library/hooks/use-main-dispatch";
import useMainSelector from "../../library/hooks/use-main-selector";

interface UseCategory {
  id: number;
}

export default function useCategory({id}: UseCategory) {
  const dispatch = useMainDispatch();

  useEffect(() => {
    dispatch(getCategoryByIdThunk(id));
  }, [dispatch, id]);

  const data = useMainSelector(getCategoryByIdSelector(id));

  return {data};
}
