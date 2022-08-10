import styled from "styled-components";

export const Container = styled("div")`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Content = styled("div")`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 90%;
  background-color: #ffd966;
  border-radius: 10px;

 
`;

export const ImageCtn = styled("div")`
    position:relative;
    z-index: 1;
    width: 6rem;
    display: flex;
    max-height: 8rem;
    margin: 0 auto;
    top: 1rem;

    img { 
        width: 100%;
        height: 100%;
    }
 `

 export const OrderContent = styled("div")`
    width: 100%;
    padding: 2rem;
    height: 100%;
    background: #ffffff;
    border-radius: 10px;
    
 `
