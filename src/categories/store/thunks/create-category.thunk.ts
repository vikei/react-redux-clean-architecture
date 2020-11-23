import {createAsyncThunk} from "@reduxjs/toolkit";
import createCategory from "../../api/create-category";
import CategoryDto from "../../domain/dtos/category-dto";
import CategoryEntity from "../../domain/entities/category.entity";
import {addCategories} from "../categories.slice";

const createCategoryThunk = createAsyncThunk<CategoryEntity, CategoryDto, ThunkApiConfig>(
  "@@categories/createCategory",
  async (dto, {dispatch}) => {
    const {
      data: {data},
    } = await createCategory(dto);
    dispatch(addCategories([data]));
    return data;
  },
);

export default createCategoryThunk;
