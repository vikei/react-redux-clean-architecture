import {Button} from "antd";
import React, {useCallback} from "react";
import {useHistory} from "react-router-dom";
import useMainDispatch from "../../../../main/store/use-main-dispatch";
import CategoryDto from "../../../domain/dtos/category-dto";
import createCategoryThunk from "../../../store/thunks/create-category.thunk";
import CategoryForm from "../../components/category-form";

export default function CreateCategoryView() {
  const history = useHistory();
  const dispatch = useMainDispatch();
  const handleSubmit = useCallback(
    async (values: CategoryDto) => {
      await dispatch(createCategoryThunk(values));
      history.push("/categories");
    },
    [dispatch, history],
  );

  const handleBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <section>
      <h1>Create Category</h1>
      <CategoryForm onSubmit={handleSubmit} />
      <Button type="link" onClick={handleBack}>
        Back
      </Button>
    </section>
  );
}
