import styled from 'styled-components'
import bgHeader from '../../assets/images/bgHeader.png'
import { breakpoints } from '../../styles'

export const HeaderBar = styled.header`
  background-image: url(${bgHeader});
  background-size: cover;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  img {
    max-width: 125px;
    width: 100%;
    height: auto;
    margin-bottom: 136px;

    @media (max-width: ${breakpoints.tablet}) {
      max-width: 25%;
      height: auto;
      margin-bottom: 80px;
    }
  }

  h1 {
    font-size: 36px;
    font-weight: 900;

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 16px;
      margin: 0 8px;
    }
  }
`
