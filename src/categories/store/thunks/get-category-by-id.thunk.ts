import {createAsyncThunk} from "@reduxjs/toolkit";
import fetchCategoryById from "../../api/fetch-category-by-id";
import CategoryEntity from "../../domain/entities/category.entity";
import {addCategories} from "../categories.slice";

const getCategoryByIdThunk = createAsyncThunk<CategoryEntity | undefined, number, ThunkApiConfig>(
  "@@categories/getCategoryById",
  async (id, {dispatch, getState}) => {
    const existed = getState().categories.byId[id];
    if (existed) {
      return existed;
    }

    const {
      data: {data},
    } = await fetchCategoryById(id);

    if (data) {
      dispatch(addCategories([data]));
    }

    return data;
  },
);

export default getCategoryByIdThunk;
