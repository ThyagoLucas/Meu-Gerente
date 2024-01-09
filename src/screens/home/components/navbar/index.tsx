import { NavbarContainer } from './style'
import { SCREENS } from '../../../../utils/screens'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    const location = useLocation()

    const itemsMenu = [
        {name: 'Início', icon: '', route: SCREENS.HOME, },
        {name: 'Clientes', icon: '', route: SCREENS.CLIENTS}
    ]

  return (
    <NavbarContainer>
        {itemsMenu.map((value)=>{
            return(
            <div className={`${location.pathname == value.route ? "selected" : ""}`} onClick={()=> navigate(value.route)} key={value.name} >
                <p>{value.icon}</p>
                <p>{value.name}</p>
            </div>
            )
        })}
    </NavbarContainer>
    
  )
}
