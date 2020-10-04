import styled from 'styled-components'

export const Container = styled.div`
  width: 70%;
  margin: 2rem auto;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 0.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const Title = styled.h2``

export const Card = styled.div`
  height: 23rem;
  border: 1px solid #000000;
  border-radius: 0.5rem;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.7),
      rgba(0, 0, 0)
    ),
    url(${(props) => props.img});
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;

  :hover {
    cursor: pointer;
  }
`

export const CardInformation = styled.div`
  padding: 1rem;
  position: absolute;
  bottom: 0;
`

export const CardTitle = styled.h3`
  font-size: 12px;
  color: white;
  text-transform: uppercase;
`

export const Description = styled.p`
  color: white;
  font-size: 12px;
`
