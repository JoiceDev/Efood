import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { GlobalCss } from './styles'
import { rotas } from './pages/pages'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <>
        <GlobalCss />
        <RouterProvider router={rotas} />
      </>
    </Provider>
  )
}

export default App
