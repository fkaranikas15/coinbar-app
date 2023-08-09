import { styled } from "styled-components";
import { device } from "../utils/sizes";

const NavLinkIcons = styled.ul`
  display: flex;
  gap: ${(props) => props.gap};
  list-style: none;

  & svg {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    fill: var(--color-white);

    &:hover,
    &:active {
      fill: url(#gradient1);

      @media ${device.tablet} {
        fill: url(#gradient2);
      }
    }
  }

  @media ${device.tablet} {
    display: ${(props) => (props.isdisplay === "true" ? "flex" : "none")};
  }
`;

function IconNavigation({ children, size, gap, isDisplay }) {
  return (
    <>
      <NavLinkIcons size={size} gap={gap} isdisplay={isDisplay}>
        {children}
      </NavLinkIcons>
    </>
  );
}

export default IconNavigation;
