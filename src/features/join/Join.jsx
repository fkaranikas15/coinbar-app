import { styled } from "styled-components";
import TextBox from "../../ui/TextBox";
import { Link } from "react-router-dom";
import { H2 } from "../../ui/H2";
import { device } from "../../utils/sizes";

const StyledP = styled.p`
  font-size: 2rem;
  text-align: center;
  margin-top: 2.4rem;

  & span {
    display: block;
    margin-bottom: 9.6rem;
  }
`;

const ButtonLink = styled(Link)`
  &:link,
  &:visited {
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
    padding: 2rem 4.8rem;
    border: none;
    border-radius: 100rem;
    color: var(--color-white);
    background-image: var(--button-linear);
    box-shadow: var(--shadow-button);
    transition: all 0.5s;

    @media ${device.mobile} {
      font-size: 2.4rem;
      padding: 2.4rem 4.8rem;
    }
  }

  &:hover,
  &:active {
    box-shadow: var(--shadow-button-hover);
  }
`;

function Join() {
  return (
    <div id="join">
      <TextBox>
        <H2 block="true" size="9.6rem">
          join us via <span>discord</span>
        </H2>
      </TextBox>
      <StyledP>
        <span>
          Centralize and optimize your crypto investments for easy management.
        </span>
        <ButtonLink to="https://discord.com/">Join via Discord</ButtonLink>
      </StyledP>
    </div>
  );
}

export default Join;
