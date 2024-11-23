import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Dish } from '../../types'

type CartState = {
  items: Dish[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      // Verificar se o prato já existe no carrinho
      const dishExists = state.items.some(
        (item) => item.id === action.payload.id
      )

      if (dishExists) {
        const userConfirmed = window.confirm(
          'Você já possui esse prato em seu carrinho, tem certeza que deseja adicionar outro?'
        )
        if (userConfirmed) {
          const newDish = { ...action.payload, id: Date.now() } // Gerando novo ID com base no timestamp
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
    }
  }
})

// cartSlice.actions.add ↓ desestruturação para exportar
export const { add, open, close, remove } = cartSlice.actions

export default cartSlice.reducer
