import { styled } from "styled-components";
import TextBox from "../../ui/TextBox";
import CoinList from "../../ui/CoinList";
import { device } from "../../utils/sizes";

const StyledHeading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9.6rem;
`;

const StyledH1 = styled.h1`
  font-size: 9.6rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;

  @media ${device.laptopS} {
    font-size: 7.8rem;
    /* line-height: 1.2; */
  }

  @media ${device.mobileS} {
    font-size: 6.4rem;
  }
`;

const StyledSpan = styled.span`
  font-size: 9.6rem;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  color: transparent;
  background-image: var(--text-linear);
  background-clip: text;
  -webkit-background-clip: text;
  margin-top: -4rem;

  @media ${device.laptopS} {
    font-size: 7.8rem;
    margin-top: -2rem;
  }

  @media ${device.mobileS} {
    font-size: 6.4rem;
    margin-top: 0;
  }
`;

function Heading() {
  return (
    <>
      <StyledHeading>
        <TextBox>
          <StyledH1>Trade and learn</StyledH1>
        </TextBox>
        <StyledSpan>Crypto Currencies</StyledSpan>
      </StyledHeading>
      <CoinList />
    </>
  );
}

export default Heading;
