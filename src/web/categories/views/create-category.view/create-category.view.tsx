import {Typography} from "antd";
import React from "react";
import BackButton from "../../../library/components/back-button";
import Content from "../../../library/components/content";
import Header from "../../../library/components/header";
import CategoryForm from "../../components/category-form";
import useSubmit from "./hooks/use-submit";

export default function CreateCategoryView() {
  const {submit} = useSubmit();

  return (
    <section>
      <Header>
        <Typography.Title level={1}>Category Form</Typography.Title>
      </Header>
      <Content>
        <CategoryForm onSubmit={submit} />
        <BackButton />
      </Content>
    </section>
  );
}
