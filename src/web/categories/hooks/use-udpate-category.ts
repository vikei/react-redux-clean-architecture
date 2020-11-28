import {useCallback} from "react";
import CategoryDto from "../../../application/categories/dtos/category-dto";
import CategoryEntity from "../../../application/categories/entities/category.entity";
import updateCategoryByIdThunk from "../../../store/categories/thunks/update-category-by-id.thunk";
import useMainDispatch from "../../library/hooks/use-main-dispatch";

interface UseUpdateCategory {
  onSuccess?: (data: CategoryEntity) => void;
}

export default function useUpdateCategory({onSuccess}: UseUpdateCategory) {
  const dispatch = useMainDispatch();

  const mutation = useCallback(
    async (id: number, data: CategoryDto) => {
      const action = await dispatch(updateCategoryByIdThunk({id, data}));

      if (updateCategoryByIdThunk.fulfilled.match(action)) {
        onSuccess?.(action.payload);
      }
    },
    [dispatch, onSuccess],
  );

  return {mutation};
}
