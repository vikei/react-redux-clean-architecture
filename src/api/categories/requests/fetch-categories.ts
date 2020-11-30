import CategoryEntity from "../../../application/categories/entities/category-entity";
import request from "../../library/request";
import {CATEGORIES_API_URL} from "../constants";

export default function fetchCategories(query?: string) {
  return request<{data: CategoryEntity[]}>({
    url: `${CATEGORIES_API_URL}${query ? `?query=${query}` : ""}`,
    method: "GET",
  });
}
