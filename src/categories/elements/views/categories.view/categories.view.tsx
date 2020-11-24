import {useMount} from "ahooks";
import {Button, Input, List} from "antd";
import React, {useCallback} from "react";
import {Link} from "react-router-dom";
import Header from "../../../../library/elements/components/header";
import useMainDispatch from "../../../../main/store/use-main-dispatch";
import useMainSelector from "../../../../main/store/use-main-selector";
import getAllIdsCategoriesSelector from "../../../store/selectors/get-all-ids-categories.selector";
import getDisplayCategoriesSelector from "../../../store/selectors/get-display-categories.selector";
import deleteCategoryByIdThunk from "../../../store/thunks/delete-category-by-id.thunk";
import getCategoriesThunk from "../../../store/thunks/get-categories.thunk";
import Content from "../../../../library/elements/components/content";

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
        <div style={{margin: "40px 0px 30px 0px"}}>
          <Input.Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={handleSearch}
          />
        </div>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <h1>Categories</h1>
          <Button type="link">
            <Link to="/categories/create">Create Category</Link>
          </Button>
        </div>
      </Header>
      <Content>
        <List
          size="large"
          bordered
          dataSource={data}
          renderItem={item => (
            <List.Item style={{display: "flex", justifyContent: "space-between"}}>
              <header>{item.name}</header>{" "}
              <ul style={{listStyle: "none", display: "flex"}}>
                <li>
                  <Link to={`/categories/${item.id}`}>more</Link>
                </li>
                <li>
                  <Link to={`/categories/${item.id}/update`}>update</Link>
                </li>
                <li>
                  <span onClick={() => handleDelete(item.id)}>delete</span>
                </li>
              </ul>
            </List.Item>
          )}
        />
      </Content>
    </section>
  );
}
