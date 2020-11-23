import {useMount} from "ahooks";
import React from "react";
import {useParams} from "react-router-dom";
import useMainDispatch from "../../../../main/store/use-main-dispatch";
import useMainSelector from "../../../../main/store/use-main-selector";
import getCategoryByIdSelector from "../../../store/selectors/get-category-by-id.selector";
import getCategoryByIdThunk from "../../../store/thunks/get-category-by-id.thunk";

export default function CategoryView() {
  const id = parseInt(useParams<{id: string}>().id);
  const dispatch = useMainDispatch();
  useMount(() => {
    dispatch(getCategoryByIdThunk(id));
  });

  const data = useMainSelector(getCategoryByIdSelector(id));

  return (
    <section>
      <h1>Category {data?.name ?? ""}</h1>
    </section>
  );
}
