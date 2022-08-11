import  styled from "styled-components";


export const StyledButton = styled("button")`
  background-color: #00866e;
  color: white;;
  border-radius: 50px;
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 400;

  &:hover {
    transform: scale(1.005);
    opacity: 0.6;
  }

 
`