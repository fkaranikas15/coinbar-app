import { styled } from "styled-components";

import { H2 } from "../../ui/H2";
import Items from "./Items";
import { device } from "../../utils/sizes";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  align-items: center;
  gap: 3.2rem;
  margin-top: 7.8rem;

  @media ${device.laptopS} {
    grid-template-columns: 1fr;
  }
`;

const ItemImage = styled.img`
  width: 90%;

  @media ${device.laptopS} {
    width: 30%;
  }

  @media ${device.tablet} {
    width: 50%;
  }
`;

function Choose() {
  return (
    <div id="choose">
      <H2 size="6.4rem">
        Why <span>choose us</span>
      </H2>
      <Grid>
        <Items>
          <ItemImage src="/hand.png" alt="Hand with bitcoin" />
        </Items>
      </Grid>
    </div>
  );
}

export default Choose;
