import axios from "axios";
import CategoryEntity from "../../application/categories/entities/category.entity";

export default function fetchCategoryById(id: number) {
  return axios.get<{data: CategoryEntity | undefined}>(`http://blog.com/categories/${id}`);
}
