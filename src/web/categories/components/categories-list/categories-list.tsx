import {List} from "antd";
import React from "react";
import {Link} from "react-router-dom";
import CategoryEntity from "../../../../application/categories/entities/category.entity";
import ListActions, {ActionItem} from "../../../library/components/list-actions/list-actions";

interface CategoriesListProps {
  data: CategoryEntity[];
  onDelete: (id: number) => void;
  loading?: boolean;
}

export default function CategoriesList({data, loading, onDelete}: CategoriesListProps) {
  return (
    <List
      bordered
      size="large"
      loading={loading}
      dataSource={data}
      renderItem={item => (
        <List.Item
          style={{display: "flex", justifyContent: "space-between"}}
          aria-label={`category-item-${item.id}`}
        >
          <header>{item.name}</header>
          <ListActions>
            <ActionItem>
              <Link aria-label="more-link" to={`/categories/${item.id}`}>
                more
              </Link>
            </ActionItem>
            <ActionItem>
              <Link aria-label="update-link" to={`/categories/${item.id}/update`}>
                update
              </Link>
            </ActionItem>
            <ActionItem>
              <span role="button" aria-label="delete" onClick={() => onDelete(item.id)}>
                delete
              </span>
            </ActionItem>
          </ListActions>
        </List.Item>
      )}
    />
  );
}
