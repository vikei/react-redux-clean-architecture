import axios from "axios";
import CategoryEntity from "../domain/entities/category.entity";

export default function deleteCategoryById(id: number) {
  return axios.delete<{data: CategoryEntity | undefined}>(`http://blog.com/categories/${id}`);
}
