import {createAsyncThunk} from "@reduxjs/toolkit";
import CategoryEntity from "../../../application/categories/entities/category.entity";
import {setLoading} from "../../loading/loading.slice";
import {setCategories} from "../categories.slice";

const getCategoriesThunk = createAsyncThunk<
  CategoryEntity[],
  {query?: string} | undefined,
  ThunkApiConfig
>("@@categories/getCategories", async (params, {dispatch, extra: {api}}) => {
  try {
    dispatch(setLoading({key: "categories", status: "pending"}));

    const {
      data: {data},
    } = await api.categories.fetchCategories(params?.query);

    dispatch(setCategories(data));
    dispatch(setLoading({key: "categories", status: "resolved"}));
    return data;
  } catch (e) {
    dispatch(setLoading({key: "categories", status: "rejected"}));
    throw e;
  }
});

export default getCategoriesThunk;
