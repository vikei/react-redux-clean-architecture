import axios from "axios";
import CategoryEntity from "../domain/entities/category.entity";

export default function fetchCategoryById(id: number) {
  return axios.get<{data: CategoryEntity | undefined}>(`http://blog.com/categories/${id}`);
}
