import {useCallback} from "react";
import useMainDispatch from "../../../main/store/hooks/use-main-dispatch";
import CategoryDto from "../../domain/dtos/category-dto";
import CategoryEntity from "../../domain/entities/category.entity";
import updateCategoryByIdThunk from "../thunks/update-category-by-id.thunk";

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
