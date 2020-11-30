import React, {useCallback} from "react";
import isPending from "../../../../store/loading/lib/is-pending";
import {ContentBody, ContentHeader} from "../../../library/components/content";
import useCategories from "../../hooks/use-categories";
import Categories from "./categories";
import Header from "./header";
import useDelete from "./hooks/use-delete";

export default function CategoriesView() {
  const {data, loading, fetch} = useCategories({skip: true});
  const handleSearch = useCallback(
    async (name?: string) => {
      await fetch({query: name});
    },
    [fetch],
  );

  const {mutation} = useDelete();

  return (
    <section>
      <ContentHeader>
        <Header onSearch={handleSearch} />
      </ContentHeader>
      <ContentBody>
        <Categories loading={isPending(loading)} data={data} fetch={fetch} onDelete={mutation} />
      </ContentBody>
    </section>
  );
}
