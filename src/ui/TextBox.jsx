import { keyframes, styled } from "styled-components";
import { device } from "../utils/sizes";

const bounceAnimation = keyframes`
  0%{
    transform: translateY(0);
  }
  30%{
    transform: translateY(-2rem);
  }
  
  100%{
    transform: translateY(0);
  }
`;

const StyledTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.8rem;
  margin-top: 9.6rem;
`;

const StyledImg = styled.img`
  width: 7.8rem;
  height: 7.8rem;
  animation: ${bounceAnimation} 2s ease-in-out infinite;

  @media ${device.laptopS} {
    width: 6.4rem;
    height: 6.4rem;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

function TextBox({ children }) {
  return (
    <StyledTextBox>
      <StyledImg src="/bitcoin.png" alt="bitcoin logo" />
      {children}
      <StyledImg src="/ethereum.png" alt="bitcoin logo" />
    </StyledTextBox>
  );
}

export default TextBox;
