import { HomeContainer} from './style'
import Navbar from './components/navbar'
import Body from './components/body'
import Header from './components/header'
import Theme from '../../utils/styles/Theme'
import { useMediaQuery } from './hooks/useHomeScreem'


function Home() {
  const isPhone = useMediaQuery(Theme.breakpoints.values.sm)

  return (
    <HomeContainer>
      
        <Header/>
        {isPhone? (

          <>
            <Body/>
            <Navbar/>  
          </>
        ):(
          <>
            <Navbar/>
            <Body/>
          </>
        )
        }
        
    </HomeContainer>
  )
}

export default Home