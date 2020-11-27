import {createAsyncThunk} from "@reduxjs/toolkit";
import CategoryEntity from "../../../application/categories/entities/category.entity";
import {deleteCategory} from "../categories.slice";

const deleteCategoryByIdThunk = createAsyncThunk<CategoryEntity | null, number, ThunkApiConfig>(
  "@@categories/deleteCategoryById",
  async (id, {dispatch, extra: {api}}) => {
    const {
      data: {data},
    } = await api.categories.deleteCategoryById(id);

    if (data) {
      dispatch(deleteCategory(data.id));
    }

    return data ?? null;
  },
);

export default deleteCategoryByIdThunk;
