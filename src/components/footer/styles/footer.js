import styled from 'styled-components/macro'

export const Container = styled.div`
  background: #141414;
`

export const Inner = styled.div`
  display: flex;
  padding: 0.5rem;
  margin: auto;
  max-width: 70%;
  flex-direction: column;

  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
  grid-gap: 15px;

  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }
`

export const Link = styled.a`
  color: #757575;
  font-size: 12px;
  margin-bottom: 0.5rem;
  text-decoration: none;
`

export const Title = styled.p`
  color: white;
  font-size: 12px;
  margin-bottom: 1rem;
  text-transform: uppercase;
`

export const Text = styled.p`
  font-size: 10px;
  color: #757575;
  margin-bottom: 40px;
`

export const Break = styled.div`
  flex-basis: 100%;
  height: 0;
`
