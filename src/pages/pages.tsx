import { createBrowserRouter } from 'react-router-dom'

import Home from './Home'
import MenuPage from './MenuPage'
import Checkout from '../components/Checkout'

export const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home /> // Home page
  },
  {
    path: '/food/:id', // Rota dinâmica para um restaurante específico
    element: <MenuPage /> // Exibe os detalhes do restaurante
  },
  {
    path: '/delivery/',
    element: <Checkout priceTotal={0} />
  }
])
