import React, {useEffect} from "react";
import CategoryEntity from "../../../../application/categories/entities/category.entity";
import {ContentBody} from "../../../library/components/content";
import CategoriesList from "../../components/categories-list";

interface CategoriesProps {
  loading: boolean;
  data: CategoryEntity[];
  onDelete: (id: number) => Promise<void>;
  fetch: () => Promise<void>;
}

export default function Categories({data, loading, fetch, onDelete}: CategoriesProps) {
  useEffect(() => {
    if (data.length) {
      return;
    }

    fetch();
  }, [data.length, fetch]);

  return (
    <ContentBody>
      <CategoriesList data={data} onDelete={onDelete} loading={loading} />
    </ContentBody>
  );
}
