import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { Change24h } from "./Change24h";

const StyledLink = styled(Link)`
  &:link,
  &:visited {
    text-decoration: none;
    color: var(--color-white);
  }
`;

const StyledCoinListItem = styled.li`
  width: 25rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 700;
`;

const StyledListImg = styled.img`
  width: 40%;
  margin-bottom: 2.4rem;
`;

function CoinListItem({ coin }) {
  const {
    id,
    name,
    current_price,
    price_change_percentage_24h: change_24h,
    image,
  } = coin;

  return (
    <StyledLink to={`/coin/${id}`}>
      <StyledCoinListItem>
        <StyledListImg src={image} alt={`${name} symbol`} />
        <span>
          {name}{" "}
          <Change24h color={change_24h < 0 ? "negative" : "positive"}>
            {change_24h.toFixed(2)}%
          </Change24h>
        </span>
        <span>$ {current_price.toFixed(2)}</span>
      </StyledCoinListItem>
    </StyledLink>
  );
}

export default CoinListItem;
