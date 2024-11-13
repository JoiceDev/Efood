import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GlobalCss, Container } from './styles'

import Restaurants from './components/Restaurants'
import Home from './pages/Home'
import ItalianFood from './pages/ItalianFood'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/food',
    element: <ItalianFood />
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Container>
        <RouterProvider router={rotas} />
      </Container>
    </>
  )
}

export default App
