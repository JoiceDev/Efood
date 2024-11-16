import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Dish, FoodType } from '../types'

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
    })
  })
})

export const {
  useGetRestaurantsQuery,
  useGetDishByIdQuery,
  useGetFeaturedDishQuery
} = api

export default api
