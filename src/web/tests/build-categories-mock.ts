import {build, fake, sequence} from "@jackfranklin/test-data-bot";
import CategoryEntity from "../../application/categories/entities/category.entity";

export function buildCategoryMock() {
  return build<CategoryEntity>({
    fields: {
      id: sequence(),
      name: fake(f => f.name.title()),
    },
  });
}

export default function buildCategoriesMock(count = 5) {
  const buildData = buildCategoryMock();

  return Array(count)
    .fill("")
    .map(() => buildData());
}
