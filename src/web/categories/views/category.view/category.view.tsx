import {Typography} from "antd";
import React from "react";
import {useParams} from "react-router-dom";
import {ContentHeader} from "../../../library/components/content";
import useCategory from "../../hooks/use-category";

export default function CategoryView() {
  const id = parseInt(useParams<{id: string}>().id);
  const {data} = useCategory({id});

  return (
    <section>
      <ContentHeader>
        <Typography.Title level={1}>Category {data?.name ?? ""}</Typography.Title>
      </ContentHeader>
    </section>
  );
}
