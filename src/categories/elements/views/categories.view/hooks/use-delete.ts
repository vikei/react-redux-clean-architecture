import useMessages from "../../../../../library/elements/hooks/use-messages";
import useDeleteCategory from "../../../../store/hooks/use-delete-category";

export default function useDelete() {
  const messages = useMessages();

  const {mutation} = useDeleteCategory({
    onSuccess: () => {
      messages?.info({content: "Category deleted!"});
    },
  });

  return {mutation};
}
