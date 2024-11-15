import styled from 'styled-components'
import bgHeader from '../../assets/images/bgHeader.png'

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
  }

  h1 {
    font-size: 36px;
    font-weight: 900;
  }
`
