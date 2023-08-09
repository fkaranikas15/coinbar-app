import Heading from "../features/header/Heading";
import Join from "../features/join/Join";
import Footer from "../features/footer/Footer";
import Choose from "../features/choose/Choose";
import MarkteTable from "../features/market/MarketTable";
import { Container } from "../ui/Container";
import { styled } from "styled-components";
import Header from "../ui/Header";

const StyledHomePage = styled.div`
  background: var(--background-linear-home);
`;

function Home() {
  return (
    <StyledHomePage>
      <Header page="home" />
      <Container id="home">
        <Heading />
        <MarkteTable />
        <Choose />
        <Join />
      </Container>
      <Footer />
    </StyledHomePage>
  );
}

export default Home;
