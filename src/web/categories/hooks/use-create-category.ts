import {useCallback} from "react";
import CategoryDto from "../../../application/categories/dtos/category-dto";
import CategoryEntity from "../../../application/categories/entities/category-entity";
import createCategoryThunk from "../../../store/categories/thunks/create-category-thunk";
import useMainDispatch from "../../library/hooks/use-main-dispatch";

interface UseCreateCategory {
  onSuccess?: (data: CategoryEntity) => void;
}

export default function useCreateCategory({onSuccess}: UseCreateCategory = {}) {
  const dispatch = useMainDispatch();

  const mutation = useCallback(
    async (values: CategoryDto) => {
      const action = await dispatch(createCategoryThunk(values));

      if (createCategoryThunk.fulfilled.match(action)) {
        onSuccess?.(action.payload);
      }
    },
    [dispatch, onSuccess],
  );

  return {mutation};
}
