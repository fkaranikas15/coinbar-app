import CoinDescription from "../features/description/CoinDescription";
import { Container } from "../ui/Container";
import { useParams } from "react-router-dom";
import CoinList from "../ui/CoinList";
import Header from "../ui/Header";

function Coin() {
  const { id } = useParams();

  return (
    <>
      <Header page="coin" />
      <Container>
        <CoinDescription id={id} />
      </Container>
      <CoinList />
    </>
  );
}

export default Coin;
