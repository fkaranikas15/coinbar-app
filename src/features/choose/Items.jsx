import { styled } from "styled-components";
import {
  FaDesktop,
  FaHandshake,
  FaLandmark,
  FaLayerGroup,
  FaLock,
  FaWallet,
} from "react-icons/fa";
import { device } from "../../utils/sizes";

const ItemsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;

  gap: 3.2rem;

  @media ${device.laptopS} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${device.tabletL} {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }
`;

const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.4rem;
  background-color: var(--color-background);
  border: var(--border-small);
  border-radius: 2.4rem;

  @media ${device.tabletL} {
    &:nth-child(3) {
      width: 50%;
      grid-column: span 2;
      grid-row: ${(props) => (props.row === "2" ? "2" : "1/2")};
      align-self: center;
      justify-self: center;
    }
  }

  @media ${device.tablet} {
    &:nth-child(3) {
      width: 100%;
      grid-column: span 1;
      grid-row: 2;
    }
  }

  & p {
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 1.7;
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;
  border-radius: 2rem;
  background: var(--text-linear);
  color: var(--color-white);

  & svg {
    width: 3.2rem;
    height: 3.2rem;
  }
`;

const DetailsBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 4.8rem;
  font-family: "Noto Sans Georgian", sans-serif;

  & h3 {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1.3;
  }
`;

function Items({ children }) {
  return (
    <>
      <ItemsContainer>
        <ItemBox>
          <DetailsBox>
            <IconBox>
              <FaWallet />
            </IconBox>
            <h3>Enhanced Portfolio </h3>
          </DetailsBox>
          <p>
            Access a wide range of cryptocurrencies and tokens, enabling
            diversified investment opportunities.
          </p>
        </ItemBox>
        <ItemBox>
          <DetailsBox>
            <IconBox>
              <FaHandshake />
            </IconBox>
            <h3>Simplified Transactions </h3>
          </DetailsBox>
          <p>
            Effortlessly monitor and manage all your crypto transactions in one
            convenient place.
          </p>
        </ItemBox>
        <ItemBox row="2">
          <DetailsBox>
            <IconBox>
              <FaLock />
            </IconBox>
            <h3>Advanced Security</h3>
          </DetailsBox>
          <p>
            Rely on robust security protocols to protect your digital assets and
            ensure peace of mind.
          </p>
        </ItemBox>
      </ItemsContainer>

      {children}

      <ItemsContainer>
        <ItemBox>
          <DetailsBox>
            <IconBox>
              <FaLandmark />
            </IconBox>
            <h3>Real-Time Market</h3>
          </DetailsBox>
          <p>
            Stay informed with up-to-the-minute market data and trends to make
            informed investment decisions.
          </p>
        </ItemBox>
        <ItemBox>
          <DetailsBox>
            <IconBox>
              <FaDesktop />
            </IconBox>
            <h3>Intuitive Platform</h3>
          </DetailsBox>
          <p>
            Experience an intuitive platform designed to cater beginners and
            experienced crypto enthusiasts.
          </p>
        </ItemBox>
        <ItemBox>
          <DetailsBox>
            <IconBox>
              <FaLayerGroup />
            </IconBox>
            <h3>Seamless Integration</h3>
          </DetailsBox>
          <p>
            Enjoy seamless integration with various wallets and exchanges for
            seamless asset management.
          </p>
        </ItemBox>
      </ItemsContainer>
    </>
  );
}

export default Items;
