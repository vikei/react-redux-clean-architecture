import {Button, Input, Typography} from "antd";
import React from "react";
import {Link} from "react-router-dom";
import Content from "../../../../library/elements/components/content";
import Header from "../../../../library/elements/components/header";
import isPending from "../../../../library/store/loading/lib/is-pending";
import CategoriesList from "../../components/categories-list";
import useSearchCategories from "../../hooks/use-search-categories";
import useDelete from "./hooks/use-delete";

export default function CategoriesView() {
  const {data, loading, search} = useSearchCategories();

  const {mutation} = useDelete();

  return (
    <section>
      <Header>
        {/* TODO: create component */}
        <div style={{marginBottom: 30}}>
          <Input.Search
            placeholder="input search text"
            enterButton="Search"
            size="large"
            onSearch={search}
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
        <CategoriesList data={data} onDelete={mutation} loading={isPending(loading)} />
      </Content>
    </section>
  );
}
