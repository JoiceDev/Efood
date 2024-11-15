import styled from 'styled-components'

export const Modal = styled.div`
  display: none;

  &.visible {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    padding: 16px;
    z-index: 99;
  }

  .foodImg {
    margin-left: 16px;
    margin-right: 8px;
    width: 280px;
    height: 280px;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.73);
  }

  .container {
    padding: 16px;
    background-color: #e66767;
    color: #fff;
    max-width: 1024px;
    max-height: 344px;
    display: flex;
    position: relative;
    z-index: 1;
  }

  .pointer {
    cursor: pointer;
  }

  .title-close {
    display: flex;
    justify-content: space-between; /* Alinha o título à esquerda e o ícone à direita */
    align-items: center; /* Alinha verticalmente os itens */
    margin-bottom: 8px;
  }
`

export const ModalButton = styled.button`
  color: #e66767;
  background-color: #ffebd9;
  font-size: 14px;
  font-weight: 700;
  padding: 4px 6px;
  margin-left: 16px;
  margin-bottom: 8px;
  text-decoration: none;
  border: 1px;
  display: inline-block;
  width: fit-content;
  cursor: pointer;
`

export const ModalTitle = styled.h3`
  margin-left: 16px;
  font-size: 18px;
  line-height: 24px;
`

export const ModalDescription = styled.p`
  font-size: 14px;
  weight: 400;
  padding: 16px;
  line-height: 22px;

  span {
    display: block;
    margin-top: 16px;
  }
`
