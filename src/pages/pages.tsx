import { createBrowserRouter } from 'react-router-dom'

import Menu from '../components/Menu'
import Home from './Home'

export const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home /> // Home page
  },
  {
    path: '/food/:id', // Rota dinâmica para um restaurante específico
    element: <Menu /> // Exibe os detalhes do restaurante
  }
])
