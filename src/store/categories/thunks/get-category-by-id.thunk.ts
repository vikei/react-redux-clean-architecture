import {createAsyncThunk} from "@reduxjs/toolkit";
import fetchCategoryById from "../../../api/categories/fetch-category-by-id";
import CategoryEntity from "../../../application/categories/entities/category.entity";
import {setLoading} from "../../loading/loading.slice";
import {addCategories} from "../categories.slice";

const getCategoryByIdThunk = createAsyncThunk<CategoryEntity | undefined, number, ThunkApiConfig>(
  "@@categories/getCategoryById",
  async (id, {dispatch, getState}) => {
    const existed = getState().categories.byId[id];
    if (existed) {
      return existed;
    }

    try {
      dispatch(setLoading({key: "categories", status: "pending"}));
      const {
        data: {data},
      } = await fetchCategoryById(id);

      if (data) {
        dispatch(addCategories([data]));
      }

      dispatch(setLoading({key: "categories", status: "resolved"}));
      return data;
    } catch (e) {
      dispatch(setLoading({key: "categories", status: "rejected"}));
      throw e;
    }
  },
);

export default getCategoryByIdThunk;
