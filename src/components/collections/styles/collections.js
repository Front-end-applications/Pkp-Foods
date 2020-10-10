import styled from 'styled-components/macro'

export const Container = styled.div`
  width: 70%;
  margin: 2rem auto;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  margin-bottom: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2``

export const Card = styled.div`
  height: 15rem;
  border: 1px solid #000000;
  border-radius: 0.5rem;
  background-image: url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;

  :hover {
    cursor: pointer;
  }
`;

export const CardInformation = styled.div`
  position: absolute;
  bottom: 12px;
  width: 100%;
  text-align: center;
`

export const CardTitle = styled.h3`
  margin: 0 0.5rem;
  background-color: #ac1830;
  border: 1px solid white;
  font-size: 12px;
  color: white;
  text-transform: uppercase;
  padding: 0.4rem 0;
`;
