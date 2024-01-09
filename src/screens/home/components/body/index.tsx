import { BodyHomeConatiner } from './style'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <BodyHomeConatiner>
        <Outlet></Outlet>
    </BodyHomeConatiner>
  )
}

export default Body