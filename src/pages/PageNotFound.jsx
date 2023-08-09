import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const StyledPageNotFound = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  /* background-color: var(--color-blue); */
  border: 1px solid var(--color-white);
  border-radius: 2rem;

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h5 {
    font-size: 3.2rem;
    margin-bottom: 6.4rem;
  }

  & button {
    font-size: 2rem;
    font-weight: 700;
    text-decoration: none;
    padding: 2rem 4.8rem;
    border: none;
    border-radius: 100rem;
    color: var(--color-white);
    background-image: var(--button-linear);
    cursor: pointer;
  }
`;

function PageNotFound() {
  const navigate = useNavigate();

  function moveBack() {
    navigate(-1);
  }

  return (
    <StyledPageNotFound>
      <Box>
        <h5>The page you are looking for could not be found 😢</h5>
        <button onClick={moveBack}>&larr; Go back</button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
