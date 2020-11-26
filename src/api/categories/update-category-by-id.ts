import axios from "axios";
import CategoryDto from "../../application/categories/dtos/category-dto";
import CategoryEntity from "../../application/categories/entities/category.entity";

export default function updateCategoryById(id: number, data: CategoryDto) {
  return axios.put<{data: CategoryEntity}>(`http://blog.com/categories/${id}`, data);
}
