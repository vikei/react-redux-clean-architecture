import {useMount} from "ahooks";
import {Button, Typography} from "antd";
import React, {useCallback} from "react";
import {useHistory, useParams} from "react-router-dom";
import Content from "../../../../library/elements/components/content";
import Header from "../../../../library/elements/components/header";
import useMainDispatch from "../../../../main/store/use-main-dispatch";
import useMainSelector from "../../../../main/store/use-main-selector";
import CategoryDto from "../../../domain/dtos/category-dto";
import getCategoryByIdSelector from "../../../store/selectors/get-category-by-id.selector";
import getCategoryByIdThunk from "../../../store/thunks/get-category-by-id.thunk";
import updateCategoryByIdThunk from "../../../store/thunks/update-category-by-id.thunk";
import CategoryForm from "../../components/category-form";

export default function UpdateCategoryView() {
  const id = parseInt(useParams<{id: string}>().id);
  const dispatch = useMainDispatch();
  useMount(() => {
    dispatch(getCategoryByIdThunk(id));
  });

  const data = useMainSelector(getCategoryByIdSelector(id));

  const history = useHistory();
  const handleSubmit = useCallback(
    async (values: CategoryDto) => {
      await dispatch(updateCategoryByIdThunk({id, data: values}));
      history.push("/categories");
    },
    [dispatch, history, id],
  );

  const handleBack = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <section>
      <Header>
        <Typography.Title level={1}>Category From: Update #{id}</Typography.Title>
      </Header>
      <Content>
        {data && <CategoryForm initialValues={data} onSubmit={handleSubmit} />}
        <Button type="link" onClick={handleBack}>
          Back
        </Button>
      </Content>
    </section>
  );
}
