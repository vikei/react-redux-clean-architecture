import {useCallback} from "react";
import deleteCategoryByIdThunk from "../../../store/categories/thunks/delete-category-by-id-thunk";
import useMainDispatch from "../../library/hooks/use-main-dispatch";

interface UseDeleteCategory {
  onSuccess?: () => void;
}

export default function useDeleteCategory({onSuccess}: UseDeleteCategory = {}) {
  const dispatch = useMainDispatch();

  const mutation = useCallback(
    async (id: number) => {
      const action = await dispatch(deleteCategoryByIdThunk(id));

      if (deleteCategoryByIdThunk.fulfilled.match(action)) {
        onSuccess?.();
      }
    },
    [dispatch, onSuccess],
  );

  return {mutation};
}
