import axios from "axios";
import CategoryEntity from "../../application/categories/entities/category.entity";

export default function fetchCategories(query?: string) {
  return axios.get<{data: CategoryEntity[]}>(
    `http://blog.com/categories${query ? `?query=${query}` : ""}`,
  );
}