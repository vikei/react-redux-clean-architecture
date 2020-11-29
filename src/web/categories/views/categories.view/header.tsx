import {Button, Input, Typography} from "antd";
import React, {useCallback} from "react";
import {Link} from "react-router-dom";
import {ContentHeader} from "../../../library/components/content";

interface HeaderProps {
  onSearch: (query?: string) => Promise<void>;
}

export default function Header({onSearch}: HeaderProps) {
  const handleSearch = useCallback(
    async (value: string) => {
      await onSearch(value);
    },
    [onSearch],
  );

  return (
    <ContentHeader>
      <div style={{marginBottom: 30}}>
        <Input.Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          role="searchbox"
          onSearch={handleSearch}
        />
      </div>
      <div style={{display: "flex", justifyContent: "space-between"}}>
        <Typography.Title level={1}>Categories</Typography.Title>
        <Button type="link">
          <Link aria-label="create-category-link" to="/categories/create">
            Create Category
          </Link>
        </Button>
      </div>
    </ContentHeader>
  );
}
