import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CheckoutContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 100;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;

  &.is-open {
    opacity: 1;
    pointer-events: all;
  }
`

export const SideBar = styled.aside`
  background-color: #e66767;
  z-index: 100;
  width: 360px;
  padding: 32px 8px 16px 8px;
  color: #fff;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.3s ease;

  ${CheckoutContainer}.is-open & {
    transform: translateX(0);
  }
`

export const DeliverContainer = styled.div`
  display: none;
  color: #fff;
  padding: 0 8px;

  &.show {
    display: block;
  }

  .CEPNumber {
    display: flex;
    column-gap: 34px;
  }

  .buttomContainer {
    margin-top: 24px;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    margin-bottom: 16px;
  }

  label {
    font-weight: 700;
    font-size: 14px;
  }
`

export const Field = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 16px;

  input {
    width: 100%;
    padding: 8px;
    background-color: #ffebd9;
    border: none;
    margin: 8px 0;
    color: #e66767;
    font-size: 14px;

    &:focus {
      outline: none;
    }
  }

  small {
    color: #ffebd9;
    font-size: 12px;
  }
`

export const PaymentContainer = styled.div`
  display: none;
  color: #fff;
  padding: 0 8px;

  &.show {
    display: block;
  }

  p {
    font-size: 16px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  label {
    font-weight: 700;
    font-size: 14px;
  }

  .buttomContainer {
    margin-top: 24px;
  }

  .fieldContainer {
    display: flex;
    column-gap: 34px;

    #cardNumber {
      width: 228px;
    }

    #mesVencimento {
      width: 155px;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    .fieldContainer {
      display: block;

      #cardNumber,
      #mesVencimento {
        width: 100%;
      }
    }
  }
`

export const ConfirmedContainer = styled.div`
  display: none;
  color: #fff;
  padding: 0 8px;

  &.show {
    display: block;
  }

  .buttomContainer {
    margin-top: 24px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    line-height: 18.75px;
    margin-bottom: 16px;
  }
`

export const AddButton = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  padding: 4px;
  font-weight: 700;
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  display: block;
  width: 100%;
  cursor: pointer;
  margin-bottom: 8px;
`

export const SubmitButton = styled(AddButton)`
  margin-bottom: 8px;
`
