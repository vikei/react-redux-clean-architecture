import {createAsyncThunk} from "@reduxjs/toolkit";
import CategoryDto from "../../../application/categories/dtos/category-dto";
import CategoryEntity from "../../../application/categories/entities/category.entity";
import {updateCategory} from "../categories.slice";

const updateCategoryByIdThunk = createAsyncThunk<
  CategoryEntity,
  {id: number; data: CategoryDto},
  ThunkApiConfig
>("@@categories/updateCategoryById", async ({id, data: values}, {dispatch, extra: {api}}) => {
  const {
    data: {data},
  } = await api.categories.updateCategoryById(id, values);
  dispatch(updateCategory({id: data.id, changes: data}));
  return data;
});

export default updateCategoryByIdThunk;
