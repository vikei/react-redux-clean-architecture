import {useMount} from "ahooks";
import {Button, Input, Typography} from "antd";
import React, {useCallback} from "react";
import {Link} from "react-router-dom";
import Content from "../../../../library/elements/components/content";
import Header from "../../../../library/elements/components/header";
import useMainDispatch from "../../../../main/store/use-main-dispatch";
import useMainSelector from "../../../../main/store/use-main-selector";
import getAllIdsCategoriesSelector from "../../../store/selectors/get-all-ids-categories.selector";
import getDisplayCategoriesSelector from "../../../store/selectors/get-display-categories.selector";
import deleteCategoryByIdThunk from "../../../store/thunks/delete-category-by-id.thunk";
import getCategoriesThunk from "../../../store/thunks/get-categories.thunk";
import CategoriesList from "../../components/categories-list";

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
      <Header>
        <div style={{marginBottom: 30}}>
          <Input.Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={handleSearch}
          />
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <Typography.Title level={1}>Categories</Typography.Title>
          <Button type="link">
            <Link to="/categories/create">Create Category</Link>
          </Button>
        </div>
      </Header>
      <Content>
        <CategoriesList data={data} onDelete={handleDelete} />
      </Content>
    </section>
  );
}
