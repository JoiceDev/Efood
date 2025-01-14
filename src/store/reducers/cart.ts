import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dish } from '../../types'

type CartState = {
  items: Dish[]
  dish: Dish[]
  isOpen: boolean
  isAddress: boolean
  isPayment: boolean
  isConfirmed: boolean
  isCart: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false,
  isAddress: false,
  isPayment: false,
  isConfirmed: false,
  isCart: true,
  dish: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      const dishExists = state.items.some(
        (item) => item.id === action.payload.id
      )

      if (dishExists) {
        const userConfirmed = window.confirm(
          'Você já possui esse prato em seu carrinho, tem certeza que deseja adicionar outro?'
        )
        if (userConfirmed) {
          const newDish = { ...action.payload, id: Date.now() }
          state.items.push(newDish)
        }
      } else {
        state.items.push(action.payload)
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    closeAndFinish: (state) => {
      state.isOpen = false
      state.isCart = true
      state.isConfirmed = false
      state.isAddress = false
      state.isPayment = false
      state.items = []
    },
    startCheckout: (state) => {
      state.isCart = false
      state.isConfirmed = false
      state.isAddress = true
      state.isPayment = false
    },
    payment: (state) => {
      state.isConfirmed = false
      state.isAddress = false
      state.isPayment = true
      state.isCart = false
    },
    confirmed: (state) => {
      state.isConfirmed = true
      state.isAddress = false
      state.isPayment = false
      state.isCart = false
    },
    backtoCart: (state) => {
      state.isAddress = false
      state.isPayment = false
      state.isConfirmed = false
      state.isCart = true
    }
  }
})

export const {
  add,
  remove,
  open,
  close,
  startCheckout,
  payment,
  confirmed,
  backtoCart,
  closeAndFinish
} = cartSlice.actions

export default cartSlice.reducer
