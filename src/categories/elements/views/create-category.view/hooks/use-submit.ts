import {useHistory} from "react-router-dom";
import useMessages from "../../../../../library/elements/hooks/use-messages";
import useCreateCategory from "../../../../store/hooks/use-create-category";

export default function useSubmit() {
  const history = useHistory();
  const messages = useMessages();

  const {mutation} = useCreateCategory({
    onSuccess: ({id}) => {
      history.push(`/categories/${id}`);
      messages?.success({
        content: "Category successfully created!",
      });
    },
  });

  return {submit: mutation};
}
