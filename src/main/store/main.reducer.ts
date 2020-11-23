import {combineReducers} from "@reduxjs/toolkit";
import {categoriesReducer} from "../../categories/store/categories.slice";

const mainReducer = combineReducers({categories: categoriesReducer});

export default mainReducer;
