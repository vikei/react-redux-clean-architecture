import {List} from "antd";
import React from "react";
import {Link} from "react-router-dom";
import {
  ActionItem,
  ListActions,
} from "../../../../library/elements/components/list-actions/list-actions";
import CategoryEntity from "../../../domain/entities/category.entity";

interface CategoriesListProps {
  data: CategoryEntity[];
  onDelete: (id: number) => void;
}

export default function CategoriesList({data, onDelete}: CategoriesListProps) {
  return (
    <List
      size="large"
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item style={{display: "flex", justifyContent: "space-between"}}>
          <header>{item.name}</header>
          <ListActions>
            <ActionItem>
              <Link to={`/categories/${item.id}`}>more</Link>
            </ActionItem>
            <ActionItem>
              <Link to={`/categories/${item.id}/update`}>update</Link>
            </ActionItem>
            <ActionItem>
              <span onClick={() => onDelete(item.id)}>delete</span>
            </ActionItem>
          </ListActions>
        </List.Item>
      )}
    />
  );
}
