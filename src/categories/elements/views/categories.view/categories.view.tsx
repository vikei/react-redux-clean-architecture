import {useMount} from "ahooks";
import React, {useCallback} from "react";
import {Link} from "react-router-dom";
import useMainDispatch from "../../../../main/store/use-main-dispatch";
import useMainSelector from "../../../../main/store/use-main-selector";
import getAllIdsCategoriesSelector from "../../../store/selectors/get-all-ids-categories.selector";
import getDisplayCategoriesSelector from "../../../store/selectors/get-display-categories.selector";
import deleteCategoryByIdThunk from "../../../store/thunks/delete-category-by-id.thunk";
import getCategoriesThunk from "../../../store/thunks/get-categories.thunk";
import {Button, Input} from "antd";

export default function CategoriesView() {
  const dispatch = useMainDispatch();

  const allIds = useMainSelector(getAllIdsCategoriesSelector);
  useMount(async () => {
    if (allIds.length) {
      return;
    }
    await dispatch(getCategoriesThunk());
  });

  const data = useMainSelector(getDisplayCategoriesSelector);

  const handleSearch = useCallback(
    async (query: string) => {
      await dispatch(getCategoriesThunk({query}));
    },
    [dispatch],
  );

  const handleDelete = useCallback(
    async (id: number) => {
      await dispatch(deleteCategoryByIdThunk(id));
    },
    [dispatch],
  );

  return (
    <section>
      <h1>Categories</h1>
      <Button type="link">
        <Link to="/categories/create">Create</Link>
      </Button>
      <Input.Search placeholder="input search text" onSearch={handleSearch} />
      {data.map(item => (
        <article key={item.id}>
          <h2>{item.name}</h2>
          <div>
            <Link to={`/categories/${item.id}`}>more</Link>
          </div>
          <div>
            <Link to={`/categories/${item.id}/update`}>update</Link>
          </div>
          <div>
            <span onClick={() => handleDelete(item.id)}>delete</span>
          </div>
        </article>
      ))}
    </section>
  );
}
