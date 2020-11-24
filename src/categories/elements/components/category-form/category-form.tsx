import {Button, Form, Input} from "antd";
import React, {useCallback} from "react";
import CategoryDto from "../../../domain/dtos/category-dto";

interface CategoryFormProps {
  onSubmit: (values: CategoryDto) => void;
  initialValues?: CategoryDto;
}

export default function CategoryForm({onSubmit, initialValues}: CategoryFormProps) {
  const handleSubmit = useCallback(
    values => {
      onSubmit(values);
    },
    [onSubmit],
  );

  return (
    <Form initialValues={initialValues} onFinish={handleSubmit}>
      <Form.Item
        label="Name"
        name="name"
        rules={[{required: true, message: "Please input category name!"}]}
      >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
