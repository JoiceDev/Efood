import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ImageHeader = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 280px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1; /* Fica acima da imagem */
`

export const BannerContainer = styled.div`
  position: relative; /* Posiciona dentro do banner */
  top: 0;
  left: 0;
  width: 1366px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Alinha os textos no final do banner */
  z-index: 2; /* Fica acima do overlay */

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 16px; /* Reduz o espaçamento em telas menores */
  }
`

export const Title = styled.h2`
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  position: absolute;
  top: -80px;
  margin: 0;
  z-index: 2;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 24px;
  }
`

export const Subtitle = styled.h3`
  font-size: 18px;
  font-weight: 400;
  color: #fff;
  margin: 0;
  position: absolute;
  z-index: 2;
  top: -224px;

  @media (max-width: ${breakpoints.tablet}) {
    font-size: 14px;
  }
`
