import {Typography} from "antd";
import React from "react";
import BackButton from "../../../library/components/back-button";
import {ContentBody, ContentHeader} from "../../../library/components/content";
import CategoryForm from "../../components/category-form";
import useSubmit from "./hooks/use-submit";

export default function CreateCategoryView() {
  const {submit} = useSubmit();

  return (
    <section>
      <ContentHeader>
        <Typography.Title level={1}>Category Form</Typography.Title>
      </ContentHeader>
      <ContentBody>
        <CategoryForm onSubmit={submit} />
        <BackButton />
      </ContentBody>
    </section>
  );
}
