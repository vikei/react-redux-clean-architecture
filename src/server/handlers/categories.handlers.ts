import storage from "localforage";
import {rest} from "msw";
import CategoryEntity from "../../application/categories/entities/category.entity";

const categoriesHandlers = [
  rest.post<CategoryEntity>("http://blog.com/categories", async (req, res, ctx) => {
    const categories = (await storage.getItem<CategoryEntity[]>("categories")) ?? [];
    const category = {...req.body, id: categories.length + 1};
    await storage.setItem("categories", [...categories, category]);
    return res(ctx.json({data: category}));
  }),
  rest.put<CategoryEntity>("http://blog.com/categories/:id", async (req, res, ctx) => {
    const categories = (await storage.getItem<CategoryEntity[]>("categories")) ?? [];
    let categoryIndex = -1;
    const category =
      categories.find(({id}, index) => {
        if (id !== req.params.id) {
          categoryIndex = index;
          return true;
        }

        return false;
      }) ?? ({} as CategoryEntity);
    categories[categoryIndex] = {
      ...category,
      ...req.body,
      id: category?.id ?? categories.length + 1,
    };
    await storage.setItem("categories", categories);
    return res(ctx.json({data: categories[categoryIndex]}));
  }),
  rest.get("http://blog.com/categories", async (req, res, ctx) => {
    let data = (await storage.getItem<CategoryEntity[]>("categories")) ?? [];

    const query = req.url.searchParams.get("query");
    if (query) {
      data = data.filter(({name}) => name.includes(query));
    }

    return res(ctx.delay(3000), ctx.json({data}));
  }),
  rest.get("http://blog.com/categories/:id", async (req, res, ctx) => {
    const categories = (await storage.getItem<CategoryEntity[]>("categories")) ?? [];
    return res(ctx.json({data: categories.find(({id}) => id === parseInt(req.params.id)) ?? {}}));
  }),
  rest.delete("http://blog.com/categories/:id", async (req, res, ctx) => {
    const categories = (await storage.getItem<CategoryEntity[]>("categories")) ?? [];
    await storage.setItem(
      "categories",
      categories.filter(({id}) => id !== parseInt(req.params.id)),
    );
    const data = categories.find(({id}) => id === parseInt(req.params.id));
    return res(ctx.json({data}));
  }),
];

export default categoriesHandlers;
