import CategoryDto from "../../../application/categories/dtos/category-dto";
import CategoryEntity from "../../../application/categories/entities/category-entity";
import request from "../../library/request";
import {CATEGORIES_API_URL} from "../constants";

export default function updateCategoryById(id: number, data: CategoryDto) {
  return request<{data: CategoryEntity}>({
    url: `${CATEGORIES_API_URL}/${id}`,
    method: "PUT",
    data,
  });
}
