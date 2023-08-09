import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { device } from "../../utils/sizes";
import IconNavigation from "../../ui/IconNavigation";
import { FaDiscord, FaTwitter } from "react-icons/fa";
import { IconBox } from "../../ui/IconBox";

const Nav = styled.nav`
  @media ${device.tablet} {
    position: fixed;
    background: var(--background-linear-home);
    top: 0;
    left: ${(props) => (props.isopen === "true" ? "0" : "-120%")};
    height: 100vh;
    width: 100vw;
    z-index: 50;
    opacity: ${(props) => (props.isopen === "true" ? "100" : "0")};
    pointer-events: ${(props) => (props.isopen === "true" ? "all" : "none")};
    visibility: ${(props) => (props.isopen === "true" ? "visible" : "hidden")};
    transition: all 0.8s ease-in-out;
  }
`;

const NavList = styled.ul`
  display: flex;
  gap: 3.2rem;
  list-style: none;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const StyledLink = styled(Link)`
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  text-decoration: none;
  color: var(--color-white);

  &:hover,
  &:active {
    background-image: var(--text-linear);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transition: all 0.3s;
  }

  @media ${device.tablet} {
    font-size: 4rem;
  }
`;

const StyledScrollLink = styled(ScrollLink)`
  font-size: 2.2rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  cursor: pointer;

  &:hover,
  &:active {
    background-image: var(--text-linear);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transition: all 0.3s;
  }

  @media ${device.tablet} {
    font-size: 4rem;
  }
`;

function Navigation({ page, isOpen, handleToggleMenu }) {
  return (
    <Nav isopen={isOpen.toString()}>
      <NavList isopen={isOpen.toString()}>
        <li>
          {page === "home" ? (
            <StyledScrollLink
              to="home"
              smooth={true}
              spy={true}
              duration={500}
              offset={-100}
              onClick={handleToggleMenu}
            >
              Home
            </StyledScrollLink>
          ) : (
            <StyledLink to="/">Home</StyledLink>
          )}
        </li>
        <li>
          {page === "home" ? (
            <StyledScrollLink
              to="market"
              smooth={true}
              spy={true}
              duration={500}
              offset={-200}
              onClick={handleToggleMenu}
            >
              Market
            </StyledScrollLink>
          ) : (
            <StyledLink to="/">Market</StyledLink>
          )}
        </li>
        <li>
          {page === "home" ? (
            <StyledScrollLink
              to="choose"
              smooth={true}
              spy={true}
              duration={500}
              offset={-100}
              onClick={handleToggleMenu}
            >
              Choose Us
            </StyledScrollLink>
          ) : (
            <StyledLink to="/">Choose Us</StyledLink>
          )}
        </li>
        <li>
          {page === "home" ? (
            <StyledScrollLink
              to="join"
              smooth={true}
              spy={true}
              duration={500}
              offset={-100}
              onClick={handleToggleMenu}
            >
              Join
            </StyledScrollLink>
          ) : (
            <StyledLink to="/">Join</StyledLink>
          )}
        </li>
        <IconBox>
          <IconNavigation size="4rem" gap="1.2rem" isDisplay="true">
            <li>
              <Link to="https://twitter.com/">
                <FaTwitter />
              </Link>
            </li>
            <li>
              <Link to="https://discord.com/">
                <FaDiscord />
              </Link>
            </li>
          </IconNavigation>
        </IconBox>
      </NavList>
    </Nav>
  );
}

export default Navigation;
