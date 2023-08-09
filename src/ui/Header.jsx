import { styled } from "styled-components";
import { FaDiscord, FaStream, FaTimes, FaTwitter } from "react-icons/fa";
import Navigation from "../features/header/Navigation";
import { Link } from "react-router-dom";
import IconNavigation from "./IconNavigation";
import { useEffect, useState } from "react";
import { device } from "../utils/sizes";
import { IconBox } from "./IconBox";

const ColoredContainer = styled.div`
  position: ${(props) => props.sticky};
  top: 0;
  z-index: 100;
  width: 100%;

  background-color: ${(props) =>
    props.sticky === "fixed" ? "var(--color-dark-blue)" : "transparent"};

  box-shadow: ${(props) =>
    props.sticky === "fixed" ? "var(--shadow-header)" : "none"};
`;

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.2rem 2rem;
  max-width: 130rem;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  &:visited,
  &:link {
    font-size: 3.6rem;
    font-weight: 700;
    letter-spacing: -1px;
    color: var(--color-white);
    text-decoration: none;
    font-family: inherit;
    text-transform: uppercase;

    @media ${device.mobile} {
      font-size: 4rem;
    }
  }
`;

const IconButton = styled.button`
  position: ${(props) => (props.isopen === "true" ? "fixed" : "")};
  right: 2rem;
  display: none;
  align-items: center;
  justify-content: center;
  color: var(--color-white);
  background: transparent;
  border: none;
  z-index: 100;
  cursor: pointer;

  & svg {
    width: 3.2rem;
    height: 3.2rem;
    fill: var(--color-white);

    &:hover,
    &:active {
      fill: url(#gradient2);
    }
  }

  @media ${device.tablet} {
    display: flex;
  }
`;

function Header({ page }) {
  const [sticky, setSticky] = useState("relative");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(function () {
    window.addEventListener("scroll", stickHeader);

    return () => window.removeEventListener("scroll", stickHeader);
  }, []);

  const stickHeader = () => {
    let windowHeight = window.scrollY;
    windowHeight > 150 ? setSticky("fixed") : setSticky("relative");
  };

  function handleToggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <ColoredContainer sticky={sticky}>
      <StyledHeader>
        <Logo to="/">COINBAR</Logo>
        <Navigation
          page={page}
          isOpen={isOpen}
          handleToggleMenu={handleToggleMenu}
        />

        <IconBox>
          <svg width="0em" height="0em">
            <linearGradient id="gradient2" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#2600fc" offset="0%" />
              <stop stopColor="#ff00ea" offset="100%" />
            </linearGradient>
          </svg>
        </IconBox>

        <IconNavigation size="2.4rem" gap="1.2rem">
          <svg width="0em" height="0em">
            <linearGradient id="gradient1" x1="100%" y1="100%" x2="0%" y2="0%">
              <stop stopColor="#2600fc" offset="0%" />
              <stop stopColor="#ff00ea" offset="100%" />
            </linearGradient>
          </svg>
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
        <IconButton onClick={handleToggleMenu} isopen={isOpen.toString()}>
          {isOpen ? <FaTimes /> : <FaStream />}
        </IconButton>
      </StyledHeader>
    </ColoredContainer>
  );
}

export default Header;
