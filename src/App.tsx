
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './screens/home'
import HomeFeature from './features/home-feature'
import Clients from './features/clients'

function App() {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}>
        <Route path='' element={<HomeFeature/>} />
        <Route path='clients' element={<Clients/>} />
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
