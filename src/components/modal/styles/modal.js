import styled from "styled-components/macro";

export const Container = styled.div`
  background: #000000a3;
  color: white;
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 500;
  display: flex;
  align-items: center;

  -webkit-animation: fadeIn linear 0.3s;
  -moz-animation: fadeIn linear 0.3s;
  -o-animation: fadeIn linear 0.3s;
  -ms-animation: fadeIn linear 0.3s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Inner = styled.div`
  margin: auto;
  color: black;
  width: max-content;
  background: white;
  border: 1px solid #555555;
`;

export const CloseButton = styled.button`
  font-size: 16px;
  padding: 1rem;
  background: none;
  border: none;
  cursor: pointer;
  float: right;
`;
