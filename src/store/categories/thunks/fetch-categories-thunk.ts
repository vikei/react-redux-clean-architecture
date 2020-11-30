import {createAsyncThunk} from "@reduxjs/toolkit";
import CategoryEntity from "../../../application/categories/entities/category-entity";
import {setLoading} from "../../loading/loading-slice";
import {setCategories} from "../categories-slice";
import selectCategories from "../selectors/select-categories";

const fetchCategoriesThunk = createAsyncThunk<
  CategoryEntity[],
  {query?: string; skipIfDataExist?: boolean} | undefined, // TODO: add prop to avoid fetch if data exist on component mount
  ThunkApiConfig
>("@@categories/getCategories", async (params, {dispatch, getState, extra: {api}}) => {
  const dataFromStore = selectCategories(getState());
  if (params?.skipIfDataExist && dataFromStore) {
    return dataFromStore;
  }

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

export default fetchCategoriesThunk;
