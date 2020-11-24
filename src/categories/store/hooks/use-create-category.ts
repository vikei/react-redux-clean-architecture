import {useCallback} from "react";
import useMainDispatch from "../../../main/store/hooks/use-main-dispatch";
import CategoryDto from "../../domain/dtos/category-dto";
import CategoryEntity from "../../domain/entities/category.entity";
import createCategoryThunk from "../thunks/create-category.thunk";

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
