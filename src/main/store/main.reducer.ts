import {combineReducers} from "@reduxjs/toolkit";
import {categoriesReducer} from "../../categories/store/categories.slice";
import {loadingReducer} from "../../library/store/loading/loading.slice";

const mainReducer = combineReducers({loading: loadingReducer, categories: categoriesReducer});

export default mainReducer;
