import { styled } from "styled-components";
import { useCoins } from "../../hooks/useCoins";
import RowItem from "./RowItem";
import { PAGE_SIZE } from "../../utils/constants";
import Spinner from "../../ui/Spinner";

const StyledRowList = styled.ul`
  display: flex;
  flex-direction: column;
`;

function RowList({ activePage }) {
  const { coins, isLoading, error } = useCoins();

  const showedCoins = coins.filter(
    (_, i) =>
      i >= (activePage - 1) * PAGE_SIZE && i <= activePage * PAGE_SIZE - 1
  );

  if (isLoading || error) return <Spinner />;

  return (
    <StyledRowList>
      {showedCoins.map((coin) => (
        <RowItem coin={coin} key={coin.id} />
      ))}
    </StyledRowList>
  );
}

export default RowList;
