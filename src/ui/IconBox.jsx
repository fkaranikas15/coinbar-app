import { styled } from "styled-components";
import { device } from "../utils/sizes";

export const IconBox = styled.div`
  display: none;

  @media ${device.tablet} {
    display: block;
  }
`;
