import { createBrowserRouter } from 'react-router-dom'

import Home from './Home'
import MenuPage from './MenuPage'

export const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home /> // Home page
  },
  {
    path: '/food/:id', // Rota dinâmica para um restaurante específico
    element: <MenuPage /> // Exibe os detalhes do restaurante
  }
])
