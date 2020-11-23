import axios from "axios";
import CategoryDto from "../domain/dtos/category-dto";
import CategoryEntity from "../domain/entities/category.entity";

export default function updateCategoryById(id: number, data: CategoryDto) {
  return axios.put<{data: CategoryEntity}>(`http://blog.com/categories/${id}`, data);
}
