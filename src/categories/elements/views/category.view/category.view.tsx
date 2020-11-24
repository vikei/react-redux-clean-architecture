import {Typography} from "antd";
import React from "react";
import {useParams} from "react-router-dom";
import Header from "../../../../library/elements/components/header";
import useCategory from "../../../store/hooks/use-category";

export default function CategoryView() {
  const id = parseInt(useParams<{id: string}>().id);
  const {data} = useCategory({id});

  return (
    <section>
      <Header>
        <Typography.Title level={1}>Category {data?.name ?? ""}</Typography.Title>
      </Header>
    </section>
  );
}
