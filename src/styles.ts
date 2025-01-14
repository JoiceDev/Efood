import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}

  body {
  background-color: #fff8f2;
  color: #E66767;
  }
`
export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}) {
    max-width: 80%;
  }

  @media (max-width: ${breakpoints.tablet}) {
    position: relative;
    flex-direction: column; /* empilhar os itens */
    height: auto;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
  z-index: 50;
`

export const SideBar = styled.aside`
  background-color: #e66767;
  z-index: 100;
  width: 360px;
  color: #fff;
  padding: 32px 8px 16px 8px;
`
