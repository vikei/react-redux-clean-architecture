import {useEffect} from "react";
import useMainDispatch from "../../../main/store/hooks/use-main-dispatch";
import useMainSelector from "../../../main/store/hooks/use-main-selector";
import getCategoryByIdSelector from "../selectors/get-category-by-id.selector";
import getCategoryByIdThunk from "../thunks/get-category-by-id.thunk";

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
