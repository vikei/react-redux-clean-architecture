import {createAsyncThunk} from "@reduxjs/toolkit";
import CategoryDto from "../../../application/api/categories/dtos/category-dto";
import CategoryEntity from "../../../application/categories/entities/category-entity";
import {addCategories} from "../categories-slice";

const createCategoryThunk = createAsyncThunk<CategoryEntity, CategoryDto, ThunkApiConfig>(
  "@@categories/createCategory",
  async (dto, {dispatch, extra: {api}}) => {
    const {
      data: {data},
    } = await api.categories.createCategory(dto);

    dispatch(addCategories([data]));

    return data;
  },
);

export default createCategoryThunk;
