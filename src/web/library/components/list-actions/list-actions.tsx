import styled from "styled-components";

export const ActionItem = styled.li({});

const ListActions = styled.ul({
  display: "flex",

  listStyle: "none",

  [`${ActionItem}:not(:last-child)`]: {
    marginRight: 5,
  },
});

export default ListActions;
