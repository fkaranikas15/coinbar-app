import { useCoin } from "../../hooks/useCoin";
import { styled } from "styled-components";
import { Change24h } from "../../ui/Change24h";
import Spinner from "../../ui/Spinner";
import DOMPurify from "dompurify";
import { device } from "../../utils/sizes";

const StyledCoinDescription = styled.div`
  width: 100%;

  margin-top: 9.6rem;
  margin-top: 20rem;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 9.6rem;

  @media ${device.laptopS} {
    gap: 6.4rem;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    gap: 4.8rem;
  }
`;

const DetailsBox = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  border-right: 1px solid var(--color-white);
  padding: 1.2rem 4.8rem;

  @media ${device.mobile} {
    border-bottom: 1px solid var(--color-white);
    border-right: none;
    padding-bottom: 4.8rem;
  }

  & img {
    width: 20rem;
    margin-bottom: 2rem;
  }

  & h4 {
    font-size: 3.2rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  & span {
    font-size: 2rem;
    font-weight: 500;
  }
`;

const DescriptionBox = styled.div`
  font-size: 2rem;
`;

const DescriptionHeading = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 2.4rem;
  font-weight: 500;
  margin-bottom: 2.4rem;

  @media ${device.tabletL} {
    flex-direction: column;
    gap: 1rem;
  }
`;

const DescriptionParagraph = styled.p`
  height: 25rem;
  line-height: 1.7;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ff00ea;
    border-radius: 10px;
  }

  & a {
    color: var(--color-green);
  }
`;

function CoinDescription({ id }) {
  const { coin, isLoading, error } = useCoin(id);

  const { name, market_cap_rank: rank, symbol } = coin;
  const image = coin.image ? coin.image.large : "";
  const price = coin.market_data ? coin.market_data.current_price.usd : 0;
  const change_24h = coin.market_data
    ? coin.market_data.market_cap_change_percentage_24h
    : 0;
  const description = coin.description ? coin.description.en : "";

  if (isLoading || error) return <Spinner />;

  return (
    <StyledCoinDescription>
      <DetailsBox>
        <img src={image} alt={`Logo of ${name}`} />
        <h4>{name}</h4>
        <span>Rank: #{rank}</span>
      </DetailsBox>
      <DescriptionBox>
        <DescriptionHeading>
          <span>
            24h Change:{" "}
            <Change24h color={change_24h < 0 ? "negative" : "positive"}>
              {change_24h.toFixed(2)}%
            </Change24h>
          </span>
          <span>Price: $ {price.toFixed(2)} </span>
          <span>Symbol: {symbol} </span>
        </DescriptionHeading>
        <DescriptionParagraph
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              description
                ? description
                : "Sorry, but this crypto does not have a description."
            ),
          }}
        ></DescriptionParagraph>
      </DescriptionBox>
    </StyledCoinDescription>
  );
}

export default CoinDescription;
