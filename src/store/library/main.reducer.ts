import {combineReducers} from "@reduxjs/toolkit";
import {categoriesReducer} from "../categories/categories.slice";
import {loadingReducer} from "../loading/loading.slice";

const mainReducer = combineReducers({loading: loadingReducer, categories: categoriesReducer});

export default mainReducer;
