import { styled } from "styled-components";

const StyledRowHeading = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  background: var(--text-linear);
  padding: 1.6rem 1.4rem;
  border-top-right-radius: 1.2rem;
  border-top-left-radius: 1.2rem;
  font-size: 2.4rem;
  font-weight: 400;

  & span:not(:first-child) {
    text-align: right;
  }
`;

function RowHeading() {
  return (
    <StyledRowHeading>
      <span>Coin</span>
      <span>Price</span>
      <span>24h Change</span>
      <span>Market Cap</span>
    </StyledRowHeading>
  );
}

export default RowHeading;
