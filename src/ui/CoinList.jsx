import { keyframes, styled } from "styled-components";
import { useCoins } from "../hooks/useCoins";
import CoinListItem from "./CoinListItem";
import Spinner from "./Spinner";

const Scrolling = keyframes`
from{
  transform: translateX(0);
}
to{
  transform: translateX(-100%);
}
`;

const Slider = styled.div`
  margin: 9.6rem 0;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;

  &:hover > * {
    animation-play-state: paused;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
    width: 10rem;
    height: 100%;
    content: "";
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to left, transparent, var(--color-dark-blue));
  }
  &::after {
    right: 0;
    background: linear-gradient(to right, transparent, var(--color-dark-blue));
  }
`;

const StyledCoinList = styled.div`
  animation: ${Scrolling} 60s infinite linear;
  display: inline-flex;
  /* align-items: center; */
  /* justify-content: center; */
  gap: 2rem;

  margin-top: 6.4rem;
`;

function CoinList() {
  const { coins, isLoading, error } = useCoins();
  const firstCoins = coins.filter((_, i) => i < 15);

  if (isLoading || error) return <Spinner />;

  return (
    <Slider>
      <StyledCoinList>
        {firstCoins.map((coin) => (
          <CoinListItem coin={coin} key={coin.id} />
        ))}
      </StyledCoinList>
      <StyledCoinList>
        {firstCoins.map((coin) => (
          <CoinListItem coin={coin} key={coin.id} />
        ))}
      </StyledCoinList>
    </Slider>
  );
}

export default CoinList;
