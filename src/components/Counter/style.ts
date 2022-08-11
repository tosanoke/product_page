import styled from "styled-components";


export const QtyController = styled("div")`
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        background: #f2f8f7;
        border-radius: 50px;
        padding: 0 1.2rem;
        height: 4rem;
        button {
          background-color: transparent;
          color: #00866e;
          border: none;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0;
          cursor: pointer;
          font-size: 1rem;
        }

        input {
          font-weight: bold;
          font-size: 1.5rem;
          color: #000000;
          width: 4rem;
          height: 2.5rem;
          background-color: transparent;
          outline: none;
          border: none;
          text-align: center;
          & input[type="number"] {
            -moz-appearance: textfield;
          }
          &::-webkit-outer-spin-button,
          &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
          }
        }
    
`