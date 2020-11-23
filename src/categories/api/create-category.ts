import axios from "axios";
import CategoryDto from "../domain/dtos/category-dto";
import CategoryEntity from "../domain/entities/category.entity";

export default function createCategory(data: CategoryDto) {
  return axios.post<{data: CategoryEntity}>("http://blog.com/categories", data);
}
