import styled from 'styled-components'

export const ImageHeader = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  position: relative; /* Não usa z-index */
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 280px;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1; /* Mantém o overlay acima da imagem */
`

export const Title = styled.h2`
  position: absolute;
  width: 676px;
  bottom: 32px; /* Ajustado para evitar sobreposição com MenuHeader */
  left: 160px;
  font-size: 32px;
  font-weight: 900;
  color: #fff;
  z-index: 2;
`

export const Subtitle = styled.h3`
  position: absolute;
  top: 24px;
  left: 160px;
  z-index: 2;
  color: #fff;
  font-weight: 100;
  font-size: 32px;
`
