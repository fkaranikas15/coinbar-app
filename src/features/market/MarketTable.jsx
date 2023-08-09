import { styled } from "styled-components";
import RowHeading from "./RowHeading";

import RowList from "./RowList";
import Pagination from "./Pagination";
import { useCoins } from "../../hooks/useCoins";
import { PAGE_SIZE } from "../../utils/constants";
import { useState } from "react";
import { device } from "../../utils/sizes";

const StyledMarketTable = styled.div`
  width: 100%;
  margin: 9.6rem 0 0 0;
  @media ${device.tabletL} {
    overflow-x: scroll;

    &::-webkit-scrollbar {
      height: 1.2rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: #ff00ea;
      border-radius: 10px;
    }
  }
`;

const StyledH3 = styled.h3`
  font-size: 4.8rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Table = styled.div`
  @media ${device.tabletL} {
    width: 100rem;
  }
`;

function MarketTable() {
  const [activePage, setActivePage] = useState(1);
  const { coins } = useCoins();
  const activeCoins = coins.filter((_, i) => i < 50);
  const pages = activeCoins.length / PAGE_SIZE;

  return (
    <>
      <StyledMarketTable id="market">
        <StyledH3>Market Update</StyledH3>
        <Table>
          <RowHeading />
          <RowList activePage={activePage} />
        </Table>
      </StyledMarketTable>
      <Pagination pages={pages} setActivePage={setActivePage} />
    </>
  );
}

export default MarketTable;
