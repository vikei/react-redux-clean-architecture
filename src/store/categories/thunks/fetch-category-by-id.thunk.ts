import {createAsyncThunk} from "@reduxjs/toolkit";
import CategoryEntity from "../../../application/categories/entities/category-entity";
import {setLoading} from "../../loading/loading-slice";
import {addCategories} from "../categories-slice";
import selectCategoryById from "../selectors/select-category-by-id";

const fetchCategoryByIdThunk = createAsyncThunk<CategoryEntity | undefined, number, ThunkApiConfig>(
  "@@categories/getCategoryById",
  async (id, {dispatch, getState, extra: {api}}) => {
    const existed = selectCategoryById(id)(getState());
    if (existed) {
      return existed;
    }

    try {
      dispatch(setLoading({key: "categories", status: "pending"}));
      const {
        data: {data},
      } = await api.categories.fetchCategoryById(id);

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

export default fetchCategoryByIdThunk;
