import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Dish, FoodType } from '../types'

type Resposta = {
  orderId: string
}

type PurchasePayload = {
  products: [
    {
      id: number
      price: number
    }
  ]
  delivery: {
    receiver: string
    address: {
      description: string
      city: string
      zipCode: string
      number: number
      complement?: string
    }
  }
  payment: {
    card: {
      name: string
      number: string
      code: number
      expires: {
        month: number
        year: number
      }
    }
  }
}

const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/efood/'
  }),
  endpoints: (builder) => ({
    getRestaurants: builder.query<FoodType[], void>({
      query: () => 'restaurantes'
    }),
    getDishById: builder.query<Dish, number>({
      query: (id) => `cardapio/${id}`
    }),
    getFeaturedDish: builder.query<Dish, void>({
      query: () => 'restaurantes/destaque'
    }),
    // Adicionando a mutação purchase
    purchase: builder.mutation<Resposta, PurchasePayload>({
      query: (body) => ({
        url: 'checkout',
        method: 'POST',
        body
      })
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetDishByIdQuery,
  useGetFeaturedDishQuery,
  usePurchaseMutation // Exportando a mutação purchase
} = api

export default api
