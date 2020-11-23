import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import CategoryEntity from "../domain/entities/category.entity";

interface CategoriesState {
  byId: {[id: number]: CategoryEntity};
  allIds: number[];
  displayIds: number[];
}

const initialState: CategoriesState = {byId: {}, allIds: [], displayIds: []};

// TODO: move to library helpers
// TODO: add loading state
const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (_, action: PayloadAction<CategoryEntity[]>) => ({
      byId: action.payload.reduce((all, item) => ({...all, [item.id]: item}), {}),
      allIds: action.payload.map(({id}) => id), // TODO: remove duplication
      displayIds: action.payload.map(({id}) => id),
    }),
    addCategories: ({byId, allIds}, action: PayloadAction<CategoryEntity[]>) => ({
      byId: {...byId, ...action.payload.reduce((all, item) => ({...all, [item.id]: item}), {})},
      allIds: [...allIds, ...action.payload.map(({id}) => id)], // TODO: remove duplication
      displayIds: action.payload.map(({id}) => id),
    }),
    updateCategory: ({byId, allIds, ...rest}, action: PayloadAction<CategoryEntity>) => ({
      ...rest,
      byId: {...byId, [action.payload.id]: action.payload},
      allIds: [...allIds, action.payload.id],
    }),
    deleteCategory: ({byId, allIds, displayIds}, action: PayloadAction<CategoryEntity>) => {
      const newById = {...byId};
      delete newById[action.payload.id];

      return {
        byId: newById,
        allIds: allIds.filter(id => id !== action.payload.id),
        displayIds: displayIds.filter(id => id !== action.payload.id),
      };
    },
  },
});

export const {reducer: categoriesReducer} = categoriesSlice;

export const {
  actions: {setCategories, addCategories, updateCategory, deleteCategory},
} = categoriesSlice;
