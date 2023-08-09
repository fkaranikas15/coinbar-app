import { styled } from "styled-components";
import { device } from "../utils/sizes";

export const H2 = styled.h2`
  font-size: ${(props) => props.size};
  font-weight: 700;
  text-transform: uppercase;
  text-align: center;
  margin-top: 9.6rem;

  & span {
    display: ${(props) => (props.block === "true" ? "block" : "initial")};

    color: transparent;
    background-image: var(--text-linear);
    background-clip: text;
    -webkit-background-clip: text;
    margin-top: ${(props) => (props.block === "true" ? "-4rem" : "0")};
  }

  @media ${device.laptopS} {
    font-size: 7.8rem;
  }

  @media ${device.mobileS} {
    font-size: 6.4rem;
    line-height: 1.7;
  }
`;
