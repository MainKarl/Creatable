import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'
import {
  ColorModeScript,
  ColorModeProvider,
  ThemeProvider,
  theme,
  CSSReset
} from '@chakra-ui/react'
import themes from './theme'

import AccountLayout from './Components/AccountLayout'
import Login from './Pages/User/Login'
import Register from './Pages/User/Register'

import Layout from './Components/Layout'
import CharacterList from './Pages/Characters/CharacterList'
import WeaponList from './Pages/Weapons/WeaponList'
import ArmorList from './Pages/Armors/ArmorList'
import ClassList from './Pages/Classes/ClassList'

const Index = () => {
  return (
  <HashRouter>
    <Routes>
      <Route key={ 'accountLayout' } path={ "/" } element={ <AccountLayout /> }>
        <Route key={ 'login' } index={ true } element={ <Login /> } />
        <Route key={ 'register' } path={ "register" } element={ <Register /> } />
      </Route>
      <Route key={ 'normalLayout'} path={ "/" } element={ <Layout /> }>
        <Route key={ 'characters' } path="characters" element={ <CharacterList /> } />
        <Route key={ 'weapons' } path="/weapons" element={ <WeaponList /> } />
        <Route key={ 'armors' } path="/armors" element={ <ArmorList /> } />
        <Route keys={ 'classes' } path="/classes" element={ <ClassList /> } />
      </Route>
    </Routes>
  </HashRouter>
  )
}

export default Index;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <CSSReset />
        <ColorModeScript initialColorMode={ themes.config.initialColorMode } />
        <Index />
      </ColorModeProvider>
    </ThemeProvider>
  </React.StrictMode>
);
