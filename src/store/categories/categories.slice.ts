import {createEntityAdapter, createSlice} from "@reduxjs/toolkit";
import CategoryEntity from "../../application/categories/entities/category.entity";

export const categoriesAdapter = createEntityAdapter<CategoryEntity>();

const categoriesSlice = createSlice({
  name: "categories",
  initialState: categoriesAdapter.getInitialState(),
  reducers: {
    setCategories: categoriesAdapter.setAll,
    addCategories: categoriesAdapter.addMany,
    updateCategory: categoriesAdapter.updateOne,
    deleteCategory: categoriesAdapter.removeOne,
  },
});

export const {reducer: categoriesReducer} = categoriesSlice;

export const {
  actions: {setCategories, addCategories, updateCategory, deleteCategory},
} = categoriesSlice;
