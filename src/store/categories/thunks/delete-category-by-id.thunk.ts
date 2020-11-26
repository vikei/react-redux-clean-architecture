import {createAsyncThunk} from "@reduxjs/toolkit";
import deleteCategoryById from "../../../api/categories/delete-category-by-id";
import CategoryEntity from "../../../application/categories/entities/category.entity";
import {deleteCategory} from "../categories.slice";

const deleteCategoryByIdThunk = createAsyncThunk<CategoryEntity | null, number, ThunkApiConfig>(
  "@@categories/deleteCategoryById",
  async (id, {dispatch}) => {
    const {
      data: {data},
    } = await deleteCategoryById(id);

    if (data) {
      dispatch(deleteCategory(data));
    }

    return data ?? null;
  },
);

export default deleteCategoryByIdThunk;
