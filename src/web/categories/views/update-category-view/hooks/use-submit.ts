import {useCallback} from "react";
import {useHistory} from "react-router-dom";
import CategoryDto from "../../../../../application/categories/dtos/category-dto";
import useMessages from "../../../../library/hooks/use-messages";
import useUpdateCategory from "../../../hooks/use-udpate-category";

export default function useSubmit(id: number) {
  const history = useHistory();
  const messages = useMessages();

  const {mutation} = useUpdateCategory({
    onSuccess: ({id, name}) => {
      history.push(`/categories/${id}`);
      messages?.success({
        content: `Category "${name}" successfully updated!`,
      });
    },
  });

  return useCallback(
    async (data: CategoryDto) => {
      await mutation(id, data);
    },
    [id, mutation],
  );
}
