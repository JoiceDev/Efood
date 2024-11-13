import styled, { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
`
