import { styled } from "styled-components";

export const Change24h = styled.span`
  color: ${(props) =>
    props.color === "negative" ? "var(--color-red)" : "var(--color-green)"};
`;
