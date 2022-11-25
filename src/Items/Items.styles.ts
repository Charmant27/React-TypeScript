import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  border-radius:0.5rem;
  padding: 1.5rem;
  background-color: #ffffff;

  div {
    font-family: roboto, arial, helvetica;
    padding: 1rem;
    height: 100%;
  }

  .item-container {
    border-radius: 1rem;
  }

  .price {
    color: #0c4a6e;
  }

  button {
    background-color: #0c4a6e;
    border-radius: 0.5rem;
    margin-left: 5rem;
    margin-right: 5rem;
  }

  button:hover {
    background-color: #ffffff;
    border: 1px solid #0c4a6e;
    color: #0c4a6e;
  }
`;