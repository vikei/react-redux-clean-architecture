import {useCallback} from "react";
import useMainDispatch from "../../../main/store/hooks/use-main-dispatch";
import deleteCategoryByIdThunk from "../thunks/delete-category-by-id.thunk";

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
