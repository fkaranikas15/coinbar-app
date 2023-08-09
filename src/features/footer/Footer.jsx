import { Link } from "react-router-dom";
import { FaDiscord, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import IconNavigation from "../../ui/IconNavigation";
import { styled } from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const StyledFooter = styled.footer`
  background-image: url("/footerImage.png");
  background-position: 50%;
  background-size: cover;

  height: 35rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  margin-top: 9.6rem;
`;

const FooterNav = styled.ul`
  display: flex;
  gap: 3rem;
  list-style: none;
`;

const FooterNavLink = styled(ScrollLink)`
  font-size: 1.8rem;
  font-weight: 400;
  letter-spacing: 0.5px;

  &:hover,
  &:active {
    background-image: var(--text-linear);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    transition: all 0.3s;
  }

  cursor: pointer;
`;

function Footer() {
  return (
    <StyledFooter>
      <IconNavigation size="4.8rem" gap="3.2rem" isDisplay="true">
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
        <li>
          <Link to="https://www.facebook.com/">
            <FaFacebook />
          </Link>
        </li>
        <li>
          <Link to="https://www.youtube.com/">
            <FaYoutube />
          </Link>
        </li>
      </IconNavigation>

      <FooterNav>
        <li>
          <FooterNavLink
            to="home"
            smooth={true}
            spy={true}
            duration={600}
            offset={-100}
          >
            Privacy
          </FooterNavLink>
        </li>
        <li>
          <FooterNavLink
            to="home"
            smooth={true}
            spy={true}
            duration={600}
            offset={-100}
          >
            Terms of Use
          </FooterNavLink>
        </li>
        <li>
          <FooterNavLink
            to="home"
            smooth={true}
            spy={true}
            duration={600}
            offset={-100}
          >
            Contact us
          </FooterNavLink>
        </li>
      </FooterNav>
    </StyledFooter>
  );
}

export default Footer;
