import {Typography} from "antd";
import React from "react";
import {useParams} from "react-router-dom";
import BackButton from "../../../library/components/back-button";
import Content from "../../../library/components/content";
import Header from "../../../library/components/header";
import CategoryForm from "../../components/category-form";
import useCategory from "../../hooks/use-category";
import useSubmit from "./hooks/use-submit";

export default function UpdateCategoryView() {
  const id = parseInt(useParams<{id: string}>().id);
  const {data} = useCategory({id});

  const submit = useSubmit(id);

  return (
    <section>
      <Header>
        <Typography.Title level={1}>Category From: Update #{id}</Typography.Title>
      </Header>
      <Content>
        {data && <CategoryForm initialValues={data} onSubmit={submit} />}
        <BackButton />
      </Content>
    </section>
  );
}
