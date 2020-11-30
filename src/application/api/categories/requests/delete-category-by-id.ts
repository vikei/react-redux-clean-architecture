import CategoryEntity from "../../../categories/entities/category-entity";
import request from "../../../library/request";
import {CATEGORIES_API_URL} from "../constants";

export default function deleteCategoryById(id: number) {
  return request<{data: CategoryEntity | undefined}>({
    url: `${CATEGORIES_API_URL}/${id}`,
    method: "DELETE",
  });
}
