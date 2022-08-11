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

  .ImgCtn {
    display: flex;
    width: 100%;
    z-index: 1;
    top: 1rem;
    position: relative;
    height: 30vh;
    justify-content: center;
    align-items: center;
  }
`;

export const ProductImage = styled("div")`
  display: flex;
  height: 100%;
  margin: 0 auto;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProductContent = styled("div")`
  width: 100%;
  padding: 1rem;
  height: 100%;
  background: #ffffff;
  border-radius: 10px;

  .productName {
    h2 {
      color: #775d0e;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }
    h3 {
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
      margin-top: 0.5rem;
    }
  }

  .productWeightPrice {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0.5rem;

    .productWeight {
      color: #706f7d;
      font-size: 1.2rem;
    }
    .productPrice {
      color: #000000;
      font-size: 1.2rem;
      font-weight: bold;
      background-color: #f2f8f7;
      padding: 0.5rem;
      border-radius: 10px;
    }
  }
`;

export const CounterCtn = styled("div")`
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
`;

export const DeliveryCtn = styled("div")`
  display: flex;
  flex-direction: column;
  border-top: 1px solid #f2f8f7;
  border-bottom: 1px solid #f2f8f7;
  padding: 0.5rem;

  .delivery {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2rem;

    h3 {
      font-size: 1rem;
      font-weight: bold;
      margin: 0;
    }

    p {
      color: #ffffff;
      background: #00866e;
      border-radius: 50px;
      padding: 0 1rem;
      text-align: center;
      font-size: 1rem;
      margin: 0;
    }
  }
`;

export const AboutCtn = styled("div")`
  display: flex;
  flex-direction: column;

  h2 {
    font-size: 1.2rem;
    margin: 0;
  }
`;
