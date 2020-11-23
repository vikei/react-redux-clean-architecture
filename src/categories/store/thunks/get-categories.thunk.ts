import {createAsyncThunk} from "@reduxjs/toolkit";
import fetchCategories from "../../api/fetch-categories";
import CategoryEntity from "../../domain/entities/category.entity";
import {setCategories} from "../categories.slice";

const getCategoriesThunk = createAsyncThunk<
  CategoryEntity[],
  {query?: string} | undefined,
  ThunkApiConfig
>("@@categories/getCategories", async (params, {dispatch}) => {
  const {
    data: {data},
  } = await fetchCategories(params?.query);
  dispatch(setCategories(data));
  return data;
});

export default getCategoriesThunk;
