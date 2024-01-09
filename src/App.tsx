
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import './App.css'
import Home from './screens/home'
import HomeFeature from './features/home-feature'
import Clients from './features/clients'
import Theme from './utils/styles/Theme'

function App() {


  return (
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
          <Route path='' element={<HomeFeature/>} />
          <Route path='clients' element={<Clients/>} />
        </Route>
      </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
