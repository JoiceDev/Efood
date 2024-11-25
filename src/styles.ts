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
