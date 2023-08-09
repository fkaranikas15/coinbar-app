import { styled } from "styled-components";
import { Change24h } from "../../ui/Change24h";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: var(--color-white);
  }
`;

const StyledRowItem = styled.li`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  padding: 2.4rem 1.6rem;
  background-color: transparent;
  border-bottom: 1px solid var(--color-white);
  font-size: 2.2rem;
  font-weight: 600;
  transition: all 0.3s;

  & span:not(:first-child) {
    text-align: right;
  }

  & span:first-child {
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  &:hover,
  &:active {
    background-color: var(--color-hover);
  }
`;

const StyledImg = styled.img`
  width: 6rem;
`;

function RowItem({ coin }) {
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const {
    id,
    name,
    current_price,
    price_change_percentage_24h: change_24h,
    image,
    market_cap,
  } = coin;

  return (
    <StyledLink to={`/coin/${id}`}>
      <StyledRowItem>
        <span>
          <StyledImg src={image} alt={`Logo of ${name}`} />
          {name}
        </span>
        <span>$ {current_price.toFixed(2)}</span>
        <Change24h color={change_24h < 0 ? "negative" : "positive"}>
          {change_24h.toFixed(2)}%
        </Change24h>
        <span>$ {numberWithCommas(market_cap)}</span>
      </StyledRowItem>
    </StyledLink>
  );
}

export default RowItem;
