import styled from 'styled-components'

export const ImageHeader = styled.img`
  width: 100%; /* A imagem ocupa toda a largura */
  height: 280px; /* Altura da segunda imagem */
  object-fit: cover; /* Garante que a imagem preencha a área sem distorcer */
  // margin-top: -20px;
  z-index: 0; /* Garante que a imagem fique abaixo do overlay */
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 280px;
  background: rgba(0, 0, 0, 0.5); /* Cor e opacidade do overlay */
  z-index: 1;
`
