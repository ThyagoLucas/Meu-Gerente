import React from 'react'
import { HeaderHomeConatiner, HomeContainer,BodyHomeConatiner } from './style'
import { Outlet } from 'react-router-dom'
import Navbar from './components/navbar'

function Home() {
  return (
    <HomeContainer>
        <HeaderHomeConatiner>Meu Gerente</HeaderHomeConatiner>

        <BodyHomeConatiner>
          <Outlet></Outlet>
        </BodyHomeConatiner>

        <Navbar/>

    </HomeContainer>
  )
}

export default Home