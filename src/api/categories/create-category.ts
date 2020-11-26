import axios from "axios";
import CategoryDto from "../../application/categories/dtos/category-dto";
import CategoryEntity from "../../application/categories/entities/category.entity";

export default function createCategory(data: CategoryDto) {
  return axios.post<{data: CategoryEntity}>("http://blog.com/categories", data);
}
