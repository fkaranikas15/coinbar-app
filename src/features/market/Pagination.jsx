import { useState } from "react";
import { styled } from "styled-components";

const StyledPagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-top: 6.4rem;
  margin-bottom: 9.6rem;
`;

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.4rem;
  height: 2.4rem;
  font-size: 2.4rem;
  font-weight: 500;
  padding: 3.2rem;
  border: none;
  border-radius: 50%;
  cursor: pointer;

  &:nth-child(${(props) => props.activebutton}) {
    background: var(--text-linear);
    color: var(--color-white);
  }
`;

function Pagination({ pages, setActivePage }) {
  const paginationButton = [];
  const [activeButton, setActiveButton] = useState(1);

  function handleActive(i) {
    setActiveButton(i);
    setActivePage(i);
    window.scrollTo({
      top: window.pageYOffset - 800,
      behavior: "smooth",
    });
  }

  for (let i = 1; i <= pages; i++) {
    paginationButton.push(
      <StyledButton
        activebutton={activeButton}
        key={i}
        onClick={() => handleActive(i)}
      >
        {i}
      </StyledButton>
    );
  }

  return <StyledPagination>{paginationButton}</StyledPagination>;
}

export default Pagination;
