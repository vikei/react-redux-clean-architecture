import styled from "styled-components";

export const ActionItem = styled.li({});

export const ListActions = styled.ul({
  display: "flex",

  listStyle: "none",

  [`${ActionItem}:not(:last-child)`]: {
    marginRight: 5,
  },
});
